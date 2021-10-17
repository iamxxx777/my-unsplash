import connectDB from '../../config/connectDB';
import Photo from '../../models/file';
import nextConnect from 'next-connect';

connectDB();

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({error: `Sorry, there was an error! ${error.msg}`});
    },
    onNoMatch(req, res) {
        res.status(405).json({error: `Method '${req.method}' is not allowed`})
    }
});

apiRoute.get(async (req, res) => {
  try {
    const images = await Photo.find({});
    res.status(201).json({
      success: "Image recieved successfully",
      images
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Server Error"});
  }
});

apiRoute.delete(async (req, res) => {
  const { id, password } = req.body;
  try {
    if (password == process.env.PASSWORD) {
      const photo = await Photo.findById(id);
      if (photo) {
        await Image.findByIdAndDelete(id);
        res.status(201).json({message: "Deleted successfully"});
      } else {
        res.status(404).json({error: "Could not find image in the database"});
      }
    } else {
      res.status(404).json({error: "Password incorrect"});
    }
    
  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
});

apiRoute.post(async (req, res) => {
  const { imageUrl, label } = req.body;
  let data = {};
  console.log('abc');
  try {
  console.log('abcd');

      if(imageUrl) {            
  console.log('abcde');

        data.imgURL = imageUrl;
        data.label = label;
        let newImage = new Photo(data);
        await newImage.save();
          res.status(201).json({
            success: "Image uploaded succesfully",
            imageUrl
          });
      } else {
          res.json({error: "could not upload image"});
      }

  } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
  }
})

export default apiRoute;

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
}; 