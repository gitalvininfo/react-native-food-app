import * as React from 'react';
import { Image, SafeAreaView, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import { StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

Feather.loadFont();

export default function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                    <Feather name="menu" size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>


            <View style={styles.titleWrapper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,

    },
    titlesSubtitle: {
        color: colors.textDark,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    titlesTitle: {
        color: colors.textDark,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        marginTop: 5
    }
})