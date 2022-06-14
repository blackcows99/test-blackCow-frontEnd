import React from 'react';
import '../tabBtn.css';
import styled from 'styled-components';
import PostList from '../components/PostList';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import {authApi} from "../shared/api";
const Main = () => {
  const navigate = useNavigate();
  const [auth,setAuth] = React.useState(false);

  // 탭 메뉴 구현 부분
  const [activeIndex, setActiveIndex] = React.useState(0);
  // const focus = useIsFocused();
  const authCheck=()=>{
    authApi.authCheck((res)=>{
      setAuth(true);
    },(error)=>{
      setAuth(false);
    })
  }

  React.useEffect(()=>{
    authCheck();
  },[])
  const tabArr = [
    {
      tabTitle: (
        <button
          key={0}
          className={`${activeIndex === 0 ? 'isActive' : 'isBtn'}`}
          onClick={() => tabClickHandler(0)}
        >
          All
        </button>
      ),
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: (
        <button
          key={1}
          className={`${activeIndex === 1 ? 'isActive' : 'isBtn'}`}
          onClick={() => tabClickHandler(1)}
        >
          컴퓨터
        </button>
      ),
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: (
        <button
          key={2}
          className={`${activeIndex === 2 ? 'isActive' : 'isBtn'}`}
          onClick={() => tabClickHandler(2)}
        >
          노트북
        </button>
      ),
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: (
        <button
          key={3}
          className={`${activeIndex === 3 ? 'isActive' : 'isBtn'}`}
          onClick={() => tabClickHandler(3)}
        >
          웨어러블
        </button>
      ),
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: (
        <button
          key={4}
          className={`${activeIndex === 4 ? 'isActive' : 'isBtn'}`}
          onClick={() => tabClickHandler(4)}
        >
          가전제품
        </button>
      ),
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: (
        <button
          key={5}
          className={`${activeIndex === 5 ? 'isActive' : 'isBtn'}`}
          onClick={() => tabClickHandler(5)}
        >
          기타
        </button>
      ),
      tabContent: <PostList activeIndex={activeIndex} />,
    },
  ];

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <Banner>이 세상의 모든 흑우들을 위하여</Banner>
      <TabMenu>
        {tabArr.map((section, idx) => {
          return section.tabTitle;
        })}
      </TabMenu>
      <div>{tabArr[activeIndex].tabContent}</div>
      <WriteBtn
        onClick={() => {
          navigate('/add');
        }}
        style={{display:auth?'':'none'}}
      >
        <CreateIcon style={{ color: '#ffd5d5' }} />
      </WriteBtn>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  font-family: 'MinSans-Medium';
`;

const Banner = styled.div`
  font-family: 'BMDOHYEON';

  width: 100%;
  height: 200px;

  font-size: 6vw;
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1507013324069-acfdabdca110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1252&q=80');

  background-position: center;
  background-size: cover;
`;

const TabMenu = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid #eee;

  display: flex;
  align-items: center;
  justify-content: center;

  & button:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
`;

const WriteBtn = styled.div`
  width: 60px;
  height: 60px;

  background-color: #f05454;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 1px rgba(166, 49, 49, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 2em;
  bottom: 2em;

  cursor: pointer;
`;

export default Main;
