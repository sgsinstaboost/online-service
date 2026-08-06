const STATIC_CATEGORIES = [
  { name: 'All Services', color: 'blue' },
  { name: 'STD Collage', color: 'purpal' },
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
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D300%26cu%3DINR&size=200&format=png",
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
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D30%26cu%3DINR&size=200&format=png",
  fields: [
    { id: "field_full_name", name: "full_name", label: "आवेदक का नाम / Name of Applicant", type: "text", required: true, placeholder: "Apna name likhein" },
    { id: "field_father_name", name: "father_name", label: "पिता का नाम / Father's Name", type: "text", required: true, placeholder: "Father name likhein" },
    { id: "field_mother_name", name: "mother_name", label: "माता का नाम / Mother's Name", type: "text", required: true, placeholder: "Mother name likhein" },
    { id: "field_husband_name", name: "husband_name", label: "पति का नाम / Husband's Name (Optional)", type: "text", required: false, placeholder: "Pati ka naam (yadi laagu ho)" },
    { id: "field_mobile_no", name: "mobile_no", label: "मोबाइल नंबर / Mobile Number", type: "tel", required: true, placeholder: "Mobile number" },
    { id: "field_district", name: "district", label: "जिला / District", type: "text", required: true, placeholder: "District name likhein" },
    { id: "field_sub_division", name: "sub_division", label: "अनुमंडल / Sub Division", type: "text", required: true, placeholder: "Sub division likhein" },
    { id: "field_block", name: "block", label: "प्रखंड / Block", type: "text", required: true, placeholder: "Block name likhein" },
    { id: "field_gram_panchayat", name: "gram_panchayat", label: "ग्राम पंचायत / Gram Panchayat", type: "text", required: true, placeholder: "Panchayat name likhein" },
    { id: "field_ward_no", name: "ward_no", label: "वार्ड संख्या / Ward No.", type: "text", required: true, placeholder: "Ward number likhein" },
    { id: "field_village", name: "village", label: "ग्राम/मोहल्ला / Village/Town", type: "text", required: true, placeholder: "Village name likhein" },
    { id: "field_police_station", name: "police_station", label: "थाना / Police Station", type: "text", required: true, placeholder: "Police station likhein" },
    {
      id: "field_applicant_photo",
      name: "applicant_photo",
      label: "आवेदक का फोटो / Photograph of Applicant",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "adhar_card",
      label: "आधार कार्ड के दोनों साइड का फोटो अपलोड करें / Upload photos of both sides of the Aadhaar card.",
      type: "file",
      accept: "image/*",
      required: true
    },
    {
      id: "field_profession",
      name: "profession",
      label: "पेशा / Profession",
      type: "radio",
      required: true,
      options: [
        { id: "opt_student", label: "छात्र / Student", value: "student" },
        { id: "opt_farmer", label: "किसान / Farmer", value: "farmer" },
        { id: "opt_housewife", label: "गृहिणी / Housewife", value: "housewife" },
        { id: "opt_other_prof", label: "अन्य / Other", value: "other" }
      ]
    },
    { id: "field_category", name: "category", label: "वर्ग / Category", type: "text", required: true, placeholder: "e.g. OBC / EBC / SC / ST" },
    { id: "field_caste", name: "caste", label: "जाति / Caste", type: "text", required: true, placeholder: "Apni jati likhein" },
    {
      id: "field_caste_proof_doc",
      name: "caste_proof_doc",
      label: "जाति प्रमाणपत्र के साक्ष्य हेतु दस्तावेज",
      type: "radio",
      required: true,
      options: [
        { id: "opt_purana_jati_cert", label: "आपका पुराना बना हुआ जाती प्रमाणपत्र", value: "purana_jati_certificate" },
        { id: "opt_khatiyan", label: "राजस्व अभिलेख - खतियान", value: "rajashwa_khatiyan" },
        { id: "opt_bhumi_doc", label: "राजस्व अभिलेख - भूमि संबंधी दस्तावेज", value: "rajashwa_bhumi_dastavez" },
        { id: "opt_anya_rajashwa", label: "अन्य राजस्व अभिलेख", value: "anya_rajashwa_abhilekh" }
      ]
    },
    {
      id: "field_identity_proof",
      name: "identity_proof",
      label: "दस्तावेज़ अपलोड करें / Upload Selected Document Proof",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "भुगतान का स्क्रीनशॉट अपलोड करें / Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true }
    
    ]
  },




  


  

  
{
  id: "rtps-income-03",
  title: "Bihar RTPS Income Certificate (आय प्रमाण पत्र)",
  category: "Certificates (Jati/Aaya/Niwas)",
  description: "Income Certificate online form bharein aur required documents upload karein.",
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D30%26cu%3DINR&size=200&format=png",
  fields: [
    { id: "field_full_name", name: "full_name", label: "आवेदक का नाम / Name of Applicant", type: "text", required: true, placeholder: "Apna name likhein" },
    { id: "field_father_name", name: "father_name", label: "पिता का नाम / Father's Name", type: "text", required: true, placeholder: "Father name likhein" },
    { id: "field_mother_name", name: "mother_name", label: "माता का नाम / Mother's Name", type: "text", required: true, placeholder: "Mother name likhein" },
    { id: "field_husband_name", name: "husband_name", label: "पति का नाम / Husband's Name (Optional)", type: "text", required: false, placeholder: "Pati ka naam (yadi laagu ho)" },
    { id: "field_mobile_no", name: "mobile_no", label: "मोबाइल नंबर / Mobile Number", type: "tel", required: true, placeholder: "Mobile number" },
    { id: "field_district", name: "district", label: "जिला / District", type: "text", required: true, placeholder: "District name likhein" },
    { id: "field_sub_division", name: "sub_division", label: "अनुमंडल / Sub Division", type: "text", required: true, placeholder: "Sub division likhein" },
    { id: "field_block", name: "block", label: "प्रखंड / Block", type: "text", required: true, placeholder: "Block name likhein" },
    { id: "field_gram_panchayat", name: "gram_panchayat", label: "ग्राम पंचायत / Gram Panchayat", type: "text", required: true, placeholder: "Panchayat name likhein" },
    { id: "field_ward_no", name: "ward_no", label: "वार्ड संख्या / Ward No.", type: "text", required: true, placeholder: "Ward number likhein" },
    { id: "field_village", name: "village", label: "ग्राम/मोहल्ला / Village/Town", type: "text", required: true, placeholder: "Village name likhein" },
    { id: "field_police_station", name: "police_station", label: "थाना / Police Station", type: "text", required: true, placeholder: "Police station likhein" },
    {
      id: "field_applicant_photo",
      name: "applicant_photo",
      label: "आवेदक का फोटो / Photograph of Applicant",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "adhar_card",
      label: "आधार कार्ड के दोनों साइड का फोटो अपलोड करें / Upload photos of both sides of the Aadhaar card.",
      type: "file",
      accept: "image/*",
      required: true
    },
    {
      id: "field_annual_income_range",
      name: "annual_income_range",
      label: "वार्षिक आय / Annual Family Income Amount",
      type: "radio",
      required: true,
      options: [
        { id: "opt_inc_60k", label: "₹60,000", value: "60000" },
        { id: "opt_inc_70k", label: "₹70,000", value: "70000" },
        { id: "opt_inc_80k", label: "₹80,000", value: "80000" },
        { id: "opt_inc_90k", label: "₹90,000", value: "90000" },
        { id: "opt_inc_1lakh", label: "₹1,00,000", value: "100000" },
        { id: "opt_inc_1_2lakh", label: "₹1,20,000", value: "120000" },
        { id: "opt_inc_1_5lakh", label: "₹1,50,000", value: "150000" }
      ]
    },
    {
      id: "field_income_proof_doc",
      name: "income_proof_doc",
      label: "आय प्रमाणपत्र के साक्ष्य हेतु दस्तावेज",
      type: "radio",
      required: true,
      options: [
        { id: "opt_purana_income_cert", label: "आपका पुराना बना हुआ आय प्रमाणपत्र/income certificate", value: "purana_income_certificate" },
        { id: "opt_anyanya_abhilekh", label: "अन्यान्य अभिलेख", value: "anyanya_abhilekh" }
      ]
    },
    {
      id: "field_identity_proof",
      name: "identity_proof",
      label: "दस्तावेज़ अपलोड करें / Upload Selected Document Proof",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "भुगतान का स्क्रीनशॉट अपलोड करें / Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true }
    
    ]
  },





  



  
{
  id: "rtps-residence-04",
  title: "Bihar RTPS Residence Certificate (निवास प्रमाण पत्र)",
  category: "Certificates (Jati/Aaya/Niwas)",
  description: "Niwas Praman Patra ke liye form fill karein.",
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D30%26cu%3DINR&size=200&format=png",
  fields: [
    { id: "field_full_name", name: "full_name", label: "आवेदक का नाम / Name of Applicant", type: "text", required: true, placeholder: "Apna name likhein" },
    { id: "field_father_name", name: "father_name", label: "पिता का नाम / Father's Name", type: "text", required: true, placeholder: "Father name likhein" },
    { id: "field_mother_name", name: "mother_name", label: "माता का नाम / Mother's Name", type: "text", required: true, placeholder: "Mother name likhein" },
    { id: "field_husband_name", name: "husband_name", label: "पति का नाम / Husband's Name (Optional)", type: "text", required: false, placeholder: "Pati ka naam (yadi laagu ho)" },
    { id: "field_mobile_no", name: "mobile_no", label: "मोबाइल नंबर / Mobile Number", type: "tel", required: true, placeholder: "Mobile number" },
    { id: "field_district", name: "district", label: "जिला / District", type: "text", required: true, placeholder: "District name likhein" },
    { id: "field_sub_division", name: "sub_division", label: "अनुमंडल / Sub Division", type: "text", required: true, placeholder: "Sub division likhein" },
    { id: "field_block", name: "block", label: "प्रखंड / Block", type: "text", required: true, placeholder: "Block name likhein" },
    { id: "field_gram_panchayat", name: "gram_panchayat", label: "ग्राम पंचायत / Gram Panchayat", type: "text", required: true, placeholder: "Panchayat name likhein" },
    { id: "field_ward_no", name: "ward_no", label: "वार्ड संख्या / Ward No.", type: "text", required: true, placeholder: "Ward number likhein" },
    { id: "field_village", name: "village", label: "ग्राम/मोहल्ला / Village/Town", type: "text", required: true, placeholder: "Village name likhein" },
    { id: "field_police_station", name: "police_station", label: "थाना / Police Station", type: "text", required: true, placeholder: "Police station likhein" },
    {
      id: "field_applicant_photo",
      name: "applicant_photo",
      label: "आवेदक का फोटो / Photograph of Applicant",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "adhar_card",
      label: "आधार कार्ड के दोनों साइड का फोटो अपलोड करें / Upload photos of both sides of the Aadhaar card.",
      type: "file",
      accept: "image/*",
      required: true
    },
    {
      id: "field_residence_type",
      name: "residence_type",
      label: "निवास का प्रकार / Type of Residence",
      type: "radio",
      required: true,
      options: [
        { id: "opt_sthayi", label: "स्थायी", value: "sthayi" },
        { id: "opt_asthayi", label: "अस्थायी", value: "asthayi" }
      ]
    },
    {
      id: "field_residence_proof_doc",
      name: "residence_proof_doc",
      label: "आवास प्रमाणपत्र के साक्ष्य हेतु दस्तावेज",
      type: "radio",
      required: true,
      options: [
        { id: "opt_purana_niwas_cert", label: "आपका पुराना बना हुआ निवास प्रमाण पत्र", value: "purana_niwas_certificate" },
        { id: "opt_khatiyan_doc", label: "राजस्व अभिलेख - खतियान", value: "rajashwa_khatiyan" },
        { id: "opt_bhumi_doc", label: "राजस्व अभिलेख - भूमि संबंधी दस्तावेज", value: "rajashwa_bhumi_dastavez" },
        { id: "opt_ration_card_doc", label: "राशन कार्ड", value: "ration_card" },
        { id: "opt_anya_rajashwa_doc", label: "अन्य राजस्व अभिलेख", value: "anya_rajashwa_abhilekh" }
      ]
    },
    {
      id: "field_identity_proof",
      name: "identity_proof",
      label: "दस्तावेज़ अपलोड करें / Upload Selected Document Proof",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "भुगतान का स्क्रीनशॉट अपलोड करें / Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true }
    
    ]
  },




  






  
 {
  id: "vksu-exam-form-all-sem-05",
  title: "VKSU Exam Form All Semester",
  category: ["College Admission", "STD Collage"], 
  description: "Veer Kunwar Singh University exam form fill up service all semesters (Sem 1 to Sem 8).",
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D630%26cu%3DINR&size=200&format=png",
  fields: [
    { id: "field_student_name", name: "student_name", label: "Student Name", type: "text", required: true, placeholder: "Apna name likhein" },
    {
      id: "field_course",
      name: "course",
      label: "Course / Stream",
      type: "radio",
      required: true,
      options: [
        { id: "opt_ba", label: "B.A", value: "ba" },
        { id: "opt_bcom", label: "B.Com", value: "bcom" },
        { id: "opt_bsc", label: "B.Sc", value: "bsc" }
      ]
    },
    {
      id: "field_semester",
      name: "semester",
      label: "Select Semester",
      type: "radio",
      required: true,
      options: [
        { id: "opt_sem1", label: "Semester 1", value: "sem_1" },
        { id: "opt_sem2", label: "Semester 2", value: "sem_2" },
        { id: "opt_sem3", label: "Semester 3", value: "sem_3" },
        { id: "opt_sem4", label: "Semester 4", value: "sem_4" },
        { id: "opt_sem5", label: "Semester 5", value: "sem_5" },
        { id: "opt_sem6", label: "Semester 6", value: "sem_6" },
        { id: "opt_sem7", label: "Semester 7", value: "sem_7" },
        { id: "opt_sem8", label: "Semester 8", value: "sem_8" }
      ]
    },
    { id: "field_mobile_no", name: "mobile_no", label: "Mobile Number", type: "tel", required: true, placeholder: "10-digit mobile number likhein" },
    { id: "field_vksu_reg_no", name: "vksu_reg_no", label: "VKSU Registration Number", type: "text", required: true, placeholder: "Registration number likhein" },
    { id: "field_vksu_password", name: "vksu_password", label: "VKSU Password (Optional)", type: "text", required: false, placeholder: "Agar password pata ho to likhein" },
    {
      id: "field_password_forgot",
      name: "password_forgot",
      label: "Password yaad nahi hai? (Optional)",
      type: "radio",
      required: false,
      options: [
        { id: "opt_pass_yes", label: "Yes", value: "yes" },
        { id: "opt_pass_no", label: "No", value: "no" }
      ]
    },
    {
      id: "field_student_photo",
      name: "student_photo",
      label: "Student Photo (Image/PDF)",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true }
    
    ]
  },





  



  

{
  id: "rtps-combo-06",
  title: "Bihar RTPS Combo Service (जाति, आय एवं निवास प्रमाण पत्र एक साथ बनवाएं)",
  category: "Certificates (Jati/Aaya/Niwas)",
  description: "जाति, आय एवं निवास प्रमाण पत्र एक साथ आवेदन करने के लिए नीचे अपनी पूरी डिटेल्स भरें, सभी आवश्यक दस्तावेज़ अपलोड करें और QR कोड स्कैन करके ₹90 का भुगतान करें।",
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D90%26cu%3DINR&size=200&format=png",
  fields: [
    { id: "field_full_name", name: "full_name", label: "आवेदक का नाम / Name of Applicant", type: "text", required: true, placeholder: "Apna name likhein" },
    { id: "field_father_name", name: "father_name", label: "पिता का नाम / Father's Name", type: "text", required: true, placeholder: "Father name likhein" },
    { id: "field_mother_name", name: "mother_name", label: "माता का नाम / Mother's Name", type: "text", required: true, placeholder: "Mother name likhein" },
    { id: "field_husband_name", name: "husband_name", label: "पति का नाम / Husband's Name (Optional)", type: "text", required: false, placeholder: "Pati ka naam (yadi laagu ho)" },
    { id: "field_mobile_no", name: "mobile_no", label: "मोबाइल नंबर / Mobile Number", type: "tel", required: true, placeholder: "Mobile number" },
    { id: "field_district", name: "district", label: "जिला / District", type: "text", required: true, placeholder: "District name likhein" },
    { id: "field_sub_division", name: "sub_division", label: "अनुमंडल / Sub Division", type: "text", required: true, placeholder: "Sub division likhein" },
    { id: "field_block", name: "block", label: "प्रखंड / Block", type: "text", required: true, placeholder: "Block name likhein" },
    { id: "field_gram_panchayat", name: "gram_panchayat", label: "ग्राम पंचायत / Gram Panchayat", type: "text", required: true, placeholder: "Panchayat name likhein" },
    { id: "field_ward_no", name: "ward_no", label: "वार्ड संख्या / Ward No.", type: "text", required: true, placeholder: "Ward number likhein" },
    { id: "field_village", name: "village", label: "ग्राम/मोहल्ला / Village/Town", type: "text", required: true, placeholder: "Village name likhein" },
    { id: "field_police_station", name: "police_station", label: "थाना / Police Station", type: "text", required: true, placeholder: "Police station likhein" },
    {
      id: "field_applicant_photo",
      name: "applicant_photo",
      label: "आवेदक का फोटो / Photograph of Applicant",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "adhar_card",
      label: "आधार कार्ड के दोनों साइड का फोटो अपलोड करें / Upload photos of both sides of the Aadhaar card.",
      type: "file",
      accept: "image/*",
      required: true
    },
    {
      id: "field_profession",
      name: "profession",
      label: "पेशा / Profession",
      type: "radio",
      required: true,
      options: [
        { id: "opt_student", label: "छात्र / Student", value: "student" },
        { id: "opt_farmer", label: "किसान / Farmer", value: "farmer" },
        { id: "opt_housewife", label: "गृहिणी / Housewife", value: "housewife" },
        { id: "opt_other_prof", label: "अन्य / Other", value: "other" }
      ]
    },
    { id: "field_category", name: "category", label: "वर्ग / Category", type: "text", required: true, placeholder: "e.g. OBC / EBC / SC / ST" },
    { id: "field_caste", name: "caste", label: "जाति / Caste", type: "text", required: true, placeholder: "Apni jati likhein" },
    {
      id: "field_annual_income_range",
      name: "annual_income_range",
      label: "वार्षिक आय / Annual Family Income Amount",
      type: "radio",
      required: true,
      options: [
        { id: "opt_inc_60k", label: "₹60,000", value: "60000" },
        { id: "opt_inc_70k", label: "₹70,000", value: "70000" },
        { id: "opt_inc_80k", label: "₹80,000", value: "80000" },
        { id: "opt_inc_90k", label: "₹90,000", value: "90000" },
        { id: "opt_inc_1lakh", label: "₹1,00,000", value: "100000" },
        { id: "opt_inc_1_2lakh", label: "₹1,20,000", value: "120000" },
        { id: "opt_inc_1_5lakh", label: "₹1,50,000", value: "150000" }
      ]
    },
    {
      id: "field_residence_type",
      name: "residence_type",
      label: "निवास का प्रकार / Type of Residence",
      type: "radio",
      required: true,
      options: [
        { id: "opt_sthayi", label: "स्थायी", value: "sthayi" },
        { id: "opt_asthayi", label: "अस्थायी", value: "asthayi" }
      ]
    },
    {
      id: "field_combo_proof_doc",
      name: "combo_proof_doc",
      label: "प्रमाणपत्रों के साक्ष्य हेतु दस्तावेज",
      type: "radio",
      required: true,
      options: [
        { id: "opt_purana_certificates", label: "पुराना बना हुआ जाति / आय / निवास प्रमाण पत्र", value: "purana_all_certificates" },
        { id: "opt_khatiyan_doc", label: "राजस्व अभिलेख - खतियान", value: "rajashwa_khatiyan" },
        { id: "opt_bhumi_doc", label: "राजस्व अभिलेख - भूमि संबंधी दस्तावेज", value: "rajashwa_bhumi_dastavez" },
        { id: "opt_ration_card_doc", label: "राशन कार्ड", value: "ration_card" },
        { id: "opt_anya_rajashwa_doc", label: "अन्य राजस्व अभिलेख", value: "anya_rajashwa_abhilekh" }
      ]
    },
    {
      id: "field_identity_proof",
      name: "identity_proof",
      label: "दस्तावेज़ अपलोड करें / Upload Selected Document Proof",
      type: "file",
      accept: "image/*, application/pdf",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "भुगतान का स्क्रीनशॉट अपलोड करें / Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true
    }
  ]
},







{
  id: "vksu-admission-sem5-2024-2028-07",
  title: "VKSU Online Admission Form (Semester 5th)",
  category: "College Admission",
  description: "Veer Kunwar Singh University, Session 2024-2028 Semester 5th Online Admission Form fill up service.",
  qrImageUrl: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3Ds.kumar.2372%2540superyes%26pn%3DMerchant%26am%3D30%26cu%3DINR&size=200&format=png",
  fields: [
    { id: "field_student_name", name: "student_name", label: "Student Name", type: "text", required: true, placeholder: "Apna name likhein" },
    {
      id: "field_select_class",
      name: "select_class",
      label: "Select Class",
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
        { id: "opt_sem_v", label: "V", value: "5th" }
      ]
    },
    {
      id: "field_session",
      name: "session",
      label: "Session",
      type: "radio",
      required: true,
      options: [
        { id: "opt_session_2024_2028", label: "2024-2028", value: "2024_2028" }
      ]
    },
    { id: "field_mobile_no", name: "mobile_no", label: "Mobile Number", type: "tel", required: true, placeholder: "10-digit mobile number likhein" },
    { id: "field_registration_no", name: "registration_no", label: "Registration No.", type: "text", required: true, placeholder: "University Registration Number likhein" },
    { id: "field_roll_number", name: "roll_number", label: "University Roll Number", type: "text", required: true, placeholder: "University Roll Number likhein" },
    { id: "field_dob", name: "dob", label: "Date of Birth (DD/MM/YYYY)", type: "text", required: true, placeholder: "DD/MM/YYYY" },
    {
      id: "field_student_photo",
      name: "student_photo",
      label: "Upload Student Photo",
      type: "file",
      accept: "image/*",
      required: true
    },
    {
      id: "field_student_sign",
      name: "student_sign",
      label: "Upload Student Signature",
      type: "file",
      accept: "image/*",
      required: true
    },
    {
      id: "field_payment_screenshot",
      name: "payment_screenshot",
      label: "Upload Payment Screenshot",
      type: "file",
      accept: "image/*",
      required: true }
    
    ]
  }





  
  
];
