let grade= +prompt("enter a grade");
let a =(grade>=90)?  "outstanding":
       (grade>=70)?  "pass":
       (grade>=50)? "average":
       (grade>=35)? "just pass":
       "fail";
console.log(a);

let temp= +prompt("enter a temp");
let b =(temp>30)? "hot":
        (temp>=20 && 30>=temp)? "warm":
        (temp>=10 && 19>=temp)? "cool":
        "cold";
console.log(b);

let age= +prompt("enter age");
let c= (age>=0 && 12>=age)? "child":
       (age>=13 && 19>=age)? "teen":
       (age>=20 && 64>=age)? "adult":
       "senior citizen";
console.log(c);

let num= +prompt("enter num");
let d= (num %2 === 0)? "even" : "odd";
       
console.log(d);



