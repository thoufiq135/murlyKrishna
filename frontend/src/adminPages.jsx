
import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Users,
  Network,
  ShieldCheck,
  FileText,
  HandHeart,
  CreditCard,
  MessageSquare,
  BarChart3,
  Search,
  Bell,
  Settings,
  Menu,
  X,
  Check,
  Ban,
  Eye,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Filter,
  Send,
  TrendingUp,
  Wallet,
  UserCheck,
  Mail,
  ChevronRight,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const adminNavigation = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Member Approvals", path: "/admin/members", icon: Users },
  { label: "Committees", path: "/admin/committees", icon: Network },
  { label: "Verification", path: "/admin/verification", icon: ShieldCheck },
  { label: "Content", path: "/admin/content", icon: FileText },
  { label: "Welfare", path: "/admin/welfare", icon: HandHeart },
  { label: "Payments", path: "/admin/payments", icon: CreditCard },
  { label: "Communications", path: "/admin/communications", icon: MessageSquare },
  { label: "Admin Hierarchy", path: "/admin/locations", icon: MapPin },
  { label: "Reports & Settings", path: "/admin/reports", icon: BarChart3 },
];

const initialMembers = [
  { id: "MEM-1001", name: "Arjun Reddy", email: "arjun@example.com", category: "Professional", date: "Oct 22, 2026", status: "Pending" },
  { id: "MEM-1002", name: "Priya Sharma", email: "priya@example.com", category: "Student", date: "Oct 21, 2026", status: "Pending" },
  { id: "MEM-1003", name: "Rahul Varma", email: "rahul@example.com", category: "Business", date: "Oct 20, 2026", status: "Approved" },
  { id: "MEM-1004", name: "Sneha Kumar", email: "sneha@example.com", category: "Professional", date: "Oct 19, 2026", status: "Pending" },
  { id: "MEM-1005", name: "Vikram Rao", email: "vikram@example.com", category: "Business", date: "Oct 18, 2026", status: "Rejected" },
];

const initialCommittees = [
  { id: "COM-001", name: "Education Committee", lead: "Arjun Reddy", members: 12, status: "Active" },
  { id: "COM-002", name: "Welfare Committee", lead: "Priya Sharma", members: 8, status: "Active" },
  { id: "COM-003", name: "Business Development", lead: "Rahul Varma", members: 10, status: "Active" },
  { id: "COM-004", name: "Youth Committee", lead: "Sneha Kumar", members: 6, status: "Pending" },
];

const initialVerification = [
  { id: "VER-001", name: "Karthik Naidu", type: "Identity document", submitted: "Oct 22, 2026", status: "Pending" },
  { id: "VER-002", name: "Meera Patel", type: "Address proof", submitted: "Oct 21, 2026", status: "Pending" },
  { id: "VER-003", name: "Ananya Reddy", type: "Professional certificate", submitted: "Oct 20, 2026", status: "Verified" },
];

const initialContent = [
  { id: "CNT-001", name: "Annual Community Gathering", type: "Event", author: "Admin Team", date: "Oct 22, 2026", status: "Published" },
  { id: "CNT-002", name: "Education Support Initiative", type: "Announcement", author: "Welfare Team", date: "Oct 21, 2026", status: "Draft" },
  { id: "CNT-003", name: "Community Newsletter", type: "News", author: "Editorial Team", date: "Oct 20, 2026", status: "Published" },
  { id: "CNT-004", name: "Volunteer Registration", type: "Announcement", author: "Admin Team", date: "Oct 19, 2026", status: "Pending" },
];

const initialWelfare = [
  { id: "WEL-001", name: "Student Education Assistance", applicant: "Ravi Kumar", type: "Education", amount: "₹15,000", status: "Pending" },
  { id: "WEL-002", name: "Medical Support Request", applicant: "Sita Devi", type: "Healthcare", amount: "₹10,000", status: "Under Review" },
  { id: "WEL-003", name: "Emergency Family Support", applicant: "Mohan Rao", type: "Emergency", amount: "₹20,000", status: "Approved" },
];

const initialPayments = [
  { id: "PAY-1001", name: "Arjun Reddy", type: "Membership", amount: "₹1,000", date: "Oct 22, 2026", status: "Completed" },
  { id: "PAY-1002", name: "Priya Sharma", type: "Event Registration", amount: "₹500", date: "Oct 21, 2026", status: "Pending" },
  { id: "PAY-1003", name: "Rahul Varma", type: "Donation", amount: "₹5,000", date: "Oct 20, 2026", status: "Completed" },
  { id: "PAY-1004", name: "Sneha Kumar", type: "Membership", amount: "₹1,000", date: "Oct 19, 2026", status: "Failed" },
];

const initialMessages = [
  { id: "MSG-001", name: "Membership Renewal Reminder", audience: "All Members", date: "Oct 22, 2026", status: "Draft" },
  { id: "MSG-002", name: "Community Event Announcement", audience: "All Members", date: "Oct 21, 2026", status: "Sent" },
  { id: "MSG-003", name: "Volunteer Recruitment", audience: "Volunteers", date: "Oct 20, 2026", status: "Scheduled" },
];

