let passlist = [
  {content: 'lazy', id: 'foo', email:'hoge@example.com', pass: 'fizz'},
  {content: 'busy', id: 'hoo', email:'fuga@example.com', pass: 'buzz'}
]

Vue.component('modal',{
  template: `<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <button class="btn btn-warning" @click="$emit('returnPass')">
            <slot name="modal-btn1">button 1
            </slot>
          </button>
          <button class="btn btn-success" @click="$emit('close')">
            <slot name="modal-btn2">button 2
            </slot>
          </button>
        </div>
      </div>
    </div>
  </transition>
  `
})

let mymodal = new Vue({
  el: "#modal-root",
  data:{
    showModal: false,
    modcomp: {
              content: '',
              id: '',
              email: '',
              pass: ''
            },
    newcomp: {
              id: '',
              email: '',
              pass: ''
            }
  },
  methods:{
    invoke: function(element){
      this.modcomp = {content: element.content, id: element.id,
                      email: element.email, pass: element.pass
                     }
    },
    returnPass: function(){
        tableControl.replacePass(this.newcomp);
        this.newcomp.id = '';
        this.newcomp.email = '';
        this.newcomp.pass = '';
    },
    close: function(){
      this.showModal = false
    }
  }
});

let tableControl = new Vue({
  el: '#pass-table',
  data:{
    passlist,
    modindex: ''
  },

  methods: {
    deletePass: function(index) {
      passlist.splice(index, 1);
    },
    modifyPass: function(elm, index) {
      this.modindex = index;
      mymodal.invoke(elm);
      mymodal.showModal = true
    },
    replacePass: function(elm){
      if(elm.id != '')
      passlist[this.modindex].id = elm.id;
      if(elm.email != '')
      passlist[this.modindex].email = elm.email;
      if(elm.pass != '')
      passlist[this.modindex].pass = elm.pass;
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
      passlist.push({content: this.newContents, id: this.newID, email: this.newEmail, pass: this.newPass});
      this.newContents='';
      this.newID = '';
      this.newEmail = '';
      this.newPass = '';
    }
  }
});
