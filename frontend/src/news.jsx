
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Newspaper,
  CalendarDays,
  Clock3,
  Mail,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

const newsArticles = [
  {
    id: 1,
    category: "Community",
    date: "Oct 22, 2026",
    readTime: "4 min read",
    title: "Building stronger communities through meaningful connections",
    excerpt:
      "Discover how digital communities are helping people share knowledge, find opportunities, and build lasting professional relationships.",
    author: "Editorial Team",
    featured: true,
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    tag: "COMMUNITY SPOTLIGHT",
  },
  {
    id: 2,
    category: "Technology",
    date: "Oct 18, 2026",
    readTime: "5 min read",
    title: "How emerging technology is reshaping professional collaboration",
    excerpt:
      "A closer look at the tools and ideas transforming how professionals work together and exchange expertise.",
    author: "Technology Desk",
    gradient: "from-blue-600 to-cyan-500",
    tag: "TECHNOLOGY",
  },
  {
    id: 3,
    category: "Announcements",
    date: "Oct 14, 2026",
    readTime: "3 min read",
    title: "New opportunities to connect, collaborate, and grow",
    excerpt:
      "Explore the latest platform initiatives designed to help members discover new opportunities and expand their networks.",
    author: "Platform Team",
    gradient: "from-fuchsia-600 to-pink-500",
    tag: "ANNOUNCEMENT",
  },
  {
    id: 4,
    category: "Events",
    date: "Oct 10, 2026",
    readTime: "4 min read",
    title: "Why community events matter in a connected world",
    excerpt:
      "From knowledge-sharing sessions to networking meetups, discover what makes community gatherings valuable.",
    author: "Events Desk",
    gradient: "from-amber-500 to-orange-600",
    tag: "EVENTS",
  },
  {
    id: 5,
    category: "Insights",
    date: "Oct 5, 2026",
    readTime: "6 min read",
    title: "Turning shared knowledge into collective progress",
    excerpt:
      "Practical thoughts on creating a culture where people share ideas, learn from one another, and move forward together.",
    author: "Editorial Team",
    gradient: "from-emerald-500 to-teal-600",
    tag: "INSIGHTS",
  },
  {
    id: 6,
    category: "Community",
    date: "Sep 28, 2026",
    readTime: "3 min read",
    title: "Meet the people making a difference in their communities",
    excerpt:
      "Celebrating the contributors, professionals, and community builders who make collaboration possible.",
    author: "Community Desk",
    gradient: "from-violet-600 to-indigo-700",
    tag: "MEMBER STORIES",
  },
];

const categories = [
  "All News",
  "Community",
  "Technology",
  "Announcements",
  "Events",
  "Insights",
];

export default function News() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All News");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticle = newsArticles[0];

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All News" ||
        article.category === activeCategory;

      const searchableText =
        `${article.title} ${article.excerpt} ${article.category} ${article.author}`.toLowerCase();

      return matchesCategory && searchableText.includes(search.toLowerCase());
    });
  }, [search, activeCategory]);

  const visibleArticles = filteredArticles.filter(
    (article) => article.id !== featuredArticle.id
  );

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect this to your newsletter API when your backend is ready.
    setSubscribed(true);
    setEmail("");
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
            <span className="text-white">News & Updates</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-indigo-200 backdrop-blur">
                <Sparkles size={16} />
                Stories, ideas & announcements
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                The latest from
                <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  our community.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Stay informed with community stories, platform updates,
                industry insights, and ideas worth sharing.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#latest-news"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-100"
                >
                  Explore latest news
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/directory"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore community
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Newspaper size={16} className="text-indigo-300" />
                  Community stories
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-violet-300" />
                  Ideas and insights
                </span>
              </div>
            </div>

            {/* Featured story panel */}
            <button
              type="button"
              onClick={() => setSelectedArticle(featuredArticle)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-3 text-left shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${featuredArticle.gradient} p-7 sm:min-h-[390px] sm:p-9`}
              >
                <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/20" />
                <div className="absolute -right-2 -top-2 h-36 w-36 rounded-full border border-white/20" />
                <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold tracking-wider text-white">
                    FEATURED STORY
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
                    <CalendarDays size={15} />
                    {featuredArticle.date}
                  </div>
                  <h2 className="max-w-lg text-2xl font-bold leading-snug sm:text-3xl">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/80">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                    Read the story
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

      {/* Latest news */}
      <section
        id="latest-news"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              The newsroom
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest news & stories
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Fresh perspectives, community highlights, and updates from
              across the platform.
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
              placeholder="Search stories..."
              aria-label="Search news stories"
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

        {/* Article cards */}
        {visibleArticles.length > 0 ? (
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
              >
                <div
                  className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${article.gradient} p-6`}
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20 transition duration-500 group-hover:scale-110" />
                  <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full border border-white/20" />
                  <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                  <span className="relative rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wider text-white backdrop-blur">
                    {article.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-indigo-700">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight transition group-hover:text-indigo-700">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {article.author}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock3 size={13} />
                        {article.readTime}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      aria-label={`Read ${article.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
            <Search size={32} className="mx-auto text-slate-400" />
            <h3 className="mt-4 text-lg font-bold">No stories found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try a different search or choose another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All News");
              }}
              className="mt-5 font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-700 to-violet-800 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-2 -top-6 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Mail size={23} />
              </div>
              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Good stories deserve a place in your inbox.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-indigo-100">
                Get community highlights, important announcements, and
                interesting ideas delivered to you.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                  <p className="text-lg font-bold">Thanks for your interest!</p>
                  <p className="mt-2 text-sm leading-6 text-indigo-100">
                    This demo confirms the form interaction. Connect a
                    newsletter backend to save subscriptions.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="mt-4 text-sm font-semibold underline underline-offset-4"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address for newsletter"
                    className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-indigo-200 focus:border-white/50 focus:bg-white/15"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
                  >
                    Subscribe
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}

              <p className="mt-3 text-xs leading-5 text-indigo-200">
                No spam. Just useful updates. Newsletter subscriptions are
                not saved until a backend is connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="news-modal-title"
            className="my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative bg-gradient-to-br ${selectedArticle.gradient} px-7 py-10 text-white sm:px-10`}
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
              >
                <X size={20} />
              </button>

              <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wider">
                {selectedArticle.category}
              </span>

              <h2
                id="news-modal-title"
                className="mt-5 max-w-xl text-2xl font-bold leading-snug sm:text-3xl"
              >
                {selectedArticle.title}
              </h2>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <p className="text-sm font-semibold text-indigo-700">
                {selectedArticle.author}
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {selectedArticle.excerpt}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our community grows stronger when people exchange ideas,
                share experiences, and create opportunities together. We
                continue to explore ways to make these connections more
                valuable and accessible to everyone.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/directory"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Explore community
                  <ArrowRight size={17} />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Close article
                </button>
              </div>

              <p className="mt-6 text-xs leading-5 text-slate-400">
                Demo content for layout preview. Replace these sample stories
                with verified articles from your news API or CMS before
                publishing.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
