import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Store } from '@ngrx/store';
import { DeleteItem, UpdateItem } from 'src/app/ngrx/action';
import { AppState } from 'src/app/ngrx/app.state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:Item;
  constructor(public store:Store<AppState>) {
   }

  ngOnInit() {
    
  }
  deleteItem(item){
    this.store.dispatch(new DeleteItem(item));
  }
  updateItem(item){
    this.store.dispatch(new UpdateItem(item));
  }

}
