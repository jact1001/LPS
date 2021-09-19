import {createAction, props} from '@ngrx/store';

export const addSlideToList = createAction('[Chat] Add Slide To List', props<{ slide }>());
