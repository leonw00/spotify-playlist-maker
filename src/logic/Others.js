export function getRandomText() {
  let textList = [
    "In the deep bosom of the ocean buried",
    "The big brown fox jumps over the lazy blue dog",
    "How much wood could a woodchuck chuck if a woodchuck could chuck wood",
    "You're a wizard harry",
    "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    
  ];
  return textList[Math.floor(Math.random() * textList.length)];
  ;
}
