

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Camera,
  ArrowRight,
  ArrowLeft,
  BriefcaseBusiness,
  MapPin,
  Globe,

  Code2,
  FileText,
  CheckCircle2,
  Sparkles,
  X,
  ShieldCheck,
} from "lucide-react";

const initialForm = {
  fullName: "",
  headline: "",
  profession: "",
  organization: "",
  location: "",
  bio: "",
  website: "",
  linkedin: "",
  github: "",
  interests: [],
};

const interestOptions = [
  "Technology",
  "Artificial Intelligence",
  "Business",
  "Entrepreneurship",
  "Design",
  "Education",
  "Research",
  "Marketing",
  "Finance",
  "Community Building",
  "IoT & Robotics",
  "Startups",
];

export default function ProfileSetup() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState(initialForm);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const toggleInterest = (interest) => {
    setFormData((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter((item) => item !== interest)
        : [...previous.interests, interest],
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Your profile picture must be smaller than 5 MB.");
      return;
    }

    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
    setError("");
  };

  const removeAvatar = () => {
    if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    setAvatarPreview("");
    setAvatarFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.headline.trim()) {
      setError("Please add a short professional headline.");
      return;
    }

    if (formData.bio.length > 300) {
      setError("Your bio must be 300 characters or fewer.");
      return;
    }

    setLoading(true);

    try {
      // TODO: Connect your profile API here.
      //
      // For image uploads, FormData can carry both profile fields
      // and the avatar file:
      //
      // const payload = new FormData();
      // payload.append("fullName", formData.fullName);
      // payload.append("headline", formData.headline);
      // payload.append("profession", formData.profession);
      // payload.append("organization", formData.organization);
      // payload.append("location", formData.location);
      // payload.append("bio", formData.bio);
      // payload.append("website", formData.website);
      // payload.append("linkedin", formData.linkedin);
      // payload.append("github", formData.github);
      // payload.append("interests", JSON.stringify(formData.interests));
      // if (avatarFile) payload.append("avatar", avatarFile);
      //
      // Call your authenticated profile API with `payload`.
      // Navigate only after the server confirms success.

      setError(
        "Profile API is not connected yet. Connect your backend to save your profile."
      );
    } catch (err) {
      setError(err.message || "Unable to save your profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20">
              <Sparkles size={21} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-950">
              YourCommunity
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            Exit setup
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Page heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <UserRound size={27} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            Make it yours
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Set up your profile
          </h1>

          <p className="mt-4 leading-7 text-slate-500">
            Introduce yourself to the community. Share what you do, what
            interests you, and how people can connect with you.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2">
            <div className="h-2 w-10 rounded-full bg-indigo-600" />
            <div className="h-2 w-10 rounded-full bg-indigo-200" />
            <div className="h-2 w-10 rounded-full bg-indigo-200" />
          </div>
          <p className="mt-2 text-xs text-slate-400">Profile setup</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          {/* Avatar section */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-6 sm:p-9">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-indigo-100 text-indigo-600 shadow-lg">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound size={44} />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Upload profile picture"
                  className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-white shadow transition hover:bg-indigo-700"
                >
                  <Camera size={17} />
                </button>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-lg font-bold text-slate-900">
                  Your profile photo
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Add a photo so community members can recognize you.
                  JPG, PNG, or another supported image format, up to 5 MB.
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-3 sm:justify-start">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                  >
                    <Camera size={15} />
                    Upload photo
                  </button>

                  {avatarPreview && (
                    <button
                      type="button"
                      onClick={removeAvatar}
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-rose-600"
                    >
                      <X size={15} />
                      Remove
                    </button>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="space-y-9 p-6 sm:p-9">
            {/* Basic information */}
            <section>
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Basic information
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Tell people who you are.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={updateField}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="headline"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Professional headline{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="headline"
                    name="headline"
                    required
                    maxLength={100}
                    value={formData.headline}
                    onChange={updateField}
                    placeholder="e.g. Software Developer"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="profession"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Profession
                  </label>
                  <div className="relative">
                    <BriefcaseBusiness
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={updateField}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pl-11 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="">Select your profession</option>
                      <option value="Student">Student</option>
                      <option value="Software Developer">
                        Software Developer
                      </option>
                      <option value="Engineer">Engineer</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Designer">Designer</option>
                      <option value="Educator">Educator</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Business Professional">
                        Business Professional
                      </option>
                      <option value="Marketing Professional">
                        Marketing Professional
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company or institution
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={updateField}
                    placeholder="Where do you work or study?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={updateField}
                      placeholder="e.g. Nellore, Andhra Pradesh"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pl-11 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-slate-100" />

            {/* About section */}
            <section>
              <div className="mb-6">
                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <FileText size={19} className="text-indigo-600" />
                  About you
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Share a little about your background and interests.
                </p>
              </div>

              <label
                htmlFor="bio"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                maxLength={300}
                value={formData.bio}
                onChange={updateField}
                placeholder="What do you do? What are you passionate about? What would you like to collaborate on?"
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 leading-7 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
              <p className="mt-2 text-right text-xs text-slate-400">
                {formData.bio.length}/300 characters
              </p>
            </section>

            <div className="h-px bg-slate-100" />

            {/* Interests */}
            <section>
              <div className="mb-5">
                <h2 className="text-lg font-bold text-slate-900">
                  Your interests
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose topics you'd like to explore with the community.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {interestOptions.map((interest) => {
                  const selected = formData.interests.includes(interest);

                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      aria-pressed={selected}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                        selected
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/15"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                      }`}
                    >
                      {selected && <CheckCircle2 size={15} />}
                      {interest}
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs text-slate-400">
                {formData.interests.length} topics selected
              </p>
            </section>

            <div className="h-px bg-slate-100" />

            {/* Social links */}
            <section>
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Online presence
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Optional links so people can learn more about your work.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Personal website
                  </label>
                  <div className="relative">
                    <Globe
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={updateField}
                      placeholder="https://yourwebsite.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pl-11 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    LinkedIn profile
                  </label>
                  <div className="relative">
                    <Globe
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={updateField}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pl-11 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="github"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    GitHub profile
                  </label>
                  <div className="relative">
                    <Code2
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="github"
                      name="github"
                      type="url"
                      value={formData.github}
                      onChange={updateField}
                      placeholder="https://github.com/yourusername"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pl-11 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Error message */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-700"
              >
                {error}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Do this later
              </button>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Saving profile..." : "Save and continue"}
                {!loading && <ArrowRight size={18} />}
              </button>
            </div>

            <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-400">
              <ShieldCheck size={15} />
              Your profile details are handled according to your platform's
              privacy settings.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
