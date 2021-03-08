import { ContadorModule } from './contador/contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [//usualmente sonlos componentes
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [//otros modulos
    BrowserModule,
    HeroesModule,
    ContadorModule

  ],
  providers: [],//masomenos servicios especificos a un modulo
  bootstrap: [AppComponent]// componente principal
})
export class AppModule { }
