import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  tabs=input.required<string[]>();
  activeTab=model.required<string>();
  changeTab=output<string>()
  
  

  activeTabChange(item:string){
    this.activeTab.set(item)
    this.changeTab.emit(item)
  }
}
