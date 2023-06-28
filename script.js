
const search = document.getElementById("search");
const form = document.getElementById("form");
let APIURL = `https://api.github.com/users/`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = document.getElementById("search").value;

  if (user) {
          getData(user);

          search.value = "";
      }
});


function getData (user) {

  APIURL = `https://api.github.com/users/${user}`;

  axios.get(APIURL).then((res) => {
    const userData = res.data;
    console.log(userData);
  
      main.innerHTML=`
      <div class="card">
                <img src="${userData.avatar_url}" id="avatar">
                </img>
                <div class="user-info">
                    <h2 class="user-name">${userData.name}</h2>
                    <p id="bio">${userData.bio}</p>
                    <ul class="info">
                            <li id="followers">Followers: ${userData.followers}</li>
                            <li id="following">Following: ${userData.following}</li>
                            <li id="n-repos">Public repositories: ${userData.public_repos}</li>
                        </ul>`
                      });
    }
    

