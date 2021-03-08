import { createAotCompiler } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-contador',
    //   templateUrl: './app.component.html',
    //   styleUrls: ['./app.component.css']
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es:<strong></strong></h3>

        <!-- <button (click)="numero=numero+1">+1</button> -->
        <button (click)="acumular(base)">+</button>

        <span>{{numero }}</span>
        <button (click)="acumular(-base)">-</button>
    `
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  numero: number = 10;
  base : number = 5;

  sumar(){
    this.numero+= 1;
  }

  restar(){
    this.numero-= 1;
  }

  acumular(valor:number){
    this.numero+=valor;
  }
}











