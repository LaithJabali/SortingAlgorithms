const arrayContainer = document.getElementById('array-container');
const arrayLengthInput = document.getElementById('array-length');
const randomizeBtn = document.getElementById('randomize-btn');
const bubble = document.getElementById('bubble-sort-btn');
const selection = document.getElementById('selection-sort-btn');
const insertion = document.getElementById('insertion-sort-btn');
const mergeS = document.getElementById('merge-sort-btn');
const quickS = document.getElementById('quick-sort-btn');
let array = [];


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
          await new Promise(resolve => setTimeout(resolve, 100)); 
        }
      }
    }
}

async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, i, minIndex);
        displayArray();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  }

  async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
        displayArray();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      array[j + 1] = key;
      displayArray();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  

  async function mergeSort() {
    array = await mergeSortHelper(array);
    displayArray();
  }
  
  async function mergeSortHelper(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(await mergeSortHelper(left), await mergeSortHelper(right));
  }
  
  async function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
      displayArray();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  async function quickhelper() {
    await quickSort(0, array.length - 1);
  }
  async function quickSort(low, high) {
    if (low < high) {
      const partitionIndex = await partition(low, high);
      await quickSort(low, partitionIndex - 1);
      await quickSort(partitionIndex + 1, high);
    }
  }
  
  async function partition(low, high) {
    const pivot = array[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
        displayArray();
        await new Promise(resolve => setTimeout(resolve, 100)); 
      }
    }
  
    swap(array, i + 1, high);
    displayArray();
    await new Promise(resolve => setTimeout(resolve, 100)); 
  
    return i + 1;
  }
  

randomizeBtn.addEventListener('click', randomizeArray);
bubble.addEventListener('click', bubbleSort);
selection.addEventListener('click', selectionSort);
insertion.addEventListener('click', insertionSort);
mergeS.addEventListener('click', mergeSort);
quickS.addEventListener('click', quickhelper);
