// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// day 8 hw 
// using if statement,prompt, alert


// 1) برمج برنامج يسأل المستخدم عن اسمه و عمره
// اذا كان عمر المستخدم اكبر من او يساوي 18 اطبع له رساله ترحيبيه باسم المستخدم 
// اذا كان اقل من 18 اطبع له رساله اعتذار باسم المستخدم 

let name=prompt("Hello,   What is your name?");
let age=prompt(name +" , "+"How old are you?");

if (age >= 18){
    alert("WELCOME TO A NEW WORLD "+ name + " :)")
}else{
    alert("Hey "+ name + " we're sorry but you're bellow 18 :(");
}


// 2) عرف متغير (name_1) 
// اسند له اسم احمد
//اذا كان اسم المستخدم لا يساوي احمد اطبع له جملة : الاسمان غير متطابقان
//  اذا كان يساوي يطبع له جملة : الاسمان متطابقان.

let name_1="احمد";
let name_2=prompt("مرحبا,  ما اسمك؟");

if(name_2 != name_1){
    alert(" الإسمان غير متطابقان")
}else if (name_2 == name_1){
    alert("الإسمان متطابقان")
}


// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
