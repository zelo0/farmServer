const passport = require('passport')
const local = requier('./local')
const kakao = require('./kakao')
const User = require('../models/user')


module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
    })
    .then(user => done(null, user))
    .catch(err => done(err))
  })

  local()
  kakao()
}