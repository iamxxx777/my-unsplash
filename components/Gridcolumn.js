import Griditem from "./Griditem";
import columnStyles from "../styles/Gridcolumn.module.scss"

const Gridcolumn = ({ data, del, url }) => {

    data = data.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
    data = data.replace(/[\u0000-\u0019]+/g,"");

    const images = JSON.parse(data);

    return (
        <div className={columnStyles.grid_column}>
            {images.map((image) => <Griditem image={image} key={image._id} url={url} del={del} />)}
        </div>
    )
}

export default Gridcolumn;
