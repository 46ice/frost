import React from 'react';
import UserForm from '../components/UserForm';

const CadastroCall = () => {
  const handleOnSubmit = (user) => {
    console.log(user);
  };

  return (
    <React.Fragment>
      <UserForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default CadastroCall;