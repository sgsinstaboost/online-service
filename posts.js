const STATIC_CATEGORIES = [
  { name: 'All Services', color: 'blue' },
  { name: 'Internship', color: 'indigo' },
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
  id: "internship-application-01",
  title: "Internship Application Online Form",
  category: "Internship",
  description: "Internship ke liye apni personal, academic aur payment details bharein.",
  qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
  fields: [
    { id: "field_full_name", name: "full_name", label: "Full Name", type: "text", required: true },
    {
      id: "field_gender",
      name: "gender",
      label: "Gender",
      type: "radio",
      required: true,
      options: [
        { id: "opt_male", label: "Male", value: "male" },
        { id: "opt_female", label: "Female", value: "female" }
      ]
    },
    { id: "field_father_name", name: "father_name", label: "Father's Name", type: "text", required: true },
    { id: "field_mother_name", name: "mother_name", label: "Mother's Name", type: "text", required: true },
    { id: "field_contact_number", name: "contact_number", label: "Contact Number", type: "tel", required: true },
    { id: "field_email_address", name: "email_address", label: "Email Address", type: "email", required: true },
    {
      id: "field_university_name",
      name: "university_name",
      label: "University Name",
      type: "radio",
      required: true,
      options: [
        { id: "opt_vksu", label: "Veer Kunwar Singh University", value: "veer_kunwar_singh_university" }
      ]
    },
    { id: "field_college_name", name: "college_name", label: "College Name", type: "text", required: true },
    {
      id: "field_degree",
      name: "degree",
      label: "Degree",
      type: "radio",
      required: true,
      options: [
        { id: "opt_ug", label: "UG", value: "ug" }
      ]
    },
    {
      id: "field_stream",
      name: "stream",
      label: "Stream",
      type: "radio",
      required: true,
      options: [
        { id: "opt_ba", label: "B.A", value: "ba" },
        { id: "opt_bcom", label: "B.COM", value: "bcom" },
        { id: "opt_bsc", label: "B.SC", value: "bsc" }
      ]
    },
    {
      id: "field_semester",
      name: "semester",
      label: "Semester",
      type: "radio",
      required: true,
      options: [
        { id: "opt_5th", label: "5th", value: "5th" }
      ]
    },
    {
      id: "field_academic_session",
      name: "academic_session",
      label: "Academic Session",
      type: "radio",
      required: true,
      options: [
        { id: "opt_2023_2027", label: "2023-2027", value: "2023_2027" },
        { id: "opt_2024_2028", label: "2024-2028", value: "2024_2028" },
        { id: "opt_2025_2029", label: "2025-2029", value: "2025_2029" },
        { id: "opt_2026_2030", label: "2026-2030", value: "2026_2030" }
      ]
    },
    { id: "field_major_subject", name: "major_subject", label: "Major Subject / Honors", type: "text", required: true },
    { id: "field_university_reg_no", name: "university_reg_no", label: "University Registration Number", type: "text", required: true },
    { id: "field_university_roll_no", name: "university_roll_no", label: "University Roll Number", type: "text", required: true },
    {
      id: "field_select_course",
      name: "select_course",
      label: "Select Course",
      type: "radio",
      required: true,
      options: [
        { id: "opt_teacher_training", label: "Teacher Training", value: "teacher_training" },
        { id: "opt_cyber_security", label: "Cyber Security", value: "cyber_security" },
        { id: "opt_digital_literacy", label: "Digital Literacy", value: "digital_literacy" },
        { id: "opt_financial_literacy", label: "Financial Literacy", value: "financial_literacy" },
        { id: "opt_healthcare", label: "Healthcare", value: "healthcare" },
        { id: "opt_tourism", label: "Tourism", value: "tourism" },
        { id: "opt_agriculture", label: "Agriculture", value: "agriculture" },
        { id: "opt_graphics", label: "Graphics and Content Creation", value: "graphics_content_creation" },
        { id: "opt_entrepreneurship", label: "Entrepreneurship", value: "entrepreneurship" },
        { id: "opt_skill_dev", label: "Skill and Personality Development", value: "skill_personality_development" },
        { id: "opt_disaster_mgmt", label: "Disaster Management", value: "disaster_management" }
      ]
    },
    { id: "field_guardian_name", name: "guardian_name", label: "Guardian Name (Emergency Contact)", type: "text", required: true },
    { id: "field_emergency_contact_no", name: "emergency_contact_no", label: "Emergency Contact Number", type: "tel", required: true },
    {
      id: "field_relationship",
      name: "relationship",
      label: "Relationship with Emergency Contact",
      type: "radio",
      required: true,
      options: [
        { id: "opt_mother", label: "Mother", value: "mother" },
        { id: "opt_father", label: "Father", value: "father" },
        { id: "opt_brother", label: "Brother", value: "brother" },
        { id: "opt_sister", label: "Sister", value: "sister" },
        { id: "opt_other", label: "Other", value: "other" }
      ]
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true
    }
  ]
},






  

  
  {
    id: "rtps-caste-02",
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
    id: "rtps-income-03",
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
    id: "rtps-residence-04",
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
    id: "pan-card-05",
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
    id: "college-admission-06",
    title: "College Admission Online Form",
    category: "College Admission",
    description: "College Admission ke liye marksheets aur details submit karein.",
    qrImageUrl: "https://i.ibb.co/3s4G12Z/qr-placeholder.png",
    fields: [
      { id: "field_full_name", name: "full_name", label: "Student Full Name", type: "text", required: true },
      { id: "field_course_stream", name: "course_stream", label: "Course / Stream Name", type: "text", required: true, placeholder: "e.g. B.A / B.Sc / Commerce" },
      { id: "field_mobile_no", name: "mobile_no", label: "Mobile Number", type: "tel", required: true },
      { id: "field_student_photo", name: "student_photo", label: "Student Photo (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      { id: "field_marksheet_photo", name: "marksheet_photo", label: "Marksheet Document (Image/PDF)", type: "file", accept: "image/*, application/pdf", required: true },
      {
        id: "field_document_type",
        name: "document_type",
        label: "Select Any One Document (कोई एक दस्तावेज़ चुनें)",
        type: "radio",
        required: true,
        options: [
          { id: "opt_aadhaar", label: "Aadhaar Card (आधार कार्ड)", value: "aadhaar_card" },
          { id: "opt_pan", label: "PAN Card (पैन कार्ड)", value: "pan_card" },
          { id: "opt_ghar_slip", label: "Ghar ki Rasid / Slip (घर का रसीद)", value: "ghar_rasid" },
          { id: "opt_purana_jati", label: "Purana Banal Jati Certificate (पुराना जाति)", value: "purana_jati" },
          { id: "opt_ration_card", label: "Ration Card (राशन कार्ड)", value: "ration_card" }
        ]
      },
      {
        id: "field_document_file",
        name: "document_file",
        label: "Upload Selected Document (Image/PDF)",
        type: "file",
        accept: "image/*, application/pdf",
        required: true
      }
    ]
  },









  
  {
    id: "scholarship-07",
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
    id: "voter-card-08",
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
    id: "ration-card-09",
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
    id: "driving-license-10",
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
