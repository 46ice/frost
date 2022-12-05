import React from 'react';
import HeaderLogged from './HeaderLogged';
import Header from './Header';

const token =localStorage.getItem('token');
export default function HeaderOption(){
    if (!token) {
        return (<Header />)
    }
    else {
        return (<HeaderLogged />);
    }
}