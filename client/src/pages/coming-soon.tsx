export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center space-y-8 px-6">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <span className="text-amber-400">O</span>ctagon Legal
          </h1>
        </div>

        {/* Coming Soon Message */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl text-slate-300">
            Website Coming Soon
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            We're working hard to bring you a new legal experience. </p>
 <p></p>           Our professional services will be available shortly.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-12 text-slate-500 text-sm">
          <p>&copy; 2025 Octagon Legal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
