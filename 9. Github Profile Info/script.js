// Logic


// select form field and get the value of input
const form = document.querySelector('form');
const input = document.querySelector('#input');
let valueOfUser;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    valueOfUser = String(input.value);
    if (valueOfUser === '') {
        return alert('Please enter the github username')
    }
    fetchData();
})


// fetch data
let userData;
let createdAtdate;
let updatedAtdate;
const fetchData = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${valueOfUser}`);
        userData = await response.json();
        createdAtdate = new Date(userData.created_at).toLocaleDateString();
        updatedAtdate = new Date(userData.updated_at).toLocaleDateString();
    } catch (error) {
        console.log("E: " + error);
    }
    input.value = '';
    showLoader();
}

// showLoader
const showLoader =()=>{
    const loader = document.querySelector('.loaders');
    loader.style.display = 'block';
    setTimeout(()=>{
        loader.style.display = 'none';
        showData();
    },500);
}


// showData
const card = document.querySelector('.profile-card');
const showData = () => {
    card.innerHTML =
        `
        <img class="profileImg" src="${userData.avatar_url}" alt="">
        <p> <span>Name:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.name}</p>    
        <p> <span>Username:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.login}</p>    
        <p> <span>Followers:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.followers}</p>    
        <p> <span>Following:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.following}</p>    
        <p> <span>Public Repository:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.public_repos}</p>    
        <p> <span>Created at:</span> ${userData.message === 'Not Found' ? 'Not found' : createdAtdate}</p>    
        <p> <span>Updated at:</span> ${userData.message === 'Not Found' ? 'Not found' : updatedAtdate}</p>    
        <p> <span>Bio:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.bio}</p>    
        <p> <span>Location:</span> ${userData.message === 'Not Found' ? 'Not found' : userData.location}</p>    
        <p> <span>Twitter:</span> <a target='_blank' href="https://twitter.com/${userData.twitter_username}">${userData.twitter_username}</a></p>    
        <p> <span>Blog:</span> <a target='_blank' href="${userData.message === 'Not Found' ? 'Not found' : userData.blog}">${userData.blog}</a></p>    
        <p> <span>Github Profile:</span> <a target='_blank' href="${userData.html_url}">${userData.html_url}</a></p>
        <i class="fa-solid fa-xmark closeCard"></i> 
        `
    showModal();
}

// showModal
const showModal =()=>{
        // Logic to show modal when user clicks on profile image
        // card Img
        const profileImg = document.querySelector('.profileImg')
        // modal
        let modal = document.querySelector('.modal')


        // modal innerHTML
        modal.innerHTML =
            `
        <div class="pop-up">
        <img class="modalImg" src="${userData.avatar_url}" alt="">
        <i class="fa-solid fa-xmark closeModal" style="color: #ffffff;"></i>
        </div>
        `

        // eventListener to show modal
        profileImg.addEventListener('click', () => {
            modal.style.zIndex = '1'
        })
        
        // cross button for modal
        const crossIcon = document.querySelector('.closeModal');
        // eventListener to close modal
        crossIcon.addEventListener('click', () => {
            modal.style.zIndex = '-1';
        })   
        
        
        // cross button for card
        const crossBtnForCard = document.querySelector('.closeCard');
        // eventListener to close modal
        crossBtnForCard.addEventListener('click', () => {
           card.innerHTML = 
           `
           <p class="title">To display the information please enter the github username in the above field</p>
           `
        })     

}