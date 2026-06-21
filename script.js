const totalEvidence = 24;
const minimumEvidenceToAccuse = 10;

const suspects = {
  Raka: {
    name: "Raka",
    role: "Sepupu korban",
    colors: ["#6c5ce7", "#0984e3"],
    intro:
      "Kalau kamu mau curiga ke aku, silakan. Tapi malam itu terlalu ramai. Aku bahkan tidak tahu jamnya hilang sampai Adrian panik.",
    questions: [
      {
        text: "Kamu terakhir lihat jam itu kapan?",
        answer:
          "Aku lihat Pak Adrian melepas jamnya sekitar 20:17. Dia taruh di nampan kecil dekat piano karena katanya tali jamnya bikin gatal.",
        evidence: {
          id: "watch_piano_tray",
          title: "Jam dipindah ke nampan piano",
          desc:
            "Raka melihat Pak Adrian melepas jam sekitar 20:17 dan menaruhnya di nampan kecil dekat piano. Ini mengubah lokasi awal jam dari pergelangan tangan ke area ruang tengah.",
          type: "Kronologi"
        }
      },
      {
        text: "Saat lampu mati, kamu ada di mana?",
        answer:
          "Di meja makan, tapi aku sempat berdiri sebentar karena menjatuhkan pemantik. Aku cari di bawah kursi. Doni dan Sinta sama-sama tidak ada di kursi mereka waktu itu.",
        evidence: {
          id: "raka_under_table",
          title: "Alibi Raka tidak sepenuhnya diam",
          desc:
            "Raka mengaku berada di meja makan, tetapi sempat menunduk mencari pemantik. Ini membuat alibinya tidak bersih, namun tidak otomatis membuktikan ia mencuri.",
          type: "Alibi"
        }
      },
      {
        text: "Kenapa Bima bilang kamu sempat ke koridor?",
        answer:
          "Aku ke koridor sebelum lampu mati, bukan saat gelap. Aku ambil jaket dari kursi dekat pintu. Kalau dia bilang saat gelap, berarti dia salah lihat atau sengaja bikin aku terlihat buruk.",
        evidence: {
          id: "raka_corridor_dispute",
          title: "Waktu Raka ke koridor diperdebatkan",
          desc:
            "Raka membantah berada di koridor saat lampu mati. Ada konflik keterangan antara Raka dan Bima, sehingga ini menjadi clue yang belum pasti.",
          type: "Kontradiksi"
        }
      },
      {
        text: "Kamu punya masalah uang?",
        answer:
          "Iya, aku punya utang kecil. Tapi kalau aku mau mencuri, aku tidak akan mencuri di rumah keluarga sendiri, di acara seramai itu.",
        evidence: {
          id: "raka_debt_red_herring",
          title: "Raka punya motif lemah",
          desc:
            "Raka mengakui punya utang, tetapi motifnya lemah dan belum ada bukti fisik yang menghubungkannya langsung dengan jam.",
          type: "Pengalih"
        }
      },
      {
        text: "Siapa yang paling aneh menurutmu?",
        answer:
          "Sinta. Dia terlalu banyak tahu. Dia bilang Doni paling dekat dengan jam, padahal waktu lampu padam aku dengar suara gelang perempuan dari arah piano.",
        evidence: {
          id: "bracelet_sound_piano",
          title: "Suara gelang dekat piano",
          desc:
            "Raka mendengar suara gelang perempuan dari arah piano saat lampu padam. Ini bertabrakan dengan klaim Sinta bahwa Doni paling dekat dengan jam.",
          type: "Kunci"
        }
      }
    ]
  },

  Mira: {
    name: "Mira",
    role: "Asisten rumah",
    colors: ["#ff7675", "#fd79a8"],
    intro:
      "Saya cuma bantu dapur dan tamu. Tapi saya ingat urutan kejadian karena acara malam itu kacau sekali.",
    questions: [
      {
        text: "Kamu berada di mana saat lampu mati?",
        answer:
          "Saya di dapur dengan dua piring dessert. Lampu mati sekitar 20:23, lalu saya dengar kursi bergeser dari ruang tengah, bukan dari meja makan.",
        evidence: {
          id: "mira_kitchen_2023",
          title: "Mira di dapur saat 20:23",
          desc:
            "Mira mengaku berada di dapur saat listrik padam sekitar 20:23 dan mendengar pergerakan dari ruang tengah.",
          type: "Alibi"
        }
      },
      {
        text: "Ada yang menyentuh area listrik?",
        answer:
          "Panel listrik kecil dekat gudang memang bisa dimatikan manual. Kuncinya biasanya di laci dapur, tapi malam itu kunci sempat hilang sebentar.",
        evidence: {
          id: "breaker_key_missing",
          title: "Kunci panel listrik sempat hilang",
          desc:
            "Kunci panel listrik biasanya berada di laci dapur, tetapi sempat hilang. Ini membuka kemungkinan pemadaman dilakukan sengaja.",
          type: "Kunci"
        }
      },
      {
        text: "Siapa yang sempat masuk dapur?",
        answer:
          "Sinta sempat masuk minta tisu basah karena katanya tangannya kena saus. Doni juga masuk sebentar mencari air putih, tapi dia tidak dekat laci kunci.",
        evidence: {
          id: "sinta_in_kitchen",
          title: "Sinta sempat masuk dapur",
          desc:
            "Sinta sempat masuk dapur sebelum lampu padam dan punya kesempatan mendekati area tempat kunci panel biasa disimpan.",
          type: "Kesempatan"
        }
      },
      {
        text: "Apakah Doni mencurigakan?",
        answer:
          "Doni memang terlihat tegang. Tapi waktu lampu nyala lagi, dia sedang di dekat pintu kaca, bukan dekat piano. Saya tidak bisa bilang dia bersih, tapi lokasinya agak jauh.",
        evidence: {
          id: "doni_far_after_blackout",
          title: "Doni jauh dari piano setelah lampu nyala",
          desc:
            "Mira melihat Doni di dekat pintu kaca setelah lampu menyala, bukan di dekat piano. Ini melemahkan tuduhan langsung terhadap Doni.",
          type: "Kontradiksi"
        }
      },
      {
        text: "Ada benda yang tertinggal?",
        answer:
          "Di dekat piano ada serat kain merah muda kecil. Saya ingat karena saya sapu lantai sore itu, jadi benda itu pasti muncul malamnya.",
        evidence: {
          id: "pink_fiber_piano",
          title: "Serat kain merah muda dekat piano",
          desc:
            "Mira menemukan serat kain merah muda kecil di dekat piano setelah acara. Ini berpotensi mengarah ke pakaian atau aksesori salah satu tamu.",
          type: "Fisik"
        }
      }
    ]
  },

  Doni: {
    name: "Doni",
    role: "Rekan bisnis korban",
    colors: ["#00b894", "#00cec9"],
    intro:
      "Saya tahu semua orang gampang menuduh saya karena urusan bisnis. Tapi motif bukan berarti bukti.",
    questions: [
      {
        text: "Kamu punya masalah dengan Pak Adrian?",
        answer:
          "Ada invoice proyek yang belum dibayar. Saya marah, iya. Tapi kalau saya mencuri jam, saya justru menghancurkan peluang uang proyek itu cair.",
        evidence: {
          id: "doni_business_motive",
          title: "Motif bisnis Doni",
          desc:
            "Doni punya konflik pembayaran dengan Pak Adrian. Ini motif kuat secara emosional, tetapi belum membuktikan akses atau tindakan pencurian.",
          type: "Motif"
        }
      },
      {
        text: "Kamu di mana saat lampu mati?",
        answer:
          "Saya berdiri dekat pintu kaca karena sinyal jelek. Saya sedang mengetik pesan ke kantor. Kalau perlu, cek waktu pesan saya.",
        evidence: {
          id: "doni_near_glass_door",
          title: "Doni mengaku di pintu kaca",
          desc:
            "Doni mengaku berada di dekat pintu kaca saat lampu padam, bukan di dekat piano. Keterangan ini cocok dengan sebagian keterangan Mira.",
          type: "Alibi"
        }
      },
      {
        text: "Kenapa ada yang bilang kamu keluar halaman?",
        answer:
          "Saya keluar setelah lampu nyala, bukan saat gelap. Saya panik karena pesan dari kantor masuk terus. Itu memang terlihat buruk, tapi bukan berarti saya ambil jam.",
        evidence: {
          id: "doni_left_after_light",
          title: "Doni keluar setelah lampu menyala",
          desc:
            "Doni membedakan waktu keluar halaman: setelah lampu menyala. Jika benar, maka ia tidak keluar membawa jam saat momen gelap.",
          type: "Kronologi"
        }
      },
      {
        text: "Apa kamu melihat Sinta?",
        answer:
          "Sinta tiba-tiba muncul dari arah piano setelah lampu menyala. Aneh saja, karena sebelumnya dia bilang dia dekat pintu depan.",
        evidence: {
          id: "sinta_from_piano",
          title: "Sinta muncul dari arah piano",
          desc:
            "Doni melihat Sinta muncul dari arah piano setelah lampu menyala. Ini bertentangan dengan klaim Sinta tentang posisinya.",
          type: "Kunci"
        }
      },
      {
        text: "Apakah kamu menyentuh jam itu?",
        answer:
          "Tidak. Saya bahkan tidak tahu mereknya sampai Adrian teriak jam itu hilang. Yang saya pegang cuma gelas dan ponsel.",
        evidence: null
      }
    ]
  },

  Sinta: {
    name: "Sinta",
    role: "Teman lama korban",
    colors: ["#a29bfe", "#e84393"],
    intro:
      "Aku mau bantu, tapi jangan salah paham. Aku memperhatikan banyak hal karena suasananya memang aneh.",
    questions: [
      {
        text: "Menurutmu siapa yang paling mencurigakan?",
        answer:
          "Doni. Dia punya masalah uang dengan Adrian, berdiri dekat ruang tengah, lalu buru-buru keluar. Terlalu kebetulan, kan?",
        evidence: {
          id: "sinta_accuses_doni",
          title: "Sinta mengarahkan tuduhan ke Doni",
          desc:
            "Sinta sangat cepat mengarahkan kecurigaan ke Doni. Ini bisa membantu, tetapi juga bisa menjadi upaya mengalihkan perhatian.",
          type: "Pengalih"
        }
      },
      {
        text: "Kamu berada di mana saat lampu mati?",
        answer:
          "Aku dekat pintu depan. Aku tidak bergerak karena gelap. Kalau ada yang bilang aku dekat piano, mungkin mereka salah lihat bayangan.",
        evidence: {
          id: "sinta_claim_front_door",
          title: "Sinta mengaku dekat pintu depan",
          desc:
            "Sinta mengklaim berada dekat pintu depan saat lampu padam. Keterangan ini bertabrakan dengan keterangan Raka dan Doni.",
          type: "Kontradiksi"
        }
      },
      {
        text: "Kenapa Mira bilang kamu masuk dapur?",
        answer:
          "Aku cuma ambil tisu. Tanganku kena saus. Aku tidak buka laci atau sentuh apa pun di dapur.",
        evidence: {
          id: "sinta_tissue_excuse",
          title: "Alasan tisu Sinta",
          desc:
            "Sinta mengakui masuk dapur, tetapi mengaku hanya mengambil tisu. Ini tetap memberinya kesempatan mendekati area laci kunci panel.",
          type: "Kesempatan"
        }
      },
      {
        text: "Ada serat merah muda dekat piano. Kamu tahu?",
        answer:
          "Banyak orang pakai warna terang malam itu. Jangan karena aku pakai scarf pink lalu semua diarahkan ke aku.",
        evidence: {
          id: "sinta_pink_scarf",
          title: "Sinta memakai scarf pink",
          desc:
            "Sinta mengakui memakai scarf pink. Ini cocok dengan serat merah muda yang ditemukan dekat piano, tetapi belum final tanpa clue lain.",
          type: "Fisik"
        }
      },
      {
        text: "Kamu dekat dengan Pak Adrian?",
        answer:
          "Kami teman lama. Dulu dia pernah janji membantu pameran amal saya, tapi batal. Aku kecewa, tapi itu masa lalu.",
        evidence: {
          id: "sinta_old_grudge",
          title: "Motif lama Sinta",
          desc:
            "Sinta punya kekecewaan lama terhadap Pak Adrian terkait janji bantuan pameran amal. Motif ini lebih personal daripada sekadar uang.",
          type: "Motif"
        }
      },
      {
        text: "Kenapa kamu tahu jamnya ada di meja kecil?",
        answer:
          "Semua orang bisa lihat. Jam itu mengkilap sekali. Aku cuma memperhatikan karena desainnya bagus.",
        evidence: {
          id: "sinta_noticed_watch",
          title: "Sinta memperhatikan jam sejak awal",
          desc:
            "Sinta mengaku memperhatikan jam karena desainnya. Ia punya awareness tinggi terhadap posisi dan nilai jam sebelum hilang.",
          type: "Kesempatan"
        }
      }
    ]
  },

  Livia: {
    name: "Livia",
    role: "Koordinator acara",
    colors: ["#f9ca24", "#f0932b"],
    intro:
      "Aku yang bantu atur makan malam ini. Kalau ada yang mau bikin kekacauan, aku pasti kelihatan paling bertanggung jawab, padahal belum tentu.",
    questions: [
      {
        text: "Kamu yang mengatur lampu dan ruangan?",
        answer:
          "Aku atur dekorasi, bukan listrik. Tapi aku tahu panel listrik karena pernah diminta Mira cek stop kontak untuk speaker kecil.",
        evidence: {
          id: "livia_knows_panel",
          title: "Livia tahu lokasi panel",
          desc:
            "Livia mengetahui lokasi panel listrik walau mengaku tidak mengatur listrik. Ini membuatnya punya kesempatan teknis, tapi bukan bukti pencurian.",
          type: "Kesempatan"
        }
      },
      {
        text: "Apa yang terjadi sebelum lampu mati?",
        answer:
          "Ada suara notifikasi dari speaker, lalu lampu redup sebentar sebelum mati total. Seperti ada yang menekan panel, bukan sekadar korsleting.",
        evidence: {
          id: "blackout_deliberate",
          title: "Pemadaman terlihat disengaja",
          desc:
            "Lampu sempat redup sebelum mati total. Pola ini mendukung dugaan pemadaman manual melalui panel.",
          type: "Kunci"
        }
      },
      {
        text: "Kamu melihat siapa dekat piano?",
        answer:
          "Aku tidak berani menuduh, tapi setelah lampu nyala aku lihat Sinta berdiri terlalu dekat dengan piano. Dia langsung bilang, 'Doni ke mana?' sebelum ada yang bertanya.",
        evidence: {
          id: "sinta_near_piano_livia",
          title: "Livia melihat Sinta dekat piano",
          desc:
            "Livia melihat Sinta dekat piano setelah lampu menyala dan langsung mengalihkan perhatian ke Doni.",
          type: "Kunci"
        }
      },
      {
        text: "Apakah ada barang berpindah?",
        answer:
          "Nampan kecil dekat piano bergeser. Aku hafal karena aku yang menata bunga dan nampan itu simetris sebelumnya.",
        evidence: {
          id: "tray_shifted",
          title: "Nampan piano bergeser",
          desc:
            "Nampan tempat jam berada terlihat bergeser setelah lampu padam. Ini menunjukkan area piano disentuh saat kejadian.",
          type: "Fisik"
        }
      },
      {
        text: "Ada clue yang menurutmu menipu?",
        answer:
          "Motif Doni terlalu terlihat. Orang yang benar-benar mencuri biasanya senang kalau semua mata melihat tersangka yang paling gampang disalahkan.",
        evidence: {
          id: "too_obvious_doni",
          title: "Doni terlalu mudah dijadikan tersangka",
          desc:
            "Livia menilai tuduhan terhadap Doni terlalu jelas dan bisa jadi sengaja dibentuk sebagai pengalih perhatian.",
          type: "Analisis"
        }
      }
    ]
  },

  Bima: {
    name: "Bima",
    role: "Petugas keamanan",
    colors: ["#30336b", "#130f40"],
    intro:
      "Saya jaga pintu depan dan CCTV. Tapi saat listrik mati, sistem cadangan CCTV juga sempat error. Itu yang bikin saya curiga ada yang sengaja.",
    questions: [
      {
        text: "Apa CCTV merekam pencurian?",
        answer:
          "Tidak. CCTV ruang tengah mati selama 2 menit 40 detik, dari 20:23 sampai 20:25 lebih sedikit. Kamera halaman tetap hidup karena baterai cadangan.",
        evidence: {
          id: "cctv_gap_240",
          title: "CCTV ruang tengah mati 2 menit 40 detik",
          desc:
            "Ada celah rekaman CCTV selama 2 menit 40 detik ketika jam diduga dicuri. Kamera halaman tetap menyala.",
          type: "Kronologi"
        }
      },
      {
        text: "Kamera halaman melihat Doni?",
        answer:
          "Doni keluar halaman setelah lampu ruang tengah sudah nyala. Kamera halaman menangkap dia pukul 20:26, jadi bukan saat CCTV ruang tengah mati.",
        evidence: {
          id: "doni_camera_2026",
          title: "Doni terekam setelah blackout",
          desc:
            "Kamera halaman merekam Doni pukul 20:26, setelah lampu ruang tengah kembali menyala. Ini melemahkan narasi bahwa Doni kabur saat gelap.",
          type: "Kontradiksi"
        }
      },
      {
        text: "Kamu melihat Raka di koridor?",
        answer:
          "Saya lihat siluet laki-laki di koridor, tapi jujur tidak yakin itu Raka. Tingginya mirip, tapi kamera gelap dan refleksi kaca bikin kacau.",
        evidence: {
          id: "bima_uncertain_silhouette",
          title: "Siluet koridor tidak pasti",
          desc:
            "Bima awalnya menyebut Raka, tetapi mengakui siluet koridor tidak pasti. Ini membuat kecurigaan terhadap Raka menjadi lemah.",
          type: "Pengalih"
        }
      },
      {
        text: "Ada orang keluar membawa sesuatu?",
        answer:
          "Tidak ada yang keluar membawa kotak jam. Tapi Sinta punya clutch kecil. Ukurannya cukup untuk jam tanpa kotaknya.",
        evidence: {
          id: "sinta_clutch_size",
          title: "Clutch Sinta cukup untuk jam",
          desc:
            "Bima mencatat Sinta membawa clutch kecil yang cukup untuk menyimpan jam tanpa kotak. Ini memberi kemungkinan metode penyembunyian.",
          type: "Kesempatan"
        }
      },
      {
        text: "Ada catatan akses pintu atau panel?",
        answer:
          "Pintu gudang kecil dekat panel terbuka pukul 20:21. Tidak ada sidik jelas, tapi ada bekas parfum floral kuat di area itu.",
        evidence: {
          id: "floral_perfume_panel",
          title: "Parfum floral dekat panel",
          desc:
            "Area panel tercium parfum floral kuat setelah pintu gudang terbuka pukul 20:21. Ini bisa menghubungkan pelaku dengan area panel listrik.",
          type: "Fisik"
        }
      }
    ]
  },

  Adrian: {
    name: "Pak Adrian",
    role: "Korban",
    colors: ["#535c68", "#2f3640"],
    intro:
      "Saya ingin jam itu kembali, tapi saya juga tidak mau menuduh orang tanpa dasar. Beberapa orang di ruangan itu punya alasan untuk berbohong.",
    questions: [
      {
        text: "Apa jam itu punya nilai khusus?",
        answer:
          "Nilainya mahal, tapi yang membuatnya penting adalah gravir di belakangnya. Itu hadiah dari almarhum ayah saya.",
        evidence: {
          id: "watch_sentimental",
          title: "Jam bernilai sentimental",
          desc:
            "Jam tidak hanya mahal, tetapi punya nilai emosional karena hadiah dari ayah Pak Adrian. Pelaku mungkin tahu nilainya lebih dari sekadar harga.",
          type: "Motif"
        }
      },
      {
        text: "Siapa yang tahu kamu melepas jam?",
        answer:
          "Raka jelas melihat. Sinta juga sempat memuji jam itu sebelum makan. Doni sepertinya tidak peduli. Mira mungkin lihat saat beres meja.",
        evidence: {
          id: "who_noticed_watch",
          title: "Beberapa orang tahu jam dilepas",
          desc:
            "Raka dan Sinta jelas mengetahui keberadaan jam. Doni justru terlihat tidak terlalu memperhatikan menurut korban.",
          type: "Kronologi"
        }
      },
      {
        text: "Apa hubunganmu dengan Sinta?",
        answer:
          "Kami dulu dekat sebagai teman. Beberapa bulan lalu saya batal mendanai acara amalnya karena audit perusahaan. Dia tersinggung berat.",
        evidence: {
          id: "sinta_grudge_confirmed",
          title: "Kekecewaan Sinta dikonfirmasi",
          desc:
            "Pak Adrian mengonfirmasi bahwa Sinta tersinggung karena bantuan dana acara amal dibatalkan. Ini memperkuat motif personal Sinta.",
          type: "Motif"
        }
      },
      {
        text: "Apakah ada yang tahu gravir jam itu?",
        answer:
          "Sinta tahu. Dulu dia pernah bilang gravirnya indah saat saya pakai jam itu di acara lain. Tidak banyak orang memperhatikan bagian belakang jam.",
        evidence: {
          id: "sinta_knows_engraving",
          title: "Sinta tahu gravir jam",
          desc:
            "Sinta mengetahui detail gravir di belakang jam. Ini menunjukkan ia punya perhatian khusus terhadap jam sebelum malam kejadian.",
          type: "Kunci"
        }
      },
      {
        text: "Apa kamu mencurigai Doni?",
        answer:
          "Doni memang punya konflik dengan saya. Tapi kalau dia mau menekan saya soal uang, mencuri jam justru tindakan bodoh. Saya lebih curiga pada orang yang marah secara pribadi.",
        evidence: {
          id: "adrian_doubts_doni",
          title: "Korban ragu Doni pelaku",
          desc:
            "Pak Adrian menganggap Doni punya motif bisnis, tetapi tindakan mencuri jam tidak cocok dengan kepentingan Doni.",
          type: "Analisis"
        }
      }
    ]
  }
};

