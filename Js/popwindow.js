const myProjects = [
  {
    id: 1,
    title: 'Multi Post Stories',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/Placeholder.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
  {
    id: 2,
    title: 'Profesional Art Printing Data',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/holder-1.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
  {
    id: 3,
    title: 'Data Dashboard Healthcare',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: 'img/holder-2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: './img/holder-3.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
  {
    id: 5,
    title: 'Profesional Art Printing Data',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: './img/holder-4.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
  {
    id: 6,
    title: 'Profesional Art Printing Data',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: './img/holder-2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
  {
    id: 7,
    title: 'Profesional Art Printing Data',

    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
    img: './img/holder-3.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: '#',
    source: '#',
  },
];

const projectSection = document.querySelector('.works');
const firstProject = document.querySelector('.firstproject');

firstProject.innerHTML = `<div class="dsktp-works-top">
 <h2>My Recent Works</h2>
 <div class="hline"></div>
 </div>

 <div class="proj1">
 <img class="first-proj-picture" src="${myProjects[0].img}" alt="" />
 <div class="dsktp-proj1">
   <h3>Multi-Post Stories</h3>
   <p>
     A daily selection of privately personalized reads; no accounts or
     sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.
   </p>
   <ul class="tools">
    <li>css</li>
     <li>html</li>
     <li>bootstrap</li>
     <li>Ruby</li>
   </ul>
   <button id='${myProjects[0].id}' onclick="toggle()" class="Proj-button open-button">See Project</button>
 </div>
 </div>`;

for (let i = 1; i < myProjects.length; i += 1) {
  const project = myProjects[i];
  projectSection.innerHTML += `
      

      <div class="project-template">
        <div id=${project.id} class='proj2' style=" background: url(${project.img}); background-repeat: no-repeat;  background-size: cover; "> 
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul class="tools2">
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
          </ul>
          <button id='${project.id}' onclick="toggle()" class="Proj-button2 open-button">See Project</button>
        </div>
      </div>
    
      
      `;
}

const openPop = document.querySelectorAll('.open-button');
const popUp = document.querySelector('.pop-container');

openPop.forEach((element) => {
  element.addEventListener('click', () => {
    const id = Number(element.id);
    for (let i = 0; i < myProjects.length; i += 1) {
      const project = myProjects[i];
      if (id === project.id) {
        popUp.innerHTML = `
          
          <div class="title">
            <h3 class="title-short">${project.title}</h3>
            <span class="title-x" onclick="toggle()">&times;</span>
          </div>
          <ul class="tools">
          <li>${project.technologies[0]}</li>
          <li>${project.technologies[1]}</li>
          <li>${project.technologies[2]}</li>
          </ul>
          <div class="pop-flex">
              <img class="pop-img" src="${project.img}" alt="a visual for project">
            <div class="pop-txt">
              <p class='pop-ttxt'>${project.description}</p>
              <div class='pop-button'>
                <button class="Proj-button">See Source <i class="fas fa-external-link-alt"></i></button>
                <button class="Proj-button">See Live <i class="fab fa-github-square"></i></a></li></button>
              </div>
            </div>
          </div>
      `;
      }
    }

    popUp.classList.add('show');

    const closePop = document.querySelector('.title-x');
    closePop.addEventListener('click', () => {
      popUp.classList.remove('show');
    });
  });
});
// eslint-disable-next-line no-unused-vars
function toggle() {
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');
}
