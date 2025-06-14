import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements AfterViewInit {
  @ViewChild('typedText1') typedText1!: ElementRef;
  @ViewChild('typedTextMain') typedTextMain!: ElementRef;
  @ViewChild('typedText2') typedText2!: ElementRef;
  @ViewChild('cursor1') cursor1!: ElementRef;
  @ViewChild('cursorMain') cursorMain!: ElementRef;
  @ViewChild('cursor2') cursor2!: ElementRef;
  @ViewChild('heroImage') heroImage!: ElementRef;

  textToType1 = 'Hello! I am a';
  textToTypeMain = 'Full Stack Application Developer'
  textToType2 = 'Welcome to my Website'

  ngAfterViewInit(): void {
    gsap.from(this.heroImage.nativeElement, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    })

    this.startTypingEffect();
  }

  startTypingEffect() {
    const firstChars = this.textToType1.split('');
    const mainChars = this.textToTypeMain.split('');
    const secondChars = this.textToType2.split('');

    const typedEl1 = this.typedText1.nativeElement;
    const cursorEl1 = this.cursor1.nativeElement;
    const typedElMain = this.typedTextMain.nativeElement;
    const cursorElMain = this.cursorMain.nativeElement;
    const typedEl2 = this.typedText2.nativeElement;
    const cursorEl2 = this.cursor2.nativeElement;

    const secondsPerChar = 0.07

    firstChars.forEach((char, index) => {
      gsap.delayedCall(index * secondsPerChar, () => {
        typedEl1.textContent += char;
      });
    });
    const ttcFirst = firstChars.length * secondsPerChar

    gsap.delayedCall(ttcFirst, () => {
      cursorEl1.style.display = 'none';
      cursorElMain.style.display = 'inline-block';
    })

    mainChars.forEach((char, index) => {
      gsap.delayedCall((index * secondsPerChar) + ttcFirst, () => {
        typedElMain.textContent += char;
      });
    });
    const ttcMain = ttcFirst + (mainChars.length * secondsPerChar)

    gsap.delayedCall(ttcMain, () => {
      cursorElMain.style.display = 'none';
      cursorEl2.style.display = 'inline-block';
    })

    secondChars.forEach((char, index) => {
      gsap.delayedCall((index * secondsPerChar) + ttcMain + 0.5, () => {
        typedEl2.textContent += char;
      });
    })
    const ttcLast = ttcMain + (secondChars.length * secondsPerChar)


    gsap.delayedCall(ttcLast, () => {
      cursorEl2.style.display = 'none';
    })
  }
}