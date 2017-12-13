import {
  inject
} from 'aurelia-framework';
import {
  EventAggregator
} from 'aurelia-event-aggregator';
import {
  SpeakerAdded
} from './messages';

@inject(EventAggregator)
export class App {
  constructor(ea) {
    this.ea = ea;
    this.name = '';
    this.phone = '';
    this.language = '';
  }

  configureRouter(config, router) {
    config.title = 'Speakers';
    config.map([{
      route: '',
      moduleId: 'grid',
      title: 'Speakers List'
    }]);

    this.router = router;
  }

  addMe() {
    let speaker = {
      name: this.name,
      phone: this.phone,
      language: this.language
    };
    this.ea.publish(new SpeakerAdded(speaker));
  }
}
