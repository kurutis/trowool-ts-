import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../actions/product';
import s from './CategoreSelector.module.css';
import menuImg from '../../assets/menu.svg';

interface RootState {
    products: {
        categories: string[];
        selectedCategory: string | null;
    };
}

export const CategorySelector: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const categories = useSelector((state: RootState) => state.products.categories);
    const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory);
    const dispatch = useDispatch();

    const handleCategoryClick = (category: string) => {
        dispatch(setSelectedCategory(category));
        setIsMenuOpen(false); 
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target.className === s.overlay) {
            setIsMenuOpen(false);
        }
    };

    return (
        <div className={s.category_selector}>
            <button className={s.assortiment} onClick={toggleMenu} aria-haspopup="true" aria-expanded={isMenuOpen}>
                <img src={menuImg} alt="Menu" />
                {selectedCategory || 'Ассортимент'}
            </button>
            {isMenuOpen && (
                <>
                    <div className={s.overlay} onClick={closeMenu}></div>
                    <div className={`${s.menu} ${isMenuOpen ? s.open : ''}`}>
                        <h2>Категории</h2>
                        {categories.map(category => (
                            <div key={category} onClick={() => handleCategoryClick(category)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleCategoryClick(category)}>
                                {category}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};