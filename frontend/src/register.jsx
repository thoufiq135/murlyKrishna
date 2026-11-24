
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
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

    if (formData.fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      // TODO: Connect your registration API here.
      //
      // Example:
      // const response = await fetch("YOUR_BACKEND_URL/api/auth/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: formData.fullName,
      //     email: formData.email,
      //     password: formData.password,
      //   }),
      // });
      //
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || "Registration failed.");
      // }
      //
      // navigate("/login");

      setError(
        "Registration API is not connected yet. Connect your backend to create an account."
      );
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const passwordChecks = [
    {
      label: "At least 8 characters",
      valid: formData.password.length >= 8,
    },
    {
      label: "Passwords match",
      valid:
        formData.confirmPassword.length > 0 &&
        formData.password === formData.confirmPassword,
    },
  ];

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
            Join a growing community
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-6xl">
            Your journey.
            <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Your people.
            </span>
            Your possibilities.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 xl:text-lg">
            Create your account and start connecting with people, discovering
            opportunities, and sharing what you know.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Build meaningful professional connections",
              "Discover news, events, and shared interests",
              "Learn, collaborate, and grow together",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-400/15 text-indigo-300">
                  <CheckCircle2 size={15} />
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
            Built for meaningful connections
          </span>
        </div>
      </section>

      {/* Registration form */}
      <section className="flex min-h-screen flex-col px-5 py-6 sm:px-10 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between lg:justify-end">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 lg:hidden"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <div className="text-sm text-slate-600">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <Link
            to="/"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            Back to website
          </Link>

          <div className="mb-7">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20">
              <UserRound size={27} />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Get started for free
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Create your account
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Join the community and start building meaningful connections.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full name
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

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
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
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

            {/* Confirm password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((previous) => !previous)
                  }
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-indigo-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Password checklist */}
            {formData.password.length > 0 && (
              <div className="space-y-2 rounded-xl bg-slate-50 p-3">
                {passwordChecks.map((check) => (
                  <div
                    key={check.label}
                    className={`flex items-center gap-2 text-xs ${
                      check.valid ? "text-emerald-700" : "text-slate-500"
                    }`}
                  >
                    <CheckCircle2 size={15} />
                    {check.label}
                  </div>
                ))}
              </div>
            )}

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="agreeToTerms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-indigo-600 focus:ring-indigo-500"
              />

              <label
                htmlFor="agreeToTerms"
                className="cursor-pointer text-sm leading-6 text-slate-600"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Error */}
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
              {loading ? "Creating account..." : "Create account"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-indigo-600"
            />
            <p className="text-xs leading-6 text-slate-500">
              Your account details should be securely processed by your
              backend. Never store plain-text passwords.
            </p>
          </div>
        </div>

        <div className="pb-2 text-center text-xs leading-6 text-slate-400">
          © {new Date().getFullYear()} YourCommunity. All rights reserved.
        </div>
      </section>
    </div>
  );
}
