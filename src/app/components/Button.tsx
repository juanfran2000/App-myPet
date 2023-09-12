type ButtonProps = {
  buttonCustom: {
    color: string;
    title: string;
    borderRadius: string;
    cursor: string;
    textColor: string;
    hoverBackground: string;
    fontSize: string;
  };
};

const Button = ({ buttonCustom }: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: buttonCustom.color,
    borderRadius: buttonCustom.borderRadius,
    cursor: buttonCustom.cursor,
    color: buttonCustom.textColor,
    fontSize: buttonCustom.fontSize,
  };

  return (
    <div>
      <a>
        <button
          className={`p-2 text-center ${buttonCustom.hoverBackground} ${buttonCustom.borderRadius} ${buttonCustom.textColor} ${buttonCustom.fontSize} ${buttonCustom.cursor}`}
          style={buttonStyle}
        >
          {buttonCustom.title}
        </button>
      </a>
    </div>
  );
};

export default Button;
