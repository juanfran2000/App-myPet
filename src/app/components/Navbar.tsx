import { ReactNode } from "react";

type Props = { elementosNav: ReactNode[] };

const Navbar = ({ elementosNav }: Props) => {
  return (
    <div className="bg-zinc-700 flex justify-between h-16 items-center m-5">
      <div className="ml-10">
        <a href="/">
          <img
            src="https://imagenpng.com/wp-content/uploads/2017/05/Apple_Logo_Png_06.png"
            width={20}
            alt="Apple Logo"
          />
        </a>
      </div>
      <ul className="text-zinc-300 flex space-x-40 text-lg">
        {elementosNav.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      <div>
        <img src="search.svg"></img>
      </div>
      <div className="mr-10">
        <img src="shopping-bag.svg"></img>
      </div>
    </div>
  );
};

export default Navbar;
