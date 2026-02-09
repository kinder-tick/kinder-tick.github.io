import { useState } from "react";
import { Send } from "lucide-react";

const LeadCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="neu-raised rounded-2xl px-6 py-4 text-center">
        <p className="font-semibold text-foreground">🎉 You're on the list!</p>
        <p className="text-sm text-muted-foreground mt-1">We'll send your Golden Ticket soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <div className="flex-1 glass rounded-2xl overflow-hidden">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent px-5 py-3.5 text-foreground placeholder:text-muted-foreground outline-none text-sm font-medium"
        />
      </div>
      <button
        type="submit"
        className="cta-lift bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm whitespace-nowrap"
      >
        <Send size={16} />
        Get Your Golden Ticket
      </button>
    </form>
  );
};

export default LeadCapture;
