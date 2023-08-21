type Props = { elements: { url: string; name: string }[] };

const Navbar = ({ elements }: Props) => {
  return (
    <div className="bg-slate-900 flex justify-between h-16 items-center m-5">
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
        {elements.map((element, index) => (
          <li key={index}>
            <a href={element.url}>{element.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <img src="./icons/icon-search.svg"></img>
      </div>
      <div className="mr-10">
        <img src="./icons/icon-shopping.svg"></img>
      </div>
    </div>
  );
};

export default Navbar;
