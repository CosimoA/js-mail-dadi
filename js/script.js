// Dichiaro variabile preesistente HTML
const buttonValue = document.getElementById("btnpush");

// Lista mail preesistente nel Database
const mailInvitati = ["cosimo@cosimo.com", "max@max.com", "simone@simone.com"];
console.log(mailInvitati);

buttonValue.addEventListener("click", function(){
    const emailUser = document.getElementById("usermail").value;
    let invitato = false;
    //controlla se la mail esiste nel database
    for (let i = 0; i < emailUser.length; i++) {
        // prendo gli elementi dell'array
        const element = mailInvitati[i];

        // Confronto gli elementi con l'imput dell'user
        if (element === emailUser){
            invitato = true;
            console.log("La persona è presente nella lista");
        } else {
            console.log("La persona NON è presente nella lista");
        }
    }
    
    // output risultato
    if (invitato === true){
        console.log("Puoi entrare alla festa!");
    } else {
        console.log("Non puoi entrare alla festa!");
    }
});

    

