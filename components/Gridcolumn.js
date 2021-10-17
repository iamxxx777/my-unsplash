import Griditem from "./Griditem";
import columnStyles from "../styles/Gridcolumn.module.scss"

const Gridcolumn = ({ data, del, url }) => {

    const images = JSON.parse(data);

    return (
        <div className={columnStyles.grid_column}>
            {images.map((image) => <Griditem image={image} key={image._id} url={url} del={del} />)}
        </div>
    )
}

export default Gridcolumn;
