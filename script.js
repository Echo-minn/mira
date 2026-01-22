// about me
const aboutMe = `I’m a <b>CMU ECE master’s student</b> with a strong background in software engineering, systems
development, and large-scale open-source projects.

Previously, I worked as a Software Engineer at <b><a href="https://www.shlab.org.cn/" target="_blank" rel="noreferrer">Shanghai AI Laboratory</a></b>, where I made core contributions to multiple production-level and open-source systems within
the <a href="https://platform.openmmlab.com/aboutus/" target="_blank" rel="noreferrer"><b>OpenMMLab</b></a> ecosystem like <a href="https://www.opencompass.us/" target="_blank" rel="noreferrer"><b>OpenCompass</b></a> and <a href="https://openxlab.org.cn/apps" target="_blank" rel="noreferrer"><b>OpenXLab</b></a>.

At CMU, my academic and research work has deepened my interest in performance-critical systems and applied machine learning infrastructure. I have worked on projects involving LLM systems, speculative decoding, KV-cache optimization, and distributed training, which strengthened my ability to reason about trade-offs across correctness, efficiency, and scalability.`

// headshot
const headshot = "./assets/IMG_1818.jpg"; // falls back to placeholder via onerror

// personal links
const links = [
  {
    name: "GitHub",
    icon: "./assets/github.svg",
    url: "https://github.com/Echo-minn",
  },
  {
    name: "LinkedIn",
    icon: "./assets/linkedin.svg",
    url: "https://www.linkedin.com/in/mira-min-xiao-4884971a7/",
  },
  {
    name: "Email",
    icon: "./assets/email.svg",
    url: "mailto:minxia@andrew.cmu.edu",
  },
  // {
  //   name: "CV",
  //   icon: "./assets/cv.svg",
  //   url: "./assets/cv.pdf",
  // },
  {
    name: "Phone",
    icon: "./assets/phone.svg",
    url: "tel:+14122142063",
  }
];

// experiences
const experiences = [
  {
    company: "Shanghai AI Laboratory",
    company_url: "https://www.shlab.org.cn/",
    title: "Software Engineer",
    location: "Shanghai, China",
    dates: "July 2021 - December 2024",
    responsibilities: [
      "Lead the design and development of key products like OpenCompass and OpenXLab within OpenMMLab, emphasizing continuous integration, iterative enhancements, and integrity for the products. ",
      "Developed and released open-source tools like Sea-Lion-UI(An UI component and toolkit library); OpenAOE(A parallel chat platform); Huixiangdou(A group chat assistant based on LLM)",
    ],
  },
  {
    company: "SenseTime",
    company_url: "https://www.sensetime.com/",
    title: "Frontend Engineer Intern",
    location: "Shenzhen, China",
    dates: "March 2021 - June 2021",
    responsibilities: [
      "Assisted in development of the front end of AI model training platform, visualization low-code configuration module of training process. A patent has been filed for the software.",
    ],
  },
  {
    company: "ToT Quant Investment ",
    company_url: "https://www.totquant.com/",
    title: "Website Developer Intern",
    location: "Beijing, China",
    dates: "Nov 2020 – Feb 2021",
    responsibilities: [
      "Independently develop the user interface of a fund transaction record visualization and management platform",
    ],
  }
];

// education
const education = [
  {
    school: "Carnegie Mellon University",
    degree: "Master of Science in Electrical and Computer Engineering",
    location: "Pittsburgh, PA",
    dates: "January 2025 - December 2026",
    gpa: '3.95/4.0',
    courses: [
      "Advanced Topics in ML Systems (LLM Edition)",
      "Parallel Computer Architecture and Programming",
      "LLM Applications",
      "Full-Stack Software Development for Engineers",
      "Cloud Infrastructure",
    ],
  },
  {
    school: "Wuhan University",
    degree: "Bachelor of Engineering in Software Engineering",
    location: "Wuhan, China",
    dates: "September 2017 - June 2021",
    gpa: '3.85/4.0',
    courses: [
      "Software Engineering",
      "Database Systems",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Systems",
      "Compiler",
    ],
  },
];

