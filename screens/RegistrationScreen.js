import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export const RegistrationScreen = () => {
    return (
        <View style={styles.form}>
            <View>
                <View style={styles.avatar}/>
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput style={styles.input} placeholder='Логін' />
                <TextInput style={styles.input} placeholder='Адреса електронної пошти' />
                <TextInput style={styles.input} placeholder='Пароль' />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <Text style={styles.login}>Вже маєте акаунт? Увійти</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        position:"relative",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
        marginTop: "auto"
    },
    avatar: {
        position:"absolute",
        top:-60,
        alignSelf:"center",
        width: 120,
        height: 120,
        borderRadius:16,

        backgroundColor:"#F6F6F6",
    },
    title: {
        textAlign: 'center',
        marginTop: 92,
        marginBottom: 33
    },
    btnTitle: {
        textAlign: 'center',
        color: "#FFFFFF",
        paddingHorizontal: 94,
    },
    input: {
        borderWidth: 1,
        marginBottom: 16,
        height: 50,
        paddingVertical: 16,
        paddingHorizontal: 16

    },
    btn: {
        height: 51,
        marginTop: 27,
        marginBottom: 16,
        borderRadius: 50,
        backgroundColor: "#FF6C00",
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    login: {
        textAlign: 'center',
        marginHorizontal: 76,
        marginBottom: 78
    }
})