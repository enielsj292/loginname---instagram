        window.addEventListener('scroll', function(){
            var distance = window.pageYOffset || document.documentElement.scrollTop
            var header = document.querySelector('header')
            if(distance > 200){
                header.classList.add('header--small')
            } else {
                header.classList.remove('header--small')
            }
        })

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

             
        
