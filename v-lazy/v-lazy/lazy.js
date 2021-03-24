import { throttle } from 'lodash'
export default (Vue)=>{
  // 图片属性
    class ReactiveListener{
      constructor({el,src,options,elRender}){
        this.el = el;
        this.src = src;
        this.options = options;
        this.elRender = elRender;
        this.state = {loading:false}
      }
      checkInview(){
        // 获取图片的位置
        let { top } = this.el.getBoundingClientRect();
        // 在可是区域内
        return top < window.innerHeight * this.options.preLoad
      }
      load(){
        // 开始加载，默认是loading状态
        this.elRender(this,'loading')
        // 图片开始加载
        loadImageAsync(this.src,()=>{
          // 成功
          this.state.loading = true;
          this.elRender(this,'loaded')
        },()=>{
          // 失败
          this.elRender(this,'error')
        })
      }
    }
    function  loadImageAsync(src,resolve,reject) {
      let img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    }
    return class LazyClass{
      constructor(options){
        this.options = options;
        this.listenerQueue = []
        this.bindHandler = false
        // throttle添加节流
        this.lazyLoadHandler = throttle(()=>{
          // 判断图片是否在可是区域内
          let catIn = false;
          this.listenerQueue.forEach(item=>{
            // console.log(item);
            if(item.state.loading) return; //如果已经加载过，就不用去加载了
            catIn = item.checkInview()
            catIn && item.load()
          })
        },500)
      }
      add(el,bindings){
        // 因为这里拿不到真实的dom
        Vue.nextTick(()=>{
          // 1.需要父盒子添加滚动事件
          // 2.判断当前图片是否在可是区域内
          function getScrollParent(){
            let parent = el.parentNode;
            while(parent){
              if(/scroll/.test(getComputedStyle(parent)['overflow'])){
                return parent;
              }
              parent = parent.parentNode;
            }
            return parent;
          }
          let parentList = getScrollParent();
          // 给图片的带有overflow:"scroll"的父元素添加滚动事件
          // this.bindHandler判断是否绑定过
          if(!this.bindHandler){
            parentList.addEventListener('scroll',this.lazyLoadHandler)
            this.bindHandler = true;
          }
          
          // 默认先调用一次
          this.lazyLoadHandler()
          // 将图片创建一个个实例，将参数带入
          let src = bindings.value;//就是src,图片的真是路径
          // console.log(this.options)
          let listener = new ReactiveListener({
            el,//真是的dom，就是img标签
            src,
            options:this.options,
            elRender:this.elRender.bind(this)
          })
          this.listenerQueue.push(listener)
        })
      }
      // 根据当前状态state,去给当前元素绑定显示什么图片路径
      elRender(listener,state){
        let { el,options } = listener;
        let src = '';
        switch (state) {
          case 'loading':
            src = options.loading || ''
            break;
          case 'error':
            src = options.error || ''
            break;
          default:
            src = listener.src || ''
            break;
        }
        el.src = src;
      }
    }
  }

  // 防抖
  // 在一段时间内，不停的触发，最终只触发一次
  // 节流
  // 默认每间隔一段时间执行一次