import { Component } from '@angular/core';
import { AboutMeButtons } from "../about-me-buttons/about-me-buttons";

@Component({
  selector: 'navbar',
  imports: [AboutMeButtons],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
