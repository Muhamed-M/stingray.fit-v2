const bcrypt = require('bcrypt');

(async function generatePassword() {
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('', salt);

  console.log(hashedPassword);
})();
