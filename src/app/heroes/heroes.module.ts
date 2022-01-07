import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* las declaraciones son los que contiene */
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    /* que sean visibles fuera del modulo */
    exports:[
        ListadoComponent
    ],
    /* aca van modulos, solo se pueden colocar modulos */
    imports:[
        CommonModule /* es lo basico del lenguaje */
    ]
    
})

export class HeroesModule {}

