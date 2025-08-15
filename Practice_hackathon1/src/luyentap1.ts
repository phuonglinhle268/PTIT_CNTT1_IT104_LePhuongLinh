class Customer {
  id: number;
  name: string;
  email: string;
  shippingAddress: string;
  constructor(
    id: number,
    name: string,
    email: string,
    shippingAddress: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }
  getDetail(): string {
    return `Khách hàng ${this.name} - mã: ${this.id} - email: ${this.email} - Địa chỉ: ${this.shippingAddress}`;
  }
}

abstract class Product {
  id: number; // Số nguyên
  name: string;
  price: number; // Số thực
  stock: number;
  constructor(id: number, name: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  sell(quantity: number): void {
    this.stock -= quantity;
  }

  restock(quantity: number): void {
    this.stock += quantity;
  }

  // Sử dụng abstract vì sẽ có nhiều loại sản phẩm
  abstract getProductInfo(): string; // Trả về chuỗi là thông tin đặc thù của sản phẩm

  abstract getShippingCost(distance: number): number; // trả về khoảng cách

  abstract getCategory(): string; // Trả về chuỗi là danh mục sản phẩm
}

class ElectronicProduct extends Product {
  warrantyPeriod: number;
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    warrantyPeriod: number
  ) {
    super(id, name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }

  getShippingCost(distance: number): number {
    return 50000;
  }
  getProductInfo(): string {
    return `Sản phẩm: ${this.name} - Mã: ${this.id} - Giá: ${this.price} - Số lượng còn lại: ${this.stock}\n Thời gian bảo hành: ${this.warrantyPeriod} năm`;
  }
  getCategory(): string {
    return `Hàng điện tử`;
  }
}

class ClothingProduct extends Product {
  size: string;
  color: string;
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(id, name, price, stock);
    this.size = size;
    this.color = color;
  }
  getShippingCost(distance: number): number {
    return 25000;
  }
  getProductInfo(): string {
    return `Sản phẩm ${this.name} - Mã: ${this.id} - Size: ${this.size
      } - Màu: ${this.color} - Giá: ${this.price
      } - So luong: ${this.stock}\n Phí vận chuyển: ${this.getShippingCost(1).toLocaleString()}VND`;
  }
  getCategory(): string {
    return `Hàng thời trang`;
  }
}

// Lớp Order

class Order {
  orderId: number;
  customer: Customer;
  products: { product: Product; quantity: number }[];
  totalAmount: number;
  constructor(
    orderId: number,
    customer: Customer,
    products: { product: Product; quantity: number }[],
    totalAmount: number
  ) {
    this.orderId = orderId;
    this.customer = customer;
    this.products = products; // Mảng các sản phẩm có trong đơn hàng
    this.totalAmount = totalAmount;
  }

  // Trả về thông tin chi tiết đơn hàng gồm các dang sách sản phẩm
  getDetails(): string {
    return `Mã đơn hàng: ${this.orderId} - Khách hàng: ${this.customer}
    Các sản phẩm đã mua: ${this.products}
    Tổng giá trị đơn hàng: ${this.totalAmount}`; // = tổng giá trị sản phẩm * số lượng + phí vận chuyển
  }
}

