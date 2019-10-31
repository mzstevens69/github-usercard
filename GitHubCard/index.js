/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

followersArray = ['https://github.com/AndrewMaddocks','https://github.com/ology','https://github.com/reeceap124','https://github.com/GeorgeRaymond98','https://github.com/ShandaWoods'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/


////set up followers///iterate through forEach

axios.get("https://api.github.com/users/mzstevens69/followers")
  .then(response => {
    response.data.forEach(item => {
    axios.get(item.url)
    .then(response => {
      // console.log(response);
      const cardNew = cardMaker(response);
      cards.appendChild(cardNew);
    })
  })
})
  .catch(error => {
    console.log("data not returned", error);
  });
//STEP ONE///////////get data for me

axios.get("https://api.github.com/users/mzstevens69")
  .then(response => {
    const myCard = cardMaker(response);
    cards.appendChild(myCard);
  })
  .catch(error => {
    console.log("data not returned", error);
  });

//STEP FOUR/////

const cards = document.querySelector('.cards');
//Function to pass data to dom//
function cardMaker(object) {
//create elements

  const card = document.createElement('div');
  const pic = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const user = document.createElement('p');
  const locale = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers= document.createElement('p');
  const following= document.createElement('p');
  const bio = document.createElement('p');

///add classes

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  user.classList.add('username');

  //structure of elements

  card.appendChild(pic);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(user);
  cardInfo.appendChild(locale);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //set text content

  pic.src = object.data.avatar_url;
  name.textContent = `${object.data.name}`;
  user.textContent = `Username: ${object.data.login}`;
  location.textContent = `Location: ${object.data.locale}`;
  link.textContent = `Link: ${object.data.html_url}`;
  followers.textContent = `Followers: ${object.data.followers}`;
  following.textContent = `Following: ${object.data.following}`;
  bio.textContent = `Bio: ${object.data.bio} `;

  //you got to return !!!

  return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/