# aurelia-demo

Building

Clone the aurelia-cli: git clone https://github.com/aurelia/cli.git
Go into the cli directory: cd cli
Run npm install
Link the cli with: npm link
Still in the cli directory, run npm install git+https://git@github.com/gulpjs/gulp.git#4.0
Also in the cli directory, run npm install babel-polyfill babel-register typescript
Create a new project with au new or use an existing project. The linked CLI will be used to create the project.
In the project directory, run npm link aurelia-cli. The linked CLI will then be used for au commands such as au run
Running the Tests

Run npm test to run the unit tests