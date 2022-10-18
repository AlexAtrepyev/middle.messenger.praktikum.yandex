export default function isEqual(a: Record<string, any>, b: Record<string, any>): boolean {
  for (const p in a) {
    if (!a.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (typeof a[p] === 'object' && typeof b[p] === 'object') {
        return isEqual(a[p], b[p]);
      }
      if (a[p] !== b[p]) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  return true;
}
