// function satu() {
//     console.log("halo saya satu");
// }
// function dua() {
//     console.log("halo saya dua");
// }
// function tiga() {
//     console.log("halo saya tiga");
// }

//callback
const satuedit = (callback) => {
  console.log("halo saya satu edit");
  callback();
};

const duaedit = (callback) => {
  setTimeout(() => {
    console.log("halo saya dua edit");
    callback();
  }, 2000);
};

const tigaedit = (callback) => {
  setTimeout(() => {
    console.log("halo saya tiga edit");
    callback();
  }, 5000);
};

const empatedit = () => {
  setTimeout(() => {
    console.log("halo saya empat edit");
  }, 7000);
};

// satu();
// dua();
// tiga();
// satuedit();
// duaedit();
satuedit(() => {
  duaedit(() => {
    tigaedit(() => {
      empatedit();
    });
  });
});
