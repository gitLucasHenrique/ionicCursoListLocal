import { Component, Input } from '@angular/core';


/**
 * Generated class for the SaleCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sale-card',
  templateUrl: 'sale-card.html'
})
export class SaleCardComponent {

  @Input() sale;
  @Input() showDetails;

  constructor() {

  }

}
