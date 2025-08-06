// Khai báo kiểu dữ liệu enum
enum SystemMode {
  AUTO = "AUTO", // Tự động
  MANUAL = "MANUAL", // Thủ công
}

type Direction = "left" | "right" | "forward" | "backward";

const logMovement = (direction: Direction): string => {
  return `🔄 Moving ${direction}`;
};

const setMode = (systemMode: SystemMode): string => {
  return `⚙️ System set to ${systemMode} mode`;
};

const processInput = (input: any): any => {
  if (typeof input === "string") {
    console.log(`Input length ${input.length}`);
  } else {
    console.log("Input: ", input);
  }
};

const validateInput = (input: unknown) => {
  if (typeof input === "number") {
    console.log(`📥Received input (any): ${input}`);
  } else {
    console.log("❌ Invalid input type");
  }
};

const crash = (message: string): never => {
  throw new Error(message);
};

// Gọi hàm
logMovement("left");
logMovement("right");

setMode(SystemMode.AUTO);

processInput(10);

try {
  crash("💥 SYSTEM CRASHED: Overheat detected!");
} catch (error) {
  console.log(error);
}