
// function seerToMon(seer) {
//     var Mon = seer / 40;
//     if (seer <= 0){
//         return "Error!! please type positive number "
//     }
//     else{
//         return Mon
//     }
    
// }

// var totalMon = seerToMon(120);
// console.log('total Mon: ', totalMon)


// function perfectFriend(numbers) {
//     let largest = '';
//     for (let element of numbers) {
//         if (element.length == 5) {
//            return largest = element;
//         }
        
//     }
   
    
// }
// const names = ['Ripona','konohk', 'Neyem', 'Mehadi', 'Raj', 'faruk'];
// const result = perfectFriend(names)
// console.log(result);

function perfectFriend(numbers) {
    let largest = '';
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element.length == 5) {
            return largest = element;
        }
        
    }
    
}
const names = ['Ripofn','kondok', 'Neeyem', 'Mehadi', 'Raj', 'faruk'];
const result = perfectFriend(names)
console.log(result);





