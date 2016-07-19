export default class {
  constructor() {
    this.topics = {};
    this.eventsCount = {};
  }

  sub(events, data) {
    for (var topic in this.topics){
      if (this.topics.hasOwnProperty(topic)) {
        if (topic.split('-')[0] == events) {
          this.topics[topic](data) !== false || delete this.topics[topic];
        }
      }
    }
  }

  pub (events, callback) {
    this.topics[events + --this.eventNumber] = callback;
  }

  remove (topic) {
    delete this.topics[topic];
  }
};
