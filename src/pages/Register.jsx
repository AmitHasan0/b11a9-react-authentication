import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password Validation
    let error = "";

    if (!/[A-Z]/.test(password)) {
      error = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      error = "Password must contain at least one lowercase letter.";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters long.";
    }

    if (error) {
      setPasswordError(error);
      return;
    }

    setPasswordError("");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
          });

        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Redirecting to the HomePage...",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  useEffect(() => {
    document.title = "Register | App Store";
  }, []);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center lg:min-h-screen min-h-min mt-10 lg:mt-5">
      <div className="card bg-blue-100 w-full lg:max-w-sm max-w-3/4 shrink-0 shadow-2xl">
        <h2 className="font-semibold lg:text-2xl text-lg text-center pt-5">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="btn btn-primary mt-4  hover:bg-blue-800 "
            >
              Register
            </button>
            <button
              onClick={handleGoogleSignIn}
              class="btn bg-white text-black btn-neutral"
            >
              <svg
                aria-label="Google logo"
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="rounded-full"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="font-semibold text-center p-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-red-500">
                login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
