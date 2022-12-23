import SignUpForm from "../../components/Sign-Up-Form/SignUpForm.component";
import SignInForm from "../../components/Sign-In-Form/SignInForm.component";

import "./authentication.styles.scss";

const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
