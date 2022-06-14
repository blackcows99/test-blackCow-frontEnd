import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { MyContainer, Input, CustomButton, Image } from '../elements';
import {authApi} from '../shared/api';
const SignUp = () => {
    const navigate = useNavigate();
    const regExpId = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const regExpPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw_check, setPw_check] = useState('');
    const [nick, setNick] = useState('');

    const signUp = () => {
        console.log('sign')
        if (!regExpId.test(id) || id === '') {
            alert('올바른 이메일 형식이 아닙니다!')
            return;
        }
        if (!regExpPw.test(pw) || pw === '') {
            alert('올바른 비밀번호 형식이 아닙니다!')
            return;
        }
        if (pw !== pw_check) {
            alert('비밀번호가 일치하지 않습니다!')
            return;
        }
        if (nick === '') {
            alert('닉네임을 입력해주세요')
            return;
        }
        const data = { id, nick };
        authApi.signup(data);
        // navigate("/login");
    }
    return (
        <>
            <Image width="70vw" height="30vh"></Image>
            <MyContainer width="40%">
                <h3 style={{ textAlign: "center" }}>회원가입</h3>
                <label>아이디</label><br />
                <Input
                    placeholder="아이디를 입력하세요."
                    width="60%"
                    _onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                <CustomButton width="35%">중복확인</CustomButton><br />
                <label>비밀번호</label>
                <Input
                    placeholder="비밀번호를 입력하세요."
                    _onChange={(e) => {
                        setPw(e.target.value);
                    }}
                />
                <label>비밀번호 확인</label>
                <Input
                    placeholder="비밀번호를 입력하세요."
                    _onChange={(e) => {
                        setPw_check(e.target.value);
                    }}
                />
                <label>닉네임</label>
                <Input
                    placeholder="닉네임 입력하세요."
                    _onChange={(e) => {
                        setNick(e.target.value);
                    }}
                />
                <CustomButton _onClick={signUp} width="100%"> 회원가입 </CustomButton>
            </MyContainer>
        </>
    );
}

export default SignUp;