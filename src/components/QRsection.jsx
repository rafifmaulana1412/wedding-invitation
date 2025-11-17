export default function QRsection() {
  return (
    <div style={{ textAlign: "center", margin: "12px 0 30px" }}>
      <img
        src={encodeURI("/assets/QR.jpg")}
        alt="qris"
        style={{
          width: 180,
          borderRadius: 12,
          boxShadow: "0 8px 26px rgba(0,0,0,0.12)",
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
    </div>
  );
}
