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
  education? : number;
  emergency? : number;
  totalSpent: number = 0;

  changeTab(tab:string){
    this.chosenTab = tab;
  } 

  private tabCalculations: Record<string, () => number> = {
    Needs: () => (this.rent ?? 0) + (this.groceries ?? 0),
    Wants: () => (this.shopping ?? 0) + (this.travel ?? 0),
    Savings: () => (this.education ?? 0) + (this.emergency ?? 0),
  };

  calculateTotalSpent(tab: string) {
    const calculate = this.tabCalculations[tab];
    this.totalSpent = calculate ? calculate() : 0;
  }
  
}
