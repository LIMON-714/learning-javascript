 class Student {
         constructor(id, name){
             this.id = id;
             this.name = name;
         }
         set StudentName(name){
             this.name = name;
         }

         get StudentInfo(){
             return this.id  + this.name;
         }




 }
  let s1 = new Student(101, "limon");
//   console.log(s1);
//   console.log(s1.name);

//   s1.StudentName= "rahman md limon";
//   console.log(s1.name);


  console.log(s1.StudentInfo);

