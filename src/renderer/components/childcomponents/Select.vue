<template>
  <pre>{{ value }}</pre>
</template>

<script>
export default {
  props: {
    value: Object
    },
    /*
  computed:{
    select: {
      get () {
        return this.value
      },
      set (input){
        this.updated(input)
      }
    }
  },
  methods:{
    updated: function(diff){
      this.$emit('input',{...this.value,...diff})
    }
  }
  */
}
</script>