const correctCulprit = "Sinta";

let currentSuspect = null;
let evidence = [];
let askedQuestions = {};

let contacts;
let chatWindow;
let choiceArea;
let chatName;
let chatRole;
let headerAvatar;
let evidenceList;
let progressText;
let result;
let caseBoard;
let drawerOverlay;
let suspectSelect;

function iconSvg() {
  return `
    <svg viewBox="0 0 24 24">
      <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"></path>
      <path d="M3.5 22c1-4.4 4.4-7 8.5-7s7.5 2.6 8.5 7"></path>
    </svg>
  `;
}

function avatar(name, className = "avatar") {
  const suspect = suspects[name];
  return `
    <div class="${className}" style="--c1:${suspect.colors[0]}; --c2:${suspect.colors[1]}">
      ${iconSvg()}
      ${className === "avatar" ? '<div class="online-dot"></div>' : ""}
    </div>
  `;
}

function initElements() {
  contacts = document.getElementById("contacts");
  chatWindow = document.getElementById("chatWindow");
  choiceArea = document.getElementById("choiceArea");
  chatName = document.getElementById("chatName");
  chatRole = document.getElementById("chatRole");
  headerAvatar = document.getElementById("headerAvatar");
  evidenceList = document.getElementById("evidenceList");
  progressText = document.getElementById("progressText");
  result = document.getElementById("result");
  caseBoard = document.getElementById("caseBoard");
  drawerOverlay = document.getElementById("drawerOverlay");
  suspectSelect = document.getElementById("suspectSelect");
}

