import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
