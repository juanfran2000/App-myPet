type LabelProps = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  className?: string;
};

const Label = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  className,
}: LabelProps) => {
  return (
    <div className="container">
      <div className="w-full md:w-1/2">
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label
                  className={`block text-gray-700 text-sm font-bold mb-2 mt-3 ${className}`}
                >
                  {text1}
                </label>
                <input
                  className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nya"
                  name="nya"
                  type="text"
                  placeholder="Ingrese su nombre"
                ></input>

                <label
                  className={`block text-gray-700 text-sm font-bold mb-2 mt-3 ${className}`}
                >
                  {text2}
                </label>
                <input
                  className="shadow apperance-none border rounded w-ful py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nya"
                  name="nya"
                  type="text"
                  placeholder="+593 0995001783"
                ></input>
                <label
                  className={`block text-gray-700 text-sm font-bold mb-2 mt-3 ${className}`}
                >
                  {text3}
                </label>
                <input
                  className="shadow apperance-none border rounded w-ful py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jose@gmail.com"
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className={`block text-gray-700 text-sm font-bold mb-2 mt-3 ${className}`}
            >
              {text4}
            </label>
            <input
              className="shadow apperance-none border rounded w-ful py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="affair"
              name="affair"
              type="text"
              placeholder="Sale of Products"
            ></input>
          </div>
          <div className="mb-4">
            <label
              className={`block text-gray-700 text-sm font-bold mb-2 mt-3 ${className}`}
            >
              {text5}
            </label>
            <textarea
              className="shadow apperance-none border rounded w-ful py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mesagge"
              name="mesagge"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex item-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:online-none focus:shadow-online">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Label;
