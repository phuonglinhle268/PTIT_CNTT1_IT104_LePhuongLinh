type Callback = (result: number) => void;

function calculate(a: number, b: number, callback: Callback) {
  const sum = a + b;
  callback(sum);
}

calculate(1, 2, (result) => {
  console.log(result);
});
