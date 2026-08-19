import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-8 sm:p-16 border-x-8 border-[#1a1a1a] max-w-5xl mx-auto">
      <div className="w-full space-y-12 text-left sm:text-center">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          Never Zero
          <span className="block text-[#6366F1]">Push-Ups</span>
        </h1>
        
        <p className="text-xl sm:text-3xl font-bold text-gray-400 max-w-2xl mx-auto">
          BUILD THE HABIT. NO EXCUSES. ONE PUSH-UP IS ALL IT TAKES.
        </p>

        <div className="pt-12 flex flex-col items-start sm:items-center gap-8">
          {/* Placeholder Botón Google Play */}
          <div className="w-[280px] h-[80px] bg-black border-4 border-gray-800 flex items-center justify-center hover:border-[#6366F1] transition-colors cursor-pointer group">
            <span className="font-bold text-gray-500 tracking-widest uppercase group-hover:text-white transition-colors">
              [ Get it on Play Store ]
            </span>
          </div>

          {/* Enlaces Legales */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8 text-sm font-bold tracking-widest uppercase text-gray-500">
            <Link 
              href="/privacy" 
              className="hover:text-[#6366F1] hover:underline decoration-4 underline-offset-8 transition-all"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-gray-800">/</span>
            <Link 
              href="/delete-account" 
              className="hover:text-[#6366F1] hover:underline decoration-4 underline-offset-8 transition-all"
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
