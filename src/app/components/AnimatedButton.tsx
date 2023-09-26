import React from "react";

type Props = {
  classNames: string;
  text: string;
  url?: string;
  onClick?: () => void;
};

const AnimatedButton = ({ text, classNames, url = "", onClick }: Props) => {
  const Tag = url.length > 0 ? "a" : "button";
  return (
    <Tag
      onClick={onClick}
      className={`p-3 text-white rounded-xl shadow-xl text-lg 
         transition duration-700 hover:scale-105 ${classNames}`}
      {...(url.length > 0 && { href: url, target: "_blank" })}
    >
      {text}
    </Tag>
  );
};

export default AnimatedButton;
