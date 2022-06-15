import styled from 'styled-components';
import React from 'react';
const Select = ({ _onChange, value, className }) => {
  return (
    <SelectBox onChange={_onChange} dafaultValue={value} className={className}>
      <option value='1'>컴퓨터</option> {/* value 값이 서버로 넘어감 */}
      <option value='2'>노트북</option>
      <option value='3'>웨어러블</option>
      <option value='4'>가전제품</option>
      <option value='5'>기타</option>
    </SelectBox>
  );
};

const SelectBox = styled.select`
  outline: none;
  font-family: 'MinSans-Medium';
  color: #797979;
  border: 1px solid rgba(108, 117, 125, 0.3);
  border-radius: 5px;
  height: 45px;
  transition: 0.5s;
  width: 20%;
  &:focus {
    border: 1px solid rgba(108, 117, 125, 0.8);
  }
`;

export default Select;
