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
export class Grid {
  constructor(ea) {
    this.message = 'Here is the grid';
    this.ea = ea;
    this.speakers = [{
      name: 'Javier',
      phone: '(0387) 0303456',
      language: 'English'
    }];

    ea.subscribe(SpeakerAdded, msg => this.addSpeaker(msg.speaker));
  }

  addSpeaker(speaker) {
    switch (speaker.language) {
    case '1':
      speaker.language = 'English';
      break;
    case '2':
      speaker.language = 'Spanish';
      break;
    case '3':
      speaker.language = 'French';
      break;
    default:
      speaker.language = 'English';
      break;
    }
    this.speakers.push(speaker);
  }

}
