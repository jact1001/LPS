import { Action, createReducer, on } from '@ngrx/store';
import * as slideActions from '../store/slide.actions';

export interface ISlidesState {
    slides: any[];
}

/** Initial State */
export const initialState: ISlidesState = {
    slides: [],
};

export function slideReducer(state: ISlidesState | undefined, action: Action): ISlidesState {
    return reducer(state, action);
}

const reducer = createReducer<ISlidesState>(
    initialState,

    /** Add slide to the slides array */
    on(slideActions.addSlideToList, (state, { slide }) => ({
        ...state,
        slides: [...state.slides, slide]
    }))
);
