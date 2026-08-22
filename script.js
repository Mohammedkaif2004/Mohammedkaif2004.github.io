const updates = [
  { date: "Aug 2026", title: "Beginning B.S. thesis research at Visdom Lab", text: "Focusing on manifold-based latent representations for more stable long-horizon world-model predictions." },
  { date: "2026", title: "ICLR paper accepted", text: "Regulating Internal Evidence Flow for Robust Learning under Spurious Correlations was accepted at ICLR 2026." },
  { date: "2025", title: "Served as an ICVGIP reviewer", text: "Contributed peer review for the Indian Conference on Computer Vision, Graphics and Image Processing." },
  { date: "2025", title: "Joined Visdom Lab", text: "Started investigating robust representations, multi-step reasoning, and generalisation under distribution shift." }
];

document.getElementById("updates-list").innerHTML = updates.map(({ date, title, text }) => `
  <article class="update">
    <time>${date}</time>
    <div><h3>${title}</h3><p>${text}</p></div>
  </article>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
