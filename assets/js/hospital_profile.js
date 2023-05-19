const hospital_name = document.querySelectorAll(".hospital_name");
const email_id = document.getElementById("email_id");
const ph_no = document.getElementById("ph_no");
// const blood_group = document.getElementById("blood_group");
const address = document.getElementById("address");
const district = document.getElementById("district");
const area_pincode = document.getElementById("area_pincode");
const hospital_licence = document.getElementById("hospital_licence");
const hospital_renew = document.getElementById("hospital_renew");
const hospital_type = document.getElementById("hospital_type");

const hospital_details = JSON.parse(localStorage.getItem("hospital_details"));
const active_hospital = localStorage.getItem("active_hospital");
let hospital_data;
hospital_details.forEach((e) => {
  if (active_hospital == e.gmail) {
    hospital_data = e;
  }
});

hospital_name.forEach((e) => {
  e.innerHTML = hospital_data.hospital_name;
});
hospital_renew.innerHTML = hospital_data.hospital_renew;
email_id.innerHTML = hospital_data.gmail;
ph_no.innerHTML = hospital_data.tel_num;
hospital_licence.innerHTML = hospital_data.hosp_license;
// blood_group.innerHTML = hospital_data.bloodgroup;
address.innerHTML = hospital_data.hospital_address;
area_pincode.innerHTML = hospital_data.pincode;
district.innerHTML = hospital_data.district;
hospital_type.innerHTML = hospital_data.hospitaltype;
let details = document.querySelector(".details")
let blood_avail_div=""
let edit_blood_avail_div=""
for(let j=0;j<hospital_data.total_blood_avail.length;j++){
  
   blood_avail_div+=`
<div class="detail">
<br>
              Blood Group Availability
              <p class="blood_group_value">${hospital_data.total_blood_avail[j]["blood_group_avail"]}</p>
              <p class="blood_group">${hospital_data.total_blood_avail[j]["blood_stock_avail"] } Units</p>
            </div> 
`
edit_blood_avail_div+=`
<div class="detail">
<br>
              Blood Group Availability
              <input class="blood_group_value" value=${hospital_data.total_blood_avail[j]["blood_group_avail"]}>
              <input class="blood_group" value=${hospital_data.total_blood_avail[j]["blood_stock_avail"] } Units>
            </div> 
`

}
details.innerHTML+=blood_avail_div



//  Editing the profile values----------
const save_button = document.getElementById("save_button");
const details_div = document.querySelector(".details");
const edit_button = document.getElementById("edit_button");
edit_button.addEventListener("click", (e) => {
  edit_button.classList.add("not_view");
  save_button.classList.add("view");
  save_button.classList.remove("not_view");

  details_div.innerHTML = `<div class="detail">
    <p>Hospital Name</p>
    <input id="hospital_name">
  </div>
  <div class="detail">
  <p>Email id</p>
  <input id="email_id" readonly>
</div>
<div class="detail">
    <p>Phone number</p>
    <input id="ph_no">
  </div>
  <div class="detail">
  <p>Hospital Type</p>
  <input id="hospital_type">
</div> 
  <div class="detail">
    <p>Hospital Renew Year</p>
    <input id="hospital_renew">
  </div> 
  <div class="detail">
    <p>District</p>
    <input id="district">
  </div>
  <div class="detail">
  <p>Area Pincode</p>
  <input id="area_pincode">
</div> 
<div class="detail">
<p>Hospital License</p>
<input id="hospital_licence">
</div>
   <div class="detail">
    <p>Address</p>
    <input id="address">
  </div>
  ${edit_blood_avail_div}
  `;
  const hospital_name = document.getElementById("hospital_name");
  const email_id = document.getElementById("email_id");
  const ph_no = document.getElementById("ph_no");
  const blood_group = document.getElementById("blood_group");
  const address = document.getElementById("address");
  const district = document.getElementById("district");
  const area_pincode = document.getElementById("area_pincode");
  const hospital_licence = document.getElementById("hospital_licence");
  const hospital_renew = document.getElementById("hospital_renew");
  const hospital_type = document.getElementById("hospital_type");

  hospital_name.value = hospital_data.hospital_name;
  hospital_renew.value = hospital_data.hospital_renew;
  email_id.value = hospital_data.gmail;
  ph_no.value = hospital_data.tel_num;
  hospital_licence.value = hospital_data.hosp_license;
  // blood_group.value = hospital_data.bloodgroup;
  address.value = hospital_data.hospital_address;
  area_pincode.value = hospital_data.pincode;
  district.value = hospital_data.district;
  hospital_type.value = hospital_data.hospitaltype;
  console.log(hospital_data);
  save_button.addEventListener("click", saveDetails);
});
// new
function saveDetails() {
  console.log("jhg");
  const hospital_name = document.getElementById("hospital_name");
  const email_id = document.getElementById("email_id");
  const ph_no = document.getElementById("ph_no");
  const blood_group = document.querySelectorAll(".blood_group")
  const blood_group_value = document.querySelectorAll(".blood_group_value")
  const address = document.getElementById("address");
  const district = document.getElementById("district");
  const area_pincode = document.getElementById("area_pincode");
  const hospital_licence = document.getElementById("hospital_licence");
  const hospital_renew = document.getElementById("hospital_renew");
  const hospital_type = document.getElementById("hospital_type");
  let hospital_data = localStorage.getItem("active_hospital");
  const hospital_details = JSON.parse(localStorage.getItem("hospital_details"));
  const ref = hospital_data;

  hospital_details.forEach((e, index) => {
    if (e.gmail == hospital_data) {
      hospital_data = hospital_details[index];
    }
  });

  hospital_data = {};
console.log(hospital_name,"hg");
  hospital_data.hospital_name = hospital_name.value;
  hospital_data.gmail = email_id.value;
  hospital_data.tel_num = ph_no.value;
  hospital_data.hospital_renew = hospital_renew.value;
  hospital_data.hosp_license = hospital_licence.value;
  // hospital_data.bloodgroup = blood_group.value;
  hospital_data.hospital_address = address.value;
  hospital_data.district = district.value;
  hospital_data.pincode = area_pincode.value;
  hospital_data.hospitaltype = hospital_type.value;
  console.log( hospital_data);
  hospital_data.total_blood_avail=[]
  hospital_data.total_blood_avail[0]={
    blood_group_avail:blood_group_value[0].value,
    blood_stock_avail:blood_group[0].value
  }
  hospital_data.total_blood_avail[1]={
    blood_group_avail:blood_group_value[1].value,

    blood_stock_avail:blood_group[1].value
  }
    hospital_data.total_blood_avail[2]={
    blood_group_avail:blood_group_value[2].value,

    blood_stock_avail:blood_group[2].value
  }


  hospital_details.forEach((e, index) => {
    if (e.gmail == ref) {
      hospital_details[index] = hospital_data;
    }
  });
  // localStorage.setItem("hospital_data", JSON.stringify(hospital_data))
  localStorage.setItem("hospital_details", JSON.stringify(hospital_details));

  window.location.href = "./hospital_profile.html";
}

const logout_btn = document.querySelector("#logout_button");
logout_btn.addEventListener("click", (e) => {
  localStorage.removeItem("status");
  localStorage.removeItem("active_hospital");
  window.location.href = "../index.html";
});

const _status = localStorage.getItem("status");
const login_signup = document.querySelector(".login_signup");
const register = document.querySelector("#register");
if (_status) {
  register.classList.add("not_view");
  login_signup.classList.add("not_view");
}

// localStorage.setItem("name","barath")
// let king=localStorage.getItem("name")
// console.log(king)
// localStorage.removeItem("name")
