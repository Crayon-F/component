
export default{
  props:{
    t:{
      type:String | Number
    }
  },
  methods:{
    handleClick(){
      console.log(11)
    },
    handleInp(e){
      console.log(e)
      this.val = e.target.value
    }
  },
  data(){
    return{
      val:'inp'
    }
  },
  render(){
    let tag = 'h'+this.t
    // this.$slots.default代表默认值
    return (
      <div>
        <tag onClick={this.handleClick}>{this.$slots.default}</tag>
        <input value={this.val} onInput={this.handleInp}></input>
      </div>
    )
  }
}