const resourceConfig = {
  members: {
    title: "Member Approvals",
    eyebrow: "Member administration",
    description: "Review membership applications and manage member approval status.",
    icon: Users,
    searchPlaceholder: "Search name, email, or member ID...",
    columns: [
      ["id", "Member ID"],
      ["name", "Member"],
      ["category", "Category"],
      ["date", "Applied"],
      ["status", "Status"],
    ],
    initialData: initialMembers,
    filters: ["All", "Pending", "Approved", "Rejected"],
    actions: ["Approve", "Reject"],
    buttonLabel: "Add member",
  },
  committees: {
    title: "Committees",
    eyebrow: "Community governance",
    description: "Organize committees, manage leadership, and review committee status.",
    icon: Network,
    searchPlaceholder: "Search committee or committee lead...",
    columns: [
      ["id", "Committee ID"],
      ["name", "Committee"],
      ["lead", "Committee lead"],
      ["members", "Members"],
      ["status", "Status"],
    ],
    initialData: initialCommittees,
    filters: ["All", "Active", "Pending", "Inactive"],
    actions: ["Activate", "Deactivate"],
    buttonLabel: "Create committee",
  },
  verification: {
    title: "Member Verification",
    eyebrow: "Trust & safety",
    description: "Review submitted verification documents and update review outcomes.",
    icon: ShieldCheck,
    searchPlaceholder: "Search member, document, or verification ID...",
    columns: [
      ["id", "Request ID"],
      ["name", "Member"],
      ["type", "Document type"],
      ["submitted", "Submitted"],
      ["status", "Status"],
    ],
    initialData: initialVerification,
    filters: ["All", "Pending", "Verified", "Rejected"],
    actions: ["Verify", "Reject"],
    buttonLabel: "Review queue",
  },
  content: {
    title: "Content Management",
    eyebrow: "Publishing & moderation",
    description: "Review announcements, news, events, and other community content.",
    icon: FileText,
    searchPlaceholder: "Search title, type, or author...",
    columns: [
      ["id", "Content ID"],
      ["name", "Title"],
      ["type", "Type"],
      ["author", "Author"],
      ["status", "Status"],
    ],
    initialData: initialContent,
    filters: ["All", "Published", "Draft", "Pending", "Archived"],
    actions: ["Publish", "Archive"],
    buttonLabel: "Create content",
  },
  welfare: {
    title: "Welfare Management",
    eyebrow: "Community assistance",
    description: "Review assistance requests, manage applications, and track support programs.",
    icon: HandHeart,
    searchPlaceholder: "Search applicant, request ID, or program...",
    columns: [
      ["id", "Request ID"],
      ["name", "Program"],
      ["applicant", "Applicant"],
      ["amount", "Requested amount"],
      ["status", "Status"],
    ],
    initialData: initialWelfare,
    filters: ["All", "Pending", "Under Review", "Approved", "Rejected"],
    actions: ["Approve", "Reject"],
    buttonLabel: "New program",
  },
  payments: {
    title: "Payments",
    eyebrow: "Financial overview",
    description: "Review sample transactions and monitor payment status.",
    icon: CreditCard,
    searchPlaceholder: "Search transaction, member, or payment type...",
    columns: [
      ["id", "Transaction ID"],
      ["name", "Member"],
      ["type", "Payment type"],
      ["amount", "Amount"],
      ["date", "Date"],
      ["status", "Status"],
    ],
    initialData: initialPayments,
    filters: ["All", "Completed", "Pending", "Failed", "Refunded"],
    actions: [],
    buttonLabel: "Export report",
  },
  communications: {
    title: "Communications",
    eyebrow: "Member engagement",
    description: "Prepare announcements and manage communication campaign drafts.",
    icon: MessageSquare,
    searchPlaceholder: "Search campaign or audience...",
    columns: [
      ["id", "Campaign ID"],
      ["name", "Campaign"],
      ["audience", "Audience"],
      ["date", "Date"],
      ["status", "Status"],
    ],
    initialData: initialMessages,
    filters: ["All", "Draft", "Scheduled", "Sent"],
    actions: ["Send", "Cancel"],
    buttonLabel: "New campaign",
  },
};

const statusStyles = {
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  "Under Review": "bg-sky-50 text-sky-700 ring-sky-200",
  Approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Verified: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Sent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Rejected: "bg-rose-50 text-rose-700 ring-rose-200",
  Failed: "bg-rose-50 text-rose-700 ring-rose-200",
  Inactive: "bg-slate-100 text-slate-600 ring-slate-200",
  Deactivated: "bg-slate-100 text-slate-600 ring-slate-200",
  Archived: "bg-slate-100 text-slate-600 ring-slate-200",
  Draft: "bg-violet-50 text-violet-700 ring-violet-200",
  Scheduled: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Cancelled: "bg-slate-100 text-slate-600 ring-slate-200",
};

