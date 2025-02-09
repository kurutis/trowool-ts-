import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './ProductDetail.module.css';
import back from '../../assets/back.svg';
import { addToCart } from '../../redusers/cartSlice'; 
import basket from '../../assets/basketIcon.svg';
import { QuantityModal } from '../../components/QwalentyModal/QwalentyModal';

interface Product {
    id: number;
    name: string;
    images: string[];
    brand: string;
    season: string;
    series: string;
    composition_proccent: string;
    packQuantity: number;
    threadLength: number;
    weight: number;
    description: string;
    price: number;
    colors: string[];
}

interface RootState {
    products: {
        products: Product[];
    };
}

export const loader = async (): Promise<Product[]> => {
    const arr = JSON.parse(localStorage.getItem('/product/:id') || '[]');
    return arr || [];
}

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const products = useSelector((state: RootState) => state.products.products);
    const product = products.find(product => product.id === parseInt(id!));
    const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

    const handleAddToCart = (quantity: number, selectedColor: string) => {
        const itemWithQuantity = { ...product, quantity, selectedColor };
        dispatch(addToCart(itemWithQuantity)); 
    };

    if (!product) {
        return (
            <div className={s.container}>
                <p>Товар не найден</p>
            </div>
        );
    }

    return (
        <div>
            <button className={s.back} onClick={() => navigate('/Market')}>
                <img src={back} alt="" />
                Назад
            </button>
            <h1 className={s.product_name}>{product.name}</h1>
            <div className={s.product}>
                <img src={product.images[selectedColorIndex]} alt={product.name} />
                <div className={s.product_info}>
                    <h2>Характеристики:</h2>
                    <p>Бренд: {product.brand}</p>
                    <p>Сезон: {product.season}</p>
                    <p>Серия: {product.series}</p>
                    <p>Состав пряжи: {product.composition_proccent}</p>
                    <p>В одной упаковке: {product.packQuantity}</p>
                    <p>Длина нити(м): {product.threadLength}</p>
                    <p>Вес (г): {product.weight}</p>
                    <h2>Описание</h2>
                    <p className={s.description}>{product.description}</p>
                </div>
            </div>
            <div className={s.actions}>
                <div className={s.colors_container}>
                    <h2>Выбрать цвет</h2>
                    <ul className={s.colors}>
                        {product.colors.map((color, index) => (
                            <li key={index}>
                                <button 
                                    className={`${s.color_btn} ${selectedColorIndex === index ? s.active : ''}`} 
                                    style={{ backgroundColor: color }} 
                                    onClick={() => setSelectedColorIndex(index)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={s.info_line}>
                    <p>{product.price} руб/шт</p>
                    <button className={s.basket_button} onClick={() => setIsModalOpen(true)}>
                        В корзину
                        <img src={basket} alt="Корзина" />
                    </button>
                    <QuantityModal 
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onAddToCart={handleAddToCart}
                        product={product}
                        selectedColorIndex={selectedColorIndex}
                    />
                </div>
            </div>
        </div>
    );
};