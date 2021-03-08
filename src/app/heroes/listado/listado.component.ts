import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {//implements OnInit {
  /*
  //1ero se dispara el constructor
  //se ejecuta antes de la renderizacion del mismo
  constructor() {
    console.log('constructor');
   }

  //usualmente par ainciializar cosa 
  ngOnInit(): void {
    console.log('ngOnInit');
  }
*/

  heroes: string[]= ['Spiderman','IronMan','Hulk','Thor']
  heroesBorrados : string[]= [];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('borrando');
    // this.heroes = [];
    // this.heroes
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
    console.log(heroeBorrado);
     //this.heroesBorrados.push(heroeBorrado);

    

  }



}
