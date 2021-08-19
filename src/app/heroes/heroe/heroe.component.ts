import { Component } from "@angular/core";



@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
nombre:string = 'Iroman';
edad:number = 45


get nombreCapitalizado(): string{ //Get y Set
    return this.nombre.toUpperCase();
}
obtenerNombre(): string{ //Metodo para obtener nombre
return `${this.nombre} - ${this.edad}`; //template string
}

cambiarNombre(): void{
this.nombre = 'Spiderman'
}

cambiarEdad(): void{
    this.edad = 30
}
}

