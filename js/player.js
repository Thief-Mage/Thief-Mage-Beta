class Player {
  {

  constructor(progress, inventory) {
    this.progress = progress;
    this.inventory = inventory;
  }



    // public API
    this.start = start;
    this.stop = stop;
    this.reset = reset;
    this.getTime = getTime;

    /*
    // private functions
    function createTimer() {
      return document.createElement("span");
    }
  
    function createButton(action, handler) {
      var a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function (event) {
        handler();
        event.preventDefault();
      });
      return a;
    }
  
    function start() {
      if (!interval) {
        offset = Date.now();
        interval = setInterval(update, options.delay);
      }
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  
    function reset() {
      clock = 0;
      render(0);
    }
  
    function update() {
      clock += delta();
      render();
    }
  
    function render() {
      timer.innerHTML = clock / 1000;
    }
  
    function delta() {
      var now = Date.now(),
        d = now - offset;
  
      offset = now;
      return d;
    }
  
    function getTime() {
      return clock;
    }
  
    // public API
    this.start = start;
    this.stop = stop;
    this.reset = reset;
    this.getTime = getTime;
 
 
    */
  }
}