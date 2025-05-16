// src/data/ontologyClasses.js

export const ontologyClasses = [
  {
    label: "owl:Thing",
    subclasses: [
      "Tokoh",
      "TempatAsal",
      "Kerajaan",
      "Gelar",
      "Kesaktian",
      "Pusaka"
    ]
  },
  {
    label: "Tokoh",
    subclasses: [
      "Dewa",
      "Kera",
      "Manusia",
      "Raksasa",
      "Bidadari",
      "MakhlukHalus",
      "Siluman"
    ]
  },
  {
    label: "TempatAsal",
    subclasses: [
      "Bumi",
      "Kahyangan"
    ]
  },
  {
    label: "Kerajaan",
    subclasses: [
      "KerajaanDewa",
      "KerajaanManusia",
      "KerajaanRaksasa",
      "KerajaanKera",
      "KerajaanMakhlukHalus",
      "KerajaanSiluman"
    ]
  },
  {
    label: "Bumi",
    subclasses: [
      "Keputren",
      "Kesatriyan",
      "Laut",
      "Pertapaan",
      "Padhukuhan",
      "Sungai"
    ]
  }
];

export const objectProperties = [
  { label: "bertempatTinggal", domain: "Tokoh", range: "TempatAsal" },
  { label: "bertempatTinggal", domain: "Tokoh", range: "Kerajaan" },
  { label: "ditempatiOleh", domain: "TempatAsal", range: "Tokoh" },
  { label: "ditempatiOleh", domain: "Kerajaan", range: "Tokoh" },
  { label: "hasKesaktian", domain: "Tokoh", range: "Kesaktian" },
  { label: "hasPatih", domain: "Tokoh", range: "Tokoh" },
  { label: "hasPusaka", domain: "Tokoh", range: "Pusaka" },
  { label: "hasWilayah", domain: "Kerajaan", range: "TempatAsal" },
  { label: "abdiDari", domain: "Tokoh", range: "Tokoh" },
  { label: "gelarDari", domain: "Gelar", range: "Tokoh" },
  { label: "hasAbdi", domain: "Tokoh", range: "Tokoh" },
  { label: "hasGelar", domain: "Tokoh", range: "Gelar" },
  { label: "hasHusband", domain: "Tokoh", range: "Tokoh" },
  { label: "hasWife", domain: "Tokoh", range: "Tokoh" },
  { label: "kesaktianDari", domain: "Kesaktian", range: "Tokoh" },
  { label: "patihDari", domain: "Tokoh", range: "Tokoh" },
  { label: "pemimpinKerajaan", domain: "Tokoh", range: "Kerajaan" },
  { label: "dipimpinOleh", domain: "Kerajaan", range: "Tokoh" },
  { label: "pusakaDari", domain: "Pusaka", range: "Tokoh" }
];

