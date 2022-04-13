export function getRandomText() {
  let textList = [
    "In the deep bosom of the ocean buried",
    "The big brown fox jumps over the lazy blue dog",
    "She sells sea-shells on the sea-shore",
    "How much wood could a woodchuck chuck if a woodchuck could chuck wood",
  ];
  return textList[Math.floor(Math.random() * textList.length)];
  ;
}
