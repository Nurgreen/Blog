const {Strategy, ExtractJwt} = require('passport-jwt')
// const {model} = require('mongoose')
const keys = require('../keys')
const User = require('../models/user.model')


// Autherization: Bearer fdfdfdfd.fdfdfdfwdw.dsaw
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT
}

module.exports = new Strategy(options, async (payload, done) => {
    try {
        const candidate = await User.findById(payload.userId)

        if (candidate) {
            done(null, candidate)

        } else {
            done(null, false)
        }

    } catch (e) {
        console.error(e)
    }
})