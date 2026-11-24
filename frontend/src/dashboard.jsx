
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Network,
  CreditCard,
  Heart,
  Store,
  Briefcase,
  HandHeart,
  Church,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight, // Add this
  ChevronRight,
  CalendarDays,
  Sparkles,
  LogOut,
  UserRound,
  ShieldCheck,
  Plus,
  Clock3,
  Building2,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Members", path: "/members", icon: Users },
  { label: "Family Tree", path: "/family-tree", icon: Network },
  { label: "Digital ID", path: "/digital-id", icon: CreditCard },
  { label: "Matrimony", path: "/matrimony", icon: Heart },
  { label: "Businesses", path: "/businesses", icon: Store },
  { label: "Jobs & Careers", path: "/jobs", icon: Briefcase },
  { label: "Welfare", path: "/welfare", icon: HandHeart },
  { label: "Spiritual", path: "/spiritual", icon: Church },
];

const quickActions = [
  {
    title: "Find Members",
    description: "Discover and connect with community members.",
    path: "/members",
    icon: Users,
    color: "bg-blue-50 text-blue-700",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Family Tree",
    description: "Explore family connections and relationships.",
    path: "/family-tree",
    icon: Network,
    color: "bg-violet-50 text-violet-700",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Digital ID",
    description: "Access your digital membership identity.",
    path: "/digital-id",
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-700",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Matrimony",
    description: "Discover profiles and manage preferences.",
    path: "/matrimony",
    icon: Heart,
    color: "bg-pink-50 text-pink-700",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Businesses",
    description: "Discover community businesses and services.",
    path: "/businesses",
    icon: Building2,
    color: "bg-amber-50 text-amber-700",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Jobs & Careers",
    description: "Explore career and employment opportunities.",
    path: "/jobs",
    icon: Briefcase,
    color: "bg-cyan-50 text-cyan-700",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Welfare Services",
    description: "Explore assistance and community support.",
    path: "/welfare",
    icon: HandHeart,
    color: "bg-green-50 text-green-700",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Spiritual",
    description: "Connect with spiritual and cultural activities.",
    path: "/spiritual",
    icon: Church,
    color: "bg-orange-50 text-orange-700",
    gradient: "from-orange-500 to-red-500",
  },
];

