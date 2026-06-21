const suspects = {
  Raka: {
    name: "Raka",
    role: "Sepupu korban",
    colors: ["#6c5ce7", "#0984e3"],
    intro: "Aku nggak tahu apa-apa. Aku cuma datang makan terus pulang.",
    questions: [
      {
        text: "Kamu terakhir lihat jam itu kapan?",
        answer: "Aku lihat jam itu masih dipakai Pak Adrian sekitar jam 20:10, pas dia ngobrol di ruang tamu.",
        evidence: {
          id: "jam_2010",
          title: "Jam terlihat pukul 20:10",
          desc: "Raka melihat Pak Adrian masih memakai jamnya sekitar pukul 20:10."
        }
      },
      {
        text: "Kamu ada di mana saat lampu mati?",
        answer: "Aku di dekat meja makan. Banyak orang lihat kok. Aku lagi ambil minum.",
        evidence: {
          id: "alibi_raka",
          title: "Alibi Raka",
          desc: "Raka mengaku berada di meja makan saat lampu mati."
        }
      },
      {
        text: "Siapa yang menurutmu mencurigakan?",
        answer: "Doni agak aneh. Setelah lampu nyala, dia tiba-tiba keluar ke halaman belakang.",
        evidence: null
      }
    ]
  },

  Mira: {
    name: "Mira",
    role: "Asisten rumah",
    colors: ["#ff7675", "#fd79a8"],
    intro: "Saya cuma bantu beres-beres. Saya tidak berani menyentuh barang mahal.",
    questions: [
      {
        text: "Kamu berada di mana saat kejadian?",
        answer: "Saya di dapur. Waktu lampu mati, saya sedang mengambil piring tambahan.",
        evidence: {
          id: "alibi_mira",
          title: "Alibi Mira",
          desc: "Mira mengaku berada di dapur saat lampu mati."
        }
      },
      {
        text: "Kamu melihat siapa yang keluar rumah?",
        answer: "Saya lihat Doni keluar ke halaman belakang. Katanya menerima telepon, tapi saya tidak dengar suara telepon.",
        evidence: {
          id: "doni_keluar",
          title: "Doni keluar ke halaman",
          desc: "Mira melihat Doni keluar ke halaman belakang setelah lampu mati."
        }
      },
      {
        text: "Posisi jam terakhir di mana?",
        answer: "Saya sempat lihat jam itu diletakkan di meja kecil dekat sofa.",
        evidence: {
          id: "jam_meja",
          title: "Jam di meja kecil",
          desc: "Menurut Mira, jam sempat diletakkan di meja kecil dekat sofa."
        }
      }
    ]
  },

  Doni: {
    name: "Doni",
    role: "Rekan bisnis korban",
    colors: ["#00b894", "#00cec9"],
    intro: "Saya sibuk. Semoga pertanyaannya penting.",
    questions: [
      {
        text: "Kamu keluar rumah setelah lampu menyala?",
        answer: "Iya, saya keluar sebentar. Ada panggilan penting dari kantor.",
        evidence: null
      },
      {
        text: "Kenapa Mira bilang tidak dengar suara telepon?",
        answer: "Sinyal jelek. Jadi saya sebenarnya cuma cek pesan, bukan bicara lama.",
        evidence: {
          id: "alasan_doni",
          title: "Alasan Doni berubah",
          desc: "Doni awalnya bilang menerima panggilan, lalu berubah menjadi hanya mengecek pesan."
        }
      },
      {
        text: "Kamu punya masalah dengan Pak Adrian?",
        answer: "Masalah bisnis biasa. Dia menunda pembayaran proyek saya, tapi itu bukan alasan untuk mencuri.",
        evidence: {
          id: "motif_doni",
          title: "Motif Doni",
          desc: "Doni punya masalah pembayaran proyek dengan Pak Adrian."
        }
      }
    ]
  },

  Sinta: {
    name: "Sinta",
    role: "Teman korban",
    colors: ["#a29bfe", "#e84393"],
    intro: "Aku cuma tamu. Tapi aku memang melihat beberapa hal aneh malam itu.",
    questions: [
      {
        text: "Apa hal paling mencurigakan yang kamu lihat?",
        answer: "Doni sering melihat ke arah meja kecil tempat jam itu ditaruh.",
        evidence: {
          id: "doni_lihat_meja",
          title: "Doni memperhatikan meja",
          desc: "Sinta melihat Doni beberapa kali melihat ke arah meja kecil tempat jam berada."
        }
      },
      {
        text: "Saat lampu mati, siapa paling dekat dengan meja kecil?",
        answer: "Seingatku Doni paling dekat. Raka di meja makan, Mira di dapur, aku di dekat pintu.",
        evidence: {
          id: "doni_terdekat",
          title: "Doni paling dekat dengan jam",
          desc: "Saat lampu mati, Doni adalah orang yang paling dekat dengan meja kecil."
        }
      },
      {
        text: "Kamu lihat sesuatu setelah Doni keluar?",
        answer: "Aku lihat dia memasukkan sesuatu kecil ke saku jas. Tapi aku tidak yakin itu jam.",
        evidence: {
          id: "doni_saku",
          title: "Doni memasukkan benda ke saku",
          desc: "Sinta melihat Doni memasukkan benda kecil ke saku jasnya."
        }
      }
    ]
  }
};

const correctCulprit = "Doni";

let currentSuspect = null;
let evidence = [];
let askedQuestions = {};

const contacts = document.getElementById("contacts");
const chatWindow = document.getElementById("chatWindow");
const choiceArea = document.getElementById("choiceArea");
const chatName = document.getElementById("chatName");
const chatRole = document.getElementById("chatRole");
const headerAvatar = document.getElementById("headerAvatar");
const evidenceList = document.getElementById("evidenceList");
const progressText = document.getElementById("progressText");
const result = document.getElementById("result");
const caseBoard = document.getElementById("caseBoard");
const drawerOverlay = document.getElementById("drawerOverlay");

