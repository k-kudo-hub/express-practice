console.log('index.js: loaded');

const userId = 'k-kudo-hub';
function fetchUserInfo(userId){
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status); // => 200
      if(!response.ok){
        console.log('エラーレスポンス', response);
      } else {
        return response.json().then(userInfo => {
          console.log(userInfo);
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}
