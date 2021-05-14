const cardCont = document.querySelector('#card-container')
let posts = []

window.onload = () => {
    fetchPosts()
}

async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json()
    }).then(data => {
        posts = data
        addPostToCards(posts)
    }).catch(error => console.log(error))
}

function addPostToCards() {
    posts.forEach( post => {
        let card_data = `
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-stacked">
                        <div class="card-content">
                            <h4>${post.title}</h4>
                            <p>${post.body}</p>
                        </div>
                        <div class="card-action">
                            <a href="blog-page.html?id=${post.id}">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `
        cardCont.innerHTML += card_data
    })
}
