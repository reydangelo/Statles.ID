import { StyleSheet } from "react-native";

const global_styles = StyleSheet.create({
    themeContainer : {
        backgroundColor: '#000',
        flex: 1,
    },
    normalText : {
        color: '#fff',
        fontSize: 15,
    },
    pageTitle : {
        height: 50,
        color: '#fff',
        alignSelf: 'flex-start',
        fontSize: 30,
        marginLeft: 30,
        marginTop: 20,
        fontWeight: '500'
    },
    pageTitleContainer : {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    mainContainer : {
        alignItems: 'center',
    },


})

export default global_styles