function initGame() {
  contacts.innerHTML = "";
  evidence = [];
  askedQuestions = {};
  currentSuspect = null;

  Object.keys(suspects).forEach((name) => {
    askedQuestions[name] = [];

    const button = document.createElement("button");
    button.className = "contact";
    button.id = "contact-" + name;
    button.type = "button";
    button.addEventListener("click", () => selectSuspect(name));

    button.innerHTML = `
      ${avatar(name)}
      <div class="contact-name">${suspects[name].name}</div>
    `;

    contacts.appendChild(button);
  });

  headerAvatar.innerHTML = avatar("Raka", "header-avatar");
  chatName.textContent = "Pilih kontak";
  chatRole.textContent = "Online";
  chatWindow.innerHTML =
    '<div class="system-msg">Pilih kontak di kiri untuk mulai interogasi</div>';
  choiceArea.innerHTML = "";
  result.textContent = "Belum ada keputusan.";
  suspectSelect.value = "";
  renderEvidence();
}

function startGame() {
  const introScreen = document.getElementById("introScreen");
  if (introScreen) {
    introScreen.classList.add("hide");
  }

  if (!currentSuspect) {
    chatWindow.innerHTML =
      '<div class="system-msg">Pilih kontak di kiri untuk mulai interogasi</div>';
    choiceArea.innerHTML = "";
  }
}

