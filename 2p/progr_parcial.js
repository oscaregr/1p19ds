/* 
Design, write, and test each of the following classes
Add properties and methods, and validate constructors as  needed


7
pending
---------
---------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor(node) {
        this.head = new Node(null)
        this.head.next = node;
        this.tail = new Node(null)
        this.tail.next = node;
        this.length = 1;
    }

    insertHead(node) {
        node.next = this.head.next;
        this.head.next = node;
        this.length ++;
    }

    insertTail(node) {
        this.tail.next.next = node;
        this.tail.next = node;
        this.length ++;
    }

    deleteHead() {
        this.head.next = this.head.next.next;
        this.length --;
    }

    deleteTail() {
        let temp = this.head.next;
        for(let i = 1; i < this.length - 1; i++) {
            temp = temp.next;
        }
        temp.next = null;
        this.tail.next = temp
        this.length --;
    }

    size() {
        return this.length;
    }

    toString() {
        let tempString = '';
        let tempNode = this.head.next;
        for(let i = 1; i <= this.length; i++) {
            tempString += tempNode.data + " ";
            tempNode = tempNode.next;
        }
        return tempString;
    }
}

let node0 = new Node('node0');
let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');

let list = new List(node1);
console.log(list.toString());

list.insertHead(node0);
list.insertTail(node2);
console.log(list.toString());

list.deleteHead();
list.deleteTail();
console.log(list.toString());

6
Fibonacci /// recursivo ya quedo
---------
---------
 constructor(k)
int value() ///el resultado
int cost() //// el costo para generar el resultado
Vector succession()
Vector table()


5
Factorial recursivo
---------
---------
 constructor(k)
int value()
int cost()
Vector succession()
Vector table()


4. 
Calendar
---------
---------
Matrix printCalendar(m,y) //// imprime el mes del año
bool isLeapYear(y) 
int todayPlus(d,n) /// imprime el dia incremenardo asignado del dia correspondiente
int firstDayYear(y)
//day(d,m,y)

3. 
Card
---------
---------
 printCard(n) //// regresa el tipo de carta y la carta
 /// deve regresar un vector
 printNumber(k,n) //// se ingreas el tipo y numero, da lo del primero
 
//calculateProbabilities
number onePair()//team1only
number twoPairs()//team2only
number ThreeOfaKind()//team3only
number FourOfaKind()//team4only

2. 
Vector ya
---------
---------
 constructor(a)
Vector sum(b)
Vector subt(b)
Vector mul(b)

1.
Matrix ya quedo
---------
---------
 constructor(r,c)//all-zero
 initRandom()/// lo que dios venga a llenar
Vector getRow(r)
Vector getCol(c)
bool isSquared()
bool isSymmetric()
bool isIdentity()
*/