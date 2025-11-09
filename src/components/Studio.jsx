import { useState } from 'react';
import { Image, FileText, Video, Upload } from 'lucide-react';

function TabButton({ active, icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors ${
        active ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

export default function Studio() {
  const [tab, setTab] = useState('t2t');
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const handleGenerate = () => {
    // Frontend-only demo behavior: fake a result based on tab
    if (tab === 't2t') setResult(`Generated copy based on: "${prompt}"`);
    if (tab === 't2i') setResult('Generated image preview (placeholder box)');
    if (tab === 't2v') setResult('Generated short video concept');
    if (tab === 'i2t') setResult('Extracted caption from your image');
    if (tab === 'i2i') setResult('Stylized image variation ready');
  };

  return (
    <section id="studio" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-slate-900">Creation Studio</h2>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <TabButton active={tab==='t2t'} icon={FileText} label="Text → Text" onClick={()=>setTab('t2t')} />
          <TabButton active={tab==='t2i'} icon={Image} label="Text → Image" onClick={()=>setTab('t2i')} />
          <TabButton active={tab==='t2v'} icon={Video} label="Text → Video" onClick={()=>setTab('t2v')} />
          <TabButton active={tab==='i2t'} icon={Upload} label="Image → Text" onClick={()=>setTab('i2t')} />
          <TabButton active={tab==='i2i'} icon={Image} label="Image → Image" onClick={()=>setTab('i2i')} />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            {(tab === 't2t' || tab === 't2i' || tab === 't2v') && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e)=>setPrompt(e.target.value)}
                  placeholder="Describe what you want to create..."
                  className="mt-2 w-full h-36 rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>
            )}

            {(tab === 'i2t' || tab === 'i2i') && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Upload image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e)=> setImage(e.target.files?.[0] || null)}
                  className="mt-2 block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-slate-900 file:text-white hover:file:bg-slate-800"
                />
                {image && (
                  <p className="mt-2 text-sm text-slate-600">Selected: {image.name}</p>
                )}
              </div>
            )}

            <div className="mt-4 flex items-center gap-3">
              <button onClick={handleGenerate} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Generate</button>
              <button onClick={()=>{setPrompt('');setImage(null);setResult('');}} className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700">Clear</button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 min-h-[260px]">
            {!result && (
              <p className="text-slate-500 text-sm">Your results will appear here.</p>
            )}
            {result && (
              <div>
                {tab === 't2i' || tab === 'i2i' ? (
                  <div className="aspect-video rounded-lg bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-orange-200 grid place-items-center text-slate-700">
                    <span className="text-sm">{result}</span>
                  </div>
                ) : tab === 't2v' ? (
                  <div className="aspect-video rounded-lg border border-dashed border-slate-300 grid place-items-center text-slate-700">
                    <span className="text-sm">{result}</span>
                  </div>
                ) : (
                  <div className="prose max-w-none">
                    <p className="text-slate-800 whitespace-pre-wrap">{result}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
