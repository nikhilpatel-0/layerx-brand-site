import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-black pt-10"
    >
      <div className="w-full max-w-6xl flex rounded-3xl shadow-lg overflow-hidden border border-neutral-800">
        
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-[#111]">
          <img
            src="/1.png"
            alt="illustration"
            className="w-full h-full object-contain p-8"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#0c0c0c] text-white p-10 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-2 text-white">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                {isLogin ? "Login to your account" : "Sign up to get started"}
              </p>

              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-2 mb-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-2 mb-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-neutral-700 rounded-lg px-4 py-2 mb-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
              />

              {isLogin && (
                <div className="text-right mb-4">
                  <a href="#" className="text-sm text-[#FF4655] hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <button className="w-full border border-neutral-600 py-2 rounded-lg flex items-center justify-center gap-2 text-sm mb-4 hover:bg-neutral-800 transition text-white">
                <FaGoogle /> {isLogin ? "Login with Google" : "Sign up with Google"}
              </button>

              <button className="w-full bg-[#FF4655] text-white py-2 rounded-lg font-semibold hover:bg-[#e03a49] transition">
                {isLogin ? "Login" : "Sign Up"}
              </button>

              <p className="text-sm text-center text-neutral-400 mt-4">
                {isLogin ? (
                  <>
                    Don’t have an account?{" "}
                    <span
                      onClick={() => setIsLogin(false)}
                      className="text-[#FF4655] hover:underline cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => setIsLogin(true)}
                      className="text-[#FF4655] hover:underline cursor-pointer"
                    >
                      Login
                    </span>
                  </>
                )}
              </p>

              <div className="flex justify-center gap-4 text-xl mt-6 text-neutral-500">
                <FaFacebookF className="hover:text-white cursor-pointer" />
                <FaTwitter className="hover:text-white cursor-pointer" />
                <FaInstagram className="hover:text-white cursor-pointer" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginSignup;
