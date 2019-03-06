import { Items, Item } from '../models/item';
import { Action } from '@ngrx/store';
import { ItemActions, ITEM_ACTION } from './action';





const initialState = {
    items: [
        new Item("Item1 name", "Item1 description", 499, false),
        new Item("Item2 name", "Item2 description", 300, false),
    ]
}

export function Reducer(state=initialState, action:ItemActions) {
    switch(action.type){
        case ITEM_ACTION.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case ITEM_ACTION.DELETE_ITEM:
            return {
                ...state,
                items: [...state.items.filter(item=>item.id!==action.payload.id)]
            }
        case ITEM_ACTION.UPDATE_ITEM:
            state.items = state.items.map(item=>{
                if(item.id === action.payload.id) item.isSold = true;
                return item;
            })
            return {
                ...state,
                items: [...state.items]
            }
        default:
            return state;
    }
}

