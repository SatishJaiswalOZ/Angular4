import { NgModule } from '@angular/core';
import { AlphaOnlyDirective, NumberOnlyDirective } from './validator.directive';

@NgModule({
    declarations: [
        AlphaOnlyDirective,
        NumberOnlyDirective
    ],
    exports: [
        AlphaOnlyDirective,
        NumberOnlyDirective
    ]
})
export class SharedModule {}

