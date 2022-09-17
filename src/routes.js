const  express = require('express')
const router = express.Router()
const ytdl = require('ytdl-core')

router.get('/', (req, res) => {
    res.render('index', {title: "Youtube Downloader"})
})
router.post('/download', (req, res) => {
    // get video link
    let vlink = req.body.link
    console.log(vlink)
    // perform donload oop
    const info =  ytdl.getInfo(vlink) ;
    console.log(info); 
    res.send("HGefttinhg inefo")
})
module.exports = router