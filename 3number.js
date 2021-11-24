


//  problm 3
function deliveryCost(tshirt_delevary) {
    const tshirtforfrist = 100;
    const tshirtforsecond = 80;
    const tshirtthird = 50;

    if (tshirt_delevary < 0 || typeof tshirt_delevary == 'string'){
        return 'negative or string cannot be input';  
    }
    else  if (tshirt_delevary <= 100) {
        const count = tshirt_delevary * tshirtforfrist;
        return count;
    }
    else if (tshirt_delevary > 100 && tshirt_delevary <= 200) {
        
       const count = 100 * tshirtforfrist + (tshirt_delevary - 100) * tshirtforsecond;
    return count;
    }
   
    else{
        const count = 100 * tshirtforfrist + 100 * 80 + (tshirt_delevary - 200) * tshirtthird;
        return count;
    }


}
const totalcost = deliveryCost(300);
console.log(totalcost)
