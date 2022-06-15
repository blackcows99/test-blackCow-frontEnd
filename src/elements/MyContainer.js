import styled from 'styled-components';

const MyContainer = (props) => {
  const { children, is_flex, width, padding, margin, bg, relative, _onClick, is_main, className } =
    props;
  const styles = {
    is_flex,
    width,
    margin,
    padding,
    bg,
    relative,
    is_main,
  };
  return (
    <Container {...styles} className={className}>
      {children}
    </Container>
  );
};
MyContainer.defaultProps = {
  children: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
  relative: false,
  _onClick: () => {},
};

const Container = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)}
  padding : 10px;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.05);
  text-align: left;
  padding: 50px;
  ${(props) =>
    props.is_flex ? `display: flex; justify-content: space-between; align-items: center;` : ''};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')};
  ${(props) => (props.relative ? `position: relative;` : '')};
`;

export default MyContainer;
