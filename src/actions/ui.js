import { types } from "../components/types/types"

/* Note: Sync actions doesn't need return*/

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err,
});

export const removeError = () => ({
    type: types.uiRemoveError,
});

export const startLoading = () =>({
    type: types.uiStartLoading,
})
 
export const finishLoading = () =>({
    type: types.uiFinishLoading,
})