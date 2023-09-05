let count = 0;
let m = new Date();
let day = m.getDate() + 31;
let mnth = m.getMonth() + 12;
let year = m.getFullYear() - 1;
let body_ = document.querySelector("body");
let counter = 0;
let x = 0;
let falsy = false
let firwork = document.getElementById("firework")
function calc() {
  if (day_.value < 0 || day_.value > 31 || day_.value == '') {
    label_l.classList.add("unvalid_label");
    day_.classList.add("uvalid_input");
    day_.classList.add("shakes");
    validation_.classList.add("unvalid_");
    validation_.innerText = `Should be A valid number`;
  } else  {
    label_l.classList.remove("unvalid_label");
    day_.classList.remove("uvalid_input");
    day_.classList.remove("shakes");
    validation_.classList.remove("unvalid_");
    validation_.innerText = ` `;
    var day_res = day - day_.value;
    day_otpt.innerText = `${day_res}`;
    if(day_res>31||day_res==31){
      console.log(day_res)
      falsy=true
      day_res=day_res-31
      day_otpt.innerText = `${day_res}`;
    }
  }
  if (mnth_.value < 0 || mnth_.value > 12 || mnth_.value == '') {
    label_two.classList.add("unvalid_label");
    mnth_.classList.add("uvalid_input");
    mnth_.classList.add("shakes");
    validation_two.classList.add("unvalid_");
    validation_two.innerText = `Should be A valid number`;
  } else {
    label_two.classList.remove("unvalid_label");
    mnth_.classList.remove("uvalid_input");
    mnth_.classList.remove("shakes");
    validation_two.classList.remove("unvalid_");
    validation_two.innerText = ` `;
    var mnth_res = mnth - mnth_.value;
    console.log(mnth_res);
    if(falsy==true){
      mnth_res+=1
      if(mnth_res>=12){
        mnth_res=mnth_res-12;
        year++;
       mnth_otpt.innerText = `${mnth_res}`;
      }
    }else{
      if(mnth_res>=12){
        mnth_res=mnth_res-12;
        year++;
        mnth_otpt.innerText = `${mnth_res}`;
      }else{
  mnth_otpt.innerText = `${mnth_res}`;

}
    }
  }
  if (year_.value < 0 || year_.value >= 2023 || year_.value == '') {
    label_three.classList.add("unvalid_label");
    year_.classList.add("uvalid_input");
    year_.classList.add("shakes");
    validation_three.classList.add("unvalid_");
    validation_three.innerText = `Should be A valid number`;
  } else {
    label_three.classList.remove("unvalid_label");
    year_.classList.remove("uvalid_input");
    year_.classList.remove("shakes");
    validation_three.classList.remove("unvalid_");
    validation_three.innerText = ` `;
    year_otpt.innerText = `${year - year_.value}`;
  }
  if(day_res==0 && mnth_res==0){
    $('#all_').fadeIn()
    birthyear.innerHTML = `${year-year_.value}years Old `
  }
}
