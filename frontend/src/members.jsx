
import { useMemo, useState } from "react";
import {
  Search,
  Users,
  MapPin,
  Briefcase,
  X,
  ArrowUpRight,
  SlidersHorizontal,
  Mail,
  UserRound,
  Heart,
  Globe,
  Sparkles,
  BadgeCheck,
  MessageCircle,
  ChevronDown,
  Building2,
} from "lucide-react";

const members = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "Software Engineer",
    company: "TechNova Solutions",
    location: "Hyderabad, India",
    category: "Technology",
    initials: "AR",
    color: "from-indigo-500 to-violet-600",
    bio: "Passionate about building products, AI, and helping people grow through technology.",
    skills: ["React", "Node.js", "AI"],
    email: "arjun@example.com",
    joined: "2024",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Product Designer",
    company: "Creative Labs",
    location: "Bengaluru, India",
    category: "Design",
    initials: "PS",
    color: "from-pink-500 to-rose-500",
    bio: "Designing meaningful digital experiences with a focus on accessibility and usability.",
    skills: ["UI/UX", "Figma", "Design"],
    email: "priya@example.com",
    joined: "2023",
    featured: true,
  },
  {
    id: 3,
    name: "Rahul Varma",
    role: "Business Consultant",
    company: "Independent",
    location: "Nellore, India",
    category: "Business",
    initials: "RV",
    color: "from-emerald-500 to-teal-600",
    bio: "Helping growing businesses improve their operations, strategy, and customer relationships.",
    skills: ["Strategy", "Sales", "Growth"],
    email: "rahul@example.com",
    joined: "2022",
    featured: false,
  },
  {
    id: 4,
    name: "Sneha Kumar",
    role: "Medical Professional",
    company: "Healthcare Network",
    location: "Chennai, India",
    category: "Healthcare",
    initials: "SK",
    color: "from-sky-500 to-blue-600",
    bio: "Interested in community health initiatives, healthcare innovation, and volunteering.",
    skills: ["Healthcare", "Research", "Community"],
    email: "sneha@example.com",
    joined: "2024",
    featured: false,
  },
  {
    id: 5,
    name: "Vikram Rao",
    role: "Founder & Entrepreneur",
    company: "NextWave Ventures",
    location: "Vijayawada, India",
    category: "Business",
    initials: "VR",
    color: "from-amber-500 to-orange-600",
    bio: "Building businesses, exploring new opportunities, and connecting with ambitious founders.",
    skills: ["Startups", "Leadership", "Marketing"],
    email: "vikram@example.com",
    joined: "2021",
    featured: true,
  },
  {
    id: 6,
    name: "Ananya Reddy",
    role: "Data Analyst",
    company: "Insight Analytics",
    location: "Hyderabad, India",
    category: "Technology",
    initials: "AR",
    color: "from-fuchsia-500 to-purple-600",
    bio: "Turning data into insights and using analytics to solve real-world business problems.",
    skills: ["Python", "SQL", "Analytics"],
    email: "ananya@example.com",
    joined: "2025",
    featured: false,
  },
  {
    id: 7,
    name: "Karthik Naidu",
    role: "Civil Engineer",
    company: "BuildRight Group",
    location: "Tirupati, India",
    category: "Engineering",
    initials: "KN",
    color: "from-cyan-500 to-indigo-600",
    bio: "Interested in sustainable infrastructure, construction innovation, and mentoring students.",
    skills: ["Engineering", "Planning", "Mentoring"],
    email: "karthik@example.com",
    joined: "2023",
    featured: false,
  },
  {
    id: 8,
    name: "Meera Patel",
    role: "Marketing Manager",
    company: "BrandStory",
    location: "Bengaluru, India",
    category: "Marketing",
    initials: "MP",
    color: "from-rose-500 to-violet-600",
    bio: "Helping brands tell better stories through digital strategy and creative campaigns.",
    skills: ["Marketing", "Content", "SEO"],
    email: "meera@example.com",
    joined: "2022",
    featured: false,
  },
];

const categories = [
  "All Members",
  "Technology",
  "Business",
  "Design",
  "Healthcare",
  "Engineering",
  "Marketing",
];

