import React, { useEffect } from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

import { async } from '@firebase/util';
import { postApi } from '../shared/api';
import { loadCommercial } from '../redux/modules/Commercial';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadWordFB } from '../redux/modules/post';

const PostList = (props) => {
  const navigate = useNavigate();
  const postList = useSelector( state => state.post.list);
  console.log(postList)
  const [star, setStar] = React.useState([0, 1, 2, 3, 4]);
  // const [postData, setPostData] = React.useState([]);
  const [category, setCategory] = React.useState([
    '컴퓨터',
    '노트북',
    '웨어러블',
    '가전제품',
    '기타',
  ]);

  const dispatch = useDispatch();

  // postList 서버 데이터 가져오기
  // console.log(postApi.loadPost()); // 프로미스 값 가져옴
  // const test = async () => {
  //   const test_list = await postApi.loadPost();
  //   const data = test_list.data;
  //   // console.log(data);
  //   // return setPostData(data);
  // };



  useEffect(() => {
    // test();
    dispatch(loadWordFB());
  }, []);

  // 탭 버튼 클릭에 따른 데이터
  const tabContent = postList.filter((x) => {
    if (x.category == props.activeIndex) {
      return x.category;
    }
    if (props.activeIndex === 0) {
      return x;
    }
  });

  return (
    <Container>
      {tabContent.map((list, idx) => {
        return (
          <Post key={idx}>
            <Top>
              <h4>{list.member}</h4>
              <p>{list.date}</p>
            </Top>
            {list.img && (
              <Picture
                onClick={() => {
                  navigate(`/detail/${list.id}`, {
                    id: list.id,
                  });
                }}
                style={{ backgroundImage: `url(${list.img})` }}
              />
            )}

            <Contents key={idx}>
              <h4>{list.device}</h4>
              <p>{list.contents}</p>
            </Contents>
            <Bottom style={{ marginTop: '10px' }}>
              <div
                style={{
                  backgroundColor: '#DDDDDD',
                  padding: '3px 7px',
                  borderRadius: '30px',
                  fontSize: '15px',
                  color: '#686868',
                }}
              >
                {category[list.category - 1]}
              </div>
              <div>
                {star.map((star, idx) => {
                  return (
                    <StarIcon key={idx} style={{ color: list.score > idx ? '#F05454' : '#eee' }} />
                  );
                })}
              </div>
            </Bottom>
          </Post>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 30px auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 15px 10px;

  justify-items: center;
`;

const Post = styled.div`
  width: 330px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;

  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.05);

  box-sizing: content-box;
  padding: 10px 0;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Top = styled.div`
  width: calc(100% - 20px);
  margin: auto;

  & h4,
  p {
    margin: 10px 0;
  }

  & h4 {
    font-size: 20px;
  }

  & p {
    font-size: 15px;
    color: #828282;
  }
`;

const Picture = styled.div`
  width: 100%;
  height: 300px;

  background-color: #eee;

  background-position: center;
  background-size: cover;
`;

const Contents = styled.div`
  width: calc(100% - 20px);
  height: auto;

  display: flex;
  flex-direction: column;
  margin: auto;

  text-align: left;

  & h4 {
    width: 100%;
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }

  & p {
    width: 100%;
    margin: 3px 0;
    font-size: 17px;
  }
`;

const Bottom = styled.div`
  width: calc(100% - 20px);
  margin: auto;
`;

export default PostList;