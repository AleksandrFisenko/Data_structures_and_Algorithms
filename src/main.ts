import bubbleSort from './sort/bubbleSort';
import mergeSort from './sort/mergeSort';
import quickSort from './sort/quickSort';
import HashTable from './structures/HashTable';
import DoubleLinkedList from './structures/list/DoubleLinkedList';
import SingleLinkedList from './structures/list/SingleLinkedList';
import Queue from './structures/Queue';
import Stack from './structures/Stack';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Data structures and Algorithms</h1>
  </div>
`

const array = [5, 7, 1, 4, 8, 10, 2, 6, 3, 9];

console.log("bubbleSort ", bubbleSort(array));
console.log("mergeSort ", mergeSort(array));
console.log("quickSort ", quickSort(array));

//// HashTable
console.log("HashTable");

const hash = new HashTable<number>();

hash.set("goool", 55);
hash.set("go", 11)
hash.set("gegege", 654)
console.log(hash.get("goool"));
console.log(hash.get("goool"));
console.log(hash.get("go"));
console.log(hash.get("gegege"));
hash.remove("gegege")
// console.log(hash.get("gegege"));


console.log("Queue");

const queue = new Queue<number>();

queue.push(1);
queue.push(2);
queue.push(3);
queue.print();
console.log(queue.pop());
console.log(queue.pop());


console.log("Stack");

const node = new Stack<number>();

node.push(1);
node.push(23);
node.push(25);
node.push(6345);
node.push(15);

console.log(node.peek());
console.log(node.pop());
console.log(node.peek());


console.log("LinkedList");

const list = new SingleLinkedList<number>();

list.append(1);
list.append(11);
list.append(12);
list.append(13);

for(let i = 0; i<list.length; i++){
  console.log(list.get(i));
}

list.delete(0);

console.log(list.get(0));
// console.log(list.get(-1));
// console.log(list.get(11));

console.log("\n\n\n\n");

const list2 = new DoubleLinkedList<number>();
list2.append(10);
list2.append(20);
list2.prepend(5);

console.log("Size:", list2.length); // 3
for(let i = 0; i<list2.length; i++){
  console.log(list2.get(i));
}

list2.delete(1);
for(let i = 0; i<list2.length; i++){
  console.log(list2.get(i));
}
console.log("Size:", list2.length); // 2