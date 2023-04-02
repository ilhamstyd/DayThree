function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == "") {
        return alert("name harus diisi")
    } else if(email == ""){
        return alert("email harus diisi")
    } else if(phone == ""){
        return alert("telepon harus diisi")
    } else if(subject == ""){
        return alert("pesan harus diisi")
    } else if(message == ""){
        return alert("pesan harus diisi")
    } 
        
    const emailReceiver = "ilhamsetyadji28@gmail.com"
    let a = document.createElement('a')
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}
    &su=${subject}&body=Halo Nama Saya ${name},pesan saya untuk kamu ${message}, bisakah anda menghubungi saya di ${phone}`
    a.click();
  
    let data = {
        nama: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    }
    
    console.table(data)
}
