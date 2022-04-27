function Parson(namE,roll , gpa, language){
    this.namE=namE;
    this.roll=roll;
    this.language=language;
    this.gpa=gpa;

    this.display=function(){
        document.write(this.namE+" "+this.roll+" "+this.gpa+" "+language +"</br>");
        
    }
}

let parson1= new Parson("Limon rahman", 1112 , 3.88 , ["bangla, english, chiness"]);
let parson2= new Parson("imtiaj ahmed", 1144 , 3.00 , [" english, japan"," english"]);
let parson3= new Parson("rahman ahmed", 1212 , 4.00 , ["bangla, english"," english"]);
let parson4= new Parson("kasam md halim ", 7712 , 3.50 , ["bangla, english, german"]);
let parson5= new Parson("Limon rahman", 1112 , 3.88 , ["bangla, english, chiness"]);
let parson6= new Parson("Limon rahman", 1112 , 3.88 , ["bangla, english, chiness"]);
let parson7= new Parson ("Limon rahman", 1112 , 3.88 , ["bangla, english, chiness"]);


parson1.display();
parson2.display();
parson3.display();
parson4.display();
parson5.display();
parson6.display();
parson7.display();



