if(process.env.NODE_ENV !== 'production'){
  const dotenv = require('dotenv');
  dotenv.config({path: "./.env"})
}


module.exports = {
    MONGO_DB: process.env.MONGO_DB,
    SECRET_KEY: process.env.SECRET_KEY
}

/*
 * temp user:
 * username: username
 * email: username@user.com
 * password: password
*/
