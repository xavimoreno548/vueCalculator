const app = new Vue({
  el: "#app",
  data:
  {
    input: ""
  },
  methods:
  {
    addNumber(num)
    {
      if(typeof this.input == "number")
        this.input = '';
      this.input += num;
    },
    cleanInput()
    {
      this.input = '';
    },
    operation()
    {
      let result = eval(this.input);
      this.input = result;
    },
    deleted()
    {
      var aux = this.input.slice(0,-1);
      this.input = aux;
    }
  }
})