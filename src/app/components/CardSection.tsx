import Image from "next/image";
import ButtonAnimated from "./ButtonAnimated";

type Props = {
  elements: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    titleColor: string;
    description: string;
    buttonLink: string;
    buttonText: string;
    background: string;
    backgroundHover: string;
  }[];
  background: { color: string };
};

const CardSection = ({ elements, background }: Props) => {
  return (
    <div
      className={`${background.color} flex justify-center items-center min-h-[60vh]`}
    >
      <div className="flex flex-wrap ">
        {elements.map((element) => (
          <div className="px-[100px]">
            <div className="group relative w-[350px] h-[300px] bg-white rounded-xl shadow-xl hover:h-[400px] transition-all duration-500 ease-in-out flex justify-center items-start">
              <div className="group-hover:-mt-[100px] group-hover:scale-75 group-hover:shadow-xl absolute w-[300px] h-[220px] top-[20px] rounded-xl transition-height duration-500 ease-in-out overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  width={900}
                  height={900}
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
                <ButtonAnimated
                  content={{
                    link: `${element.buttonLink}`,
                    background: `${element.background}`,
                    backgroundHover: `${element.backgroundHover}`,
                    text: `${element.buttonText}`,
                  }}
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
