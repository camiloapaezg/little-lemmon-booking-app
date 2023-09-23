import greekSalad from "../assets/greek-salad.png";
import bruschetta from "../assets/bruschetta.png";
import pasta from "../assets/pasta.png";

export const specialsData = () => {
  let result = [
    {
      title: "Greek Salad",
      price: "$8.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: greekSalad,
    },
    {
      title: "Pasta",
      price: "$12.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: pasta,
    },
    {
      title: "Bruschetta",
      price: "$5.50",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: bruschetta,
    },
  ];

  return result;
};
