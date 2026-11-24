import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Globe,
  Sparkles,
  Network,
  HandHeart,
  Lightbulb,
  Compass,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Unity & Belonging",
    description:
      "Bring families and individuals closer through meaningful connections and shared experiences.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Privacy",
    description:
      "Build a respectful digital environment where member information is handled responsibly.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Target,
    title: "Shared Progress",
    description:
      "Connect people with education, careers, business opportunities, and welfare initiatives.",
    color: "bg-amber-50 text-amber-600",
  },
];

const highlights = [
  { icon: Users, title: "Connected people", text: "Stronger relationships" },
  { icon: Globe, title: "Digital access", text: "Community from anywhere" },
  { icon: HandHeart, title: "Collective support", text: "Progress through helping" },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-5 py-20 sm:py-28 lg:px-8">
        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 animate-pulse rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-bold text-indigo-700 shadow-sm">
              <Sparkles size={16} />
              Discover our story
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Rooted in heritage.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Connected for tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              A community is more than a group of people. It is our shared
              history, our relationships, our traditions, and the future we
              build together.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              Our digital platform brings these connections into one place,
              making it easier to discover opportunities, support one another,
              and celebrate what makes our community special.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:bg-indigo-700"
              >
                Become a member
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/directory"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-700"
              >
                Meet the community
                <Users size={18} />
              </Link>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative mx-auto w-full max-w-xl animate-fade-up">
            <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl" />
            <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-full bg-fuchsia-300/40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white/70 p-3 shadow-2xl shadow-indigo-200/60 backdrop-blur-xl sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-7 text-white sm:p-9">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                  <Network size={32} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-indigo-200">
                  Our purpose
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Together, we can build something meaningful.
                </h2>

                <p className="mt-5 leading-7 text-indigo-100">
                  Bringing people together through relationships, opportunity,
                  service, and a shared sense of belonging.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition duration-300 hover:bg-white/20">
                    <Users size={24} />
                    <p className="mt-4 font-bold">Relationships</p>
                    <p className="mt-1 text-xs leading-5 text-indigo-100">
                      Connect across generations
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition duration-300 hover:bg-white/20">
                    <Lightbulb size={24} />
                    <p className="mt-4 font-bold">Opportunities</p>
                    <p className="mt-1 text-xs leading-5 text-indigo-100">
                      Discover new possibilities
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition duration-300 hover:bg-white/20">
                    <HeartHandshake size={24} />
                    <p className="mt-4 font-bold">Support</p>
                    <p className="mt-1 text-xs leading-5 text-indigo-100">
                      Help each other grow
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 transition duration-300 hover:bg-white/20">
                    <Compass size={24} />
                    <p className="mt-4 font-bold">Heritage</p>
                    <p className="mt-1 text-xs leading-5 text-indigo-100">
                      Preserve our roots
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-3 hidden animate-bounce items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck size={23} />
              </div>
              <div>
                <p className="text-sm font-bold">People first</p>
                <p className="mt-1 text-xs text-slate-500">
                  Community at the heart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction strip */}
      <section className="border-y border-slate-100 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-4 transition duration-300 hover:-translate-y-1 sm:justify-center"
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission and vision */}
      <section className="px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
              <Target size={27} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Our mission
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Make community connections meaningful.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Create an accessible digital space where members can discover
              community resources, connect with families, explore professional
              opportunities, participate in events, and contribute to welfare
              initiatives.
            </p>
          </article>

          <article className="group rounded-3xl bg-gradient-to-br from-indigo-700 to-violet-700 p-8 text-white shadow-xl shadow-indigo-200 transition duration-300 hover:-translate-y-2 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Eye size={27} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
              Our vision
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              A future where no connection is out of reach.
            </h2>

            <p className="mt-5 leading-8 text-indigo-100">
              Build a stronger, more connected community where people can
              preserve their heritage, support the next generation, share
              knowledge, and create opportunities for collective progress.
            </p>
          </article>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-slate-50 px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
              <Sparkles size={14} />
              What guides us
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Values that bring us together.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The principles behind a platform built to serve people and
              strengthen community connections.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description, color }, index) => (
              <article
                key={title}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group animate-fade-up rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 ${color}`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-violet-400/20 blur-2xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                <HeartHandshake size={17} />
                Your community. Your future.
              </p>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                Every great community starts with a connection.
              </h2>

              <p className="mt-4 leading-7 text-indigo-100">
                Take the first step. Join the community and be part of
                something meaningful.
              </p>
            </div>

            <Link
              to="/register"
              className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-indigo-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
            >
              Join the community
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}