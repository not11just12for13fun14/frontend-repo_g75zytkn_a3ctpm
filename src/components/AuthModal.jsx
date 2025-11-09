import { useState } from 'react';

export default function AuthModal({ open, onClose, onAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only mock auth
    const user = { name: name || 'Guest', email };
    onAuth(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black/30">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{isLogin ? 'Login' : 'Create account'}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Your name"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full rounded-md bg-slate-900 text-white py-2.5 hover:bg-slate-800">
            {isLogin ? 'Login' : 'Sign up'}
          </button>

          <p className="text-center text-sm text-slate-600">
            {isLogin ? 'New here?' : 'Already have an account?'}{' '}
            <button type="button" onClick={()=>setIsLogin(!isLogin)} className="text-slate-900 font-medium hover:underline">
              {isLogin ? 'Create an account' : 'Log in'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
