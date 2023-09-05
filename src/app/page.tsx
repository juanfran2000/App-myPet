import CardSection from "./components/CardSection";
import Form from "./components/Form";

const configCardAnimated = [
  {
    imageSrc: "/img-test/imgRed.jpeg",
    imageAlt: "Card Red",
    title: "Title Red",
    titleColor: "text-red-500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum quidem esse eius repudiandae cupiditate voluptatibus placeat perferendis et optio sunt distinctio, molestias sed eos doloribus cumque fugiat incidunt molestiae nobis?",
    buttonText: "Link Red",
    buttonLink: "/",
    background: "bg-red-500",
  },
  {
    imageSrc: "/img-test/imgPurple.jpeg",
    imageAlt: "imagen purple",
    title: "Title Purple",
    titleColor: "text-purple-500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum quidem esse eius repudiandae cupiditate voluptatibus placeat perferendis et optio sunt distinctio, molestias sed eos doloribus cumque fugiat incidunt molestiae nobis?",
    buttonText: "Link Purple",
    buttonLink: "/",
    background: "bg-purple-500",
  },
];

export default function Home() {
  return (
    <div>
      <CardSection
        background={{
          color: "bg-gradient-to-b from-purple-500 via-blue-500 to-black",
        }}
        elements={configCardAnimated}
      />
      <Form />
    </div>
  );
}
