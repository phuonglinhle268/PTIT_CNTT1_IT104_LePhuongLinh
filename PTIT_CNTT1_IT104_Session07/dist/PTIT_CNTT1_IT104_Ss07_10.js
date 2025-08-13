"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available = true) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        //reduce: rut gon / gop toan bo mang thanh 1 gtri
        //sum bat dau tu 0
        //this.item tuong trung cho cac mon o menuItem
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];  //luu cac lan dat ban cua khach
        this.orders = [];
        this.nextReservationId = 1;  //dam bao moi lan dat ban chi co 1 ma id ko trung
        this.nextOrderId = 1;
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log(`Ban ${tableId} khong con.`);
            return;
        }
        if (!table.available) {
            console.log("Ban da duoc dat");
            return;
        }
        table.available = false;
        const reservation = new Reservation(this.nextReservationId++, customerName, tableId);
        this.reservations.push(reservation);
        console.log(`Dat ban thanh cong cho khach ${customerName}.`);
    }
    placeOrder(tableId, items) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table || table.available) {
            console.log("Khong the dat mon vi chua co ban");
            return;
        }
        const order = new Order(this.nextOrderId++, tableId, items);
        this.orders.push(order);
        console.log(`Dat thanh cong ${items.length} mon cho ban ${tableId}.`);
    }
    //loc don hang cua ban cu the
    generateBill(tableId) {
        //filter: kay tat ca don hang co tableId trung voi ban can thanh toan
        const tableOrders = this.orders.filter(o => o.tableId === tableId);
        if (tableOrders.length === 0) {
            console.log(`${tableId} chua co don`);
            return;
        }
        //reduce: cong don gtri cac don hang
        const total = tableOrders.reduce((sum, o) => sum + o.getTotal(), 0);
        console.log(`Tong tien cua ban ${tableId}: ${total} VND`);
        //tim DUNG 1 BAN co id === tableId
        //tim thay ban co ton tai (trong) de nhan khach
        const table = this.tables.find(t => t.id === tableId);
        if (table) {
            table.available = true;
        }
        this.orders = this.orders.filter(o => o.tableId !== tableId);
    }
}
const restaurant = new Restaurant();
restaurant.addMenuItem(new MenuItem(1, "Bun cha", 40000));
restaurant.addMenuItem(new MenuItem(2, "Goi cuon", 35000));
restaurant.addMenuItem(new MenuItem(3, "Che", 20000));
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));
restaurant.makeReservation("Nguyen Van A", 1);
restaurant.placeOrder(1, [
    restaurant.menu[0],
    restaurant.menu[2]
]);
restaurant.generateBill(1);
