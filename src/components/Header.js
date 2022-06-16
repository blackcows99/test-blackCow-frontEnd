import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUserFB } from '../redux/modules/user';
import { useCookies, Cookies } from "react-cookie";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getParameter = (key) => {
    return new URLSearchParams(window.location.search).get(key);
  };
  let memberParam = getParameter("member");

  const user = useSelector((state) => state.user);

  const [cookies, setCookie, removeCookie] = useCookies(['member']);
  const signIn = () => {
    navigate('/login');
  };

  const signOut = () => {
    axios.get('/logout').then((res) => {
      removeCookie("member", { path: '/', secure: true, httpOnly: true });
      dispatch(deleteUser())
      navigate('/login');

    });
  };

  const setToken = () => {
    if (memberParam != null && cookies.member == undefined) {
      let date = new Date();
      date.setMinutes(date.getMinutes() + 20);
      let cookie = new Cookies();
      cookie.set("member", memberParam, { path: '/', date, secure: true, })
      // navigate('/');
    } else if (user.name == undefined) {
      removeCookie("member", { path: '/', secure: true, httpOnly: true });
      navigate('/');
    }
  }
  const getMemberInfo = async () => {
    dispatch(loadUserFB());

  };

  React.useEffect(() => {
    getMemberInfo();
    setToken();
  }, []);

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
