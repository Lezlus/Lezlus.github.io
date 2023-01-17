const landingPage = document.getElementById('home');
const aboutPage = document.getElementById('about');
const aboutPageNavItem = document.getElementById('nav-about');
const projectsPage = document.getElementById('projects');
const projectPageNavItem = document.getElementById('nav-project');
const projectInfoRight =  document.querySelectorAll('.project__info-right');
const projectInfoLeft = document.querySelectorAll('.project__info-left');

const landingPageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('fade-in', entry.isIntersecting)
    if (entry.isIntersecting) {
      console.log('landing page intersected')
      landingPageObserver.unobserve(entry.target)
    }
  })
});

const aboutPageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    aboutPageNavItem.classList.toggle('nav__item-selected', entry.isIntersecting);
  })
}, {threshold: 0.8})

const projectsPageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    projectPageNavItem.classList.toggle('nav__item-selected', entry.isIntersecting)
  })
}, {threshold: 0.25})

const projectInfoRightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('animate__fadeInRight', entry.isIntersecting)
    if (entry.isIntersecting) {
      projectInfoRightObserver.unobserve(entry.target)
    }
  })
}, {threshold: 0})

const projectInfoLeftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('animate__fadeInLeft', entry.isIntersecting);
    if (entry.isIntersecting) {
      projectInfoLeftObserver.unobserve(entry.target);
    }
  })
})

landingPageObserver.observe(landingPage);
aboutPageObserver.observe(aboutPage);
projectsPageObserver.observe(projectsPage);
projectInfoRight.forEach(infoCard => {
  projectInfoRightObserver.observe(infoCard);
})
projectInfoLeft.forEach(infoCard => {
  projectInfoLeftObserver.observe(infoCard);
})