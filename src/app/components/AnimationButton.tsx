type Props = {
  buttonCustom: {
    link: string;
    backgroundColor: string;
    backgroundSecondColor: string;
    buttonText: string;
  };
};

const AnimationButton = ({ buttonCustom }: Props) => {
  const { link, backgroundColor, backgroundSecondColor, buttonText } =
    buttonCustom;

  return (
    <a href={link}>
      <button
        className={`${backgroundColor} inline-block p-3 rounded-xl text-white hover:scale-105 hover:${backgroundSecondColor} transition duration-700 shadow-sm`}
      >
        {buttonText}
      </button>
    </a>
  );
};

export default AnimationButton;
