let passlist = [
  {content: 'lazy', id: 'foo', email:'hoge@example.com', pass: 'fizz'},
  {content: 'busy', id: 'hoo', email:'fuga@example.com', pass: 'buzz'}
]

Vue.component('modal',{
  template:"#modal-template"
});

let tableControl = new Vue({
  el: '#pass-table',
  data:{
    showModal: false,
    passlist
  },

  methods: {
    deletePass: function(index) {
      this.passlist.splice(index, 1);
    },
    modifyPass: function(elm) {

    }
  }
});

let addList = new Vue({
  el:'#pass-adder',

  data:{
    newContents:'',
    newID:'',
    newEmail:'',
    newPass:''
  },

  methods:{
    createPass: function() {
      tableControl.passlist.push({content: this.newContents, id: this.newID, email: this.newEmail, pass: this.newPass});
    }
  }
});
