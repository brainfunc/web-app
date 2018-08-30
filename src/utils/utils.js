export const GetSortOrder = (prop) => {
  return function(a, b) {
      if (a[prop] > b[prop]) {
          return 1;
      } else if (a[prop] < b[prop]) {
          return -1;
      }
      return 0;
  }
}

export const GenerateSubCategoryIndex = function(categoryIndex) {
  var index, max, min;
  if(categoryIndex == 0) { min = 0; max = 4; }
  else if(categoryIndex == 1) { min = 5; max = 7; }
  else if(categoryIndex == 2) { min = 8; max = 10; }
  else if(categoryIndex == 3) { min = 11; max = 12; }
  index = Math.floor(Math.random() * (max - min + 1)) + min;
  return index;
}

export const NeuronSubCategoryCheck = function(categoryIndex, subcategoryIndex) {
  var max, min;
  if(categoryIndex == 0) { min = 0; max = 4; }
  else if(categoryIndex == 1) { min = 5; max = 7; }
  else if(categoryIndex == 2) { min = 8; max = 10; }
  else if(categoryIndex == 3) { min = 11; max = 12; }
  return (subcategoryIndex >= min && subcategoryIndex <= max);
}

export const BrainpartSubCategoryCheck = function(categoryIndex, subcategoryIndex) {
  var max, min;
  if(categoryIndex == 0) { min = 0; max = 4; }
  else if(categoryIndex == 1) { min = 5; max = 7; }
  else if(categoryIndex == 2) { min = 8; max = 10; }
  else if(categoryIndex == 3) { min = 11; max = 12; }
  return (subcategoryIndex >= min && subcategoryIndex <= max);
}
