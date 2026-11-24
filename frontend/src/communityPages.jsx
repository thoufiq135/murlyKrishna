
import { useMemo, useState } from "react";
import {
  Users,
  Network,
  CreditCard,
  Heart,
  Store,
  Briefcase,
  HandHeart,
  Church,
  Search,
  MapPin,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Building2,
  Filter,
  Sparkles,
  Mail,
  Phone,
  Globe,
  ShieldCheck,
  Share2,
  CheckCircle2,
  UserRound,
  GraduationCap,
  ChevronRight,
  X,
  Star,
} from "lucide-react";

const theme =
  "from-indigo-950 via-indigo-900 to-violet-900";

const pageData = {
  family: {
    eyebrow: "Your roots, your story",
    title: "Family Tree",
    subtitle:
      "Explore your family connections, celebrate your heritage, and keep generations connected.",
    icon: Network,
    stats: [
      ["Family members", "12"],
      ["Generations", "3"],
      ["Family branches", "4"],
    ],
    filters: ["All", "Parents", "Siblings", "Children", "Relatives"],
    items: [
      {
        title: "Ramesh Kumar",
        subtitle: "Father",
        category: "Parents",
        location: "Nellore, Andhra Pradesh",
        description: "Family elder and primary family contact.",
        initials: "RK",
        tags: ["Parent", "Generation 1"],
      },
      {
        title: "Lakshmi Devi",
        subtitle: "Mother",
        category: "Parents",
        location: "Nellore, Andhra Pradesh",
        description: "Family member and community volunteer.",
        initials: "LD",
        tags: ["Parent", "Generation 1"],
      },
      {
        title: "Arjun Kumar",
        subtitle: "Brother",
        category: "Siblings",
        location: "Hyderabad, Telangana",
        description: "Technology professional.",
        initials: "AK",
        tags: ["Sibling", "Generation 2"],
      },
      {
        title: "Priya Kumar",
        subtitle: "Sister",
        category: "Siblings",
        location: "Chennai, Tamil Nadu",
        description: "Education professional.",
        initials: "PK",
        tags: ["Sibling", "Generation 2"],
      },
      {
        title: "Ananya Kumar",
        subtitle: "Daughter",
        category: "Children",
        location: "Nellore, Andhra Pradesh",
        description: "A new generation in the family.",
        initials: "AK",
        tags: ["Child", "Generation 3"],
      },
      {
        title: "Suresh Reddy",
        subtitle: "Uncle",
        category: "Relatives",
        location: "Tirupati, Andhra Pradesh",
        description: "Extended family connection.",
        initials: "SR",
        tags: ["Relative", "Family branch"],
      },
    ],
  },

  matrimony: {
    eyebrow: "Meaningful connections",
    title: "Matrimony",
    subtitle:
      "Discover compatible profiles and take the first step toward a meaningful relationship.",
    icon: Heart,
    stats: [
      ["Profiles", "24"],
      ["New this month", "8"],
      ["Your interests", "3"],
    ],
    filters: ["All", "Technology", "Business", "Healthcare", "Education"],
    items: [
      {
        title: "Priya Sharma",
        subtitle: "Software Engineer",
        category: "Technology",
        location: "Hyderabad, Andhra Pradesh",
        description:
          "Enjoys travel, reading, technology, and spending time with family.",
        initials: "PS",
        tags: ["28 years", "Graduate", "Never married"],
      },
      {
        title: "Ananya Reddy",
        subtitle: "Doctor",
        category: "Healthcare",
        location: "Chennai, Tamil Nadu",
        description:
          "Values family, personal growth, community, and a balanced lifestyle.",
        initials: "AR",
        tags: ["27 years", "Medical", "Never married"],
      },
      {
        title: "Meera Kumar",
        subtitle: "Lecturer",
        category: "Education",
        location: "Vijayawada, Andhra Pradesh",
        description:
          "Interested in education, music, cultural activities, and travel.",
        initials: "MK",
        tags: ["26 years", "Postgraduate", "Never married"],
      },
      {
        title: "Kavya Rao",
        subtitle: "Business Professional",
        category: "Business",
        location: "Bengaluru, Karnataka",
        description:
          "Entrepreneurial, family-oriented, and passionate about social impact.",
        initials: "KR",
        tags: ["29 years", "MBA", "Never married"],
      },
    ],
  },

  businesses: {
    eyebrow: "Local talent. Shared success.",
    title: "Business Directory",
    subtitle:
      "Discover community-owned businesses, find service providers, and build valuable partnerships.",
    icon: Store,
    stats: [
      ["Businesses", "120"],
      ["Categories", "14"],
      ["Cities", "9"],
    ],
    filters: [
      "All",
      "Technology",
      "Retail",
      "Healthcare",
      "Manufacturing",
      "Professional Services",
    ],
    items: [
      {
        title: "NextWave Technologies",
        subtitle: "IT & Software",
        category: "Technology",
        location: "Nellore, Andhra Pradesh",
        description:
          "Software development, web applications, and digital transformation services.",
        initials: "NW",
        tags: ["Software", "B2B"],
      },
      {
        title: "Sri Lakshmi Traders",
        subtitle: "Wholesale & Retail",
        category: "Retail",
        location: "Tirupati, Andhra Pradesh",
        description:
          "Retail distribution and wholesale supply for local businesses.",
        initials: "SL",
        tags: ["Wholesale", "Retail"],
      },
      {
        title: "HealthyLife Clinic",
        subtitle: "Healthcare",
        category: "Healthcare",
        location: "Chennai, Tamil Nadu",
        description:
          "Community-focused healthcare and wellness services.",
        initials: "HL",
        tags: ["Healthcare", "Services"],
      },
      {
        title: "Precision Manufacturing",
        subtitle: "Industrial Services",
        category: "Manufacturing",
        location: "Sri City, Andhra Pradesh",
        description:
          "Manufacturing support and industrial production services.",
        initials: "PM",
        tags: ["Industrial", "B2B"],
      },
      {
        title: "GrowthPoint Consulting",
        subtitle: "Business Consulting",
        category: "Professional Services",
        location: "Hyderabad, Telangana",
        description:
          "Business strategy, operations, and growth consulting.",
        initials: "GP",
        tags: ["Consulting", "Strategy"],
      },
    ],
  },

  jobs: {
    eyebrow: "Your next opportunity",
    title: "Jobs & Careers",
    subtitle:
      "Explore opportunities, connect with employers, and take the next step in your career.",
    icon: Briefcase,
    stats: [
      ["Open positions", "86"],
      ["Companies", "32"],
      ["New this week", "12"],
    ],
    filters: [
      "All",
      "Technology",
      "Engineering",
      "Marketing",
      "Finance",
      "Healthcare",
    ],
    items: [
      {
        title: "Frontend Developer",
        subtitle: "NextWave Technologies",
        category: "Technology",
        location: "Hyderabad, Telangana",
        description:
          "Build responsive web applications using React, JavaScript, and modern frontend tools.",
        initials: "NW",
        tags: ["Full-time", "React", "2+ years"],
      },
      {
        title: "Mechanical Engineer",
        subtitle: "Precision Manufacturing",
        category: "Engineering",
        location: "Sri City, Andhra Pradesh",
        description:
          "Support production operations, quality control, and process improvement.",
        initials: "PM",
        tags: ["Full-time", "On-site", "Graduate"],
      },
      {
        title: "Digital Marketing Executive",
        subtitle: "BrandStory Media",
        category: "Marketing",
        location: "Bengaluru, Karnataka",
        description:
          "Manage campaigns, social media, and marketing analytics.",
        initials: "BS",
        tags: ["Full-time", "Marketing", "1+ years"],
      },
      {
        title: "Accounts Executive",
        subtitle: "GrowthPoint Consulting",
        category: "Finance",
        location: "Nellore, Andhra Pradesh",
        description:
          "Support bookkeeping, reconciliations, reporting, and financial records.",
        initials: "GP",
        tags: ["Full-time", "Finance", "Excel"],
      },
      {
        title: "Healthcare Coordinator",
        subtitle: "HealthyLife Clinic",
        category: "Healthcare",
        location: "Chennai, Tamil Nadu",
        description:
          "Coordinate patient services and support daily clinic operations.",
        initials: "HL",
        tags: ["Full-time", "Healthcare", "On-site"],
      },
    ],
  },

  welfare: {
    eyebrow: "Care that brings us together",
    title: "Community Welfare",
    subtitle:
      "Find support initiatives, discover assistance programs, and contribute to community wellbeing.",
    icon: HandHeart,
    stats: [
      ["Programs", "8"],
      ["Community initiatives", "16"],
      ["Volunteer opportunities", "12"],
    ],
    filters: [
      "All",
      "Education",
      "Healthcare",
      "Emergency Support",
      "Employment",
    ],
    items: [
      {
        title: "Student Education Support",
        subtitle: "Education Assistance",
        category: "Education",
        location: "Andhra Pradesh",
        description:
          "A sample initiative for students seeking educational resources and financial assistance.",
        initials: "ES",
        tags: ["Students", "Applications"],
      },
      {
        title: "Community Health Camp",
        subtitle: "Healthcare Initiative",
        category: "Healthcare",
        location: "Nellore, Andhra Pradesh",
        description:
          "A sample community health program focused on awareness and access to care.",
        initials: "HC",
        tags: ["Health", "Volunteers"],
      },
      {
        title: "Emergency Relief Network",
        subtitle: "Community Assistance",
        category: "Emergency Support",
        location: "Andhra Pradesh",
        description:
          "A sample initiative for coordinating community support during emergencies.",
        initials: "ER",
        tags: ["Relief", "Support"],
      },
      {
        title: "Career Readiness Program",
        subtitle: "Skills & Employment",
        category: "Employment",
        location: "Online and local centers",
        description:
          "A sample program for career guidance, resume preparation, and interview practice.",
        initials: "CR",
        tags: ["Careers", "Training"],
      },
    ],
  },

  spiritual: {
    eyebrow: "Faith, culture & belonging",
    title: "Spiritual Community",
    subtitle:
      "Explore spiritual gatherings, cultural celebrations, community events, and shared traditions.",
    icon: Church,
    stats: [
      ["Community events", "12"],
      ["Resources", "24"],
      ["Local groups", "6"],
    ],
    filters: [
      "All",
      "Events",
      "Prayer & Worship",
      "Culture",
      "Learning",
    ],
    items: [
      {
        title: "Community Prayer Gathering",
        subtitle: "Prayer & Worship",
        category: "Prayer & Worship",
        location: "Nellore, Andhra Pradesh",
        description:
          "A sample gathering for reflection, prayer, and connection with community members.",
        initials: "PG",
        tags: ["Community", "Gathering"],
      },
      {
        title: "Festival Celebration",
        subtitle: "Cultural Event",
        category: "Events",
        location: "Tirupati, Andhra Pradesh",
        description:
          "Celebrate shared traditions and bring families together through cultural activities.",
        initials: "FC",
        tags: ["Festival", "Families"],
      },
      {
        title: "Cultural Heritage Library",
        subtitle: "Learning Resources",
        category: "Learning",
        location: "Online",
        description:
          "A sample collection of educational resources about cultural heritage and traditions.",
        initials: "HL",
        tags: ["Learning", "Resources"],
      },
      {
        title: "Heritage & Traditions",
        subtitle: "Culture",
        category: "Culture",
        location: "Community-wide",
        description:
          "Discover community stories, traditions, and opportunities to learn from elders.",
        initials: "HT",
        tags: ["Heritage", "Traditions"],
      },
    ],
  },
};

