
import { useMemo, useState } from "react";
import {
  Radar,
  LocateFixed,
  Navigation,
  Users,
  MapPin,
  Search,
  Signal,
  Crosshair,
  ShieldCheck,
  RefreshCw,
  X,
  ArrowUpRight,
  Clock3,
  Wifi,
} from "lucide-react";

const nearbyMembers = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "Software Engineer",
    distance: 0.4,
    location: "Nellore",
    initials: "AR",
    x: 57,
    y: 29,
    color: "from-cyan-400 to-blue-500",
    skills: ["Technology", "React"],
    online: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Designer",
    distance: 0.8,
    location: "Nellore",
    initials: "PS",
    x: 74,
    y: 43,
    color: "from-fuchsia-400 to-pink-500",
    skills: ["Design", "Creative"],
    online: true,
  },
  {
    id: 3,
    name: "Rahul Varma",
    role: "Entrepreneur",
    distance: 1.2,
    location: "Nellore",
    initials: "RV",
    x: 37,
    y: 51,
    color: "from-emerald-400 to-teal-500",
    skills: ["Business", "Growth"],
    online: false,
  },
  {
    id: 4,
    name: "Sneha Kumar",
    role: "Healthcare",
    distance: 1.7,
    location: "Nellore",
    initials: "SK",
    x: 62,
    y: 66,
    color: "from-amber-300 to-orange-500",
    skills: ["Healthcare", "Community"],
    online: true,
  },
  {
    id: 5,
    name: "Vikram Rao",
    role: "Business Owner",
    distance: 2.3,
    location: "Nellore",
    initials: "VR",
    x: 26,
    y: 33,
    color: "from-violet-400 to-purple-600",
    skills: ["Business", "Networking"],
    online: false,
  },
  {
    id: 6,
    name: "Meera Patel",
    role: "Marketing Manager",
    distance: 3.1,
    location: "Nellore",
    initials: "MP",
    x: 44,
    y: 76,
    color: "from-rose-400 to-red-500",
    skills: ["Marketing", "Media"],
    online: true,
  },
  {
    id: 7,
    name: "Karthik Naidu",
    role: "Engineer",
    distance: 3.8,
    location: "Nellore",
    initials: "KN",
    x: 81,
    y: 61,
    color: "from-sky-300 to-indigo-500",
    skills: ["Engineering", "IoT"],
    online: true,
  },
  {
    id: 8,
    name: "Ananya Reddy",
    role: "Data Analyst",
    distance: 4.4,
    location: "Nellore",
    initials: "AN",
    x: 33,
    y: 22,
    color: "from-lime-300 to-green-500",
    skills: ["Data", "Analytics"],
    online: false,
  },
];

const radiusOptions = [1, 3, 5, 10];

