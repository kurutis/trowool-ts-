import React, { useEffect, useState, useRef, KeyboardEvent } from 'react';
import styles from './slider.module.css';
import doc1 from '../../assets/Documents/doc1.jpg';
import doc2 from '../../assets/Documents/doc2.jpg';
import doc3 from '../../assets/Documents/doc3.jpg';
import doc4 from '../../assets/Documents/doc4.jpg';
import doc5 from '../../assets/Documents/doc5.jpg';
import doc6 from '../../assets/Documents/doc6.jpg';
import doc7 from '../../assets/Documents/doc7.jpg';
import prevImg from '../../assets/prev.svg';
import nextImg from '../../assets/next.svg';
import plus from '../../assets/plus.svg';

interface SliderItem {
    id: number;
    image: string;
}

export const Slider: React.FC = () => {
    const [items] = useState<SliderItem[]>([
        { id: 1, image: doc1 },
        { id: 2, image: doc2 },
        { id: 3, image: doc3 },
        { id: 4, image: doc4 },
        { id: 5, image: doc5 },
        { id: 6, image: doc6 },
        { id: 7, image: doc7 },
    ]);
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string>('');
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const autoSlideInterval = setInterval(next, 3000);
        return () => clearInterval(autoSlideInterval);
    }, [activeIndex]);

    const updatePositions = (index: number) => {
        setActiveIndex(index);
    };

    const next = () => {
        updatePositions((activeIndex + 1) % items.length);
    };

    const prev = () => {
        updatePositions((activeIndex - 1 + items.length) % items.length);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            next();
        }
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            prev();
        }
    };

    const openModal = (image: string) => {
        setModalImage(image);
        setIsModalOpen(true);
        if (modalRef.current) modalRef.current.focus();

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };

    return (
        <div className={styles.carousel} onKeyDown={handleKeyDown} tabIndex={0}>
            <button className={styles.btnPrev} onClick={prev} aria-label="Previous slide">
                <img src={prevImg} alt="Previous" />
            </button>
            <ul className={styles.carouselList}>
                {items.map(item => (
                    <li
                        key={item.id}
                        className={`${styles.carouselItem} ${activeIndex === item.id - 1 ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}
                    >
                        <div
                            className={styles.imageOverlay}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = 0; }}
                            onClick={() => openModal(item.image)}
                        >
                            <img src={plus} alt="Open" className={styles.icon} />
                        </div>
                    </li>
                ))}
            </ul>
            <button className={styles.btnNext} onClick={next} aria-label="Next slide">
                <img src={nextImg} alt="Next" />
            </button>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal} role="dialog" aria-modal="true" tabIndex={-1} ref={modalRef}>
                    <div className={styles.modalContent}>
                        <img src={modalImage} alt="Enlarged" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
};
}