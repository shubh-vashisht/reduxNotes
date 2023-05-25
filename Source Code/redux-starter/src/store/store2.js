class StoreClass {
  constructor(reducer) {
    this.state = [];
    this.reducer = reducer;
    this.subscribed = false;
    this.subscribeCallbackQueue = [];
  }
  dispatch(object) {
    this.state = this.reducer(this.state, object);
    if (this.subscribed) {
      this.subscribeCallbackQueue.forEach((func) => func(this.state));
    }
  }
  subscribe(callback) {
    const temp = callback;
    this.subscribeCallbackQueue.push(callback);
    this.subscribed = true;
    return () => {
      console.log("before unsubscribing: ", this.subscribeCallbackQueue);
      this.subscribeCallbackQueue = this.subscribeCallbackQueue.filter(
        (ell) => ell !== temp
      );
      console.log("after unsubscribing: ", this.subscribeCallbackQueue);
    };
  }
  getState() {
    return this.state;
  }
}

function Store(reducer) {
  let state = [];
  let subscribed = false;
  let subscribeCallbackQueue = [];
  function dispatch(object) {
    state = reducer(state, object);
    if (subscribed) {
      subscribeCallbackQueue.forEach((func) => func(state));
    }
  }
  function subscribe(callback) {
    const temp = callback;
    subscribeCallbackQueue.push(callback);
    subscribed = true;
    return () => {
      subscribeCallbackQueue = subscribeCallbackQueue.filter(
        (ell) => ell !== temp
      );
      if (subscribeCallbackQueue.length === 0) subscribed = false;
    };
  }
  function getState() {
    return state;
  }
  return { dispatch, subscribe, getState };
}

function createStore(reducer) {
  let newStore = new Store(reducer);
  return newStore;
}
export default createStore;
