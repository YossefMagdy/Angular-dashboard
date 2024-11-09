import { Component, signal } from '@angular/core';
import { DashboardCard1Component } from "../../@theme/components/dashboard-card-1/dashboard-card-1.component";
import { DashboardCard2Component } from "../../@theme/components/dashboard-card-2/dashboard-card-2.component";
import { ProgressComponent } from "../../@theme/components/progress/progress.component";
import { RaderChartComponent } from "../../@theme/components/rader-chart/rader-chart.component";
import { TabsComponent } from "../../@theme/components/tabs/tabs.component";
import { BarChartComponent } from "../../@theme/components/bar-chart/bar-chart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardCard1Component, DashboardCard2Component, ProgressComponent, RaderChartComponent, TabsComponent, BarChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeTab=signal<string>('List')

  changeView(activeTab:string){
    this.activeTab.set(activeTab)
  }

}
