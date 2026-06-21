let totalEvidence = 24;
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
          type: "Alibi",
          suspicion: { Raka: 1 }
        }
      },
      {
        text: "Kenapa Bima bilang kamu sempat ke koridor?",
        requiresEvidence: ["bima_uncertain_silhouette"],
        lockedText: "Butuh keterangan Bima dulu tentang siluet di koridor.",
        answer:
          "Aku ke koridor sebelum lampu mati, bukan saat gelap. Aku ambil jaket dari kursi dekat pintu. Kalau dia bilang saat gelap, berarti dia salah lihat atau sengaja bikin aku terlihat buruk.",
        evidence: {
          id: "raka_corridor_dispute",
          title: "Waktu Raka ke koridor diperdebatkan",
          desc:
            "Raka membantah berada di koridor saat lampu mati. Ada konflik keterangan antara Raka dan Bima, sehingga ini menjadi clue yang belum pasti.",
          type: "Kontradiksi",
          suspicion: { Raka: 1 }
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
          type: "Pengalih",
          suspicion: { Raka: 1 }
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
          type: "Kunci",
          suspicion: { Sinta: 2, Doni: -1 }
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
          type: "Kesempatan",
          suspicion: { Sinta: 1 }
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
          type: "Kontradiksi",
          suspicion: { Doni: -1 }
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
          type: "Fisik",
          suspicion: { Sinta: 1 }
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
          type: "Motif",
          suspicion: { Doni: 2 }
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
          type: "Alibi",
          suspicion: { Doni: -1 }
        }
      },
      {
        text: "Kenapa ada yang bilang kamu keluar halaman?",
        requiresEvidence: ["doni_camera_2026"],
        lockedText: "Butuh rekaman/keterangan Bima tentang Doni di halaman.",
        answer:
          "Saya keluar setelah lampu nyala, bukan saat gelap. Saya panik karena pesan dari kantor masuk terus. Itu memang terlihat buruk, tapi bukan berarti saya ambil jam.",
        evidence: {
          id: "doni_left_after_light",
          title: "Doni keluar setelah lampu menyala",
          desc:
            "Doni membedakan waktu keluar halaman: setelah lampu menyala. Jika benar, maka ia tidak keluar membawa jam saat momen gelap.",
          type: "Kronologi",
          suspicion: { Doni: -1 }
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
          type: "Kunci",
          suspicion: { Sinta: 2 }
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
          type: "Pengalih",
          suspicion: { Doni: 1, Sinta: 1 }
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
          type: "Kontradiksi",
          suspicion: { Sinta: 2 }
        }
      },
      {
        text: "Kenapa Mira bilang kamu masuk dapur?",
        requiresEvidence: ["sinta_in_kitchen"],
        lockedText: "Butuh keterangan Mira dulu bahwa Sinta masuk dapur.",
        answer:
          "Aku cuma ambil tisu. Tanganku kena saus. Aku tidak buka laci atau sentuh apa pun di dapur.",
        evidence: {
          id: "sinta_tissue_excuse",
          title: "Alasan tisu Sinta",
          desc:
            "Sinta mengakui masuk dapur, tetapi mengaku hanya mengambil tisu. Ini tetap memberinya kesempatan mendekati area laci kunci panel.",
          type: "Kesempatan",
          suspicion: { Sinta: 1 }
        }
      },
      {
        text: "Ada serat merah muda dekat piano. Kamu tahu?",
        requiresEvidence: ["pink_fiber_piano"],
        lockedText: "Butuh bukti serat merah muda dari Mira dulu.",
        answer:
          "Banyak orang pakai warna terang malam itu. Jangan karena aku pakai scarf pink lalu semua diarahkan ke aku.",
        evidence: {
          id: "sinta_pink_scarf",
          title: "Sinta memakai scarf pink",
          desc:
            "Sinta mengakui memakai scarf pink. Ini cocok dengan serat merah muda yang ditemukan dekat piano, tetapi belum final tanpa clue lain.",
          type: "Fisik",
          suspicion: { Sinta: 2 }
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
          type: "Motif",
          suspicion: { Sinta: 2 }
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
          type: "Kesempatan",
          suspicion: { Sinta: 1 }
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
          type: "Kesempatan",
          suspicion: { Livia: 1 }
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
          type: "Kunci",
          suspicion: { Sinta: 2 }
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
          type: "Analisis",
          suspicion: { Doni: -1 }
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
          type: "Kontradiksi",
          suspicion: { Doni: -2 }
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
          type: "Pengalih",
          suspicion: { Raka: -1 }
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
          type: "Kesempatan",
          suspicion: { Sinta: 1 }
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
          type: "Fisik",
          suspicion: { Sinta: 1 }
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
          type: "Kronologi",
          suspicion: { Raka: 1, Sinta: 1 }
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
          type: "Motif",
          suspicion: { Sinta: 2 }
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
          type: "Kunci",
          suspicion: { Sinta: 2 }
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
          type: "Analisis",
          suspicion: { Doni: -1 }
        }
      }
    ]
  }
};


