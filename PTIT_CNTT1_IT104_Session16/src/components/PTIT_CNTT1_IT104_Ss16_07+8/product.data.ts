export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
}

export const products: Product[] = [
  { id: 1, name: "Dien thoai Samsung Galaxy S21", image: "https://hoanghamobile.com/Uploads/2021/01/15/a2.png", price: 20000000, stock: 5 },
  { id: 2, name: "Dien thoai Iphone 14 Promax", image: "https://images.prestigeonline.com/wp-content/uploads/sites/6/2022/10/05004752/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907-geo-768x1075.jpg", price: 20500000, stock: 3 },
  { id: 3, name: "Dien thoai Samsung Galaxy S20", image: "https://file.hstatic.net/1000238589/file/dien_thoai_samsung_galaxy_s21_fe_5g__6gb_-_128gb__d1b8fd531ef24903a16cbca1bd666b34.jpg", price: 2100000, stock: 10 },
  { id: 4, name: "Dien thoai Iphone 11 Promax", image: "https://via.placeholder.com/150", price: 21500000, stock: 8 },
  { id: 5, name: "https://tse3.mm.bing.net/th?id=OIP.ZVeFgZ7oDODoAqjh9Jn2nQHaHa&pid=Api&P=0&h=180", image: "https://via.placeholder.com/150", price: 22500000, stock: 7 },
  { id: 6, name: "Dien thoai Oppo A9", image: "https://tse2.mm.bing.net/th?id=OIP.88LuTw7rEU2JDXWrsIxu_wHaE8&pid=Api&P=0&h=180", price: 23000000, stock: 4 },
];
