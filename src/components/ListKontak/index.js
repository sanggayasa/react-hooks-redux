import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak } from '../../actions/kontakAction';

const ListContact = () => {
    const {getListKontakResult, getListKontakLoading, getListKontakError} = useSelector((state)=> state.KontakReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('1. component running')
        dispatch(getListKontak());
    }, [dispatch]);
    
    return (
        <div>
            <h4>list kontak</h4>
            {getListKontakResult?(
                getListKontakResult.kontaks.map((kontak)=>{
                    return (
                        <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>
                    )
                })
            ): getListKontakLoading ? (
                <p>loading...</p>
            ): (
                <p>{getListKontakError ? getListKontakError : "data Kosong"}</p>
            )}
        </div>
    );
}

export default ListContact;
