class Queue{
    constructor(c){
        this.cola = this.initqueue(c)
        this.per = c-2
        this.po = c
    }
    initqueue(a){
        this.cola = new Array(a)
        for(let i =0; i<a;i++){
            this.cola[i] = "Persona" + i +"";
            this.cola[a-1] = " " ///  "Persona" + this.per
        }

       
        return this.cola
    }
      enqueue(){ 
        let cola = this.cola
        for (let i =0; i<this.po;i++){
            if (cola[(i)] === ' ') {     
                this.per++
                cola[(i)] = "persona" + this.per ; 
                return this.cola
            }
            else if(i === (this.po-1)){ 
                return "\nQueue esta llena\n"; 
            } 
            
        }
         
    } 
    dequeue() { 

        if (this.cola[0] === ' ') { 
            return "\nQueue esta vasio\n";   
        } 
    
        else { 
            for (let i = 0; i <= this.cola.length -1; i++) { 
                this.cola[i] = this.cola[i + 1]; 
                if(this.cola.length -1 === i){
                    this.cola[i] = ' ';
                }
            }   
        } 
        return (this.cola); 
    }
}

(function(){
 let c = new Queue(8)

 console.log(c.enqueue())
 console.log(c.dequeue())
 console.log(c.dequeue())
 console.log(c.dequeue())
 console.log(c.enqueue())

})()