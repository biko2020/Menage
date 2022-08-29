const devisForm = document.querySelector('.rd-mailform');

let nom = document.getElementById('devisName');
let email = document.getElementById('devisEmail');
let telephone = document.getElementById('devisTelephone');
let codepostal = document.getElementById('devisCodepostal');
let services = document.getElementById('devisServices');
let moment = document.getElementById('devisMomentcontact');
let type = document.getElementById('devisTypemenage');
let message = document.getElementById('devisMessage');

devisForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  
   let formData = {
    name : nom.value,
    email: email.value,
    telephone: telephone.value,
    codepostal : codepostal.value,
    services: services.value,
    moment: moment.value,
    type : type.value,
    message: message.value

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/devis');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      console.log(xhr.responseText);
      if(xhr.responseText == 'success'){
        alert('Merci. Votre demande de devis a bien été envoyé, nous vous répondrons rapidement. ');
        nom.value = '';
        email.value = '';
        telephone.value = '';
        codepostal.value = '';
        services.value = '';
        moment.value =  '';
        type.value = '';
        message.value = '';
      } else {
        alert('error..!: demande non envoyer')
      }
    }
    xhr.send(JSON.stringify(formData))
});
 
