import React from 'react';

const userName =localStorage.getItem('name');
export default function WelcomeMessage(){

    if (userName == 'undefined' || !userName) {
        return (<h3 className="mb-5">Bem vindo, é um prazer ter você aqui (: Faça login para aproveitar o site!</h3>
        );
    }
    else{
        return (<h1 className="mb-5">Bem vindo <b>{userName}</b>, é um prazer ter você aqui (:</h1>
        );
    }
}