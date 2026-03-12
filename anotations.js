class person
{
    constructor(name,age)
    {
      this.name =name;
       this.age = age;
    }

    greet()
    {
        console.log("Hello my name is "+this.name+" and I am "+this.age+ " years old");
    }
}

const obj= new person("sankar",20)
obj.greet();
