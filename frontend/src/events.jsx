
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  Users,
  Video,
  Sparkles,
  X,
  CalendarCheck,
} from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Community Networking Meetup",
    category: "Networking",
    date: "Nov 07, 2026",
    time: "10:00 AM – 12:00 PM",
    location: "Nellore, Andhra Pradesh",
    mode: "In person",
    description:
      "Meet professionals, exchange ideas, discover collaboration opportunities, and build meaningful connections with members of the community.",
    seats: "Limited seats",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    featured: true,
  },
  {
    id: 2,
    title: "AI & Emerging Technologies",
    category: "Technology",
    date: "Nov 14, 2026",
    time: "3:00 PM – 4:30 PM",
    location: "Online event",
    mode: "Online",
    description:
      "Explore emerging AI technologies, practical use cases, and the ways intelligent systems are changing modern businesses.",
    seats: "Open registration",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "Startup Ideas & Collaboration",
    category: "Business",
    date: "Nov 21, 2026",
    time: "11:00 AM – 1:00 PM",
    location: "Nellore, Andhra Pradesh",
    mode: "In person",
    description:
      "Connect with entrepreneurs and aspiring founders to discuss business ideas, partnerships, and lessons from building products.",
    seats: "Limited seats",
    gradient: "from-fuchsia-600 to-pink-500",
  },
  {
    id: 4,
    title: "Professional Skills Workshop",
    category: "Workshop",
    date: "Nov 28, 2026",
    time: "2:00 PM – 4:00 PM",
    location: "Online event",
    mode: "Online",
    description:
      "Build practical skills through an interactive learning session focused on communication, problem-solving, and professional growth.",
    seats: "Open registration",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    title: "Digital Innovation Forum",
    category: "Technology",
    date: "Dec 05, 2026",
    time: "10:30 AM – 12:30 PM",
    location: "Online event",
    mode: "Online",
    description:
      "Discuss digital transformation, new product ideas, and technology-led solutions with other curious and forward-thinking members.",
    seats: "Open registration",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    id: 6,
    title: "Community Knowledge Exchange",
    category: "Networking",
    date: "Dec 12, 2026",
    time: "4:00 PM – 5:30 PM",
    location: "Online event",
    mode: "Online",
    description:
      "Share experiences, exchange practical knowledge, and learn from the diverse expertise of fellow community members.",
    seats: "Open registration",
    gradient: "from-violet-600 to-indigo-700",
  },
];

const categories = [
  "All Events",
  "Networking",
  "Technology",
  "Business",
  "Workshop",
];

