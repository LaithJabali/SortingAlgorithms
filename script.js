const arrayContainer = document.getElementById('array-container');
const randomizeBtn = document.getElementById('randomize-btn');
const solveBtn = document.getElementById('solve-btn');
const arrayLengthInput = document.getElementById('array-length');
let array = [];

//to generate a random integer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//to create the array elements
function displayArray() {
  arrayContainer.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement('div');
    element.classList.add('array-element');
    element.style.height = `${array[i] * 13}px`;
    element.textContent = array[i];
    arrayContainer.appendChild(element);
  }
}

//to randomize the array
function randomizeArray() {
  const length = arrayLengthInput.value;
  array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomInt(1, 50));
  }
  displayArray();
}
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
 async function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
          displayArray();
          // delay for visualization
          await new Promise(resolve => setTimeout(resolve, 100)); 
        }
      }
    }
}

// event listener for the randomize button
randomizeBtn.addEventListener('click', randomizeArray);
solveBtn.addEventListener('click', bubbleSort);
