/**
 * @prettier
 *
 */

import { ApiTypes } from 'types';
import axios from '../instance';

export async function getCreditsByMoviesId(id:number): Promise<ApiTypes.GetCreditsByMoviesId> {
    try {
        502356
        const result = await axios.get(`/movie/${id}/credits?language=en-US&api_key=a531b8aedefc4f260e0a74e88e6f86a0`);
    
        const  credits=result.data.cast.map((item)=>({
            uri:'https://image.tmdb.org/t/p/original'+ item.profile_path,
            name: item.name
        }))
        console.log({credits})
        return {
            kind: ApiTypes.ResponseKind.OK,
            credits
        };
    } catch (error) {
        const errorMsg = error.response?.data?.errors || error.message;
        const e = errorMsg.base || errorMsg;
        console.log('error in get Credits By MoviesId' + error);
        return {
            kind: ApiTypes.ResponseKind.ERROR,
            error: e,
        };
    }
}

export default getCreditsByMoviesId;