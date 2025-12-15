import {range} from "../utility/range";

export type PopcornConsumption = {
  type: "sweet" | "salty";
  consumptionAmount: number;
  year: number;
};

function generatePopcornConsumption(): PopcornConsumption[] {
  const data: PopcornConsumption[] = [];

  for (const year of range(2012, 2025)) {
    const sweet = Math.floor(Math.random() * 1000);
    const salty = Math.floor(Math.random() * 1000);

    data.push({
      type: "sweet",
      consumptionAmount: sweet,
      year: year,
    });

    data.push({
      type: "salty",
      consumptionAmount: salty,
      year: year,
    });
  }
  return data;
}

const consumptionData = generatePopcornConsumption();
export { consumptionData };
