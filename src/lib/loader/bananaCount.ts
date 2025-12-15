function dateDiffInMonths(start: Date, end: Date) {
  const MILLISECONDS_PER_MONTH = 1000 * 60 * 60 * 24 * 30; // slightly inaccurate

  const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());

  return Math.floor((utc2 - utc1) / MILLISECONDS_PER_MONTH);
}

const start = new Date("2023-04-14");
const end = new Date();
const difference = dateDiffInMonths(start, end);

export { difference };
