import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

 
//Defino array string vacio y le asigno
 heroes: string [] = ['Spiderman','Ironman','Hulk','Thor'];

  //Creo propiedad heroeBorrado y lo llamo adentro del metodo borrarHeroe
  heroeBorrado: string = '';
 //Metodo para borrar,shift borra el primer elemento del array heroes,uso operador logico OR y incluyo string vacio
 borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
 
}
}