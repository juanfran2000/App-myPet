"use client";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

type Props = {
  elements: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    titleColor: string;
    description: string;
  }[];
  background: { color: string };
};

const CardSection = ({ elements, background }: Props) => {
  const alertMessage = () => {
    return alert("Esto es un mensaje de alerta");
  };

  return (
    <div
      className={`${background.color} flex justify-center items-center min-h-[80vh]`}
    >
      <div className="flex flex-wrap ">
        {elements.map((element) => (
          <div className="px-[100px]">
            <div className="group relative w-[350px] h-[300px] bg-white rounded-xl shadow-xl hover:h-[400px] transition-all duration-500 ease-in-out flex justify-center items-start">
              <div className="group-hover:-mt-[100px] group-hover:scale-75 group-hover:shadow-xl absolute w-[300px] h-[220px] top-[20px] rounded-xl transition-height duration-500 ease-in-out overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  width={600}
                  height={440}
                  src={element.imageSrc}
                  alt={element.imageAlt}
                />
              </div>
              <div className="group-hover:h-[280px] group-hover:mt-[120px] w-full py-[30px] mt-[225px] text-center overflow-hidden h-[20px] transition-height duration-500">
                <h2
                  className={`text-2xl font-bold text-blue-400 ${element.titleColor}`}
                >
                  {element.title}
                </h2>
                <p className="px-3 py-3 text-sm mb-2">{element.description}</p>
                <AnimatedButton
                  onClick={alertMessage}
                  classNames="bg-zinc-600"
                  text="Enviar"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
