import * as React from "react";
import axios from "axios";
import { API_URI } from '../config'
import useSWR from 'swr';

import Backdrop from "../components/block/Backdrop";


const AuthContext = React.createContext({});

export function useAuthContext() {
    return React.useContext(AuthContext);
}




const initialState = {
    isLoading: true,
    isError: false,
    user: null
}

const dataFetchReducer = (dataState, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return initialState;
        case 'FETCH_SUCCESS':
            return { ...dataState, isLoading: false, user: action.payload }
        case 'FETCH_ERROR':
            return { ...dataState, isLoading: false, isError: true }
        default:
            return dataState
    }
}

export function AuthProvider({ children }) {
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

    const { data, error } = useSWR('/api/user/auth')

    useEffect(() => {
        axios
            .get(`${API_URI}/api/v1/auth/auth`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data.user })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    return (
        <AuthContext.Provider value={data}>
            {dataState.isLoading ? (
                <Backdrop open={dataState.isLoading} />
            ) : dataState.isError ? <>現在メンテナンス中です</> : children}
        </AuthContext.Provider>
    )
}