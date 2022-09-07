export default function last<T>(list: Array<T>): T | undefined {
  const { length } = list;
  return length ? list[length - 1] : undefined;
}
