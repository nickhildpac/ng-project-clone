import { CommonModule } from "@angular/common";
import { Component, Input, input } from "@angular/core";

@Component({
  'selector': 'app-investment-results',
  'standalone': true,
  'templateUrl': 'investment-results.component.html',
  'styleUrl': 'investment-results.component.css',
  'imports': [CommonModule]
})
export class InvestmentResults {
  results = input<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]>();

}