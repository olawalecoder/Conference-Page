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