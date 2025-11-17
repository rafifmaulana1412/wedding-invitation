export default function Countdown({ target = "2025-11-20T08:00:00" }) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const t = new Date(target).getTime();
    const id = setInterval(() => {
      const now = Date.now();
      let diff = Math.max(0, t - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);
      setTime({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="countdown">
      <div>
        <strong>{String(time.days).padStart(2, "0")}</strong>
        <div className="small">days</div>
      </div>
      <div>
        <strong>{String(time.hours).padStart(2, "0")}</strong>
        <div className="small">hours</div>
      </div>
      <div>
        <strong>{String(time.minutes).padStart(2, "0")}</strong>
        <div className="small">minutes</div>
      </div>
      <div>
        <strong>{String(time.seconds).padStart(2, "0")}</strong>
        <div className="small">seconds</div>
      </div>
    </div>
  );
}
