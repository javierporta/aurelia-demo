define('app',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './messages'], function (exports, _aureliaFramework, _aureliaEventAggregator, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function App(ea) {
      _classCallCheck(this, App);

      this.ea = ea;
      this.name = '';
      this.phone = '';
      this.language = '';
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Speakers';
      config.map([{
        route: '',
        moduleId: 'grid',
        title: 'Speakers List'
      }]);

      this.router = router;
    };

    App.prototype.addMe = function addMe() {
      var speaker = {
        name: this.name,
        phone: this.phone,
        language: this.language
      };
      this.ea.publish(new _messages.SpeakerAdded(speaker));
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('grid',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './messages'], function (exports, _aureliaFramework, _aureliaEventAggregator, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Grid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Grid = exports.Grid = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function Grid(ea) {
      var _this = this;

      _classCallCheck(this, Grid);

      this.message = 'Here is the grid';
      this.ea = ea;
      this.speakers = [{
        name: 'Javier',
        phone: '(0387) 0303456',
        language: 'English'
      }];

      ea.subscribe(_messages.SpeakerAdded, function (msg) {
        return _this.addSpeaker(msg.speaker);
      });
    }

    Grid.prototype.addSpeaker = function addSpeaker(speaker) {
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
    };

    return Grid;
  }()) || _class);
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia, uiconfig) {
    aurelia.use.standardConfiguration().plugin('aurelia-table').feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('messages',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SpeakerAdded = exports.SpeakerAdded = function SpeakerAdded(speaker) {
    _classCallCheck(this, SpeakerAdded);

    this.speaker = speaker;
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><form class=\"form-horizontal\"><fieldset><legend>Friendly Speakers</legend><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"Name\">Name</label><div class=\"col-md-4\"><input id=\"Name\" name=\"Name\" type=\"text\" placeholder=\"Name\" value.bind=\"name\" class=\"form-control input-md\"> <span class=\"help-block\">Write your name</span></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"phone\">Phone</label><div class=\"col-md-4\"><input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" value.bind=\"phone\" class=\"form-control input-md\"> <span class=\"help-block\">Write your phone</span></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"language\">Select language</label><div class=\"col-md-4\"><select id=\"language\" name=\"language\" value.bind=\"language\" class=\"form-control\"><option value=\"1\">English</option><option value=\"2\">Spanish</option><option value=\"3\">French</option></select></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"addMe\"></label><div class=\"col-md-4\"><button id=\"addMe\" name=\"addMe\" class=\"btn btn-primary\" click.delegate=\"addMe()\">Add me!</button></div></div></fieldset></form><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 label-info\" style=\"color:#fff\">List of people who want to speak with you</div><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!grid.html', ['module'], function(module) { module.exports = "<template><table class=\"table table-striped\" aurelia-table=\"data.bind: speakers; display-data.bind: $speakersData\"><thead><tr><th>Name</th><th>Phone</th><th>Language</th></tr></thead><tbody><tr repeat.for=\"speaker of $speakersData\"><td>${speaker.name}</td><td><div><table><tr><td>${speaker.phone}</td><td><div><img src=\"images/whatsapp-icon.png\" style=\"max-height:45px\" class=\"img-responsive voc_list_preview_img\" alt=\"\" title=\"\"></div></td></tr></table></div></td><td>${speaker.language}</td></tr></tbody></table></template>"; });
//# sourceMappingURL=app-bundle.js.map