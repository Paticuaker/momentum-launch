import WaitlistForm from '@/components/WaitlistForm';
import goatLogo from '@/assets/goat-logo.png';

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col grain overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, hsl(20 8% 16%) 0%, hsl(20 10% 8%) 60%)',
        }}
      />
      
      {/* Floating orb decoration */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, hsl(38 45% 65% / 0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="animate-fade-in-up mb-8">
            <img 
              src={goatLogo} 
              alt="Otazua logo" 
              className="w-20 h-20 mx-auto invert opacity-90"
            />
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-up delay-100">
            <span className="inline-block px-4 py-1.5 text-xs font-body tracking-[0.2em] uppercase text-muted-foreground border border-border/50 rounded-full mb-8">
              Coming Soon
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up delay-100 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] tracking-tight mb-6">
            Something{' '}
            <span className="italic text-primary">Beautiful</span>
            <br />
            Is Coming
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 font-body text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
            We're crafting something extraordinary. Be the first to experience it when we launch.
          </p>

          {/* Waitlist form */}
          <div className="animate-fade-in-up delay-300">
            <WaitlistForm />
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up delay-400 mt-12 flex items-center justify-center gap-6 text-muted-foreground/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-body text-xs">No spam, ever</span>
            </div>
            <div className="w-px h-4 bg-border/50" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-body text-xs">Early access</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center animate-fade-in delay-600">
        <p className="font-body text-xs text-muted-foreground/40 tracking-wide">
          © 2026 — All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
