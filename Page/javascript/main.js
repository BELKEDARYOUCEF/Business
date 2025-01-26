function validationForm(event){
    event.preventDefault();
    
    let usr = document.getElementById("UserName").value;
    let pwd = document.getElementById("Password").value;

    if (usr !== "Business Model") {
        alert("Le pseudo est incorrect.");
        return false;
    }

    if (pwd !== "Business Model") {
        alert("Le mot de passe est incorrect.");
        return false;
    }

    if (pwd === "Business Model" && usr === "Business Model") {
        window.location.href = "./Page/MMG.html";
    }

    return true;
}