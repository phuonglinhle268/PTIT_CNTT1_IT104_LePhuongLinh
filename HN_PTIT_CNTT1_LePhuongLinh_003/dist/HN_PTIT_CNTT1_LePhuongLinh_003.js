"use strict";
class Audience {
    constructor(id, name, email, phone) {
        if (!name || !email || !phone) {
            throw new Error("Ten, email, so dien thoai khong duoc de trong");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.id} | Khach hang: ${this.name} | Email: ${this.email} | SDT: ${this.phone}`;
    }
}
class Movie {
    constructor(id, title, genre, ticketPrice) {
        if (!title || !genre || ticketPrice <= 0) {
            throw new Error("Thong tin phim khong hop le");
        }
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = false;
    }
    startShow() {
        this.isShowing = true;
        console.log(`Bat dau chieu phim ${this.title}`);
    }
    stopShow() {
        this.isShowing = false;
        console.log("Ngung chieu phim");
    }
}
class ActionMovie extends Movie {
    constructor(id, title, ticketPrice) {
        super(id, title, "Action Movie", ticketPrice);
    }
    calculateTicketCost(quantity) {
        if (quantity <= 0) {
            throw new Error("So ve khong hop le");
        }
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["Mien phi bap rang", "Tang poster"];
    }
    getMovieInfo() {
        return `Phim hanh dong gay can, ki xao hoanh trang`;
    }
}
class ComedyMovie extends Movie {
    constructor(id, title, ticketPrice) {
        super(id, title, "Comedy Movie", ticketPrice);
    }
    calculateTicketCost(quantity) {
        if (quantity <= 0) {
            throw new Error("So ve khong hop le");
        }
        const discount = quantity > 4 ? 0.9 : 1;
        return this.ticketPrice * quantity * discount;
    }
    getSpecialOffers() {
        return ["Giam 10% cho nhom 4 nguoi"];
    }
    getMovieInfo() {
        return `Phim hai nhe nhang, vui nhon`;
    }
}
class AnimationMovie extends Movie {
    constructor(id, title, ticketPrice) {
        super(id, title, "Animation Movie", ticketPrice);
    }
    calculateTicketCost(quantity) {
        if (quantity <= 0) {
            throw new Error("So ve khong hop le");
        }
        //vi du giam 30% cho tre em
        const discountedTickets = Math.floor(quantity / 2);
        return (discountedTickets * this.ticketPrice * 0.7) + ((quantity - discountedTickets) * this.ticketPrice);
    }
    getSpecialOffers() {
        return ["Giam gia cho tre em duoi 12 tuoi"];
    }
    getMovieInfo() {
        return `Phim hoat hinh voi hinh anh song dong`;
    }
}
class TicketBooking {
    constructor(bookingId, audience, movie, quantity) {
        this.bookingId = bookingId;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetails() {
        return `Ma ve: ${this.bookingId} | Khach hang: ${this.audience}
        \nPhim: ${this.movie}
        \nSo luong: ${this.quantity}
        \nTong tien: ${this.totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
    }
}
class Cinema {
    constructor() {
        this.movies = [];
        this.audiences = [];
        this.bookings = [];
        this.movieIdCounter = 0;
        this.audienceIdCounter = 0;
        this.bookingIdCounter = 0;
    }
    addMovie(movie) {
        const existingMovie = this.findMovieById(this.movies, movie.id);
        if (existingMovie) {
            throw new Error("Phim da ton tai!");
        }
        this.movies.push(movie);
        console.log("Them phim thanh cong");
    }
    addAudience(name, email, phone) {
        const audience = new Audience(this.audienceIdCounter++, name, email, phone);
        this.audiences.push(audience);
        console.log("Them khach hang thanh cong");
        return audience;
    }
    bookTickets(audienceId, movieId, quantity) {
        const audience = this.findAudienceById(this.audiences, audienceId);
        const movie = this.findMovieById(this.movies, movieId);
        if (!audience || !movie) {
            console.error("Khan gian hoac phim khong ton tai");
            return null;
        }
        if (!movie.isShowing) {
            console.error("Phim dang khong chieu");
            return null;
        }
        if (quantity <= 0) {
            console.error("So ve khong hop le");
            return null;
        }
        const booking = new TicketBooking(this.bookingIdCounter++, audience, movie, quantity);
        this.bookings.push(booking);
        console.log(`Ve da dat: ${booking.getDetails()}`);
        return booking;
    }
    cancelMovie(movieId) {
        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            console.error("Phim khong hop le");
            return;
        }
        movie.stopShow();
        this.bookings = this.bookings.filter(b => b.movie.id !== movieId);
        console.log(`Da ngung chieu phim ${movieId}`);
    }
    listShowingMovies() {
        const showingMovies = this.movies.filter(m => m.isShowing);
        if (showingMovies.length === 0) {
            console.log("Khong co phim dang chieu");
            return;
        }
        showingMovies.forEach(m => console.log(`Phim: ${m.title} (${m.genre}) - Gia ve: ${m.ticketPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`));
    }
    listAudienceBookings(audienceId) {
        const bookings = this.bookings.filter(b => b.audience.id === audienceId);
        if (bookings.length === 0) {
            console.log("Khan gia chua dat ve");
            return;
        }
        bookings.forEach(b => console.log(b.getDetails()));
    }
    calculateTotalRevenue() {
        const total = this.bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
        console.log(`Tong doanh thu: ${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`);
        return total;
    }
    getMovieGenreCount() {
        const genreCounts = this.movies.reduce((acc, movie) => {
            acc[movie.genre] = (acc[movie.genre] || 0) + 1;
            return acc;
        }, {});
        for (const [genre, count] of Object.entries(genreCounts)) {
            console.log(`The loai ${genre} co ${count} phim`);
        }
    }
    getMovieSpecialOffers(movieId) {
        const movie = this.findMovieById(this.movies, movieId);
        if (!movie) {
            console.error("Phim khong hop le");
            return;
        }
        const offers = movie.getSpecialOffers();
        console.log(`Phim ${movie.title} co uu dai: ${offers.join(", ")}`);
    }
    findMovieById(collection, id) {
        return collection.find(m => m.id === id);
    }
    findAudienceById(collection, id) {
        return collection.find(a => a.id === id);
    }
    findTicketBookingById(collection, id) {
        return collection.find(b => b.bookingId === id);
    }
}
function runMovieManagement() {
    const cinema = new Cinema();
    let choice;
    do {
        choice = Number(prompt(`
            ----------MOVIE BOOKING MANAGEMENT----------
            1. Them khan gia moi
            2. Them phim moi
            3. Dat ve
            4. Ngung chieu phim
            5. Hien thi danh sach phim dang chieu
            6. Hien thi cac ve da dat
            7. Tong doanh thu
            8. So luong tung the loai phim
            9. Hien thi thong tin bang ma dinh danh
            10. Cac uu dai cua phim
            11. Thoat
            Nhap lua chon cua ban: 
            `));
        if (isNaN(choice) || choice < 1 || choice > 11) {
            alert("Lua chon khong hop le");
            continue;
        }
        switch (choice) {
            case 1:
                const name = prompt("Nhap ten khach hang: ");
                const email = prompt("Nhap email: ");
                const phone = prompt("Nhap so dien thoai: ");
                if (name && email && phone) {
                    cinema.addAudience(name, email, phone);
                }
                else {
                    console.error("Thong tin khong hop le");
                }
                break;
            case 2:
                const movieType = Number(prompt("Chọn loại phim: 1.Action Movie 2.Comedy Movie 3.Animation Movie"));
                const title = prompt("Nhap ten phim: ");
                const ticketPrice = Number(prompt("Nhap gia ve: "));
                if (title && !isNaN(ticketPrice) && ticketPrice > 0) {
                    let movie;
                    switch (movieType) {
                        case 1:
                            movie = new ActionMovie(cinema['movieIdCounter']++, title, ticketPrice);
                            break;
                        case 2:
                            movie = new ComedyMovie(cinema['movieIdCounter']++, title, ticketPrice);
                            break;
                        case 3:
                            movie = new AnimationMovie(cinema['movieIdCounter']++, title, ticketPrice);
                            break;
                        default:
                            console.error("The loai khong hop le");
                            continue;
                    }
                    cinema.addMovie(movie);
                    movie.startShow();
                }
                else {
                    console.error("Thong tin khong hop le");
                }
                break;
            case 3:
                const bookForAud = Number(prompt("Nhap ID khan gia: "));
                const movieId = Number(prompt("Nhap ID phim: "));
                const quantity = Number(prompt("Nhap so ve: "));
                if (!isNaN(bookForAud) && !isNaN(movieId) && !isNaN(quantity)) {
                    cinema.bookTickets(bookForAud, movieId, quantity);
                }
                else {
                    console.error("Thong tin khong hop le");
                }
                break;
            case 4:
                const stopMovie = Number(prompt("Nhap ID cua phim ngung chieu: "));
                if (!isNaN(stopMovie)) {
                    cinema.cancelMovie(stopMovie);
                }
                else {
                    console.error("Thong tin khong hop le");
                }
                break;
            case 5:
                cinema.listShowingMovies();
                break;
            case 6:
                const audBook = Number(prompt("Nhap ID cua khan gia: "));
                if (!isNaN(audBook)) {
                    cinema.listAudienceBookings(audBook);
                }
                else {
                    console.error("ID khán giả không hợp lệ!");
                }
                break;
            case 7:
                cinema.calculateTotalRevenue();
                break;
            case 8:
                cinema.getMovieGenreCount();
                break;
            case 9:
                break;
            case 10:
                const uuDai = Number(prompt("Nhap ID phim: "));
                if (!isNaN(uuDai)) {
                    cinema.getMovieSpecialOffers(uuDai);
                }
                else {
                    console.log("Thong tin khong hop le");
                }
                break;
            case 11:
                alert("Thoat chuong trinh!");
                break;
        }
    } while (choice != 11);
}
runMovieManagement();
