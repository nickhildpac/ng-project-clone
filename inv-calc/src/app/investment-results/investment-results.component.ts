import { Component, computed } from "@angular/core";
import { InvestmentService } from "../investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: 'investment-results.component.html',
  styleUrl: 'investment-results.component.css',
})
export class InvestmentResults {
  constructor(private investmentService: InvestmentService) {

  }

  results = computed(() => this.investmentService.resultsData());
  // results = this.investmentService.resultsData().readOnly();


}
