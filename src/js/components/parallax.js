
function contactsFooter() {
  const container = document.querySelector('.footer--contacts')

  if (!container) {
    return null
  }

  const scene = document.getElementById('scene');
  const parallax = new Parallax(scene);
}

contactsFooter();

function heroParallax() {
  const container = document.querySelector('.hero')

  if (!container) {
    return null
  }

  const hero = document.getElementById('hero');
  const parallax = new Parallax(hero);
}

heroParallax();

function teachersParallax() {
  const container = document.querySelector('.teachers')

  if (!container) {
    return null
  }

  const teachers = document.getElementById('teachers');
  const parallax = new Parallax(teachers);
}

teachersParallax();

function graduatesParallax() {
  const container = document.querySelector('.graduates')

  if (!container) {
    return null
  }

  const graduates = document.getElementById('graduates');
  const parallax = new Parallax(graduates);
}

graduatesParallax();

