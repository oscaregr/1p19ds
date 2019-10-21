/* 
Design, write, and test each of the following classes
Add properties and methods, and validate constructors as  needed


7
pending
---------
---------


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
 
    friday13(year){
        let count = 0;
    for (let month=0; month<12; month++) {
        let d = new Date(year,month,13);
        if(d.getDay() == 5){
          count++;
       }
    }
    return count;   
    }
    

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