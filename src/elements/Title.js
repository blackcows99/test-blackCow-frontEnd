const Title = (props) => {
  const { text } = props;
  return (
    <strong
      style={{
        padding: '5px 10px',
        borderRadius: '5px',
        marginTop: '30px',
        display: 'inline-block',
        backgroundColor: '#f0f0f0',
        color: '#686868',
        fontFamily: 'MinSans-Medium',
        fontWeight: 'lighter',
        fontSize: '16px',
      }}
    >
      {text}
    </strong>
  );
};

Title.defaultProps = {
  label: false,
  type: 'text',
  placeholder: '입력해주세용!',
  value: '',
  is_submit: false,
  is_upload: false,
  _onChange: () => {},
  _onSubmit: () => {},
  margin: false,
  width: false,
};

export default Title;
