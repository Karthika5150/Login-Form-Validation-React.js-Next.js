"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState({});
  const [signup, setSignup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    signupValidate();
  }, [email, password, confirmpassword]);

  const signupValidate = () => {
    let error = {};

    if (!email) {
      error.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.email = "email is invalid";
    }

    if (!password) {
      error.password = "password is required";
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        password
      ) &&
      password.length < 6
    ) {
      alert("pass");
      error.password = "password is invalid";
    }
    if (!confirmpassword) {
      error.confirmpassword = "Confirm password is required";
    } else if (password == confirmpassword) {
      error.confirmpassword = "confirm password is invalid";
    }
    setError(error);
    setSignup(Object.keys(error).length === 0);
  };

  const handleSignup = () => {
    if (!signup) {
      alert("form submited");
      console.log(email + "," + confirmpassword);

      //         // var get=JSON.parse(localStorage.getItem('get') || []);
      //   var getSS=JSON.parse(localStorage.getItem('user') || []);
      //         getSS.concat({
      //             mail:email,
      //             pass:confirmpassword
      //         });
    //   localStorage.setItem("user", JSON.stringify({ email, confirmpassword }) || []);
    // console.log(JSON.parse(localStorage.getItem('getS')))


    
    let userarr=JSON.parse(localStorage.getItem('getS') || '[]')

  userarr.push({
    mail:email,
    pass:confirmpassword
});


    localStorage.setItem('getS',JSON.stringify(userarr));
 
      setEmail("");
      setConfirmpassword(null);
      setPassword(null);
      console.log("Form has been submited successfull");
      router.push(`/Login`);
    } else {
      console.log("form has been some error");
    }
  };

  return (
    <>
      <section className="dashboard-contain">
        <div className="dashboard">
          <h6 className="ds-txt">SIGN UP</h6>
          <hr />
          <label className="labels">Email Address</label>
          <br />
          <input
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inputs"
            type="email"
          />
          <br />
          {error && <p className="error">{error.email}</p>}

          <label
            className="labels"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          >
            Password
          </label>
          <br />
          <input placeholder="password" className="inputs" type="password" />
          {error && <p className="error">{error.password}</p>}
          <br />

          <label className="labels">confirm Password</label>
          <br />
          <input
            placeholder="password"
            onChange={(e) => setConfirmpassword(e.target.value)}
            className="inputs"
            type="password"
          />

          {error && <p className="error">{error.confirmpassword}</p>}

          <button className="btn-1" disabled={signup} onClick={handleSignup}>
            Sign up
          </button>

          <hr className="hr-1" />
          <p className="lg-txt">
            Already have an account?
            <Link href="/Login" className="form-link">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
export default Signup;
