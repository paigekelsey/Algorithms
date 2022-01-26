class Node {
  constructor (value,next,previous) {
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

  /* pseudocode
       - define a new Node
       - check if there is a node at the tail currently
       - if yes, then assign the newNode to next node
       - if no, then assign the head to the newNode (bc it will only have one node total)
       - then assign tail to newNode
  */

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

  /*pseudocode
    -define newNode
    - check if there is a head node already
    -if yes then assign previous node to head as newNode
    -if no, then assign tail to newNode as well(only 1 node total)
    - last, assign head to newNode
  */
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
    /*pseudocode
      -define the head as the node I am removing
      - check if there is a node that comes after the removed head
      - if not, return null
      - if there is a node, then assign it to head
      - and assign null to previous node
      - if the linked list only had one node to start then head and tail are null bc no more nodes left
      - return the value of the removedHead
  */
  removeHead(){
    const removedHead = this.head
    if(!removedHead){
      return null
    }
    if(removedHead.next){
      this.head = removedHead.next
      this.head.previous = null
    }
    else {
      this.head = null;
      this.tail = null;
    }
    return removedHead.value
  }
     /*pseudocode
      -define the current tail as the node I am removing
      - check if there is a node that comes before the removed tail
      - if not, return null
      - if there is a node, then assign it to tail
      - and assign null to next node
      - if the linked list only had one node to start then head and tail are null bc no more nodes left
      - return the value of the removedTail
  */
  removeTail(){
    const removedTail = this.tail;
    if(!removedTail){
      return null
    }
    if(removedTail.previous){
      this.tail = this.tail.previous
      this.tail.next = null
    }
    else{
      this.head = null;
      this.tail = null;
    }
    return removedTail.value

  }
     /*pseudocode
    - define the currentNode as the head for a starting place
    - while there is a node to check
    - then check value of that node with the given search value
    - if a match then return value
    -set the current Node to the next node to traverse list
  */
   search(value){
     let currentNode = this.head;

     while(currentNode){
       if(currentNode.value === value){
         return currentNode.value;
       }
       currentNode.next = currentNode
     }

   }
}

module.exports = {
  Node,
  LinkedList
}
