import axios from "axios";
export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () =>{
    console.log('2. action running')
    return (dispatch)=>{
        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload:{
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'GET',
            url: 'http://localhost:5000/',
            timeout: 120000
        })

        .then((response)=>{
            console.log('3. berhasil dapat data'+response.data);
            dispatch({
                type:GET_LIST_KONTAK,
                payload:{
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        })

        .catch((error)=>{
            console.log('3. gagal dapat data'+ error.message)
            dispatch({
                type:GET_LIST_KONTAK,
                payload:{
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    }
}