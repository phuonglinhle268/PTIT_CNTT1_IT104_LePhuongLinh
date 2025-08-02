//doi voi arrow-function -> dung const


//khai bao ham thong thuong
function getName(name){
    return `Xin chao ${name}`;
}

//khai bao ham arrow
const getName = (name) => {  //khi nhieu logic thi cho vao 1 block
  return `Xin chao ${name}`;
};

const sum = (a, b) => a+b;
//thay vi {return a+b}
//logic don gian -> bo ngoac, return