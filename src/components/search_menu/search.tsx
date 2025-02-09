import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import s from './search.module.css';


const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

const filterProducts = (searchTerm: string) => ({
    type: FILTER_PRODUCTS,
    payload: { searchTerm },
});

export const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const dispatch = useDispatch();

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        dispatch(filterProducts(value));
    };

    return (
        <>
            <input
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={handleSearchChange}
                className={s.input}
            />
        </>
    );
};