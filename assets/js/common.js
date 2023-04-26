let profile_page =document.getElementById("profile_page")??""
let local_status =localStorage.getItem("status")
profile_page.addEventListener("click",e=>{
    if(local_status="hospital"){
        window.location.href="./hospital_profile.html"

    }
    else if(local_status="donor"){
        window.location.href="./donor_profile.html"
    }
    else{
        alert("Register as a Donor or Register your Hospital")
    }
})

