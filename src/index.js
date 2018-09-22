/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var preferences;
  var count = 0;
  
    for (var i = 0; i < preferences.length + 1; i++) {
      var firstNumber = preferences[i - 1];
      var secondNumber = preferences[firstNumber - 1];
      var thirdNumber = preferences[secondNumber - 1];
  
      if(thirdNumber == i) {
        count++;
      }   
    }
  
    return Math.floor(count / 3);
  
  }