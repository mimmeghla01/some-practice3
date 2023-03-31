const myFriend = [
    {name:"akashi",age:20},
    {name:"mila",age:8},
    {name:"rabby",age:23},
    {name:"tanvir",age:21},
    {name:"sham",age:24}
]

function myLovingFrnd (Frinds){
    bigCharacter =myFriend[0];
    for (let friend of myFriend)
    if( friend.length > bigCharacter.length){
        bigCharacter = friend
     }
     return bigCharacter;

};
const result = myLovingFrnd(myFriend)
console.log(result);