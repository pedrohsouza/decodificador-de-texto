const textInput = document.querySelector('#text-input')
const buttonEncrypt = document.querySelector('#encrypt-button')
const buttonDecrypt = document.querySelector('#decrypt-button')
const finalTextSection = document.querySelector('#final-text-section')

function encryptInput(input) {
  return input
    .split('')
    .map(character => {
      if (character == 'a') {
        character = 'ai'
      } else if (character == 'e') {
        character = 'enter'
      } else if (character == 'i') {
        character = 'imes'
      } else if (character == 'o') {
        character = 'ober'
      } else if (character == 'u') {
        character = 'ufat'
      }

      return character
    })
    .join('')
}

function decryptInput(input) {
  let decryptedInput

  decryptedInput = input.replaceAll('ai', 'a')
  decryptedInput = decryptedInput.replaceAll('enter', 'e')
  decryptedInput = decryptedInput.replaceAll('imes', 'i')
  decryptedInput = decryptedInput.replaceAll('ober', 'o')
  decryptedInput = decryptedInput.replaceAll('ufat', 'u')

  return decryptedInput
}

function copyToClipboard(inputId) {
  const copyText = document.querySelector(inputId).innerText
  navigator.clipboard.writeText(copyText)
}

function appendAnswer(criptographyFunction) {
  const originalText = textInput.value
  const modifiedText = criptographyFunction(originalText)
  const paragraph = document.createElement('p')
  const button = document.createElement('button')

  if (originalText !== '') {
    finalTextSection.innerHTML = ''

    paragraph.innerHTML = modifiedText
    paragraph.classList.add('final-text')
    paragraph.id = 'final-text'
    finalTextSection.append(paragraph)

    button.addEventListener('click', _ => {
      copyToClipboard('#final-text')
    })
    button.innerHTML = 'Copiar'
    button.classList.add('button-white')
    finalTextSection.append(button)
  }
}

buttonEncrypt.addEventListener('click', event => {
  event.preventDefault()
  appendAnswer(encryptInput)
})

buttonDecrypt.addEventListener('click', event => {
  event.preventDefault()
  appendAnswer(decryptInput)
})