export default function NearbyRadar() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [search, setSearch] = useState("");
  const [radius, setRadius] = useState(5);
  const [scanning, setScanning] = useState(true);
  const [locationStatus, setLocationStatus] = useState("demo");
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [notice, setNotice] = useState("");

  const visibleMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return nearbyMembers.filter((member) => {
      const withinRadius = member.distance <= radius;
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );

      return withinRadius && matchesSearch;
    });
  }, [radius, search]);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("unavailable");
      setNotice("Geolocation is not supported by this browser.");
      return;
    }

    setLocationStatus("loading");
    setNotice("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });

        setLocationStatus("located");
        setNotice(
          "Your location was received. Connect the nearby-members API to discover actual nearby members."
        );
      },
      (error) => {
        setLocationStatus("error");

        const messages = {
          1: "Location permission was denied. Allow location access in your browser to use this feature.",
          2: "Your location is currently unavailable. Try again when your device has a location signal.",
          3: "Location request timed out. Please try again.",
        };

        setNotice(messages[error.code] || "Could not get your location.");
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const handleRefresh = () => {
    setScanning(true);
    setNotice(
      "Radar animation restarted. Refreshing real member locations requires a connected backend API."
    );
  };

  const statusText = {
    demo: "DEMO LOCATION",
    loading: "LOCATING...",
    located: "LOCATION RECEIVED",
    error: "LOCATION BLOCKED",
    unavailable: "LOCATION UNAVAILABLE",
  }[locationStatus];

  return (
    <div className="min-h-screen overflow-hidden bg-[#070b19] text-white">
      <style>{`
        @keyframes nearby-radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes nearby-radar-pulse {
          0%, 100% { transform: scale(0.85); opacity: 0.55; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        @keyframes nearby-radar-ripple {
          0% { transform: scale(0.35); opacity: 0.75; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        @keyframes nearby-radar-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes nearby-radar-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }

        .nearby-radar-sweep {
          animation: nearby-radar-spin 6s linear infinite;
          transform-origin: center;
        }

        .nearby-radar-sweep-paused {
          animation-play-state: paused;
        }

        .nearby-radar-pulse {
          animation: nearby-radar-pulse 2s ease-in-out infinite;
        }

        .nearby-radar-ripple {
          animation: nearby-radar-ripple 2.4s ease-out infinite;
        }

        .nearby-radar-float {
          animation: nearby-radar-float 4s ease-in-out infinite;
        }

        .nearby-radar-glow {
          animation: nearby-radar-glow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .nearby-radar-sweep,
          .nearby-radar-pulse,
          .nearby-radar-ripple,
          .nearby-radar-float,
          .nearby-radar-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/[0.08] bg-[#090e20]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-950/40">
              <Radar size={27} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight sm:text-xl">
                  Community Radar
                </h1>
                <span className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-[9px] font-bold tracking-widest text-cyan-300 sm:inline-flex">
                  BETA
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Discover your community around you
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-2 sm:flex">
              <span
                className={`h-2 w-2 rounded-full ${
                  scanning ? "bg-emerald-400 nearby-radar-pulse" : "bg-slate-500"
                }`}
              />
              <span className="text-xs font-medium text-emerald-200">
                {scanning ? "Scanning" : "Paused"}
              </span>
            </div>
            <a
              href="/dashboard"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
            >
              Dashboard
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-[1500px] px-4 py-7 sm:px-8 sm:py-10 lg:px-10">
        {/* Page intro */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-px w-7 bg-cyan-400" />
              PEOPLE · PROXIMITY · COMMUNITY
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Your people are{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                closer than you think.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Scan your surroundings, discover community members, and find people
              nearby who share your interests.
            </p>
          </div>

          <button
            onClick={requestLocation}
            disabled={locationStatus === "loading"}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:shadow-cyan-900/50 disabled:cursor-wait disabled:opacity-60"
          >
            <LocateFixed size={18} />
            {locationStatus === "loading"
              ? "Locating..."
              : locationStatus === "located"
                ? "Refresh my location"
                : "Use my location"}
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            {
              label: "Members detected",
              value: String(visibleMembers.length).padStart(2, "0"),
              icon: Users,
              color: "text-cyan-300",
            },
            {
              label: "Within 1 km",
              value: String(
                visibleMembers.filter((member) => member.distance <= 1).length
              ).padStart(2, "0"),
              icon: Crosshair,
              color: "text-emerald-300",
            },
            {
              label: "Online members",
              value: String(
                visibleMembers.filter((member) => member.online).length
              ).padStart(2, "0"),
              icon: Wifi,
              color: "text-violet-300",
            },
            {
              label: "Search radius",
              value: `${radius} km`,
              icon: Navigation,
              color: "text-amber-300",
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.055] sm:p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400 sm:text-sm">
                    {stat.label}
                  </span>
                  <Icon size={17} className={stat.color} />
                </div>
                <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Radar and member list */}
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)]">
          {/* Radar panel */}
          <section className="overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0b1225]/90 shadow-2xl shadow-black/20">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-5 sm:px-7">
              <div>
                <div className="flex items-center gap-2">
                  <Radar size={19} className="text-cyan-300" />
                  <h3 className="font-bold text-white">Live proximity radar</h3>
                </div>
                <p className="mt-1.5 text-xs text-slate-500">
                  Visualizing sample member positions
                </p>
              </div>
              <button
                onClick={() => setScanning((value) => !value)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                  scanning
                    ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200 hover:bg-cyan-300/15"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                }`}
              >
                {scanning ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                ) : (
                  <X size={13} />
                )}
                {scanning ? "Pause scan" : "Resume scan"}
              </button>
            </div>

            <div className="p-4 sm:p-7">
              {/* Radar canvas */}
              <div className="relative mx-auto aspect-square w-full max-w-[590px] overflow-hidden rounded-full border border-cyan-300/15 bg-[#061426] shadow-[0_0_90px_rgba(6,182,212,0.07)]">
                {/* Grid texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.10]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(103,232,249,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.35) 1px, transparent 1px)",
                    backgroundSize: "5% 5%",
                  }}
                />

                {/* Outer decorative rings */}
                {[100, 80, 60, 40, 20].map((size, index) => (
                  <div
                    key={size}
                    className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border"
                    style={{
                      width: `${size}%`,
                      height: `${size}%`,
                      transform: "translate(-50%, -50%)",
                      borderColor:
                        index === 0
                          ? "rgba(103,232,249,.22)"
                          : "rgba(103,232,249,.13)",
                    }}
                  />
                ))}

                {/* Crosshairs */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-cyan-300/15" />
                <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-cyan-300/15" />
                <div className="pointer-events-none absolute left-[14.65%] top-[14.65%] h-[70.7%] w-[70.7%] rotate-45 border border-cyan-300/[0.08]" />

                {/* Sweep cone */}
                <div
                  className={`nearby-radar-sweep nearby-radar-sweep-paused pointer-events-none absolute inset-0 rounded-full ${
                    scanning ? "" : "nearby-radar-sweep-paused"
                  }`}
                  style={{
                    animationPlayState: scanning ? "running" : "paused",
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 285deg, rgba(34,211,238,.015) 305deg, rgba(34,211,238,.055) 330deg, rgba(34,211,238,.18) 352deg, rgba(34,211,238,.32) 359deg, transparent 360deg)",
                  }}
                />

                {/* Sweep leading line */}
                <div
                  className="nearby-radar-sweep pointer-events-none absolute inset-0"
                  style={{
                    animationPlayState: scanning ? "running" : "paused",
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 359deg, rgba(103,232,249,.75) 359.5deg, transparent 360deg)",
                  }}
                />

                {/* Range labels */}
                <span className="pointer-events-none absolute left-[53%] top-[3%] text-[9px] font-medium tracking-wider text-cyan-100/45 sm:text-[10px]">
                  {radius} KM
                </span>
                <span className="pointer-events-none absolute left-[53%] top-[13%] text-[9px] text-cyan-100/35">
                  {Math.round(radius * 0.8)} KM
                </span>
                <span className="pointer-events-none absolute left-[53%] top-[23%] text-[9px] text-cyan-100/35">
                  {Math.round(radius * 0.6)} KM
                </span>
                <span className="pointer-events-none absolute left-[53%] top-[33%] text-[9px] text-cyan-100/35">
                  {Math.round(radius * 0.4)} KM
                </span>

                {/* Center user marker */}
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="nearby-radar-ripple absolute inset-[-15px] rounded-full border border-cyan-300/70" />
                  <div className="nearby-radar-ripple absolute inset-[-15px] rounded-full border border-cyan-300/60 [animation-delay:1.2s]" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-100 bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,.75)] sm:h-12 sm:w-12">
                    <Crosshair size={22} />
                  </div>
                  <div className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 whitespace-nowrap rounded-md border border-cyan-300/15 bg-[#071426]/90 px-2 py-1 text-[9px] font-bold tracking-wider text-cyan-200">
                    {locationStatus === "located" ? "YOUR LOCATION" : "YOU"}
                  </div>
                </div>

                {/* Member markers */}
                {visibleMembers.map((member, index) => {
                  const isSelected = selectedMember?.id === member.id;

                  return (
                    <button
                      key={member.id}
                      onClick={() => setSelectedMember(member)}
                      aria-label={`${member.name}, ${member.distance} kilometers away`}
                      title={`${member.name} · ${member.distance} km`}
                      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white"
                      style={{
                        left: `${member.x}%`,
                        top: `${member.y}%`,
                      }}
                    >
                      <span
                        className={`absolute inset-[-7px] rounded-full border ${
                          isSelected
                            ? "border-white/80"
                            : "border-cyan-300/40"
                        }`}
                        style={{
                          animation: scanning
                            ? `nearby-radar-pulse ${2 + (index % 3) * 0.45}s ease-in-out infinite`
                            : "none",
                          animationDelay: `${index * 0.18}s`,
                        }}
                      />
                      <span
                        className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white/80 bg-gradient-to-br ${member.color} shadow-[0_0_15px_rgba(103,232,249,.65)] transition duration-300 group-hover:scale-150 sm:h-4 sm:w-4 ${
                          isSelected ? "scale-150 ring-2 ring-white/50" : ""
                        }`}
                      />
                      <span className="absolute left-1/2 top-[calc(100%+7px)] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#071426]/95 px-1.5 py-1 text-[8px] font-medium text-cyan-100 opacity-80 transition group-hover:opacity-100 sm:text-[9px]">
                        {member.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}

                {/* Radar status */}
                <div className="pointer-events-none absolute bottom-[8%] left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-cyan-300/15 bg-[#071426]/85 px-3 py-2 backdrop-blur">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        scanning ? "bg-cyan-300 nearby-radar-pulse" : "bg-slate-500"
                      }`}
                    />
                    <span className="text-[9px] font-semibold tracking-[0.15em] text-cyan-100/80 sm:text-[10px]">
                      {scanning ? "RADAR ACTIVE" : "RADAR PAUSED"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Radar legend */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/[0.07] pt-5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.7)]" />
                  Community member
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-cyan-200 bg-cyan-500" />
                  Your position
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Online indicator in list
                </div>
              </div>

              {/* Radius selector */}
              <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Scanning radius
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Filter the sample members shown on the radar
                    </p>
                  </div>
                  <span className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-sm font-bold text-cyan-200">
                    {radius} km
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {radiusOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setRadius(option)}
                      className={`rounded-xl border py-2.5 text-sm font-semibold transition ${
                        radius === option
                          ? "border-cyan-300/40 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30"
                          : "border-white/[0.09] bg-white/[0.025] text-slate-400 hover:border-cyan-300/25 hover:text-white"
                      }`}
                    >
                      {option} km
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Nearby members panel */}
          <section className="overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0b1225]/90">
            <div className="border-b border-white/[0.07] px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Users size={19} className="text-cyan-300" />
                    <h3 className="font-bold text-white">Nearby members</h3>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    People in your community
                  </p>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-bold text-cyan-200">
                  {visibleMembers.length} found
                </span>
              </div>

              <div className="relative mt-5">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Find members or skills..."
                  className="w-full rounded-xl border border-white/[0.09] bg-white/[0.035] py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.055]"
                />
              </div>
            </div>

            <div className="max-h-[710px] divide-y divide-white/[0.06] overflow-y-auto">
              {visibleMembers.length > 0 ? (
                visibleMembers.map((member) => {
                  const active = selectedMember?.id === member.id;

                  return (
                    <button
                      key={member.id}
                      onClick={() =>
                        setSelectedMember(active ? null : member)
                      }
                      className={`group w-full p-4 text-left transition sm:px-5 ${
                        active
                          ? "bg-cyan-300/[0.07]"
                          : "hover:bg-white/[0.035]"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="relative shrink-0">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-sm font-bold text-white shadow-lg`}
                          >
                            {member.initials}
                          </div>
                          {member.online && (
                            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-[3px] border-[#0b1225] bg-emerald-400" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold text-white transition group-hover:text-cyan-200">
                                {member.name}
                              </p>
                              <p className="mt-1 truncate text-xs text-slate-400">
                                {member.role}
                              </p>
                            </div>
                            <span className="shrink-0 rounded-lg border border-cyan-300/10 bg-cyan-300/[0.06] px-2 py-1 text-[10px] font-bold text-cyan-200">
                              {member.distance.toFixed(1)} km
                            </span>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {member.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-md border border-white/[0.07] bg-white/[0.035] px-2 py-1 text-[10px] text-slate-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
                              <MapPin size={12} />
                              {member.location}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] font-semibold text-cyan-300 opacity-80 transition group-hover:opacity-100">
                              {active ? "Selected" : "Locate"}
                              <ArrowUpRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="px-6 py-16 text-center">
                  <Search className="mx-auto text-slate-600" size={28} />
                  <p className="mt-4 font-semibold text-white">
                    No members found
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Try a different name, skill, or scanning radius.
                  </p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setRadius(5);
                    }}
                    className="mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-100"
                  >
                    Reset search
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-white/[0.07] p-4 sm:p-5">
              <button
                onClick={handleRefresh}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.05] hover:text-cyan-200"
              >
                <RefreshCw size={16} className={scanning ? "nearby-radar-glow" : ""} />
                Refresh radar
              </button>
            </div>
          </section>
        </div>

        {/* Selected member panel */}
        {selectedMember && (
          <section className="mt-6 overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-[#0c1c32] to-[#10132a] p-5 shadow-xl shadow-cyan-950/20 sm:p-7">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedMember.color} text-xl font-bold text-white shadow-lg`}
                >
                  {selectedMember.initials}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {selectedMember.name}
                    </h3>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-2 py-1 text-[10px] font-semibold text-cyan-200">
                      Nearby member
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {selectedMember.role}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                    <Navigation size={13} className="text-cyan-300" />
                    Sample distance: {selectedMember.distance.toFixed(1)} km
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    setNotice(
                      "Messaging can be enabled by connecting your platform's messaging API."
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  Connect with member
                  <ArrowUpRight size={16} />
                </button>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05]"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedMember.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Location permission and privacy */}
        <section className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <LocateFixed size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Your location</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {locationStatus === "located"
                    ? "Your browser provided your current coordinates. The sample radar positions have not been recalculated."
                    : "Allow location access to share your coordinates with this page. Actual proximity matching will be added when the backend is connected."}
                </p>
                {userCoordinates && (
                  <p className="mt-3 break-all font-mono text-[10px] leading-5 text-cyan-200/70">
                    Lat: {userCoordinates.latitude.toFixed(5)} · Lon:{" "}
                    {userCoordinates.longitude.toFixed(5)} · Accuracy: ±
                    {Math.round(userCoordinates.accuracy)} m
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Privacy by design</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Real member locations should only be shared with permission. Prefer approximate distances and allow members to opt out of discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {notice && (
          <div
            role="status"
            className="mt-5 flex items-start gap-3 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 text-sm leading-6 text-cyan-100"
          >
            <Signal className="mt-0.5 shrink-0" size={18} />
            <p className="flex-1">{notice}</p>
            <button
              onClick={() => setNotice("")}
              aria-label="Dismiss message"
              className="text-cyan-200/70 hover:text-white"
            >
              <X size={17} />
            </button>
          </div>
        )}

        <footer className="mt-10 border-t border-white/[0.07] py-6 text-center">
          <p className="text-xs leading-6 text-slate-500">
            Community Radar · Sample positions for demonstration · Real proximity
            discovery requires member consent and a connected backend.
          </p>
        </footer>
      </main>
    </div>
  );
}
