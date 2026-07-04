function AjouterPays() {

    let nouveauPays = document.F.monpays.value.trim();

    if (nouveauPays === "") {
        alert("Veuillez saisir un pays.");
        return;
    }

    let liste = document.getElementById("lepays");

    for (let i = 0; i < liste.options.length; i++) {

        if (
            liste.options[i].text.toLowerCase() ===
            nouveauPays.toLowerCase()
        ) {
            alert("Ce pays existe déjà.");
            return;
        }
    }

    let option = document.createElement("option");

    option.text = nouveauPays;
    option.value = nouveauPays;

    liste.add(option);

    document.F.monpays.value = "";
}


function VerifierFormulaire() {

    let valide = true;

    document.getElementById("T2").innerHTML = "";
    document.getElementById("T3").innerHTML = "";
    document.getElementById("T4").innerHTML = "";

    document.getElementById("LNom").style.color = "black";
    document.getElementById("LAdresse").style.color = "black";
    document.getElementById("LPostal").style.color = "black";

    let nom = document.F.nom.value.trim();
    let adresse = document.F.adresse.value.trim();
    let postal = document.F.no_postal.value.trim();

    if (nom.length < 8 || nom.length > 20) {

        document.getElementById("T2").innerHTML =
            "<span class='erreur'>Le nom doit contenir entre 8 et 20 caractères.</span>";

        document.getElementById("LNom").style.color = "red";

        valide = false;
    }

    if (adresse.length < 20) {

        document.getElementById("T3").innerHTML =
            "<span class='erreur'>Adresse inférieure à 20 caractères.</span>";

        document.getElementById("LAdresse").style.color = "red";

        valide = false;
    }

    if (postal !== "3000" && postal !== "4000") {

        document.getElementById("T4").innerHTML =
            "<span class='erreur'>Code postal invalide.</span>";

        document.getElementById("LPostal").style.color = "red";

        document.F.localite.value = "";

        valide = false;
    }
    else {

        if (postal === "3000") {
            document.F.localite.value = "ville1";
        }

        if (postal === "4000") {
            document.F.localite.value = "ville2";
        }
    }

    return valide;
}


function AfficherAlert() {

    if (!VerifierFormulaire()) {

        alert(
            "Le formulaire contient des erreurs.\nVeuillez les corriger."
        );

        return;
    }

    let civilite = document.querySelector(
        'input[name="civilite"]:checked'
    ).value;

    let message =
        "Civilité : " + civilite +
        "\nNom : " + document.F.nom.value +
        "\nAdresse : " + document.F.adresse.value +
        "\nCode postal : " + document.F.no_postal.value +
        "\nLocalité : " + document.F.localite.value +
        "\nPays : " + document.F.pays.value;

    alert(message);
}


function Enregistrer() {

    if (!VerifierFormulaire()) {

        alert(
            "Veuillez corriger les erreurs avant l'enregistrement."
        );

        return;
    }

    let civilite = document.querySelector(
        'input[name="civilite"]:checked'
    ).value;

    let client = {

        civilite: civilite,
        nom: document.F.nom.value,
        adresse: document.F.adresse.value,
        postal: document.F.no_postal.value,
        localite: document.F.localite.value,
        pays: document.F.pays.value
    };

    localStorage.setItem(
        "client",
        JSON.stringify(client)
    );

    alert("Données enregistrées avec succès.");
}


function Recuperer() {

    let donnees = localStorage.getItem("client");

    if (donnees === null) {

        alert("Aucune donnée enregistrée.");
        return;
    }

    let client = JSON.parse(donnees);

    document.F.nom.value = client.nom;
    document.F.adresse.value = client.adresse;
    document.F.no_postal.value = client.postal;
    document.F.localite.value = client.localite;
    document.F.pays.value = client.pays;

    let radios = document.getElementsByName("civilite");

    for (let i = 0; i < radios.length; i++) {

        radios[i].checked =
            radios[i].value === client.civilite;
    }

    alert("Données récupérées avec succès.");
}