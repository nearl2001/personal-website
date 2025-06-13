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
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  languages = [
    { name: 'TypeScript', iconRef: '' },
    { name: 'JavaScript', iconRef: '' },
    { name: 'Python3', iconRef: '' },
    { name: 'Bash', iconRef: '' },
    { name: 'Java', iconRef: '' },
    { name: 'C/C++', iconRef: '' },
    { name: 'C#', iconRef: '' },
  ];

  frontEndTools = [
    { name: 'React', iconRef: '' },
    { name: 'Angular', iconRef: '' },
    { name: 'HTMX', iconRef: '' },
    { name: 'Android Native', iconRef: '' },
    { name: 'Tailwind', iconRef: '' },
    { name: 'Pico CSS', iconRef: '' },
  ];

  backEndTools = [
    { name: 'NodeJS', iconRef: '' },
    { name: 'Docker', iconRef: '' },
    { name: 'SQL', iconRef: '' },
    { name: 'Redis', iconRef: '' },
    { name: 'AWS Services', iconRef: '' },
    { name: 'RHEL', iconRef: '' },
    { name: 'GH Actions', iconRef: '' },
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

    CustomWiggle.create("myWiggle", {wiggles: 6});

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

    // Animate each section header
    this.sectionHeaders.forEach((header) => {
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
        paused: true
      });

      el.addEventListener('mouseenter', () => {
        tween.restart();
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        })
      })
    });
  }
}
