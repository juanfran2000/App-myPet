type Props = {
  elements: { url: string; name: string }[];
  socialElements: { url: string; alt: string; iconUrl: string }[]; // Agrega el prop svgsEnlaces al tipo Props
  logoImg: { url: string; alt: string };
};

const Footer = ({ elements, socialElements, logoImg }: Props) => {
  return (
    <div className="container">
      <div className="bg-slate-900 h-52 w-screen">
        <div>
          <img
            src={logoImg.url}
            alt={logoImg.alt}
            className="w-16 absolute right-0 mt-32 mr-5"
          ></img>

          <ul className="text-white flex justify-center mt-10  ">
            {/* aqui comienza */}
            <div className="space-x-3">
              {socialElements.map((element) => {
                return (
                  <button className="mt-10 rounded-full border bg-white text-black h-10 w-10 ">
                    <div className="flex flex justify-center">
                      <a href={element.url} target="_blank">
                        <img src={element.iconUrl} alt={element.alt}></img>
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
