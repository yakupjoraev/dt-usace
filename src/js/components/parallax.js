
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
  const container = document.querySelector('.hero-main')

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

function studentsParallax() {
  const container = document.querySelector('.students')

  if (!container) {
    return null
  }

  const students = document.getElementById('students');
  const parallax = new Parallax(students);
}

studentsParallax();

function disciplinesStudiedParallax() {
  const container = document.querySelector('.disciplines-studied')

  if (!container) {
    return null
  }

  const disciplinesStudied = document.getElementById('disciplines-studied');
  const parallax = new Parallax(disciplinesStudied);
}

disciplinesStudiedParallax();

function scientificWorkParallax() {
  const container = document.querySelector('.scientific-work')

  if (!container) {
    return null
  }

  const scientificWork = document.getElementById('scientific-work');
  const parallax = new Parallax(scientificWork);
}

scientificWorkParallax();

function forEntrantsParallax() {
  const container = document.querySelector('.for-entrants')

  if (!container) {
    return null
  }

  const forEntrants = document.getElementById('for-entrants');
  const parallax = new Parallax(forEntrants);
}

forEntrantsParallax();
