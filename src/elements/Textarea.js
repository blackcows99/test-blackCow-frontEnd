import styled from "styled-components";
const Textarea = (props) => {
    const {
        label,
        type,
        placeholder,
        defaultValue,
        _onChange,
        margin,
        width,
    } = props;
    const styles = {
        label,
        margin,
        width,
    }
    return (
        <div>
             <TextArea 
             {...styles}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={_onChange}
                style={{width}}
             ></TextArea>
        </div>
    )
}
Textarea.defaultProps = {
    label: "false",
    type: "text",
    placeholder: "입력해주세용!",
    _onChange: () => {},
    margin: false,
    width: "100%",
  };

const TextArea = styled.textarea`
    ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)}   
    height: 300px;
    outline : none;
    border: 2px solid rgba(108,117,125,0.3);
    border-radius: 5px;
    transition : .5s;
    padding : 10px;
    margin-bottom: 10px;
    &:focus {
        border: 2px solid rgba(108,117,125,0.8);
    }
`;

export default Textarea;