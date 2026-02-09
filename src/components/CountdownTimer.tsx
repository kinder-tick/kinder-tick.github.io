import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET = new Date("2026-03-15T00:00:00");

const calcTimeLeft = (): TimeLeft => {
  const diff = Math.max(TARGET.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

const Digit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-1">
      {value.split("").map((d, i) => (
        <div
          key={i}
          className="neu-pressed rounded-xl w-11 h-14 sm:w-14 sm:h-[72px] flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-foreground bg-accent select-none"
        >
          {d}
        </div>
      ))}
    </div>
    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
  </div>
);

const CountdownTimer = () => {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
      <Digit value={pad(time.days)} label="Days" />
      <span className="text-2xl font-bold text-muted-foreground mt-[-20px]">:</span>
      <Digit value={pad(time.hours)} label="Hours" />
      <span className="text-2xl font-bold text-muted-foreground mt-[-20px]">:</span>
      <Digit value={pad(time.minutes)} label="Minutes" />
      <span className="text-2xl font-bold text-muted-foreground mt-[-20px]">:</span>
      <Digit value={pad(time.seconds)} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
