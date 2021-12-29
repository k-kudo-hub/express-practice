const morgan = require('morgan');
const rfs    = require('rotating-file-stream');

morgan.accessLogStream = (logDir) => rfs.createStream('access.log', {
  size: '10MB',
  interval: '10d',
  compress: 'gzip',
  path: logDir
})

module.exports = morgan;
