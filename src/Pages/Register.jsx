import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../ContextProvider/FirebaseAuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be at least 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password < 6) {
      setPasswordError("Password should be at least 6 character");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setPasswordError(errorMessage);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-3xl font-bold">Register your account</h1>
        </div>
        <form onSubmit={handleRegister} className="space-y-10">
          <div className="space-y-4">
            <div className="space-y-3">
              {/* name */}
              <label className="block mb-2 font-semibold text-xl">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {nameError && <p className="text-red-500 text-xs">{nameError}</p>}

              {/* photo url */}
              <label className="block mb-2 font-semibold text-xl">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL here"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {/* email */}
              <label className="block mb-2 font-semibold text-xl">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                {/* password */}
                <label htmlFor="password" className="text-xl font-semibold">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {passwordError && (
                <p className="text-red-500 text-xs">{passwordError}</p>
              )}
            </div>
          </div>

          <div>
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accept Term & Conditions
            </label>
            <div className="mt-2">
              <button
                type="submit"
                className="w-full px-8 mb-2.5 py-3 font-semibold rounded-md bg-primary text-base-100 cursor-pointer"
              >
                Register
              </button>
            </div>
            <Link
              to="/auth/login"
              className="px-6 text-sm text-center dark:text-gray-600"
            >
              Already have an Account?
              <p className="hover:underline dark:text-violet-600">Login</p>.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
