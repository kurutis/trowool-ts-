import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../actions/review'; 
import { Modal } from '../Modal_profile/Modal';
import { AuthForm } from '../AuthForm_profile/AuthForm';
import s from './Form_review.module.css';
import go from '../../assets/go.svg';
import { AutoResizeTextarea } from '../AutoResazeTextarea/AutoResazeTextarea';
import paperClip from '../../assets/paperclip.svg';

export const ReviewForm: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [rating, setRating] = useState<number>(1);
    const [images, setImages] = useState<string[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.forProfile.user ? state.forProfile.user.nick : null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files!).map(file => URL.createObjectURL(file));
        setImages(prevImages => [...prevImages, ...files]);
    };

    useEffect(() => {
        return () => {
            images.forEach(image => URL.revokeObjectURL(image));
        };
    }, [images]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userName) { 
            setShowModal(true);
            return;
        }

        dispatch(addReview({ name: userName, text, rating, images }));
        setText(''); 
        setRating(1); 
        setImages([]); 
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <form className={s.review_form} onSubmit={handleSubmit}>
                <AutoResizeTextarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Оставьте ваш отзыв!"
                />
                <div className={s.else}>
                    <select value={rating} onChange={(e) => setRating(+e.target.value)}>
                        {[1, 2, 3, 4, 5].map(star => (
                            <option key={star} value={star}>
                                {star} {star === 1 ? 'звезда' : 'звезды'}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="file-upload" className={s.custom_file_upload}>
                        <img className={s.label_img} src={paperClip} alt="Прикрепить файл" />
                    </label>
                    <input 
                        id="file-upload" 
                        type="file" 
                        multiple 
                        onChange={handleImageChange} 
                        style={{ display: 'none' }}
                    />
                    <button type="submit"><img src={go} alt="Отправить" /></button>
                </div>
            </form>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <h2 style={{ textAlign: 'center' }}>Ошибка</h2>
                <p style={{ textAlign: 'center' }}>Пожалуйста, войдите в систему, чтобы оставить отзыв.</p>
                <AuthForm onSuccess={handleCloseModal} />
            </Modal>
        </>
    );
};