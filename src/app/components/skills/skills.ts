import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SkillCard } from '../skill-card/skill-card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { CustomWiggle } from 'gsap/CustomWiggle';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  languages = [
    { name: 'TypeScript', iconRef: 'icons/icons8-typescript.svg' },
    { name: 'JavaScript', iconRef: 'icons/icons8-javascript.svg' },
    { name: 'Python3', iconRef: 'icons/icons8-python.svg' },
    { name: 'Bash', iconRef: 'icons/icons8-bash.svg' },
    { name: 'Java', iconRef: 'icons/icons8-java.svg' },
    { name: 'C/C++', iconRef: 'icons/icons8-c++.svg' },
    { name: 'C#', iconRef: 'icons/icons8-c-sharp-logo-2.svg' },
  ];

  frontEndTools = [
    { name: 'React', iconRef: 'icons/icons8-react.svg' },
    { name: 'Angular', iconRef: 'icons/icons8-angular.svg' },
    { name: 'Tailwind', iconRef: 'icons/icons8-tailwind-css.svg' },
    { name: 'HTML/CSS', iconRef: 'icons/icons8-html.svg' },
    { name: 'HTMX', iconRef: 'icons/htmx.svg' },
    { name: 'Browser Native', iconRef: 'icons/icons8-chromium.svg' },
    { name: 'Android Native', iconRef: 'icons/icons8-android.svg' },
  ];

  backEndTools = [
    { name: 'NodeJS', iconRef: 'icons/icons8-nodejs.svg' },
    { name: 'Docker', iconRef: 'icons/icons8-docker.svg' },
    { name: 'SQL', iconRef: 'icons/icons8-sql-64.png' },
    { name: 'Redis', iconRef: 'icons/icons8-redis.svg' },
    { name: 'AWS Services', iconRef: 'icons/icons8-amazon-web-services.svg' },
    { name: 'RHEL', iconRef: 'icons/icons8-red-hat-64.png' },
    { name: 'GH Actions', iconRef: 'icons/icons8-github.svg' },
  ];

  @ViewChild('skillsHeader') skillsHeader!: ElementRef;
  @ViewChildren('sectionHeader', { read: ElementRef })
  sectionHeaders!: QueryList<ElementRef>;

  @ViewChildren('languageCard', { read: ElementRef })
  languageCards!: QueryList<ElementRef>;
  @ViewChildren('frontEndCard', { read: ElementRef })
  frontEndCards!: QueryList<ElementRef>;
  @ViewChildren('backEndCard', { read: ElementRef })
  backEndCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger, CustomEase, CustomWiggle);

    CustomWiggle.create('myWiggle', { wiggles: 6 });

    if (ScrollTrigger.isTouch) {
      gsap.from(this.skillsHeader.nativeElement, {
        opacity: 0,
        duration: 1,
        ease: 'power1.in',
      });
    } else {
      gsap.from(this.skillsHeader.nativeElement, {
        opacity: 0,
        duration: 1,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: this.skillsHeader.nativeElement,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Animate each section header
    this.sectionHeaders.forEach((header) => {
      if (ScrollTrigger.isTouch) {
        gsap.from(header.nativeElement, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      } else {
        gsap.from(header.nativeElement, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header.nativeElement,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    // Animate the skill cards with "hop" effect
    this.animateSkillCards(this.languageCards, 'left');
    this.animateSkillCards(this.frontEndCards, 'right');
    this.animateSkillCards(this.backEndCards, 'left');

    this.setupHoverJiggle(this.languageCards);
    this.setupHoverJiggle(this.frontEndCards);
    this.setupHoverJiggle(this.backEndCards);

    this.setupHoverScale(this.languageCards);
    this.setupHoverScale(this.frontEndCards);
    this.setupHoverScale(this.backEndCards);
  }

  private animateSkillCards(
    cards: QueryList<ElementRef>,
    direction: 'left' | 'right'
  ) {
    const elements = cards.map((card) => card.nativeElement);
    if (direction == 'right') {
      elements.reverse();
    }

    if (ScrollTrigger.isTouch) {
      gsap.from(elements, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.2
      });
    } else {
      gsap.from(elements, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: elements[0]?.parentElement,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  private setupHoverJiggle(cards: QueryList<ElementRef>) {
    cards.forEach((card) => {
      const el = card.nativeElement;

      let tween = gsap.to(el, {
        rotation: 3,
        ease: 'myWiggle',
        duration: 1,
        paused: true,
      });

      el.addEventListener('mouseenter', () => {
        tween.restart();
      });
    });
  }

  private setupHoverScale(cards: QueryList<ElementRef>) {
    cards.forEach((card) => {
      const el = card.nativeElement;

      let tween = gsap.to(el, {
        scale: 1.1,
        ease: 'power2.out',
        duration: 0.5,
        paused: true,
      });

      el.addEventListener('mouseenter', () => {
        tween.restart();
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    });
  }
}
