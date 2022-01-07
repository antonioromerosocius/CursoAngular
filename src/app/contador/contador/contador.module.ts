
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';

@NgModule({
    /* las declaraciones son los que contiene */
    declarations:[
       ContadorComponent
    ],
    /* que sean visibles fuera del modulo */
    exports:[
        ContadorComponent
    ]
})

export class ContadorModule {}