const activities = [
  {
    title: "Welcome to your community dashboard",
    description: "Your community services are available from one place.",
    time: "Get started",
    icon: Sparkles,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Complete your member profile",
    description: "Help other members discover and recognize you.",
    time: "Recommended",
    icon: UserRound,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Explore community opportunities",
    description: "Discover members, businesses, and career resources.",
    time: "Explore",
    icon: Search,
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function MemberDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  // Replace these sample values with authenticated member data from your API.
  const member = {
    name: "Community Member",
    membershipId: "MEMBER",
    location: "Community Network",
    initials: "CM",
    profileCompletion: 60,
  };

  const filteredActions = quickActions.filter((action) =>
    `${action.title} ${action.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const goTo = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    // Connect your real logout/session-clearing logic here.
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20">
              <Sparkles size={23} />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-950">
                YourCommunity
              </p>
              <p className="text-xs text-slate-500">Member Portal</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pb-3 pt-6">
          <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Workspace
          </p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-4 pb-5">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.path === "/dashboard";

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                <Icon size={19} />
                <span className="flex-1">{item.label}</span>
                {active && <ChevronRight size={16} />}
              </Link>
            );
          })}

          <div className="!mt-6 border-t border-slate-100 pt-5">
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Account
            </p>

            <Link
              to="/profile-setup"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              <UserRound size={19} />
              My Profile
            </Link>

            <button
              type="button"
              onClick={() => goTo("/profile-setup")}
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              <Settings size={19} />
              Profile Settings
            </button>
          </div>
        </nav>

        {/* Sidebar membership card */}
        <div className="border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-900">
              <ShieldCheck size={17} />
              Member benefits
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Explore community resources, services, and opportunities.
            </p>
            <Link
              to="/digital-id"
              onClick={() => setSidebarOpen(false)}
              className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900"
            >
              View membership ID <ArrowUpRight size={14} />
            </Link>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-3 flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-500 transition hover:bg-rose-50 hover:text-rose-600"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="min-h-screen lg:pl-72">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-7 lg:px-10">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
                className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div className="min-w-0">
                <p className="truncate text-sm text-slate-500">
                  Member Portal
                </p>
                <h1 className="truncate text-lg font-bold text-slate-950 sm:text-xl">
                  Dashboard
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    if (e.target.value) {
                      document
                        .getElementById("quick-actions")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  placeholder="Find a service..."
                  aria-label="Search dashboard services"
                  className="w-52 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 lg:w-64"
                />
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowNotifications((previous) => !previous)}
                  aria-label="Notifications"
                  className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
                >
                  <Bell size={19} />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-14 z-40 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">Notifications</h3>
                      <button
                        type="button"
                        onClick={() => setShowNotifications(false)}
                        aria-label="Close notifications"
                        className="rounded-md p-1 text-slate-400 hover:bg-slate-100"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      You're all caught up. New notifications will appear
                      here when your account is connected.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => navigate("/profile-setup")}
                className="flex items-center gap-3 rounded-xl p-1.5 pr-2 transition hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">
                  {member.initials}
                </div>
                <div className="hidden text-left sm:block">
                  <p className="max-w-32 truncate text-sm font-bold text-slate-800">
                    {member.name}
                  </p>
                  <p className="text-xs text-slate-500">Member</p>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile service search */}
          <div className="px-4 pb-4 md:hidden">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                aria-label="Search dashboard services"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-7 sm:py-8 lg:px-10">
          {/* Welcome banner */}
          <section className="relative isolate overflow-hidden rounded-3xl bg-slate-950 text-white">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-950 via-indigo-900 to-violet-900" />
            <div className="absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 -z-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />

            <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-11">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold text-indigo-100">
                  <Sparkles size={15} />
                  YOUR COMMUNITY, ALL IN ONE PLACE
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Welcome back,
                  <span className="block bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                    {member.name}!
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-indigo-100/80 sm:text-base">
                  Discover people, strengthen family connections, explore
                  opportunities, and access your community services from one
                  place.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/members"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-800 transition hover:-translate-y-0.5 hover:bg-indigo-50"
                  >
                    Explore members <ArrowRight size={17} />
                  </Link>
                  <Link
                    to="/profile-setup"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Complete profile <UserRound size={17} />
                  </Link>
                </div>
              </div>

              <div className="hidden min-w-44 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Users size={25} />
                </div>
                <p className="mt-5 text-sm text-indigo-100">Your community</p>
                <p className="mt-1 text-xl font-bold">Starts with you</p>
                <p className="mt-2 text-xs leading-5 text-indigo-100/70">
                  Connect, contribute, and grow together.
                </p>
              </div>
            </div>
          </section>

          {/* Profile completion */}
          <section className="mt-6 grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <UserRound size={19} className="text-indigo-600" />
                    <h3 className="font-bold text-slate-900">
                      Your member profile
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Add your details to make your community profile more
                    useful to other members.
                  </p>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">
                  {member.profileCompletion}%
                </span>
              </div>

              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 transition-all"
                  style={{ width: `${member.profileCompletion}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Complete your profile to help people connect with you.
                </p>
                <Link
                  to="/profile-setup"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-700 hover:text-indigo-900"
                >
                  Update profile <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck size={25} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-slate-900">Digital membership</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Access your digital ID and membership information.
                </p>
                <Link
                  to="/digital-id"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900"
                >
                  View Digital ID <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </section>

          {/* Quick actions */}
          <section id="quick-actions" className="mt-10 scroll-mt-28">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Explore your platform
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Community services
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Everything you need, one click away.
                </p>
              </div>
              <span className="text-sm text-slate-500">
                {filteredActions.length} services
              </span>
            </div>

            {filteredActions.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {filteredActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.path}
                      to={action.path}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 sm:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${action.color} transition duration-300 group-hover:scale-105`}
                        >
                          <Icon size={23} />
                        </div>

                        <ArrowUpRight
                          size={19}
                          className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600"
                        />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-slate-900 transition group-hover:text-indigo-700">
                        {action.title}
                      </h3>
                      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                        {action.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-xs font-semibold text-slate-500">
                          Explore service
                        </span>
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${action.gradient} text-white transition group-hover:scale-110`}
                        >
                          <ChevronRight size={17} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
                <Search size={30} className="mx-auto text-slate-400" />
                <h3 className="mt-3 font-bold">No services found</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try searching for members, jobs, welfare, or another service.
                </p>
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-4 text-sm font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Clear search
                </button>
              </div>
            )}
          </section>

          {/* Bottom section */}
          <section className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    Get started
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    A few good places to begin.
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Sparkles size={20} />
                </div>
              </div>

              <div className="mt-5 divide-y divide-slate-100">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  const destinations = [
                    "/profile-setup",
                    "/profile-setup",
                    "/members",
                  ];

                  return (
                    <Link
                      key={activity.title}
                      to={destinations[index]}
                      className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-800 transition group-hover:text-indigo-700">
                          {activity.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {activity.description}
                        </p>
                      </div>
                      <ChevronRight
                        size={18}
                        className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-indigo-700 to-violet-800 p-6 text-white sm:p-7">
              <div className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full border border-white/15" />
              <div className="absolute -bottom-16 -left-10 -z-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                <CalendarDays size={24} />
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                Stay connected
              </h2>
              <p className="mt-3 text-sm leading-7 text-indigo-100">
                Discover community events, meet new people, and find
                opportunities to participate in activities that matter to you.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  to="/events"
                  className="flex items-center justify-between rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-indigo-800 transition hover:bg-indigo-50"
                >
                  Discover events <ArrowRight size={17} />
                </Link>
                <Link
                  to="/news"
                  className="flex items-center justify-between rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Community news <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-indigo-100/80">
                <Clock3 size={14} />
                Check back for new community updates.
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 py-6 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} YourCommunity. Member Portal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="transition hover:text-indigo-600">
                About
              </Link>
              <Link to="/news" className="transition hover:text-indigo-600">
                News
              </Link>
              <Link to="/events" className="transition hover:text-indigo-600">
                Events
              </Link>
              <Link to="/contact" className="transition hover:text-indigo-600">
                Contact
              </Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

