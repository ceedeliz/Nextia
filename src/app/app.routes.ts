import { RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import { NodoComponent } from './components/nodo/nodo.component';
import { HomeComponent } from './components/home/home.component'; 
import { BuscadorComponent } from './components/buscador/buscador.component';
const  APP_ROUTES : Routes = [
   {path: '', component:BuscadorComponent },
   {path: 'elemento/:id', component:NodoComponent },
  {path: '**', pathMatch: 'full', redirectTo: ''},
];
@NgModule({
   imports:[
       RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'})
   ],
   exports: [
       RouterModule
   ]
})
export class AppRoutingModule {}