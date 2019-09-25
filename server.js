const app = require('./app');
const port = process.env.PORT || 8000;

const server = app.listen(port, function() {
  console.log('I Love you ' + port);
});