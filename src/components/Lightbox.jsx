import { useEffect } from "react";

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,.75)", zIndex: 2000 }}
    >
      <div>
        <img
          src={encodeURI(src)}
          className="lightbox-img rounded"
          alt="lightbox"
        />
        <div className="text-end mt-2">
          <button className="btn btn-light" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
