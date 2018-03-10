<template>
<div>
  <section class="hero is-primary">
      <div class="hero-body">
          <div class="container">
              <h1 class="title">Key Manager</h1>
              <h2 class="subtitle"> Hello electron vue!</h2>
          </div>
      </div>
  </section>
  <section>
    <div class="container">
        <b-tabs>
            <b-tab-item label="Table">
                <b-table
                    :data = "data"
                    :columns = "columns"
                    :selected.sync = "selected"
                    focusable>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Selected">
                <pre>{{ selected }}</pre>
            </b-tab-item>
        </b-tabs>
    </div>
  </section>

  <section class="section footer">
      <div class="columns">
          <b-field label="Content" class="column">
              <b-input v-model="content"></b-input>
          </b-field>
          <b-field label="UserName" class="column">
              <b-input v-model="username"></b-input>
          </b-field>
          <b-field label="Email" class="column">
              <b-input v-model="email"  type="email"></b-input>
          </b-field>
          <b-field label="Password" class="column">
              <b-input v-model="password"></b-input>
          </b-field>
      </div>
  </section>
</div>
</template>

<script>
    export default {
        data () {
            let data = [
                {'content':'twitter', 'username':'foo', 'email':'fuga@example.org', 'password': 'fizz'},
                {'content':'facebook', 'username':'goo', 'email':'lazy@example.org', 'password': 'buzz'},
                {'content':'instagram', 'username':'hoo', 'email':'hoge@example.org', 'password': 'fizzbuzz'}
            ]

            return {
                data,
                selected: data[0],
                columns:[
                    {
                        field: 'content',
                        label: 'Content',
                        width: '30',
                    },
                    {
                        field: 'username',
                        label: 'User Name'
                    },
                    {
                        field: 'email',
                        label: 'Email'
                    },
                    {
                        field: 'password',
                        label: 'Password'
                    }
                ]
            }
        },
        /*
        methods:{
            insert: function () {
                this.data.push(JSON.stringify(
                    {"content": this.content,
                     "username": this.username,
                     "email": this.email,
                     "password": this.password
                    }
                ))
            }
        }
        */
    }
</script>