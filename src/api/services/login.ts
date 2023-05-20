/**
 * @prettier
 *
 */

import { ApiTypes } from 'types';
import axios from '../instance';

export async function getMoviesDetails(): Promise<ApiTypes.Login> {
  try {

    const result = await axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=a531b8aedefc4f260e0a74e88e6f86a0`);
    const { data } = result;

    return {
      kind: ApiTypes.ResponseKind.OK,
      guestSessionId: data.guest_session_id
    };
  } catch (error) {
    const errorMsg = error.response?.data?.errors || error.message;
    const e = errorMsg.base || errorMsg;
    console.log('error in  Login Api' + error);
    return {
      kind: ApiTypes.ResponseKind.ERROR,
      error: e,
    };
  }
}

export default getMoviesDetails;


