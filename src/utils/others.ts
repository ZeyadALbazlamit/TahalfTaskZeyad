/**
 * @prettier
 */

// habdle get Default TimeOff Type
export function getDefaultTimeOffType(types, id) {
  for (let j = 0; j < types.length; j++) {
    for (let i = 0; i < types[j].data.length; i++) {
      if (types[j].data[i].id == id) {
        return types[j].data[i];
      }
    }
  }
  return 0;
}
