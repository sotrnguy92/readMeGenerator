const token = require('./token')

const param = {
  headers: {'Authorization': token}
}

const api = {
  async getGithub(username) {
    const axios = require('axios');
    try {
      const{ data: {user_url, email}} = await axios.get(`https://api.github.com/user/${username}`, param);
      return{
        user_url,
        email
      }

    }catch (err){
      console.log(err);
    }

  }
};

module.exports = api;
