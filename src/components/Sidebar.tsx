import React from 'react'

import AccountIcon from '../icons/Account.svg?react'
import PaymentsIcon from '../icons/Payments.svg?react'
import HomeIcon from '../icons/Home.svg?react'
import CreditIcon from '../icons/Credit.svg?react'
import LogoIcon from '../icons/Logo.svg?react'



export default function Sidebar() {
  return (
    <aside className="aside p-12 hidden lg:block">
      <div className="mb-5">
        <div className="text-2xl font-bold"><LogoIcon className={"text-primary"} /></div>
        <div className="text-xs opacity-80 mt-2">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
      </div>

      <nav className="space-y-14 mt-16">
        <div className="flex items-center gap-3 text-sm"><HomeIcon className="text-white"/> Home</div>
        <div className="flex items-center gap-3 text-sm text-primary"><CreditIcon className={"text-primary"} /> Cards</div>
        <div className="flex items-center gap-3 text-sm"><PaymentsIcon /> Payments</div>
        <div className="flex items-center gap-3 text-sm"><AccountIcon /> Settings</div>
      </nav>
    </aside>
  )
}
