const full_name = document.getElementById("full_name");
const dob = document.getElementById("dob");
const email_id = document.getElementById("email_id");
const gender = document.getElementById("gender");
const ph_no = document.getElementById("ph_no");
const occupation = document.getElementById("occupation");
const blood_group = document.getElementById("blood_group");
const address = document.getElementById("address");
const state = document.getElementById("state");
const age = document.getElementById("age");
const district = document.getElementById("district");
const diseased_before = document.getElementById("diseased_before");
const donated_before = document.getElementById("donated_before");
const status_check = document.getElementById("status");

const active_user = JSON.parse(localStorage.getItem("active_user"));

full_name.innerHTML = active_user.fullname;
dob.innerHTML = active_user.dob;
email_id.innerHTML = active_user.emailid;
ph_no.innerHTML = active_user.phnum;
gender.innerHTML = active_user.gendermf;
donated_before.innerHTML = active_user.donated_before;
occupation.innerHTML = active_user.occupation;
address.innerHTML = active_user.address;
age.innerHTML = active_user.age;
state.innerHTML = active_user.state;
district.innerHTML = active_user.district;
blood_group.innerHTML = active_user.bloodgroup;
diseased_before.innerHTML = active_user.diseased_before;
if (active_user.status == true) {
  status_check.checked = true;
} else {
  status_check.checked = false;
}

const save_button = document.getElementById("save_button");
const details_div = document.querySelector(".details");
const edit_button = document.getElementById("edit_button");
edit_button.addEventListener("click", (e) => {
  edit_button.classList.add("not_view");
  save_button.classList.add("view");
  save_button.classList.remove("not_view");

  details_div.innerHTML = `<div class="detail">
    <p>Full name</p>
    <input id="full_name">
  </div>
  <div class="detail">
    <p>Date of Birth</p>
    <input id="dob" disabled>
  </div> 
  <div class="detail">
    <p>Email id</p>
    <input id="email_id" disabled>
  </div>
   <div class="detail">
    <p>Gender</p>
    <input id="gender" disabled>
  </div>
   <div class="detail">
    <p>Phone number</p>
    <input id="ph_no">
  </div>
  <div class="detail">
    <p>Occupation</p>
    <input id="occupation">
  </div>  
  <div class="detail">
    <p>Blood group</p>
    <input id="blood_group" disabled>
  </div> 
   <div class="detail">
    <p>Address</p>
    <input id="address">
  </div>
  <div class="detail">
    <p>District</p>
    <input id="district">
  </div>
  <div class="detail">
    <p>State</p>
    <input id="state">
  </div> 
  <div class="detail">
    <p>Age</p>
    <input id="age" disabled>
  </div> 
  <div class="detail">
    <p> Diseased before ?</p>
    <input id="diseased_before" disabled>
  </div> 
   <div class="detail">
    <p>Have you Donated blood before</p>
    <input id="donated_before" >
    </div>
  <div class="detail">
  <input type="checkbox" id="status">
<label for="status">Toggle</label>
</div>`;
  const full_name = document.getElementById("full_name");
  const dob = document.getElementById("dob");
  const email_id = document.getElementById("email_id");
  const gender = document.getElementById("gender");
  const ph_no = document.getElementById("ph_no");
  const occupation = document.getElementById("occupation");
  const blood_group = document.getElementById("blood_group");
  const address = document.getElementById("address");
  const state = document.getElementById("state");
  const age = document.getElementById("age");
  const district = document.getElementById("district");
  const diseased_before = document.getElementById("diseased_before");
  const donated_before = document.getElementById("donated_before");
  const status_check = document.getElementById("status");

  if (active_user.status == true) {
    status_check.checked = true;
  } else {
    status_check.checked = false;
  }

  full_name.value = active_user.fullname;
  dob.value = active_user.dob;
  email_id.value = active_user.emailid;
  ph_no.value = active_user.phnum;
  gender.value = active_user.gendermf;
  donated_before.value = active_user.donated_before;
  occupation.value = active_user.occupation;
  address.value = active_user.address;
  age.value = active_user.age;
  state.value = active_user.state;
  district.value = active_user.district;
  blood_group.value = active_user.bloodgroup;
  diseased_before.value = active_user.diseased_before;

  save_button.addEventListener("click", saveDetails);
});

function saveDetails() {
  const full_name = document.getElementById("full_name");
  const dob = document.getElementById("dob");
  const email_id = document.getElementById("email_id");
  const gender = document.getElementById("gender");
  const ph_no = document.getElementById("ph_no");
  const occupation = document.getElementById("occupation");
  const blood_group = document.getElementById("blood_group");
  const address = document.getElementById("address");
  const state = document.getElementById("state");
  const age = document.getElementById("age");
  const district = document.getElementById("district");
  const diseased_before = document.getElementById("diseased_before");
  const donated_before = document.getElementById("donated_before");
  let status_check = document.getElementById("status");
  if (status_check.checked == true) {
    status_check = true;
  } else {
    status_check = false;
  }

  let active_user = JSON.parse(localStorage.getItem("active_user"));

  const ref = active_user.fullname;

  active_user = {};

  active_user.fullname = full_name.value;
  active_user.dob = dob.value;
  active_user.emailid = email_id.value;
  active_user.phnum = ph_no.value;
  active_user.gendermf = gender.value;
  active_user.donated_before = donated_before.value;
  active_user.occupation = occupation.value;
  active_user.address = address.value;
  active_user.age = age.value;
  active_user.state = state.value;
  active_user.district = district.value;
  active_user.bloodgroup = blood_group.value;
  active_user.diseased_before = diseased_before.value;
  active_user.status = status_check;
  console.log(active_user);

  const donor_details = JSON.parse(localStorage.getItem("donor_details"));
  donor_details.forEach((e, index) => {
    if (e.fullname == ref) {
      donor_details[index] = active_user;
    }
  });
  localStorage.setItem("active_user", JSON.stringify(active_user));
  localStorage.setItem("donor_details", JSON.stringify(donor_details));

  window.location.href = "./donor_profile.html";
}

const logout_btn = document.querySelector("#logout_button");
logout_btn.addEventListener("click", (e) => {
  localStorage.removeItem("status");
  localStorage.removeItem("active_user");
  window.location.href = "../index.html";
});

const _status = localStorage.getItem("status");
const login_signup = document.querySelector(".login_signup");
const register = document.querySelector("#register");
if (_status) {
  register.classList.add("not_view");
  if (login_signup) {
    login_signup.classList.add("not_view");
  }
}
