if(!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  const envConfig = require('dotenv').config()
  if(envConfig.error) throw envConfig.error
}

const server = require('./server')
// var PORT = process.env.PORT || 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