export default function MemberDirectory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Members");
  const [location, setLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("name");
  const [selectedMember, setSelectedMember] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const locations = useMemo(
    () => [
      "All Locations",
      ...new Set(members.map((member) => member.location)),
    ],
    []
  );

  const filteredMembers = useMemo(() => {
    const query = search.toLowerCase().trim();

    let result = members.filter((member) => {
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.company.toLowerCase().includes(query) ||
        member.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesCategory =
        category === "All Members" || member.category === category;

      const matchesLocation =
        location === "All Locations" || member.location === location;

      const matchesFavorite =
        !showFavorites || favorites.includes(member.id);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesFavorite
      );
    });

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "newest") {
      result.sort((a, b) => Number(b.joined) - Number(a.joined));
    } else if (sortBy === "featured") {
      result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [search, category, location, sortBy, favorites, showFavorites]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("All Members");
    setLocation("All Locations");
    setSortBy("name");
    setShowFavorites(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur">
            <Sparkles size={15} />
            Your community, connected
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Meet your people.
                <span className="block bg-gradient-to-r from-indigo-200 to-violet-300 bg-clip-text text-transparent">
                  Grow together.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100/80 sm:text-lg">
                Discover professionals, entrepreneurs, and community
                members. Find meaningful connections and unlock new
                opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#member-list"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
                >
                  Explore members
                  <ArrowUpRight size={18} />
                </a>

                <button
                  onClick={() => setShowFavorites((value) => !value)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition ${
                    showFavorites
                      ? "border-pink-300 bg-pink-500 text-white"
                      : "border-white/20 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={showFavorites ? "currentColor" : "none"}
                  />
                  My saved members
                </button>
              </div>
            </div>

            <div className="hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md lg:block">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Users size={25} />
              </div>
              <p className="text-sm font-medium text-indigo-100/75">
                Community directory
              </p>
              <p className="mt-2 text-4xl font-bold text-white">
                {members.length.toString().padStart(2, "0")}
                <span className="ml-2 text-lg font-medium text-indigo-200">
                  members
                </span>
              </p>
              <div className="my-5 h-px bg-white/15" />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {members.slice(0, 4).map((member) => (
                    <div
                      key={member.id}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-indigo-900 bg-gradient-to-br ${member.color} text-xs font-bold text-white`}
                    >
                      {member.initials}
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-5 text-indigo-100/80">
                  Different talents.
                  <br />
                  One connected community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main
        id="member-list"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"
      >
        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Discover your network
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Community members
            </h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Find the right people to learn, collaborate, and grow with.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 sm:self-auto">
            <Users size={17} className="text-indigo-600" />
            <span>
              <strong className="text-slate-900">
                {filteredMembers.length}
              </strong>{" "}
              {filteredMembers.length === 1 ? "member" : "members"} found
            </span>
          </div>
        </div>

        {/* Search and filters */}
        <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="grid gap-3 md:grid-cols-[1fr_210px_180px]">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, skills, company..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <div className="relative">
              <MapPin
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-9 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
              >
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <SlidersHorizontal
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-10 pr-9 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
              >
                <option value="name">Name: A to Z</option>
                <option value="newest">Recently joined</option>
                <option value="featured">Featured first</option>
              </select>
              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  category === item
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {item}
              </button>
            ))}

            {(search ||
              category !== "All Members" ||
              location !== "All Locations" ||
              showFavorites) && (
              <button
                onClick={resetFilters}
                className="ml-auto inline-flex items-center gap-1.5 px-2 py-2 text-xs font-semibold text-slate-500 hover:text-indigo-600"
              >
                <X size={14} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Member cards */}
        {filteredMembers.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredMembers.map((member) => (
              <article
                key={member.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400" />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3.5">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-lg font-bold text-white shadow-lg shadow-slate-200`}
                      >
                        {member.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <h3 className="truncate font-bold text-slate-900">
                            {member.name}
                          </h3>
                          <BadgeCheck
                            size={16}
                            className="shrink-0 text-indigo-500"
                            aria-label="Sample verified profile"
                          />
                        </div>
                        <p className="mt-1 truncate text-sm text-slate-500">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleFavorite(member.id)}
                      aria-label={
                        favorites.includes(member.id)
                          ? "Remove saved member"
                          : "Save member"
                      }
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                        favorites.includes(member.id)
                          ? "border-pink-100 bg-pink-50 text-pink-600"
                          : "border-slate-100 text-slate-400 hover:border-pink-100 hover:bg-pink-50 hover:text-pink-600"
                      }`}
                    >
                      <Heart
                        size={17}
                        fill={
                          favorites.includes(member.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <p className="flex items-center gap-2 text-sm text-slate-500">
                      <Building2
                        size={16}
                        className="shrink-0 text-slate-400"
                      />
                      <span className="truncate">{member.company}</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin
                        size={16}
                        className="shrink-0 text-slate-400"
                      />
                      <span className="truncate">{member.location}</span>
                    </p>
                  </div>

                  <p className="mt-4 min-h-[60px] text-sm leading-6 text-slate-600">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-400">
                      Member since {member.joined}
                    </span>

                    <button
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                    >
                      View profile
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Users size={26} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No members found
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Try a different search, choose another category, or clear
              your filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom community CTA */}
        <section className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 px-6 py-9 sm:px-10 sm:py-11">
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-200">
                <Sparkles size={16} />
                Your next connection starts here
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Be part of the community.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-indigo-100/75 sm:text-base">
                Complete your profile to help other members discover
                your skills, experience, and interests.
              </p>
            </div>

            <a
              href="/profile-setup"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-indigo-900 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Complete profile
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* Member profile modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-modal-name"
            className="my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div
              className={`relative bg-gradient-to-br ${selectedMember.color} px-6 pb-8 pt-7 text-white`}
            >
              <button
                onClick={() => setSelectedMember(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <X size={19} />
              </button>

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/20 text-2xl font-bold shadow-lg backdrop-blur">
                {selectedMember.initials}
              </div>
              <h2
                id="member-modal-name"
                className="mt-5 text-2xl font-bold"
              >
                {selectedMember.name}
              </h2>
              <p className="mt-1 text-sm text-white/85">
                {selectedMember.role}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
                <BadgeCheck size={14} />
                Sample member profile
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                About
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedMember.bio}
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <Building2 size={18} className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-slate-400">Organization</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-800">
                      {selectedMember.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <MapPin size={18} className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-800">
                      {selectedMember.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <UserRound size={18} className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-slate-400">Community member since</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-800">
                      {selectedMember.joined}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 text-sm font-bold text-slate-800">
                Skills and interests
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedMember.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <Mail size={16} />
                  Email member
                </a>

                <button
                  onClick={() => toggleFavorite(selectedMember.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Heart
                    size={16}
                    fill={
                      favorites.includes(selectedMember.id)
                        ? "currentColor"
                        : "none"
                    }
                    className={
                      favorites.includes(selectedMember.id)
                        ? "text-pink-600"
                        : ""
                    }
                  />
                  {favorites.includes(selectedMember.id)
                    ? "Saved"
                    : "Save member"}
                </button>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                Contact details shown here are demo data. Connect your
                member API before using this page in production.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
