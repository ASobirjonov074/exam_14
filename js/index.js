let modal = document.querySelector('.modal')
let modal__dialog = document.querySelector('.modal__dialog')
let open = document.querySelectorAll('[data-modal]')
let close = document.querySelectorAll('[data-close]')


open.onclick = () => {
    modal.style.display = "block"
    modal__dialog.style.display = "block"
}
close.onclick = () => {
    modal.style.display = "none"
    modal__dialog.style.display = "none"
}

open.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'block'
        modal__dialog.style.display = 'block'
        
    }
})

close.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'none'
        modal__dialog.style.display = 'none'
    }
})

let text = document.querySelectorAll(".tabcontent") 
let buttons = document.querySelectorAll(".tabheader__item") 

 
buttons.forEach((btn, inx) => { 
    btn.onclick = () => { 
        text.forEach(cont => cont.classList.add("hide")) 
        text[inx].classList.remove("hide") 
        
        buttons.forEach(item => item.classList.remove("tabheader__item_active")) 
        btn.classList.add("tabheader__item_active") 
    } 
})


let patterns = {
    text: /^[a-z ,.'-]+$/i,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
  };

  let inps = document.querySelectorAll(".modal__input");
  inps.forEach((inp) => {

    let names = inp.getAttribute("type");
    inp.onkeyup = () => {

      let pattern = patterns[names];

      if (pattern.test(inp.value) === false) {
        inp.style.border = "1px solid red";
      } else {
        inp.style.border = "1px solid blue";
      }
    };

    let form1 = document.forms[0]

    form1.onsubmit = (event) => {
        event.preventDefault();
        inps.forEach((inp) => {
          if (
            (inp.value.length === 0 && inp.style.border === "1px solid red") ||
            (inp.value.length > 1 && inp.style.border === "1px solid red")
          ) {
            error = true;
          } else if (inp.value.length > 1 && inp.style.border === "1px solid green") {
            error = false;
          }
        });
      
        if (error) {
        } else {
          submit();
        }
      };
  });

  function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}