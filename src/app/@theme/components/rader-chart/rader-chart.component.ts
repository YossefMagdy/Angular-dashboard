import { ChartConfiguration } from './../../../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-rader-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './rader-chart.component.html',
  styleUrl: './rader-chart.component.scss'
})
export class RaderChartComponent {
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
}