// skills
const skills = {
  programming: [
    "Python",
    "C++",
    "CUDA",
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",
    "CSS",
  ],
  frameworks: ["PyTorch", "React", "Node.js", "Express.js", "Vue.js"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git", "Docker", "Kubernetes"],
};

// projects
const projects = [
  {
    name: "OmniAttention",
    summary:
      "A high-performance CUDA sparse attention kernel supporting interleaved and arbitrary block-sparse masks.",
    time: "August 2025 - December 2025",
    technologies: [
      "CUDA",
      "C++",
      "Tensor Cores",
      "FlashAttention",
      "GPU Optimization",
    ],
    paper: "https://github.com/Echo-minn/omni-attention/blob/main/omni_attention_report.pdf",
    code: "https://github.com/Echo-minn/omni-attention",
    highlights: [
      "Extended FlashAttention-2 Q-tiling to support interleaved and block-sparse attention layouts",
      "Implemented MMA-based pipelines with shared-memory reuse, double buffering, and layout swizzling",
      "Achieved FlexAttention-comparable performance and up to 2.97× speedup in optimal configurations",
    ],
  },
  {
    name: "MSpecKV",
    summary:
      "A multilevel speculative KV-cache retrieval system optimizing long-context LLM inference latency.",
    time: "September 2025 - December 2025",
    technologies: [
      "LLM Systems",
      "Speculative Decoding",
      "KV Cache",
      "Quantization",
      "PyTorch",
    ],
    paper: "https://github.com/Echo-minn/MSpecKV/blob/main/MSpecKV.pdf",
    code: "https://github.com/Echo-minn/MSpecKV",
    highlights: [
      "Combined TriForce speculative decoding with KV-cache quantization and resident KV reuse",
      "Achieved up to 14.45× end-to-end latency speedup at 32K context length",
      "Built a reproducible benchmarking and ablation framework with multi-seed statistical reporting",
    ],
  },
  {
    name: "Instruction-Tuned Llama MoE",
    summary:
      "A task-specialized Mixture-of-Experts LLM enabling efficient multi-task instruction tuning.",
    time: "October 2025 - December 2025",
    technologies: [
      "PyTorch",
      "QLoRA",
      "Mixture of Experts",
      "LLM Training",
    ],
    paper: "https://github.com/Echo-minn/LlaMA-MoE-Instruction/blob/main/tech-report.pdf",
    code: "https://github.com/Echo-minn/LlaMA-MoE-Instruction",
    highlights: [
      "Converted Llama-3.2-3B-Instruct into an MoE model by upcycling dense FFNs into experts",
      "Designed a three-stage training pipeline with router warm-up and load-balancing loss",
      "Demonstrated stable routing and clear expert specialization across multiple tasks",
    ],
  },
  {
    name: "OpenCompass",
    summary:
      "A scalable evaluation and tooling platform built with custom CLI infrastructure to support real-world AI and ML workflows.",
    time: "June 2023 - December 2024",
    technologies: [
      "JavaScript",
      "Node.js",
      "CLI Development",
      "Configuration Parsing",
      "CI/CD",
    ],
    website: "https://open-compass.com",
    highlights: [
      "Designed and built SeaLion-CLI with authentication, routing, state management, error handling, and deployment support",
      "Implemented request interception, localization, and multi-environment build pipelines",
      "Decoupled data updates from development by customizing configuration parsing and real-time table rendering",
    ],
  },
  {
    name: "LandMark",
    summary:
      "A real-time 3D visualization system for streaming and editing Gaussian-based video content in the browser.",
    time: "February 2024 - June 2024",
    technologies: ["Three.js", "WebRTC", "JavaScript", "WebGL"],
    website: "",
    highlights: [
      "Rendered 3D Gaussian model video streams using Three.js with dynamic view and coordinate transformations",
      "Implemented real-time video streaming between frontend and backend using WebRTC",
      "Developed custom smooth parallax animations to enhance visual interaction",
    ],
  },
  {
    name: "OpenAOE",
    summary:
      "An open-source parallel chat platform integrating LLM APIs with real-time streaming, rich-text editing, and multi-session workflows.",
    time: "August 2023 - February 2024",
    technologies: [
      "React",
      "JavaScript",
      "Zustand",
      "SSE",
      "LLM APIs",
    ],
    website: "https://github.com/OpenAOE",
    code: "https://github.com/OpenAOE",
    highlights: [
      "Designed and implemented complex global state synchronization using Zustand",
      "Built a custom rich-text editor using native Selection and Range APIs for intelligent prompt assistance",
      "Enabled text/image input and streaming output via SSE and LLM APIs with parallel chat windows",
    ],
  },
  {
    name: "InternStudio",
    summary:
      "A web-based development environment with terminal and file management capabilities optimized for iterative workflows.",
    time: "January 2022 - February 2023",
    technologies: [
      "JavaScript",
      "Web Terminal",
      "Frontend Architecture",
      "Dev Tooling",
    ],
    website: "",
    highlights: [
      "Maintained multi-version and multi-environment setups for iterative development and deployment",
      "Integrated and refactored X-Term to support enhanced shortcuts and editing experience",
      "Improved file management UX by refactoring an embedded web browser with custom UI",
    ],
  },
];

// contact
const contact = {
  email: "minxia@andrew.cmu.edu",
  phone: "+1 (412) 268-7321",
  address: "Pittsburgh, PA",
  linkedin: "https://linkedin.com/in/mira-xia",
  github: "https://github.com/MiraXia",
};

// ---------------------------
// Rendering (DOM-driven)
// ---------------------------

const person = {
  name: "Min Xiao(Mira)",
  tagline: "Software engineer & machine learning engineer",
};

function $(selector) {
  return document.querySelector(selector);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k === "html") node.innerHTML = String(v);
    else if (k.startsWith("on") && typeof v === "function")
      node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, String(v));
  }
  for (const child of children) {
    if (child == null) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function sectionTitle(text) {
  return el("h2", { class: "section-title", text });
}

function abbreviateMonths(text) {
  if (!text) return text;
  const monthMap = {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sep",
    october: "Oct",
    november: "Nov",
    december: "Dec",
  };

  return String(text).replace(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/gi,
    (m) => monthMap[m.toLowerCase()] || m,
  );
}

function chipRow(items = []) {
  const row = el("div", { class: "chip-row" });
  items.filter(Boolean).forEach((t) => row.appendChild(el("span", { class: "chip", text: t })));
  return row;
}

function actionRow(actions = []) {
  const row = el("div", { class: "card-actions" });
  actions
    .filter((a) => a && a.href)
    .forEach((a) => {
      const icon = a.icon
        ? el("img", { class: "action-icon", src: a.icon, alt: "", loading: "lazy" })
        : null;
      row.appendChild(
        el(
          "a",
          {
            class: "card-action",
            href: a.href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": a.label,
            title: a.label,
          },
          [icon].filter(Boolean),
        ),
      );
    });
  return row;
}

function card({ title, subtitle, bullets, chips, href, metaRight, actions }) {
  const titleNode = href
    ? el("a", { href, target: "_blank", rel: "noreferrer", text: title })
    : el("span", { text: title });

  const right = el("div", { class: "card-right" }, [
    Array.isArray(actions) && actions.length ? actionRow(actions) : null,
    metaRight ? el("div", { class: "card-meta", text: metaRight }) : null,
  ]);

  const titleRow = el("div", { class: "card-title-row" }, [
    el("h3", { class: "card-title" }, [titleNode]),
    right,
  ]);

  const header = el("div", { class: "card-header" }, [
    titleRow,
    subtitle ? el("p", { class: "sub", text: subtitle }) : null,
  ]);

  const body = el("div", {}, []);
  if (Array.isArray(bullets) && bullets.length) {
    const ul = el("ul");
    bullets.filter(Boolean).forEach((b) => ul.appendChild(el("li", { text: b })));
    body.appendChild(ul);
  }

  const c = el("article", { class: "panel card reveal" }, [header, body]);
  if (Array.isArray(chips) && chips.length) c.appendChild(chipRow(chips));
  return c;
}

function setupScrollReveal() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!items.length) return;

  // Fallback: if IntersectionObserver isn't available, just show everything.
  if (typeof IntersectionObserver === "undefined") {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((el) => io.observe(el));
}

