const Adapter = (function(){
  const BASE_URL = `http://localhost:3000/api/v1/`

  return class Adapter {
    // Playlist methods
    static getPlaylists(){
      return fetch(`${BASE_URL}playlists`)
      .then(res => res.json())
    }
    
    static postPlaylist(name, user_id, medium_id){
      return fetch(`${BASE_URL}playlists/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          playlist:{
            name: name,
            user_id: user_id,
            medium_id: medium_id
          }
        })
      }).then(res => res.json())
    }

    static deletePlaylist(id){
      return fetch(`${BASE_URL}playlists/${id}`, {
        method: 'delete'
      }).then(res => res.json())
    }

    // Comment Methods
    static getComments(){
      return fetch(`${BASE_URL}comments`)
      .then(res => res.json())
    }
    static postComment(content, user_id, medium_id){
      return fetch(`${BASE_URL}comments/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment:{
            content: content,
            user_id: user_id,
            medium_id: medium_id
          }
        })
      }).then(res => res.json())
    }

    //Media Methods
    static getMedia(){
      return fetch(`${BASE_URL}media`)
      .then(res => res.json())
    }

    //User Methods
    static findOrCreateUser(username){
      return fetch(`${BASE_URL}users/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            theme: 'default'
          }
        })
      }).then(res => res.json())
    }


  }
})()