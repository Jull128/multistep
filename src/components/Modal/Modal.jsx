import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import style from './style.module.css'


function ModalContent({ children, closeHandler }) {
    useEffect(() => {
        const closeModalByEscape = (e) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        };

        document.addEventListener('keydown', closeModalByEscape);

        return () => {
            document.removeEventListener('keydown', closeModalByEscape);
        };
    }, [closeHandler]);

    return (
        <div className={style.modalContent} >
            {children}
        </div>
    );
}

export function Modal({ closeHandler, isOpen, children }) {
    if (!isOpen) return null;
    const clickHandler = (e) => {
        if (e.target === e.currentTarget) {
            closeHandler();
        }
    };

    return createPortal(
        <div className={style.modalWrapper} onMouseDown={clickHandler}>
            <ModalContent >
                {children}
            </ModalContent>
        </div>,
        document.getElementById('modal-root')
    );
};