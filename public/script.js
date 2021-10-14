// Script below is manipulating the API results to create the images and text via the DOM. 

axios.get('/results')
  .then((res) => {
    
    let profilesResults = res.data

    const imageResults = document.querySelector('.container')

    profilesResults.forEach((image) => {

      const resultDiv = document.createElement('div')
      resultDiv.classList.add("box")
      resultDiv.classList.add("content")
      const content = document.createElement('div')
      content.classList.add("image-container")
      content.classList.add("content")
      imageResults.appendChild(resultDiv)
      resultDiv.appendChild(content)
      const img = document.createElement('img')
      img.src = image.urls.small
      img.classList.add("content")
      img.classList.add("overlay")


      const personName = document.createElement('h3')
      const personEmail = document.createElement('p')

      personName.classList.add("profile-content")
      personEmail.classList.add("profile-content")
      personName.innerText = image.user.name
      personEmail.innerText = image.user.location

      const contactBtn = document.createElement('a')
      contactBtn.innerText = `Get in contact with ${image.user.first_name}`
      contactBtn.setAttribute('href', image.user.links.html);
      contactBtn.classList.add('email-link')
      contactBtn.classList.add('profile-content')

      content.appendChild(img)
      content.appendChild(personName)
      content.appendChild(personEmail)
      content.appendChild(contactBtn)

    })
  })