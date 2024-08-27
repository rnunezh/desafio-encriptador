function encryptText() {
    const inputText = document.getElementById('input-text').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('output-text').value = encryptedText;

     if (inputText.value = null) {
        document.querySelector('.output-message').textContent = 'Texto a encriptar';
    }
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('output-text').value = decryptedText;

    if (decryptedText.value = null) {
        document.querySelector('.output-message').textContent = 'Texto desencriptado';
    }
}
