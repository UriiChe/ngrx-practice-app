import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';  


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemComponent } from './components/item/item.component';
import { Reducer } from './ngrx/reducer';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({itemsPage:Reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
