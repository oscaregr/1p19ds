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
       return (((13*4)*(12*4)*(11*4))/2)/2598960
    }//team3only

}

(function(){
let f = new Card
  console.log("regresa el palo y el numero de la carta")
    console.log(f.printCard(10))
  console.log("regresa el numero corrspondiente en base al total de las cartas")

    console.log(f.printNumber(3,2))
    console.log("regresa la probavilidad de tener una tercia")
    console.log(f.ThreeOfaKind())
})()
