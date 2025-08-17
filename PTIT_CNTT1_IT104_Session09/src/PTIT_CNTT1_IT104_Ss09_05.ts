class DataStore<T> {
    private data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }
    getAll(): T[] {
        return [...this.data];
    }
    remove(index:number): void {
        if (index >= 0 && index < this.data.length){
            this.data.splice(index, 1);
        }
    }
}
//const num = new DataStore<number>();