class Store {
  products: Product[];
  customers: Customer[];
  orders: Order[];
  constructor(products: Product[], customers: Customer[], orders: Order[]) {
    this.products = products;
    this.orders = orders;
    this.customers = customers;
  }
  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
  }
  addCustomer(newCustomer: Customer): void {
    this.customers.push(newCustomer);
  }
  // Tạo đơn hàng mới với mã khách hàng, id sản phẩm cần mua và số lượng muốn mua
  createOrder(customerId: number, productQuantities: { productId: number; quantity: number }[]): Order | undefined {
    const newOrderId = this.orders.length;
    const orderCustomer = this.customers.find((customer: Customer) => customer.id === customerId);
    if (orderCustomer) {
      const orderProduct: { product: Product; quantity: number }[] = [];
      let totalOrder = 0;
      for (const item of productQuantities) {
        const targetIndex = this.products.findIndex((element: Product) => element.id === item.productId);
        if (targetIndex !== -1 && this.products[targetIndex].stock >= item.quantity) {
          const targetProduct = this.products[targetIndex]; /// Tìm ra sản phẩm khách hàng cần
          orderProduct.push({ product: targetProduct, quantity: item.quantity });   // đưa sản phẩm cùng số lượng cần vào mảng danh sách
          totalOrder += targetProduct.price * item.quantity;   // Tính toán tổng bill
          this.products[targetIndex].stock -= item.quantity;  // trừ đi số lượng hàng còn tồn trong kho 1 lượng = số lượng order
        }
      }
      const newOrder = new Order(newOrderId, orderCustomer, orderProduct, totalOrder);
      return newOrder;
    }
  }

  cancelOrder(orderCanceId: number): void {
    // Tìm ra sản phẩm cần hủy đơn trong danh sách order
    const indexToCancel = this.orders.findIndex((order: Order) => order.orderId === orderCanceId);
    if (indexToCancel !== -1) {
      const orderCancel = this.orders[indexToCancel];
      // Hoàn trả đơn hàng (số lượng) -- xóa đơn hàng đó trong danh sách
      for (const item of orderCancel.products) {
        item.product.restock(item.quantity);  // Hoàn trả số lượng về kho
      }
      this.orders.splice(indexToCancel, 1);
      
    }
  }
  //  Hiển thị danh sách các sản phẩm còn hàng
  listAvailableProduct(): void {
    const availableProducts = this.products.filter((product: Product) => product.stock > 0);
    if (availableProducts.length > 0) {
      for (const product of availableProducts) {
        console.log(product.getProductInfo())
      }
    } else {
      alert(`Không còn hàng trong kho!!`)
    }
  }
  // Hiển thị các đơn hàng của một khách hàng (sử dụng filter).
  listCustomerOrders(customerId: number): void {
    const targetCustomerOrder = this.orders.filter((order: Order) => order.customer.id === customerId);
    if (targetCustomerOrder.length > 0) {
      targetCustomerOrder.forEach(order => {
        console.log(order);
      });
    } else {
      alert("Khách hàng chưa có đơn hàng !!");

    }
  }

  //  Tính tổng doanh thu từ tất cả các đơn hàng (sử dụng reduce).
  calculateTotalRevenue(): number {
    let totalRevenue = 0;
    this.orders.forEach(order => {
      order.products.forEach(item => {
        totalRevenue += (item.product.price * item.quantity) - item.product.getShippingCost(1);
      })
    });
    return totalRevenue;
  }

  // : Đếm số lượng sản phẩm thuộc mỗi danh mục (sử dụng reduce hoặc map).
  countProductsByCategory(): void {
    const electricProduct = this.products.filter((product: Product) => product.getCategory().toLowerCase() === "hàng điện tử");
    const clothingProduct = this.products.filter((product: Product) => product.getCategory().toLowerCase() === "hàng thời trang");
    let numberElectric = electricProduct.reduce((call: number, curr: Product) => {
      return call + curr.stock;
    }, 0);
    console.log("Hàng điện tử: ", numberElectric);
    let clothingElectric = clothingProduct.reduce((call: number, curr: Product) => {
      return call + curr.stock;
    }, 0);
    console.log("Hàng thời trang: ", clothingElectric);
  }
  // : Cập nhật số lượng tồn kho của một sản phẩm (sử dụng findIndex).
  updateProductStock(productId: number, newStock: number): void {
    //  Tìm ra sản phẩm
    const indexUpdate = this.products.findIndex((product: Product) => product.id === productId);
    if (indexUpdate !== -1) {
      this.products[indexUpdate].stock = newStock;
    } else {
      alert("Không tìm thấy sản phẩm cần cập nhật!!")
    }
  }
  // Generic type:  phương thức chung để tìm một đối tượng (Product, Customer) trong một danh sách dựa vào id.
  findEntityById<T extends { id: number }>(collection: T[], idTarget: number): T | undefined {
    const target = collection.find((element: T) => element.id === idTarget);
    if (target) {
      return target;
    }
  }
}


