let division2 = document.getElementById("division2")
division2.style.fontSize = "50px"

let tringle = () => {
    b = 200;
    h = 200;
    a = (1/2)*b*h;
    division2.innerHTML = a;
}


let percentages = () => {
    hindi = 100;
    english = 50;
    maths = 30;
    science = 20;
    evs = 40;
    total = (hindi + english + maths + science);
    per = (total/5)
    division2.innerHTML = per;
}


let  simple=()=>{
    p = 40000
    r =1.5
    t=1  
    si = (p*r*t)/100
    division2.innerHTML = si
}


let compound=()=>{
    p =40000
    r = 4
    t= 23
    n=2
    a = p*(r/n)*(n*t)
    division2.innerHTML = a
}


let remove=()=>{
    division2.innerHTML="mouse hata "
}