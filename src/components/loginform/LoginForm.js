const LoginForm = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">Sign In to your account</h1>
      <p className="text-base font-normal mt-2 mb-4">
        Access your Synapse dashboard and tools
      </p>
      <div className="card flex-col w-[545px]">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="text-base font-normal mb-6">
          Enter your credentials to access your account
        </p>

        <form>
          <div className="mb-6">
            <label className="frm-label" htmlFor="email">
              Email
            </label>
            <input
              className="w-full frm-input focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              placeholder="example@synapse.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="frm-label" htmlFor="password">
              Password
            </label>
            <input
              className="w-full frm-input focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="password"
              id="password"
              placeholder="● ● ● ● ● ● ● ●"
              required
            />
            <div className="text-right">
              <a href="#" className=" text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          <button className="btn-primary cmnbtn w-full" type="submit">
            Login
          </button>
        </form>
        <div className="flex items-center justify-between mt-6">
          <p className="font-semibold text-base ">Don’t have an account? </p>
          <a href="#" className="font-semibold text-[15px] hover:underline">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
