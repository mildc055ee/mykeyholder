let tableControl = new Vue({
  el: '#table',
  data:{
    tasks:[
      {content: 'lazy', id: 'foo', email: 'hoge@example.com', pass:'fizz', isDeleted: false},
      {content: 'busy', id: 'hoo', email: 'foga@example.com', pass:'buzz', isDeleted: false},
    ],
    newContents:'',
    newID:'',
    newEmail:'',
    newPass:''
  }
  /*
  methods: {
    createPass:()=>{
      this.tasks.push({contents: this.newContents, id: this.newID, email:this.newEmail, pass: this.newPass, isDeleted: false}),
      this.newContents:'',
      this.newID:'',
      this.newEmail:'',
      this.newPass:''
    },
    deletePass: del => {
      this.tasks.forEach(elm => {
        if(elm === del) return elm.isDeleted = true;
      });
    };
  };*/
});
