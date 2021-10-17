import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from '../styles/Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <Loader 
                type="ThreeDots" 
                color="#3DB46D" 
                height={120} 
                width={120} 
            />
        </div>
    )
}

export default Loading
