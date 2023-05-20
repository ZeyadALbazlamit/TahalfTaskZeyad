/**
 * @prettier
 *
 */

import { ApiTypes } from 'types';
import axios from '../instance';
import moment, { Moment } from 'moment';


function getFormatted(
  time: moment.MomentInput,
  format: string,
) {
  // "parseZone" to ignore provided timezone.
  // for more info, refer to #https://www.tutorialspoint.com/momentjs/momentjs_parsezone.htm
  const forammted = moment.parseZone(time).format(format);
  return forammted;
}

const transformMovieData = (data) => {
  const movie: ApiTypes.Movie = {
    id: data.id,
    posterPath: 'https://image.tmdb.org/t/p/original'+data.poster_path,
    title: data.title,
    overview: data.overview,
    genres: data.genres,
    popularity: data.popularity,
    releaseDate:getFormatted(data.release_date,'MMM DD, YYYY') ,
    voteAverage: (data.vote_average*10).toFixed()+"%",
  }
  return movie
}

export async function getMoviesDetails(id: number  ): Promise<ApiTypes.GetMoviesDetails> {
  try {

    const result = await axios.get(`/movie/${id}?language=en-US&api_key=a531b8aedefc4f260e0a74e88e6f86a0`);
    const { data } = result;

    return {
      kind: ApiTypes.ResponseKind.OK,
      movie: transformMovieData(data)
    };
  } catch (error) {
    const errorMsg = error.response?.data?.errors || error.message;
    const e = errorMsg.base || errorMsg;
    console.log('error in get Movies By Type Api' + error);
    return {
      kind: ApiTypes.ResponseKind.ERROR,
      error: e,
    };
  }
}

export default getMoviesDetails;


