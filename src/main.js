import environment from './environment';

export function configure(aurelia, uiconfig) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-table')
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
