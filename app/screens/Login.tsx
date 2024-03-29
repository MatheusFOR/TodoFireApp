import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = getAuth();

    const signUp = async() => {
        const after = createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = async() => {
      const user =  signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="E-mail" onChangeText={(text:string) => setEmail(text)} value={email} />
            <TextInput style={styles.input} placeholder="Senha" onChangeText={(text:string) => setPassword(text)} value={password} />
            
            <Button onPress={signIn} title="Entrar" />
            <Button onPress={signUp} title="Criar conta" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'column',
        paddingVertical: 20,
    },
    input: {

        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 18,
        backgroundColor: '#fff',
    },
    
});