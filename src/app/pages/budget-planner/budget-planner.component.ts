import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


type TabName = 'Needs' | 'Wants' | 'Savings' | 'Total';
type TotalProperty = 'needsTotal' | 'wantsTotal' | 'savingsTotal' | 'totalSpent';

@Component({
  selector: 'app-budget-planner',
  standalone: true,
  imports: [ButtonModule,InputNumberModule,CommonModule,FormsModule],
  templateUrl: './budget-planner.component.html',
  styleUrl: './budget-planner.component.css'
})

export class BudgetPlannerComponent {
  chosenTab : TabName = 'Needs';
  rent? : number;
  groceries? : number;
  shopping? : number;
  travel? : number;
  education? : number;
  emergency? : number;
  totalSpent: number = 0;
  needsTotal?: number = 0;
  wantsTotal?: number = 0;
  savingsTotal?: number = 0;
  

  changeTab(tab:TabName){
    this.chosenTab = tab;
    this.calculateTotalSpent(tab);
  } 

  private tabCalculations: Record<TabName, () => number> = {
    Needs: () => (this.rent ?? 0) + (this.groceries ?? 0),
    Wants: () => (this.shopping ?? 0) + (this.travel ?? 0),
    Savings: () => (this.education ?? 0) + (this.emergency ?? 0),
    Total: () => (this.needsTotal ?? 0) + (this.wantsTotal ?? 0) + (this.savingsTotal ?? 0)
  };

  private tabReset: Record<TabName, () => number> = {
    Needs: () => (this.rent = 0) + (this.groceries = 0),
    Wants: () => (this.shopping = 0) + (this.travel = 0),
    Savings: () => (this.education = 0) + (this.emergency = 0),
    Total: () => (this.rent = 0) + (this.groceries = 0) + (this.shopping = 0) + (this.travel = 0) + (this.education = 0) + (this.emergency = 0)
  };

  private tabTotals: Record<TabName, TotalProperty> = {
    Needs: 'needsTotal',
    Wants: 'wantsTotal',
    Savings: 'savingsTotal',
    Total:'totalSpent'
  };

  calculateTotalSpent(tab: TabName) {
    const calculate = this.tabCalculations[tab];
    this.totalSpent = calculate ? calculate() : 0;
  }

  saveTab(tab: TabName) {
    const calculate = this.tabCalculations[tab];
    const totalProperty = this.tabTotals[tab];
    const reset = this.tabReset[tab]; 
    
    this[totalProperty] = calculate();
    reset()

    this.totalSpent = 0;
  }

  
}
