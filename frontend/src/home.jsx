import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Heart,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  HandHeart,
  Network,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Globe,
  Building2,
  HeartHandshake,
  CircleUserRound,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community Directory",
    description:
      "Discover community members, connect with families, and build meaningful relationships.",
    color: "blue",
    link: "/directory",
  },
  {
    icon: Network,
    title: "Family Tree",
    description:
      "Preserve your roots, explore family connections, and keep your heritage alive.",
    color: "violet",
    link: "/family-tree",
  },
  {
    icon: Heart,
    title: "Matrimony",
    description:
      "Find compatible matches and begin a new chapter with community connections.",
    color: "rose",
    link: "/matrimony",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Network",
    description:
      "Explore community-owned businesses, discover services, and create opportunities.",
    color: "amber",
    link: "/businesses",
  },
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    description:
      "Discover scholarship opportunities and help students achieve their ambitions.",
    color: "emerald",
    link: "/welfare",
  },
  {
    icon: HandHeart,
    title: "Community Welfare",
    description:
      "Support families in need through welfare initiatives and community assistance.",
    color: "cyan",
    link: "/welfare",
  },
];

const colorStyles = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
  violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-600",
  rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
  emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
  cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600",
};

 function First() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -14px); }
        }

        .animate-float-up { animation: floatUp 5s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp .8s ease-out both; }
        .animate-drift { animation: drift 7s ease-in-out infinite; }

        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200">
              <Network size={23} />
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight text-slate-900">
                Community<span className="text-indigo-600">Connect</span>
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Together we grow
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">
              About
            </a>
            <Link to="/directory" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">
              Members
            </Link>
            <Link to="/events" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">
              Events
            </Link>
            <a href="#features" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">
              Services
            </a>
            <Link to="/businesses" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">
              Businesses
            </Link>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
            >
              Join community
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["About", "#about"],
                ["Members", "/directory"],
                ["Events", "/events"],
                ["Services", "#features"],
                ["Businesses", "/businesses"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {label}
                </a>
              ))}
              <Link
                to="/login"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Join community
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero section */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
          <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl animate-drift" />
          <div className="absolute -right-20 top-32 -z-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl animate-drift" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
            <div className="animate-fade-up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 shadow-sm">
                <Sparkles size={15} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wide text-indigo-700 sm:text-sm">
                  One platform. A stronger community.
                </span>
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Your community,
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  closer than ever.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Connect families, discover opportunities, celebrate traditions,
                and build a brighter future — all in one trusted digital
                community platform.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-2xl"
                >
                  Become a member
                  <ArrowRight size={19} className="transition group-hover:translate-x-1" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 font-bold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white"
                >
                  Explore platform
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-600" />
                  Privacy-focused
                </span>
                <span className="flex items-center gap-2">
                  <HeartHandshake size={18} className="text-indigo-600" />
                  Community-first
                </span>
              </div>
            </div>

            {/* Visual hero panel */}
            <div className="relative mx-auto w-full max-w-xl animate-fade-up animation-delay-150">
              <div className="absolute -left-5 top-14 h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl" />
              <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-full bg-violet-300/50 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-2xl shadow-indigo-200/60 backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-6 text-white sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-100">
                        Your community space
                      </p>
                      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                        A place to belong.
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
                      <Globe size={25} />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/20">
                      <Users size={23} className="text-indigo-100" />
                      <p className="mt-4 text-2xl font-extrabold">Members</p>
                      <p className="mt-1 text-xs text-indigo-100">
                        Connect with people
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/20">
                      <CalendarDays size={23} className="text-indigo-100" />
                      <p className="mt-4 text-2xl font-extrabold">Events</p>
                      <p className="mt-1 text-xs text-indigo-100">
                        Celebrate together
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/20">
                      <Building2 size={23} className="text-indigo-100" />
                      <p className="mt-4 text-2xl font-extrabold">Business</p>
                      <p className="mt-1 text-xs text-indigo-100">
                        Grow opportunities
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/20">
                      <HandHeart size={23} className="text-indigo-100" />
                      <p className="mt-4 text-2xl font-extrabold">Support</p>
                      <p className="mt-1 text-xs text-indigo-100">
                        Make a difference
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-700">
                        <Heart size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Stronger together</p>
                        <p className="mt-1 text-xs text-indigo-100">
                          Every connection matters
                        </p>
                      </div>
                    </div>
                    <Sparkles size={20} className="shrink-0 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Floating feature card */}
              <div className="animate-float-up absolute -left-4 top-4 hidden items-center gap-20 rounded-2xl border border-white bg-white p-4 shadow-xl sm:flex lg:-left-12">
                <div className="flex h-13 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={23} />
                </div>
                <div >
                  <p className="text-sm font-bold text-slate-800 ">
                    Trusted community
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Built around belonging
                  </p>
                </div>
              </div>

              <div className="animate-float-up animation-delay-300 absolute -bottom-5 right-0 hidden items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:flex lg:-right-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <CircleUserRound size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Your people, together
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    One connected platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / introduction strip */}
        <section id="about" className="border-y border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-3 sm:gap-8 lg:px-8">
            {[
              {
                icon: Users,
                title: "People & families",
                desc: "Bring generations closer",
              },
              {
                icon: HeartHandshake,
                title: "Shared progress",
                desc: "Turn connections into impact",
              },
              {
                icon: Globe,
                title: "Digital community",
                desc: "Access from anywhere",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4 sm:justify-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon size={23} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-slate-50/80 px-5 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
                <Sparkles size={14} />
                Everything in one place
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                One community.
                <br className="hidden sm:block" /> Endless possibilities.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                From preserving family heritage to discovering new
                opportunities, everything that matters to your community is
                brought together.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description, color, link }, index) => (
                <Link
                  to={link}
                  key={title}
                  className="group animate-fade-up rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 group-hover:text-white ${colorStyles[color]}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 transition group-hover:text-indigo-700">
                    {title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600">
                    Explore feature
                    <ArrowRight
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1.5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Community impact banner */}
        <section className="px-5 py-20 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
            <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-violet-400/20 blur-2xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
                  <Heart size={16} />
                  Your community needs you
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Every great community
                  <br className="hidden sm:block" /> starts with a connection.
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-indigo-100">
                  Join your community, reconnect with your roots, and be part
                  of something bigger.
                </p>
              </div>

              <Link
                to="/register"
                className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-indigo-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
              >
                Get started today
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500">
                <Network size={22} />
              </div>
              <span className="text-lg font-extrabold">
                Community<span className="text-indigo-400">Connect</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Connecting people, preserving heritage, and creating
              opportunities for a stronger community.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link className="transition hover:text-white" to="/directory">Member directory</Link>
              <Link className="transition hover:text-white" to="/matrimony">Matrimony</Link>
              <Link className="transition hover:text-white" to="/businesses">Business network</Link>
              <Link className="transition hover:text-white" to="/events">Events</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Community</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link className="transition hover:text-white" to="/about">About us</Link>
              <Link className="transition hover:text-white" to="/welfare">Welfare & scholarships</Link>
              <Link className="transition hover:text-white" to="/spiritual">Spiritual centre</Link>
              <Link className="transition hover:text-white" to="/contact">Contact & help</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Get connected</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Be part of the journey. Join your community and help make a
              difference.
            </p>
            <Link
              to="/register"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-300 transition hover:text-white"
            >
              Register now <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CommunityConnect. All rights reserved.</p>
          <p>Built for connection. Designed for community.</p>
        </div>
      </footer>
    </div>
  );
}
export default First;