<template>
  <div class="columns">
      <b-field class="column" label="Content">
          <b-input type="text" v-model="value.content"></b-input>
      </b-field>
      <b-field class="column" label="User Name">
          <b-input type="text" v-model="value.username"></b-input>
      </b-field>
      <b-field class="column" label="Email">
          <b-input type="email" v-model="value.email"></b-input>
      </b-field>
      <b-field class="column" label="Password">
          <b-input type="text" v-model="value.password"></b-input>
      </b-field>
  </div>
</template>

<script>
    export default{
        props: {
            value: Object
        }
    }    
</script>
