class Node{
    constructor(data){
        this.data = data;
        this.next = null;  
    }
}

class Lista {
    constructor(no) {
      this.ca = new Node(null);
      this.co = new Node(null);
      this.ca.next = no
      this.co.next = no
      this.length = 1;
    }
  
    insertHead(no) {
      no.next = this.ca.next
      this.ca.next = no;
      this.length++;
    }
  
    insertTail(no) {
      this.co.next.next = no;
      this.co.next = no;
      this.length++;
    }
  
    deleteHead() {
      this.ca.next = this.ca.next.next;
      this.length--;
    }
  
    deleteTail() {
      let t = this.ca;
      for (let i = 1; i < this.length - 1; i++) {
        t = t.next;
      }
      t.next = null;
      this.co.next = t;
      this.length--;
    }
  
    size() {
      return this.length;
    }
  
    toString() {
      let s = "";
      let tn = this.ca;
      for (let i = 0; i <= this.length; i++) {
        s += tn.data + ", ";
        tn = tn.next;
      }
      return s;
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
    console.log(lis.toString())
    lis.deleteTail()  
    console.log(lis.toString())
    lis.deleteHead()
    console.log(lis.toString())
})()