class Node {
  constructor (value,next, previous) {
    this.value = value
    this.previous = previous
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addToTail(value){
    const newNode = new Node(value, null,this.tail)
    if(this.tail){
      this.tail.next = newNode;
    }
    else{
      this.head = newNode;
    }
    this.tail = newNode;

  }
  addToHead(value){
    const newNode = new Node(value, this.head, null)

    if(this.head){
      this.head.previous = newNode;
    }
    else{
      this.tail = newNode;
    }
    this.head = newNode;
  }
  removeHead(){

  }
  removeTail(){

  }
   search(){

   }
}

module.exports = {
  Node,
  LinkedList
}
