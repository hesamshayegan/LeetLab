// 832. Flipping an Image


/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {

    for (let row of image) {
  
      let left = 0
      let right = row.length - 1
      let temp = ''
  
      while (left <= right) {
  
      // in case of rows with and odd length, the central element should only be inverted
      if (left === right) {
        row[left] = row[left] === 0 ? 1 : 0
  
      } else {
        temp = row[left]
        row[left] = row[right]
        row[right] = temp
  
        row[left] = row[left] === 1 ? 0 : 1
        row[right] = row[right] === 1 ? 0 : 1
      }
  
      left ++
      right --
  
      }
  
    }
     
    return image
  
  };