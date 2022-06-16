import styled from 'styled-components';

const CustomButton = (props) => {
  const { children, _onClick, width, height, margin, _disabled,editable } = props;

  const styles = {
    width,
    height,
    margin,
    editable
  };
  return (
    <Button
      {...styles}
      onClick={_onClick}
      style={{ width, height, margin,editable}}
      disabled={_disabled}
    >
      {children}
    </Button>
  );
};
CustomButton.defaultProps = {
  children: null,
  _onChange: () => {},
  _onSubmit: () => {},
  _onClick: () => {},
  _disabled: false,
  width: false,
  height: false,
  margin: false,
  editable:true
};

const Button = styled.button`
  background-color: #f05454;
  font-family: 'MinSans-Medium';
  color: white;
  padding: 8px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  
  ${(props) => (props.width ? `width: ${props.width};` : '100%')};
  ${(props) => (!props.editable ? `display: none;` : "")};
  ${(props) => (props.height ? `height: ${props.height};` : null)};
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)};
  &:hover {
    background-color: #f27575;
  }
`;
export default CustomButton;
