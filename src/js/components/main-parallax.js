import { parallaxMouse } from 'parallax-mouse/dist/parallax-mouse.min.js'

parallaxMouse({ elements: '.hero__slider-cirkle--big, .hero__slider-cirkle--little', moveFactor: 100, wrap: '.hero-slider'})
parallaxMouse({ elements: '.appeal__tringle--top, .appeal__tringle--bottom', moveFactor: 50, wrap: '.appeal'})
parallaxMouse({ elements: '.benefits__smile, .benefits__lightning-top', moveFactor: 50, wrap: '.benefits__inner'})
parallaxMouse({ elements: '.footer__decor-stars, .footer__decor-smiles, .footer__decor-heart--big', moveFactor: 20, wrap: '.footer__inner'})
