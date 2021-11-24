function totalSales(shirt, pant, shoe){
    const shirt_price_Quantity = shirt*100;
     const pant_price_Quantity = pant*200;
     const shoe_price_Quantity = shoe*500;
     let price_quantity = shirt_price_Quantity+pant_price_Quantity+shoe_price_Quantity;
     if (shirt <= 0 || pant <=0 || shoe <=0){
        return "Error!! please type positive number "
    }
    else{
        return price_quantity
    }



    //  return price_quantity
 }
 const all_price_quantity = totalSales(5,4,2)
 console.log('total sales price',all_price_quantity)