export default function Events() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredIds, setRegisteredIds] = useState([]);
  const [showRegistrationMessage, setShowRegistrationMessage] =
    useState(false);

  const featuredEvent = eventsData[0];

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesCategory =
        activeCategory === "All Events" ||
        event.category === activeCategory;

      const searchableText =
        `${event.title} ${event.category} ${event.location} ${event.description}`.toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(search.toLowerCase())
      );
    });
  }, [search, activeCategory]);

  const visibleEvents = filteredEvents.filter(
    (event) => event.id !== featuredEvent.id
  );

  const handleRegister = (event) => {
    setRegisteredIds((previous) =>
      previous.includes(event.id) ? previous : [...previous, event.id]
    );
    setShowRegistrationMessage(true);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950" />
        <div className="absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-28">
          <div className="mb-12 flex items-center gap-2 text-sm text-indigo-200">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Events</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-indigo-200 backdrop-blur">
                <Sparkles size={16} />
                Learn, connect & collaborate
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Where connections
                <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  become opportunities.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Discover events that bring people together to learn new
                skills, exchange ideas, meet professionals, and create
                something meaningful.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#upcoming-events"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-100"
                >
                  Explore events
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Host an event
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Users size={16} className="text-indigo-300" />
                  Community meetups
                </span>
                <span className="flex items-center gap-2">
                  <Video size={16} className="text-violet-300" />
                  Online sessions
                </span>
                <span className="flex items-center gap-2">
                  <CalendarCheck size={16} className="text-fuchsia-300" />
                  Workshops
                </span>
              </div>
            </div>

            {/* Featured event */}
            <button
              type="button"
              onClick={() => setSelectedEvent(featuredEvent)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-3 text-left shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${featuredEvent.gradient} p-7 sm:min-h-[410px] sm:p-9`}
              >
                <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/20" />
                <div className="absolute -right-2 -top-2 h-36 w-36 rounded-full border border-white/20" />
                <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wider text-white">
                    FEATURED EVENT
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
                    <CalendarDays size={16} />
                    {featuredEvent.date}
                  </div>

                  <h2 className="max-w-lg text-2xl font-bold leading-snug sm:text-3xl">
                    {featuredEvent.title}
                  </h2>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/80">
                    {featuredEvent.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
                    <span className="flex items-center gap-2">
                      <Clock3 size={15} />
                      {featuredEvent.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={15} />
                      {featuredEvent.location}
                    </span>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                    View event details
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section
        id="upcoming-events"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Find your next experience
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Upcoming events
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Find the right event to learn something new, meet people, or
              take your next idea forward.
            </p>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              aria-label="Search events"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-9 flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {visibleEvents.length > 0 ? (
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEvents.map((event) => {
              const isRegistered = registeredIds.includes(event.id);

              return (
                <article
                  key={event.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
                >
                  <div
                    className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${event.gradient} p-6`}
                  >
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20 transition duration-500 group-hover:scale-110" />
                    <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full border border-white/20" />
                    <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                    <span className="relative rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wider text-white backdrop-blur">
                      {event.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                      <CalendarDays size={16} />
                      {event.date}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight transition group-hover:text-indigo-700">
                      {event.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                      {event.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <Clock3
                          size={16}
                          className="mt-0.5 shrink-0 text-slate-400"
                        />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        {event.mode === "Online" ? (
                          <Video
                            size={16}
                            className="mt-0.5 shrink-0 text-slate-400"
                          />
                        ) : (
                          <MapPin
                            size={16}
                            className="mt-0.5 shrink-0 text-slate-400"
                          />
                        )}
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-slate-500">
                        {isRegistered ? "Registration selected" : event.seats}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                          isRegistered
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-indigo-600 text-white hover:bg-indigo-700"
                        }`}
                      >
                        {isRegistered ? "View details" : "View event"}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
            <Search size={32} className="mx-auto text-slate-400" />
            <h3 className="mt-4 text-lg font-bold">No events found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another keyword or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Events");
              }}
              className="mt-5 font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Host an event CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
              Have an idea?
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Bring people together. Host your next event.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Have a workshop, meetup, or knowledge-sharing session in mind?
              Get in touch with our team to explore hosting opportunities.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Contact our team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Event details modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            className="my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative bg-gradient-to-br ${selectedEvent.gradient} px-7 py-9 text-white sm:px-10`}
            >
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close event details"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
              >
                <X size={20} />
              </button>

              <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wider">
                {selectedEvent.category.toUpperCase()}
              </span>

              <h2
                id="event-modal-title"
                className="mt-5 max-w-xl text-2xl font-bold leading-snug sm:text-3xl"
              >
                {selectedEvent.title}
              </h2>

              <div className="mt-5 space-y-3 text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {selectedEvent.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {selectedEvent.time}
                </div>
                <div className="flex items-center gap-2">
                  {selectedEvent.mode === "Online" ? (
                    <Video size={16} />
                  ) : (
                    <MapPin size={16} />
                  )}
                  {selectedEvent.location}
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <h3 className="text-lg font-bold text-slate-900">
                About this event
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {selectedEvent.description}
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-indigo-50 p-4">
                <Users size={20} className="mt-0.5 shrink-0 text-indigo-600" />
                <div>
                  <p className="font-semibold text-slate-800">
                    {selectedEvent.seats}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Event registration is shown as a demo in this version.
                    Connect your backend to store registrations and confirm
                    attendance.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {registeredIds.includes(selectedEvent.id) ? (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-default items-center gap-2 rounded-xl bg-emerald-50 px-5 py-3 font-semibold text-emerald-700"
                  >
                    <CalendarCheck size={18} />
                    Registration selected
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRegister(selectedEvent)}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Register interest
                    <ArrowRight size={17} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration feedback */}
      {showRegistrationMessage && (
        <div className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CalendarCheck size={19} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-slate-900">Interest recorded locally</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              This is a frontend demo. No registration has been sent to a
              server yet.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowRegistrationMessage(false)}
            aria-label="Dismiss notification"
            className="text-slate-400 transition hover:text-slate-700"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
