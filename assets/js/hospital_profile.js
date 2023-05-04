let hospital_name =document.getElementById("hospital_name")
let email_id =document.getElementById("email_id")
let ph_no =document.getElementById("ph_no")
let blood_group =document.getElementById("blood_group")
let address =document.getElementById("address")
let district =document.getElementById("district")
let area_pincode =document.getElementById("area_pincode")
let hospital_licence =document.getElementById("hospital_licence")
let hospital_renew =document.getElementById("hospital_renew")
let hospital_type =document.getElementById("hospital_type")

let  hospital_details=JSON.parse( localStorage.getItem("hospital_details"))
let active_hospital = localStorage.getItem("active_hospital")
let hospital_data;
hospital_details.forEach(e => {
  if(active_hospital==e["gmail"]){
    hospital_data=e
  }
});

hospital_name.innerHTML = hospital_data["hospital_name"]
hospital_renew.innerHTML = hospital_data["hospital_renew"]
email_id.innerHTML = hospital_data["gmail"]
ph_no.innerHTML = hospital_data["tel_num"]
hospital_licence.innerHTML= hospital_data["hosp_license"]
blood_group.innerHTML = hospital_data["bloodgroup"]
address.innerHTML = hospital_data["hospital_address"]
area_pincode.innerHTML= hospital_data["pincode"]
district.innerHTML = hospital_data["district"]
hospital_type.innerHTML= hospital_data["hospitaltype"]
// console.log( hospital_data["district"]);
 
let save_button = document.getElementById("save_button")
let details_div = document.querySelector(".details")
let edit_button= document.getElementById("edit_button")
edit_button.addEventListener("click",e=>{

    edit_button.classList.add("not_view")
    save_button.classList.add("view")
    save_button.classList.remove("not_view")

    details_div.innerHTML= `<div class="detail">
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
  <div class="detail">
    <p>Blood group</p>
    <input id="blood_group">
  </div>`
let hospital_name =document.getElementById("hospital_name")
let email_id =document.getElementById("email_id")
let ph_no =document.getElementById("ph_no")
let blood_group =document.getElementById("blood_group")
let address =document.getElementById("address")
let district =document.getElementById("district")
let area_pincode =document.getElementById("area_pincode")
let hospital_licence =document.getElementById("hospital_licence")
let hospital_renew =document.getElementById("hospital_renew")
let hospital_type =document.getElementById("hospital_type")
 
 
hospital_name.value = hospital_data["hospital_name"]
hospital_renew.value = hospital_data["hospital_renew"]
email_id.value = hospital_data["gmail"]
ph_no.value = hospital_data["tel_num"]
hospital_licence.value= hospital_data["hosp_license"]
blood_group.value = hospital_data["bloodgroup"]
address.value = hospital_data["hospital_address"]
area_pincode.value= hospital_data["pincode"]
district.value = hospital_data["district"]
hospital_type.value = hospital_data["hospitaltype"]
console.log(hospital_data);
save_button.addEventListener("click",saveDetails)
})
//new
function saveDetails(){
  console.log("jhg");
  let hospital_name =document.getElementById("hospital_name")
  let email_id =document.getElementById("email_id")
  let ph_no =document.getElementById("ph_no")
  let blood_group =document.getElementById("blood_group")
  let address =document.getElementById("address")
  let district =document.getElementById("district")
  let area_pincode =document.getElementById("area_pincode")
  let hospital_licence =document.getElementById("hospital_licence")
  let hospital_renew =document.getElementById("hospital_renew")
  let hospital_type =document.getElementById("hospital_type")
  let hospital_data =localStorage.getItem("active_hospital")
  let hospital_details = JSON.parse(localStorage.getItem("hospital_details"))
  let ref = hospital_data

  hospital_details.forEach((e,index)=>{
    if(e["gmail"]==hospital_data){
      hospital_data=hospital_details[index] 
    }
})

hospital_data ={}

  hospital_data["hospital_name"]=hospital_name.value 
  hospital_data["gmail"] = email_id.value
  hospital_data["tel_num"] = ph_no.value
  hospital_data["hospital_renew"] = hospital_renew.value
  hospital_data["hosp_license"] = hospital_licence.value
  hospital_data["bloodgroup"] =blood_group.value
  hospital_data["hospital_address"] = address.value
  hospital_data["district"] =district.value  
  hospital_data["pincode"] = area_pincode.value
  hospital_data["hospitaltype"] = hospital_type.value
  



  hospital_details.forEach((e,index)=>{
      if(e["gmail"]==ref){
          hospital_details[index] = hospital_data
      }
  })
  // localStorage.setItem("hospital_data", JSON.stringify(hospital_data))
  localStorage.setItem("hospital_details", JSON.stringify(hospital_details))

  window.location.href ="./hospital_profile.html"
}





let logout_btn =document.querySelector("#logout_button")
logout_btn.addEventListener("click",e=>{
  localStorage.removeItem("status")
  localStorage.removeItem("active_hospital")
  window.location.href="../index.html"
})


let _status= localStorage.getItem("status")
let login_signup =document.querySelector(".login_signup")
let register = document.querySelector("#register")
if(_status){
  register.classList.add("not_view")
  login_signup.classList.add("not_view")
}

// localStorage.setItem("name","barath")
// let king=localStorage.getItem("name")
// console.log(king)
// localStorage.removeItem("name")