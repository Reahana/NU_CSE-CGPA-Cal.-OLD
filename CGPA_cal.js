var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function grade() {
  var text;
  var Th = 3;
  var Pr = 1.5;

  //1st semester
  // 111
  var G = document.getElementById("myInput111").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;

  // 112
  var G = document.getElementById("myInput112").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Th;


  // 113
  var G = document.getElementById("myInput113").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }


  var s3 = text * Pr;


  // 114
  var G = document.getElementById("myInput114").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Th;

  // 115
  var G = document.getElementById("myInput115").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Th;

  // 116
  var G = document.getElementById("myInput116").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Th;

  //cgpa
  var Cr = 16.5;
  var result = (s1 + s2 + s3 + s4 + s5 + s6) / Cr;
  document.getElementById("demo1").innerHTML = result;


  //2nd semester
  // 121
  var G = document.getElementById("myInput121").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;

  // 122
  var G = document.getElementById("myInput122").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Pr;


  // 123
  var G = document.getElementById("myInput123").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s3 = text * Th;


  // 124
  var G = document.getElementById("myInput124").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Pr;

  // 125
  var G = document.getElementById("myInput125").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Th;

  // 126
  var G = document.getElementById("myInput126").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Th;

  //127
  var G = document.getElementById("myInput127").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s7 = text * Th;

  //cgpa
  var Cr = 18;

  var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr

  document.getElementById("demo2").innerHTML = result;
  //3rd semester
  //211
  var G = document.getElementById("myInput211").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;
  //212
  var G = document.getElementById("myInput212").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Pr;

  //213
  var G = document.getElementById("myInput213").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s3 = text * Th;

  //214
  var G = document.getElementById("myInput214").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Th;

  //215
  var G = document.getElementById("myInput215").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Pr;

  //216
  var G = document.getElementById("myInput216").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Th;
  //217
  var G = document.getElementById("myInput217").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s7 = text * Th;
  //218
  var G = document.getElementById("myInput218").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s8 = text * Pr;
  //219
  var G = document.getElementById("myInput219").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s9 = text * Th;

  //cgpa
  var Cr = 22.5;
  var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9) / Cr;
  document.getElementById("demo3").innerHTML = result;

  //4th semester
  // 221
  var G = document.getElementById("myInput221").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;

  // 222
  var G = document.getElementById("myInput222").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Pr;


  // 223
  var G = document.getElementById("myInput223").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s3 = text * Th;


  // 224
  var G = document.getElementById("myInput224").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Pr;

  // 225
  var G = document.getElementById("myInput225").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Th;

  // 226
  var G = document.getElementById("myInput226").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Th;

  //227
  var G = document.getElementById("myInput227").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s7 = text * Th;

  //cgpa
  var Cr = 18;

  var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr

  document.getElementById("demo4").innerHTML = result;




  //5th semester
  // 311
  var G = document.getElementById("myInput311").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;

  // 312
  var G = document.getElementById("myInput312").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Th;


  // 313
  var G = document.getElementById("myInput313").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }


  var s3 = text * Pr;


  // 314
  var G = document.getElementById("myInput314").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Th;

  // 315
  var G = document.getElementById("myInput315").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Th;

  // 316
  var G = document.getElementById("myInput316").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Th;

  //cgpa
  var Cr = 16.5;
  var result = (s1 + s2 + s3 + s4 + s5 + s6) / Cr;
  document.getElementById("demo5").innerHTML = result;

  //6th semester
  //321
  var G = document.getElementById("myInput321").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;
  //322
  var G = document.getElementById("myInput322").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Pr;
  //323
  var G = document.getElementById("myInput323").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s3 = text * Th;
  //324
  var G = document.getElementById("myInput324").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Th;
  //325
  var G = document.getElementById("myInput325").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Pr;
  //326
  var G = document.getElementById("myInput326").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Th;
  //327
  var G = document.getElementById("myInput327").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s7 = text * Pr;
  //328
  var G = document.getElementById("myInput328").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s8 = text * Th;

  //  CGPA
  var Cr = 19.5;
  var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8) / Cr
  document.getElementById("demo6").innerHTML = result;

  //7th semester
  //411
  var G = document.getElementById("myInput411").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;
  //412
  var G = document.getElementById("myInput412").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s2 = text * Pr;
  //413
  var G = document.getElementById("myInput413").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s3 = text * Th;
  //414
  var G = document.getElementById("myInput414").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s4 = text * Th;
  //415
  var G = document.getElementById("myInput415").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s5 = text * Th;
  //416
  var G = document.getElementById("myInput416").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s6 = text * Pr;
  //417
  var G = document.getElementById("myInput417").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s7 = text * Th;
  //  CGPA
  var Cr = 18;
  var result = (s1 + s2 + s3 + s4 + s5 + s6 + s7) / Cr
  document.getElementById("demo7").innerHTML = result;

  //8th semester
  //421
  var G = document.getElementById("myInput421").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s1 = text * Th;
  //422
  //423
  var G = document.getElementById("myInput423").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var s3 = text * Th;
  //42X
  var G = document.getElementById("myInput42x").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var sx = text * Th;
  //499
  var G = document.getElementById("myInput499").value;

  switch (G) {
    case "A+":
      text = 4.00;
      break;
    case "A":
      text = 3.75;
      break;
    case "A-":
      text = 3.50;
      break;
    case "B+":
      text = 3.25;
      break;
    case "B":
      text = 3;
      break;
    case "B-":
      text = 2.75;
      break;
    case "C+":
      text = 2.50;
      break;
    case "C":
      text = 2.25;
      break;
    case "D":
      text = 2.00;
      break;
    case "F":
      text = 0.00;
      break;
    default:
      text = 0;

  }
  var pj = 6;
  var s99 = text * pj;
  //  CGPA
  var Cr = 16.5;
  var result = (s1 + s2 + s3 + sx + s99) / Cr
  document.getElementById("demo8").innerHTML = result;




  //FINAL

  var X1 = document.getElementById("myInput1").value;
  var a1 = X1 * 16.5;
  var X2 = document.getElementById("myInput2").value;
  var a2 = X2 * 18;
  var X3 = document.getElementById("myInput3").value;
  var a3 = X3 * 22.5;
  var X4 = document.getElementById("myInput4").value;
  var a4 = X4 * 18;
  var X5 = document.getElementById("myInput5").value;
  var a5 = X5 * 16.5;
  var X6 = document.getElementById("myInput6").value;
  var a6 = X6 * 19.5;
  var X7 = document.getElementById("myInput7").value;
  var a7 = X7 * 18;
  var X8 = document.getElementById("myInput8").value;
  var a8 = X8 * 16.5;

  var Cr = 145.5;
  var result = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8) / Cr;
  //console.log(result);
  document.getElementById("demo").innerHTML = result;
}