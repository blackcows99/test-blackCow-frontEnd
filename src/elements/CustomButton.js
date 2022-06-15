import styled from "styled-components";

const CustomButton = (props) => {
    const {
        children,
        _onClick,
        width,
        height,
        margin,
        _disabled,
    } = props;

    const styles = {
        width,
        height,
        margin,
        };
console.log(_disabled)
    return (
        <Button 
            // {...styles}
            onClick={_onClick}
            style = { {width, height, margin}}
            disabled={_disabled}
            >
            {children}
            
        </Button>
    )
}
CustomButton.defaultProps = {
    children: null,
    _onChange: () => {},
    _onSubmit: () => {},
    _onClick: () => {},
    _disabled: false,
    width: false,
    height: false,
    margin: false,
  };

const Button = styled.button`
    background-color: #6c757d;
    color: white;
    padding : 8px;
    border-radius: .25rem;
    cursor : pointer;
    transition: .3s;
    text-align: center;
    ${(props) => (props.width ? `width: ${props.width};` : "100%")};
    ${(props) => (props.height ? `height: ${props.height};` : null)};
    ${(props) => (props.margin ? `margin: ${props.margin};` : null)};
    &:hover {
        background-color: rgba(108,117,125,0.7);

    }
`;
export default CustomButton;