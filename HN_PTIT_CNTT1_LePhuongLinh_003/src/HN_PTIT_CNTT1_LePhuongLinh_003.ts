class Audience {
    readonly audienceId : number;
    name: string;
    email:string;
    phone:string;
    
    constructor(audienceId:number, name:string, email:string, phone:string){
        this.audienceId = audienceId;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails():string{
        return `ID: ${this.audienceId} | Khach hang: ${this.name} | Email: ${this.email} | SDT: ${this.phone}`;
    }
}

abstract class Movie {
    readonly movieId:number;
    title:string;
    genre : string;
    ticketPrice : number;
    isShowing : boolean;

    constructor(movieId:number, title:string, genre:string, ticketPrice:number, isShowing:boolean){
        this.movieId = movieId;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }
    startShow() : void {
        this.isShowing = true;
    }
    stopShow() : void {
        this.isShowing = false;
    }
    abstract calculateTicketCost(quantity:number): number;  //tong gia ve
    abstract getSpecialOffers(): string;  //uu dai
    abstract getMovieInfo():string;
}
class ActionMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice;
    }
    getSpecialOffers(): string {
        return `Mien phi bap rang`;
    }
    getMovieInfo(): string {
        return `Phim hanh dong gay can, ki xao hoanh trang`;
    }
}
class ComedyMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice - this.ticketPrice*10;
    }
    getSpecialOffers(): string {
        return `Giam 10% cho nhom 4 nguoi`;
    }
    getMovieInfo(): string {
        return `Phim hai nhe nhang, vui nhon`;
    }
}
class AnimationMovie extends Movie {
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice;
    }
    getSpecialOffers(): string {
        return `Giam gia cho tre em duoi 12 tuoi`;
    }
    getMovieInfo(): string {
        return `Phim hoat hinh voi hinh anh song dong`;
    }
}

class TicketBooking {
    readonly bookingId: number;
    audience:Audience;
    movie:Movie;
    quantity:number;
    totalPrice:number;

    constructor(bookingId:number, audience:Audience, movie:Movie, quantity:number, totalPrice:number){
        this.bookingId = bookingId;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetails(): string{
        return `Ma ve: ${this.bookingId} | Khach hang: ${this.audience}\nPhim: ${this.movie}\nSo luong: ${this.quantity}\nTong tien: ${this.totalPrice}`
    }
}

class Cinema {
    movies : Movie[];
    audiences : Audience[];
    bookings: TicketBooking[];
    constructor(movies:Movie[], audiences:Audience[], bookings:TicketBooking[]){
        this.movies = movies;
        this.audiences = audiences;
        this.bookings = bookings;
    }
    addMovie(newMovie:Movie): void {
        this.movies.push(newMovie);
    }
    addAudience(newAudience:Audience): void {
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
    cancelMovie(cancelMovieId: number): void {
        const indexToCancel = this.movies.findIndex((movie: Movie) => movie.movieId === cancelMovieId);
        if (indexToCancel !== -1) {
            const cancelMovie = this.movies[indexToCancel];
            for (const item of cancelMovie.genre) {

            }
            this.movies.splice(indexToCancel, 1);
        }
    }
    listShowingMovies(): void {

    }
    // listAudienceBookings(audienceId: number): void {
    //     const targetAudienceBooking = this.bookings.filter((audience:Audience) => audienceId === audienceId);
    //     if (targetAudienceBooking.length > 0) {
    //         targetAudienceBooking.forEach(movie => {
    //             console.log(movie);
    //         });
    //     } else {
    //         alert("Khach hang chua dat ve !!");
    //     }
    // }
}

function runMovieManagement() {
    const manager = new Cinema([], [], []);
    let choice : number;

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
            if (isNaN(choice) || choice < 1 || choice > 11){
                alert("Lua chon khong hop le");
                continue;
            }
        switch(choice) {
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