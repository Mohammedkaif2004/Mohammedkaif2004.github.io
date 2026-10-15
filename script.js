const updates = [
  { date: "2027", title: "Reviewing for ICLR 2027", text: "Serving as a reviewer for the International Conference on Learning Representations." },
  { date: "2026", title: "Selected for the SPAR AI Safety Fellowship", text: "Joining the SPAR fellowship focused on AI Safety and Alignment research and professional development." },
  { date: "2026", title: "Beginning B.S. thesis research at VisDom Lab", text: "Focusing on manifold-based latent representations for more stable long-horizon world-model predictions." },
  { date: "May 2026", title: "Joined Lossfunk as a research intern", text: "Investigating bias localisation in vision models and developing a regulariser for multiple attribute biases." },
  { date: "2026", title: "Manuscript submitted to Nature Aging", text: "Co-authored work on separable properties of gut microbiome ageing measures, submitted with collaborators including Eran Segal and Imran Razzak." },
  { date: "2026", title: "CODS 2026 travel grant and IndoML Undergraduate Forum", text: "Awarded a student travel grant for CODS 2026 and selected for the Undergraduate Forum at IndoML 2026." },
  { date: "2026", title: "ICLR 2026 paper published", text: "Regulating Internal Alignment Flows for Robust Learning Under Spurious Correlations was accepted at ICLR 2026." },
  { date: "2026", title: "Reviewing for BMVC and ICVGIP", text: "Serving as a reviewer for BMVC 2026 and ICVGIP 2026." },
  { date: "2025", title: "ICVGIP 2025 paper published", text: "Equitable Dermatology: Adversarial and Spectral Techniques for Fair Skin Lesion Classification, with TCS Research collaborators." },
  { date: "Jul 2025", title: "Research internship at TCS Research", text: "Developed adversarial debiasing and representation regularisation for fair skin-lesion classification." },
  { date: "May 2025", title: "Joined VisDom Lab", text: "Started investigating robust representations, multi-step reasoning, and generalisation under distribution shift." }
];

document.getElementById("updates-list").innerHTML = updates.map(({ date, title, text }) => `
  <article class="update">
    <time>${date}</time>
    <div><h3>${title}</h3><p>${text}</p></div>
  </article>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
