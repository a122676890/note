const bcrypt = require('bcrypt')
const pwd = '123456' // pwd
const saltRounds = 10 //生成salt的迭代次数
bcrypt.genSalt(saltRounds, (err, salt) => {
  console.log('salt:', salt)
  bcrypt.hash(pwd, salt, (err, hash) => {
    //把hash值赋值给password变量
    console.log(hash)
    bcrypt.compare(pwd, hash, (err, res) => {
      console.log(res)
    })
  })
})
