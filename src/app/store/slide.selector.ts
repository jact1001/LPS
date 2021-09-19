import { createSelector } from '@ngrx/store';

export const selectSlidesState = (state) => state;

export const selectSlides = createSelector(
    selectSlidesState,
    (state) => state.slides
);
