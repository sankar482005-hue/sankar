const value={
     firstname:"sankar",
     secondname:"pandi",
     email:"sankar482005@gmail.com",
     fullname: function fullname( fname,lname,email)
     {
        console.log("fullname:"+fname+lname)
        console.log("Email:"+email)
     }
}

value.fullname(value.firstname,value.secondname,value.email)


 


 function username(name,pass)
 {
     let val="";
     let pas="";
   for (let index = 0; index<3; index++)
     {
        val= val+name[index];
     }
    console.log(val)
    for (let index =0; index < pass.lenght; index++)
     {
        console.log(pass[index])
     }
     console.log(pas)
 }



let name= "sankar";
let pass="8778190004";
 
 username(name,pass);
