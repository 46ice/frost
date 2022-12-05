import { useState } from 'react';

export default function useToken() {
    const getToken = () => {

        const tokenString = localStorage.getItem('token');

        if (tokenString!=null) {
            const userInfoString = tokenString.substring(9, tokenString.length - 1); 
            const userInfo = JSON.parse(userInfoString);
            console.log('aa' + userInfoString);
            localStorage.setItem('id', userInfo.id);
            localStorage.setItem('name', userInfo.name);
            localStorage.setItem('email', userInfo.email);
            localStorage.setItem('chestid', userInfo.chest_id);
            localStorage.setItem('contact', userInfo.contact);      
        } 
 
        
        const userToken = JSON.parse(tokenString);
        return userToken?.token
        };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
        };

    return {
    setToken: saveToken,
    token
    }
}