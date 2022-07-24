export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = caculateBasePrice(product, quantity);
  const discount = caculateDiscountedPrice(product, quantity);
  const shippingCost = caculateShippingCost(
    basePrice,
    quantity,
    shippingMethod
  );
  return basePrice - discount + shippingCost;
}

function caculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function caculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function caculateShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
