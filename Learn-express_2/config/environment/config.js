require('dotenv').config

const dbConfig = {
  host: process.env.MYSQL_HOSTNAME,
  name: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME, 
  pass: process.env.MYSQL_PASSWORD,
}

const siteConfig = {
  title: 'Learn-express_2',
  subtitle: 'to the next stage...'
}

module.exports = { dbConfig, siteConfig };
