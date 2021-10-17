import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { jugadoresService } from './servicios/jugadores.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { APP_ROUTING } from './app.routes';
import { JugadorComponent } from './components/jugador/jugador.component';
import { Jugador2Component } from './components/jugador2/jugador2.component';
import { Jugador3Component } from './components/jugador3/jugador3.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    FooterComponent,
    HeaderComponent,
    JugadorComponent,
    Jugador2Component,
    Jugador3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [jugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
