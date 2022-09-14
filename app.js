// const imageThumbnail = require('image-thumbnail');
const sharp = require("sharp");
const fs = require('fs');

async function createImageThumbnail() {
    const images = fs.readdirSync('./images');
    fs.rmSync('thumbnails', { recursive: true });
    fs.mkdirSync('thumbnails');
    images.forEach(async (image) => {
        try {
        const thumbnail = await imageThumbnail(`./images/${image}`, { width: 48 });
        fs.writeFileSync(`./thumbnails/${image}.thumb.48.48.png`, thumbnail);
        } catch (err) {
            console.error(err);
        }
    });
}
//No thirdparty
function createThumbnail() {
  try {
    const images = fs.readdirSync('./images');
    fs.rmSync('thumbnails', { recursive: true });
    fs.mkdirSync('thumbnails');
    images.forEach(async (image) => {
      try {
        await sharp(`./images/${image}`)
          .resize({
            width: 48,
            height: 48,
            fit: sharp.fit.contain,
            background: 'transparent'
          })
          .toFile(`./thumbnails/${image}.thumb.48.48.png`);
      } catch (err) {
        console.error(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

createThumbnail();

// createImageThumbnail();