function StatusBadge({ status }) {
  const style =
    statusStyles[status] || "bg-slate-100 text-slate-600 ring-slate-200";

  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${style}`}>
      <span className="mr-1.5 mt-1 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function AdminShell({ title, description, icon: PageIcon, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/admin";

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <a href="/admin" className="flex items-center gap-3 px-5 py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200">
          <Users size={23} />
        </div>
        <div>
          <p className="font-bold tracking-tight text-slate-900">Community</p>
          <p className="mt-0.5 text-xs font-medium text-slate-500">Admin Console</p>
        </div>
      </a>

      <div className="mx-4 mb-4 rounded-xl bg-indigo-50 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
          <ShieldCheck size={15} />
          Administration
        </div>
        <p className="mt-1 text-xs leading-5 text-indigo-800/70">
          Manage your community platform.
        </p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Workspace
        </p>
        {adminNavigation.map((item) => {
          const Icon = item.icon;
          const active =
            item.path === "/admin"
              ? currentPath === "/admin"
              : currentPath === item.path;

          return (
            <a
              key={item.path}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                active
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-indigo-700"
              }`}
            >
              <Icon size={18} />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight size={15} />}
            </a>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <a
          href="/dashboard"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          <LayoutDashboard size={18} />
          Member dashboard
          <ArrowUpRight size={15} className="ml-auto" />
        </a>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
            AD
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">
              Admin User
            </p>
            <p className="text-xs text-slate-500">Demo administrator</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[270px] border-r border-slate-200 bg-white lg:block">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-slate-950/50"
          />
          <aside className="absolute inset-y-0 left-0 w-[290px] bg-white shadow-2xl">
            <div className="flex items-center justify-end px-4 pt-3">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>
            <div className="h-[calc(100%-48px)]">
              <SidebarContent />
            </div>
          </aside>
        </div>
      )}

      <div className="lg:pl-[270px]">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 sm:px-7 lg:px-9">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
                className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <PageIcon size={21} />
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-lg font-bold text-slate-900 sm:text-xl">
                  {title}
                </h1>
                <p className="hidden truncate text-xs text-slate-500 sm:block">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <span className="hidden rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 sm:inline-flex">
                Demo environment
              </span>
              <button
                aria-label="Notifications"
                title="Notifications"
                className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
              >
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
              </button>
              <a
                href="/profile-setup"
                aria-label="Admin profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white"
              >
                AD
              </a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-4 py-7 sm:px-7 lg:px-9 lg:py-9">
          {children}
          <footer className="mt-12 border-t border-slate-200 py-6 text-center text-xs leading-5 text-slate-400">
            Community Admin Console · Frontend demonstration · Connect secure APIs before production use.
          </footer>
        </main>
      </div>
    </div>
  );
}

