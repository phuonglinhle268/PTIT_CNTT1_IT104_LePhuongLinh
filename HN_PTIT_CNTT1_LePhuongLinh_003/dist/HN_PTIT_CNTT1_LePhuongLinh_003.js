"use strict";
class Audience {
    constructor(audienceId, name, email, phone) {
        this.audienceId = audienceId;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.audienceId} | Khach hang: ${this.name} | Email: ${this.email} | SDT: ${this.phone}`;
    }
}
class Movie {
    constructor(movieId, title, genre, ticketPrice, isShowing) {
        this.movieId = movieId;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
class ActionMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice;
    }
    getSpecialOffers() {
        return `Mien phi bap rang`;
    }
    getMovieInfo() {
        return `Phim hanh dong gay can, ki xao hoanh trang`;
    }
}
class ComedyMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice - this.ticketPrice * 10;
    }
    getSpecialOffers() {
        return `Giam 10% cho nhom 4 nguoi`;
    }
    getMovieInfo() {
        return `Phim hai nhe nhang, vui nhon`;
    }
}
class AnimationMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice;
    }
    getSpecialOffers() {
        return `Giam gia cho tre em duoi 12 tuoi`;
    }
    getMovieInfo() {
        return `Phim hoat hinh voi hinh anh song dong`;
    }
}
class TicketBooking {
    constructor(bookingId, audience, movie, quantity, totalPrice) {
        this.bookingId = bookingId;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetails() {
        return `Ma ve: ${this.bookingId} | Khach hang: ${this.audience}\nPhim: ${this.movie}\nSo luong: ${this.quantity}\nTong tien: ${this.totalPrice}`;
    }
}
class Cinema {
    constructor(movies, audiences, bookings) {
        this.movies = movies;
        this.audiences = audiences;
        this.bookings = bookings;
    }
    addMovie(newMovie) {
        this.movies.push(newMovie);
    }
    addAudience(newAudience) {
        this.audiences.push(newAudience);
    }
    // bookTickets(audienceId:number, movieId:number, quantity:number): TicketBooking | null {
    //     const passenger = this.audiences.find(p => (p as Audience).audienceId === audienceId);
    //     const movie = this.movies.find(m => (m as Movie).movieId === movieId);
    //     if(!passenger || !movie){
    //         console.error("Khach hang hoac phim khong ton tai");
    //         return null;
    //     }
    //     const booking = new Cinema(this.bookings, audiences, movie,quantity);
    //     this.bookings.add(booking);
    //     console.log(`Da tao booking: ${booking.getBookingDetails()}`);
    //     return booking;
    // }
    cancelMovie(cancelMovieId) {
        const indexToCancel = this.movies.findIndex((movie) => movie.movieId === cancelMovieId);
        if (indexToCancel !== -1) {
            const cancelMovie = this.movies[indexToCancel];
            for (const item of cancelMovie.genre) {
            }
            this.movies.splice(indexToCancel, 1);
        }
    }
    listShowingMovies() {
    }
}
function runMovieManagement() {
    const manager = new Cinema([], [], []);
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
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                alert("Thoat chuong trinh!");
                break;
        }
    } while (choice != 11);
}
runMovieManagement();
