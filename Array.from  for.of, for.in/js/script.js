let num = [3, 45, 1, 2, 4]

/*
for(i=0;i<num.length;i++){
console.log(num[i])
}
*/
//forEach Function:
num.forEach((element) => {
    console.log(element * element)
})

//Array.from;
let name = "Ansilyas"
a = Array.from(name) //Change this(name) element to (Array)
console.log(a)

//for..of;
for(let item of num){  //it call the items of other Array
    console.log(item)
}

//for..in;
for(let items in num){  //This (Print) the [Keys][index] of the Element
    console.log(items)
}


