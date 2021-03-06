import styled from 'styled-components';
import { useRef } from 'react';
const Input = (props) => {
  const { label, type, placeholder, _onChange, defaultValue, margin, width, value } = props;
  const styles = {
    label,
    margin,
    width,
  };

  return (
    <InputBox
      // {...styles}
      type={type}
      // defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={_onChange}
      style={{ width }}
      value={value}
    ></InputBox>
  );
};

Input.defaultProps = {
  label: 'false',
  type: 'text',
  placeholder: '입력해주세용!',
  _onChange: () => {},
  margin: false,
  width: false,
  defaultValue: '',
  value: '',
};
//   `width: ${props.width};`
const InputBox = styled.input`
  margin: 10px 0;
  font-family: 'MinSans-Medium';
  color: #777777;
  outline: none;
  border: 1px solid rgba(108, 117, 125, 0.3);
  border-radius: 5px;
  height: 45px;
  transition: 0.5s;
  margin-right: 5px;
  ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)}
  padding : 10px;

  &:focus {
    border: 1px solid rgba(108, 117, 125, 0.8);
  }
`;

export default Input;
