import React from 'react';
import s from './About.module.css';
import historyImage from '../../assets/history.jpeg';
import classNames from 'classnames';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg'; 
import { Link } from 'react-router-dom';
import { SearchCity } from '../../components/search_about/search';
import { Slider } from '../../components/slider_about/slider';

export const loader = async (): Promise<any[]> => {
    const arr = JSON.parse(localStorage.getItem('About') || '[]');
    return arr || [];
}

export const About: React.FC = () => {
    return (
        <div>
            <h1>История</h1>
            <div className={s.history}>
                <div className={s.text}>
                    <p>
                        Троицкая камвольная фабрика - одно из старейших текстильных предприятий России. Основал фабрику московский купец А.П. Прохоров в 1797 году. Фабрика была бумагопрядильной.
                    </p>
                    <p>
                        В 1865 году владельцем фабрики стал немец Куппер, который переоборудовал ее под выпуск армейского сукна. До 1976 года фабрика производила тонкосуконные ткани. Затем предприятие было переориентировано на выпуск гребенной чесальной ленты, а с 1990-х годов был налажен выпуск пряжи для ручного и машинного вязания, а также пряжи для производства камвольных тканей.    
                    </p>
                </div>
                <img src={historyImage} alt="history" /> 
            </div>
            <h2>Где купить</h2>
            <div className={s.mapContainer}>
                <div className={s.magnifier}>
                    <Link><img src={plus} alt="Zoom in" /></Link>
                    <Link><img src={minus} alt="Zoom out" /></Link>
                </div>
                <div className={s.search_city}>
                    <SearchCity />  
                </div>
            </div>
            <h2>Сертификаты</h2>
            <div className={s.slider_container}>
                <Slider />
            </div>
            <h2>Раскрытие информации</h2>
            <div className={s.links}>
                {/* <h3>Раскрытие информации в сфере теплоснабжения и горячего водоснабжения</h3>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-1.pdf' target='_blank'>ФОРМА 1. ОБЩАЯ ИНФОРМАЦИЯ О РЕГУЛИРУЕМОЙ ОРГАНИЗАЦИИ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-2.pdf' target='_blank'>ФОРМА 2. ИНФОРМАЦИЯ О ТАРИФАХ НА ТЕПЛОВУЮ ЭНЕРГИЮ(МОЩНОСТЬ)</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-8.pdf' target='_blank'>ФОРМА 8. ИНФОРМАЦИЯ ОБ ОСНОВНЫХ ПОКАЗАТЕЛЯХ ФИНАНСОВО-ХОЗЯЙСТВЕННОЙ ДЕЯТЕЛЬНОСТИ РЕГУЛИРУЕМОЙ ОРГАНИЗАЦИИ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-9.pdf' target='_blank'>ФОРМА 9. ИНФОРМАЦИЯ ОБ ОСНОВНЫХ ПОТРЕБИТЕЛЬСКИХ ХАРАКТЕРИСТИКАХ РЕГУЛИРУЕМЫХ ТОВАРОВ И УСЛУГ РЕГУЛИРУЕМЫХ ОРГАНИЗАЦИЙ И ИХ СООТВЕТСТВИИ УСТАНОВЛЕННЫМ ТРЕБОВАНИЯМ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-11.pdf' target='_blank'>ФОРМА 11. ИНФОРМАЦИЯ О НАЛИЧИИ (ОТСУТСТВИИ) ТЕХНИЧЕСКОЙ ВОЗМОЖНОСТИ ПОДКЛЮЧЕНИЯ (ТЕХНОЛОГИЧЕСКОГО ПРИСОЕДИНЕНИЯ) К СИСТЕМЕ ТЕПЛОСНАБЖЕНИЯ, А ТАКЖЕ О РЕГИСТРАЦИИ И ХОДЕ РЕАЛИЗАЦИИ ЗАЯВОК НА ПОДКЛЮЧЕНИЕ (ТЕХНОЛОГИЧЕСКОЕ ПРИСОЕДИНЕНИЕ) К СИСТЕМЕ ТЕПЛОСНАБЖЕНИЯ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-12.pdf' target='_blank'>ФОРМА 12. ИНФОРМАЦИЯ ОБ УСЛОВИЯХ, НА КОТОРЫХ ОСУЩЕСТВЛЯЕТСЯ ПОСТАВКА РЕГУЛИРУЕМЫХ ТОВАРОВ И (ИЛИ) ОКАЗАНИЕ РЕГУЛИРУЕМЫХ УСЛУГ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-14.pdf' target='_blank'>ФОРМА 14. ИНФОРМАЦИЯ О СПОСОБАХ ПРИОБРЕТЕНИЯ, СТОИМОСТИ И ОБЪЕМАХ ТОВАРОВ, НЕОБХОДИМЫХ ДЛЯ ПРОИЗВОДСТВА РЕГУЛИРУЕМЫХ ТОВАРОВ И (ИЛИ) ОКАЗАНИЯ РЕГУЛИРУЕМЫХ УСЛУГ РЕГУЛИРУЕМОЙ ОРГАНИЗАЦИЕЙ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Forma-15.pdf' target='_blank'>ФОРМА 15. ИНФОРМАЦИЯ О ПРЕДЛОЖЕНИИ РЕГУЛИРУЕМЫЙ ОРГАНИЗАЦИИ ОБ УСТАНОВЛЕНИИ ЦЕН (ТАРИФОВ) В СФЕРЕ ТЕПЛОСНАБЖЕНИЯ НА ОЧЕРЕДНОЙ РАСЧЕТНЫЙ ПЕРИОД РЕГУЛИРОВАНИЯ</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Formy-predstavleniya-informatsii-podlezhaschei-raskrytiyu-organizatsiyami-osuschestvlyayuschimi-goryachee-vodosnabzhenie.pdf' target='_blank'>Формы представления информации, подлежащей раскрытию организациями, осуществляющими горячее водоснабжение</Link>
                </p>
                <p>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Tipovoi-dogovor-teplosnabzheniya-i-goryachego-vodosnabzheniya.pdf' target='_blank'>Форма типового договора теплоснабжения и горячего водоснабжения</Link>
                </p>
                <h3>
                    <Link to='http://www.troitskwool.com/files/nodus_items/0067/33768/attaches/Formy-predstavleniya-informatsii-podlezhaschei-raskrytiyu-organizatsiyami-osuschestvlyayuschimi-vodootvedenie_1.pdf' target='_blank'>Раскрытие информации в сфере водоотведения >>>> </Link>
                </h3>
                <h3>
                    <Link to='/'>Тарифы по регулируемым видам деятельности </Link>
                </h3> */}
            </div>
        </div>
    );
}