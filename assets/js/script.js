function Switch() {
    const content = document.getElementById('text')

    if (content.textContent.includes('projects')) {
        content.textContent = 'Show profiles'
        return showProjects()
    }

    content.textContent = 'Show projects'
    showProfiles()
}

function showProjects() {
    const contents = document.getElementById('contents')

    contents.innerHTML =
    '<a class="icon" href="https://rmly.dev"><span class="tooltip">Official Website</span><i class="far fa-check-circle"></i></a>&nbsp;' +
    '<a class="icon" href="https://xzx.ro"><span class="tooltip">URL Shortener</span><i class="fas fa-rocket"></i></a>&nbsp;' +
    '<a class="icon" href="https://i.rmly.dev"><span class="tooltip">ShareX Uploader</span><i class="far fa-file-image"></i></a>&nbsp;' +
    '<a class="icon" href="https://api.rmly.dev"><span class="tooltip">Reverse DNS API</span><i class="fas fa-cogs"></i></a>&nbsp;' +
    '<a class="icon" href="https://discord.rmly.dev"><span class="tooltip">My Discord bot</span><i class="fab fa-discord"></i></a>&nbsp;'
}

function showProfiles() {
    const contents = document.getElementById('contents')

    contents.innerHTML =
    '<a class="icon" href="https://github.com/Rmlyy"><span class="tooltip">Rmlyy</span><i class="fab fa-github"></i></a>&nbsp;' +
    '<a class="icon" href="https://discord.rmly.dev"><span class="tooltip">Rmly#3210</span><i class="fab fa-discord"></i></a>&nbsp;' +
    '<a class="icon" href="https://www.youtube.com/Rmlyy"><span class="tooltip">Rmlyy</span><i class="fab fa-youtube"></i></a>&nbsp;' +
    '<a class="icon" href="https://open.spotify.com/user/fajpvx1000t1piqsg9rx2gucn"><span class="tooltip">Rmly</span><i class="fab fa-spotify"></i></a>&nbsp;' +
    '<a class="icon" href="https://twitter.com/RmlyTheDev"><span class="tooltip">RmlyTheDev</span><i class="fab fa-twitter"></i></a>&nbsp;' +
    '<a class="icon" href="mailto:hello@rmly.dev"><span class="tooltip">hello @ rmly.dev</span><i class="far fa-envelope"></i></a>&nbsp;'
}
