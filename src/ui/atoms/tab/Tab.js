import styles from "./Tab.module.css"

const Tab = ({type, message, onClick, activeTab}) => {

    const secondStyle = type === "left" ? styles.leftTab : styles.rightTab;
    const classNames = `${styles.tab} ${secondStyle}`
    const selectedClassNames = activeTab === type ? `${styles.selected} ${classNames}` : classNames

    return (
        <button className={selectedClassNames} onClick={onClick}>
            {message}
        </button>
    );
}

export default Tab;