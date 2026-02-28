import React, { useState } from 'react';
import { Home, History, Camera, Layers, Sparkles, LayoutGrid } from 'lucide-react';

export default function CustomWorkspace({ venueType, onNavigate }) {
    const [venueImage, setVenueImage] = useState(null);
    const [decorImages, setDecorImages] = useState([]);
    const [generating, setGenerating] = useState(false);

    return (
        <div className="flex min-h-screen bg-black font-sans text-gray-300">

            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-900 bg-black flex flex-col">
                <div className="p-8 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate && onNavigate('landing')}>
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-sm"></div>
                    </div>
                    <span className="font-bold text-lg text-white tracking-tight uppercase">Lover AI</span>
                </div>

                <button 
                  onClick={() => window.history.back()}
                  className="mx-6 mb-4 flex items-center gap-2 px-6 py-3 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all text-sm font-bold"
                >
                  ← Back to Home
                </button>

                <div className="px-8 mb-10 flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-gray-500" />
                    <div>
                        <div className="text-[10px] font-bold text-white uppercase tracking-tighter">Workspace</div>
                        <div className="text-[9px] font-bold text-gray-500 uppercase">Free Tier</div>
                    </div>
                </div>

                <nav className="flex-1 px-6 space-y-2">
                    <button className="flex items-center gap-4 w-full px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        <Home className="w-4 h-4" /> Home
                    </button>
                    <div className="bg-[#111] rounded-lg">
                        <button className="flex items-center gap-4 w-full px-4 py-3 text-sm font-medium text-white">
                            <div className="w-4 h-4 rounded bg-white" />
                            <input type="text" placeholder="Project name..." className="bg-transparent outline-none w-full h-full text-xs" />
                        </button>
                    </div>
                    <button className="flex items-center gap-4 w-full px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        <History className="w-4 h-4" /> History
                    </button>
                </nav>

                <div className="p-8">
                    <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-900">
                        <div className="text-[9px] font-bold text-white mb-2 uppercase tracking-widest">Project Progress</div>
                        <div className="w-full bg-gray-800 rounded-full h-1 mb-2">
                            <div className="bg-white h-1 rounded-full" style={{ width: venueImage && decorImages.length > 0 ? '66%' : venueImage ? '33%' : '0%' }}></div>
                        </div>
                        <div className="text-[9px] text-gray-500 uppercase font-bold">Step {venueImage && decorImages.length > 0 ? 3 : venueImage ? 2 : 1} of 3</div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative bg-black">

                {/* Top Nav */}
                <header className="flex justify-between items-center px-10 py-6 gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    <button 
                      onClick={() => window.history.back()}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all font-bold"
                    >
                      ← Back
                    </button>
                    <div className="flex items-center gap-8">
                      <button className="hover:text-white transition-colors px-3 py-2">My Projects</button>
                      <button className="hover:text-white transition-colors px-3 py-2">Support</button>
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-800">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya" alt="profile" />
                      </div>
                    </div>
                </header>

                {/* Workspace Container */}
                <div className="max-w-5xl mx-auto w-full px-10 pb-20">
                    <div className="mb-10">
                        <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                            Path Selection &gt; <span className="text-white">Custom Workspace</span>
                        </div>
                        <h1 className="text-5xl font-serif text-white mb-4 tracking-tight">Venue AI</h1>
                        <p className="text-gray-400 text-sm italic font-light">Transform Your Own Space with AI Assistance — Start by uploading your venue photo.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {/* Box 1 - Venue */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${venueImage ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                                    {venueImage ? '✓' : '1'}
                                </div>
                                <h3 className="font-bold text-white text-[10px] uppercase tracking-widest">Upload Your Venue Photo</h3>
                            </div>
                            {venueImage ? (
                                <div className="h-72 border border-gray-700 rounded-xl bg-[#05070a] overflow-hidden relative">
                                    <img src={venueImage} alt="venue" className="w-full h-full object-cover" />
                                    <button onClick={() => setVenueImage(null)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-[10px] hover:bg-red-600">
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <div className="h-72 border border-dashed border-gray-800 rounded-xl bg-[#05070a] flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-12 h-12 bg-[#111] rounded-lg flex items-center justify-center mb-6 text-gray-400 border border-gray-800">
                                        <Camera className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white mb-1 text-xs">Drop your venue image here</h4>
                                    <p className="text-[10px] text-gray-500 mb-6">Supports JPG, PNG up to 10MB</p>
                                    <button onClick={() => document.getElementById('venueInput')?.click()} className="px-6 py-2 bg-[#1a1c20] rounded-lg text-[10px] font-bold text-white border border-gray-800 hover:bg-[#222] transition-colors uppercase tracking-widest">
                                        Browse Files
                                    </button>
                                    <input id="venueInput" type="file" accept="image/*" style={{display:'none'}} onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) setVenueImage(URL.createObjectURL(file));
                                    }} />
                                </div>
                            )}
                        </div>

                        {/* Box 2 - Decor */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${decorImages.length > 0 ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                                    {decorImages.length > 0 ? '✓' : '2'}
                                </div>
                                <h3 className="font-bold text-white text-[10px] uppercase tracking-widest">Upload Decor Inspiration</h3>
                            </div>
                            {decorImages.length > 0 ? (
                                <div className="h-72 border border-gray-700 rounded-xl bg-[#05070a] overflow-hidden relative grid grid-cols-2 gap-1">
                                    {decorImages.map((img, i) => (
                                        <div key={i} className="relative group">
                                            <img src={img} alt={`decor-${i}`} className="w-full h-full object-cover" />
                                            <button onClick={() => setDecorImages(decorImages.filter((_, j) => j !== i))} 
                                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white text-[10px] font-bold">Remove</span>
                                            </button>
                                        </div>
                                    ))}
                                    {decorImages.length < 3 && (
                                        <button onClick={() => document.getElementById('decorInput')?.click()} className="flex items-center justify-center bg-[#111] border border-dashed border-gray-700 hover:border-gray-500 transition-colors text-gray-400 hover:text-white">
                                            <span className="text-sm">+ Add</span>
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="h-72 border border-dashed border-gray-800 rounded-xl bg-[#05070a] flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-12 h-12 bg-[#111] rounded-lg flex items-center justify-center mb-6 text-gray-400 border border-gray-800">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-white mb-1 text-xs">Drop style inspiration here</h4>
                                    <p className="text-[10px] text-gray-500 mb-6">Upload up to 3 reference images</p>
                                    <button onClick={() => document.getElementById('decorInput')?.click()} className="px-6 py-2 bg-[#1a1c20] rounded-lg text-[10px] font-bold text-white border border-gray-800 hover:bg-[#222] transition-colors uppercase tracking-widest">
                                        Browse Files
                                    </button>
                                    <input id="decorInput" type="file" accept="image/*" multiple style={{display:'none'}} onChange={(e) => {
                                        const files = Array.from(e.target.files || []);
                                        files.forEach(file => {
                                            if (decorImages.length < 3) {
                                                setDecorImages([...decorImages, URL.createObjectURL(file)]);
                                            }
                                        });
                                    }} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* AI Generated Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold">3</div>
                            <h3 className="font-bold text-white text-[10px] uppercase tracking-widest">AI Generated Output</h3>
                        </div>
                        <div className="h-96 border border-dashed border-gray-800 rounded-xl bg-[#05070a] flex flex-col items-center justify-center text-center">
                            {generating ? (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 border-2 border-gray-700 border-t-white rounded-full animate-spin"></div>
                                    <p className="text-gray-400 font-light">Generating your design...</p>
                                </div>
                            ) : (
                                <>
                                    <Layers className="w-16 h-16 text-gray-800 mb-6" />
                                    <p className="text-sm text-gray-400 font-light">Your generated design will appear here</p>
                                    <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-widest">Click 'Generate Design' to start the process</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Footer Action Area */}
                    <div className="border-t border-gray-900 pt-10 flex flex-col items-center">
                        <p className="text-[11px] text-gray-500 mb-4 max-w-sm text-center leading-relaxed">
                            Ready to see your transformed space? Our AI will process your images and create a photorealistic mockup.
                        </p>
                        <div className="italic text-gray-600 text-[10px] mb-6">
                            2 Generation Credits remaining
                        </div>

                        <button onClick={() => {
                            if (venueImage) {
                                setGenerating(true);
                                setTimeout(() => setGenerating(false), 3000);
                            }
                        }} disabled={!venueImage} className={`group relative flex items-center gap-3 px-14 py-5 rounded-xl font-bold transition-all duration-300 ${venueImage ? 'text-black bg-white hover:bg-gray-200' : 'text-gray-500 bg-gray-800 cursor-not-allowed'}`}>
                            <Sparkles className="w-5 h-5 fill-current" />
                            <span className="text-sm uppercase tracking-[0.2em]">Generate Design</span>
                            {venueImage && <div className="absolute -inset-1 bg-white opacity-20 blur-lg group-hover:opacity-40 rounded-xl transition-opacity"></div>}
                        </button>
                        {!venueImage && <p className="text-[10px] text-gray-600 mt-4 uppercase">Upload a venue photo to enable generation</p>}
                    </div>
                </div>

                <footer className="mt-auto px-10 py-8 text-[9px] text-gray-600 uppercase tracking-widest flex justify-between items-center border-t border-gray-900">
                    <div>© 2024 Lover AI. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </footer>
            </main>
        </div>
    );
}
