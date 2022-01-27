const yup = require("yup");
const r = yup.object().shape({
  full: yup.string().required(),
  email: yup.string().email().required(),
  pass: yup.string().min(5).max(20).required(),
});
module.exports = r;
