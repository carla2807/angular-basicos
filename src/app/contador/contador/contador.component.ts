import {Component}from '@angular/core'

@Component({
    selector:'app-contador',
    template:`
<h1>{{titulo}}</h1>

<h3>La base es: <strong>{{base}}</strong></h3>

<!--uso evento click que va entre parentesis, igual y entre comillas-->
<button (click)="sumar()">+1</button> <!--Lllamo al metodo sumar que esta en app.component.ts-->
<span>{{numero}}</span>
<button (click)="restar()">-1</button>

<!--
<button (click) ="acumular(base)"> +{{base}} </button> Llama al metodo acumular, se le suma la base que es 5
<span>{{numero}}</span>  permite que a partir de 10 se aumente de 5 o se decremente en 5
<button (click) ="acumular(-base)">-{{base}}</button> se le resta la base que es -5
-->   
 `
    
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10; //Creo propiedad de tipo numero y le asigno 10
 
    base: number = 5;
    //Hago referencia con this a la propiedad numero que suma y resta
    
    sumar(){ //Creo metodo 
     this.numero += 1; 
    }
 
   restar(){
     this.numero -= 1;
    }
 
    acumular(valor:number){
      this.numero += valor;
 
    }
}

//LA CLASE TIENE 2 PROPIEDADES Y DOS METODOS
  

   //EJERCICIO TAREA ACUMULADOR: 
   //CREE EN LA CLASE PROPIEDAD base: number = 5
   //CREO METODO ACUMULAR, RECIBE PARAMETRO valor , this.numero += valor, el valor asignado fue de 10

   //otra forma,le paso parametro valor de tipo number
   //acumular(valor: number){
     // this.numero += valor;
   //}


   // Asi quedaria en app.component
   //<button (click)="acumular(+1)">+1</button>
    //<button (click)="acumular(-1)">-1</button>