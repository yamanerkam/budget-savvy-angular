import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule,SidebarModule,MenubarModule,RouterLink,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget-savvy';
  sidebarVisible : boolean = true;
  time : string = this.getTimeOfDay(new Date())
  userName : string = 'kam'.toLocaleUpperCase();
  activeTab = ''
  
  getTimeOfDay(time : Date) {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) {
        return "Morning";
    } else if (hour >= 12 && hour < 17) {
        return "Afternoon";
    } else if (hour >= 17 && hour < 21) {
        return "Evening";
    } else {
        return "Night";
    }
}

changeTab(newTab:string){
  this.activeTab = newTab;
}

}
