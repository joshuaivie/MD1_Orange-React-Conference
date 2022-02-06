// 3. Project Details PopUp
const getSpeakers = fetch('./assets/data/speakers.json').then((result) => result.json());

const speakersList = document.getElementById('speakersList');

getSpeakers.then((speakers) => {
  let speakersHTML = '';
  speakers.forEach((speaker) => {
    speakersHTML += `<div class="speaker">
    <div class="speaker-image">
      <img src="./assets/img/speakers/${speaker.profilePicture}" alt="${speaker.name}">
    </div>
    <div class="speaker-profile pt-3">
      <div class="name">
        <h4>${speaker.name}</h4>
      </div>
      <div class="role">${speaker.role}</div>
      <div class="bio">${speaker.bio}</div>
    </div>
  </div>`;
  });
  speakersList.innerHTML = speakersHTML;
});
