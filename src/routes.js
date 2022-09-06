const  express = require('express')
const router = express.Router()
const ytdl = require('ytdl-core')

router.get('/', (req, res) => {
    res.render('index', {title: "Youtube Downloader"})
})
router.post('/download', (req, res) => {
    // get video link
    const vlink = req.body.link
    console.log(vlink)
    // perform donload oop
    res.send('Okay dhjl')
})
module.exports = router