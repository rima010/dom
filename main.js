var remove = document.getElementsByClassName('btn')
for (var i = 0; i < remove.lenght; i++) {
    var button = remove[i]
    button.addEventListener('click',function(event) {
        var buttonClicked = event.target
        buttonClicked.parenElelmrnt.parentElement.parentElement.remove()
    })
}