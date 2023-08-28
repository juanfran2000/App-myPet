type Props = {
  buttonCustom: {
    backgroundColor: string;
    backgroundSecondColor: string;
    buttonText: string;
  };
};

const JButton = ({ buttonCustom }: Props) => {
  const { backgroundColor, backgroundSecondColor, buttonText } = buttonCustom;

  return (
    <a>
      <button
        className={`${backgroundColor} inline-block p-3 rounded-xl text-white hover:scale-105 hover:${backgroundSecondColor} transition duration-700 shadow-sm`}
      >
        {buttonText}
      </button>
    </a>
  );
};

export default JButton;
