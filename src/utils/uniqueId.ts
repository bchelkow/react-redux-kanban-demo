const base36 = (toBaseChange: number): string => toBaseChange.toString(36);

const remove2first = (toReduce: string): string => toReduce.slice(2);

export default (): string => {
  const timestamp = Date.now();
  const random = Math.random();
  const timestampBase36 = base36(timestamp);
  const randomBase36 = base36(random);
  const randomWithout2First = remove2first(randomBase36);
  return randomWithout2First + timestampBase36;
};
