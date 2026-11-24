
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      // TODO: Connect your login API here.
      // Example:
      // const response = await fetch("YOUR_BACKEND_URL/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      //
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message || "Login failed.");
      //
      // Store authentication securely according to your backend's
      // authentication strategy, then navigate to the dashboard.

      setError(
        "Login API is not connected yet. Connect your backend to sign in."
      );
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      {/* Left branding panel */}
      <section className="relative hidden overflow-hidden bg-slate-950 text-white lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950" />
        <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <Link to="/" className="relative inline-flex w-fit items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-900/40">
            <Sparkles size={22} />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            YourCommunity
          </span>
        </Link>

        <div className="relative max-w-xl py-12">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-indigo-200">
            <Users size={16} />
            A community built around you
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl">
            Your next connection
            <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              starts here.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 xl:text-lg">
            Sign in to discover people, share ideas, explore opportunities,
            and stay connected with your community.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Connect with people who share your interests",
              "Discover community news and upcoming events",
              "Explore opportunities to learn and collaborate",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-400/15 text-indigo-300">
                  <ShieldCheck size={15} />
                </div>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} YourCommunity</span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} />
            Your community journey starts here
          </span>
        </div>
      </section>

      {/* Login form panel */}
      <section className="flex min-h-screen flex-col px-5 py-6 sm:px-10 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between lg:justify-end">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 lg:hidden"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <Link
            to="/register"
            className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
          >
            Create account
            <ArrowRight size={15} className="ml-1 inline" />
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
          <Link
            to="/"
            className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            Back to website
          </Link>

          <div className="mb-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20">
              <LockKeyhole size={26} />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Welcome back
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Sign in to your account
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Enter your credentials below to continue where you left off.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-indigo-600"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 accent-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="rememberMe"
                className="cursor-pointer text-sm text-slate-600"
              >
                Remember me
              </label>
            </div>

            {/* Error message */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-700"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-4 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              New here?
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <Link
            to="/register"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Create a new account
            <ArrowRight size={17} />
          </Link>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-indigo-600"
            />
            <p className="text-xs leading-6 text-slate-500">
              Keep your password private. Authentication and account security
              should be handled by your backend.
            </p>
          </div>
        </div>

        <div className="pb-2 text-center text-xs leading-6 text-slate-400">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="font-medium text-slate-600 hover:text-indigo-600">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="font-medium text-slate-600 hover:text-indigo-600">
            Privacy Policy
          </Link>
          .
        </div>
      </section>
    </div>
  );
}
