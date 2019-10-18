/*4. 
Calendar
---------
---------
Matrix printCalendar(m,y) //// imprime el mes del año
bool isLeapYear(y) 
int todayPlus(d,n) /// imprime el dia incremenardo asignado del dia correspondiente
int firstDayYear(y)
*///day(d,m,y)
class Calendar{
    constructor(){
        this.n = null
    }
//// imprime el mes del año
    printCalendar(m,y){

    } 
    ///bool 
    isLeapYear(y) {
            if(((y % 4 == 0) && (y % 100 != 0 )) || (y % 400 == 0)){
            return true
        }
        return false
    }
    ///int  /// imprime el dia incremenardo asignado del dia correspondiente
    todayPlus(d, n) {
        if(d != 7){
            n += d
        }
        this.n = n %7
        return this.n;
    }
    ///int 
    firstDayYear(y){
        return (y + Math.floor((y-1)/4) - Math.floor((y-1)/100) + Math.floor((y-1)/400)) % 7

    }
//day(d,m,y)
}

(function(){
    let c = new Calendar()
    console.log("primer dia del año")
    console.log(c.firstDayYear(2019))
    console.log("es año visiesto")
    console.log(c.isLeapYear(2019))
    console.log("el dia, mas el plus")
    console.log(c.todayPlus(3,10))
})()