/* function compare(a, b) {
  if (a nin b den kucuk olmasini istiyorsan) {
    return -1;
  }
  if (a nin b den buyuk olmasini istiyorsan) {
    return 1;
  }
  // a must be equal to b
  return 0;
} */

function compareNumbers(sayi1, sayi2){
  // 4 ve 2 icin girdi
  // 4 - 2 = 2 => 4un bulunacgi yer 2 den sonra
  
  // 4 ve 5 icin girdi
  // 
  return sayi1-sayi2;
}

var numbers = [4, 2, 5, 1, 3];

numbers.sort(compareNumbers)

console.log(numbers);

var isimler = ["Nisan", "Alper", "Akin", "Can", "Onur"];


const sortedIsimler = [...isimler].sort((isim1,isim2) => {
   if(isim1.toLowerCase() < isim2.toLowerCase()){
     return -1
   }
   if(isim1.toLowerCase() > isim2.toLowerCase()){
     return 1
   }
   return 0;
});

console.log(isimler);
console.log(sortedIsimler);
