document.querySelectorAll('.nav-menu, .hide-x').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('hidden');
    document.querySelector('.menu').classList.toggle('hidden');
    document.querySelector('.home').classList.toggle('hidden');
  });
});

const header = document.querySelector('header');
function scrolled() {
  const currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (currentScroll >= 10) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
}

document.addEventListener('scroll', scrolled, false);


const artistInfo = [
  {
    id: 1,
    name: 'Davido',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    urlImage: '../img/Artists/davido.jpg',
  },
  {
    id: 2,
    name: 'Wizkid',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    urlImage: '../img/Artists/wizkid.jpg',
  },
  {
    id: 3,
    name: 'Tems',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    urlImage: '../img/Artists/tems.jpg',
  },
  {
    id: 4,
    name: 'BurnaBoy',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    urlImage: '../img/Artists/burnaboy.jpg',
  },
  {
    id: 5,
    name: 'Ckay',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    urlImage: '../img/Artists/ckay.jpg',
  },
  {
    id: 6,
    name: 'Tiwa Savage',
    topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    urlImage: '../img/Artists/tems.jpg',
  },
];

const speakersContainer = document.querySelector('.container-speaker');
artistInfo.forEach((speaker) => {
  const speakerProject = document.createElement('div');
  let speakerContent = '';
  speakerContent = `  
    <div class="speakers__list__item">
    <div class="speaker__list__item__img">
        <img src=${speaker.urlImage} alt="${speaker.name}"/>
    </div>
    <div class="speaker__list__item__content">
        <h3>${speaker.name}</h3>
        <p class="speaker__list__item__content__bio">
           ${speaker.topic}
        </p>
        <div class="speakers__bio__line">
        </div>
        <p>
        ${speaker.bio}
        </p>
    </div>
  </div>
  `;

  speakerProject.innerHTML = speakerContent;
  speakersContainer.appendChild(speakerProject);
});