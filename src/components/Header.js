import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUserFB } from '../redux/modules/user';
import Cookies from "universal-cookie";
import instance from '../shared/AxiosRequest';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getParameter = (key) => {
    return new URLSearchParams(window.location.search).get(key);
  };
  let memberParam = getParameter("member");

  const user = useSelector((state) => state.user);
  console.log(user)
  const signIn = () => {
    navigate('/login');
  };

  const signOut = () => {
    // instance.get('/logout').then((res) => {
    removeCookie("member")
    dispatch(deleteUser())
    navigate('/login');

    // });
  };
  const setJwtCookie = (token) => {
    const cookies = new Cookies();
    let date = new Date();
    date.setMinutes(date.getMinutes() + 20);
    cookies.set("member", token, { path: '/' });
    getMemberInfo();
  }
  const removeCookie = (name) => {
    const cookies = new Cookies();
    cookies.remove(name, { path: '/' });
  }
  const setToken = () => {
    if (memberParam != null) {
      setJwtCookie(memberParam);
      console.log(memberParam);

      navigate('/');
    }
  }
  const getMemberInfo = () => {
    dispatch(loadUserFB());

  };

  React.useEffect(() => {
    setToken();
  }, [])



  return (
    <Container>
      <h1
        onClick={() => {
          navigate('/');
        }}
      >
        BlackCow
      </h1>
      <div>
        <p>{user.name == undefined ? '' : user.name + '님, 안녕하세요!'}</p>
        <button onClick={signIn} style={{ display: user.name == undefined ? '' : 'none' }}>
          로그인
        </button>
        <button onClick={signOut} style={{ display: user.name != undefined ? '' : 'none' }}>
          로그아웃
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #222831;
  width: 100%;
  height: 70px;
  z-index: 1;

  box-sizing: border-box;
  padding: 0px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;

  & h1 {
    font-family: 'Hahmlet-ExtraBold';
    color: #f05454;
    font-size: 33px;
    cursor: pointer;
    margin: 0;
  }

  & div {
    font-family: 'MinSans-Medium';
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div > p {
    color: #818181;
    font-size: 16px;
    margin: 0;
  }

  & div > button {
    width: 85px;
    height: 45px;
    margin-left: 10px;

    background-color: transparent;
    color: #f05454;
    border: none;
    border-radius: 5px;
  }

  & div > button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Header;
