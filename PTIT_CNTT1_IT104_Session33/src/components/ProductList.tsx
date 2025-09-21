import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/constants/type';

const products = [
    {
        id: 1,
        name: "Pizza",
        price: 30,
        img: "https://tse1.mm.bing.net/th/id/OIP.jNBBwAsgiValAdOzxG-E-AHaE9?pid=Api&P=0&h=180",
        description: "Banh pizza ngon o 4P's",
        stock: 50 
    },
    {
        id: 2,
        name: "Hamburger",
        price: 15,
        img: "https://tse3.mm.bing.net/th/id/OIP.m0BwC7ELa1sisaHRqbYcqgHaEf?pid=Api&P=0&h=180",
        description: "Banh Hamburger cho tre em",
        stock: 32 
    },
    {
        id: 3,
        name: "Bread",
        price: 20,
        img: "https://tse1.mm.bing.net/th/id/OIP.IxSQxenayDYM2oZcHwj7PgHaEo?pid=Api&P=0&h=180",
        description: "Banh mi truyen thong",
        stock: 40
    },
    {
        id: 4,
        name: "Cake",
        price: 10,
        img: "https://tse3.mm.bing.net/th/id/OIP.k3-Gqo5gLDWY_nw0_HpNDgHaE8?pid=Api&P=0&h=180",
        description: "Banh sinh nhat",
        stock: 15 
    }
];

export default function ProductList() {
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const exist = cart.find((item) => item.id === product.id);
        let newQuantity = 1;

        if (exist) {
            newQuantity = exist.quantity + 1;
            if (newQuantity > product.stock) {
                alert("Số lượng sản phẩm vượt quá số lượng trong kho");
                return;
            }
            dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: newQuantity } });
        } else {
            if (newQuantity > product.stock) {
                alert("Số lượng sản phẩm vượt quá số lượng trong kho");
                return;
            }
            dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: newQuantity } });
        }

        const updatedCart = exist
            ? cart.map((item) =>
                item.id === product.id ? { ...item, quantity: newQuantity } : item
              )
            : [...cart, { ...product, quantity: newQuantity }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">List Products</div>
            <div className="card-body">
                {products.map((p) => (
                    <div key={p.id} className="product">
                        <img src={p.img} alt={p.name} />
                        <div className="info">
                            <h4>{p.name}</h4>
                            <p>{p.description}</p>
                        </div>
                        <button className="btn" onClick={() => handleAdd(p)}>{p.price} USD</button>
                    </div>
                ))}
            </div>
        </div>
    );
}