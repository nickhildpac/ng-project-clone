import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  'selector': 'app-investment-results',
  'standalone': true,
  'templateUrl': 'investment-results.component.html',
  'styleUrl': 'investment-results.component.css',
  'imports': [CommonModule]
})
export class InvestmentResults {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

}
