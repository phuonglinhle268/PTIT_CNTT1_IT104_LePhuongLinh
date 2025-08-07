type ProductInfor = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: ProductInfor;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};
const total = (order: Order): number => {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
};
const printOrder = ({ orderId, customerName, items, note }: Order): void => {
  console.log(`Đon hag: #${orderId}`);
  console.log(`Khach hang: ${customerName}`);
  console.log(`San pham:`);

  items.forEach(({ product, quantity }) => {
    const { name, price } = product;
    const lineTotal = price * quantity;
    console.log(`- ${name} x ${quantity} → ${lineTotal.toLocaleString()} VND`);
  });

  const productTotal = total({ orderId, customerName, items, note });
  console.log(`Tong cong: ${productTotal.toLocaleString()} VND`);
  if (note) {
    console.log(`Ghi chu: ${note}`);
  }
};
const product1: ProductInfor = {
  id: "P001",
  name: "Ao so mi",
  price: 250000
};

const product2: ProductInfor = {
  id: "P002",
  name: "Quan tay",
  price: 400000
};

const order: Order = {
  orderId: "ORD001",
  customerName: "Nguyen Van A",
  items: [
    { product: product1, quantity: 2 },
    { product: product2, quantity: 1 }
  ],
  note: "Giao sau 18h"
};

printOrder(order);


