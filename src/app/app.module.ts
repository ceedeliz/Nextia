import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { DataApiService } from './services/data-api.service';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NodoComponent } from './components/nodo/nodo.component';
import { IMPLICIT_REFERENCE } from '@angular/compiler/src/render3/view/util';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    NodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule 
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
