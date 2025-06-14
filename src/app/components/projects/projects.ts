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
      pic1Ref: 'projects/Bibliotrace-home.png',
      pic2Ref: 'projects/Bibliotrace-mobile-search.png',
      description:
        "Bibliotrace is an award-winning library tracking application designed for the Primary Children's \
        Hospital network's chain of on-campus libraries. It was built using a React frontend and a NodeJS backend, \
        hosted with AWS through CloudFront/S3 and the Fargate architecture. It has features like a custom search \
        system that uses flexsearch caching, a comprehensive database schema for storing all necessary book information, \
        and a catalog for patients to browse from their rooms via the public website. Bibliotrace uses a simple, purpose-built \
        authentication system to separate individual library environments so patients and administrators only see and manage \
        the inventory for just their campus. It was built to scale for the 40,000 books in the libraries' existing inventory, \
        hundreds of clients in a day, and thousands of more books to come.",
      name: 'Bibliotrace 3.0',
    },
    {
      pic1Ref: 'projects/Liftbuilder-history.png',
      pic2Ref: 'projects/Liftbuilder-inworkout.png',
      description:
        "LiftBuilder is a prototype fitness application that aims to automatically generate workout plans for you given your \
        workout history, movement preferences, and skill proficiency. LiftBuilder was designed to integrate with a large \
        language model to handle generation of workout drafts and creative set/rep combinations given an individual's profile. \
        It is a full-stack application with a React frontend and a NodeJS backend. I worked on this project with a team of 5 \
        developers, and I was responsible for designing and implementing the frontend. I also helped establish a working \
        authentication system for the backend using Supabase, and I aided in business logic refinements for the back-end. This \
        application hasn't yet been deployed for production use cases, but it was built to be scaled horizontally for a large user-base.",
      name: 'LiftBuilder',
    },
    {
      pic1Ref: 'projects/Desk-setup-1.jpg',
      pic2Ref: 'projects/OpenWRT-demo.png',
      description:
        "About 2 years ago, I bought a 2012 iMac from my University's surplus sale. I currently use it as a second monitor for \
        my desktop setup as a slave display for my main machine. The iMac itself is running a port of Arch linux with the \
        NoMachine client installed, with support for NVENC hardware video decoding. It receives video through an OpenWRT-powered \
        router to facilitate a LAN over ethernet from the iMac to the host machine for best performance. My main machine, running \
        Ubuntu Desktop, offloads X11 video output to a virtual HDMI device that is mirrored using NoMachine. ",
      name: 'NoMachine iMac Desktop',
    },
    {
      pic1Ref: 'projects/AdGuard-demo.png',
      pic2Ref: 'projects/Volumio-demo.jpg',
      description:
        "I am a tinkerer, and I've had a lot of fun building small home IoT projects with my Raspberry Pi 4 over the last few years \
        that I've had it. Lately, my Pi 4 is set up to host a Volumio media server, set up to play Spotify and local audio through \
        a repurposed set top box from the 90's. It uses a touch screen for local control and a web interface for interaction anywhere \
        on my network. I also recently acquired a Pi Zero 2W, which is currently being used as a DNS resolver for my home network. The \
        resolver facilitates DNS-level ad and malware blocking with strictly enforced DNSSEC validation and a load-balancing outbound \
        resolver set up to share DNS query load between CloudFlare and Google DNS servers. Despite the limited hardware capabilities \
        of the Pi Zero, I have tested an average new resolution time of 60 ms, with a cached resolution time of under 15 ms, with noticeable \
        improvements to my network's site-browsing performance.",
      name: 'Home Network Pi Projects',
    },
  ];

  // ViewChildren targets the DOM elements
  @ViewChild('projectHeader') projectHeader!: ElementRef<HTMLElement>;
  @ViewChildren('projectCard', { read: ElementRef })
  cardElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    if (this.projectHeader != null) {
      gsap.from(this.projectHeader.nativeElement, {
        opacity: 0,
        duration: 1,
        delay: 0,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: this.projectHeader.nativeElement,
          toggleActions: 'play none none reset',
        },
      });
    }

    const elements = this.cardElements.map((el) => el.nativeElement);

    gsap.from(elements, {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.projectHeader.nativeElement,
        start: 'top 95%',
        toggleActions: 'play none none reset',
      },
    });
  }
}
