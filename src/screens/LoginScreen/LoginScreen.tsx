import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl, ImageBackground, Button } from "react-native";
import { Api } from "api";
import { ApiTypes } from 'types';
import { MovieCard } from 'components'
import { AllNavStackParamList } from '../../types/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { updateIdValue } from 'actions'
import { useSelector, useDispatch } from 'react-redux';

interface DashboardScreenProps {
    navigation: StackNavigationProp<AllNavStackParamList, 'MoviesDetailsScreen'>;
    route: RouteProp<AllNavStackParamList, 'MoviesDetailsScreen'>;
}
export default function ({ navigation, route }: DashboardScreenProps) {

    const dispatch = useDispatch() as any

    const handleLogin = async () => {
        const result = await Api.login()
        if (result.kind === ApiTypes.ResponseKind.OK) {
            dispatch(updateIdValue(result.guestSessionId))
            handleGoBack()
        }
    }
    const handleGoBack = () => {
        navigation.goBack()
    }

    return (<View style={styles.container}>
        <TouchableOpacity onPress={handleGoBack}>
            <Icon name="left" size={25} color="#5b5b5b" />
        </TouchableOpacity>
        <TextInput />
        <TextInput />
        <TouchableOpacity onPress={handleLogin}>
            <Text>login</Text>
        </TouchableOpacity>
    </View>)
}

