const laptopname =[
    {name: "Asus",price:24000},
    {name: "Dell",price: 34000},
    {name:"macbook",price:56788},
    {name: "acer",price:9000000}
]

function myLaptop (laptop) {
    let largePriceLaptop= laptopname[0];
    for(  let laptop of laptopname){
        if(laptop.price > largePriceLaptop.price){
            largePriceLaptop = laptop
        }
    }
    return largePriceLaptop;
};

const result =myLaptop(laptopname)
console.log(result);