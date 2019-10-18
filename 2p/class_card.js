class Card{
    constructor(){

    }
    printCard(n) {
        return [Math.floor(n % 13), Math.floor(n / 13)];
      }  
      printNumber(k, n) {
        return k + n * 13;
      }//// se ingreas el tipo y numero, da lo del primero
    ThreeOfaKind(){
       return ((13*4)*(12*48)*(11*4))/2
    }//team3only

}

(function(){
let f = new Card
    console.log(f.printCard(10))
    console.log(f.printNumber(3,2))
    console.log(f.ThreeOfaKind())
})()