function addUnlockedQuestions() {
  suspects.Raka.questions.push(
    {
      text: "Doni dan Livia bilang Sinta muncul dari arah piano. Kamu yakin dengar gelang perempuan?",
      requiresEvidence: ["sinta_from_piano", "sinta_near_piano_livia"],
      lockedText: "Butuh keterangan Doni dan Livia tentang posisi Sinta.",
      answer:
        "Nah itu cocok. Saat gelap aku dengar bunyi gelang halus dari arah piano, bukan langkah sepatu laki-laki. Aku baru sadar Sinta malam itu pakai gelang tipis dan scarf pink.",
      evidence: {
        id: "raka_confirms_female_near_piano",
        title: "Raka menguatkan sosok perempuan dekat piano",
        desc:
          "Setelah dibandingkan dengan keterangan Doni dan Livia, Raka menguatkan bahwa suara yang ia dengar lebih cocok dengan aksesori perempuan di dekat piano.",
        type: "Kunci",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Bima bilang siluet koridor tidak pasti. Kamu masih merasa dijebak?",
      requiresEvidence: ["bima_uncertain_silhouette"],
      lockedText: "Butuh keterangan Bima tentang siluet koridor.",
      answer:
        "Iya. Makanya dari awal aku bilang jangan langsung percaya. Kalau siluetnya tidak jelas, berarti ada orang yang sengaja membuat fokus ke aku dan Doni.",
      evidence: {
        id: "raka_feels_framed",
        title: "Raka merasa dijadikan pengalih",
        desc:
          "Setelah keterangan Bima melemah, dugaan terhadap Raka makin tampak sebagai jalur pengalih, bukan rantai bukti utama.",
        type: "Analisis",
        suspicion: { Raka: -2 }
      }
    }
  );

  suspects.Mira.questions.push(
    {
      text: "Sinta bilang cuma ambil tisu. Apakah dia dekat laci kunci panel?",
      requiresEvidence: ["sinta_tissue_excuse", "breaker_key_missing"],
      lockedText: "Butuh pengakuan Sinta soal tisu dan bukti kunci panel hilang.",
      answer:
        "Kalau dia ambil tisu basah, tempatnya persis di samping laci kunci panel. Dia tidak perlu membuka laci lama-lama. Cukup satu gerakan kecil, saya mungkin tidak sadar.",
      evidence: {
        id: "sinta_near_key_drawer",
        title: "Sinta punya akses langsung ke laci kunci panel",
        desc:
          "Alasan mengambil tisu menempatkan Sinta tepat di samping laci kunci panel, sehingga ia punya kesempatan realistis mengambil atau mengembalikan kunci.",
        type: "Kesempatan",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Ada parfum floral dekat panel. Kamu mengenali baunya?",
      requiresEvidence: ["floral_perfume_panel"],
      lockedText: "Butuh bukti parfum floral dari Bima.",
      answer:
        "Saya tidak mau asal tuduh, tapi bau itu mirip parfum Sinta. Floral manis, cukup kuat. Saat dia masuk dapur, baunya juga tertinggal sebentar.",
      evidence: {
        id: "mira_recognizes_sinta_perfume",
        title: "Mira mengenali parfum floral Sinta",
        desc:
          "Mira menghubungkan bau parfum floral di area panel dengan parfum Sinta, memperkuat hubungan Sinta dengan lokasi pemadaman.",
        type: "Fisik",
        suspicion: { Sinta: 2 }
      }
    }
  );

  suspects.Doni.questions.push(
    {
      text: "Bima punya rekaman kamu keluar pukul 20:26. Bisa jelaskan waktunya?",
      requiresEvidence: ["doni_camera_2026"],
      lockedText: "Butuh bukti kamera halaman dari Bima.",
      answer:
        "Itu bukti aku keluar setelah lampu menyala. Kalau aku pencurinya, kenapa aku baru keluar setelah semua orang bisa melihat? Aku memang panik, tapi bukan kabur saat gelap.",
      evidence: {
        id: "doni_timeline_defense",
        title: "Timeline Doni makin kuat",
        desc:
          "Doni menggunakan rekaman halaman untuk membela diri: ia keluar setelah lampu menyala, bukan saat ruang tengah gelap.",
        type: "Alibi",
        suspicion: { Doni: -2 }
      }
    },
    {
      text: "Sinta terus menyebut kamu. Menurutmu kenapa?",
      requiresEvidence: ["sinta_accuses_doni", "too_obvious_doni"],
      lockedText: "Butuh tuduhan Sinta dan analisis Livia soal Doni terlalu jelas.",
      answer:
        "Karena saya target paling mudah. Semua orang tahu masalah invoice. Kalau pencurinya pintar, dia tinggal buat saya terlihat seperti pelaku yang paling masuk akal.",
      evidence: {
        id: "doni_as_easy_target",
        title: "Doni menjadi target tuduhan paling mudah",
        desc:
          "Doni punya motif yang terlalu jelas, sehingga ia cocok dijadikan kambing hitam oleh pelaku yang ingin mengalihkan fokus.",
        type: "Analisis",
        suspicion: { Doni: -1, Sinta: 1 }
      }
    }
  );

  suspects.Sinta.questions.push(
    {
      text: "Raka dengar suara gelang perempuan dekat piano. Kamu pakai gelang malam itu?",
      requiresEvidence: ["bracelet_sound_piano"],
      lockedText: "Butuh keterangan Raka soal suara gelang dekat piano.",
      answer:
        "Aku memang pakai gelang, tapi banyak perempuan pakai aksesori. Suara gelang tidak membuktikan aku menyentuh jam, kan?",
      evidence: {
        id: "sinta_admits_bracelet",
        title: "Sinta mengakui memakai gelang",
        desc:
          "Sinta mengakui memakai gelang setelah dikonfrontasi dengan suara gelang dekat piano. Jawabannya defensif dan tidak sepenuhnya membantah lokasi.",
        type: "Kunci",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Serat pink dekat piano cocok dengan scarf kamu. Bisa jelaskan?",
      requiresEvidence: ["pink_fiber_piano", "sinta_pink_scarf"],
      lockedText: "Butuh bukti serat pink dari Mira dan pengakuan scarf Sinta.",
      answer:
        "Scarf bisa rontok di mana saja. Aku lewat ruang tengah berkali-kali sebelum makan. Jangan dibuat seolah-olah serat itu pasti jatuh saat lampu mati.",
      evidence: {
        id: "sinta_fiber_defensive",
        title: "Sinta defensif soal serat scarf",
        desc:
          "Sinta tidak membantah kecocokan serat pink, tetapi mencoba menggeser waktunya. Ini membuat bukti fisik tetap relevan.",
        type: "Fisik",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Pak Adrian bilang kamu tahu gravir belakang jam. Kenapa kamu ingat detail itu?",
      requiresEvidence: ["sinta_knows_engraving"],
      lockedText: "Butuh keterangan Pak Adrian tentang gravir jam.",
      answer:
        "Karena dulu dia pernah cerita. Aku ingat hal-hal kecil, itu saja. Jangan karena aku ingat detail lalu aku dituduh mencuri.",
      evidence: {
        id: "sinta_memory_of_engraving",
        title: "Sinta mengingat detail personal jam",
        desc:
          "Sinta mengakui mengingat gravir jam. Ini menguatkan bahwa ia memahami nilai emosional jam, bukan hanya harganya.",
        type: "Motif",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Mira bilang kamu dekat laci kunci panel. Kamu sempat buka laci?",
      requiresEvidence: ["sinta_near_key_drawer"],
      lockedText: "Butuh keterangan Mira tentang posisi tisu dan laci kunci.",
      answer:
        "Tidak. Aku cuma ambil tisu. Kalau Mira tidak melihat aku buka laci, berarti itu cuma dugaan. Kalian terlalu memaksakan cerita.",
      evidence: {
        id: "sinta_denies_key_drawer",
        title: "Sinta membantah laci kunci tanpa alibi kuat",
        desc:
          "Sinta membantah membuka laci, tetapi posisinya tetap memberi kesempatan. Bantahannya tidak menghapus hubungan dengan akses panel.",
        type: "Kontradiksi",
        suspicion: { Sinta: 2 }
      }
    }
  );

  suspects.Livia.questions.push(
    {
      text: "Kalau Sinta dekat piano, kenapa kamu tidak langsung bilang?",
      requiresEvidence: ["sinta_from_piano", "sinta_claim_front_door"],
      lockedText: "Butuh konflik posisi Sinta dari Doni dan klaim Sinta sendiri.",
      answer:
        "Karena aku takut salah tuduh. Tapi setelah dengar Sinta mengaku dekat pintu depan, posisinya makin aneh. Aku yakin dia bukan di pintu depan saat lampu nyala lagi.",
      evidence: {
        id: "livia_reasserts_sinta_position",
        title: "Livia menegaskan posisi Sinta janggal",
        desc:
          "Setelah klaim Sinta dibandingkan dengan keterangan Doni, Livia makin yakin posisi Sinta dekat piano dan bukan dekat pintu depan.",
        type: "Kunci",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Apakah scarf atau clutch Sinta terlihat berubah setelah lampu nyala?",
      requiresEvidence: ["sinta_clutch_size", "sinta_pink_scarf"],
      lockedText: "Butuh bukti clutch dari Bima dan scarf pink dari Sinta.",
      answer:
        "Scarf-nya agak kusut, dan clutch-nya dia pegang lebih rapat dari sebelumnya. Dulu sebelum lampu mati, clutch itu dia taruh santai di samping kursi.",
      evidence: {
        id: "sinta_clutch_behavior_changed",
        title: "Perilaku Sinta terhadap clutch berubah",
        desc:
          "Livia melihat Sinta memegang clutch lebih rapat setelah lampu menyala. Ini mendukung kemungkinan jam disembunyikan di dalam clutch.",
        type: "Kesempatan",
        suspicion: { Sinta: 2 }
      }
    }
  );

  suspects.Bima.questions.push(
    {
      text: "Kalau Sinta membawa clutch, apakah ada rekaman dia keluar?",
      requiresEvidence: ["sinta_clutch_size"],
      lockedText: "Butuh catatan Bima tentang clutch Sinta.",
      answer:
        "Ada. Tapi dia tidak langsung keluar. Dia ke toilet tamu dulu sekitar 20:29, lalu keluar 20:34. Area toilet tidak kena kamera langsung.",
      evidence: {
        id: "sinta_toilet_gap",
        title: "Sinta sempat ke toilet tanpa kamera langsung",
        desc:
          "Sinta masuk ke toilet tamu setelah kejadian. Area itu tidak terekam langsung, memberi kesempatan memindahkan atau menyembunyikan jam.",
        type: "Kronologi",
        suspicion: { Sinta: 2 }
      }
    },
    {
      text: "Mira mengenali parfum floral Sinta. Apakah bau itu juga ada dekat toilet?",
      requiresEvidence: ["mira_recognizes_sinta_perfume", "sinta_toilet_gap"],
      lockedText: "Butuh pengenalan parfum Mira dan celah toilet Sinta.",
      answer:
        "Iya, bau floral yang sama cukup kuat dekat lorong toilet. Saya baru hubungkan setelah Mira menyebut parfum itu.",
      evidence: {
        id: "floral_perfume_toilet",
        title: "Parfum floral juga tercium dekat toilet",
        desc:
          "Bau floral muncul di dua lokasi penting: panel listrik dan lorong toilet. Ini menghubungkan jalur gerak Sinta setelah blackout.",
        type: "Fisik",
        suspicion: { Sinta: 3 }
      }
    }
  );

  suspects.Adrian.questions.push(
    {
      text: "Kalau Sinta tahu gravir, apakah dia tahu jam itu mudah dilepas dari strap?",
      requiresEvidence: ["sinta_knows_engraving", "watch_piano_tray"],
      lockedText: "Butuh bukti Sinta tahu gravir dan jam dilepas di nampan piano.",
      answer:
        "Dia pernah lihat saya melepas jam itu di acara lama. Strap-nya memang agak sensitif di kulit saya. Jadi dia tahu saya kadang melepasnya saat duduk lama.",
      evidence: {
        id: "sinta_knows_watch_habit",
        title: "Sinta tahu kebiasaan Adrian melepas jam",
        desc:
          "Sinta bukan hanya tahu gravir, tetapi juga tahu kebiasaan Pak Adrian melepas jam saat tidak nyaman. Ini menjelaskan kenapa ia siap memanfaatkan momen.",
        type: "Kunci",
        suspicion: { Sinta: 3 }
      }
    },
    {
      text: "Setelah bukti baru ini, apakah Doni masih paling masuk akal?",
      requiresEvidence: ["doni_timeline_defense", "doni_as_easy_target", "adrian_doubts_doni"],
      lockedText: "Butuh alibi Doni, analisis Doni sebagai target, dan keraguan korban.",
      answer:
        "Tidak. Doni tetap menyebalkan, tapi rantainya tidak utuh. Yang lebih masuk akal adalah orang yang tahu nilai personal jam, punya akses ke panel, dan punya cara menyembunyikannya.",
      evidence: {
        id: "adrian_rules_out_doni_chain",
        title: "Rantai bukti Doni tidak utuh",
        desc:
          "Pak Adrian menilai bukti terhadap Doni tidak membentuk rantai lengkap, mengarahkan pemain untuk mencari pelaku dengan motif personal dan kesempatan teknis.",
        type: "Analisis",
        suspicion: { Doni: -2, Sinta: 1 }
      }
    }
  );

  totalEvidence = Object.values(suspects).reduce((sum, suspect) => {
    return sum + suspect.questions.filter((q) => q.evidence).length;
  }, 0);
}

addUnlockedQuestions();

const correctCulprit = "Sinta";

// Highest possible suspicion score per suspect, used to turn raw points into a 0-100% meter.
let maxSuspicion = {};

function computeMaxSuspicion() {
  maxSuspicion = {};
  Object.keys(suspects).forEach((name) => {
    maxSuspicion[name] = 0;
  });

  Object.values(suspects).forEach((suspect) => {
    suspect.questions.forEach((question) => {
      if (!question.evidence || !question.evidence.suspicion) return;

      Object.entries(question.evidence.suspicion).forEach(([target, value]) => {
        if (value > 0) {
          maxSuspicion[target] = (maxSuspicion[target] || 0) + value;
        }
      });
    });
  });
}

computeMaxSuspicion();

let currentSuspect = null;
let evidence = [];
let askedQuestions = {};
let chatLogs = {};
let unlockedNoticesShown = {};
let pendingReplies = {};
let toastTimer = null;

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
let suspicionBoard;

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
  suspicionBoard = document.getElementById("suspicionBoard");
}

function initGame() {
  contacts.innerHTML = "";
  evidence = [];
  askedQuestions = {};
  chatLogs = {};
  unlockedNoticesShown = {};
  pendingReplies = {};
  lastSuspicionPct = {};
  currentSuspect = null;

  Object.keys(suspects).forEach((name) => {
    askedQuestions[name] = [];
    chatLogs[name] = [];
    unlockedNoticesShown[name] = [];
    pendingReplies[name] = false;

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
  renderSuspicion();
  updateContactBadges();
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

  if (!chatLogs[name] || chatLogs[name].length === 0) {
    pushLog(name, { kind: "system", text: "Interogasi dimulai" });
    pushLog(name, { kind: "message", speaker: name, sender: "npc", text: suspects[name].intro });
  } else {
    maybeShowUnlockedNotice(name);
  }

  renderChatLog(name);
  renderChoices();
}

function hasEvidence(id) {
  return evidence.some((item) => item.id === id);
}

function questionUnlocked(question) {
  if (!question.requiresEvidence || question.requiresEvidence.length === 0) {
    return true;
  }
  return question.requiresEvidence.every((id) => hasEvidence(id));
}

function countUnlockedQuestions(name) {
  return suspects[name].questions.filter((q) => questionUnlocked(q)).length;
}

function pushLog(name, entry) {
  if (!chatLogs[name]) chatLogs[name] = [];
  chatLogs[name].push(entry);
}

function renderChatLog(name) {
  chatWindow.innerHTML = "";
  const logs = chatLogs[name] || [];

  logs.forEach((entry) => {
    if (entry.kind === "system") {
      const div = document.createElement("div");
      div.className = "system-msg";
      div.textContent = entry.text;
      chatWindow.appendChild(div);
    }

    if (entry.kind === "typing") {
      const row = document.createElement("div");
      row.className = "msg-row npc typing-row";
      row.dataset.typingId = entry.id;
      row.innerHTML = `
        ${avatar(entry.speaker, "mini-avatar")}
        <div class="typing-bubble">
          <span></span><span></span><span></span>
        </div>
      `;
      chatWindow.appendChild(row);
    }

    if (entry.kind === "message") {
      const row = document.createElement("div");
      row.className = "msg-row " + entry.sender;

      if (entry.sender === "npc") {
        row.innerHTML = `
          ${avatar(entry.speaker, "mini-avatar")}
          <div class="bubble npc">${entry.text}</div>
        `;
      } else {
        row.innerHTML = `<div class="bubble player">${entry.text}</div>`;
      }

      chatWindow.appendChild(row);
    }
  });

  scrollChatToBottom();
}

function maybeShowUnlockedNotice(name) {
  const unlockedQuestions = suspects[name].questions
    .map((question, index) => ({ question, index }))
    .filter(({ question, index }) => {
      const isBranchQuestion = question.requiresEvidence && question.requiresEvidence.length > 0;
      return isBranchQuestion && questionUnlocked(question) && !askedQuestions[name].includes(index);
    });

  const already = unlockedNoticesShown[name] || [];
  const newUnlocks = unlockedQuestions.filter(({ index }) => !already.includes(index));

  if (newUnlocks.length > 0 && chatLogs[name] && chatLogs[name].length > 0) {
    pushLog(name, {
      kind: "system",
      text: `${newUnlocks.length} pertanyaan baru terbuka dari bukti karakter lain`
    });
    unlockedNoticesShown[name].push(...newUnlocks.map(({ index }) => index));
  }
}

function scrollChatToBottom() {
  requestAnimationFrame(() => {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}

function makeTypingId() {
  return "typing_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
}

function addTypingTo(targetSuspect) {
  const id = makeTypingId();
  pushLog(targetSuspect, { kind: "typing", id, speaker: targetSuspect });

  if (currentSuspect === targetSuspect) {
    renderChatLog(targetSuspect);
  }

  return id;
}

function removeTypingFrom(targetSuspect, typingId) {
  if (!chatLogs[targetSuspect]) return;

  chatLogs[targetSuspect] = chatLogs[targetSuspect].filter((entry) => {
    return !(entry.kind === "typing" && entry.id === typingId);
  });

  if (currentSuspect === targetSuspect) {
    renderChatLog(targetSuspect);
  }
}

function showToast(title, message) {
  let toast = document.getElementById("replyToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "replyToast";
    toast.className = "reply-toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
  `;

  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function getReplyDelay() {
  return 950 + Math.floor(Math.random() * 850);
}

function addSystemTo(targetSuspect, text) {
  if (!targetSuspect) return;

  pushLog(targetSuspect, { kind: "system", text });

  if (currentSuspect === targetSuspect) {
    const div = document.createElement("div");
    div.className = "system-msg";
    div.textContent = text;
    chatWindow.appendChild(div);
    scrollChatToBottom();
  }
}

function addMessageTo(targetSuspect, speaker, text, sender) {
  if (!targetSuspect) return;

  pushLog(targetSuspect, { kind: "message", speaker, sender, text });

  if (currentSuspect !== targetSuspect) {
    return;
  }

  const row = document.createElement("div");
  row.className = "msg-row " + sender;

  if (sender === "npc") {
    row.innerHTML = `
      ${avatar(speaker, "mini-avatar")}
      <div class="bubble npc">${text}</div>
    `;
  } else {
    row.innerHTML = `<div class="bubble player">${text}</div>`;
  }

  chatWindow.appendChild(row);
  scrollChatToBottom();
}

function addSystem(text) {
  addSystemTo(currentSuspect, text);
}

function addMessage(name, text, sender) {
  addMessageTo(currentSuspect, name, text, sender);
}

function renderChoices() {
  choiceArea.innerHTML = "";
  if (!currentSuspect) return;

  const isWaitingReply = pendingReplies[currentSuspect];

  if (isWaitingReply) {
    const wait = document.createElement("div");
    wait.className = "waiting-reply";
    wait.textContent = `${suspects[currentSuspect].name} sedang mengetik jawaban...`;
    choiceArea.appendChild(wait);
  }

  let visibleCount = 0;

  suspects[currentSuspect].questions.forEach((question, index) => {
    const isUnlocked = questionUnlocked(question);
    const wasAsked = askedQuestions[currentSuspect].includes(index);

    if (!isUnlocked && !question.lockedText) {
      return;
    }

    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";

    if (!isUnlocked) {
      button.classList.add("locked-choice");
      button.disabled = true;
      button.textContent = "Terkunci: " + question.lockedText;
    } else if (wasAsked) {
      button.disabled = true;
      button.textContent = "Sudah ditanyakan: " + question.text;
    } else if (isWaitingReply) {
      button.disabled = true;
      button.textContent = question.text;
    } else {
      button.textContent = question.text;
      button.addEventListener("click", () => askQuestion(index));
    }

    visibleCount++;
    choiceArea.appendChild(button);
  });

  if (visibleCount === 0) {
    const div = document.createElement("div");
    div.className = "system-msg choices-empty";
    div.textContent = "Belum ada pertanyaan. Cari bukti dari kontak lain.";
    choiceArea.appendChild(div);
  }

  updateContactBadges();
}

function askQuestion(index) {
  if (!currentSuspect) return;

  const suspectName = currentSuspect;
  const question = suspects[suspectName].questions[index];
  if (askedQuestions[suspectName].includes(index)) return;

  if (pendingReplies[suspectName]) {
    addSystemTo(suspectName, `${suspects[suspectName].name} masih mengetik. Tunggu jawabannya dulu.`);
    renderChoices();
    return;
  }

  if (!questionUnlocked(question)) {
    addSystemTo(suspectName, question.lockedText ? "Pertanyaan terkunci: " + question.lockedText : "Pertanyaan ini belum terbuka. Cari bukti dari kontak lain dulu.");
    renderChoices();
    return;
  }

  askedQuestions[suspectName].push(index);
  pendingReplies[suspectName] = true;

  addMessageTo(suspectName, suspectName, question.text, "player");
  const typingId = addTypingTo(suspectName);
  renderChoices();

  setTimeout(() => {
    removeTypingFrom(suspectName, typingId);
    addMessageTo(suspectName, suspectName, question.answer, "npc");

    pendingReplies[suspectName] = false;

    showToast(`${suspects[suspectName].name} membalas`, question.answer);

    if (question.evidence) {
      addEvidence(question.evidence, suspectName);
    }

    if (currentSuspect === suspectName) {
      renderChoices();
    } else {
      updateContactBadges();
    }
  }, getReplyDelay());
}

function addEvidence(item, sourceSuspect = currentSuspect) {
  const exists = evidence.some((e) => e.id === item.id);
  if (exists) return;

  evidence.push(item);
  renderEvidence();
  renderSuspicion();
  updateContactBadges();

  if (currentSuspect) {
    renderChoices();
  }

  setTimeout(() => {
    addSystemTo(sourceSuspect, `Bukti baru masuk ke Case Board: ${item.type}`);
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

function getSuspicionScores() {
  const scores = {};
  Object.keys(suspects).forEach((name) => {
    scores[name] = 0;
  });

  evidence.forEach((item) => {
    if (!item.suspicion) return;
    Object.entries(item.suspicion).forEach(([target, value]) => {
      if (!(target in scores)) return;
      scores[target] += value;
    });
  });

  Object.keys(scores).forEach((name) => {
    if (scores[name] < 0) scores[name] = 0;
  });

  return scores;
}

let lastSuspicionPct = {};

function renderSuspicion() {
  if (!suspicionBoard) return;

  const scores = getSuspicionScores();

  const order = Object.keys(suspects).sort((a, b) => {
    const pa = maxSuspicion[a] ? scores[a] / maxSuspicion[a] : 0;
    const pb = maxSuspicion[b] ? scores[b] / maxSuspicion[b] : 0;
    return pb - pa;
  });

  suspicionBoard.innerHTML = order
    .map((name) => {
      const max = maxSuspicion[name] || 0;
      const pct = max > 0 ? Math.max(0, Math.min(100, Math.round((scores[name] / max) * 100))) : 0;

      let level = "low";
      if (pct >= 66) level = "high";
      else if (pct >= 33) level = "mid";

      const prevPct = lastSuspicionPct[name] || 0;
      let trendClass = "";
      if (pct > prevPct) trendClass = " trend-up";
      else if (pct < prevPct) trendClass = " trend-down";

      lastSuspicionPct[name] = pct;

      return `
        <div class="suspicion-row${trendClass}">
          <div class="suspicion-name">${suspects[name].name.replace(/^Pak /, "")}</div>
          <div class="suspicion-bar-track">
            <div class="suspicion-bar-fill ${level}" style="width:${pct}%"></div>
          </div>
          <div class="suspicion-pct">${pct}%</div>
        </div>
      `;
    })
    .join("");
}

function updateContactBadges() {
  Object.keys(suspects).forEach((name) => {
    const contact = document.getElementById("contact-" + name);
    if (!contact) return;

    const available = suspects[name].questions.filter((q, index) => {
      return questionUnlocked(q) && !askedQuestions[name].includes(index);
    }).length;

    const nameEl = contact.querySelector(".contact-name");
    if (nameEl) {
      nameEl.textContent = available > 0 ? `${suspects[name].name} (${available})` : suspects[name].name;
    }
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
