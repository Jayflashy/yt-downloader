const  express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {title: "Youtube Downloader"})
})
router.post('/download', (req, res) => {
    console.log('Okauiiiai b')
    res.send('Okay dhjl')
})
module.exports = router