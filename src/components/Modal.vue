<template>
  <div>
  <div class="md-modal modal-msg md-modal-transition " :class="{'md-show':mdShow}">
    <div class="md-modal-inner">
      <div class="md-top">
        <button class="md-close" @click="closeModal">Close</button>
      </div>
      <div class="md-content">
        <div class="confirm-tips">
        <slot name="message"></slot>
        </div>
        <div class="btn-wrap">
          <slot name="btnGroup"></slot>
        </div>
      </div>
    </div>

  </div>
  <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
    props:['mdShow'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    closeModal(){
        this.$emit('close')//让父组件定义的close事件执行
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
