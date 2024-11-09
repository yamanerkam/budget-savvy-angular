import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-planner',
  standalone: true,
  imports: [ButtonModule,InputNumberModule,CommonModule,FormsModule],
  templateUrl: './budget-planner.component.html',
  styleUrl: './budget-planner.component.css'
})
export class BudgetPlannerComponent {
  chosenTab : string = 'Needs';
  rent? : number;
  groceries? : number;
  shopping? : number;
  travel? : number;
  totalSpent: number = 0;

  changeTab(tab:string){
    this.chosenTab = tab;
  } 

  calculateTotalSpent(){
    console.log('s')
    this.totalSpent = (this.rent ?? 0) + (this.groceries ?? 0);
  }
}
