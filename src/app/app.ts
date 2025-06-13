import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Hero, Navbar, Projects, Skills, Footer],
  templateUrl: './app.html',
})
export class App {
  protected title = 'personal-website';
}
