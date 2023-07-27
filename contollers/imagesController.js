require('dotenv').config();
// aws s3 bucket from cyclic.sh
const BUCKET = process.env.CYCLIC_BUCKET_NAME;
// cyclic fs
const fs = require('@cyclic.sh/s3fs')(BUCKET);

// @desc   Serve images
// @route  /api/images/:path
// @method get
const serveImages = async (req, res) => {
  const { path } = req.params;

  try {
    fs.readFile(path, (err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      let contentType = 'image/jpeg'; // Default to JPEG
      if (path.endsWith('.png')) {
        contentType = 'image/png';
      } else if (path.endsWith('.gif')) {
        contentType = 'image/gif';
      } // Add more as needed

      res.set('Content-Type', contentType);
      res.send(data);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  serveImages,
};
