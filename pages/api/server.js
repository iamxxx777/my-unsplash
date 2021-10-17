import connectDB from '../../config/connectDB';
import Photo from '../../models/file';

connectDB();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET': {
            try {
                const images = await Photo.find({}).sort({'createdAt': -1});
                res.status(201).json(images);
            } catch (error) {
                console.error(error);
                res.status(500).json({error: "Server Error"});
            }
        }
        break;
        case 'POST': {
            const { imgURL } = req.body;

            try {
                if(imgURL) {            
                    let newImage = new Photo(req.body);
                    await newImage.save();

                    res.status(201).json({message: "Image uploaded succesfully"});
                } else {
                    res.json({error: "could not upload image"});
                }

            } catch (error) {
                console.error(error);
                res.status(500).json({error: "Server Error"});
            }
        }
        break;
        case 'DELETE': {
            const { id, password } = req.body;

            try {
                if (password == process.env.PASSWORD) {
                    const photo = await Photo.findById(id);
                    if (photo) {
                        await Photo.findByIdAndDelete(id);
                        res.status(201).json({message: "Deleted successfully"});
                    } else {
                        res.status(404).json({error: "Could not find image in the database"});
                    }
                } else {
                    res.status(400).json({error: "Password incorrect"});
                }
                
            } catch (error) {
                console.error(error);
                res.status(500).json({error: "Server Error"});
            }
        }
        break;
        default:
            res.status(400).json({ error: "this requested method is not allowed" });
            break;
    }
}