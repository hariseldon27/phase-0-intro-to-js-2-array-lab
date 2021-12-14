// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
};
function destructivelyPrependCat() {
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
   let moreCats = [...cats, "Broom"];
   console.log(moreCats);
   return moreCats;
}
//appendCat()
//console.log(cats);
function prependCat() {
    const moreCatsPre = ["Arnold", ...cats,];
//    console.log(moreCatsPre);
    return moreCatsPre;
 }
 function removeLastCat() {
     const lessCats = cats.slice(0,2);
     console.log(lessCats);
     console.log(`this is the cats list: ${cats}`)
     console.log(`this is the lessCats list: ${lessCats}`)
     return lessCats;
 }
//removeLastCat()
 function removeFirstCat() {
     const lessCats = cats.slice(-2);
     console.log(lessCats);
     console.log(`this is the cats list: ${cats}`)
     console.log(`this is the lessCats list: ${lessCats}`)
     return lessCats;
 }
//removeFirstCat()
