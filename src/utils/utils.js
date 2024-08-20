export const getDate = (date) => {
  return date.substring(0,10);
}

export const getfileSize = (byte) => {
  let s = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let e = Math.floor(Math.log(byte) / Math.log(1024));
  return (byte / Math.pow(1024, e)).toFixed(2) + " " + s[e];
}

export const getSaasImg = (name) => {
  const imgName = name.toLowerCase().replace(/\s+/g, '');
  // return `../../public/assets/${imgName}.png`;
  return `../../assets/${imgName}.png`;
};

export const removeZeroDivision = (num) => {
  return num <= 0 ? 0.001 : num;
}

export const convertDate = (date) => {
  return new Date(date).toLocaleString();
}

export const removeWordDate = (date) => {
  if(date == null) return date;
  return date.replace('T', ' ');
}
