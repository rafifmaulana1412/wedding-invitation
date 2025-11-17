import PageTransition from "../components/PageTransition";
import { useEffect, useState } from "react";

export default function Wishes() {
  const [list, setList] = useState(() =>
    JSON.parse(localStorage.getItem("wishes") || "[]")
  );
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => localStorage.setItem("wishes", JSON.stringify(list)), [list]);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return alert("Isi nama & ucapan dulu.");
    const item = { name: name.trim(), msg: msg.trim(), time: Date.now() };
    setList([item, ...list]);
    setName("");
    setMsg("");
  };

  return (
    <PageTransition>
      <div className="container pt-5 mt-4" style={{ maxWidth: 780 }}>
        <h2 className="title-font gold text-center mb-4">Kirim Ucapan</h2>

        <form onSubmit={submit} className="card p-3 mb-4 blur-card">
          <input
            className="form-control mb-2"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Ucapan"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="btn btn-dark w-100">Kirim</button>
        </form>

        <div className="wishes-list">
          {list.length === 0 && (
            <p className="text-center text-muted">Belum ada ucapan.</p>
          )}
          {list.map((w, i) => (
            <div key={i} className="card p-3 mb-3 shadow-sm">
              <div className="d-flex justify-content-between">
                <strong>{w.name}</strong>
                <small className="text-muted">
                  {new Date(w.time).toLocaleString()}
                </small>
              </div>
              <p className="mb-0 mt-2">{w.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
