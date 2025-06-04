import { Component } from '@angular/core';
import { AboutMeButtons } from "../about-me-buttons/about-me-buttons";

@Component({
  selector: 'app-footer',
  imports: [AboutMeButtons],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
