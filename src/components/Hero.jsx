import Spline from '@splinetool/react-spline';

export default function Hero({ onAuthOpen }) {
  return (
    <section className="relative">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              Create marketing assets with AI
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              Generate copy, images, videos, and transcriptions in one place. No code, no complexity — just results.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={onAuthOpen} className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                Get started free
              </button>
              <a href="#studio" className="px-5 py-3 rounded-lg border border-slate-300 bg-white/70 backdrop-blur hover:bg-white">Open Studio</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
    </section>
  );
}
