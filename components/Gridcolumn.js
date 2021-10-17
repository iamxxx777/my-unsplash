import Griditem from "./Griditem";
import columnStyles from "../styles/Gridcolumn.module.scss"

const Gridcolumn = ({ data, del, url }) => {

    data = data.replace(/\\r/g, "\\r").replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f")
               .replace(/\\ro/g, "\\ro")
               .replace(/\\jo/g, "\\jo")
               .replace(/\\ro/g, "\\ro")
               .replace(/\\Hu/g, "\\Hu")
               .replace(/\\Pi/g, "\\Pi")
               .replace(/\\xi/g, "\\xi")
               .replace(/\\_i/g, "\\_i")
               .replace(/\\vi/g, "\\vi");
// remove non-printable and other non-valid JSON chars
    data = data.replace(/[\u0000-\u0019]+/g,"");

    const images = JSON.parse(data);

    console.log(data);
    console.log(images);

    return (
        <div className={columnStyles.grid_column}>
            {images.map((image) => <Griditem image={image} key={image._id} url={url} del={del} />)}
        </div>
    )
}

export default Gridcolumn;
