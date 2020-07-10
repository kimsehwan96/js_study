document.body.innerHTML = '<div id="a"> abc </div>';
function cbFunc(x) {
    console.log(this);
}

document.getElementById('a').addEventListener('click', cbFunc);

$('#a').on('click', cbFunc)