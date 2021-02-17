function showInfo() {
  let pName           = document.querySelector("input[name='name']").value
  let pPrimColor      = document.querySelector("select[name='color'] option:checked").text
  let pLikeProg       = document.querySelector("input[name='like-programming']:checked").value
  let pLanguages      = document.querySelectorAll("input[name='developer-options']:checked")
  let optionLanguages = []

  pLanguages.forEach(language => { optionLanguages.push(language.value) })

  let optionsChecked = optionLanguages.join(", ")
  alert("Nome: " + pName + "\n" +
        "Color: " + pPrimColor + "\n" +
        "Like Programming: " + pLikeProg + "\n" +
        "Languages: " + optionsChecked)
}