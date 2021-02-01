class Parent{
    constructor(){
        this.fatherName ="Cristiano Ronaldo";
    }
}



class Child extends Parent{
    constructor(name) {
        super();
        this.name = name
 
    }
    getfullName(){
          return this.name+" "+this.fatherName;
    }
}

const baby = new Child("Barcelona");
console.log(baby.getfullName());