function satu() {
  console.log("satu");
}

function dua() {
  console.log("function dua mau dieksekusi...");
  setTimeout(() => {
    console.log("dua");
  }, 2);
}

function tiga() {
  console.log("tiga");
}

function empat() {
  console.log("empat");
}

satu();
dua();
tiga();
empat();
