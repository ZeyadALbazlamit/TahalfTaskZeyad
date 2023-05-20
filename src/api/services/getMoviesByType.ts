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
        releaseDate: getFormatted(data.release_date, 'MMM DD, YYYY'),
        voteAverage: (data.vote_average * 10).toFixed() + "%",
    }
    return movie
}

export async function getMoviesByType(type: ApiTypes.movieType , page: number): Promise<ApiTypes.GetMoviesByType> {
    try {
console.log({type,page})
        const result = await axios.get(`movie/${type}?language=en-US&page=${page}&api_key=a531b8aedefc4f260e0a74e88e6f86a0`);
        return {
            kind: ApiTypes.ResponseKind.OK,
            movies: result.data.results.map((item) => transformMovieData(item)),
            isLastPage: page === result.data.total_pages
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

export default getMoviesByType;