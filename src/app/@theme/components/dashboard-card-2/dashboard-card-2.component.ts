import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-dashboard-card-2',
  standalone: true,
  imports: [MatCardModule,MatCheckboxModule],
  templateUrl: './dashboard-card-2.component.html',
  styleUrl: './dashboard-card-2.component.scss'
})
export class DashboardCard2Component {
  isMenuOpen=signal<boolean>(false);

  handleMenu(){
    this.isMenuOpen.update((prev)=>!prev)
  }
}
