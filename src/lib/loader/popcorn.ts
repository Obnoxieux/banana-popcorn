import {range} from "../utility/range";

type PopcornConsumption = {
  name: string;
  consumptionAmount: number;
  year: number;
};

function generatePopcornConsumption(): PopcornConsumption[] {
  const data: PopcornConsumption[] = [];

  for (const year of range(2012, 2025)) {
    const sweet = Math.random() * 100;
    const salty = Math.random() * 100;

    data.push({
      name: "Popcorn",
      consumptionAmount: sweet,
      year: year,
    });

    data.push({
      name: "Popcorn",
      consumptionAmount: salty,
      year: year,
    });
  }
  return data;
}

const consumptionData = generatePopcornConsumption();
export { consumptionData };
