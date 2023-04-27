let hospital_details_data = [
  {
    hospital_name: "Ark",
    district: "Chennai",
    hospital_address:
      "188, 100A, Gandhi Road, Soni Nagar, VGP Seethapathy Nagar, Velachery",
    pincode: "600042",
    tel_num: "0442243350",
    total_blood_avail: [
      { blood_group_avail: "0+", blood_stock_avail: "100" },
      { blood_group_avail: "0+", blood_stock_avail: "200" },
    ],
    hosp_license: "VHGSHN234SHV",
    hospital_renew: "1990-06-21",
    gmail: "azhealers@gmail.com",
    password: "123@king",
  },
  {
    hospital_name: "Sri Lakshmi Multi Speciality",
    district: "coimbatore",
    hospital_address: " 5/91,No, 2, Church Rd, Kandhanchavadi, Perungudi",
    pincode: "600096",
    tel_num: "0444280392",
    total_blood_avail: [
      { blood_group_avail: "0+", blood_stock_avail: "100" },
      { blood_group_avail: "0+", blood_stock_avail: "100" },
    ],
    hosp_license: "VHGSHN234SHV",
    hospital_renew: "1993-06-18",
    gmail: "srilakshmi@gmail.com",
    password: "sri@King",
  },
  {
    hospital_name: "Kauvery",
    district: "tirunelveli",
    hospital_address: "110E, 20/1, N Bypass Rd, Vannarpettai,",
    pincode: "627003",
    tel_num: "0462400600",
    total_blood_avail: [
      { blood_group_avail: "0+", blood_stock_avail: "100" },
      { blood_group_avail: "0+", blood_stock_avail: "100" },
    ],
    hosp_license: "TN6386200189",
    hospital_renew: "1977-06-16",
    gmail: "kauvery@gmail.com",
    password: "tirunelveli@123",
  },
];
let check =JSON.parse(localStorage.getItem("hospital_details")) ?? 1

if(check==1){
localStorage.setItem("hospital_details",JSON.stringify(hospital_details_data))
console.log("details added");
}