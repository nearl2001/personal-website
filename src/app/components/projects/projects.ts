import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ProjectCard } from '../project-card/project-card';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  cards = [
    {
      pic1Ref: 'picRef.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Dummy hehe1',
    },
    {
      pic1Ref: 'picRef.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Dummy hehe2',
    },
    {
      pic1Ref: 'picRef.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Dummy hehe3',
    },
    {
      pic1Ref: 'picRef.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Dummy hehe4',
    },
  ];

  // ViewChildren targets the DOM elements
  @ViewChild('projectHeader') projectHeader!: ElementRef<HTMLElement>;
  @ViewChildren('projectCard', { read: ElementRef })
  cardElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the header
    if (this.projectHeader != null) {
      gsap.from(this.projectHeader.nativeElement, {
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: this.projectHeader.nativeElement,
          toggleActions: 'play none none reset',
        }
      });
    }

    // Animate each card with GSAP
    const elements = this.cardElements.map(el => el.nativeElement);

    gsap.from(elements, {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.projectHeader.nativeElement,
        start: 'bottom 80%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
