import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  { path: 'add-item', component: AddItemComponent },
  { path: '', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
