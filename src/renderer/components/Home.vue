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

            <b-tab-item label="Edit">
                <edit-tab v-model="selected"></edit-tab>
            </b-tab-item>
            
            <b-tab-item label="Register">
                <add-tab v-model="data"></add-tab>
            </b-tab-item>
            
            <b-tab-item label="Selected">
                <select-tab v-model="selected"/>
            </b-tab-item>
        </b-tabs>
    </div>
    <button class="button is-danger" @click="alert">Delete
    </button>
  </section>
</div>
</template>

<script>
    import AddTab from './childcomponents/Add.vue'
    import EditTab from './childcomponents/Edit.vue'
    import SelectTab from './childcomponents/Select.vue'

    export default {
        components:{
            AddTab,
            SelectTab,
            EditTab,
        },
        data () {
            let show = false
            let data = [
                {'content':'twitter', 'username':'foo', 'email':'fuga@example.org', 'password': 'fizz'},
                {'content':'facebook', 'username':'goo', 'email':'lazy@example.org', 'password': 'buzz'},
                {'content':'instagram', 'username':'hoo', 'email':'hoge@example.org', 'password': 'fizzbuzz'}
            ]

            return {
                data,
                show,
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
        methods:{
            alert() {
                this.$dialog.confirm({
                    title: 'Caution',
                    message: 'This action cannot be undone. Are you sure?',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                        this.erase()
                    }
                })
            },
            erase (){
                if(this.data.length === 0) return
                let target = this.data.indexOf(this.selected)
                this.data.splice(target, 1)
            }
        }
    }
</script>