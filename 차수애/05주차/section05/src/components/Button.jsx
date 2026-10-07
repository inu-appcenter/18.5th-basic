const Button = ({ text, color, Children}) => {
    // 이벤트 객체
    const onclickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return(
    <button 
      onClick={onclickButton}
      // onMouseEnter={onclickButton}
      style = {{ color : color }}
    >
        {text} - {color.toUpperCase()}
        {Children}
      </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;