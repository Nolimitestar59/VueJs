Vue.component('message', {
  template: `<div class="ui message success">Salut les gens </div>`
})

let vm = new Vue({
  el:'#app',
  date: {
    message: 'Jean'
  },
  methods: {
    demo: function(){
      console.log("demo")
    },
    demo2: function(){
      console.log("demo2")
    }
  }
})




let vm = new Vue({
  el: "#app",
  data:{
    message:"salut les gens",
    link: "http://orak-hakan.com",
    cls: 'success',
    persons: ['Hakan','Sami','Tolga','Furkan','Ilhan'],
  //  style: {background: '#000'}
  },
  methods: {
    close: function(){
      this.message = "Fermé"
      this.success = false
    },
    addPerson: function(){
      this.persons.push("Marion")
    }

    ,
    style: function () {
      if (this.success) {
        return {background: '#00FF00'}
      } else {
        return {background: '#FF0000'}
      }
    }
  },
  mounted: function() {
    console.log(this.$el)
  }
})

var capitalize = function(value, prefix, suffix){
  return prefix + value.toUpperCase() + suffix
}

Vue.filter('reverse', function(value){
  return value.split('').reverse().join('')
})


 var salut = function(el, binding, vnode){
    el.value = binding.value
    console.log('bind')
}


var vm = new Vue({
  el: '#app',
  filters: { capitalize },
  directives: {
    salut: salut
  },
  data: {
    message: 'salut les gars',
    firstname: 'Jean',
    lastname: 'bou',
    fullname: ''

    success: false,
    message: ''

},
methods:{
demo:function(){
  console.log("demo")
},
demo2: function(){
  console.log("demo2")
}
},
watch: {
  fullname: function(value){
    console.log('watch', value)
  }
}

  },
  computed: {
    fullname: {
      get: function(){
        return this.firstname + ' ' + this.lastname
      },
      set: function(value){
        let parts= value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
      }
    },
    cls: function(){
      console.log("cls call")
      return this.success === true ? 'success' : 'error'
    }
  }
  ,
  mounted: function(){
    this.$interval = setInterval(() => {
      console.log('Time')
      this.seconds++;
    }, 1000)
  },
  destroyed: function() {
    clearInterval(this.$interval)
  }
})
