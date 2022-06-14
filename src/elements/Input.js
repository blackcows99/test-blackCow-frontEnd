import styled from "styled-components";
import { useRef } from "react";
const Input = (props) => {
    const {
        label,
        type,
        placeholder,
        _onChange,
        defaultValue,

        margin,
        width,
    } = props;

    const styles = {
        label,
        margin,
        width,
    }

    

    return (
            <InputBox 
            // {...styles}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={_onChange}
                style={{width}}
                // value={value}
            ></InputBox>
    )
}

Input.defaultProps = {
    label: "false",
    type: "text",
    placeholder: "입력해주세용!",
    _onChange: () => {},
    margin: false,
    width: false,
    defaultValue:'',
  };
//   `width: ${props.width};`
const InputBox = styled.input`
    margin : 20px 0;
    outline : none;
    border: 2px solid rgba(108,117,125,0.3);
    border-radius: 5px;
    height : 45px;
    transition : .5s;
    margin-right: 5px;
    ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)}   
    padding : 10px;
    
    &:focus {
        border: 2px solid rgba(108,117,125,0.8);
    }
`;

export default Input;