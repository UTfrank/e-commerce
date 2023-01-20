import { useState } from "react"
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import Button from "../Button/Button.component"
import FormInput from "../FormInput/FormInput.component"
import "./sign-in-form.styles.scss"

const defaultFormFields = {
  email: "",
  password: ""
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password":
          alert ("Incorrect Password for Email");
          break;
        case "auth/user-not-found":
          alert ("No user associated with this email");
          break;
        default: 
          console.log(error);
      }
    }
  }

  const signInWithGoogle = async() => {
    await signInWithGooglePopup();  
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonTypes="google" onClick={signInWithGoogle}>
              Google Sign In
            </Button>
          </div>
      </form>
    </div>
  )
}

export default SignInForm