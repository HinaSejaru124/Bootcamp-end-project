const textarea = document.getElementById("textarea")
const post = document.getElementById("post")
const emptydiv = document.getElementById("emptydiv")
const question = document.getElementById("q")
const anwswer = document.getElementById("a")
const qa = document.getElementById("qa")
const inputFile = document.getElementById("upload"),
  object = document.getElementById("object")
let choice = "Q:   "
question.addEventListener("click", () => {
  question.style.opacity = 1;
  anwswer.style.opacity = 0;
  qa.style.transitionDuration = 0.5;
  qa.style.transitionProperty = "all"
  choice = "Q:   "
})
anwswer.addEventListener("click", () => {
  anwswer.style.opacity = 1;
  question.style.opacity = 0;
  qa.style.transitionDuration = 0.5;
  qa.style.transitionProperty = "all"
  choice = "A:   "
})
post.addEventListener("click", () => {
  if (textarea.value === "") {
    alert("Sorry, empty input. Pleaase try back");
    return;
  }
  let text = textarea.value
  const textdiv = document.createElement("div")
  textdiv.innerHTML = choice + text;
  textdiv.className = "textdiv"
  emptydiv.appendChild(textdiv);
  textarea.value = "";
})

// addEventListener("click", ())
const loadImage = () => {
  let file = inputFile.files[0]
  if (!file)
    return
  object.data = URL.createObjectURL(file)
}
inputFile.addEventListener("change", loadImage)
