import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/forProfileAction';
import { User } from '../User_profile/User';
import s from './AuthForm.module.css';

interface AuthFormProps {
    onSuccess: (user: any) => void; // Define the type of user as needed
}

export const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [snp, setSnp] = useState<string>(''); 
    const [phone, setPhone] = useState<string>(''); 
    const [nick, setNick] = useState<string>(''); 

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            if (storedUser && storedUser.email === email) { 
                dispatch(login(storedUser));
                onSuccess(storedUser);
            } else {
                alert("Неправильный логин или пароль");
            }
        } else {
            const newUser = { email, password, snp, phone, nick };
            localStorage.setItem('user', JSON.stringify(newUser));
            dispatch(login(newUser));
            onSuccess(newUser);
        }
    };

    return (
        <div className={s.form_container}>
            <form className={s.form} onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                <input 
                    className={s.form_input}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='one'
                    required
                    aria-label="Email"
                />
                <input 
                    className={s.form_input}
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-label="Пароль"
                />
                {!isLogin && (
                    <>
                        <input 
                            className={s.form_input}
                            type="text"
                            placeholder="ФИО"
                            value={snp}
                            onChange={(e) => setSnp(e.target.value)}
                            required
                            aria-label="ФИО"
                        />
                        <input 
                            className={s.form_input}
                            type="tel"
                            placeholder="Телефон"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            aria-label="Телефон"
                        />
                        <input 
                            className={s.form_input}
                            type="text"
                            placeholder="Имя на сайте"
                            value={nick}
                            onChange={(e) => setNick(e.target.value)}
                            required
                            aria-label="Имя на сайте"
                        />
                    </>
                )}
                <button className={s.form_btn} type="submit">
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
                <p onClick={() => setIsLogin(!isLogin)} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && setIsLogin(!isLogin)}>
                    {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войти'}
                </p>
            </form>
        </div>
    );
};