// Metadata dan individu
const nodeMetadata = {
  Tokoh: {
    comment: `Class ini merepresentasikan terkait seluruh entitas yang memiliki kehidupan seperti; 
      Bidadari, Dewa, Manusia, Kera, Raksasa, Makhluk Halus, ataupun Siluman.`,
    instances: [
      "===== GOLONGAN BIDADARI =====", 
      "Bathari Darmastutri", "Bathari Durga", "Bathari Kiswani", "Bathari Retnawati", "Dewi Aditi", "Dewi Anurada", 
      "Dewi Baruni", "Dewi Bharani", "Dewi Brahmaneki", "Dewi Darini", "Dewi Darmani", "Dewi Diwi", "Dewi Dresanala", "Dewi Gangga", 
      "Dewi Hastuti", "Dewi Hira", "Dewi Indradi", "Dewi Kanekawatim", "Dewi Laksmi", "Dewi Manuhara", "Dewi Mitra", "Dewi Mumpuni",
      "Dewi Nagagini", "Dewi Nilawati", "Dewi Nurweni", "Dewi Pertiwi", "Dewi Prabha", "Dewi Ragyi", "Dewi Rarasati", "Dewi Ratih", 
      "Dewi Rohini", "Dewi Saci", "Dewi Saranyu", "Dewi Saraswati", "Dewi Sarwati", "Dewi Sati Bidadari", "Dewi Senggani", "Dewi Sri", 
      "Dewi Sri Pujayanti", "Dewi Sri Sekar", "Dewi Sumarekti", "Dewi Supreti", "Dewi Suyati", "Dewi Tara", "Dewi Triwati", "Dewi Umarakti", 
      "Dewi Urangayu", "Dewi Wasu", "Dewi Wilutama", "Dewi Wirandi", "Dewi Wiyati", "Dewi Wiyodi", "Dewi Yadnyanawati", "Kaniraras", 
      "Mayangsekar", "Mayangsih", "Sanghyang Darmastuti", "Widadari Dewi Mayangsari", "",

      "===== GOLONGAN DEWA =====",
      "Antanaga", "Bambang Nagatatmala", "Bambang Sakri", "Bambang Sayati", "Bambang Sekutrem", "Bambang Suteja", "Bathara Antaboga", 
      "Bathara Asmara", "Bathara Baruna", "Bathara Bayu", "Bathara Brahma", "Bathara Cakra", "Bathara Caturkanaka", "Bathara Chandra", 
      "Bathara Daniswara", "Bathara Darma", "Bathara Ganesha", "Bathara Guru", "Bathara Herumaya", "Bathara Indra", "Bathara Kala", 
      "Bathara Kamajaya", "Bathara Kuwera", "Bathara Manumanasa", "Bathara Narada", "Bathara Nioya", "Bathara Panyarikan", "Bathara Sambawa", 
      "Bathara Sambu", "Bathara Sambudana", "Bathara Sambujana", "Bathara Sambusa", "Bathara Senggana", "Bathara Surya", "Bathara Syiwah", 
      "Bathara Tembora", "Bathara Wisnu", "Bathara Wrahaspati", "Bathara Wungkuam", "Bathara Yamadipati", "Dewa Ruci", "Lembu Andhini", 
      "Maharesi Kasyapa", "Manonbawa", "Manumadewa", "Paridarma", "Patih Banindra", "Patih Surata", "Prabu Narakasura", "Prabu Parikenan", 
      "Prabu Umaran", "Resi Dyasta", "Resi Kusyamba", "Sanghyang Anantaswara", "Sanghyang Antaga Atau Togog", "Sanghyang Daksa", 
      "Sanghyang Darmajaka", "Sanghyang Dewanjali", "Sanghyang Ismaya Atau Semar", "Sanghyang Nurasa", "Sanghyang Nurcahya", "Sanghyang Parma", 
      "Sanghyang Rekatama", "Sanghyang Resi Soma", "Sanghyang Rudra", "Sanghyang Taya", "Sanghyang Tunggal", "Sanghyang Wenang", 
      "Sanghyang Wening", "Sriati", "Trigangga", "",

      "===== GOLONGAN KERA =====",
      "Dewi Jembawati", "Raden Anoman", "Raden Jaya Anggada", "Raden Jaya Anila", "Raden Sugriwa", "Resi Jembawan", "Resi Subali", "",

      "===== GOLONGAN MAKHLUK HALUS =====",
      "Bagong", "Endang Bagnyawati", "Gandarwa", "Gareng", "Patanam", "Petruk", "Prabu Balya", "Prabu Rawangin", "",

      "===== GOLONGAN MANUSIA =====",
      "Adipati Banjarjumput", "Adipati Karna", "Arya Adimanggala", "Arya Antisura", "Arya Basukiswara", "Arya Basumurti", "Arya Basunanda", 
      "Arya Buriswara", "Arya Danurwenda", "Arya Gajaksa", "Arya Gandamana", "Arya Kumbayaka", "Arya Prabu Rukma", "Arya Sasikirana", "Arya Surabasa", 
      "Arya Surabasata", "Arya Ugrasena", "Bambang Aswatama", "Bambang Irawan", "Bambang Kartanadi", "Bambang Pramusinta", "Bambang Priyambada", 
      "Bambang Rukmarata", "Bambang Widapaksa", "Barata", "Basuwati", "Batlawa", "Begawan Gaotama", "Begawan Jumanten", "Begawan Sidik Wacana", 
      "Begawan Suwandageni", "Begawan Wasista", "Cangik", "Destakestu", "Dewi Amba", "Dewi Ambalika", "Dewi Ambika", "Dewi Anganti", "Dewi Anjani", 
      "Dewi Antiwati", "Dewi Badrahini", "Dewi Banowati", "Dewi Barawati", "Dewi Basutari", "Dewi Basuwati", "Dewi Citralangeni", "Dewi Citrawati", 
      "Dewi Dangan", "Dewi Desidara", "Dewi Dewika", "Dewi Drati", "Dewi Drupadi", "Dewi Durgandini", "Dewi Dursala", "Dewi Endrasmi", "Dewi Erawati", 
      "Dewi Gandarini", "Dewi Gandawati", "Dewi Gandini", "Dewi Gendari", "Dewi Gentang", "Dewi Impun", "Dewi Kaneswati", "Dewi Kanwaka", "Dewi Karastri", 
      "Dewi Kekayi Mahabharata", "Dewi Kekayi Ramayana", "Dewi Krepi", "Dewi Kumbayani", "Dewi Kunthi", "Dewi Larasati", "Dewi Madrim", "Dewi Mahindra", 
      "Dewi Mahira", "Dewi Murdaningrum", "Dewi Prajapati", "Dewi Pramuwati", "Dewi Prawasti", "Dewi Puyangan", "Dewi Raghu", "Dewi Rekathawati", 
      "Dewi Renuka", "Dewi Rukmini", "Dewi Saltani", "Dewi Salyaningsih", "Dewi Saradewati", "Dewi Sariwati", "Dewi Satap", "Dewi Sati Manusia", 
      "Dewi Satyasraya", "Dewi Satyawati", "Dewi Sayati", "Dewi Setyaboma", "Dewi Setyawati", "Dewi Sindusari", "Dewi Sinta", "Dewi Siti Sundari", 
      "Dewi Srengganawati", "Dewi Srengginiwati", "Dewi Srikandhi", "Dewi Srinadi", "Dewi Sritanjung", "Dewi Subadra", "Dewi Subaswara", "Dewi Sugatawati", 
      "Dewi Sukesi", "Dewi Sukesti", "Dewi Sumanda", "Dewi Sumitra", "Dewi Surtikanthi", "Dewi Suwarni", "Dewi Swargandini", "Dewi Tamisyi", "Dewi Tirtawati", 
      "Dewi Trirasa", "Dewi Tunjung Biru", "Dewi Ulupi", "Dewi Undanawati", "Dewi Utari", "Dewi Warsini", "Dewi Wateri", "Dewi Yukti", "Drestaka", "Drestara", 
      "Empu Kanomayasa", "Endang Pergiwa", "Endang Pergiwati", "Garwa Selir", "Gorawangsa", "Gunadewa", "Harjuna Sasrabahu", "Kangsa Dewa", "Ken Sagupi", 
      "Kurawa Laki-laki", "Kusiya", "Lengkungkusuma", "Lesmana Mandrakumara", "Lesmanawati", "Limbuk", "Padmasari", "Pahastaka", "Partadewa", "Patih Pragata", 
      "Patih Sengkuni", "Patih Udawa", "Patih Wreksanata", "Pedang Kerig Waja", "Prabawa", "Prabu Baladewa", "Prabu Banaputra", "Prabu Banawa", 
      "Prabu Banyutinalang", "Prabu Baratawaja", "Prabu Basudewa", "Prabu Basukethi", "Prabu Basukunthi", "Prabu Basupati", "Prabu Citragada", 
      "Prabu Citrawirya", "Prabu Darmahumbara", "Prabu Dasarata", "Prabu Destarastra", "Prabu Drupada", "Prabu Duryudana", "Prabu Dwarawati", 
      "Prabu Gandabayu", "Prabu Gandara", "Prabu Hiranyawarma", "Prabu Janaka Manthili", "Prabu Kanekanegara", "Prabu Kartawirya", "Prabu Kekaya", 
      "Prabu Keswara", "Prabu Kridakirata", "Prabu Mandrapati", "Prabu Matswapati", "Prabu Pandhu", "Prabu Parikesit", "Prabu Pratipa", "Prabu Purungaji", 
      "Prabu Rama Wijaya", "Prabu Ruryana", "Prabu Salya", "Prabu Samresi", "Prabu Sarawasesa", "Prabu Sentanu", "Prabu Setyajid", "Prabu Srimaha Punggung", 
      "Prabu Suganda", "Prabu Sumali", "Prabu Tasikraja", "Prabu Waskuntheya", "Prabu Wimasucandra", "Prabu Yudhistira", "Prabu Yuyudana", "Pramusuta", 
      "Raden Abimanyu", "Raden Antakadewa", "Raden Antareja", "Raden Antasena", "Raden Arjuna", "Raden Bratalaras", "Raden Citraksa", "Raden Citraksi", 
      "Raden Drestajumena", "Raden Durmagati", "Raden Dursala", "Raden Dursasana", "Raden Gathutkaca", "Raden Kartamarma", "Raden Kencakarupa", 
      "Raden Laksmana", "Raden Nakula", "Raden Partawindya", "Raden Ramabargawa", "Raden Rupakenca", "Raden Sadana", "Raden Sadewa", "Raden Samba", 
      "Raden Seta", "Raden Setyaki", "Raden Srutakirti", "Raden Srutanika", "Raden Srutasoma", "Raden Srutawarman", "Raden Sumantri", "Raden Sumitra", 
      "Raden Utara", "Raden Werkudara", "Raden Wisanggeni", "Raden Wratsangka", "Raden Yodha", "Rajamala", "Ramaprawa", "Ramayana", "Resi Abiyasa", 
      "Resi Bisma", "Resi Durna", "Resi Jamadagni", "Resi Palasara", "Resi Pulastya", "Resi Supadma", "Resi Wisrawa", "Saragupita", "Satrugna", "Setyaka", 
      "Surasena", "Warabasanta", "Warsasena", "Wasita", "Yamawidura", "Yudayana", "",

      "===== GOLONGAN RAKSASA =====",
      "Arya Nilarudraka", "Begawan Salantara", "Bilung", "Buta Cakil", "Dentawilukrama", "Dewi Arimbi", "Dewi Danyawati", "Dewi Indraningrum", 
      "Dewi Lokati", "Dewi Lokawati", "Dewi Mustakaweni", "Dewi Sanjiwati", "Dewi Sarpakenaka", "Dewi Sayempraba", "Dewi Tari", "Dewi Trijata", 
      "Ditya Karadusana", "Ditya Nopati", "Kala Bendana", "Kumandhang Garba", "Prabu Arimbaka", "Prabu Bogadhenta", "Prabu Dasamuka", 
      "Prabu Kala Pracona", "Prabu Lokawana", "Prabu Niwatakawaca", "Prahasta", "Pratalamayam", "Raden Aswanikumba", "Raden Gunawan Wibisana", 
      "Raden Indrajit", "Raden Kumbakarna", "Raden Kumbakumba", "Raden Sukrasana", "Resi Badawanganala", "Resi Rasakumala", "Saranadewa", 
      "Trimuka", "Trimurda", "Trisirah", "Yaksadewa", "",

      "===== GOLONGAN SILUMAN =====",
      "Dewi Ganggi", "Prabu Ganggapranawa"
    ]
  },
  Dewa: {
    comment: "Class ini merepresentasikan terkait tokoh laki-laki yang digambarkan sebagai makhluk suci dan memiliki kekuatan supernatural serta kehidupan abadi.",
    instances: [
      "Antanaga", "Bambang Nagatatmala", "Bambang Sakri", "Bambang Sayati", "Bambang Sekutrem", "Bambang Suteja", "Bathara Antaboga", 
      "Bathara Asmara", "Bathara Baruna", "Bathara Bayu", "Bathara Brahma", "Bathara Cakra", "Bathara Caturkanaka", "Bathara Chandra", 
      "Bathara Daniswara", "Bathara Darma", "Bathara Ganesha", "Bathara Guru", "Bathara Herumaya", "Bathara Indra", "Bathara Kala", 
      "Bathara Kamajaya", "Bathara Kuwera", "Bathara Manumanasa", "Bathara Narada", "Bathara Nioya", "Bathara Panyarikan", "Bathara Sambawa", 
      "Bathara Sambu", "Bathara Sambudana", "Bathara Sambujana", "Bathara Sambusa", "Bathara Senggana", "Bathara Surya", "Bathara Syiwah", 
      "Bathara Tembora", "Bathara Wisnu", "Bathara Wrahaspati", "Bathara Wungkuam", "Bathara Yamadipati", "Dewa Ruci", "Lembu Andhini", 
      "Maharesi Kasyapa", "Manonbawa", "Manumadewa", "Paridarma", "Patih Banindra", "Patih Surata", "Prabu Narakasura", "Prabu Parikenan", 
      "Prabu Umaran", "Resi Dyasta", "Resi Kusyamba", "Sanghyang Anantaswara", "Sanghyang Antaga Atau Togog", "Sanghyang Daksa", 
      "Sanghyang Darmajaka", "Sanghyang Dewanjali", "Sanghyang Ismaya Atau Semar", "Sanghyang Nurasa", "Sanghyang Nurcahya", "Sanghyang Parma", 
      "Sanghyang Rekatama", "Sanghyang Resi Soma", "Sanghyang Rudra", "Sanghyang Taya", "Sanghyang Tunggal", "Sanghyang Wenang", 
      "Sanghyang Wening", "Sriati", "Trigangga"
    ]
  },
  Manusia: {
    comment: "Class ini merepresentasikan terkait tokoh yang mewakili sifat-sifat manusiawi, seperti keberanian, kesetiaan, ambisi, kecemburuan, cinta, dan pengorbanan.",
    instances: [
      "Adipati Banjarjumput", "Adipati Karna", "Arya Adimanggala", "Arya Antisura", "Arya Basukiswara", "Arya Basumurti", "Arya Basunanda", 
      "Arya Buriswara", "Arya Danurwenda", "Arya Gajaksa", "Arya Gandamana", "Arya Kumbayaka", "Arya Prabu Rukma", "Arya Sasikirana", "Arya Surabasa", 
      "Arya Surabasata", "Arya Ugrasena", "Bambang Aswatama", "Bambang Irawan", "Bambang Kartanadi", "Bambang Pramusinta", "Bambang Priyambada", 
      "Bambang Rukmarata", "Bambang Widapaksa", "Barata", "Basuwati", "Batlawa", "Begawan Gaotama", "Begawan Jumanten", "Begawan Sidik Wacana", 
      "Begawan Suwandageni", "Begawan Wasista", "Cangik", "Destakestu", "Dewi Amba", "Dewi Ambalika", "Dewi Ambika", "Dewi Anganti", "Dewi Anjani", 
      "Dewi Antiwati", "Dewi Badrahini", "Dewi Banowati", "Dewi Barawati", "Dewi Basutari", "Dewi Basuwati", "Dewi Citralangeni", "Dewi Citrawati", 
      "Dewi Dangan", "Dewi Desidara", "Dewi Dewika", "Dewi Drati", "Dewi Drupadi", "Dewi Durgandini", "Dewi Dursala", "Dewi Endrasmi", "Dewi Erawati", 
      "Dewi Gandarini", "Dewi Gandawati", "Dewi Gandini", "Dewi Gendari", "Dewi Gentang", "Dewi Impun", "Dewi Kaneswati", "Dewi Kanwaka", "Dewi Karastri", 
      "Dewi Kekayi Mahabharata", "Dewi Kekayi Ramayana", "Dewi Krepi", "Dewi Kumbayani", "Dewi Kunthi", "Dewi Larasati", "Dewi Madrim", "Dewi Mahindra", 
      "Dewi Mahira", "Dewi Murdaningrum", "Dewi Prajapati", "Dewi Pramuwati", "Dewi Prawasti", "Dewi Puyangan", "Dewi Raghu", "Dewi Rekathawati", 
      "Dewi Renuka", "Dewi Rukmini", "Dewi Saltani", "Dewi Salyaningsih", "Dewi Saradewati", "Dewi Sariwati", "Dewi Satap", "Dewi Sati Manusia", 
      "Dewi Satyasraya", "Dewi Satyawati", "Dewi Sayati", "Dewi Setyaboma", "Dewi Setyawati", "Dewi Sindusari", "Dewi Sinta", "Dewi Siti Sundari", 
      "Dewi Srengganawati", "Dewi Srengginiwati", "Dewi Srikandhi", "Dewi Srinadi", "Dewi Sritanjung", "Dewi Subadra", "Dewi Subaswara", "Dewi Sugatawati", 
      "Dewi Sukesi", "Dewi Sukesti", "Dewi Sumanda", "Dewi Sumitra", "Dewi Surtikanthi", "Dewi Suwarni", "Dewi Swargandini", "Dewi Tamisyi", "Dewi Tirtawati", 
      "Dewi Trirasa", "Dewi Tunjung Biru", "Dewi Ulupi", "Dewi Undanawati", "Dewi Utari", "Dewi Warsini", "Dewi Wateri", "Dewi Yukti", "Drestaka", "Drestara", 
      "Empu Kanomayasa", "Endang Pergiwa", "Endang Pergiwati", "Garwa Selir", "Gorawangsa", "Gunadewa", "Harjuna Sasrabahu", "Kangsa Dewa", "Ken Sagupi", 
      "Kurawa Laki-laki", "Kusiya", "Lengkungkusuma", "Lesmana Mandrakumara", "Lesmanawati", "Limbuk", "Padmasari", "Pahastaka", "Partadewa", "Patih Pragata", 
      "Patih Sengkuni", "Patih Udawa", "Patih Wreksanata", "Pedang Kerig Waja", "Prabawa", "Prabu Baladewa", "Prabu Banaputra", "Prabu Banawa", 
      "Prabu Banyutinalang", "Prabu Baratawaja", "Prabu Basudewa", "Prabu Basukethi", "Prabu Basukunthi", "Prabu Basupati", "Prabu Citragada", 
      "Prabu Citrawirya", "Prabu Darmahumbara", "Prabu Dasarata", "Prabu Destarastra", "Prabu Drupada", "Prabu Duryudana", "Prabu Dwarawati", 
      "Prabu Gandabayu", "Prabu Gandara", "Prabu Hiranyawarma", "Prabu Janaka Manthili", "Prabu Kanekanegara", "Prabu Kartawirya", "Prabu Kekaya", 
      "Prabu Keswara", "Prabu Kridakirata", "Prabu Mandrapati", "Prabu Matswapati", "Prabu Pandhu", "Prabu Parikesit", "Prabu Pratipa", "Prabu Purungaji", 
      "Prabu Rama Wijaya", "Prabu Ruryana", "Prabu Salya", "Prabu Samresi", "Prabu Sarawasesa", "Prabu Sentanu", "Prabu Setyajid", "Prabu Srimaha Punggung", 
      "Prabu Suganda", "Prabu Sumali", "Prabu Tasikraja", "Prabu Waskuntheya", "Prabu Wimasucandra", "Prabu Yudhistira", "Prabu Yuyudana", "Pramusuta", 
      "Raden Abimanyu", "Raden Antakadewa", "Raden Antareja", "Raden Antasena", "Raden Arjuna", "Raden Bratalaras", "Raden Citraksa", "Raden Citraksi", 
      "Raden Drestajumena", "Raden Durmagati", "Raden Dursala", "Raden Dursasana", "Raden Gathutkaca", "Raden Kartamarma", "Raden Kencakarupa", 
      "Raden Laksmana", "Raden Nakula", "Raden Partawindya", "Raden Ramabargawa", "Raden Rupakenca", "Raden Sadana", "Raden Sadewa", "Raden Samba", 
      "Raden Seta", "Raden Setyaki", "Raden Srutakirti", "Raden Srutanika", "Raden Srutasoma", "Raden Srutawarman", "Raden Sumantri", "Raden Sumitra", 
      "Raden Utara", "Raden Werkudara", "Raden Wisanggeni", "Raden Wratsangka", "Raden Yodha", "Rajamala", "Ramaprawa", "Ramayana", "Resi Abiyasa", 
      "Resi Bisma", "Resi Durna", "Resi Jamadagni", "Resi Palasara", "Resi Pulastya", "Resi Supadma", "Resi Wisrawa", "Saragupita", "Satrugna", "Setyaka", 
      "Surasena", "Warabasanta", "Warsasena", "Wasita", "Yamawidura", "Yudayana"
    ]
  },
  Raksasa: {
    comment: `Class ini merepresentasikan makhluk besar, kuat, dan sering kali digambarkan sebagai sosok antagonis yang menakutkan. 
      Raksasa biasanya memiliki kekuatan fisik luar biasa dan menjadi lawan dari tokoh protagonis dalam cerita wayang.`,
    instances: [
      "Arya Nilarudraka", "Begawan Salantara", "Bilung", "Buta Cakil", "Dentawilukrama", "Dewi Arimbi", "Dewi Danyawati", "Dewi Indraningrum", 
      "Dewi Lokati", "Dewi Lokawati", "Dewi Mustakaweni", "Dewi Sanjiwati", "Dewi Sarpakenaka", "Dewi Sayempraba", "Dewi Tari", "Dewi Trijata", 
      "Ditya Karadusana", "Ditya Nopati", "Kala Bendana", "Kumandhang Garba", "Prabu Arimbaka", "Prabu Bogadhenta", "Prabu Dasamuka", 
      "Prabu Kala Pracona", "Prabu Lokawana", "Prabu Niwatakawaca", "Prahasta", "Pratalamayam", "Raden Aswanikumba", "Raden Gunawan Wibisana", 
      "Raden Indrajit", "Raden Kumbakarna", "Raden Kumbakumba", "Raden Sukrasana", "Resi Badawanganala", "Resi Rasakumala", "Saranadewa", 
      "Trimuka", "Trimurda", "Trisirah", "Yaksadewa"
    ]
  },
  Kera: {
    comment: "Class ini merepresentasikan terkait tokoh yang sering kali digambarkan sebagai sosok yang setia, tangguh, dan memiliki kekuatan luar biasa.",
    instances: [
      "Dewi Jembawati", "Raden Anoman", "Raden Jaya Anggada", "Raden Jaya Anila", "Raden Sugriwa", "Resi Jembawan", "Resi Subali"
    ]
  },
  Bidadari: {
    comment: "Class ini merepresentasikan terkait tokoh perempuan yang digambarkan sebagai makhluk suci dan memiliki kekuatan supernatural serta kehidupan.",
    instances: [
      "Bathari Darmastutri", "Bathari Durga", "Bathari Kiswani", "Bathari Retnawati", "Dewi Aditi", "Dewi Anurada", 
      "Dewi Baruni", "Dewi Bharani", "Dewi Brahmaneki", "Dewi Darini", "Dewi Darmani", "Dewi Diwi", "Dewi Dresanala", "Dewi Gangga", 
      "Dewi Hastuti", "Dewi Hira", "Dewi Indradi", "Dewi Kanekawatim", "Dewi Laksmi", "Dewi Manuhara", "Dewi Mitra", "Dewi Mumpuni",
      "Dewi Nagagini", "Dewi Nilawati", "Dewi Nurweni", "Dewi Pertiwi", "Dewi Prabha", "Dewi Ragyi", "Dewi Rarasati", "Dewi Ratih", 
      "Dewi Rohini", "Dewi Saci", "Dewi Saranyu", "Dewi Saraswati", "Dewi Sarwati", "Dewi Sati Bidadari", "Dewi Senggani", "Dewi Sri", 
      "Dewi Sri Pujayanti", "Dewi Sri Sekar", "Dewi Sumarekti", "Dewi Supreti", "Dewi Suyati", "Dewi Tara", "Dewi Triwati", "Dewi Umarakti", 
      "Dewi Urangayu", "Dewi Wasu", "Dewi Wilutama", "Dewi Wirandi", "Dewi Wiyati", "Dewi Wiyodi", "Dewi Yadnyanawati", "Kaniraras", 
      "Mayangsekar", "Mayangsih", "Sanghyang Darmastuti", "Widadari Dewi Mayangsari"
    ]
  },
  MakhlukHalus: {
    comment: `Class ini merepresentasikan tokoh-tokoh yang berasal dari dunia tak kasatmata, sering kali digambarkan sebagai bangsa jin 
      atau roh halus yang memiliki bentuk unik, perilaku jenaka atau misterius, serta kekuatan magis yang tak terduga. Tokoh-tokoh seperti 
      Bagong, Petruk, Gareng, dan Prabu Rawangin termasuk dalam kategori ini.`,
    instances: ["Bagong", "Endang Bagnyawati", "Gandarwa", "Gareng", "Patanam", "Petruk", "Prabu Balya", "Prabu Rawangin"]
  },
  Siluman: {
    comment: `Class ini merepresentasikan tokoh yang merupakan jelmaan binatang atau makhluk gaib, sering kali memiliki wujud campuran antara 
      manusia dan hewan seperti naga, harimau, atau makhluk lainnya. Mereka biasanya memiliki kekuatan supranatural, kemampuan berubah wujud, 
      dan sering ditempatkan dalam peran misterius atau antagonis. Tokoh seperti Dewi Ganggi dan Prabu Ganggapranawa termasuk dalam kategori ini.`,
    instances: ["Dewi Ganggi", "Prabu Ganggapranawa"]
  },
  Kesaktian: {
    comment: "Class ini merepresentasikan terkait kesaktian atau kekuatan khusus yang dimiliki oleh tokoh wayang.",
    instances: [
      "Adityahredaya", "Aji Dipasanjata", "Aji Gelap Ngampar", "Aji Grayang", "Aji Kawrastawa", "Aji Kentut", "Aji Lisah Tala", 
      "Aji Mundri", "Aji Narantaka", "Aji Pameling", "Aji Pancasona", "Aji Pangabaran", "Aji Pecagragam", "Aji Pengasihan", "Aji Pranawajati", 
      "Aji Purnamajati", "Aji Rajah", "Aji Sepiangin", "Aji Sirep", "Aji Sirep Wewe Putih", "Ambles Bumi", "Angin Garudha", "Angin Lesus", 
      "Asmaragama", "Bandung Bandawasa", "Basunandha", "Bertiwikrama", "Blabag Pangantol-antol", "Boten Saged Kobar Ing Dahana", "Candabirawa", 
      "Candrabirawa", "Gajah Kyai Panukma", "Geger Brajawikalpa", "Jalasegara", "Jayeng Palugon", "Kanjeng Kyai Kawastrawan", "Ketuklindu", 
      "Kuku Asta Ingkang Mawa Wisa", "Kumbala Geni", "Kyai Kesawa", "Mantra Kalacakra", "Mantra Pangruwatan", "Mayabumi", "Palimunan", 
      "Rajah Kalacakra", "Sabadadi", "Sakti Mandraguna", "Sasrabahu", "Sedasa Sirah", "Siyung Brajadhenta", "Swa Candra Marana", 
      "Tangan Kiwa Brajalamatan", "Tangan Tengen Brajamusthi", "Tiwikrama", "Tribidya", "Triwikrama Dados Naga", "Tunggengmaya", 
      "Wenang Nepak Bun-bunane Wong Sak Praja", "Wisa Danurdana", "Wungkal Bener"
    ]
  },
  Pusaka: {
    comment: "Class ini merepresentasikan terkait benda atau pusaka sakti yang dimiliki oleh tokoh wayang.",
    instances: [
      "Alu", "Alugara", "Arit", "Bajra", "Bargawastra", "Barunastra", "Cakra", "Cakra Baskara", "Cangkok Wijayadanu", "Cincin Mustikabumi", 
      "Cis Kalaminta", "Cis Wijayamunang", "Cupu Linggamanik", "Cupu Madusena", "Cupu Malik Astagina", "Cupu Retnadumilah", "Cupu Tirtamanik", 
      "Danda", "Gada", "Gada Kyai Pamecat Nyawa", "Gada Kyai Pecat Nyawa", "Gada Pecuk Galing", "Gada Rujak Polo", "Gada Wesi Ireng", "Gada Wesi Kuning", 
      "Gajah Kyai Puspadhenta", "Gandhik Kencana", "Gong Kyai Dewanata", "Jamus Kalimasada", "Jemparing Kyai Sara", "Jemparing Suhbrasta", 
      "Kapak Bargawa", "Kapak Parasu", "Karawelang", "Kasut Padakacerma", "Kayu Rewan", "Keris", "Keris Cundhamanik", "Keris Kalandhah", 
      "Keris Kalapetak", "Keris Kiai Baruna", "Keris Kiai Kalanadah", "Keris Kiai Sarotama", "Keris Kyai Barla", "Keris Kyai Blabar", "Keris Kyai Jalak", 
      "Keris Pulanggeni", "Kethu Jingga", "Kitab Pustaka Darya Pusaka", "Kotang Antakusuma", "Kreta Kyai Jaladara", "Kuda Ciptawilaha", "Kuku Pancanaka", 
      "Lata Maha Usadi", "Lembing", "Nanggala", "Napakawaca", "Panah", "Panah Banuwastra", "Panah Bargawatra", "Panah Brahmastra", "Panah Candranila", 
      "Panah Gunawijaya", "Panah Hardadedali", "Panah Kuntawijayadanu", "Panah Kyai Pancawisaya", "Panah Nagapasa", "Panah Naracabala", "Panah Pasopati", 
      "Panah Rante Wimahanasha", "Panah Sangkali", "Panah Sarotama", "Panah Sarwani", "Panah Sirsha", "Panah Wijalita", "Pangrumpak Jagad", 
      "Pedang Mentawa", "Pethel", "Rawa Rontek", "Robyong Mustikawarih", "Sekar Wijayakusuma", "Songsong Tunggulnaga", "Sumping", "Sungut Taragnyana", 
      "Terompet Dewanata Cupu", "Terompet Pancajahna", "Tombak Karawelang", "Tombak Pulanggeni", "Trigora", "Trisula", "Tunggulnaga"
    ]
  },
  Gelar: {
    comment: `Class ini merepresentasikan status, jabatan, atau peran sosial yang melekat pada tokoh dalam dunia pewayangan. 
      Gelar mencerminkan kedudukan tokoh dalam hirarki sosial atau spiritual, mulai dari abdi yang setia, kesatria yang gagah berani, 
      hingga raja dari berbagai bangsa dan dimensi, serta tokoh spiritual seperti resi. Gelar ini membantu mengidentifikasi fungsi 
      dan penghormatan terhadap peran masing-masing tokoh dalam cerita.`,
    instances: [
      "Abdi", "Kesatria", "Patih", "Putri", "Resi", "Raja Dewa", "Raja Kera", "Raja Makhluk Halus", "Raja Manusia", "Raja Raksasa", "Raja Siluman"
    ]
  },
  Kerajaan: {
    comment: `Class ini merepresentasikan entitas geopolitik atau wilayah kekuasaan dalam dunia pewayangan yang dipimpin oleh tokoh 
      dengan gelar tertentu (seperti raja), dan dihuni oleh bangsa atau makhluk tertentu seperti dewa, manusia, raksasa, dan lainnya. 
      Setiap kerajaan memiliki struktur sosial, nilai-nilai budaya, serta peran penting dalam alur cerita pewayangan.`,
    instances: [
      "===== KERAJAAN UMUM =====",
      "Alengka", "Lokapala", "Medangkamulan", "Pringgondani", "",

      "===== KERAJAAN DEWA =====",
      "Kahyangan Argadhana", "Kahyangan Argamaruta", "Kahyangan Awang-awang Kumitir", "Kahyangan Cakrakembang", "Kahyangan Chandraloka", 
      "Kahyangan Gudapada", "Kahyangan Jonggringsalaka", "Kahyangan Kaendran Rinjamaya", "Kahyangan Keling", "Kahyangan Sabaluri", 
      "Kahyangan Saptapratala", "Kahyangan Suduk Pangudal-udal", "Kahyangan Suryaloka", "Kahyangan Swelangringging", "Kahyangan Utarasegara", 
      "Kahyangan Yomaniloka", "Kerajaan Gilingwesi", "Kerajaan Wirata", "Nusakambangan", "Setragandamayit", "Surateleng", "",

      "===== KERAJAAN MANUSIA =====",
      "Awangga", "Awuawulangit", "Ayodya", "Dasarna", "Dwarawati", "Gandaradesa", "Jangkarbumi", "Kasi", "Kerajaan Kanekawati", "Keraton Manthili", 
      "Kumbina", "Lesanpura", "Maespati", "Magada", "Mandaraka", "Mandura", "Negara Kencakarupa", "Negara Salarengka", "Ngamarta", "Ngastina", 
      "Padnapura", "Pancala", "Plasajenar", "Swalabumi", "Talkanda", "Tanjungpura", "Tasikretna", "Tempuru", "Wangsa Hehaya", "Wiratha", "",

      "===== KERAJAAN RAKSASA =====",
      "Gowabarong", "Srawantipura", "",

      "===== KERAJAAN KERA =====",
      "Guwa Kiskendha", "",

      "===== KERAJAAN MAKHLUK HALUS =====",
      "Pucangsewu", "Pulau Darma", "",

      "===== KERAJAAN SILUMAN =====",
      "Tawingnarmada"
    ]
  },
  KerajaanDewa: {
    comment: `Subclass dari Kerajaan yang dihuni dan dipimpin oleh para Dewa. Kerajaan ini biasanya berada di dimensi atau alam yang lebih tinggi (kayangan), 
      bersifat suci, serta menjadi pusat kekuatan spiritual dan ketuhanan.`,
    instances: [
      "Kahyangan Argadhana", "Kahyangan Argamaruta", "Kahyangan Awang-awang Kumitir", "Kahyangan Cakrakembang", "Kahyangan Chandraloka", 
      "Kahyangan Gudapada", "Kahyangan Jonggringsalaka", "Kahyangan Kaendran Rinjamaya", "Kahyangan Keling", "Kahyangan Sabaluri", 
      "Kahyangan Saptapratala", "Kahyangan Suduk Pangudal-udal", "Kahyangan Suryaloka", "Kahyangan Swelangringging", "Kahyangan Utarasegara", 
      "Kahyangan Yomaniloka", "Kerajaan Gilingwesi", "Kerajaan Wirata", "Nusakambangan", "Setragandamayit", "Surateleng"
    ]
  },
  KerajaanKera: {
    comment: `Subclass dari Kerajaan yang dihuni dan dipimpin oleh para tokoh dari bangsa kera. Kerajaan ini biasanya digambarkan sebagai 
      pusat kekuatan ksatria yang setia dan gagah berani, serta memainkan peran penting dalam kisah-kisah seperti Ramayana.`,
    instances: ["Guwa Kiskendha"]
  },
  KerajaanMakhlukHalus: {
    comment: `Subclass dari Kerajaan yang dihuni dan dipimpin oleh makhluk halus atau bangsa jin. Kerajaan ini memiliki karakteristik gaib, 
      unik, dan sering kali menjadi wilayah yang misterius atau tersembunyi dari dunia manusia.`,
    instances: ["Pucangsewu", "Pulau Darma"]
  },
  KerajaanManusia: {
    comment: `Subclass dari Kerajaan yang dihuni dan dipimpin oleh tokoh-tokoh manusia. Kerajaan ini merepresentasikan dunia fana, 
      dengan dinamika politik, peperangan, serta perjuangan nilai-nilai kemanusiaan seperti keadilan, cinta, dan pengorbanan.`,
    instances: [
      "Awangga", "Awuawulangit", "Ayodya", "Dasarna", "Dwarawati", "Gandaradesa", "Jangkarbumi", "Kasi", "Kerajaan Kanekawati", "Keraton Manthili", 
      "Kumbina", "Lesanpura", "Maespati", "Magada", "Mandaraka", "Mandura", "Negara Kencakarupa", "Negara Salarengka", "Ngamarta", "Ngastina", 
      "Padnapura", "Pancala", "Plasajenar", "Swalabumi", "Talkanda", "Tanjungpura", "Tasikretna", "Tempuru", "Wangsa Hehaya", "Wiratha"
    ]
  },
  KerajaanRaksasa: {
    comment: `Subclass dari Kerajaan yang dihuni dan dipimpin oleh para raksasa. Kerajaan ini sering kali digambarkan sebagai wilayah yang kuat, 
      gelap, dan menjadi pusat dari kekuatan antagonis dalam kisah wayang.`,
    instances: ["Gowabarong", "Srawantipura"]
  },
  KerajaanSiluman: {
    comment: `Subclass dari Kerajaan yang dihuni dan dipimpin oleh siluman atau makhluk jelmaan. Kerajaan ini bersifat magis dan transformasional, 
      sering kali memiliki kekuatan untuk mengaburkan batas antara realitas dan ilusi.`,
    instances: ["Tawingnarmada"]
  },
  TempatAsal: {
    comment: "Class ini merepresentasikan terkait tempat tinggal atau asal tokoh wayang.",
    instances: [
      "===== KEPUTREN =====",
      "Keputren Keraton Kerajaan", "",

      "===== KESATRIYAN =====",
      "Banjarjungut", "Banyutinalang", "Bumiretawu", "Carang Glagah", "Carang Manis", "Cemaratunggal", "Girikatsuba", "Jodhipati", "Kesatriyan Kunthara", 
      "Kesatriyan Tambakwungkal", "Madukara", "Pangleburgongsa", "Parang Garudha", "Parang Kencana", "Plangkawati", "Randhuwatang", "Sawojajar", 
      "Sengkapura", "Singelapura", "Slobrah Blambangan", "Sukarini", "Utaraoura", "",

      "===== LAUT =====",
      "Dasar Samudra", "Gisiksamodra", "Samudra", "",

      "===== PADHUKUHAN =====",
      "Padhukuhan Girisarangan", "Padhukuhan Karang Kacepotan", "Padhukuhan Karang Pacukilan", "Padhukuhan Pecruk Pecukilan", "Padhukuhan Widarakandhang", "",

      "===== PERTAPAAN =====",
      "Padepokan Ardisekar", "Padepokan Bendhogrowong", "Padepokan Colomadu", "Padepokan Daksinaputra", "Padepokan Gandamadana", "Padepokan Karang Kedempel", 
      "Padepokan Kendhalisada", "Padepokan Ngringin Pitu", "Padepokan Sonyapringga", "Pancawati", "Pandhanyangan", "Pertapaan Andong Sumawi", 
      "Pertapaan Giri Jembatan", "Pertapaan Giriretno", "Pertapaan Gratina", "Pertapaan Sokalima", "Pertapaan Wukiretawu", "Pesanggrahan Argalasan", 
      "Pesanggrahan Maliyawan", "Saptaarga", "",

      "===== SUNGAI =====",
      "Sungai Wailu",

      "===== KAHYANGAN =====",
      "Kahyangan Trajulayaran"
    ]
  },
  Bumi: {
    comment: `Subclass dari Tempat Asal yang mencakup lokasi-lokasi yang berada di dunia fisik atau fana. Tempat-tempat ini dihuni oleh 
      berbagai tokoh wayang seperti manusia, siluman, kera, raksasa atau makhluk gaib lainnya.`,
    instances: [
      "===== KEPUTREN =====",
      "Keputren Keraton Kerajaan", "",

      "===== KESATRIYAN =====",
      "Banjarjungut", "Banyutinalang", "Bumiretawu", "Carang Glagah", "Carang Manis", "Cemaratunggal", "Girikatsuba", "Jodhipati", "Kesatriyan Kunthara", 
      "Kesatriyan Tambakwungkal", "Madukara", "Pangleburgongsa", "Parang Garudha", "Parang Kencana", "Plangkawati", "Randhuwatang", "Sawojajar", 
      "Sengkapura", "Singelapura", "Slobrah Blambangan", "Sukarini", "Utaraoura", "",

      "===== LAUT =====",
      "Dasar Samudra", "Gisiksamodra", "Samudra", "",

      "===== PADHUKUHAN =====",
      "Padhukuhan Girisarangan", "Padhukuhan Karang Kacepotan", "Padhukuhan Karang Pacukilan", "Padhukuhan Pecruk Pecukilan", "Padhukuhan Widarakandhang", "",

      "===== PERTAPAAN =====",
      "Padepokan Ardisekar", "Padepokan Bendhogrowong", "Padepokan Colomadu", "Padepokan Daksinaputra", "Padepokan Gandamadana", "Padepokan Karang Kedempel", 
      "Padepokan Kendhalisada", "Padepokan Ngringin Pitu", "Padepokan Sonyapringga", "Pancawati", "Pandhanyangan", "Pertapaan Andong Sumawi", 
      "Pertapaan Giri Jembatan", "Pertapaan Giriretno", "Pertapaan Gratina", "Pertapaan Sokalima", "Pertapaan Wukiretawu", "Pesanggrahan Argalasan", 
      "Pesanggrahan Maliyawan", "Saptaarga", "",

      "===== SUNGAI =====",
      "Sungai Wailu"
    ]
  },
  Keputren: {
    comment: "Keputren merupakan tempat tinggal putri kerajaan dan biasanya masih berada di bawah naungan sebuah kerajaan besar",
    instances: ["Keputren Keraton Kerajaan"]
  },
  Kesatriyan: {
    comment: "Kesatriyan merupakan tempat tinggal ksatria/pangeran dan biasanya masih berada di bawah naungan sebuah kerajaan besar.",
    instances: [
      "Banjarjungut", "Banyutinalang", "Bumiretawu", "Carang Glagah", "Carang Manis", "Cemaratunggal", "Girikatsuba", "Jodhipati", "Kesatriyan Kunthara", 
      "Kesatriyan Tambakwungkal", "Madukara", "Pangleburgongsa", "Parang Garudha", "Parang Kencana", "Plangkawati", "Randhuwatang", "Sawojajar", 
      "Sengkapura", "Singelapura", "Slobrah Blambangan", "Sukarini", "Utaraoura"
    ]
  },
  Laut: {
    comment: `Subclass dari Bumi yang merepresentasikan wilayah perairan luas dan dalam, yang sering digambarkan sebagai tempat tinggal tokoh 
      dengan kekuatan besar, misterius, atau spiritual. Laut melambangkan kedalaman pengetahuan, kekuatan tersembunyi, dan dunia bawah.`,
    instances: ["Dasar Samudra", "Gisiksamodra", "Samudra"]
  },
  Padhukuhan: {
    comment: `Padhukuhan adalah pemukiman masyarakat biasa yang lebih menyerupai desa kecil. Biasanya terletak di dekat kerajaan atau pusat peradaban, 
      bukan di tempat terpencil. Dihuni oleh rakyat biasa, petani, atau prajurit yang tidak tinggal di dalam istana. Dalam pewayangan, 
      padukuhan sering menjadi latar belakang bagi kehidupan rakyat jelata.`,
    instances: ["Padhukuhan Girisarangan", "Padhukuhan Karang Kacepotan", "Padhukuhan Karang Pacukilan", "Padhukuhan Pecruk Pecukilan", "Padhukuhan Widarakandhang"]
  },
  Pertapaan: {
    comment: `Pertapaan tempat tinggal para pertapa, resi, atau pendeta yang menjalani kehidupan spiritual. Biasanya terletak di hutan, gunung, 
      atau tempat terpencil yang jauh dari keramaian. Dihuni oleh resi, brahmana, atau murid-murid yang belajar ilmu kanuragan, kebijaksanaan, 
      dan spiritualitas. Pertapaan biasanya juga disebut sebagai 'Padepokan`,
    instances: [
      "Padepokan Ardisekar", "Padepokan Bendhogrowong", "Padepokan Colomadu", "Padepokan Daksinaputra", "Padepokan Gandamadana", "Padepokan Karang Kedempel", 
      "Padepokan Kendhalisada", "Padepokan Ngringin Pitu", "Padepokan Sonyapringga", "Pancawati", "Pandhanyangan", "Pertapaan Andong Sumawi", 
      "Pertapaan Giri Jembatan", "Pertapaan Giriretno", "Pertapaan Gratina", "Pertapaan Sokalima", "Pertapaan Wukiretawu", "Pesanggrahan Argalasan", 
      "Pesanggrahan Maliyawan", "Saptaarga"
    ]
  },
  Sungai: {
    comment: `Subclass dari Bumi yang merepresentasikan jalur air yang mengalir, dan dalam konteks pewayangan bisa menjadi tempat tinggal tokoh-tokoh sakral 
      atau pertapaan. Sungai sering diasosiasikan dengan kesucian, transformasi, dan perjalanan spiritual.`,
    instances: ["Sungai Wailu"]
  },
  Kahyangan: {
    comment: `Subclass dari Tempat Asal yang merepresentasikan alam spiritual atau dunia para dewa (kayangan). 
      Tempat ini berada di dimensi yang lebih tinggi dan dihuni oleh tokoh-tokoh suci dan abadi.`,
    instances: ["Kahyangan Trajulayaran"]
  }
};

// Generate nodes and metadata
export const nodes = [
  ...new Set([
    ...ontologyClasses.map((item) => item.label),
    ...ontologyClasses.flatMap((item) => item.subclasses)
  ])
].map((id) => ({
  data: {
    id,
    label: id,
    comment: nodeMetadata[id]?.comment || null,
    instances: nodeMetadata[id]?.instances || []
  }
}));

// Generate subclass edges dan object properties
export const edges = [
  ...ontologyClasses.flatMap((item) =>
    item.subclasses.map((sub) => ({
      data: {
        source: sub,
        target: item.label,
        label: "subclassOf"
      }
    }))
  ),
  ...objectProperties.map((prop) => ({
    data: {
      source: prop.domain,
      target: prop.range,
      label: prop.label
    }
  }))
];
