let tableControl = new Vue({
  el: '#pass-table',
  data:{
    passlist:[
      {content: 'lazy', id: 'foo', email: 'hoge@example.com', pass:'fizz'},
      {content: 'busy', id: 'hoo', email: 'foga@example.com', pass:'buzz'},
    ],
    newContents:'',
    newID:'',
    newEmail:'',
    newPass:''
  },

  methods: {
    /*
    createPass: function() {
      this.passlist.push({contents: this.newContents, id: this.newID, email:this.newEmail, pass: this.newPass})
    },
    */

    deletePass: function(index) {
      this.passlist.splice(index, 1);
    }
  }
})