function selectSuspect(name) {
  currentSuspect = name;

  document.querySelectorAll(".contact").forEach((contact) => {
    contact.classList.remove("active");
  });

  const selectedContact = document.getElementById("contact-" + name);
  if (selectedContact) {
    selectedContact.classList.add("active");
  }

  chatName.textContent = suspects[name].name;
  chatRole.textContent = suspects[name].role + " • Aktif";
  headerAvatar.innerHTML = avatar(name, "header-avatar");

  chatWindow.innerHTML = "";
  addSystem("Interogasi dimulai");
  addMessage(name, suspects[name].intro, "npc");
  renderChoices();
}

function scrollChatToBottom() {
  requestAnimationFrame(() => {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}

function addSystem(text) {
  const div = document.createElement("div");
  div.className = "system-msg";
  div.textContent = text;
  chatWindow.appendChild(div);
  scrollChatToBottom();
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
    row.innerHTML = `<div class="bubble player">${text}</div>`;
  }

  chatWindow.appendChild(row);
  scrollChatToBottom();
}

function renderChoices() {
  choiceArea.innerHTML = "";
  if (!currentSuspect) return;

  suspects[currentSuspect].questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";
    button.textContent = question.text;

    if (askedQuestions[currentSuspect].includes(index)) {
      button.disabled = true;
      button.textContent = "Sudah ditanyakan: " + question.text;
    }

    button.addEventListener("click", () => askQuestion(index));
    choiceArea.appendChild(button);
  });
}

