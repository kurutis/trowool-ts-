import React from 'react';
import s from './Market.module.css';
import { CategorySelector } from '../../components/Category_market/CategoreSelector';
import { ProductList } from '../../components/ProductList/ProductList';

export const loader = async (): Promise<any[]> => {
    const arr = JSON.parse(localStorage.getItem('Market') || '[]');
    return arr || [];
}

export const Market: React.FC = () => {
    return (
        <div>
            <CategorySelector />
            <ProductList />
        </div>
    );
};