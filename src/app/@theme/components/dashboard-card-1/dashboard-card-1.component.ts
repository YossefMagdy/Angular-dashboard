import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dashboard-card-1',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard-card-1.component.html',
  styleUrl: './dashboard-card-1.component.scss'
})
export class DashboardCard1Component {
  value=input.required();
  text=input.required();
  status=input.required<"inc"|'dec'>()
}
