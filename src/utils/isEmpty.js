export default function isEmpty(value) {
  switch (typeof value) {
    case 'object':
      if (value === null) {
        return true;
      }
      if (value instanceof Array) {
        return !value.length;
      }
      if (value instanceof Map) {
        return !value.size;
      }
      if (value instanceof Set) {
        return !value.size;
      }
      return !Object.keys(value).length;
    case 'string':
      return !value.length;
    default:
      return true;
  }
}
