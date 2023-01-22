const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".fa-eye-slash"),
  links = document.querySelectorAll(".link");

console.log(forms, pwShowHide, links);

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        return;
      }

      password.type = "text";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("showSignup");
  });
});

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.lbimg')
images.forEach (image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  // if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
