import { factors } from "../data/factors";

export const calculateLegacy = (dob) => {
  const day = new Date(dob).getDate();

  const isOdd = day % 2 !== 0;

  // 0 to 1
  const progress = (day - 1) / 30;

  const result = factors.map((factor) => {
    // Total ALWAYS stays inside the given range
    const total =
      factor.min + (factor.max - factor.min) * progress;

    let mother, father;

    if (isOdd) {
      // Mother gets 55% - 65%
      const ratio = 0.55 + progress * 0.1;

      mother = total * ratio;
      father = total - mother;
    } else {
      // Father gets 55% - 65%
      const ratio = 0.55 + progress * 0.1;

      father = total * ratio;
      mother = total - father;
    }

    return {
      factor: factor.name,
      mother: Number(mother.toFixed(3)),
      father: Number(father.toFixed(3)),
      total: Number(total.toFixed(3)),
    };
  });

  const motherTotal = Number(
    result
      .reduce((sum, item) => sum + item.mother, 0)
      .toFixed(3)
  );

  const fatherTotal = Number(
    result
      .reduce((sum, item) => sum + item.father, 0)
      .toFixed(3)
  );

  const grandTotal = Number(
    (motherTotal + fatherTotal).toFixed(3)
  );

  return {
    factors: result,
    motherTotal,
    fatherTotal,
    grandTotal,
    higherParent:
      motherTotal > fatherTotal ? "Mother" : "Father",
  };
};