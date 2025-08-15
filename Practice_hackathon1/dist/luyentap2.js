"use strict";
class Passenger {
    constructor(passengerId, name, passportNumber) {
        if (!name || !passportNumber) {
            throw new Error("Ten va so ho chieu khong dc de trong");
        }
        this.passengerId = passengerId;
        this.name = name;
        this.passportNumber = passportNumber;
    }
    getDetails() {
        return `Hang khach: ${this.name} | ID: ${this.passengerId} - Ho chieu: ${this.passportNumber}`;
    }
}
class Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity) {
        if (!flightNumber || !origin || !destination || capacity <= 0) {
            throw new Error("Thong tin khong hop le");
        }
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.departureTime = departureTime;
        this.destination = destination;
        this.capacity = capacity;
        this.bookedSeats = 0;
    }
    bookSeat() {
        if (this.isFull()) {
            throw new Error("Chuyen bay da day");
        }
        this.bookedSeats += 1;
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
}
class DomesticFlight extends Flight {
    calculateBaggageFee(weight) {
        if (weight < 0) {
            throw new Error("Can hanh li khong hop le");
        }
        return weight * 50000;
    }
}
class InternationalFLight extends Flight {
    calculateBaggageFee(weight) {
        if (weight < 0) {
            throw new Error("Can hanh li khong hop le");
        }
        return weight * 10 * 23000;
    }
}
class Booking {
    constructor(bookingId, passenger, flight, numberOfTickets, baggageWeight) {
        if (numberOfTickets <= 0) {
            throw new Error("So luong ve khong hop le");
        }
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = this.calculateTotalCost(baggageWeight);
    }
    calculateTotalCost(baggageWeight) {
        const ticketPrice = this.flight instanceof DomesticFlight ? 10000000 : 5000000; //gia su gia ve
        return ticketPrice * this.numberOfTickets + this.flight.calculateBaggageFee(baggageWeight);
    }
    getBookingDetails() {
        const flightType = this.flight instanceof DomesticFlight ? "Noi dia" : "Quoc te";
        return `Ma dat ve: ${this.bookingId} - ${this.passenger.getDetails()}
        \nChuyen bay: ${this.flight.flightNumber} - ${flightType}
        \nSo ve: ${this.numberOfTickets}
        \nTong chi phi: ${this.totalCost.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
    }
}
class GenericRespository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
    find(predicate) {
        return this.items.find(predicate);
    }
    findIndex(predicate) {
        return this.items.findIndex(predicate);
    }
    remove(predicate) {
        this.items = this.items.filter(item => !predicate(item));
    }
}
class AirlineManager {
    constructor() {
        this.passengerIdCounter = 0;
        this.bookingIdCounter = 0;
        this.flightRepo = new GenericRespository();
        this.passengerRepo = new GenericRespository();
        this.bookingRepo = new GenericRespository();
    }
    addFlight(flight) {
        const existingFlight = this.flightRepo.find(f => f.flightNumber === flight.flightNumber);
        if (existingFlight) {
            throw new Error("So hieu chuyen bay da ton tai");
        }
        this.flightRepo.add(flight);
        console.log("Da them chuyen bay thanh cong");
    }
    addPassenger(name, passportNumber) {
        const passenger = new Passenger(this.passengerIdCounter++, name, passportNumber);
        this.passengerRepo.add(passenger);
        console.log("Da them hang khach thanh cong");
    }
    createBooking(passengerId, flightNumber, numberOfTickets, baggageWeight) {
        const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (!passenger || !flight) {
            console.error("Hanh khach hoac chuyen bay khong ton tai");
            return null;
        }
        if (flight.bookedSeats + numberOfTickets > flight.capacity) {
            console.error("Khong du cho ngoi cho so ve yeu cau");
            return null;
        }
        for (let i = 0; i < numberOfTickets; i++) {
            flight.bookSeat();
        }
        const booking = new Booking(this.bookingIdCounter++, passenger, flight, numberOfTickets, baggageWeight);
        this.bookingRepo.add(booking);
        console.log(`Da tao booking: ${booking.getBookingDetails()}`);
        return booking;
    }
    cancelBooking(bookingId) {
        const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
        if (!booking) {
            console.error("Khong tim thay booking tuong ung");
            return;
        }
        const flight = booking.flight;
        flight.bookedSeats -= booking.numberOfTickets;
        this.bookingRepo.remove(b => b.bookingId === bookingId);
        console.log("Huy booking thanh cong");
    }
    listAvailableFlights(origin, destination) {
        const availableFlights = this.flightRepo.getAll().filter(f => !f.isFull() && f.origin.toLowerCase() === origin.toLowerCase() && f.destination.toLowerCase() === destination.toLowerCase());
        if (availableFlights.length === 0) {
            console.log("Không có chuyến bay nào phù hợp!");
            return;
        }
        availableFlights.forEach(f => {
            const flightType = f instanceof DomesticFlight ? "Nội địa" : "Quốc tế";
            console.log(`Chuyến bay: ${f.flightNumber} - ${flightType} | ${f.origin} -> ${f.destination} | Giờ khởi hành: ${f.departureTime.toLocaleString()} | Ghế trống: ${f.capacity - f.bookedSeats}`);
        });
    }
    listBookingsByPassenger(passengerId) {
        const bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
        if (bookings.length === 0) {
            console.log("Hành khách chưa có booking nào!");
            return;
        }
        bookings.forEach(b => console.log(b.getBookingDetails()));
    }
    calculateTotalRevenue() {
        const total = this.bookingRepo.getAll().reduce((sum, booking) => sum + booking.totalCost, 0);
        console.log(`Tổng doanh thu: ${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`);
        return total;
    }
    countFlightsByType() {
        const counts = this.flightRepo.getAll().reduce((acc, flight) => {
            const type = flight instanceof DomesticFlight ? "Nội địa" : "Quốc tế";
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        for (const [type, count] of Object.entries(counts)) {
            console.log(`Số chuyến bay ${type}: ${count}`);
        }
    }
    updateFlightTime(flightNumber, newDepartureTime) {
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (!flight) {
            console.error("Không tìm thấy chuyến bay!");
            return;
        }
        flight.departureTime = newDepartureTime;
        console.log(`Đã cập nhật giờ bay cho ${flightNumber} thành ${newDepartureTime.toLocaleString()}`);
    }
    getFlightPassengerList(flightNumber) {
        const bookings = this.bookingRepo.getAll().filter(b => b.flight.flightNumber === flightNumber);
        if (bookings.length === 0) {
            console.log("Chuyến bay chưa có hành khách!");
            return;
        }
        const passengers = bookings.map(b => b.passenger.getDetails());
        console.log(`Danh sách hành khách trên chuyến bay ${flightNumber}:\n${passengers.join('\n')}`);
    }
}
function runAirlineManager() {
    const manager = new AirlineManager();
    let choice;
    do {
        choice = Number(prompt(`
            ===== Menu Quản lý Hãng Hàng không =====
            1. Thêm hành khách mới
            2. Thêm chuyến bay mới
            3. Tạo giao dịch đặt vé
            4. Hủy giao dịch đặt vé
            5. Hiển thị danh sách chuyến bay còn trống
            6. Hiển thị danh sách vé của một hành khách
            7. Tính tổng doanh thu
            8. Đếm số lượng chuyến bay theo loại
            9. Cập nhật giờ bay
            10. Xem danh sách hành khách của một chuyến bay
            11. Thoát
            Nhập lựa chọn cua ban:
            `));
        if (isNaN(choice) || choice < 1 || choice > 11) {
            alert("Lựa chọn không hợp lệ!");
            continue;
        }
        switch (choice) {
            case 1: // Thêm hành khách
                const name = prompt("Nhập tên hành khách: ");
                const passportNumber = prompt("Nhập số hộ chiếu: ");
                if (name && passportNumber) {
                    manager.addPassenger(name, passportNumber);
                }
                else {
                    console.error("Thông tin hành khách không hợp lệ!");
                }
                break;
            case 2: // Thêm chuyến bay
                const flightType = Number(prompt("Chọn loại chuyến bay: 1. Nội địa 2. Quốc tế"));
                const flightNumber = prompt("Nhập số hiệu chuyến bay: ");
                const origin = prompt("Nhập nơi đi: ");
                const destination = prompt("Nhập nơi đến: ");
                const departureTimeStr = prompt("Nhập thời gian khởi hành (YYYY-MM-DD HH:mm): ");
                const capacity = Number(prompt("Nhập sức chứa: "));
                if (flightNumber && origin && destination && departureTimeStr && !isNaN(capacity) && capacity > 0) {
                    const departureTime = new Date(departureTimeStr);
                    if (isNaN(departureTime.getTime())) {
                        console.error("Thời gian khởi hành không hợp lệ!");
                        break;
                    }
                    const flight = flightType === 1
                        ? new DomesticFlight(flightNumber, origin, destination, departureTime, capacity)
                        : new InternationalFLight(flightNumber, origin, destination, departureTime, capacity);
                    manager.addFlight(flight);
                }
                else {
                    console.error("Thông tin chuyến bay không hợp lệ!");
                }
                break;
            case 3: // Tạo booking
                const passengerId = Number(prompt("Nhập ID hành khách: "));
                const flightNum = prompt("Nhập số hiệu chuyến bay: ");
                const numberOfTickets = Number(prompt("Nhập số lượng vé: "));
                const baggageWeight = Number(prompt("Nhập cân nặng hành lý (kg): "));
                if (!isNaN(passengerId) && flightNum && !isNaN(numberOfTickets) && !isNaN(baggageWeight)) {
                    manager.createBooking(passengerId, flightNum, numberOfTickets, baggageWeight);
                }
                else {
                    console.error("Thông tin đặt vé không hợp lệ!");
                }
                break;
            case 4: // Hủy booking
                const bookingId = Number(prompt("Nhập ID booking: "));
                if (!isNaN(bookingId)) {
                    manager.cancelBooking(bookingId);
                }
                else {
                    console.error("ID booking không hợp lệ!");
                }
                break;
            case 5: // Hiển thị chuyến bay còn trống
                const originFilter = prompt("Nhập nơi đi: ");
                const destinationFilter = prompt("Nhập nơi đến: ");
                if (originFilter && destinationFilter) {
                    manager.listAvailableFlights(originFilter, destinationFilter);
                }
                else {
                    console.error("Thông tin điểm đi/đến không hợp lệ!");
                }
                break;
            case 6: // Hiển thị booking của hành khách
                const pId = Number(prompt("Nhập ID hành khách: "));
                if (!isNaN(pId)) {
                    manager.listBookingsByPassenger(pId);
                }
                else {
                    console.error("ID hành khách không hợp lệ!");
                }
                break;
            case 7: // Tính tổng doanh thu
                manager.calculateTotalRevenue();
                break;
            case 8: // Đếm số chuyến bay theo loại
                manager.countFlightsByType();
                break;
            case 9: // Cập nhật giờ bay
                const fNum = prompt("Nhập số hiệu chuyến bay: ");
                const newTimeStr = prompt("Nhập thời gian mới (YYYY-MM-DD HH:mm): ");
                if (fNum && newTimeStr) {
                    const newTime = new Date(newTimeStr);
                    if (!isNaN(newTime.getTime())) {
                        manager.updateFlightTime(fNum, newTime);
                    }
                    else {
                        console.error("Thời gian không hợp lệ!");
                    }
                }
                else {
                    console.error("Thông tin không hợp lệ!");
                }
                break;
            case 10: // Xem danh sách hành khách của chuyến bay
                const flightNumPassengers = prompt("Nhập số hiệu chuyến bay: ");
                if (flightNumPassengers) {
                    manager.getFlightPassengerList(flightNumPassengers);
                }
                else {
                    console.error("Số hiệu chuyến bay không hợp lệ!");
                }
                break;
            case 11: // Thoát
                alert("Tạm biệt!");
                break;
        }
    } while (choice !== 11);
}
runAirlineManager();
