type Props = { elements: { url: string; name: string }[] };
import Image from "next/image";
const Navbar = ({ elements }: Props) => {
  return (
    <div className="bg-slate-900 flex justify-between h-16 items-center m-5">
      <div className="ml-10">
        <a href="/">
          <Image
            src="/icons/icon-shopping.svg"
            width={26}
            height={26}
            alt="logo"
          />
        </a>
      </div>
      <ul className="text-zinc-300 flex space-x-40 text-lg">
        {elements.map((element, index) => (
          <li key={index}>
            <a href={element.url}>{element.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <Image
          src="./icons/icon-search.svg"
          alt="icon search"
          width={26}
          height={26}
        />
      </div>
      <div className="mr-10">
        <Image
          src="./icons/icon-shopping.svg"
          alt="icon shopping"
          width={26}
          height={26}
        />
      </div>
    </div>
  );
};

export default Navbar;
