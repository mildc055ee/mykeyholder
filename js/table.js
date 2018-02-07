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
              <button class="btn-success" @click="$emit('close')">
                OK
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
    close: function(){
      this.showModal = false
    }
  }
});

let tableControl = new Vue({
  el: '#pass-table',
  data:{
    passlist
  },

  methods: {
    deletePass: function(index) {
      this.passlist.splice(index, 1);
    },
    modifyPass: function(elm) {
      mymodal.invoke(elm);
      mymodal.showModal = true
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
    }
  }
});
