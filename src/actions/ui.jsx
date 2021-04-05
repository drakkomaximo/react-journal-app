import { types } from "../types/types";
import Swal from 'sweetalert2'

export const setError = (err) => {
  Swal.fire('Fail', err, 'error')
  return {
    type: types.uiSetError,
    payload: err,
  }
};

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const startLoading = () =>({
  type:types.uiStartLoading
})

export const finishLoading = () =>({
  type:types.uiFinishLoading
})

