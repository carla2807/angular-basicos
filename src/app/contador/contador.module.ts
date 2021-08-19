//PASOS
//1°
import { NgModule } from "@angular/core";

import { ContadorComponent } from "./contador/contador.component";

//3°Decorador,le importo ContadorComponent y lo exporto ya que es el unico componente que tiene

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]

})

//2°
export class ContadorModule{

}
