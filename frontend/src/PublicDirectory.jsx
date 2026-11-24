import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Users,
  ArrowRight,
  SlidersHorizontal,
  UserRound,
  X,
  ShieldCheck,
  Building2,
  GraduationCap,
  Heart,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const members = [
  {
    id: 1,
    name: "Ananya Rao",
    role: "Software Engineer",
    city: "Hyderabad",
    profession: "Technology",
    initials: "AR",
    color: "from-indigo-500 to-violet-500",
    organization: "Technology",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Business Owner",
    city: "Nellore",
    profession: "Business",
    initials: "RK",
    color: "from-emerald-500 to-teal-500",
    organization: "Entrepreneurship",
  },
  {
    id: 3,
    name: "Priya Reddy",
    role: "Doctor",
    city: "Vijayawada",
    profession: "Healthcare",
    initials: "PR",
    color: "from-rose-500 to-pink-500",
    organization: "Healthcare",
  },
  {
    id: 4,
    name: "Kiran Sharma",
    role: "Civil Engineer",
    city: "Chennai",
    profession: "Engineering",
    initials: "KS",
    color: "from-amber-500 to-orange-500",
    organization: "Engineering",
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "Teacher",
    city: "Nellore",
    profession: "Education",
    initials: "MP",
    color: "from-sky-500 to-blue-500",
    organization: "Education",
  },
  {
    id: 6,
    name: "Arjun Varma",
    role: "Entrepreneur",
    city: "Bengaluru",
    profession: "Business",
    initials: "AV",
    color: "from-fuchsia-500 to-purple-500",
    organization: "Entrepreneurship",
  },
  {
    id: 7,
    name: "Sneha Reddy",
    role: "Data Analyst",
    city: "Hyderabad",
    profession: "Technology",
    initials: "SR",
    color: "from-cyan-500 to-blue-500",
    organization: "Technology",
  },
  {
    id: 8,
    name: "Vikram Rao",
    role: "Financial Consultant",
    city: "Chennai",
    profession: "Finance",
    initials: "VR",
    color: "from-orange-500 to-red-500",
    organization: "Finance",
  },
  {
    id: 9,
    name: "Divya Kumar",
    role: "Pharmacist",
    city: "Vijayawada",
    profession: "Healthcare",
    initials: "DK",
    color: "from-violet-500 to-indigo-500",
    organization: "Healthcare",
  },
];

const professions = [
  "All professions",
  "Technology",
  "Business",
  "Healthcare",
  "Engineering",
  "Education",
  "Finance",
];

const locations = [
  "All locations",
  "Nellore",
  "Hyderabad",
  "Vijayawada",
  "Chennai",
  "Bengaluru",
];

export default function PublicDirectory() {
  const [search, setSearch] = useState("");
  const [profession, setProfession] = useState("All professions");
  const [location, setLocation] = useState("All locations");
  const [selectedMember, setSelectedMember] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredMembers = useMemo(() => {
    const term = search.trim().toLowerCase();

    return members.filter((member) => {
      const matchesSearch =
        !term ||
        `${member.name} ${member.role} ${member.city} ${member.profession}`
          .toLowerCase()
          .includes(term);

      const matchesProfession =
        profession === "All professions" ||
        member.profession === profession;

      const matchesLocation =
        location === "All locations" || member.city === location;

      return matchesSearch && matchesProfession && matchesLocation;
    });
  }, [search, profession, location]);

  const resetFilters = () => {
    setSearch("");
    setProfession("All professions");
    setLocation("All locations");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-bold text-indigo-700 shadow-sm">
            <Users size={16} />
            Community directory
          </span>

          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Your community.
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Your connections.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Discover community members, explore different professions, and
                connect with people who share your roots and interests.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white bg-white/80 p-5 shadow-lg shadow-indigo-100/50 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">
                  {filteredMembers.length.toString().padStart(2, "0")}
                </p>
                <p className="text-sm text-slate-500">Profiles displayed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="relative z-10 -mt-1 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100">
              <Search size={21} className="shrink-0 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, profession, or city..."
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-slate-400 sm:text-base"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              )}
            </label>

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-4 font-semibold transition ${
                showFilters
                  ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:text-indigo-700"
              }`}
            >
              <SlidersHorizontal size={19} />
              Filters
              <ChevronDown
                size={17}
                className={`transition ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Profession
                </span>
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  {professions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  {locations.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredMembers.length}
              </span>{" "}
              of {members.length} sample profiles
            </p>

            {(search ||
              profession !== "All professions" ||
              location !== "All locations") && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-bold text-indigo-600 transition hover:text-indigo-800"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Member cards */}
      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Find your people
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Community members
              </h2>
            </div>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck size={16} className="text-emerald-600" />
              Demo profiles · Sample information
            </span>
          </div>

          {filteredMembers.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member, index) => (
                <article
                  key={member.id}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className="animate-fade-up group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-xl font-black text-white shadow-lg transition duration-300 group-hover:scale-105`}
                    >
                      {member.initials}
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      Demo profile
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold transition group-hover:text-indigo-700">
                    {member.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <BriefcaseBusiness
                      size={16}
                      className="shrink-0 text-indigo-500"
                    />
                    {member.role}
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} className="shrink-0" />
                    {member.city}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700">
                      <Building2 size={14} />
                      {member.profession}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 transition hover:gap-2"
                    >
                      View profile
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                <Search size={30} />
              </div>

              <h3 className="mt-5 text-xl font-bold">No members found</h3>

              <p className="mt-2 text-slate-500">
                Try a different search term or adjust your filters.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
              >
                Reset search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join banner */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 px-7 py-10 text-white sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />

          <div className="relative z-10 flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <Heart size={16} />
                Your connection starts here
              </p>

              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                Your profile belongs here.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-indigo-100">
                Join the community to create your profile and connect with
                people who share your interests.
              </p>
            </div>

            <Link
              to="/register"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-indigo-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
            >
              Join the community
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Profile details modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedMember(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-dialog-title"
            className="animate-fade-up w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedMember.color} text-xl font-black text-white`}
              >
                {selectedMember.initials}
              </div>

              <button
                type="button"
                aria-label="Close profile"
                onClick={() => setSelectedMember(null)}
                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X size={21} />
              </button>
            </div>

            <h2
              id="member-dialog-title"
              className="mt-5 text-2xl font-black"
            >
              {selectedMember.name}
            </h2>

            <p className="mt-2 text-slate-600">{selectedMember.role}</p>

            <div className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-4">
              <p className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={17} className="text-indigo-600" />
                {selectedMember.city}
              </p>

              <p className="flex items-center gap-3 text-sm text-slate-600">
                <Building2 size={17} className="text-indigo-600" />
                {selectedMember.organization}
              </p>

              <p className="flex items-center gap-3 text-sm text-slate-600">
                <ShieldCheck size={17} className="text-indigo-600" />
                Sample demonstration profile
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              In the live platform, member profile visibility and contact
              options should follow the member's privacy settings.
            </p>

            <Link
              to="/login"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-bold text-white transition hover:bg-indigo-700"
            >
              Sign in to connect
              <ArrowRight size={17} />
            </Link>

            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
