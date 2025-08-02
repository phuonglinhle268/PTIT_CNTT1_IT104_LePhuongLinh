//cho phep gan gtri mac dinh truc tiep khi ko gtri nao, tranh undefined

const getFullName = (firstName = "Nguyen Van", lastName = "A") => {
    return firstName + " " + lastName;
}
console.log(getFullName("Le Van", "Nam"));
//hoat dong khi ko co doi so truyen vao
//neu co truyen vao o console se ghi de vao gtri cu va in ra gtri moi

const pagination = (pageSize, pageNumber, currentPage) => {
    console.log("PageSize: ", pageSize);
    console.log("PageNumber: ", pageNumber);
    console.log("CurrentPage: ", currentPage);
}
console.log("Cac thong so khi phan trang:", pagination());  //in ra undefined ca 3 