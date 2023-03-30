let full_name =document.getElementById("full_name")
let dob =document.getElementById("dob")
let email_id =document.getElementById("email_id")
let gender =document.getElementById("gender")
let ph_no =document.getElementById("ph_no")
let occupation =document.getElementById("occupation")
let blood_group =document.getElementById("blood_group")
let address =document.getElementById("address")
let state =document.getElementById("state")
let nationality =document.getElementById("nationality")
let district =document.getElementById("district")
let diseased_before =document.getElementById("diseased_before")
let donated_before =document.getElementById("donated_before")


let active_user =JSON.parse( localStorage.getItem("active_user"))

full_name.innerHTML = active_user["fullname"]
dob.innerHTML = active_user["dob"]
email_id.innerHTML = active_user["emailid"]
ph_no.innerHTML = active_user["phnum"]
gender.innerHTML = active_user["gendermf"]
donated_before.innerHTML = active_user["donated_before"]
occupation.innerHTML = active_user["occupation"]
address.innerHTML = active_user["address"]
nationality.innerHTML = active_user["nationality"]
state.innerHTML = active_user["state"]
district.innerHTML = active_user["district"]
blood_group.innerHTML = active_user["bloodgroup"]
diseased_before.innerHTML = active_user["diseased_before"]
 
let save_button = document.getElementById("save_button")
let details_div = document.querySelector(".details")
let edit_button= document.getElementById("edit_button")
edit_button.addEventListener("click",e=>{

    edit_button.classList.add("not_view")
    save_button.classList.add("view")
    save_button.classList.remove("not_view")



    details_div.innerHTML= `<div class="detail">
    <p>Full name</p>
    <input id="full_name">
  </div>
  <div class="detail">
    <p>Date of Birth</p>
    <input id="dob">
  </div> 
  <div class="detail">
    <p>Email id</p>
    <input id="email_id" readonly>
  </div>
   <div class="detail">
    <p>Gender</p>
    <input id="gender">
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
    <input id="blood_group">
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
    <p>Nationality</p>
    <input id="nationality">
  </div> 
  <div class="detail">
    <p> Diseased before ?</p>
    <input id="diseased_before">
  </div> 
   <div class="detail">
    <p>Have you Donated blood before</p>
    <input id="donated_before">
  </div>`
  let full_name =document.getElementById("full_name")
  let dob =document.getElementById("dob")
  let email_id =document.getElementById("email_id")
  let gender =document.getElementById("gender")
  let ph_no =document.getElementById("ph_no")
  let occupation =document.getElementById("occupation")
  let blood_group =document.getElementById("blood_group")
  let address =document.getElementById("address")
  let state =document.getElementById("state")
  let nationality =document.getElementById("nationality")
  let district =document.getElementById("district")
  let diseased_before =document.getElementById("diseased_before")
  let donated_before =document.getElementById("donated_before")
 
 
  full_name.value = active_user["fullname"]
dob.value = active_user["dob"]
email_id.value = active_user["emailid"]
ph_no.value = active_user["phnum"]
gender.value = active_user["gendermf"]
donated_before.value = active_user["donated_before"]
occupation.value = active_user["occupation"]
address.value = active_user["address"]
nationality.value = active_user["nationality"]
state.value = active_user["state"]
district.value = active_user["district"]
blood_group.value = active_user["bloodgroup"]
diseased_before.value = active_user["diseased_before"]

save_button.addEventListener("click",saveDetails)
})

function saveDetails(){
    let full_name =document.getElementById("full_name")
let dob =document.getElementById("dob")
let email_id =document.getElementById("email_id")
let gender =document.getElementById("gender")
let ph_no =document.getElementById("ph_no")
let occupation =document.getElementById("occupation")
let blood_group =document.getElementById("blood_group")
let address =document.getElementById("address")
let state =document.getElementById("state")
let nationality =document.getElementById("nationality")
let district =document.getElementById("district")
let diseased_before =document.getElementById("diseased_before")
let donated_before =document.getElementById("donated_before")
let  active_user =JSON.parse( localStorage.getItem("active_user"))

let ref = active_user["fullname"]

    active_user ={}

    active_user["fullname"]=full_name.value 
    active_user["dob"] = dob.value
    active_user["emailid"] = email_id.value
    active_user["phnum"] = ph_no.value
    active_user["gendermf"] = gender.value
    active_user["donated_before"] = donated_before.value
    active_user["occupation"] = occupation.value
     active_user["address"] = address.value 
    active_user["nationality"] = nationality.value
    active_user["state"] = state.value
   active_user["district"] =district.value 
   active_user["bloodgroup"] = blood_group.value 
    active_user["diseased_before"] =diseased_before.value
    console.log(active_user);

    let donor_details = JSON.parse(localStorage.getItem("donor_details"))
    donor_details.forEach((e,index)=>{
        if(e["fullname"]==ref){
            donor_details[index] = active_user
        }
    })
    localStorage.setItem("active_user", JSON.stringify(active_user))
    localStorage.setItem("donor_details", JSON.stringify(donor_details))

    window.location.href ="./donor_profile.html"
}