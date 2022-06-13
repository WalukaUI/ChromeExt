document.querySelector(".lnXdpd").classList.add("spin");

const first = document.createElement("button");
first.innerText = "Set data";
first.id = "first";

const second = document.createElement("button");
second.innerText = "Shout Out to Backend";
second.id = "second";

document.querySelector("body").appendChild(first);
document.querySelector("body").appendChild(second);

first.addEventListener("click", () => {
  chrome.storage.local.set({ password: "123" });
  console.log("i Set Data");
});
