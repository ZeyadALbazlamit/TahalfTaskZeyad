import React, { } from "react";
import { View, Text, ImageBackground ,TouchableOpacity} from "react-native";
import { ApiTypes } from 'types';
import styles from "./styles";

interface MovieCardProps {
    movie: ApiTypes.Movie;
    handleGoToMoviesDetails:(id:number)=>void
}

const MovieCard = ({ movie,handleGoToMoviesDetails }: MovieCardProps) => {


    const Genre = ({title}) => {
        return <View style={{backgroundColor:"#d9d9d9",paddingHorizontal:12,paddingVertical:2,borderRadius:10}}>
            <Text >
                {title}
            </Text>
        </View>
    }

    return (<TouchableOpacity style={styles.container} onPress={()=>handleGoToMoviesDetails(movie.id)} >
        <View style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
        }}>
            <ImageBackground source={{ uri: movie.posterPath }} style={{ width: 75, height: '100%', borderRadius: 8, overflow: "hidden", marginEnd: 13 }} />
            <View >
                <Text style={{fontWeight:"bold",fontSize:15,marginEnd:8}} >{movie.title}</Text>
                <Text lineBreakMode='clip' style={{marginVertical:5}}>{movie.releaseDate}</Text>
                <View style={styles.genresContainer}>
                    {[{name:'Mark'},{name:'Ali'}]?.map((item) => <Genre title={item.name} />)}
                </View>
            </View>
        </View>

        <View style={styles.voteAverageContainer}>
            <Text style={styles.voteAverageText}>{movie.voteAverage}</Text>
        </View>
    </TouchableOpacity>);
}


export default MovieCard;