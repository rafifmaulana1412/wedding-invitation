// import Countdown from "../components/Countdown";
// import QRsection from "../components/QRsection";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
const btn = {
  display: "inline-block",
  width: "200px",
  textAlign: "center",
  padding: "12px 0",
  borderRadius: "30px",
  fontWeight: 600,
};
export default function Home() {
  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="card-center">
        {/* === OPENING SECTION ELEGAN === */}
        <div
          className="blur-card scroll-animate"
          style={{ marginBottom: 25, padding: "20px 16px" }}
        >
          <h3
            className="title-font text-center"
            style={{ fontSize: "1.4rem", marginBottom: 14 }}
          >
            Assalamu’alaikum Wr. Wb.
          </h3>

          <p
            className="text-center"
            style={{ color: "#555", lineHeight: 1.7, marginBottom: 0 }}
          >
            Dengan penuh rasa syukur yang tiada terhingga, kami panjatkan puji
            dan syukur ke hadirat Allah SWT atas segala rahmat, karunia, dan
            cinta-Nya yang telah mempersatukan langkah kami hingga titik ini.
            <br />
            <br />
            Setelah melalui perjalanan panjang penuh cerita—tawa, doa, harapan,
            ujian, dan keteguhan hati—Allah izinkan kami untuk melangkah pada
            babak baru kehidupan yang lebih indah dan penuh keberkahan.
            <br />
            <br />
            Dengan rendah hati dan penuh kebahagiaan, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk hadir dan memberi doa restu pada hari
            istimewa kami, saat dua hati dipersatukan dalam ikatan suci
            pernikahan.
            <br />
            <br />
            Semoga kedatangan dan doa restu dari Bapak/Ibu/Saudara/i menjadi
            pelengkap kebahagiaan kami, sekaligus menjadi saksi langkah awal
            kami membangun rumah tangga yang sakinah, mawaddah, warahmah.
          </p>
        </div>

        {/* === NAMA PASANGAN + TANGGAL DIPINDAH KE ATAS === */}
        <div className="blur-card">
          <h2 className="title-font text-center" style={{ marginBottom: 6 }}>
            Nama Pasangan
          </h2>
          <p className="text-center text-muted">
            Akad & Resepsi — 20 November 2025
          </p>
        </div>

        {/* === GAMBAR PREWEDDING === */}
        <div>
          <img
            src={encodeURI("/assets/Prewedding outdoor idea (1).jpg")}
            alt="prewed"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* === CARD ISI UNDANGAN === */}
        <div className="blur-card">
          <div style={{ padding: "14px 18px" }}>
            <p className="text-center text-secondary">
              Dengan memohon Rahmat Allah SWT, kami mengundang Anda untuk hadir.
            </p>
            {/* STORY SECTION */}
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <h3 className="title-font gold" style={{ marginBottom: 6 }}>
                Lihat Story Perjalanan Kami
              </h3>

              <p className="text-muted" style={{ marginBottom: 14 }}>
                Kisah singkat perjalanan cinta kami.
              </p>

              <Link to="/story" className="btn-gold">
                Lihat Story
              </Link>
            </div>

            {/* === LINK KE HALAMAN GALLERY === */}
            <div
              className="blur-card"
              style={{ marginTop: 30, padding: "20px" }}
            >
              <h3
                className="title-font text-center gold"
                style={{ marginBottom: 14 }}
              >
                Lihat Gallery Kami
              </h3>

              <p
                className="text-center text-muted"
                style={{ marginBottom: 16 }}
              >
                Momen indah perjalanan kami.
              </p>

              <div style={{ textAlign: "center", marginTop: 12 }}>
                <Link to="/gallery" className="btn btn-dark" style={btn}>
                  Lihat Gallery
                </Link>
              </div>
            </div>
            {/* WISHES SECTION */}
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <h3 className="title-font gold" style={{ marginBottom: 6 }}>
                Ucapan Dari Tamu Undangan
              </h3>

              <p className="text-muted" style={{ marginBottom: 14 }}>
                Berikan doa & ucapan terbaik untuk kami.
              </p>

              <Link to="/wishes" className="btn-gold">
                Lihat Wishes
              </Link>
            </div>

            <div className="section-divider" />

            <h4 className="text-center title-font gold">Kado Digital</h4>
            <p className="text-center text-muted">
              Scan QR di bawah atau klik tombol copy.
            </p>

            <div style={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={encodeURI("/assets/QR.jpg")}
                alt="qris"
                style={{
                  width: 160,
                  borderRadius: 12,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                }}
              />
              <div style={{ marginTop: 12 }}>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    navigator.clipboard.writeText("1234567890");
                    alert("Nomor rekening disalin!");
                  }}
                >
                  Copy Nomor Rekening
                </button>
              </div>
              <div
                style={{
                  margin: "18px 0",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <h3
                  className="title-font gold text-center"
                  style={{ marginBottom: 6 }}
                >
                  Lokasi Acara Akad & Resepsi
                </h3>

                <p
                  className="text-center text-muted"
                  style={{ marginBottom: 14 }}
                >
                  Silakan tap peta untuk membuka Google Maps.
                </p>

                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div style={{ margin: "30px auto", maxWidth: 680 }}>
          {/* <Countdown /> */}
        </div>
      </div>
    </motion.div>
  );
}
