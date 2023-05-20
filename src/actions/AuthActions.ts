import { Dispatch } from 'react';

export const updateIdValue = (id: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
          type: 'LOGIN',
          payload:id,
        });
      };
}