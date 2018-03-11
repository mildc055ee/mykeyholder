<template>
<div class="container">
    <div class="columns">
        <b-field label="Content" class="column">
            <b-input v-model="newpass.content"></b-input>
        </b-field>
        <b-field label="UserName" class="column">
            <b-input v-model="newpass.username" type="string"></b-input>
        </b-field>
        <b-field label="Email" class="column">
            <b-input v-model="newpass.email"  type="email"></b-input>
        </b-field>
        <b-field label="Password" class="column">
            <b-input v-model="newpass.password"></b-input>
        </b-field>
    </div>
    <div class="button is-primary outlined" @click="regist"> regist </div>
</div>
</template>

<script>
export default {
  props:{
      value: Array
  },
  data(){
    let newpass = {
          "content": '',
          "username": '',
          "email": '',
          "password": ''
    }
    return {
        newpass
    }
  },
  methods:{
      regist(){
          this.value.push(this.newpass)
          this.newpass.content=''
          this.newpass.username=''
          this.newpass.email=''
          this.newpass.password=''
      }
  }
}
</script>

