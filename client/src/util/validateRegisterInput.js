export default function validateRegisterInput(userData) {
  let errors = {};

  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  const passwordRegex = /^[0-9-a-zA-Z]{3,16}$/;


  if (!userData.email) {
    errors.email = "Email field is required";
  }else if(!emailRegex.test(userData.email)){
    errors.email = "Email must contain letters and/or numbers only.\n Followed by a @/letters.letters.\n Example: test123@domain.org";
  }

  if (!userData.username) {
    errors.username = "Username field is required";
  }else if(!usernameRegex.test(userData.username)){
    errors.username = "Username length must be between 3 and 16 chars contain letters and numbers!"
  }

  if (!userData.password) {
    errors.password = "Password field is required";
  }else if(!passwordRegex.test(errors.password)){
    errors.password = "Password length must be between 3 and 16 chars contain letters and numbers!"
  }else if (userData.password !== userData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
