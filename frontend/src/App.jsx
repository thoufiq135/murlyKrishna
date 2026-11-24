import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import First from './home'
import About from './about'
import PublicDirectory from './PublicDirectory'
import News from './news'
import Events from './events'

import Login from './login'
import Register from './register'
import ProfileSetup from './profilesetup'
import MemberDashboard from './dashboard'
import MemberDirectory from './members'
import {
  AdminDashboard,
  MemberApprovals,
  Committees,
  Verification,
  ContentManagement,
  WelfareManagement,
  Payments,
  Communications,
  ReportsSettings,
} from "./adminPages";
import {
  FamilyTree,
  DigitalID,
  Matrimony,
  MatrimonyManage,
  Businesses,
  Jobs,
  Welfare,
  Spiritual,
} from "./communityPages";
import NearbyRadar from './radar'

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Routes>
        {/* Public website — 6 pages */}
        <Route path="/" element={<First/>} />
        <Route path="/about" element={<About />} />
        <Route path="/directory" element={<PublicDirectory />} />
        <Route path="/news" element={<News/>} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Authentication — 3 pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />

        {/* Member portal — 10 pages */}
        <Route path="/dashboard" element={<MemberDashboard />} />
        <Route path="/members" element={<MemberDirectory />} />
        <Route path="/family-tree" element={<FamilyTree />} />
        <Route path="/digital-id" element={<DigitalID />} />
        <Route path="/matrimony" element={<Matrimony />} />
        <Route path="/matrimony/manage" element={<MatrimonyManage />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/welfare" element={<Welfare />} />
        <Route path="/spiritual" element={<Spiritual />} />

        {/* Administration — 9 pages */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/members" element={<MemberApprovals />} />
        <Route path="/admin/committees" element={<Committees />} />
        <Route path="/admin/verification" element={<Verification />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/welfare" element={<WelfareManagement />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/communications" element={<Communications />} />
        <Route path="/admin/reports" element={<ReportsSettings />} />
<Route path="/nearby" element={<NearbyRadar />} />
        {/* Fallback */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

</BrowserRouter>
  )
}

export default App
