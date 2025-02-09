import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCities } from '../../actions/cityAction';
import s from './search.module.css';
import { CityList } from '../cityList_about/cityList';
import  { store }  from '../../app/store';

interface City {
    city: string;
    address: string;
}

export const SearchCity: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showList, setShowList] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    
    const { filteredCities, loading, error } = useSelector((state: store) => state.cities);
    
    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        dispatch(filterCities(searchTerm));
    }, [searchTerm, dispatch]);

    const focus = () => {
        setShowList(true);
    };

    const blur = () => {
        setTimeout(() => {
            setShowList(false);
        }, 300);
    };

    const cityClick = (city: City) => {
        setSearchTerm(`${city.city}, ${city.address}`);
        setShowList(false);
        inputRef.current?.blur();
    };

    return (
        <div>
            <input
                className={s.input}
                type="text"
                placeholder="Введите название города"
                value={searchTerm}
                onChange={searchChange}
                onFocus={focus}
                onBlur={blur}
                ref={inputRef}
            />
            {loading && <div>Загрузка...</div>}
            {error && <div>Ошибка: {error.message}</div>}
            {showList && (
                <CityList onCityClick={cityClick} cities={filteredCities} />
            )}
        </div>
    );
};