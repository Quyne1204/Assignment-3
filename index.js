const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
document.querySelector("#submit").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  if (email.length == 0) {
    document.querySelector("#mess").innerText = "Bạn hãy nhập gmail👌";
  } else if (!email.match(regex)) {
    document.querySelector("#mess").innerText =
      "Bạn hãy nhập đúng gmail của mình👌";
  } else {
    //
    document.querySelector("#info").classList.remove("hide");
    document.querySelector("#input").classList.add("hide");
  }
});

//info1
document.querySelector("#view-more1").addEventListener("click", () => {
  //
  document.querySelector("#hide1").classList.remove("hide");
  document.querySelector("#view-more1").classList.add("hide");
  document.querySelector("#view-less1").classList.remove("hide");
});
document.querySelector("#view-less1").addEventListener("click", () => {
  //
  document.querySelector("#hide1").classList.add("hide");
  document.querySelector("#view-more1").classList.remove("hide");
  document.querySelector("#view-less1").classList.add("hide");
});

document.querySelector("#view-more2").addEventListener("click", () => {
  //
  document.querySelector("#hide2").classList.remove("hide");
  document.querySelector("#view-more2").classList.add("hide");
  document.querySelector("#view-less2").classList.remove("hide");
});
document.querySelector("#view-less2").addEventListener("click", () => {
  //
  document.querySelector("#hide2").classList.add("hide");
  document.querySelector("#view-more2").classList.remove("hide");
  document.querySelector("#view-less2").classList.add("hide");
});

document.querySelector("#view-more3").addEventListener("click", () => {
  //
  document.querySelector("#hide3").classList.remove("hide");
  document.querySelector("#view-more3").classList.add("hide");
  document.querySelector("#view-less3").classList.remove("hide");
});
document.querySelector("#view-less3").addEventListener("click", () => {
  //
  document.querySelector("#hide3").classList.add("hide");
  document.querySelector("#view-more3").classList.remove("hide");
  document.querySelector("#view-less3").classList.add("hide");
});

document.querySelector("#view-more4").addEventListener("click", () => {
  //
  document.querySelector("#hide4").classList.remove("hide");
  document.querySelector("#view-more4").classList.add("hide");
  document.querySelector("#view-less4").classList.remove("hide");
});
document.querySelector("#view-less4").addEventListener("click", () => {
  //
  document.querySelector("#hide4").classList.add("hide");
  document.querySelector("#view-more4").classList.remove("hide");
  document.querySelector("#view-less4").classList.add("hide");
});

document.querySelector("#view-more5").addEventListener("click", () => {
  //
  document.querySelector("#hide5").classList.remove("hide");
  document.querySelector("#view-more5").classList.add("hide");
  document.querySelector("#view-less5").classList.remove("hide");
});
document.querySelector("#view-less5").addEventListener("click", () => {
  //
  document.querySelector("#hide5").classList.add("hide");
  document.querySelector("#view-more5").classList.remove("hide");
  document.querySelector("#view-less5").classList.add("hide");
});

document.querySelector("#view-more6").addEventListener("click", () => {
  //
  document.querySelector("#hide6").classList.remove("hide");
  document.querySelector("#view-more6").classList.add("hide");
  document.querySelector("#view-less6").classList.remove("hide");
});
document.querySelector("#view-less6").addEventListener("click", () => {
  //
  document.querySelector("#hide6").classList.add("hide");
  document.querySelector("#view-more6").classList.remove("hide");
  document.querySelector("#view-less6").classList.add("hide");
});