const familyTree = [
  [
    {
      name: "Ramesh Kumar",
      relation: "Father",
      initials: "RK",
      color: "from-indigo-500 to-violet-600",
    },
    {
      name: "Lakshmi Devi",
      relation: "Mother",
      initials: "LD",
      color: "from-pink-500 to-rose-500",
    },
  ],
  [
    {
      name: "Arjun Kumar",
      relation: "Brother",
      initials: "AK",
      color: "from-sky-500 to-blue-600",
    },
    {
      name: "You",
      relation: "Your profile",
      initials: "CM",
      color: "from-indigo-600 to-violet-700",
    },
    {
      name: "Priya Kumar",
      relation: "Sister",
      initials: "PK",
      color: "from-fuchsia-500 to-purple-600",
    },
  ],
  [
    {
      name: "Ananya Kumar",
      relation: "Next generation",
      initials: "AK",
      color: "from-emerald-500 to-teal-600",
    },
  ],
];

function PageHero({ data }) {
  const Icon = data.icon;

  return (
    <section className={`relative isolate overflow-hidden bg-gradient-to-br ${theme}`}>
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100">
          <Sparkles size={15} />
          {data.eyebrow}
        </div>

        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-indigo-100/80 sm:text-lg">
              {data.subtitle}
            </p>
          </div>

          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur">
            <Icon size={36} strokeWidth={1.6} />
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {data.stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="mt-1 text-sm text-indigo-100/75">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectoryCards({ data }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [notice, setNotice] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return data.items.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [data, search, category]);

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Explore the directory
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Discover and connect
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`Search ${data.title.toLowerCase()}...`}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {data.filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setCategory(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  category === filter
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filtered.length ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400" />
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-100">
                      {item.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-700">
                        {item.category}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 flex items-start gap-2 text-sm text-slate-500">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-500" />
                    {item.location}
                  </p>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelected(item)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
                  >
                    View details
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Search className="mx-auto text-slate-400" size={30} />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No results found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-4 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Reset filters
            </button>
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-950 to-violet-900 p-7 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-200">
                <Sparkles size={16} />
                Grow together
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white">
                Stay connected to your community.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-indigo-100/75">
                Discover new connections and make the most of your community network.
              </p>
            </div>
            <button
              onClick={() => showNotice("This action can be connected to your backend next.")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-indigo-900 transition hover:bg-indigo-50"
            >
              Get started
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>

      {notice && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[70] rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-xl"
        >
          {notice}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative bg-gradient-to-br from-indigo-950 to-violet-900 p-6 text-white">
              <button
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold">
                {selected.initials}
              </div>
              <h2 className="mt-4 pr-10 text-2xl font-bold">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-indigo-100/80">
                {selected.subtitle}
              </p>
            </div>

            <div className="p-6">
              <span className="inline-flex rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
                {selected.category}
              </span>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {selected.description}
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={17} className="text-indigo-600" />
                {selected.location}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                Demo content: connect the relevant API to load verified, live information.
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function FamilyTree() {
  const [notice, setNotice] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero data={pageData.family} />

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Generations connected
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Your family structure
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A sample family tree to demonstrate the layout.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="min-w-[540px] space-y-8">
            {familyTree.map((generation, index) => (
              <div key={index}>
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Generation {index + 1}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {generation.map((person) => (
                    <div
                      key={person.name}
                      className={`w-44 rounded-2xl border p-4 text-center transition hover:-translate-y-1 hover:shadow-lg ${
                        person.relation === "Your profile"
                          ? "border-indigo-200 bg-indigo-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${person.color} font-bold text-white shadow-md`}>
                        {person.initials}
                      </div>
                      <p className="mt-3 font-bold text-slate-900">
                        {person.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-indigo-600">
                        {person.relation}
                      </p>
                    </div>
                  ))}
                </div>
                {index < familyTree.length - 1 && (
                  <div className="mt-5 flex justify-center">
                    <div className="h-7 w-px bg-indigo-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
          <div className="flex items-start gap-3">
            <Network className="mt-1 text-indigo-600" size={22} />
            <div>
              <h3 className="font-bold text-indigo-950">Expand your family tree</h3>
              <p className="mt-1 text-sm leading-6 text-indigo-800/80">
                Add relatives, record relationships, and build a complete family tree when your member data is connected.
              </p>
              <button
                onClick={() => setNotice("Family member creation can be connected to your backend.")}
                className="mt-3 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Add family member
              </button>
            </div>
          </div>
        </div>

        {notice && (
          <p role="status" className="mt-4 text-sm text-indigo-700">
            {notice}
          </p>
        )}
      </main>
    </div>
  );
}

export function DigitalID() {
  const [showBack, setShowBack] = useState(false);
  const [notice, setNotice] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        data={{
          ...pageData.family,
          title: "Digital Member ID",
          eyebrow: "Your identity, always with you",
          subtitle:
            "View your digital membership card and access your community identity information.",
          icon: CreditCard,
          stats: [
            ["Membership", "Standard"],
            ["Member since", "2024"],
            ["Verification", "Pending"],
          ],
        }}
      />

      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="grid items-start gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Your membership card
              </h2>
              <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                Demo ID
              </span>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-800 text-white shadow-2xl shadow-indigo-200">
              <div className="relative overflow-hidden p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[30px] border-white/5" />
                <div className="pointer-events-none absolute -bottom-20 right-16 h-48 w-48 rounded-full bg-violet-500/20 blur-2xl" />

                <div className="relative flex items-center justify-between gap-3 border-b border-white/15 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                      <Users size={23} />
                    </div>
                    <div>
                      <p className="font-bold tracking-wide">COMMUNITY NETWORK</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                        Digital membership card
                      </p>
                    </div>
                  </div>
                  <ShieldCheck size={27} className="text-indigo-200" />
                </div>

                {showBack ? (
                  <div className="relative py-8">
                    <p className="text-xs uppercase tracking-widest text-indigo-200">
                      Membership terms
                    </p>
                    <p className="mt-3 text-sm leading-7 text-indigo-50/90">
                      This demo card illustrates the membership ID design. Official validity, verification, and membership benefits must be confirmed by the platform.
                    </p>
                    <p className="mt-5 text-xs text-indigo-200">
                      Issue date: To be assigned
                    </p>
                  </div>
                ) : (
                  <div className="relative flex items-center gap-5 py-7">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-bold">
                      CM
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-indigo-200">
                        Member name
                      </p>
                      <h2 className="mt-1 text-2xl font-bold">Community Member</h2>
                      <p className="mt-3 text-xs uppercase tracking-widest text-indigo-200">
                        Membership ID
                      </p>
                      <p className="mt-1 font-mono text-sm tracking-wider">
                        CN-DEMO-0001
                      </p>
                    </div>
                  </div>
                )}

                <div className="relative flex items-end justify-between border-t border-white/15 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-indigo-200">
                      Status
                    </p>
                    <p className="mt-1 text-sm font-semibold">Demo / Unverified</p>
                  </div>
                  <div className="rounded-xl bg-white p-2 text-center text-[9px] font-bold text-indigo-950">
                    QR
                    <br />
                    DEMO
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setShowBack((value) => !value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {showBack ? "View front" : "View back"}
              </button>
              <button
                onClick={() => setNotice("Connect an official ID generation service to enable card downloads.")}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <CreditCard size={17} />
                Download ID
              </button>
              <button
                onClick={() => setNotice("ID sharing will be enabled after verification is connected.")}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <Share2 size={17} />
                Share
              </button>
            </div>
            {notice && (
              <p role="status" className="mt-4 text-sm text-indigo-700">
                {notice}
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Membership information
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Sample profile information
            </p>
            <div className="mt-6 space-y-5">
              {[
                ["Full name", "Community Member"],
                ["Member ID", "CN-DEMO-0001"],
                ["Membership type", "Standard"],
                ["Email", "Not connected"],
                ["Phone", "Not connected"],
                ["Verification", "Pending"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 last:border-0"
                >
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="text-right text-sm font-semibold text-slate-800">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">
              This is a visual demo, not an official or valid identity document.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function Matrimony() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero data={pageData.matrimony} />
      <DirectoryCards data={pageData.matrimony} />
    </div>
  );
}

export function MatrimonyManage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    profession: "",
    education: "",
    location: "",
    about: "",
    contact: "",
  });
  const [notice, setNotice] = useState("");

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    setNotice(
      "Your profile is validated in this demo. Connect your API to save it permanently."
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        data={{
          ...pageData.matrimony,
          title: "Manage Matrimony Profile",
          eyebrow: "Your profile, your preferences",
          subtitle:
            "Create and update your profile information to help potential matches learn about you.",
          icon: UserRound,
          stats: [
            ["Profile status", "Draft"],
            ["Visibility", "Not published"],
            ["Action", "Complete profile"],
          ],
        }}
      />

      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:py-14">
        <form
          onSubmit={submit}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >
          <div className="mb-7 border-b border-slate-100 pb-5">
            <h2 className="text-xl font-bold text-slate-900">
              Basic profile details
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter the information you want to include in your matrimony profile.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["name", "Full name", "e.g. Priya Sharma", "text"],
              ["age", "Age", "e.g. 28", "number"],
              ["profession", "Profession", "e.g. Software Engineer", "text"],
              ["education", "Education", "e.g. B.Tech / MBA", "text"],
              ["location", "Current location", "City, State", "text"],
              ["contact", "Contact email", "you@example.com", "email"],
            ].map(([name, label, placeholder, type]) => (
              <label key={name} className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  {label}
                </span>
                <input
                  name={name}
                  type={type}
                  min={type === "number" ? 18 : undefined}
                  max={type === "number" ? 100 : undefined}
                  required
                  value={form[name]}
                  onChange={update}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </label>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              About you
            </span>
            <textarea
              name="about"
              required
              minLength={20}
              rows={5}
              value={form.about}
              onChange={update}
              placeholder="Tell others about your interests, values, family, and goals..."
              className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />
          </label>

          <div className="mt-6 rounded-xl bg-indigo-50 p-4">
            <div className="flex gap-3">
              <ShieldCheck className="shrink-0 text-indigo-600" size={22} />
              <div>
                <h3 className="font-semibold text-indigo-950">
                  Privacy matters
                </h3>
                <p className="mt-1 text-sm leading-6 text-indigo-800/80">
                  Only share information you are comfortable making available to other members. Add privacy and visibility controls before production.
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
          >
            Validate profile
          </button>

          {notice && (
            <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
              {notice}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export function Businesses() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero data={pageData.businesses} />
      <DirectoryCards data={pageData.businesses} />
    </div>
  );
}

export function Jobs() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero data={pageData.jobs} />
      <DirectoryCards data={pageData.jobs} />
    </div>
  );
}

export function Welfare() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero data={pageData.welfare} />
      <DirectoryCards data={pageData.welfare} />
    </div>
  );
}

export function Spiritual() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero data={pageData.spiritual} />
      <DirectoryCards data={pageData.spiritual} />
    </div>
  );
}
