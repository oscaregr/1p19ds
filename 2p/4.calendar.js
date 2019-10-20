class Calendar{
    constructor(){
        this.inc = null
        this.first = null
        this.cal = null
    }
//// imprime el mes del año
    printCalendar(m,y){
        this.cal= []
        for(let i=0;i<6;i++){
            this.cal[i] = new Array(7)
            for(let a=0;a<7;a++){
                this.cal[i][a] = " "
            }
        }
        console.log(this.cal)
        if(m >= 1){
            this.first = this.todayPlus(this.firstDayYear(y),0)
            this.inc = 31
        }
        if(!this.isLeapYear(y)){
            if(m >= 2){
                this.first = this.todayPlus(this.first,this.inc)
                this.inc = 28 //29
            }
            }else{ if(m >= 2){
                this.first = this.todayPlus(this.first,this.inc)
                this.inc = 29
            } 
        }
        if(m>=3){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 31
        }
        if(m>=4){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 30
        }
        if(m>=5){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 31
        }
        if(m>=6){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 30
        }
        if(m>=7){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 31
        }
        if(m>=8){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 31
        }
        if(m>=9){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 30
        }
        if(m>=10){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 31
        }
        if(m>=11){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 30
        }
        if(m === 12){
            this.first = this.todayPlus(this.first,this.inc)
            this.inc = 31}
        let col = 0
            let row = 0
            let f = null
            for (let i =0; i< this.inc; i++){
                f = (this.todayPlus(this.first,i))
                if(f === 0 && i === 0){}else if(f === 0 ){col = 0
                    row+=1}
                this.cal[row][f] = i +1
                if(f != 0){
                    col +=1
                }
            } 
        return this.cal
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
        return  n %7
    }
    ///int
    firstDayYear(y){
        return (y + Math.floor((y-1)/4) - Math.floor((y-1)/100) + Math.floor((y-1)/400)) % 7

    }
//day(d,m,y)
}

(function(){
    let c = new Calendar()
    console.log("el mes")
    console.log(c.printCalendar(1,2019))
    console.log("primer dia del año")
    console.log(c.firstDayYear(2019))
    console.log("es año visiesto")
    console.log(c.isLeapYear(2019))
    console.log("el dia, mas el plus")
    console.log(c.todayPlus(3,10))
})()