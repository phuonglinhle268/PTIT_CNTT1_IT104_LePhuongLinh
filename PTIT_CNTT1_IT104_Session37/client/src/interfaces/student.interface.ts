export interface Student {
    id ?: number;
    name: string;
    age: number;
    grade: string;
}

export interface StudentState {
    status: "idle" | "pending" | "success" | "failed";
    students: Student[];
    error: string | null;
    selectedStudent: Student | null;
}