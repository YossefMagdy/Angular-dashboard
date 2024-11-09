import { Component } from '@angular/core';
import { TabsComponent } from "../../@theme/components/tabs/tabs.component";
import { DateInputComponent } from "../../@theme/components/date-input/date-input.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabsComponent, DateInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
