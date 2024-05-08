import { useEffect } from "react";

const Modal = ({ isOpen, onClose, gameWon, time }) => {

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    }

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape' && isOpen) onClose(); }
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    return (
        <div
            className={`fixed inset-0 z-[80] flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'}`
            }
            onClick={handleBackgroundClick}
        >
            <div className="bg-white border shadow-sm rounded-xl p-4 w-96 dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex justify-center items-center border-b pb-2 dark:border-neutral-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                        {gameWon ? "👑 HAS GANADO 👑" : "💀💀 HAS PERDIDO 💀💀"}
                    </h3>
                </div>
                <div className="py-4 text-gray-800 dark:text-neutral-400">
                    <div className="flex gap-2 items-center">
                        <p className="font-bold">Tiempo:</p>
                        <p>{`${time} ${time !== 1 ? "segundos" : "segundo"}`}</p>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-x-2 pt-4 border-t dark:border-neutral-700">
                    <button
                        type="button"
                        className="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                    {/*<button
                        type="button"
                        className="py-2 px-3 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Save changes
        </button>*/}
                </div>
            </div>
        </div>
    )
}

export default Modal;