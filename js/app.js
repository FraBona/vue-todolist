const createApp = Vue.createApp;

createApp({
  data(){
    return{
      currentIndex: 0,
      newLi: '',
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
    addToDo(){
       this.todos.push({text: this.newLi});
       this.newLi = '';
    },
    removeToDo(index){
      if(index === index){
        this.todos.splice(index, 1);
      }
    }
  },
  mounted() {
  }
}).mount('#app');