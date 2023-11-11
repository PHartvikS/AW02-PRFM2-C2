// 2.2. Lesson - Algorithms and data structures
/*
// Sets
const fruits = new Set(["apple", "banana", "orange"]);
// Create a Set
const fruits = new Set();
// Add Values to the Set
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
const fruits = new Set();
// Add Values to the Set
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");

// Let's access "banana" via variable
const fruitToRemove = "banana";

// Remove the specified fruit from the Set
fruits.delete(fruitToRemove);

// Check if our set contains "banana"
console.log(fruits.has("banana")); // Output: false

// Check the size of our set
console.log(fruits.size); // Output: 2
const fruits = new Set(["apple", "banana", "orange"]);
// Iterate through the Set using forEach
fruits.forEach(function(value) {
    console.log(value);
});

const fruits = new Set(["apple", "banana", "orange"]);
for (const x of fruits.values()) {
  console.log(x);
}

// Maps

const menu = new Map([
    ["Margarita", 9],
    ["Pepperoni", 10],
    ["Salami", 10]
  ]);

  menu.set("Pepperoni", 9.5);

  menu.get("Pepperoni"); //9.5

  const menu = new Map([
    ["Margarita", 9],
    ["Pepperoni", 10],
    ["Salami", 10]
  ]);
menu.forEach (function(value, key) {
    console.log("Dish: " + key + ", Price: " + value);
})

// List all entries
let text = "";
for (const x of menu.entries()) {
  text += x;
}

/* Advanced data structures

Stack: Works like stacking books. We can only add or remove elements from the top.
Queue: Similar to stack, we can remove elements only from the top and add elements only to the end.
Linked List: Data is grouped in nodes, and nodes are connected with links. We start from the ‘head’ node and must go through all the links to reach the last node.
Set: We use it to create a set of unique elements, just like a built-in JavaScript set, but we can also create intersections and differences of sets or subsets.
Hash Table: This is a key-value data structure, just like JavaScript Map. Thanks to the hash function, we can quickly find a value corresponding to a key.
Tree: Data is grouped in nodes. We have access to the root node. Inserting new elements and searching for an element is highly efficient in this structure.
Graph: Data is grouped in nodes. Graphs are used widely to solve daily problems, such as finding the shortest route to school or recommending new friends on social media.
*/

/* Introduction to algorithms

Algorithms are tools to solve complicated problems. In this section, we’ll focus on how to compare their quality. We’ll also learn recursion, a powerful tool crucial for divide-and-conquer algorithms.

Some algorithms are more efficient than others. The following measures define the effectiveness of an algorithm:
Time complexity: How much time is required to execute the algorithm? As computers differ, the time complexity isn’t measured in seconds but the number of standard operations. You can read more about this in the article in the READ section.
Memory complexity: How much memory we need to execute the algorithm.
Usually, we focus more on time complexity, as memory isn’t the problem nowadays. While memory is easily accessible, some algorithms might use so much memory that it becomes significant.

Based on these factors, we can define four performance cases:
Worst case time complexity: A function defined as a result of a maximum number of steps taken on any instance of size n. It’s usually expressed in Big O notation.
Average case time complexity: A function defined as a result of the average number of steps taken on any instance of size n. It’s usually expressed in Big theta notation.
Best case time complexity: A function defined as a result of the minimum number of steps taken on any instance of size n. It’s usually expressed in Big omega notation.
Space complexity: A function defined as a result of additional memory space needed to carry out the algorithm. It’s usually expressed in Big O notation.


const  countdown = (value) => {
    for(let i=value; i>0; i--) {
        console.log(i);
    }
}
 countdown(10);

 const countdown = (value) => {
    console.log(value);
    const newValue = value - 1;
    if(newValue > 0) {
        countdown(newValue);
    }
}
countdown(10);

newValue > 0

const countDownRev = (value) => {
    const newValue = value - 1;
    if(newValue > 0) {
        countDownRev(newValue);
    }
    console.log(value);
}
countDownRev(10);

// Standard sorting algorithms
function swap(arr, a, b) {
    let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
  }

  let arr = [4, 7, 3];
console.log(arr); // 4, 7 , 3
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <= arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}
bubbleSort(arr); console.log(arr); //3, 4, 7

let arr = [4, 7, 3];
console.log(arr); // 4, 7 , 3
function insertionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        let j = i; temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
insertionSort(arr);
console.log(arr); //3, 4, 7

let arr = [4, 7, 3];
console.log(arr); // 4, 7 , 3
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}
selectionSort(arr);
console.log(arr); //3, 4, 7

// Built-in sorting in JavaScript
const cars = ["Audi", "Volkswagen", "BMW", "Ford"];
cars.sort();
console.log(cars); // ["Audi", "BMW", "Ford", "Volkswagen"]

const cars = ["Audi", "Volkswagen", "BMW", "Ford"];
cars.sort();
console.log(cars); // ["Audi", "BMW", "Ford", "Volkswagen"]
cars.reverse();
console.log(cars); // ["Volkswagen", "Ford", "BMW", "Audi"]

const numbers = [0, 1, 11, 12, 2, 55, 4];
numbers.sort();
console.log(numbers); // [0, 1, 11, 12, 2, 4, 55]

/*
Negative value: The first parameter will be sorted before the second.
Positive value: The second parameter will be sorted before the first.
Zero: No changes will be made to these two elements (elements are equal).


const numbers = [0, 1, 11, 12, 2, 55, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // [0, 1, 2, 4, 11, 12, 55]
*/