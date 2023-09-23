import alexanderHipp from "../assets/alexander-hipp.jpg";
import christina from "../assets/christina.jpg";
import jakeNackos from "../assets/jake-nackos.jpg";
import josephGonzalez from "../assets/joseph-gonzalez.jpg";

export const testimonialsData = () => {
  let result = [
    {
      rate: 4,
      imgSrc: alexanderHipp,
      name: "Alexander Hipp",
      review: "Fusce mauris turpis, aliquam at massa a, varius maximus tortor!",
    },
    {
      rate: 5,
      imgSrc: christina,
      name: "Christina Huber",
      review: "Morbi efficitur magna sit amet velit placerat congue.",
    },
    {
      rate: 4,
      imgSrc: jakeNackos,
      name: "Jake Nackos",
      review: "Vivamus suscipit imperdiet leo vitae sollicitudin.",
    },
    {
      rate: 4,
      imgSrc: josephGonzalez,
      name: "Joseph Gonzalez",
      review: "Vestibulum sed felis eu orci vehicula dapibus id vel mauris.",
    },
  ];

  return result;
};
