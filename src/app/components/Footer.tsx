import Image from "next/image";

type Props = {
  elements: { url: string; name: string }[];
  socialElements: { url: string; alt: string; iconUrl: string }[];
  logoImg: { url: string; alt: string };
};

const Footer = ({ elements, socialElements, logoImg }: Props) => {
  return (
    <div className="container">
      <div className="bg-slate-900 h-52 w-screen">
        <div>
          <Image
            src={logoImg.url}
            alt={logoImg.alt}
            width={20}
            height={20}
            className="w-16 absolute right-0 mt-32 mr-5"
          />

          <ul className="text-white flex justify-center mt-10  ">
            <div className="space-x-3">
              {socialElements.map((element) => {
                return (
                  <button className="mt-10 rounded-full border bg-white text-black h-10 w-10 ">
                    <div className="flex  justify-center">
                      <a href={element.url} target="_blank">
                        <Image
                          src={element.iconUrl}
                          alt={element.alt}
                          width={25}
                          height={25}
                        />
                      </a>
                    </div>
                  </button>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="text-white flex justify-center mt-7 text-sm font-light">
          <ul className="flex item-center gap-2 m-1">
            {elements.map((element) => {
              return (
                <>
                  <li>
                    <a href={element.url} className="">
                      {element.name}
                    </a>
                  </li>

                  <li className="text-gray-500 ">•</li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="text-gray-400 flex justify-center text-sm font-light">
          <h4>© {new Date().getFullYear()} Croqueta</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