function askQuestion(index) {
  if (!currentSuspect) return;

  const question = suspects[currentSuspect].questions[index];
  if (askedQuestions[currentSuspect].includes(index)) return;

  askedQuestions[currentSuspect].push(index);

  addMessage(currentSuspect, question.text, "player");
  renderChoices();

  setTimeout(() => {
    addMessage(currentSuspect, question.answer, "npc");

    if (question.evidence) {
      addEvidence(question.evidence);
    }
  }, 450);
}

function addEvidence(item) {
  const exists = evidence.some((e) => e.id === item.id);
  if (exists) return;

  evidence.push(item);
  renderEvidence();

  setTimeout(() => {
    addSystem(`Bukti baru masuk ke Case Board: ${item.type}`);
  }, 250);
}

function renderEvidence() {
  progressText.textContent = `Bukti: ${evidence.length}/${totalEvidence}`;
  evidenceList.innerHTML = "";

  if (evidence.length === 0) {
    evidenceList.innerHTML = `
      <div class="evidence-card">
        <strong>Belum ada bukti</strong>
        <p>Mulai chat dengan saksi. Jangan langsung percaya satu saksi, karena beberapa clue sengaja menyesatkan.</p>
      </div>
    `;
    return;
  }

  evidence.forEach((item) => {
    const card = document.createElement("div");
    card.className = "evidence-card";
    card.innerHTML = `
      <strong>${item.title}</strong>
      <p><b>${item.type}</b> — ${item.desc}</p>
    `;
    evidenceList.appendChild(card);
  });
}