function renderBanner() {
  const bannerRoot = $("#banner");
  if (!bannerRoot) return;

  const aboutParagraphs = String(aboutMe)
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

  const left = el("div", {}, [
    el("h1", { text: person.name }),
    el("p", { class: "tagline", text: person.tagline }),
    ...aboutParagraphs.map((p) => el("p", { class: "about", html: p })),
  ]);

  const linkRow = el("div", { class: "meta-row" });
  links.forEach((l) => {
    const iconImg = el("img", {
      class: "btn-icon",
      src: l.icon,
      alt: "",
      loading: "lazy",
    });
    linkRow.appendChild(
      el("a", { class: "btn", href: l.url, target: "_blank", rel: "noreferrer" }, [
        el("span", { class: "icon", "aria-hidden": "true" }, [iconImg]),
        el("span", { class: "label", text: l.name }),
      ]),
    );
  });
  left.appendChild(linkRow);

  const img = el("img", {
    src: headshot,
    alt: `${person.name} headshot`,
    loading: "lazy",
  });
  img.addEventListener("error", () => {
    img.src = "./assets/placeholder-headshot.svg";
  });
  const right = el("div", { class: "headshot-wrap" }, [
    el("div", { class: "headshot" }, [img]),
  ]);

  bannerRoot.classList.add("panel");
  bannerRoot.replaceChildren(left, right);
}

