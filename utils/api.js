
const api = {
  async getGithub(username) {
    const axios = require('axios');
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const avatar_url = response.data.avatar_url;
      const email = response.data.email;
      console.log(avatar_url)
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
