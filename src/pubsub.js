const pubSub = (() => {
  const events = {};
  const subscribe = (eventName, fn) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  };
  const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  };
  return { subscribe, publish };
})();
const subscribe = (eventName, fn) => {
  pubSub.subscribe(eventName, fn);
};
const publish = (eventName, data) => {
  pubSub.publish(eventName, data);
};

export { subscribe, publish };
