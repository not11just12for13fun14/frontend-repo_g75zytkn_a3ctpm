import { Image, FileText, Video, AudioLines } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Text → Text',
    desc: 'Generate headlines, blog posts, ad copy, and email sequences tailored to your brand tone.'
  },
  {
    icon: Image,
    title: 'Text → Image',
    desc: 'Turn prompts into high-quality visuals for ads, social, and landing pages.'
  },
  {
    icon: Video,
    title: 'Text → Video',
    desc: 'Create short promo clips and storyboards from scripts in seconds.'
  },
  {
    icon: AudioLines,
    title: 'Image ↔ Text',
    desc: 'Caption images, extract alt text, or iterate variations based on references.'
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Everything you need to market fast</h2>
        <p className="mt-2 text-slate-600">One studio for copy, images, video, and captions.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
