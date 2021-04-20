// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = (birthday) => {
     const birtday = new Date(birthday);
     const today = Date.now(); //today menghasilkan nilai miliseconds saat ini

     const diff_ms = today - birtday.getTime(); //menghitung selisih nilai miliseconds hari ini dan tanggal lahir
     const diffDate = new Date(diff_ms);

     return diffDate.getFullYear() - 1970; //1970 adalah representasi 0 dari miliseconds
};

const hariKelahiran = (bd) => {
     const tglLahir = new Date(bd);
     //  const get_day = tglLahir.getDay();
     //  const day_conver = get_day.toDateString();

     return tglLahir.toDateString();
};

const umur = myAge("1994-10-15");
console.log(umur);

console.log(hariKelahiran("1994-10-15"));

const listOfContent = [1, 23, 5, 6, 7, {}, "danil"];
console.log(Array.isArray(listOfContent)); //true

const splitText = "1994-10-15".split("-");
console.log(splitText);
console.log(splitText[2]);
