export default function demo (input: Map<string, *>): Map<*, number> {
  const converted = new Map();
  for (let [key, value] of input) {
    converted.set(key, value);
  }
  return converted;
}