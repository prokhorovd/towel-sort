module.exports = function towelSort (matrix) {
  // если параметр не был передан возвращаем пустой array 
  if (matrix === undefined) {
    return [];
  }
  let sortedArray = [];
  //начинаем сортировку
  for (let i = 0; i < matrix.length; i++) {
    // если ряд четный берем значения из него по порядку
    if (i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        sortedArray.push(matrix[i][j])
      }
    }
    // иначе в обратном порядке
    else {
      for (let j = (matrix[i].length - 1); j >= 0; j--) {
        sortedArray.push(matrix[i][j])
      }
    }
  }
  return sortedArray;
}
