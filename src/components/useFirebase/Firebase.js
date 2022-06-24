import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../../Firebase/FirebaseAuth/Firebase.initial";

initializeAuthentication();

const Firebase = () => {
  const [user, setUser] = useState({});
  const [checkValue, setCheckValue] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorvalue, setErrorValue] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const githubeProvider = new GithubAuthProvider();

  // For Doctors Data Load
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((doc) => {
        setDoctors(doc);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.messege);
      });
  }, []);

  // For Service Data Load
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((service) => {
        setServices(service);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.messege);
      });
  }, [services]);

  // Email INput Value Find Function
  const handleFindEmailInputValue = (e) => {
    setEmailValue(e.target.value);
  };

  // Password INput Value Find Function
  const handleFindPasswordInputValue = (e) => {
    setPasswordValue(e.target.value);
  };

  // checkbox value find
  const handleCheckBoxValueFind = (e) => {
    setCheckValue(e.target.checked);
  };

  // Chekd email value and Password vlaue

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (passwordValue.length < 6) {
      setErrorValue("Password at least be 6 character");
      return;
    } else {
      setErrorValue("");
    }
    checkValue
      ? createAnewUser(emailValue, passwordValue)
      : proccessToLogInUser(emailValue, passwordValue);
  };

  // Log In Manually

  const proccessToLogInUser = (emailValue, passwordValue) => {
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setErrorValue(error.messege);
      });
  };

  // Create A new User People

  const createAnewUser = (emailValue, passwordValue) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((result) => {
        setUser(result.user);
        setErrorValue("");
        setUserName();
      })
      .catch((error) => {
        setErrorValue(error.messege);
      })
      .finally(() => setIsLoading(false));
  };

  // Google Sign In Method

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setErrorValue(error.messege);
      })
      .finally(() => setIsLoading(false));
  };

  //Githube Sign In method

  const handleGithubeSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubeProvider)
      .catch((error) => {
        setErrorValue(error.messege);
      })
      .finally(() => setIsLoading(false));
  };

  //Log Out User

  const handleLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  // UserName Value Find

  const handleUserNameInputValueFind = (e) => {
    setName(e.target.value);
  };

  // User name Changed

  const setUserName = () => {
    setIsLoading(true);
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => console.log(error.messege))
      .finally(() => setIsLoading(false));
  };

  // when auth changed
  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    handleCheckBoxValueFind,
    handleFindEmailInputValue,
    handleFindPasswordInputValue,
    handleGoogleSignIn,
    handleGithubeSignIn,
    handleFormSubmit,
    handleLogOut,
    handleUserNameInputValueFind,
    setUser,
    checkValue,
    emailValue,
    passwordValue,
    errorvalue,
    user,
    isLoading,
    services,
    doctors,
  };
};

export default Firebase;
