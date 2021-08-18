const router = require('express').Router();
const auth = require('./verifyToken')

// Adding auth as a middleware
router.get('/username', auth, (req, res) => {

    res.json({
        id: req.user._id,
        username: req.user.username
    })
}
)

module.exports = router