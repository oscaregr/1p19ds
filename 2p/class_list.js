class Node{
    constructor(data){
        this.data = data;
        this.next = null;  
    }
}

class Lista{
    constructor(o){
        this.head = new Node(null)
        this.head.next = o;
        this.tail = new Node(null)
        this.tail.next = o;
        this.length = 1;
        this.stri = '';
        this.no = this.head.next;
    }
    insertHead(o){/////insertar la cabesa
        o.next = this.head.next;
        this.head.next = o;
        this.length ++;

    }
    insertTail(o){//// insert la cola
        this.tail.next.next = o;
        this.tail.next = o;
        this.length ++;
      }
    deleteHead(){
        this.head.next = this.head.next.next;
        this.length -=1 
    }
    deleteTail(){
        let momen = this.head.next;
        for(let i = 1; i < this.length - 1; i++) {
            momen = momen.next;
        }
        this.length -=1;
        momen.next = null;
        this.tail.next = momen
    }
    size(){
        return this.length
    }    
    toString(){
        this .stri = " "
        for(let i = 1; i <= this.length; i++) {
            this.stri += this.no.data + " ";
            this.no = this.no.next;
        }
        return this.stri;
    } ////regresa cadena de la lista enlazada , console .log
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