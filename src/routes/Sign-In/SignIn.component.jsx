import SignUpForm from "../../components/Sign-Up-Form/SignUpForm.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    // console.log(response);
    createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In With Google Popup
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;