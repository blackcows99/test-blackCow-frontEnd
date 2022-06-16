import React from 'react';
import { MyContainer, CustomButton } from '../elements';

const Login = () => {
  return (
    <>
      <h3 style={{ marginTop: '100px' }}>로그인</h3>
      <MyContainer width='40vw'>

        <CustomButton
          _onClick={() => {
            window.location.href = 'http://idontcare.shop/oauth2/authorization/kakao';
          }}
        >
          카카오 로그인
        </CustomButton>
      </MyContainer>
    </>
  );
};

export default Login;
