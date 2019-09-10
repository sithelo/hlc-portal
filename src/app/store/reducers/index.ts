import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';
import * as settingsReducer from './setting.reducer';


export type Action = actions.AllSettingActions;

export interface EntityState {
  settings: settingsReducer.SettingState;
}

export const reducers: ActionReducerMap<EntityState> = {
settings: settingsReducer.reducer
};