function iconSvg() {
  return `
    <svg viewBox="0 0 24 24">
      <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"></path>
      <path d="M3.5 22c1-4.4 4.4-7 8.5-7s7.5 2.6 8.5 7"></path>
    </svg>
  `;
}

function avatar(name, className = "avatar") {
  const s = suspects[name];

  return `
    <div class="${className}" style="--c1:${s.colors[0]}; --c2:${s.colors[1]}">
      ${iconSvg()}
      ${className === "avatar" ? '<div class="online-dot"></div>' : ""}
    </div>
  `;
}

function initGame() {
  contacts.innerHTML = "";
  evidence = [];
  askedQuestions = {};

  Object.keys(suspects).forEach(name => {
    askedQuestions[name] = [];

    const button = document.createElement("button");
    button.className = "contact";
    button.id = "contact-" + name;
    button.onclick = () => selectSuspect(name);

    button.innerHTML = `
      ${avatar(name)}
      <div class="contact-name">${name}</div>
    `;

    contacts.appendChild(button);
  });

  headerAvatar.innerHTML = avatar("Raka", "header-avatar");
  renderEvidence();
}

function selectSuspect(name) {
  currentSuspect = name;

  document.querySelectorAll(".contact").forEach(c => c.classList.remove("active"));
  document.getElementById("contact-" + name).classList.add("active");

  chatName.textContent = suspects[name].name;
  chatRole.textContent = suspects[name].role + " • Aktif";
  headerAvatar.innerHTML = avatar(name, "header-avatar");

  chatWindow.innerHTML = "";
  addSystem("Interogasi dimulai");
  addMessage(name, suspects[name].intro, "npc");

  renderChoices();
}

function addSystem(text) {
  const div = document.createElement("div");
  div.className = "system-msg";
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function addMessage(name, text, sender) {
  const row = document.createElement("div");
  row.className = "msg-row " + sender;

  if (sender === "npc") {
    row.innerHTML = `
      ${avatar(name, "mini-avatar")}
      <div class="bubble npc">${text}</div>
    `;
  } else {
    row.innerHTML = `
      <div class="bubble player">${text}</div>
    `;
  }

  chatWindow.appendChild(row);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function renderChoices() {
  choiceArea.innerHTML = "";

  if (!currentSuspect) return;

  suspects[currentSuspect].questions.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = q.text;

    if (askedQuestions[currentSuspect].includes(index)) {
      btn.disabled = true;
      btn.textContent = "Sudah ditanyakan";
    }

    btn.onclick = () => askQuestion(index);
    choiceArea.appendChild(btn);
  });
}

function askQuestion(index) {
  const q = suspects[currentSuspect].questions[index];

  askedQuestions[currentSuspect].push(index);

  addMessage(currentSuspect, q.text, "player");
  renderChoices();

  setTimeout(() => {
    addMessage(currentSuspect, q.answer, "npc");

    if (q.evidence) {
      addEvidence(q.evidence);
    }
  }, 450);
}

function addEvidence(item) {
  const exists = evidence.some(e => e.id === item.id);
  if (exists) return;

  evidence.push(item);
  renderEvidence();

  setTimeout(() => {
    addSystem("Bukti baru masuk ke Case Board");
  }, 250);
}

function renderEvidence() {
  progressText.textContent = `Bukti: ${evidence.length}/9`;
  evidenceList.innerHTML = "";

  if (evidence.length === 0) {
    evidenceList.innerHTML = `
      <div class="evidence-card">
        <strong>Belum ada bukti</strong>
        <p>Mulai chat dengan saksi untuk mencari informasi penting.</p>
      </div>
    `;
    return;
  }

  evidence.forEach(e => {
    const card = document.createElement("div");
    card.className = "evidence-card";
    card.innerHTML = `
      <strong>${e.title}</strong>
      <p>${e.desc}</p>
    `;
    evidenceList.appendChild(card);
  });
}

function accuse() {
  const selected = document.getElementById("suspectSelect").value;

  if (!selected) {
    result.textContent = "Pilih tersangka dulu.";
    return;
  }

  if (evidence.length < 5) {
    result.textContent = "Bukti masih kurang. Minimal kumpulkan 5 bukti.";
    return;
  }

  if (selected === correctCulprit) {
    result.innerHTML = `
      <strong>Benar.</strong><br><br>
      Pelakunya adalah <strong>Doni</strong>. 
      Dia punya motif, alibinya berubah, paling dekat dengan jam, dan terlihat memasukkan benda kecil ke saku.
    `;
  } else {
    result.innerHTML = `
      <strong>Salah tuduh.</strong><br><br>
      ${selected} bukan pelakunya. Cek lagi alibi dan bukti.
    `;
  }
}

function restartGame() {
  currentSuspect = null;
  evidence = [];
  askedQuestions = {};
  document.getElementById("suspectSelect").value = "";
  result.textContent = "Belum ada keputusan.";

  chatName.textContent = "Pilih kontak";
  chatRole.textContent = "Online";
  chatWindow.innerHTML = `<div class="system-msg">Pilih kontak di kiri untuk mulai interogasi</div>`;
  choiceArea.innerHTML = "";

  closeCaseBoard();
  initGame();
}

function openCaseBoard() {
  caseBoard.classList.add("show");
  drawerOverlay.classList.add("show");
}

function closeCaseBoard() {
  caseBoard.classList.remove("show");
  drawerOverlay.classList.remove("show");
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("clock").textContent = `${h}:${m}`;
}

updateClock();
setInterval(updateClock, 30000);

initGame();
