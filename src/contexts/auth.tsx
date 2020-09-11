import React, { createContext, useState, useEffect } from "react";
import * as auth from "../services/auth";
import AsyncStorage from  '@react-native-community/async-storage';
import api from "../services/api";
import { useNavigation } from '@react-navigation/native';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(data:any): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);
    //const { navigate } = useNavigation();

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');

            // simular uma lentidão para mostar o loading.
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if(storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser));
                //setLoading(false);
            }
            setLoading(false);
        }
        
        loadStorageData();
    }, []);

    async function signIn(data:any) {
        const response = await auth.signIn(data);
        setUser(response.user);

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        //navigate('Menu');
    }

    async function signOut() {
        await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;