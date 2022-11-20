import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enableScroll();
    });
  });
})();

function activeNavItem() {
  let navItems = document.querySelectorAll('.nav__link')
  let navSubItems = document.querySelectorAll('.nav-sublist__link')


  function removeClass() {
      navItems.forEach(navItem => {
        navItem.classList.remove('nav__link--active')
  });

  navSubItems.forEach(navSubItem => {
    navSubItem.parentNode.parentNode.parentNode.classList.remove('nav__link--active')
});
  };

  navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      removeClass()
      navItem.classList.add('nav__link--active')
    })
  });

  navSubItems.forEach(navSubItem => {
    navSubItem.addEventListener('click', () => {
      removeClass()
      navSubItem.parentNode.parentNode.parentNode.classList.add('nav__link--active')
    })
  });

}

activeNavItem()
