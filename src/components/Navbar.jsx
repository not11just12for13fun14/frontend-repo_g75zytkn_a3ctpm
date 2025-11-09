import { useState } from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar({ onAuthOpen, user, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex items-center gap-6">
      <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
      <a href="#studio" className="text-sm text-slate-600 hover:text-slate-900">Studio</a>
      <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
    </div>
  );

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 grid place-items-center shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-900">MarketMind AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          {user ? (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white grid place-items-center">
                <User className="h-4 w-4" />
              </div>
              <span className="text-sm text-slate-700">{user.name}</span>
              <button onClick={onLogout} className="text-sm px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50 text-slate-700">Logout</button>
            </div>
          ) : (
            <button onClick={onAuthOpen} className="text-sm px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Login / Sign up</button>
          )}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 space-y-4">
            <div className="flex flex-col gap-4">
              <NavLinks />
            </div>
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white grid place-items-center">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-700">{user.name}</span>
                </div>
                <button onClick={onLogout} className="text-sm px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50 text-slate-700">Logout</button>
              </div>
            ) : (
              <button onClick={onAuthOpen} className="w-full text-sm px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Login / Sign up</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
