import { Link } from "react-router-dom";
export default function StickyBottomNav() {
  return (
    <div className="sticky-bottom-nav d-md-none">
      <Link to="/">🏠</Link>
      <Link to="/story">❤️</Link>
      <Link to="/gallery">📷</Link>
      <Link to="/wishes">✉️</Link>
    </div>
  );
}
