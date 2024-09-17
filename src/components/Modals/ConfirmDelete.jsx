import styles from '@/styles/ModalsStyles/ConfirmDelete.module.css';

const ConfirmDelete = ({open, onClose, onClick}) =>{
    return (
        open ?
        <div className={styles.divModal}>
            <div className={styles.divModalContent}>
                <div className={styles.modalContent}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        height="50px" 
                        viewBox="0 -960 960 960" 
                        width="50px"
                        fill="#75FB4C">
                            <path
                                d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                            />
                    </svg>
                    <h3>Tem certeza que deseja excluir?</h3>
                    <p>Ao confirmar, os dados não poderão ser recuperados.</p>
                </div>
                <div className={styles.divButtonModal}>
                    <button className={styles.buttonSuccess} onClick={onClick}>Confirmar</button>
                    <button className={styles.buttonClose} onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div> : null
    )
}
export default ConfirmDelete