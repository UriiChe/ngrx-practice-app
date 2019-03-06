import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { AppState } from 'src/app/ngrx/app.state';
import { Store } from '@ngrx/store';
import { AddItem } from 'src/app/ngrx/action';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item:Item;

  constructor(public store:Store<AppState>) {
    
    this.item = {
      name:"",
      description: "",
      id: String(new Date().getTime()),
      isSold: false,
      price: 0
    }
   }
   
  addItem(item){
    this.store.dispatch(new AddItem(item));
  }

  ngOnInit() {
    
  }

}
