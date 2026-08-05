// posts.js
const STATIC_CATEGORIES = [
  { name: 'All Services', color: 'blue' },
  { name: 'Certificates (Jati/Aaya/Niwas)', color: 'emerald' },
  { name: 'College Admission', color: 'purple' },
  { name: 'Scholarship', color: 'amber' },
  { name: 'Government Forms', color: 'rose' }
];

const STATIC_NOTICES = [
  { id: 1, text: "Bihar RTPS Income / Caste Certificate online forms are active." },
  { id: 2, text: "College Admission Forms & Post Matric Scholarship portal open." }
];

const ALL_POSTS = [
  {
    id: "rtps-caste-01",
    title: "Bihar RTPS Caste Certificate (जाति प्रमाण पत्र)",
    category: "Certificates (Jati/Aaya/Niwas)",
    description: "Caste Certificate apply karne ke liye niche details bharein, documents upload karein aur QR par pay karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Full Name (पूरा नाम)", type: "text", required: true, placeholder: "Apna name likhein" },
      { name: "father_name", label: "Father Name (पिता का नाम)", type: "text", required: true, placeholder: "Father name likhein" },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true, placeholder: "Mobile number" },
      { name: "caste_name", label: "Caste Category (जाति)", type: "text", required: true, placeholder: "e.g. OBC / EBC / SC / ST" },
      { name: "applicant_photo", label: "Upload Passport Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "identity_proof", label: "Upload Identity Document Proof (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "rtps-income-02",
    title: "Bihar RTPS Income Certificate (आय प्रमाण पत्र)",
    category: "Certificates (Jati/Aaya/Niwas)",
    description: "Income Certificate online form bharein aur required documents upload karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Full Name", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "annual_income", label: "Annual Family Income Amount", type: "text", required: true, placeholder: "e.g. 90,000" },
      { name: "applicant_photo", label: "Passport Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "identity_proof", label: "Identity Proof Document (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "rtps-residence-03",
    title: "Bihar RTPS Residence Certificate (निवास प्रमाण पत्र)",
    category: "Certificates (Jati/Aaya/Niwas)",
    description: "Niwas Praman Patra ke liye form fill karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Applicant Name", type: "text", required: true },
      { name: "village_address", label: "Full Village & Ward Address", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "applicant_photo", label: "Passport Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "id_proof", label: "Identity Proof (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "pan-card-04",
    title: "New PAN Card Online Form",
    category: "Government Forms",
    description: "Naya PAN card banane ke liye details aur documents upload karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Name as per Identity Document", type: "text", required: true },
      { name: "dob", label: "Date of Birth (DD/MM/YYYY)", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "passport_photo", label: "Passport Size Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "id_proof", label: "Identity Proof Document (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "college-admission-05",
    title: "College Admission Online Form",
    category: "College Admission",
    description: "College Admission ke liye marksheets aur details submit karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Student Full Name", type: "text", required: true },
      { name: "course_stream", label: "Course / Stream Name", type: "text", required: true, placeholder: "e.g. B.A / B.Sc / Commerce" },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "student_photo", label: "Student Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "marksheet_photo", label: "Marksheet Document (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "scholarship-06",
    title: "Post Matric Scholarship Online Form",
    category: "Scholarship",
    description: "Post matric scholarship form fill up service.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Student Name", type: "text", required: true },
      { name: "college_name", label: "College Name", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "bonafide_receipt", label: "Bonafide / Fee Receipt (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "student_photo", label: "Student Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "voter-card-07",
    title: "New Voter ID Card Apply",
    category: "Government Forms",
    description: "Voter card apply karne ke liye details aur photos upload karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Applicant Name", type: "text", required: true },
      { name: "father_name", label: "Father Name", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "applicant_photo", label: "Passport Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "id_proof", label: "Age & Address Proof (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "ration-card-08",
    title: "Ration Card Member Add / New Apply",
    category: "Government Forms",
    description: "Ration card me name add karne ke liye documents upload karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "head_name", label: "Head of Family Name", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "family_photo", label: "Group Family Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "id_proof", label: "Family Identity Document (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  },
  {
    id: "driving-license-09",
    title: "Learner Driving License Online Apply",
    category: "Government Forms",
    description: "Driving license form apply service.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { name: "full_name", label: "Full Name", type: "text", required: true },
      { name: "blood_group", label: "Blood Group", type: "text", required: true },
      { name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { name: "applicant_photo", label: "Passport Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { name: "id_proof", label: "Identity Document Proof (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true }
    ]
  }
];
