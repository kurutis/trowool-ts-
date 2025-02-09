import React from "react";
import { useSelector } from "react-redux";
import s from './cityList.module.css';

interface City {
    id: number;
    city: string;
    address: string;
}

interface CityListProps {
    onCityClick: (city: City) => void;
}

export const CityList: React.FC<CityListProps> = ({ onCityClick }) => {
    const { filteredCities, cities, loading, error } = useSelector((state: any) => state.cities); 

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    const displayCities = filteredCities.length > 0 ? filteredCities : cities; 
    if (displayCities.length === 0) {
        return <div>Городов не найдено</div>;
    }

    return (
        <ul className={s.cities}>
            {displayCities.map((city: City) => (
                <li key={city.id} onClick={() => onCityClick(city)}>
                    {city.city}, {city.address}
                </li>
            ))}
        </ul>
    );
};