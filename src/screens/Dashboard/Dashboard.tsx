import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { Api } from "api";
import { ApiTypes } from 'types';
import { MovieCard } from 'components'
import { AllNavStackParamList } from '../../types/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reducers';
import styles from "./styles";

interface DashboardScreenProps {
    navigation: StackNavigationProp<AllNavStackParamList, 'DashboardScreen'>;
    route: RouteProp<AllNavStackParamList, 'DashboardScreen'>;
}
export default function ({ navigation }: DashboardScreenProps) {

    const [type, setTtype] = useState<ApiTypes.movieType>('upcoming');
    const [movies, setMovies] = useState<ApiTypes.Movie[]>([])
    const [isLastPage, setIsLastPage] = useState<boolean>(false);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(true);
    const page = useRef(1);
    const moviesRef=useRef<FlatList>(null);
    const { auth } = useSelector((state: RootState) => state);

    const handleGetMoviesByType = async () => {
        if (!isLastPage) {
            const result = await Api.getMoviesByTypeApi(type, page.current)
            if (result.kind === ApiTypes.ResponseKind.OK) {
                if(page.current!==1){
                    setMovies([...movies,... result.movies]);
                }else{
                    setMovies( result.movies);
                }
                setIsLastPage(result.isLastPage);
                setIsRefreshing(false)
            }
        }
    }

    const getKeyExtractor = (item,index) => item.id+index;
    const onRefresh = () => {
        page.current = 1;
        handleGetMoviesByType()
    }

    const handleLoadMore = () => {
        page.current += 1;
        handleGetMoviesByType();
    };

    const handleChangeType = (type) => {
        page.current = 1;
        setTtype(type)
    }

    const handleGoToMoviesDetails = (id: number) => {
        if (auth.id) {
            navigation.navigate('MoviesDetailsScreen', { id })

        } else {
            navigation.navigate('LoginScreen')
        }
    }

    const RnderFooter = () => {
        return !isLastPage ? (
            <ActivityIndicator  />
        ) : (
          <View  />
        );
      };

    useEffect(() => {
        handleGetMoviesByType()
    }, [])

    useEffect(() => {
        moviesRef.current?.scrollToIndex({animated: true, index: 1})
        page.current = 1;
        handleGetMoviesByType();
    }, [type])



    return (<View style={styles.container}>
        <Text style={{ marginTop: 24, fontSize: 32, fontWeight: 'bold' }}>Movies</Text>
        <View style={{
            flexDirection: "row",
            marginVertical: 32,
            gap: 5
        }}>
            <TextTitle title='Upcoming' type='upcoming' handleChangeType={handleChangeType} isSelected={type === 'upcoming'} />
            <TextTitle title='Popular' type='popular' handleChangeType={handleChangeType} isSelected={type === 'popular'} />
            <TextTitle title='Top Rated' type='top_rated' handleChangeType={handleChangeType} isSelected={type === 'top_rated'} />
        </View>
        {movies.length > 0 && (
            <FlatList
                style={{ flex: 1 }}
                ref={moviesRef}
                data={movies}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
                keyExtractor={getKeyExtractor}
                renderItem={({ item }) => <MovieCard movie={item} handleGoToMoviesDetails={handleGoToMoviesDetails} />}
                showsVerticalScrollIndicator={false}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={RnderFooter}
            />
        )}
    </View>)
}

const TextTitle = ({ title, isSelected = false, type, handleChangeType }) => {
    return (<TouchableOpacity
        onPress={() => handleChangeType(type)}
        style={[{
            paddingHorizontal: 12,
            paddingVertical: 5,
            flex: 1,
            borderRadius: 15,
            backgroundColor: isSelected ? "#47b613" : "#5b5b5b5b",
            alignItems: "center"
        },
        isSelected ? {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        } : {}
        ]} >
        <Text style={{
            fontWeight: "600",
            fontSize: 17,
            color: isSelected ? "#fff" : "#000",
        }} >
            {title}
        </Text>
    </TouchableOpacity>
    )
}