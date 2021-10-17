import styles from "../styles/Griditem.module.scss";

const Griditem = ({ image, del, url }) => {

    const handleFunctions = () => {
        del();
        url(image._id);
    }
    return (
        <div className={styles.grid_item}>
            <div className={styles.grid_hover}>
                <button onClick={handleFunctions}>Delete</button>
                <h4>{image.label}</h4>
            </div>
            <img src={image.imgURL} alt="image description" />
        </div>
    )
}

export default Griditem;
