import { ReactNode } from "react";

type Props = {
  enlacesFooter: ReactNode[];
  svgsEnlaces: ReactNode[]; // Agrega el prop svgsEnlaces al tipo Props
};

const MyFooter = ({ enlacesFooter, svgsEnlaces }: Props) => {
  return (
    <div className="container">
      <div className="bg-slate-900 h-52 w-screen">
        <div>
          <img
            src="/logoFooter.svg"
            className="w-16 absolute right-0 mt-32 mr-5"
          ></img>
          <ul className="text-white flex justify-center mt-10  ">
            {/* aqui comienza */}
            <div className="space-x-3">
              {svgsEnlaces.map((elementosSvg) => {
                return (
                  <button className="mt-10 rounded-full border bg-white text-black h-10 w-10 ">
                    <div className="flex flex justify-center">
                      {elementosSvg}
                    </div>
                  </button>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="text-white flex justify-center mt-7 text-sm font-light">
          <ul className="flex">
            {enlacesFooter.map((elemento) => {
              return <li>{elemento}</li>;
            })}
          </ul>
        </div>

        <div className="text-gray-400 flex justify-center text-sm font-light">
          <h4>© 2018 Clarity Money</h4>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