function accuse() {
  const selected = suspectSelect.value;

  if (!selected) {
    result.textContent = "Pilih tersangka dulu.";
    return;
  }

  if (evidence.length < minimumEvidenceToAccuse) {
    result.textContent = `Bukti masih kurang. Minimal kumpulkan ${minimumEvidenceToAccuse} bukti karena kasus ini banyak clue palsu.`;
    return;
  }

  if (selected === correctCulprit) {
    result.innerHTML = `
      <strong>Benar.</strong><br><br>
      Pelakunya adalah <strong>Sinta</strong>.<br><br>
      Rantai buktinya bukan hanya satu clue: Sinta tahu nilai emosional dan gravir jam, punya kekecewaan personal terhadap Pak Adrian, sempat masuk dapur sehingga punya kesempatan mengambil kunci panel, berada dekat piano menurut beberapa saksi, memakai scarf pink yang cocok dengan serat dekat piano, membawa clutch yang cukup untuk menyembunyikan jam, dan sejak awal terlalu agresif mengarahkan tuduhan ke Doni.<br><br>
      Doni memang punya motif bisnis, tetapi beberapa bukti justru melemahkan tuduhan terhadapnya: ia terekam kamera halaman setelah lampu menyala dan terlihat jauh dari piano setelah blackout.
    `;
  } else {
    result.innerHTML = `
      <strong>Salah tuduh.</strong><br><br>
      ${suspects[selected].name} memang punya bagian yang mencurigakan, tapi bukti belum membentuk rantai yang utuh. Coba cari bukti yang menjawab tiga hal: <strong>motif personal</strong>, <strong>akses ke panel/piano</strong>, dan <strong>cara menyembunyikan jam</strong>.
    `;
  }
}

function restartGame() {
  closeCaseBoard();
  initGame();

  const introScreen = document.getElementById("introScreen");
  if (introScreen) {
    introScreen.classList.remove("hide");
  }
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
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = `${h}:${m}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initElements();

  const startBtn = document.getElementById("startBtn");
  const caseBtn = document.getElementById("caseBtn");
  const accuseBtn = document.getElementById("accuseBtn");
  const restartBtn = document.getElementById("restartBtn");

  if (startBtn) startBtn.addEventListener("click", startGame);
  if (caseBtn) caseBtn.addEventListener("click", openCaseBoard);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeCaseBoard);
  if (accuseBtn) accuseBtn.addEventListener("click", accuse);
  if (restartBtn) restartBtn.addEventListener("click", restartGame);

  updateClock();
  setInterval(updateClock, 30000);
  initGame();
});
