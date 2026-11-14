const form = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const profile = document.getElementById("profile");


function getUser(username){
    
    // 1. Récupérer les informations depuis GitHub https://api.github.com/users/${username}
     
     // 2. Vérifier la réponse HTTP
    
     // 3. Récupérer les données
    

   }


   // 4. Afficher le profil
function displayUser(user) {

    profile.innerHTML = `
        <div class="profile-card">

            <img
                class="avatar"
                src="${user.avatar_url}"
                alt="Photo de profil"
            >

            <h2>${user.name || user.login}</h2>

            <p>@${user.login}</p>

            <p>${user.bio || "Aucune biographie disponible"}</p>

            <div class="stats">
                <div class="stat">
                    <strong>${user.public_repos}</strong>
                    Repositories
                </div>

                <div class="stat">
                    <strong>${user.followers}</strong>
                    Followers
                </div>

                <div class="stat">
                    <strong>${user.following}</strong>
                    Following
                </div>
            </div>

            <a
                class="profile-link"
                href="${user.html_url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Voir le profil GitHub
            </a>

        </div>
    `;
}

// 5. Gérer la recherche



