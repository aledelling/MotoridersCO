import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Image as ImageIcon, Download, RefreshCw } from 'lucide-react';
import Button from './ui/Button';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null); // Reset previous result
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    try {
      // API Call to Gemini
      const resultBase64 = await editImageWithGemini(selectedImage, mimeType, prompt);
      if (resultBase64) {
        setGeneratedImage(`data:image/png;base64,${resultBase64}`);
      } else {
        alert("No se pudo generar la imagen. Intenta con otro prompt.");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error al procesar tu solicitud.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setPrompt('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="ai-studio" className="py-20 bg-black-surface border-y border-white/5 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-accent/5 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-green-accent font-bold tracking-widest uppercase text-sm mb-2 block">
                    Beta Feature
                </span>
                <h2 className="font-display text-4xl font-black text-white mb-4">
                    Moto AI <span className="text-petrol-light">Studio</span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                    Visualiza modificaciones en tu moto con inteligencia artificial. Sube una foto, escribe qué quieres cambiar (ej: "Pintar tanque de rojo", "Añadir fondo de ciudad futurista") y deja que Gemini lo haga.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto bg-black-base p-8 rounded-2xl border border-white/10 shadow-2xl">
                
                {/* Left: Inputs */}
                <div className="space-y-6">
                    {/* Image Upload Area */}
                    <div 
                        className={`
                            border-2 border-dashed rounded-xl h-64 flex flex-col items-center justify-center transition-colors cursor-pointer relative overflow-hidden group
                            ${selectedImage ? 'border-green-accent/50 bg-black-surface' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}
                        `}
                        onClick={() => !selectedImage && fileInputRef.current?.click()}
                    >
                        {selectedImage ? (
                            <>
                                <img src={selectedImage} alt="Original" className="w-full h-full object-contain p-2" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); handleReset(); }}>
                                        Cambiar Imagen
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Upload className="w-10 h-10 text-muted mb-4 group-hover:text-white transition-colors" />
                                <p className="text-white font-medium">Sube una foto de tu moto</p>
                                <p className="text-xs text-muted mt-2">JPG o PNG (Max 5MB)</p>
                            </>
                        )}
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept="image/*" 
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* Prompt Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">¿Qué te gustaría cambiar?</label>
                        <textarea 
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ej: Cambia el color a negro mate, añade luces neón azules, ponla en una carretera de montaña..."
                            className="w-full bg-black-surface border border-white/10 rounded-lg p-4 text-white focus:border-green-accent focus:ring-1 focus:ring-green-accent outline-none min-h-[100px] resize-none"
                        />
                    </div>

                    <Button 
                        fullWidth 
                        variant="primary" 
                        disabled={!selectedImage || !prompt}
                        onClick={handleGenerate}
                        isLoading={isLoading}
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generar Vista Previa
                    </Button>
                </div>

                {/* Right: Result */}
                <div className="bg-black-surface rounded-xl border border-white/10 h-[500px] flex items-center justify-center relative overflow-hidden">
                    {isLoading ? (
                         <div className="text-center space-y-4">
                             <div className="w-16 h-16 border-4 border-green-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
                             <p className="text-green-accent animate-pulse font-mono text-sm">Procesando con Gemini AI...</p>
                         </div>
                    ) : generatedImage ? (
                        <div className="relative w-full h-full group">
                            <img src={generatedImage} alt="AI Generated" className="w-full h-full object-contain" />
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <a 
                                    href={generatedImage} 
                                    download="moto-ai-design.png"
                                    className="p-3 bg-black-base text-white rounded-full hover:bg-green-accent hover:text-black-base transition-colors"
                                    title="Descargar"
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-muted select-none">
                            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                            <p>Tu diseño generado aparecerá aquí</p>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Disclaimer */}
            <p className="text-center text-xs text-gray-600 mt-8">
                * Las imágenes son generadas por IA (Google Gemini) con fines ilustrativos. Los resultados reales en taller pueden variar.
            </p>
        </div>
    </section>
  );
};

export default ImageEditor;