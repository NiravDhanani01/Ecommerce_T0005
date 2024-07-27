function contactDetails(event) {
    event.preventDefault()
    let infoName = document.querySelector("#name").value;
    let infoContact = document.querySelector("#contact").value;
    let infoEmail = document.querySelector("#email").value;
    let infoMessage = document.querySelector("#InfoMessage").value;
    
    if (!infoName || !infoContact || !infoEmail || !infoMessage) {
        alert("please Enter All field")
    }
    let obj = {
        infoName, infoContact, infoEmail, infoMessage
    }

    alert("Thak you For Your Response")
    localStorage.setItem('message',JSON.stringify(obj))
    document.querySelector("#name").value = ""
    document.querySelector("#contact").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#InfoMessage").value = ""
}