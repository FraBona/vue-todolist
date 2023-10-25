const createApp = Vue.createApp;

createApp({
  data(){
    return{
      currentIndex: 0,
      todos: [
        {
          text: 'Fare i compiti',
          done: false
        },
        {
          text: 'Fare la spesa',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ]
    }
  },
  methods: {
    removeToDo(index){
      if(index === index){
        this.todos.splice(index, 1);
      }
    }
  },
  mounted() {
  }
}).mount('#app');