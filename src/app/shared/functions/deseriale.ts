export function deserialize(input: any) {
  const data = {};
  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      data[key.replace(/(\_\w)/g, function (m) {
        return m[1].toUpperCase();
      })] = deserializeProperty(input[key]);
    }
  }
  return data;
}

function deserializeProperty(value: any) {
  if (typeof value === 'object') {
    if(value === null) {
      return null;
    }
    if (Array.isArray(value)) {
      for (let k in value) {
        value[k] = deserializeProperty(value[k]);
      }
      return value;
    } else {
      const data = {};
      for (let k in value) {
        if (value.hasOwnProperty(k)) {
          data[k.replace(/(\_\w)/g, function (m) {
            return m[1].toUpperCase();
          })] = deserializeProperty(value[k]);
        }
      }
      return data;
    }
  } else {
    return value;
  }
}
