// These are ISO-639-1 codes. For a list of them, see:
// https://en.wikipedia.org/wiki/ISO_639-1
const rtlCodes = ['ar', 'ur', 'fa', 'he'];
// These languages use the reverse, upside-down "arabic" comma
const reverseComma = ['ar', 'ur', 'fa'];

export default function generateList(arr = [], languageCode) {
  const rtl = rtlCodes.indexOf(languageCode) >= 0;
  const comma = reverseComma.indexOf(languageCode) >= 0 ? '،' : ',';

  if (rtl) {
    return arr.reverse().join(` ${comma}`);
  } else {
    return arr.join(`${comma} `)
  }
};
