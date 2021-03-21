export default (Vue)=>{
  // 图片属性
    class ReactiveListener{
      constructor({el,src,options,elRender}){
        this.el = el;
        this.src = src;
        this.options = options;
        this.elRender = elRender;
      }
    }
    return class LazyClass{
      constructor(options){
        this.options = options;
        this.listenerQueue = []
        this.lazyLoadHandler = ()=>{
          console.log(1)
        }
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
          parentList.addEventListener('scroll',this.lazyLoadHandler)
          // 将图片创建一个个实例，将参数带入
          let src = bindings.value;//就是src,图片的真是路径
          let listener = new ReactiveListener({
            el,//真是的dom，就是img标签
            src,
            options:this.options,
            elRender:this.elRender
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