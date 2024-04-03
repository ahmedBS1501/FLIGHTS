import { RouterModule, Routes } from '@angular/router';
import { ListAvionsComponent } from './list-avions/list-avions.component';
import { NgModule } from '@angular/core';
import { AvionDetailsComponent } from './avion-details/avion-details.component';
import { ListPilotesComponent } from './list-pilotes/list-pilotes.component';
import { PiloteDetailsComponent } from './pilote-details/pilote-details.component';

export const routes: Routes = [
    
    { path: 'list_avions', component: ListAvionsComponent } ,
    { path: 'avion_details/:numAvion', component: AvionDetailsComponent },
    { path: 'List_Pilotes', component: ListPilotesComponent },
    { path: 'Pilote_details/:NumPilote', component: PiloteDetailsComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }