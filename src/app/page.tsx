import Button from "./components/Button";
import Label from "./components/Form";

export default function Home() {
  return (
    <div className="text-2xl">
      Esta es Nuestra Pagina de myPet
      <Button
        buttonCustom={{
          color: "bg-cyan-50",
          title: "Soy el componente Button",
          borderRadius: "rounded-full",
          cursor: "cursor-pointer",
          textColor: "text-cyan-500",
          hoverBackground: "hover:bg-cyan-100",
          fontSize: "font-semibold",
        }}
      />
      <Label
        text1="Name"
        text2="Number"
        text3="Email"
        text4="Affair"
        text5="Message"
        className="clase-adicional"
      />
    </div>
  );
}