function MetricCard({ label, value, note, icon: Icon, tone = "indigo" }) {
  const tones = {
    indigo: "bg-indigo-50 text-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    violet: "bg-violet-50 text-violet-600",
    rose: "bg-rose-50 text-rose-600",
    sky: "bg-sky-50 text-sky-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}>
          <Icon size={21} />
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">{note}</p>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <AdminShell
      title="Admin Dashboard"
      description="Overview of your community platform"
      icon={LayoutDashboard}
    >
      <div className="relative isolate mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 p-6 sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
              <ShieldCheck size={14} />
              Administration center
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Welcome to your control center.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100/80 sm:text-base">
              Review applications, manage community services, and monitor activity from one place.
            </p>
          </div>
          <a
            href="/admin/members"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-indigo-900 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Review applications
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Total members" value="2,486" note="Illustrative total member count" icon={Users} tone="indigo" />
        <MetricCard label="Pending approvals" value="24" note="Sample applications awaiting review" icon={Clock3} tone="amber" />
        <MetricCard label="Verified members" value="1,840" note="Illustrative verification count" icon={UserCheck} tone="emerald" />
        <MetricCard label="Payment volume" value="₹2.4L" note="Sample reporting figure, not live revenue" icon={Wallet} tone="violet" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-5">
            <div>
              <h3 className="font-bold text-slate-900">Recent applications</h3>
              <p className="mt-1 text-xs text-slate-500">Sample member requests</p>
            </div>
            <a href="/admin/members" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
              View all
            </a>
          </div>
          <div className="divide-y divide-slate-100">
            {initialMembers.slice(0, 4).map((member) => (
              <div key={member.id} className="flex items-center justify-between gap-3 p-4 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">
                    {member.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{member.name}</p>
                    <p className="mt-1 truncate text-xs text-slate-500">{member.email}</p>
                  </div>
                </div>
                <StatusBadge status={member.status} />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-bold text-slate-900">Quick actions</h3>
          <p className="mt-1 text-xs text-slate-500">Jump into a management area</p>
          <div className="mt-5 space-y-3">
            {[
              [Users, "Approve members", "Review new applications", "/admin/members"],
              [ShieldCheck, "Verify documents", "Review identity submissions", "/admin/verification"],
              [HandHeart, "Welfare requests", "Review assistance applications", "/admin/welfare"],
              [FileText, "Manage content", "Moderate community publishing", "/admin/content"],
            ].map(([Icon, title, subtitle, href]) => (
              <a key={href} href={href} className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-indigo-100 hover:bg-indigo-50/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-indigo-600">
                  <Icon size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                </div>
                <ChevronRight size={17} className="text-slate-400 group-hover:text-indigo-600" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 shrink-0 text-amber-700" size={20} />
          <div>
            <h3 className="font-bold text-amber-950">Demo data notice</h3>
            <p className="mt-1 text-sm leading-6 text-amber-900/80">
              Dashboard metrics are illustrative values. Replace them with authenticated backend API responses before relying on these figures.
            </p>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

function ResourcePage({ type }) {
  const config = resourceConfig[type];
  const PageIcon = config.icon;

  const [rows, setRows] = useState(config.initialData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [notice, setNotice] = useState("");
  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newExtra, setNewExtra] = useState("");

  const filteredRows = useMemo(() => {
    const query = search.toLowerCase().trim();

    return rows.filter((row) => {
      const values = Object.values(row).join(" ").toLowerCase();
      const matchesSearch = !query || values.includes(query);
      const matchesFilter = filter === "All" || row.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [rows, search, filter]);

  const pendingCount = rows.filter((row) =>
    ["Pending", "Under Review", "Draft", "Scheduled"].includes(row.status)
  ).length;

  const setMessage = (message) => {
    setNotice(message);
  };

  const updateStatus = (id, action) => {
    const nextStatus = {
      Approve: "Approved",
      Reject: "Rejected",
      Verify: "Verified",
      Activate: "Active",
      Deactivate: "Inactive",
      Publish: "Published",
      Archive: "Archived",
      Send: "Sent",
      Cancel: "Cancelled",
    }[action];

    if (!nextStatus) return;

    setRows((current) =>
      current.map((row) =>
        row.id === id ? { ...row, status: nextStatus } : row
      )
    );
    setMessage(`${id} updated to "${nextStatus}" in this demo only.`);
  };

  const handlePrimaryAction = () => {
    if (type === "payments") {
      setMessage("Demo only: connect a reporting API to export real payment data.");
      return;
    }
    if (type === "verification") {
      setMessage("Select a verification request below to review its status.");
      return;
    }
    setNewName("");
    setNewExtra("");
    setModal(true);
  };

  const addDemoRow = (event) => {
    event.preventDefault();

    if (!newName.trim()) return;

    const prefix = {
      members: "MEM",
      committees: "COM",
      content: "CNT",
      welfare: "WEL",
      communications: "MSG",
    }[type] || "NEW";

    let newRow;

    if (type === "members") {
      newRow = {
        id: `${prefix}-${Date.now().toString().slice(-5)}`,
        name: newName.trim(),
        email: newExtra.trim() || "Not provided",
        category: "New applicant",
        date: "Just now",
        status: "Pending",
      };
    } else if (type === "committees") {
      newRow = {
        id: `${prefix}-${Date.now().toString().slice(-5)}`,
        name: newName.trim(),
        lead: newExtra.trim() || "Not assigned",
        members: 0,
        status: "Pending",
      };
    } else if (type === "content") {
      newRow = {
        id: `${prefix}-${Date.now().toString().slice(-5)}`,
        name: newName.trim(),
        type: newExtra.trim() || "Announcement",
        author: "Admin User",
        date: "Just now",
        status: "Draft",
      };
    } else if (type === "welfare") {
      newRow = {
        id: `${prefix}-${Date.now().toString().slice(-5)}`,
        name: newName.trim(),
        applicant: newExtra.trim() || "Not assigned",
        type: "General",
        amount: "To be assessed",
        status: "Pending",
      };
    } else {
      newRow = {
        id: `${prefix}-${Date.now().toString().slice(-5)}`,
        name: newName.trim(),
        audience: newExtra.trim() || "All Members",
        date: "Not scheduled",
        status: "Draft",
      };
    }

    setRows((current) => [newRow, ...current]);
    setFilter("All");
    setSearch("");
    setModal(false);
    setMessage("Added to the current page state. It is not saved to a server.");
  };

  return (
    <AdminShell
      title={config.title}
      description={config.description}
      icon={PageIcon}
    >
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
            {config.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Manage {config.title.toLowerCase()}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            {config.description}
          </p>
        </div>
        <button
          onClick={handlePrimaryAction}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          {type === "payments" ? <BarChart3 size={17} /> : <Plus size={17} />}
          {config.buttonLabel}
        </button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <MetricCard
          label="Total records"
          value={rows.length.toString()}
          note="Records currently loaded on this page"
          icon={PageIcon}
          tone="indigo"
        />
        <MetricCard
          label="Needs attention"
          value={pendingCount.toString()}
          note="Sample records in review or draft states"
          icon={Clock3}
          tone="amber"
        />
        <MetricCard
          label="Approved / complete"
          value={rows.filter((row) =>
            ["Approved", "Verified", "Active", "Completed", "Published", "Sent"].includes(row.status)
          ).length.toString()}
          note="Based on the current page status labels"
          icon={CheckCircle2}
          tone="emerald"
        />
      </div>

      {type === "payments" && (
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-500">Sample completed transactions</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {rows.filter((row) => row.status === "Completed").length}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              This count is calculated from the demo table.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-500">Payment processing</p>
            <p className="mt-2 text-lg font-bold text-slate-900">Not connected</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Connect your payment provider and server-side transaction verification before production.
            </p>
          </div>
        </div>
      )}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={config.searchPlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={17} className="text-slate-400" />
              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                className="min-w-36 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-indigo-400"
              >
                {config.filters.map((item) => (
                  <option key={item} value={item}>{item === "All" ? "All statuses" : item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-slate-500">
              Showing {filteredRows.length} of {rows.length} records
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Reset filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-slate-50">
              <tr>
                {config.columns.map(([key, label]) => (
                  <th
                    key={key}
                    className="px-5 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    {label}
                  </th>
                ))}
                <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRows.map((row) => (
                <tr key={row.id} className="transition hover:bg-slate-50/80">
                  {config.columns.map(([key]) => (
                    <td key={key} className="px-5 py-4 text-sm">
                      {key === "status" ? (
                        <StatusBadge status={row[key]} />
                      ) : key === "name" ? (
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xs font-bold text-indigo-700">
                            {(row[key] || "?")
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <span className="whitespace-nowrap font-semibold text-slate-800">
                            {row[key]}
                          </span>
                        </div>
                      ) : (
                        <span className="whitespace-nowrap text-slate-600">
                          {row[key] ?? "—"}
                        </span>
                      )}
                    </td>
                  ))}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {config.actions.length > 0 ? (
                        config.actions.map((action) => {
                          const disabled =
                            (["Approve", "Verify", "Activate", "Publish", "Send"].includes(action) &&
                              ["Approved", "Verified", "Active", "Published", "Sent"].includes(row.status)) ||
                            (["Reject", "Deactivate", "Archive", "Cancel"].includes(action) &&
                              ["Rejected", "Inactive", "Archived", "Cancelled"].includes(row.status));

                          return (
                            <button
                              key={action}
                              disabled={disabled}
                              onClick={() => updateStatus(row.id, action)}
                              className={`rounded-lg border px-2.5 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
                                ["Approve", "Verify", "Activate", "Publish", "Send"].includes(action)
                                  ? "border-emerald-100 text-emerald-700 hover:bg-emerald-50"
                                  : "border-slate-200 text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              {action}
                            </button>
                          );
                        })
                      ) : (
                        <button
                          onClick={() => setMessage("Transaction detail view can be connected to your payments API.")}
                          className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100"
                          aria-label={`View ${row.id}`}
                        >
                          <Eye size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredRows.length === 0 && (
                <tr>
                  <td
                    colSpan={config.columns.length + 1}
                    className="px-5 py-14 text-center"
                  >
                    <Search className="mx-auto text-slate-300" size={28} />
                    <p className="mt-3 font-semibold text-slate-800">No records found</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Try changing your search or status filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
          <p className="text-xs leading-5 text-slate-500">
            Changes on this page exist only in browser memory. Connect authenticated server endpoints to persist administrative actions.
          </p>
        </div>
      </section>

      {notice && (
        <div role="status" className="mt-5 flex items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-sm leading-6 text-indigo-800">
          <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
          <p>{notice}</p>
          <button onClick={() => setNotice("")} aria-label="Dismiss notice" className="ml-auto text-indigo-500 hover:text-indigo-800">
            <X size={17} />
          </button>
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModal(false);
          }}
        >
          <form
            onSubmit={addDemoRow}
            className="my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {config.buttonLabel}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Add a sample record to this page.
                </p>
              </div>
              <button type="button" onClick={() => setModal(false)} aria-label="Close dialog" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
                <X size={19} />
              </button>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                {type === "members" ? "Member name" :
                  type === "committees" ? "Committee name" :
                  type === "content" ? "Content title" :
                  type === "welfare" ? "Program name" : "Campaign name"}
              </span>
              <input
                autoFocus
                required
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                placeholder="Enter a name..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                {type === "members" ? "Email address" :
                  type === "committees" ? "Committee lead" :
                  type === "content" ? "Content type" :
                  type === "welfare" ? "Applicant name" : "Target audience"}
              </span>
              <input
                value={newExtra}
                onChange={(event) => setNewExtra(event.target.value)}
                placeholder="Optional"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
              />
            </label>

            <div className="mt-6 flex gap-3">
              <button type="button" onClick={() => setModal(false)} className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" className="flex-1 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
                Add demo record
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              This does not create a server record or send a real notification.
            </p>
          </form>
        </div>
      )}
    </AdminShell>
  );
}

export function MemberApprovals() {
  return <ResourcePage type="members" />;
}

export function Committees() {
  return <ResourcePage type="committees" />;
}

export function Verification() {
  return <ResourcePage type="verification" />;
}

export function ContentManagement() {
  return <ResourcePage type="content" />;
}

export function WelfareManagement() {
  return <ResourcePage type="welfare" />;
}

export function Payments() {
  return <ResourcePage type="payments" />;
}

export function Communications() {
  return <ResourcePage type="communications" />;
}

const cityAdmins = [
  { id: "ADM-001", name: "Arjun Reddy", email: "arjun.admin@example.com" },
  { id: "ADM-002", name: "Priya Sharma", email: "priya.admin@example.com" },
  { id: "ADM-003", name: "Rahul Varma", email: "rahul.admin@example.com" },
  { id: "ADM-004", name: "Sneha Kumar", email: "sneha.admin@example.com" },
  { id: "ADM-005", name: "Vikram Rao", email: "vikram.admin@example.com" },
  { id: "ADM-006", name: "Meera Patel", email: "meera.admin@example.com" },
];

const stateAdmins = [
  { id: "STATE-001", name: "Sravani Rao", email: "sravani.admin@example.com" },
  { id: "STATE-002", name: "Naveen Reddy", email: "naveen.admin@example.com" },
  { id: "STATE-003", name: "Lakshmi Devi", email: "lakshmi.admin@example.com" },
  { id: "STATE-004", name: "Deepa Kumar", email: "deepa.admin@example.com" },
  { id: "STATE-005", name: "Amit Patel", email: "amit.admin@example.com" },
];

const initialStateAdminAssignments = [
  { state: "Andhra Pradesh", adminId: "STATE-001" },
  { state: "Telangana", adminId: "STATE-002" },
  { state: "Tamil Nadu", adminId: "STATE-003" },
  { state: "Karnataka", adminId: "STATE-004" },
  { state: "Maharashtra", adminId: "STATE-005" },
];

const initialCityAssignments = [
  { id: "CITY-001", state: "Andhra Pradesh", city: "Nellore", adminId: "ADM-001", activity: { members: 8, verifications: 2, events: 1, welfare: 1 } },
  { id: "CITY-002", state: "Andhra Pradesh", city: "Tirupati", adminId: "ADM-002", activity: { members: 5, verifications: 1, events: 2, welfare: 1 } },
  { id: "CITY-003", state: "Andhra Pradesh", city: "Visakhapatnam", adminId: "ADM-003", activity: { members: 12, verifications: 3, events: 2, welfare: 2 } },
  { id: "CITY-004", state: "Telangana", city: "Hyderabad", adminId: "ADM-004", activity: { members: 18, verifications: 4, events: 3, welfare: 2 } },
  { id: "CITY-005", state: "Telangana", city: "Warangal", adminId: "ADM-005", activity: { members: 6, verifications: 1, events: 1, welfare: 1 } },
  { id: "CITY-006", state: "Tamil Nadu", city: "Chennai", adminId: "ADM-006", activity: { members: 15, verifications: 3, events: 2, welfare: 2 } },
  { id: "CITY-007", state: "Tamil Nadu", city: "Coimbatore", adminId: "ADM-002", activity: { members: 7, verifications: 2, events: 1, welfare: 1 } },
  { id: "CITY-008", state: "Karnataka", city: "Bengaluru", adminId: "ADM-003", activity: { members: 20, verifications: 5, events: 4, welfare: 2 } },
  { id: "CITY-009", state: "Karnataka", city: "Mysuru", adminId: "ADM-004", activity: { members: 5, verifications: 1, events: 1, welfare: 0 } },
  { id: "CITY-010", state: "Maharashtra", city: "Mumbai", adminId: "ADM-005", activity: { members: 16, verifications: 4, events: 3, welfare: 2 } },
  { id: "CITY-011", state: "Maharashtra", city: "Pune", adminId: "ADM-006", activity: { members: 9, verifications: 2, events: 2, welfare: 1 } },
];

export function CityStateManagement() {
  const [assignments, setAssignments] = useState(initialCityAssignments);
  const [stateAdminAssignments, setStateAdminAssignments] = useState(
    initialStateAdminAssignments
  );
  const [previewRole, setPreviewRole] = useState("main");
  const [selectedState, setSelectedState] = useState("Andhra Pradesh");
  const [selectedCityId, setSelectedCityId] = useState("CITY-001");
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const states = useMemo(
    () => [...new Set(assignments.map((assignment) => assignment.state))].sort(),
    [assignments]
  );

  const citiesInSelectedState = assignments.filter(
    (assignment) => assignment.state === selectedState
  );

  const visibleAssignments = assignments.filter((assignment) => {
    if (previewRole === "main") return true;
    if (assignment.state !== selectedState) return false;
    return previewRole !== "city" || assignment.id === selectedCityId;
  });

  const filteredAssignments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return visibleAssignments.filter((assignment) => {
      const admin = cityAdmins.find((item) => item.id === assignment.adminId);
      const matchesSearch =
        !query ||
        `${assignment.city} ${assignment.state} ${admin?.name ?? ""} ${admin?.email ?? ""}`
          .toLowerCase()
          .includes(query);

      return matchesSearch;
    });
  }, [visibleAssignments, search]);

  const updateCityAdmin = (cityId, adminId) => {
    const assignment = assignments.find((item) => item.id === cityId);
    const admin = cityAdmins.find((item) => item.id === adminId);
    if (!assignment || !admin || previewRole === "city") return;

    setAssignments((current) =>
      current.map((item) =>
        item.id === cityId ? { ...item, adminId } : item
      )
    );
    setNotice(`${admin.name} is now assigned to ${assignment.city}.`);
  };

  const updateStateAdmin = (state, adminId) => {
    const admin = stateAdmins.find((item) => item.id === adminId);
    if (!admin || previewRole !== "main") return;

    setStateAdminAssignments((current) =>
      current.map((assignment) =>
        assignment.state === state ? { ...assignment, adminId } : assignment
      )
    );
    setNotice(`${admin.name} is now assigned to ${state}.`);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    const firstCity = assignments.find((assignment) => assignment.state === state);
    if (firstCity) setSelectedCityId(firstCity.id);
  };

  const selectedCity =
    assignments.find((assignment) => assignment.id === selectedCityId) ??
    citiesInSelectedState[0];
  const roleHeading =
    previewRole === "main"
      ? "Main Admin · All states and cities"
      : previewRole === "state"
        ? `State Admin · ${selectedState}`
        : `City Admin · ${selectedCity?.city ?? selectedState}`;
  const totals = visibleAssignments.reduce(
    (result, assignment) => ({
      members: result.members + assignment.activity.members,
      verifications: result.verifications + assignment.activity.verifications,
      events: result.events + assignment.activity.events,
      welfare: result.welfare + assignment.activity.welfare,
    }),
    { members: 0, verifications: 0, events: 0, welfare: 0 }
  );
  const visibleStates = [...new Set(visibleAssignments.map((item) => item.state))];
  const managementAreas = [
    { label: "Members & approvals", path: "/admin/members", icon: Users },
    { label: "Identity verifications", path: "/admin/verification", icon: ShieldCheck },
    { label: "Events & content", path: "/admin/content", icon: CalendarDays },
    { label: "Welfare requests", path: "/admin/welfare", icon: HandHeart },
    { label: "Payments", path: "/admin/payments", icon: CreditCard },
    { label: "Communications", path: "/admin/communications", icon: MessageSquare },
  ];

  return (
    <AdminShell
      title="Admin Hierarchy"
      description="Preview the main, state, and city administration structure"
      icon={MapPin}
    >
      <div className="mb-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Administration overview
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Main Admin → State Admin → City Admin
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Review activity across the organization or preview the responsibilities
          and city operations visible at each level.
        </p>
      </div>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <label>
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              Preview role
            </span>
            <select
              value={previewRole}
              onChange={(event) => setPreviewRole(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none focus:border-indigo-400"
            >
              <option value="main">Main Admin</option>
              <option value="state">State Admin</option>
              <option value="city">City Admin</option>
            </select>
          </label>
          {previewRole !== "main" && (
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                State
              </span>
              <select
                value={selectedState}
                onChange={(event) => handleStateChange(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none focus:border-indigo-400"
              >
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </label>
          )}
          {previewRole === "city" && (
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                City
              </span>
              <select
                value={selectedCity?.id ?? ""}
                onChange={(event) => setSelectedCityId(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none focus:border-indigo-400"
              >
                {citiesInSelectedState.map((assignment) => (
                  <option key={assignment.id} value={assignment.id}>
                    {assignment.city}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
        <div className="mt-4 rounded-xl bg-indigo-50 px-4 py-3">
          <p className="font-semibold text-indigo-900">{roleHeading}</p>
          <p className="mt-1 text-xs leading-5 text-indigo-800/80">
            {previewRole === "main"
              ? "Oversees all states, state admins, city admins, and platform activity."
              : previewRole === "state"
                ? "Oversees this state, its cities, city admins, and state-level activity."
                : "Oversees this city’s members, verifications, events, welfare requests, and other operations."}
          </p>
        </div>
      </section>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <MetricCard
          label="States in scope"
          value={visibleStates.length.toString()}
          note={previewRole === "main" ? "Organization-wide view" : "Based on selected role"}
          icon={MapPin}
          tone="indigo"
        />
        <MetricCard
          label="Cities in scope"
          value={filteredAssignments.length.toString()}
          note="Each city has one assigned admin"
          icon={Building2}
          tone="violet"
        />
        <MetricCard
          label="New member applications"
          value={totals.members.toString()}
          note="Sample activity across visible cities"
          icon={Users}
          tone="amber"
        />
        <MetricCard
          label="Pending verifications"
          value={totals.verifications.toString()}
          note="Sample identity review queue"
          icon={ShieldCheck}
          tone="sky"
        />
        <MetricCard
          label="Upcoming events"
          value={totals.events.toString()}
          note="Sample events across visible cities"
          icon={CalendarDays}
          tone="emerald"
        />
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <MetricCard
          label="Open welfare requests"
          value={totals.welfare.toString()}
          note="Sample requests needing attention"
          icon={HandHeart}
          tone="rose"
        />
        <MetricCard
          label="Admins in hierarchy"
          value={(stateAdmins.length + cityAdmins.length + 1).toString()}
          note="One main admin, state admins, and city admins"
          icon={UserCheck}
          tone="emerald"
        />
      </div>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-5">
          <h3 className="font-bold text-slate-900">State and city administrators</h3>
          <p className="mt-1 text-sm text-slate-500">
            Main Admin can assign State Admins. Main and State Admins can assign
            one City Admin to each city.
          </p>
        </div>
        <div className="space-y-4">
          {visibleStates.map((state) => {
            const stateAdminAssignment = stateAdminAssignments.find(
              (item) => item.state === state
            );
            const stateAdmin = stateAdmins.find(
              (item) => item.id === stateAdminAssignment?.adminId
            );
            const stateCities = filteredAssignments.filter(
              (item) => item.state === state
            );

            return (
              <article
                key={state}
                className="overflow-hidden rounded-xl border border-slate-200"
              >
                <div className="flex flex-col justify-between gap-3 bg-slate-50 p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-bold text-slate-900">{state}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {stateCities.length} {stateCities.length === 1 ? "city" : "cities"} in view
                    </p>
                  </div>
                  {previewRole === "main" ? (
                    <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600 sm:min-w-72">
                      State Admin
                      <select
                        value={stateAdminAssignment?.adminId ?? ""}
                        onChange={(event) =>
                          updateStateAdmin(state, event.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal text-slate-700"
                      >
                        {stateAdmins.map((admin) => (
                          <option key={admin.id} value={admin.id}>
                            {admin.name} · {admin.email}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : (
                    <div className="text-sm">
                      <p className="text-xs font-semibold text-slate-500">State Admin</p>
                      <p className="mt-1 font-semibold text-slate-800">
                        {stateAdmin?.name ?? "Not assigned"}
                      </p>
                    </div>
                  )}
                </div>
                <div className="divide-y divide-slate-100">
                  {stateCities.map((assignment) => {
                    const cityAdmin = cityAdmins.find(
                      (item) => item.id === assignment.adminId
                    );

                    return (
                      <div
                        key={assignment.id}
                        className="grid gap-4 p-4 lg:grid-cols-[minmax(120px,0.7fr)_minmax(230px,1.3fr)_1fr]"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-800">
                            {assignment.city}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">{assignment.id}</p>
                        </div>
                        <div>
                          {previewRole === "city" ? (
                            <>
                              <p className="text-xs font-semibold text-slate-500">City Admin</p>
                              <p className="mt-1 text-sm font-semibold text-slate-800">
                                {cityAdmin?.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {cityAdmin?.email}
                              </p>
                            </>
                          ) : (
                            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
                              City Admin
                              <select
                                value={assignment.adminId}
                                onChange={(event) =>
                                  updateCityAdmin(assignment.id, event.target.value)
                                }
                                className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal text-slate-700"
                              >
                                {cityAdmins.map((admin) => (
                                  <option key={admin.id} value={admin.id}>
                                    {admin.name} · {admin.email}
                                  </option>
                                ))}
                              </select>
                            </label>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {[
                            ["New members", assignment.activity.members],
                            ["Verifications", assignment.activity.verifications],
                            ["Events", assignment.activity.events],
                            ["Welfare", assignment.activity.welfare],
                          ].map(([label, count]) => (
                            <div key={label} className="rounded-lg bg-slate-50 px-3 py-2">
                              <p className="text-[10px] text-slate-500">{label}</p>
                              <p className="mt-1 text-sm font-bold text-slate-800">{count}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-4 sm:p-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-bold text-slate-900">Management areas</h3>
              <p className="mt-1 text-sm text-slate-500">
                Admin work areas shown for the selected scope.
              </p>
            </div>
            <label className="relative block sm:w-80">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search city, state, or admin..."
                aria-label="Search visible cities and admins"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </label>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Showing activity for {filteredAssignments.length} of {visibleAssignments.length} cities in this role’s scope
          </p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {managementAreas.map(({ label, path, icon: Icon }) => (
            <a
              key={path}
              href={path}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold text-slate-800">
                {label}
              </span>
              <ChevronRight size={17} className="text-slate-400" />
            </a>
          ))}
        </div>
        <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
          <p className="text-xs leading-5 text-slate-500">
            Activity counts and role previews are illustrative. Admin module
            records are not yet filtered by role or location.
          </p>
        </div>
      </section>

      {notice && (
        <div
          role="status"
          className="mt-5 flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-800"
        >
          <CheckCircle2 size={18} />
          <p>{notice}</p>
          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Dismiss notice"
            className="ml-auto text-indigo-500 hover:text-indigo-800"
          >
            <X size={17} />
          </button>
        </div>
      )}
    </AdminShell>
  );
}

export function ReportsSettings() {
  const [period, setPeriod] = useState("30 days");
  const [notifications, setNotifications] = useState(true);
  const [digest, setDigest] = useState(false);
  const [notice, setNotice] = useState("");

  return (
    <AdminShell
      title="Reports & Settings"
      description="Review platform reporting and administrative preferences"
      icon={BarChart3}
    >
      <div className="mb-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Insights & configuration
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Reports & platform settings
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Review illustrative platform metrics and configure local demo preferences.
        </p>
      </div>

      <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-bold text-slate-900">Platform overview</h3>
            <p className="mt-1 text-sm text-slate-500">
              Sample reporting data — not connected to live analytics.
            </p>
          </div>
          <select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-400"
          >
            <option>7 days</option>
            <option>30 days</option>
            <option>90 days</option>
            <option>12 months</option>
          </select>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Member growth" value="+12.8%" note={`Illustrative trend · ${period}`} icon={TrendingUp} tone="emerald" />
          <MetricCard label="Engagement" value="68.4%" note="Sample engagement figure" icon={Users} tone="indigo" />
          <MetricCard label="Content published" value="48" note="Illustrative content count" icon={FileText} tone="violet" />
          <MetricCard label="Transactions" value="324" note="Sample transaction count" icon={CreditCard} tone="sky" />
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6">
          <div className="flex items-start gap-3">
            <BarChart3 size={22} className="mt-0.5 text-indigo-600" />
            <div>
              <h4 className="font-semibold text-slate-900">Analytics integration required</h4>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Connect your database and reporting endpoints to show actual member growth, payment totals, content engagement, and welfare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Settings size={21} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Admin preferences</h3>
            <p className="mt-1 text-sm text-slate-500">
              Toggle these local demo preferences.
            </p>
          </div>
        </div>

        <div className="mt-6 divide-y divide-slate-100">
          <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Administrative notifications
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Enable the local preference for admin notifications.
              </p>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(event) => setNotifications(event.target.checked)}
              className="h-5 w-5 accent-indigo-600"
            />
          </label>

          <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Summary digest
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Store a local preference for a periodic summary.
              </p>
            </div>
            <input
              type="checkbox"
              checked={digest}
              onChange={(event) => setDigest(event.target.checked)}
              className="h-5 w-5 accent-indigo-600"
            />
          </label>
        </div>

        <button
          onClick={() =>
            setNotice(
              `Demo preferences selected: notifications ${notifications ? "on" : "off"}, summary digest ${digest ? "on" : "off"}. Connect a settings API to save them permanently.`
            )
          }
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Save preferences
        </button>

        {notice && (
          <p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 text-sm leading-6 text-indigo-800">
            {notice}
          </p>
        )}
      </section>
    </AdminShell>
  );
}