let choice: number;
let cntCustomer = 0;
let cntCloProduct = 0;
let cntElecProduct = 0;
const store = new Store([], [], []);
do {
  choice = Number(prompt(`===== Menu=====
  1. Thêm khách hàng mới. 
  2. Thêm sản phẩm mới (1. Đồ điện tử, 2. Quần áo). 
  3. Tạo đơn hàng mới. 
  4. Hủy đơn hàng. 
  5. Hiển thị danh sách sản phẩm còn hàng trong kho.
  6. Hiển thị danh sách đơn hàng của một khách hàng.
  7. Tính và hiển thị tổng doanh thu của cửa hàng.
  8. Thống kê sản phẩm theo danh mục .
  9.Cập nhật tồn kho cho một sản phẩm.
  10. Tìm kiếm và hiển thị thông tin bằng ID.
  11. Xem thông tin chi tiết (bảo hành/size, màu) của một sản phẩm.
  12. Thoát chương trình.
  `))
  switch (choice) {
    case 1:
      const newName = String(prompt("Nhập tên khách khàng: "));
      const newEmail = String(prompt("Nhập email khách hàng: "));
      const newAddress = String(prompt("Nhập địa chỉ: "));
      const newCustomer = new Customer(store.customers.length, newName, newEmail, newAddress);
      store.addCustomer(newCustomer);
      console.log(store.customers);

      break;
    case 2:
      let getId = store.products.length;
      const category = Number(prompt(`Nhập danh mục sản phẩm: \n1. Đồ điện tử\n2. Quần áo`)) === 1 ? "Đồ điện tử" : "Đồ thời trang";
      const productName = String(prompt("Nhập tên sản phẩm: "));
      const productPrice = Number(prompt("Nhập giá sản phẩm: "));
      const productStock = Number(prompt("Số lượng sản phẩm nhập vào: "));
      if (category.toLowerCase() === "đồ điện tử") {
        const warrantyPeriod = Number(prompt("Thời gian bảo hành (năm): "));
        const newProduct = new ElectronicProduct(getId++, productName, productPrice, productStock, warrantyPeriod);
        store.products.push(newProduct);
      } else if (category.toLowerCase() === "đồ thời trang") {
        const size = String(prompt("Nhập size: "));
        const color = String(prompt("Nhập màu sắc sản phẩm: "));
        const newProduct = new ClothingProduct(getId++, productName, productPrice, productStock, size, color);
        store.products.push(newProduct);
      }
      console.log(store.products);

      break;
    case 3:
      // Tạo đơn hàng mới;
      const idOrderCustomer = Number(prompt("Nhập id khách hàng order: "))
      const targetCustomer = store.customers.find((customer: Customer) => customer.id === idOrderCustomer);
      if (targetCustomer) {
        const targetProductId = Number(prompt("Nhập ID sản phẩm cần order: "))
        const checkExistProduct = store.products.find((product: Product) => product.id === targetProductId);
        if (checkExistProduct) {
          const quantity = Number(prompt("Nhập số lượng order: "));
          if (checkExistProduct.stock >= quantity) {
            const newOrder: Order | undefined = store.createOrder(idOrderCustomer, [{ productId: targetProductId, quantity: quantity }]);
            if (newOrder) {
              store.orders.push(newOrder);
              alert("Đặt hàng thành công!!");
            }
          }
        } else {
          alert("Không thấy sản phẩm cần order.")
        }
      } else {
        alert("Khách hàng chưa tồn tại, vui lòng thêm mới !");
      }
      console.log(store.orders);

      break;
    case 4:
      // Hủy đơn hàng (hoàn trả số lượng sản phẩm về kho). 
      const orderCancel = Number(prompt("Nhập id đơn hàng muốn hủy: "));
      const checkOrder = store.orders.find((order: Order) => order.orderId === orderCancel);
      if (checkOrder) {
        store.cancelOrder(orderCancel);
        console.log(store.orders);

        alert("Hủy đơn hàng thành công.");
      } else {
        alert("Không tìm thấy đơn hàng cần hủy !!")
      }
      break;
    case 5:
      console.log("Danh sách sản phẩm còn hàng: ");
      store.listAvailableProduct();
      break;
    case 6:
      // Hiển thị danh sách đơn hàng của một khách hàng
      const targetCustomerId = Number(prompt("Nhập id khách hàng cần liệt kê order: "));
      store.listCustomerOrders(targetCustomerId);
      break;
    case 7:
      // Tính và hiển thị tổng doanh thu của cửa hàng
      const storeRevenue = store.calculateTotalRevenue();
      console.log(`Tổng doanh thu cửa hàng: ${storeRevenue.toLocaleString()} VND`);
      break;
    case 8:
      // Thống kê sản phẩm theo danh mục
      store.countProductsByCategory();
      break;

    case 9:
      // Cập nhật tồn kho cho một sản phẩm
      const idToUpdate = Number(prompt("Nhập id sản phẩm cần cập nhật số lượng: "));
      const newQuantity = Number(prompt("Nhập số lượng muốn cập nhật: "));
      store.updateProductStock(idToUpdate, newQuantity);
      break;
    case 10:
      // Tìm kiếm và hiển thị thông tin bằng ID
      const searchChoice = Number(prompt("Nhập thông tin muốn tìm: \n1. Sản phẩm\n2. Khách hàng"));
      if (searchChoice === 1) {
        const productId = Number(prompt("Nhập id sản phẩm cần tìm: "));
        const target = store.findEntityById(store.products, productId);
        if (target) {
          console.log("Sản phẩm cần tìm: ", target);
        } else {
          alert("Không tìm thấy sản phẩm.")
        }
      } else if (searchChoice === 2) {
        const customerId = Number(prompt("Nhập id khách hàng cần tìm: "));
        const target = store.findEntityById(store.customers, customerId);
        if (target) {
          console.log("Khách hàng cần tìm: ", target);
        } else {
          alert("Không tìm thấy khách hàng.")
        }
      }

      break;
    case 11:
      const detailId = Number(prompt("Nhập id sản phẩm cần xem: "));
      const productToDetail = store.products.find((product: Product) => product.id === detailId);
      if (productToDetail) {
        console.log("Sản phẩm cần tìm: ", productToDetail.getProductInfo());
      }
      break;
    case 12:
      alert("Tạm biệt !!");
      break;
  }
} while (choice != 12);