type Props = {
  content: {
    background: string;
    backgroundHover: string;
    text: string;
    link: string;
  };
};

const ButtonAnimated = ({ content }: Props) => {
  return (
    <a href={content.link}>
      <button
        className={`${content.background} p-3 text-white rounded-xl shadow-xl text-lg 
          ${content.backgroundHover} transition duration-700 hover:scale-110`}
      >
        {content.text}
      </button>
    </a>
  );
};

export default ButtonAnimated;
