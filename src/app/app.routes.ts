import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BudgetPlannerComponent } from './pages/budget-planner/budget-planner.component';
import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';
import { IncomeTrackerComponent } from './pages/income-tracker/income-tracker.component';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TaxCalculatorComponent } from './pages/tax-calculator/tax-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'budget-planner', component: BudgetPlannerComponent },
  { path: 'expense-tracker', component: ExpenseTrackerComponent },
  { path: 'income-tracker', component: IncomeTrackerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'tax-calculator', component: TaxCalculatorComponent },
  { path: '**', redirectTo: 'main-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }