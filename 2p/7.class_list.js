class Node{
    constructor(data){
        this.data = data;
        this.next = null;  
    }
}

class List {
    constructor(node) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    }
  
    insertHead(node) {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  
    insertTail(node) {
      this.tail.next = node;
      this.tail = this.tail.next;
      this.length++;
    }
  
    deleteHead() {
      this.head.next = this.head.next.next;
      this.length--;
    }
  
    deleteTail() {
      let temp = this.head.next;
      for (let i = 1; i < this.length - 1; i++) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail.next = temp;
      this.length--;
    }
  
    size() {
      return this.length;
    }
  
    toString() {
      let tempString = "";
      let tempNode = this.head;
      for (let i = 1; i <= this.length; i++) {
        tempString += tempNode.data + " ";
        tempNode = tempNode.next;
      }
      return tempString;
    }
  }
  
(function(){
 const no1 = new Node(1)
 const no2 = new Node(2)
 const no3 = new Node(3)
 const no4 = new Node(4)
let lis = new Lista(no1)
    lis.insertHead(no2)
    lis.insertHead(no3)
    lis.insertHead(no4)    
    console.log(lis)
    lis.deleteTail()
    lis.deleteHead()
    console.log(lis)
})()