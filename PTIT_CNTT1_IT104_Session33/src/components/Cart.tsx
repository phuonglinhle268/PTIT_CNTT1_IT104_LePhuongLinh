import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { DELETE_ITEM, UPDATE_QUANTITY } from '../redux/constants/type';

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Local state lưu số lượng đang nhập
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch({ type: DELETE_ITEM, payload: id });
      const updatedCart = cart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setShowSuccessMessage(true);
    }
  };

  const handleUpdate = (id: number) => {
    if (quantities[id] && quantities[id] > 0) {
      dispatch({
        type: UPDATE_QUANTITY,
        payload: { id, quantity: quantities[id] },
      });
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: quantities[id] } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleChange = (id: number, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const total = cart.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  );

  // Hide success message after 3 seconds
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: '#f8d7da', color: 'black' }}>Your Cart</div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p>Empty product in your cart</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index: number) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price} USD</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={quantities[item.id] ?? item.quantity}
                        onChange={(event) =>
                          handleChange(item.id, Math.max(1, Number(event.target.value)))
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-info me-2"
                        onClick={() => handleUpdate(item.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ textAlign: "left", color: "red" }}>
              There are {cart.length} items in your shopping cart
            </p>
            <p style={{ fontWeight: "bold", textAlign: "right", color: "red" }}>
              Total: {total} USD
            </p>
          </>
        )}
      </div>
      {showSuccessMessage && (
        <div style={{ backgroundColor: '#f8d7da', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
          Delete cart successfully
        </div>
      )}
    </div>
  );
}