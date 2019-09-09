import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';


export type Action = actions.CustomerAction;

export interface EntityState {
  settings: customersReducers.CustomerState;
}

export const reducers: ActionReducerMap<EntityState> = {

};
