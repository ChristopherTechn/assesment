
 function createArray(arr) {
        if (arr.length < 1) {
          throw console.log("Array must have at least one element.");
        }
        return [arr[0], arr[arr.length - 1]];
      }
      
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [10];
  const arr3 = [];
  
  console.log(createArray(arr1)); // Output: [1, 5]
  console.log(createArray(arr2)); // Output: [10, 10]
  console.log(createArray(arr3)); // Throws error: "Array must have at least one element."