import { Directive, ElementRef } from '@angular/core';

import { ValidatorBase } from './validator-base';

@Directive({
    selector: '[alphaOnly]'
})
export class AlphaOnlyDirective extends ValidatorBase {
    // Allow Alphabets.
    constructor(private el: ElementRef) {
      super(el,new RegExp(/^[a-zA-Z]*$/));
    }
}

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective extends ValidatorBase {
  // Allow decimal numbers. The \. is only allowed once to occur
  constructor(private el: ElementRef) {
    super(el,new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g));
  }
}
