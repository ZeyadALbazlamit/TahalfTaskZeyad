import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ImageBackground } from "react-native";
import { Api } from "api";
import { ApiTypes } from 'types';
import { AllNavStackParamList } from '../../types/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from "react-native-gesture-handler";

interface DashboardScreenProps {
    navigation: StackNavigationProp<AllNavStackParamList, 'MoviesDetailsScreen'>;
    route: RouteProp<AllNavStackParamList, 'MoviesDetailsScreen'>;
}
export default function ({ navigation, route }: DashboardScreenProps) {

    const [movie, setMovie] = useState<ApiTypes.Movie>(null);
    const [credits, setCredits] = useState<ApiTypes.Credit[]>()
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleGetMoviesDetails = async () => {
        const result = await Api.getMoviesDetailsApi(route.params.id)
        const CreditsApi = await Api.getCreditsByMoviesId(route.params.id)
        /*we must use promise.all
        
        */
        if (result.kind === ApiTypes.ResponseKind.OK && CreditsApi.kind === ApiTypes.ResponseKind.OK) {
            setMovie(result.movie)
            setCredits(CreditsApi.credits)
            setIsLoading(false)
        }
    }
    const handleGoBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        handleGetMoviesDetails()
    }, [])

    const Genre = ({ title }) => {
        return <View style={{ backgroundColor: "#5b5b5b55", paddingHorizontal: 12, paddingVertical: 2, borderRadius: 10 }}>
            <Text style={{ fontWeight: "bold" }}>
                {title}
            </Text>
        </View>
    }

    const Credit = ({ uri, name }) => {
        return (
            <View style={{ alignItems: "center" }}>
                <ImageBackground source={{ uri: uri }} style={{ width: 60, height: 60, borderRadius: 30, overflow: "hidden", marginEnd: 10 }} />
                <Text style={{ marginTop: 5, fontSize: 12, fontWeight: '700' }}>{name}</Text>
            </View>
        )
    }

    return (<View style={styles.container}>

        {isLoading ? (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator />
            </View>
        ) : <>
            <TouchableOpacity onPress={handleGoBack}>
                <Icon name="left" size={25} color="#5b5b5b" />
            </TouchableOpacity>
            <ScrollView>

                {
                    movie &&
                    <>
                        <View style={{ alignItems: "center" }} >
                            <ImageBackground source={{ uri: movie.posterPath }} style={{ width: 150, height: 250, borderRadius: 8, overflow: "hidden", marginEnd: 10 }} />
                            <Text style={{
                                marginVertical: 16,
                                fontWeight: "bold",
                                fontSize: 20

                            }} >{movie.title}</Text>
                            <Text style={{
                                color: "#47b613",
                                fontWeight: "bold",
                                fontSize: 16
                            }} >{movie.voteAverage}</Text>
                        </View>
                        <Text style={{ marginVertical: 8, fontWeight: "bold", fontSize: 16 }}>Overview</Text>
                        <Text>{movie.overview}</Text>
                        <Text style={{ marginTop: 24, marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Geners</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                            <View style={{ flexDirection: "row", gap: 10 }}>
                                {movie.genres?.map((item, index) => <Genre key={index} title={item.name} />)}
                            </View>
                        </ScrollView>
                        <Text style={{ marginTop: 24, marginBottom: 8, fontWeight: "bold", fontSize: 16 }}>Credits</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ gap: 12, flexDirection: "row" }}>
                                {credits?.map((item) => <Credit uri={item.uri} name={item.name} />)}
                            </View>
                        </ScrollView>
                    </>
                }

            </ScrollView>
        </>}
    </View>)
}