function renderExperiences() {
  const root = $("#experiences");
  if (!root) return;

  const grid = el("div", { class: "grid" });
  experiences.forEach((exp) => {
    grid.appendChild(
      card({
        title: `${exp.company}`,
        subtitle: `${exp.title} · ${exp.location} · ${abbreviateMonths(exp.dates)}`,
        bullets: exp.responsibilities,
        href: exp.company_url || null,
      }),
    );
  });

  root.replaceChildren(sectionTitle("Experience"), grid);
}

function renderProjects() {
  const root = $("#projects");
  if (!root) return;

  const grid = el("div", { class: "grid" });
  projects.forEach((p) => {
    const bullets = Array.isArray(p.highlights) && p.highlights.length ? p.highlights : null;
    const actions = [];
    const seen = new Set();
    const addAction = (label, href, icon) => {
      if (!href) return;
      const key = String(href);
      if (seen.has(key)) return;
      seen.add(key);
      actions.push({ label, href, icon });
    };

    addAction("Website", p.website, "./assets/website.svg");
    addAction("Paper", p.paper, "./assets/paper.svg");
    addAction("Code", p.code, "./assets/github.svg");

    const primaryHref = p.website || p.code || p.paper || null;
    grid.appendChild(
      card({
        title: p.name,
        metaRight: abbreviateMonths(p.time),
        subtitle: p.summary,
        bullets,
        chips: p.technologies,
        href: primaryHref,
        actions,
      }),
    );
  });

  root.replaceChildren(sectionTitle("Projects"), grid);
}

function renderEducation() {
  const root = $("#education");
  if (!root) return;

  const grid = el("div", { class: "grid" });
  education.forEach((e) => {
    const bullets = [];
    bullets.push(`GPA: ${e.gpa}`);
    if (Array.isArray(e.courses) && e.courses.length) bullets.push(`Courses: ${e.courses.join(", ")}`);

    grid.appendChild(
      card({
        title: e.school,
        subtitle: `${e.degree} · ${e.location} · ${abbreviateMonths(e.dates)}`,
        bullets,
      }),
    );
  });

  root.replaceChildren(sectionTitle("Education"), grid);
}

function renderSkills() {
  const root = $("#skills");
  if (!root) return;

  const wrap = el("div", { class: "two-col" }, [
    el("div", { class: "panel card" }, [
      el("h3", { text: "Programming" }),
      chipRow(skills.programming || []),
    ]),
    el("div", { class: "panel card" }, [
      el("h3", { text: "Frameworks" }),
      chipRow(skills.frameworks || []),
    ]),
    el("div", { class: "panel card" }, [el("h3", { text: "Databases" }), chipRow(skills.databases || [])]),
    el("div", { class: "panel card" }, [el("h3", { text: "Tools" }), chipRow(skills.tools || [])]),
  ]);

  root.replaceChildren(sectionTitle("Skills"), wrap);
}

function renderContactAndFooter() {
  const footer = $("#footer");
  if (footer) {
    footer.replaceChildren(
      el("div", { class: "container" }, [
        el("small", { text: `© ${new Date().getFullYear()} ${person.name}. Built by Mira.` }),
      ]),
    );
  }
}

function renderAll() {
  renderBanner();
  renderEducation();
  renderExperiences();
  renderProjects();
  renderSkills();
  renderContactAndFooter();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  setupScrollReveal();
});