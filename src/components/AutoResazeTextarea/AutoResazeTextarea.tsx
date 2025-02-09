import React, { useEffect, useRef } from 'react';
import s from './AutoResazeTextarea.module.css';

interface AutoResizeTextareaProps {
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
    placeholder?: string; 
}

export const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({ value, onChange, placeholder }) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; 
            textarea.style.height = `${textarea.scrollHeight}px`; 
        }
    }, [value]); 

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e);
    };

    return (
        <textarea
            className={s.textarea}
            ref={textareaRef}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            autoCorrect="false"
            spellCheck="false"
            aria-label={placeholder}
        />
    );
};