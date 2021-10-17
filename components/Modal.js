import { useState } from "react";
import axios from "axios";
import modalStyles from "../styles/Modal.module.scss";

import Loading from "./Loading";

const Modal = ({ type, click, id, reload }) => {

    const [imgURL, setUrl] = useState("");
    const [label, setLabel] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setIsLoading] = useState(false);

    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            let formdata = {imgURL, label};

            setIsLoading(true);

            const { data } = await axios.post("/api/server", formdata, config);

            setIsLoading(false);
            
            if (data.error) {
                alert(data.error);
            } else {
                click();

                alert(data.message);
                reload();
            }
        } catch (error) {
            alert("There was an error uploading the image, please try again");
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const { data } = await axios.delete("/api/server", {
                data: {password, id}
            });

            setIsLoading(false);
            if (data.error) {
                alert(data.error);
            } else {
                click();

                alert(data.message);
                reload();
            }
        } catch (error) {
            alert("There was an error deleting the image, please try again");
        }
    }

    return (
        <div className={modalStyles.modal}>
            <div className={modalStyles.modal_container}>
            {type === "add" ? 
                <>
                    <h2>Add a new photo</h2>
                    <form onSubmit={handleAdd}>
                        <div>
                            <label>Label</label>
                            <input type="text" placeholder="Happy Chef" value={label} onChange={(e) => setLabel(e.target.value)} />
                        </div>
                        <div>
                            <label>Photo URL</label>
                            <input type="text" value={imgURL} onChange={(e) => setUrl(e.target.value)} placeholder="https://images.unsplash.com/photo-a1xUD6nInLKRz6evFKKdir" />
                        </div>
                        <div className={modalStyles.buttons}>
                            <button onClick={click} className={modalStyles.clear}>Cancel</button>
                            <button className={modalStyles.submit}>Submit</button>
                        </div>
                    </form>
                </> : 
                <>
                    <h2>Enter password to delete</h2>
                    <form onSubmit={handleDelete}>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className={modalStyles.buttons}>
                            <button onClick={click} className={modalStyles.clear}>Cancel</button>
                            <button className={modalStyles.delete}>Delete</button>
                        </div>
                    </form>
                </>
            }
            {loading && <Loading />}
            </div>
        </div>
    )
}

export default Modal;
