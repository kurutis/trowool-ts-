import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../../redusers/cartSlice'; 
import s from './CartModal.module.css'; 

export const CartModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleOrder = () => {
        dispatch(clearCart()); 
    };

    

    if (!isOpen) return null;

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className={s.modal}>
            <div className={s.modalContent}>
                <h2>Корзина</h2>
                {cartItems.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    <>
                        {cartItems.map(item =>  
                        (
                            <div key={item.id} className={s.cartItem}>
                                <h3>{item.name}</h3>
                                <div className={s.color} style={{backgroundColor: item.selectedColor}}></div>
                                <p>Кол-во: {item.quantity}</p>
                                <p>Цена: {item.price * item.quantity} руб.</p>
                                <button className={s.delete_btn} onClick={() => handleRemove(item)}>Удалить</button>
                            </div>
                            
                        ))
                            
                        }
                        <h4>Итого: {totalAmount} руб.</h4>
                        
                    </>
                )}
                <div className={s.btns}>
                    <button className={s.close_button} onClick={handleOrder}>Оформить заказ</button> 
                    <button className={s.close_button} onClick={onClose}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};