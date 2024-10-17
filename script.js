const button =document.querySelector('button')
        
button.addEventListener('click' , () => {
    if(button.innerHTML === 'Subscribe') {
        button.innerHTML = "Subscribed"
        button.classList.add('subcribed');
    } else {
        button.innerHTML = "Subscribe"
        button.classList.remove('subcribed');
    }
})

/*

LESSON OBJECTIVES 
1- AddEventListener.
2- DOM Styling.

*/