const AIWaveform = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 h-16">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1.5 bg-gradient-accent rounded-full animate-wave"
          style={{
            height: `${30 + Math.random() * 30}px`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AIWaveform;
