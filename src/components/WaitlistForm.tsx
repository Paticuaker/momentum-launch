import { useState } from 'react';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const emailSchema = z.string().trim().email({ message: "Please enter a valid email" });

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('waitlist')
      .insert({ email: result.data });
    
    setIsSubmitting(false);
    
    if (error) {
      if (error.code === '23505') {
        toast({
          title: "Already registered",
          description: "This email is already on the waitlist.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
      return;
    }
    
    setIsSuccess(true);
    setEmail('');
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when we launch.",
    });
  };

  if (isSuccess) {
    return (
      <div className="animate-fade-in-up text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
          <svg 
            className="w-5 h-5 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-body text-sm text-foreground">You're on the list!</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div 
        className={`
          relative flex items-center gap-2 p-1.5 rounded-full 
          bg-secondary/50 backdrop-blur-sm border transition-all duration-500
          ${isFocused 
            ? 'border-primary/40 shadow-[0_0_30px_hsl(38_45%_65%/0.1)]' 
            : 'border-border/50 hover:border-border'
          }
        `}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter your email"
          className="
            flex-1 px-5 py-3 bg-transparent font-body text-sm text-foreground
            placeholder:text-muted-foreground/60 focus:outline-none
          "
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            px-6 py-3 rounded-full font-body text-sm font-medium
            bg-primary text-primary-foreground
            transition-all duration-300 ease-out
            hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(38_45%_65%/0.3)]
            active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          "
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Joining...
            </span>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;
