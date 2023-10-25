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
  mounted() {
  }
}).mount('#app');