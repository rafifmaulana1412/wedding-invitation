import { useState } from "react";
import Lightbox from "../components/Lightbox";
import PageTransition from "../components/PageTransition";

export default function Gallery() {
  const photos = [
    "/assets/Prewedding Outdoor.jpg",
    "/assets/Prewedding Outdoor (1).jpg",
    "/assets/Prewedding outdoor (2).jpg",
    "/assets/Prewedding outdoor idea.jpg",
    "/assets/Prewedding outdoor idea (1).jpg",
    "/assets/Prewedding idea.jpg",
    "/assets/Prewedding.jpg",
    "/assets/Prewedding outdoor idea (2).jpg",
  ].map((p) => encodeURI(p));

  const [open, setOpen] = useState(null);
  return (
    <PageTransition>
      <div className="container pt-5 mt-4">
        <h2 className="title-font gold text-center mb-4">Galeri</h2>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <div
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(p)}
            >
              <img
                src={p}
                alt={`g-${i}`}
                style={{
                  width: "100%",
                  borderRadius: 10,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              />
            </div>
          ))}
        </div>

        {open && <Lightbox src={open} onClose={() => setOpen(null)} />}
      </div>
    </PageTransition>
  );
}
