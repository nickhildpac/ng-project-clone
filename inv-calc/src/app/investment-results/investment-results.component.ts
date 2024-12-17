import { CommonModule } from "@angular/common";
import { Component, computed } from "@angular/core";
import { InvestmentService } from "../investment.service";

@Component({
  'selector': 'app-investment-results',
  'standalone': true,
  'templateUrl': 'investment-results.component.html',
  'styleUrl': 'investment-results.component.css',
  'imports': [CommonModule]
})
export class InvestmentResults {
  constructor(private investmentService: InvestmentService) {

  }

  results = computed(() => this.investmentService.resultsData());
  // results = this.investmentService.resultsData().readOnly();


}
