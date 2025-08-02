//gom vao 1 mang voi cac gtri du thua con lai
//ko biet trc so luong doi so

const total = (first, second,...rest) => {
  //arguments dung de goi tat ca cac doi so co trong ham
  console.log(arguments);
  console.log(first);
  //in ra phan tu dau tien, rest se gom cac ptu con lai tao thanh 1 mang moi nua
}
total(1, 2, 3, 4, 5, 6, 7, 8);
