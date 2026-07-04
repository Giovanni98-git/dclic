
      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      // Active nav link
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
          }
        });
      });

      // Skill bars animation
      const animateSkills = () => {
        const skillBars = document.querySelectorAll(".skill-progress");
        skillBars.forEach((bar) => {
          const progress = bar.getAttribute("data-progress");
          bar.style.width = progress + "%";
        });
      };

      const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills();
          }
        });
      });

      const skillsSection = document.querySelector("#competences");
      if (skillsSection) {
        skillsObserver.observe(skillsSection);
      }

      // Project details
      const projectDetails = {
        "rust-api": {
          title: "API REST en Rust avec OCI ZOT Registry",
          description:
            "Développement d'une API REST performante en Rust utilisant le framework actix-web pour interagir avec OCI ZOT Registry.",
          details:
            "<strong>Technologies :</strong> Rust, Actix-web, WebAssembly, OCI Registry<br><strong>Fonctionnalités :</strong><br>- Stockage et récupération de fichiers WebAssembly<br>- Optimisation de la performance des requêtes<br>- Sécurité renforcée des échanges de données<br>- Gestion asynchrone des opérations",
        },
        "gestion-stocks": {
          title: "Projet Freelance : Gestion de Stocks",
          description:
            "Développement d'une API de gestion de stocks pour un particulier avec interface complète de gestion.",
          details:
            "<strong>Date :</strong> Octobre 2025<br><strong>Technologies :</strong> Node.js, PostgreSQL, Prisma ORM<br><strong>Fonctionnalités :</strong><br>- CRUD complet pour les produits<br>- Gestion des stocks en temps réel<br>- Système d'alertes de stock bas<br>- Rapports et statistiques",
        },
        fazioprod: {
          title: "Projet Freelance : Fazioprod",
          description:
            "Conception et développement d'une API backend complète pour le site www.fazioprod.com.",
          details:
            "<strong>Date :</strong> Juillet 2025<br><strong>Technologies :</strong> Django, Django REST Framework, PostgreSQL<br><strong>Fonctionnalités :</strong><br>- API RESTful complète<br>- Authentification JWT<br>- Gestion de contenu dynamique<br>- Optimisation des performances",
        },
        "smart-contract": {
          title: "Smart Contract Solidity",
          description:
            "Développement d'un smart contract sur la blockchain Ethereum avec le framework Hardhat.",
          details:
            "<strong>Technologies :</strong> Solidity, Hardhat, Ethereum<br><strong>Fonctionnalités :</strong><br>- Contrat intelligent sécurisé<br>- Tests unitaires complets<br>- Déploiement sur testnet<br>- Documentation complète",
        },
        "php-api": {
          title: "API PHP sans Framework",
          description:
            "Développement d'une API REST complète en PHP natif sans utilisation de framework.",
          details:
            "<strong>Technologies :</strong> PHP, MySQL<br><strong>Fonctionnalités :</strong><br>- Routing personnalisé<br>- Gestion des requêtes HTTP<br>- Authentification sécurisée<br>- Validation des données",
        },
        "django-api": {
          title: "API Django REST Framework",
          description:
            "Création d'une API complète avec Django Rest Framework pour diverses applications web.",
          details:
            "<strong>Technologies :</strong> Python, Django, DRF, PostgreSQL<br><strong>Fonctionnalités :</strong><br>- Architecture RESTful<br>- Authentification JWT<br>- Permissions personnalisées<br>- Documentation API automatique",
        },
      };

      function showProject(projectId) {
        const modal = document.getElementById("projectModal");
        const project = projectDetails[projectId];

        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalDescription").textContent =
          project.description;
        document.getElementById("modalDetails").innerHTML = project.details;
        

        modal.style.display = "block";
      }

      function closeModal() {
        document.getElementById("projectModal").style.display = "none";
      }

      window.onclick = function (event) {
        const modal = document.getElementById("projectModal");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      // Form validation
      function validateForm() {
        const prenom = document.getElementById("prenom").value.trim();
        const nom = document.getElementById("nom").value.trim();
        const sujet = document.getElementById("sujet").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!prenom || !nom || !sujet || !message) {
          alert("Veuillez remplir tous les champs du formulaire.");
          return false;
        }

        if (message.length < 10) {
          alert("Votre message doit contenir au moins 10 caractères.");
          return false;
        }

        alert(
          `Merci ${prenom} ${nom} !\n\nVotre message a été envoyé avec succès.\n\nSujet : ${sujet}\n\nJe vous répondrai dans les plus brefs délais.`,
        );

        // Reset form
        document.getElementById("prenom").value = "";
        document.getElementById("nom").value = "";
        document.getElementById("sujet").value = "";
        document.getElementById("message").value = "";

        return true;
      }

      function downloadCV() {
        alert(
          "Fonctionnalité de téléchargement du CV à implémenter avec votre fichier CV.",
        );
        event.preventDefault();
      }

      // Add hover effects to project cards
      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-5px)";
        });
        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
        });
      });