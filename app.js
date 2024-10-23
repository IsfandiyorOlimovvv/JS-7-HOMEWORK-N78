// function calculateAge() {
//     let ism = prompt("Ismingizni kiriting");
//     let tugilganYil = prompt("Tugilgan yilingizni kiriting");
//     let tugilganOy = prompt("Tugilgan oyingizni kiriting");
//     let tugilganKun = prompt("Tugilgan kuningizni kiriting");


//     let hozirgiVaqt = new Date();
//     let hozirgiYil = hozirgiVaqt.getFullYear();
//     let hozirgiOy = hozirgiVaqt.getMonth() + 1;
//     let hozirgiKun = hozirgiVaqt.getDate();
//     let hozirgiSoat = hozirgiVaqt.getHours();
//     let hozirgiMinut = hozirgiVaqt.getMinutes();
//     let hozirgiSekunt = hozirgiVaqt.getSeconds();

//     let tugilganSana = new Date(tugilganYil, tugilganOy - 1, tugilganKun);
//     let yashaganVaqt = hozirgiVaqt - tugilganSana;

//     let yil = Math.floor(yashaganVaqt / (1000 * 60 * 60 * 24 * 365));
//     let oy = Math.floor((yashaganVaqt % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
//     let kun = Math.floor((yashaganVaqt % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
//     let soat = Math.floor((yashaganVaqt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minut = Math.floor((yashaganVaqt % (1000 * 60 * 60)) / (1000 * 60));
//     let sekund = Math.floor((yashaganVaqt % (1000 * 60)) / 1000);

//     alert(`${ism}, siz ${yil} yil, ${oy} oy, ${kun} kun, ${soat} soat, ${minut} minut, ${sekund} sekund yashagansiz.`);
// }

// calculateAge();






// function randomBetween(x, y) {
//     return Math.floor(Math.random() * (y - x + 1)) + x;
// }

// let x = parseInt(prompt("X qiymatini kiriting:"));
// let y = parseInt(prompt("Y qiymatini kiriting:"));

// let randomSon = randomBetween(x, y);
// console.log(`X va Y oralig'idagi ixtiyoriy son ${randomSon}`);








// function capitalizeWords(str) {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }

// let result = capitalizeWords("javascript is fun");
// console.log(result);