window.addEventListener("scroll", function () {
  const navi = document.querySelector(".navigation");
  const naviHeight = navi.getBoundingClientRect().height;
  if (window.scrollY > naviHeight) {
    navi.classList.add("active");
    navi.classList.remove("deactive");
  } else {
    navi.classList.remove("active");
    navi.classList.add("deactive");
  }
});

const hambugerBtn = document.querySelector(".hamburger-button");
const gnb = document.querySelector(".gnb");
const account = document.querySelector(".account");
const gnbWidth = gnb.getBoundingClientRect().width;
hambugerBtn.addEventListener("click", function () {
  hambugerBtn.classList.toggle("active");
  gnb.classList.toggle("vh");
  const activeCheck1 = gnb.classList;
  const activeCheck2 = hambugerBtn.classList;
  if (activeCheck1.contains("vh") && activeCheck2.contains("active")) {
    setTimeout(() => {
      account.classList.add("active");
    }, 400);
  } else {
    account.classList.remove("active");
  }
});
