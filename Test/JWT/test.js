const { createToken, verifyToken } = require('../../services/JWT');

function test() {
  const user = {
    username: 'abhiy13',
    password: 'asdasd123'
  };
  const x = createToken(user);
  console.log(x);
}

test();