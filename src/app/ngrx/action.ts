import { Item } from '../models/item';
import { Action } from '@ngrx/store';

export namespace ITEM_ACTION{
    export const ADD_ITEM = "ADD_ITEM";
    export const UPDATE_ITEM = "UPDATE_ITEM";
    export const DELETE_ITEM = "DELETE_ITEM"
}

export class AddItem implements Action{
    readonly type:string = "ADD_ITEM";
    constructor(public payload: Item){}
}
export class UpdateItem implements Action{
    readonly type:string = "UPDATE_ITEM";
    constructor(public payload: Item){}
}
export class DeleteItem implements Action{
    readonly type:string = "DELETE_ITEM";
    constructor(public payload: Item){}
}

export type ItemActions = AddItem | UpdateItem | DeleteItem;