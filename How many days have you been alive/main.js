// let g1 = Number(prompt("doğum gününü gir"));
// let a1 = Number(prompt("doğum ayını gir"));
// let y1 = Number(prompt("doğum ayını gir"));


// let g2 = new Date().getDate();
// let a2 = new Date().getMonth();
// let y2 = new Date().getFullYear();

// let gun = (g1 - g2);
// let ay = (a1 - a2) * 30;
// let yil = ((y1) - (y2)) * 360;
// let total = gun + ay + yil;
// // console.log(gun);
// // console.log(ay);
// // console.log(yil);
// console.log(total);
// let gecenyil = (total / 365).toFixed();
// let gecenay = ((total % 365) / 30).toFixed();
// let gecengun = ((total % 365) % 30).toFixed();
// console.log(`geçen gün :${gecengun}  geçen ay :${gecenay} geçen yıl ${gecenyil}`);
function calc() {
    let g1 = parseInt(document.querySelector("#sgun").value);
    let a1 = parseInt(document.querySelector("#say").value);
    let y1 = parseInt(document.querySelector("#syil").value);

    let g2 = parseInt(document.querySelector("#bgun").value);
    let a2 = parseInt(document.querySelector("#bay").value);
    let y2 = parseInt(document.querySelector("#byil").value);

    let gun = (g2 - g1);
    let ay = (a2 - a1) * 30;
    let yil = (y2 - y1) * 360;
    let total = gun + ay + yil;
    console.log(total);
    document.querySelector(".sonuc").value = total;
}