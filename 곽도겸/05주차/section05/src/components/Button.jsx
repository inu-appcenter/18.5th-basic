const Button = ({children, text , color = "black"}) =>{
    const onClickButton = (e) => {
        console.log(e);
    };

    return(
        <button
            onClick={onClickButton}
            //onMouseEnter={onClickButton}
            style={{color : color}}
        >
            {text} - {color}
            {children}
        </button>
        
    )
}
export default Button;