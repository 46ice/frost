import React from 'react';
import Cadastro from '../pages/index/Cadastro.jsx';

const CadastroCall = () => {
  const handleOnSubmit = (user) => {
    console.log(user);
  };

  return (
    <React.Fragment>
      <Cadastro handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default CadastroCall;