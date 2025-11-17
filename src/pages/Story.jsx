import PageTransition from "../components/PageTransition";

export default function Story() {
  const data = [
    {
      title: "Pertama Kali Bertemu",
      date: "2019",
      desc: "Pertemuan yang tidak direncanakan, namun meninggalkan kesan hangat. Dari percakapan sederhana, muncul rasa nyaman yang perlahan tumbuh tanpa kami sadari.",
    },
    {
      title: "Mulai Saling Mengenal",
      date: "2020",
      desc: "Komunikasi semakin intens. Kami mulai berbagi cerita, impian, dan kekhawatiran. Dari sana, kami belajar memahami satu sama lain lebih dalam.",
    },
    {
      title: "Membangun Komitmen",
      date: "2021",
      desc: "Hubungan kami tumbuh semakin dewasa. Kami sepakat untuk menjaga satu sama lain, menerima kekurangan masing-masing, dan menjaga komitmen bersama.",
    },
    {
      title: "Menata Masa Depan",
      date: "2023",
      desc: "Kami mulai melibatkan keluarga, membicarakan masa depan, dan menyatukan langkah untuk perjalanan yang lebih serius dan penuh harapan.",
    },
    {
      title: "Lamaran",
      date: "2024",
      desc: "Momen lamaran yang sederhana namun penuh hangat dan haru. Keluarga bertemu, doa dipanjatkan, dan niat baik kami diresmikan.",
    },
    {
      title: "Menuju Hari Bahagia",
      date: "2025",
      desc: "Dengan penuh syukur, kami melangkah menuju pernikahan. Semoga Allah meridhai setiap langkah kami dan memampukan kami membangun rumah tangga yang sakinah, mawaddah, warahmah.",
    },
  ];

  return (
    <PageTransition>
      <div className="container pt-5 mt-4">
        <h2 className="title-font gold text-center mb-4">Cerita Kami</h2>
        <div className="timeline">
          {data.map((it, i) => (
            <div className="timeline-item scroll-animate" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-content shadow-sm">
                <h5 className="title-font gold mb-1">{it.title}</h5>
                <small className="text-muted">{it.date}</small>
                <p className="mb-0 mt-2">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
