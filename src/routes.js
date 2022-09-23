const  express = require('express')
const router = express.Router()
const ytdl = require('ytdl-core')

router.get('/', (req, res) => {
    res.render('index', {title: "Youtube Downloader"})
})
router.post('/download', async(req, res,next) => {
    // get video link
    let vlink = req.body.link
    console.log(vlink)
    try {
         // perform donload oop
    const info = await ytdl.getInfo(vlink) ;
    // console.log(info); 
   
    // get video formats aand download link
    let videoLength = info.formats.length;

    res.json({title:info.videoDetails.title, downloadUrl:info.formats })
    } catch (error) {
        next(error)
    }
   
})
module.exports = router