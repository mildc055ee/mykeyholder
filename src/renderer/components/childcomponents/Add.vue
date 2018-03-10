<template>
<div class="container">
    <div class="columns">
        <b-field label="Content" class="column">
            <b-input v-model="content"></b-input>
        </b-field>
        <b-field label="UserName" class="column">
            <b-input v-model="username" type="string"></b-input>
        </b-field>
        <b-field label="Email" class="column">
            <b-input v-model="email"  type="email"></b-input>
        </b-field>
        <b-field label="Password" class="column">
            <b-input v-model="password"></b-input>
        </b-field>
    </div>
    <div class="button is-primary outlined"> regist </div>
</div>
</template>

<script>
export default {
  props:{
      value: Array
  },
  data:{
    newpass: {
          "content": '',
          "username": '',
          "email": '',
          "password": ''
    }
  }
}
</script>

