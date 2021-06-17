function generateCurryImage() {
    const curryImages = [ 
        {
            src:"./assets/curry1.png",
            width: "722",
            height: "366"
        },
        {
            src:"./assets/curry2.png",
            width: "1200",
            height: "675"
        },
        {
            src:"./assets/curry3.png",
            width: "1280",
            height: "720"
        },
        {
            src:"./assets/curry4.gif",
            width: "520",
            height: "268"
        },
        {
            src:"./assets/curry5.gif",
            width: "1280",
            height: "720"
        },
        {
            src:"./assets/curry6.gif",
            width: "500",
            height: "266"
        }
    ];

    let newImage;
    
    // find the length of the array of images
    let arrayLength = curryImages.length;
    let newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        newArray[i] = newImage;
        newArray[i].src = curryImages[i].src;
        newArray[i].width = curryImages[i].width;
        newArray[i].height = curryImages[i].height;
    }

    //create a random number
    function getRandomNum (min, max) {
        //generate and return a random number for the image being displayed
        imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
        return newArray[imgNo];
    }

    newImage = getRandomNum(0, newArray.length -1);

    //remove previous images    
    let images = document.getElementsById('curry-img');
    let l = images.length;
    for ( let p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }

    // display new random image
    document.getElementById('img-container').appendChild(newImage);
}