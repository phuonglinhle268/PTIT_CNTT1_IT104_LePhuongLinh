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
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
        this.nextReservationId = 1;
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
    generateBill(tableId) {
        const tableOrders = this.orders.filter(o => o.tableId === tableId);
        if (tableOrders.length === 0) {
            console.log(`${tableId} chua co don`);
            return;
        }
        const total = tableOrders.reduce((sum, o) => sum + o.getTotal(), 0);
        console.log(`Tong tien cua ban ${tableId}: ${total} VND`);
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
