type Person = {
    name : string;
    age : number
};
type Employee = {
    employeeId : string;
    department : string;
};
type staffMember = Person & Employee;

const printStaffInfo = (staff : staffMember): void => {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}

const staffInfo : staffMember = {
    name: "Nguyen Van A",
    age: 28,
    employeeId: "EMP001",
    department: "Ke toan",
};

printStaffInfo(staffInfo);