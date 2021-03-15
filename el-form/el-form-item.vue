<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <span>{{errMesg}}</span>
  </div>
</template>
<script>
import Schema from 'async-validate'
export default {
  inject: ['elForm'],
  name: 'el-form-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      errMesg: ''
    }
  },
  mounted () {
    this.$on('validate', function () {
      // 去拿校验规则
      let rules = this.elForm.rules[this.prop];
      let val = this.elForm.model[this.prop]
      console.log(this.prop, val)
      let descriptor = {
        // 值：校验规则
        [this.prop]: rules
      }
      let schema = new Schema(descriptor)
      let source = { [this.prop]: val }
      console.log(source)
      schema.validate(source, function (err, res) {
        console.dir(res.errors);
      });
    })
  }
}
</script>

