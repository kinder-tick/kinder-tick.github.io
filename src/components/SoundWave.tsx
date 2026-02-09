const SoundWave = () => {
  const bars = [0.3, 0.6, 1, 0.7, 1, 0.5, 0.8, 1, 0.6, 0.3];

  return (
    <div className="flex items-center justify-center gap-[3px] h-12">
      {bars.map((scale, i) => (
        <div
          key={i}
          className="soundwave-bar"
          style={{
            height: `${scale * 48}px`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
