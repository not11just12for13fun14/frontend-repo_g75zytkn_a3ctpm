import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureCards from './components/FeatureCards.jsx';
import Studio from './components/Studio.jsx';
import AuthModal from './components/AuthModal.jsx';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);
  const handleAuth = (u) => setUser(u);
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onAuthOpen={openAuth} user={user} onLogout={handleLogout} />

      <main>
        <Hero onAuthOpen={openAuth} />
        <FeatureCards />
        <Studio />

        <section id="pricing" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-semibold">Simple pricing</h2>
            <p className="mt-2 text-slate-600">Start free, upgrade when you need more.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-medium">Starter</h3>
                <p className="mt-1 text-3xl font-semibold">$0</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• 20 generations / month</li>
                  <li>• Access to all modes</li>
                  <li>• Community support</li>
                </ul>
                <button onClick={openAuth} className="mt-6 w-full rounded-lg bg-slate-900 py-2.5 text-white hover:bg-slate-800">Get started</button>
              </div>

              <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm">
                <div className="inline-block rounded-full bg-slate-900 text-white text-xs px-2 py-1">Popular</div>
                <h3 className="mt-2 font-medium">Pro</h3>
                <p className="mt-1 text-3xl font-semibold">$19<span className="text-base font-normal text-slate-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• 1,000 generations / month</li>
                  <li>• Priority processing</li>
                  <li>• Brand tone presets</li>
                </ul>
                <button onClick={openAuth} className="mt-6 w-full rounded-lg bg-slate-900 py-2.5 text-white hover:bg-slate-800">Upgrade</button>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-medium">Teams</h3>
                <p className="mt-1 text-3xl font-semibold">$49<span className="text-base font-normal text-slate-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>• 5 seats included</li>
                  <li>• Shared libraries</li>
                  <li>• Admin controls</li>
                </ul>
                <button onClick={openAuth} className="mt-6 w-full rounded-lg border border-slate-300 bg-white py-2.5 text-slate-900 hover:bg-slate-50">Contact sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} MarketMind AI</p>
          <div className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#studio" className="hover:text-slate-900">Studio</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </div>
        </div>
      </footer>

      <AuthModal open={authOpen} onClose={closeAuth} onAuth={handleAuth} />
    </div>
  );
}

export default App;
