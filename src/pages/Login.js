import React from 'react';
import { MyContainer, Input, CustomButton, Image } from '../elements';

const Login = () => {
  return (
    <>
      {/* <Image width="70vw" height="30vh"></Image> */}
      <h3 style={{ marginTop: '100px' }}>로그인</h3>
      <MyContainer width='40vw'>
        {/* <h3 style={{ textAlign: "center" }}>로그인</h3>

                <label>아이디</label>
                <Input placeholder="아이디를 입력하세요." />

                <label>비밀번호</label>
                <Input placeholder="비밀번호를 입력하세요." />
<<<<<<< HEAD

                <CustomButton width="100%">로그인</CustomButton>
                <CustomButton _onClick={() => { window.location.href = "http://idontcare.shop/oauth2/authorization/kakao" }} >카카오 로그인</CustomButton>
            </MyContainer>
        </>
    );
}
=======
                
                <CustomButton width="100%">로그인</CustomButton> */}
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
>>>>>>> 54e238bbf885cfcda207b068f2d63a92a2ede80e

export default Login;
