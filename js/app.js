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
       this.todos.push({text: this.newLi,
                        done: false});
       this.newLi = '';
    },
    removeToDo(index){
      if(index){
        this.todos.splice(index, 1);
      }
    },
    checkToDo(todo){
      if(todo.done === true){
        todo.done = false;
      }
      else{
        todo.done = true;
      }
    }
  },
  mounted() {
  }
}).mount('#app');