require('dotenv').config();

const app = require('./server');
require('./database');

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Servidor en Puerto', app.get('port'));  
});