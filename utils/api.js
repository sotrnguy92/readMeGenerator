
const api = {
  async getGithub(username) {
    const axios = require('axios');
    try {
      const {data: {avatar_url, email}} = await axios.get(`https://api.github.com/users/${username}`);
      return {
        avatar_url,
        email
      }

    } catch (err) {
      console.log(err);
    }

  }
}


module.exports = api
