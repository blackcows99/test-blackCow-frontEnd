import React, { useRef, useState } from 'react';
import { Input, Title, Select, Textarea, Image, MyContainer, CustomButton } from '../elements';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Score } from '../components';
import { postApi } from '../shared/api';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../shared/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createPostFB, updatePostFB } from '../redux/modules/post';

const Form = ({ mode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInput = useRef();
  const [fileName, setFileName] = useState('');
  const [fileImage, setFileImage] = useState('');
  const [rating, setRating] = useState('');
  const [selected, setSelected] = useState('');
  const [inputText, setInputText] = useState('');
  const [areaText, setAreaText] = useState('');
  const [commercial, setCommercial] = useState(null);

  const getData = async () => {
    let data;
    let file_url;
    if (fileInput.current.files[0]) {
      const file = fileInput.current.files[0];
      const uploaded_file = await uploadBytes(
        ref(storage, `images/${file.name}`),
        file
      );
      file_url = await getDownloadURL(uploaded_file.ref);
    }
    data = {
      device: inputText ? inputText : commercial?.device,
      contents: areaText ? areaText : commercial?.contents,
      category:
        mode === 'add'
          ? selected
            ? selected
            : commercial?.category
              ? commercial?.category
              : 1
          : selected
            ? selected
            : 1,
      score: rating ? rating : commercial?.score,
      img: file_url ? file_url : commercial?.img,
    };
    return data;
  };

  const addClick = () => {
    getData().then((res) => {
      if (!(res.device && res.contents && res.score && res.img)) {
        alert('모든 값을 다 입력해주세요.');
        return;
      }
      dispatch(createPostFB(res));
      navigate(-1);
    });
  };
  const updateClick = () => {
    getData().then((res) => {
      dispatch(updatePostFB(id, res));
      navigate('/');
    });
  };

  const call = async () => {
    const data = await postApi.loadOnePost(id);
    setCommercial(data);
  };

  React.useEffect(() => {
    if (mode === 'update') {
      call();
    }
  }, []);

  const selectFile = (e) => {
    setFileName(e.target.value.split('\\')[2]);
    setFileImage(URL.createObjectURL(fileInput.current.files[0]));
  };

  const onClickScore = (score) => {
    setRating(score);
  };

  const onChangeSelect = (e) => {
    setSelected(e.target.value);
  };

  console.log(document.getElementsByClassName('.formSelect'));
  return (
    <MyContainer className='form-box' width='60vw' margin='100px auto 30px auto'>
      <Title text='이미지를 선택해주세요.'></Title>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Input
            placeholder='파일을 선택해주세요.'
            value={fileName || ''}
            _disabled={true}
            width='100%'
          />

          <CustomButton width='150px'>
            <label htmlFor='file' style={{ cursor: 'pointer' }}>
              파일 찾기
            </label>
          </CustomButton>
        </div>

        <input
          id='file'
          ref={fileInput}
          type='file'
          style={{ display: 'none' }}
          onChange={selectFile}
        />

        <Image
          src={
            mode === 'add'
              ? fileImage
                ? fileImage
                : null
              : fileImage
                ? fileImage
                : commercial?.img
          }
          width='100%'
          height='auto'
        />
        <Title text='평점을 선택해주세요.'></Title>
        <Score _onClick={onClickScore} />
      </div>
      <Title text='내용을 입력해주세요'></Title>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          placeholder='제품명을 입력해주세요.'
          width='79%'
          value={mode === 'add' ? inputText : inputText ? inputText : commercial?.device}
          _onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <Select className='formSelect' _onChange={onChangeSelect} value={commercial?.category} />
      </div>
      <Textarea
        placeholder='내용을 입력해주세요.'
        defaultValue={mode === 'add' ? '' : commercial?.contents}
        _onChange={(e) => {
          setAreaText(e.target.value);
        }}
      />
      {mode === 'add' ? (
        <CustomButton
          width='100%'
          _onClick={() => {
            addClick();
          }}
        >
          작성하기
        </CustomButton>
      ) : (
        <CustomButton
          width='100%'
          _onClick={() => {
            updateClick();
          }}
        >
          수정하기
        </CustomButton>
      )}
    </MyContainer>
  );
};

export default Form;
