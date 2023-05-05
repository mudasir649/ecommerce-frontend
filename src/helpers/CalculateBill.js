const calculateBill = (cartData) => {
    let price = cartData?.map((cart, i) => {
        const total =  cart?.productData?.map(product=> product?.price * cart?.quantity);
        return total
    })
      let total = price?.map(arr=> arr.reduce((acc, val) => acc + val, 0));  
      const sum = total?.reduce((acc, val) => acc + val, 0);

      return sum
};

export default calculateBill;