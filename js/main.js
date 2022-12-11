
let form = document.getElementById('theForm');

form.addEventListener('submit',function(e){
    e.preventDefault()
    document.getElementById('maincard').style.display = 'none';
    document.getElementById('thankscard').style.display = '';
    let val = document.querySelector('input[name="number"]:checked').value
    document.getElementById('num').innerHTML = val;
})