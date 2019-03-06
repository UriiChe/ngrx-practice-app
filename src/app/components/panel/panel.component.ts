import { Component, OnInit } from '@angular/core';
import { Item, Items } from '../../models/item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/app.state';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  items:Item[] = [];
  public itemsState:Observable<Items>
  constructor(public store:Store<AppState>  ) { }

  ngOnInit() {
    this.itemsState = this.store.select('itemsPage');
    console.log(this.itemsState);
  }
}
