<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <span>{{errMesg}}</span>
  </div>
</template>
<script>
import Schema from 'async-validator'
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
  methods: {
    validate () {
      if (this.prop) {
        // 去拿校验规则
        let rules = this.elForm.rules[this.prop];
        let val = this.elForm.model[this.prop]
        let descriptor = {
          // 值：校验规则
          [this.prop]: rules
        }
        let schema = new Schema(descriptor)
        let source = { [this.prop]: val }
        return schema.validate(source, (err) => {
          if (err) {
            console.log(err[0].message)
            this.errMesg = err[0].message;
            return;
          }
          this.errMesg = ''
        });
      }
    }

  },
  mounted () {
    this.$on('validate', function () {
      this.validate()
    })
  }
}
</script>