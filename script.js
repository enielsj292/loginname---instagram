        window.addEventListener('scroll', function(){
            var distance = window.pageYOffset || document.documentElement.scrollTop
            var header = document.querySelector('header')
            if(distance > 200){
                header.classList.add('header--small')
            } else {
                header.classList.remove('header--small')
            }
        })

        function addClickEvents(){
            //Add click events to all the images
            const images = document.querySelectorAll('.image')
            images.forEach(function(image, index){
                //Add a click event to each image
                //have the click event console.log(index)
                image.addEventListener('click',function(e){
                    e.preventDefault() //stop the click event from refreshing
                    const source = this.querySelector('img').src
                    const id = source.split('=')[1]
                    console.log(id)
                    showFullImage(id)
                })
            })
        }
        
        //Add Error Events to the images incase the image is not available
        function addErrorEvents(){
            //Find the img tags inside the .image
            //Loop through them and add an "error" event
            //console.log('ERROR!') when that event occurs
            const images = document.querySelectorAll('.image img')
            images.forEach(function(image, index){
                image.addEventListener('error',function(){
                    this.src = `http://unsplash.it/600/?image=123`
                })
            })
        }

        //function showFullImage (id) {
            const showFullImage = id => {
                const fullContainer = document.querySelector('.full')  //the div
                const fullImage = fullContainer.querySelector('img')  //the image in the div
                //Set the src of the fullImage to be a bigger version
                fullImage.src = `http://unsplash.it/600/?image=${id}`
                //Remove the hidden class from the fullContainer to show it
                fullContainer.classList.remove('hidden')
            }
        
        //Add event to the .full DIV so it adds the hidden class when clicked
        // 1) Declare variable for .full DIV
        // 2) Add click event
        // 3) Add hidden class when clicked
            const fullContainer = document.querySelector('.full')  //the div
             fullContainer.addEventListener('click',function(){
                this.classList.add('hidden')
             })

        //Load Data from http://unsplash.it/list
        //Then convert to Json
        //Then grab 20 random images
        //Then add images to HTML and call addClickEvents()
                //Use fetch() to load remote data
        fetch('http://unsplash.it/list')
            .then(result => {
                return result.json() //convert text into JSON data
            })
            .then(result => {
               //Now that we have the data, we can work with it
               //Initializing an empty array to hold our random numbers
               let randoms = []
               //Loop 20 times, each time putting a random number in the array
               for(let i=0; i<20; i++) {
                   //Generate Random: Math.round(Math.random() * 30)
                   randoms.push( Math.round(Math.random()*result.length) )
               }
               //Make an images array to store our random images
               let images = result.filter(image => {
                   return randoms.includes(image.id)
               })
               populateImages(images)
               addClickEvents()
               addErrorEvents()
            })

            //This function will add all the images we loaded remotely to the HTML page
            function populateImages(imageArray){
                //Need a variable for the image container
                const imageContainer = document.querySelector('.images .inner')
                //Then we need to loop through the imageArray
                //maybe just console.log something to make sure it is working
                imageArray.forEach(function(image, index){
                    const html = ` <a href="" class="image">
                <img src="http://unsplash.it/300/?image=${image.id}" alt="${image.author}">
                <span class="image__cover">View Image</span>
                </a>`
                    imageContainer.innerHTML += html
                })
            }

            /*
             <a href="" class="image">
                <img src="http://unsplash.it/300/?image=45" alt="">
                <span class="image__cover">View Image</span>
            </a>
            */

            /*
            .catch(error => {
                console.log('something went wrong!!!')
            })
           
            */
