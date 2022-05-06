import { Wheel } from "react-custom-roulette";

const data = [
  { option: "0", style: { backgroundColor: "green", textColor: "black" } },
  { option: "1", style: { backgroundColor: "white" } },
  { option: "2" },
];

const R1 = () => {
  return (
    <Wheel
      mustStartSpinning={true}
      prizeNumber={3}
      data={data}
      backgroundColors={["#3e3e3e", "#df3428"]}
      textColors={["#ffffff"]}
    />
  );
};

export default R1;
