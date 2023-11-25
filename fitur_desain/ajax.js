let keyword = document.getElementById('keyword');
var container = document.getElementById('container');

keyword.addEventListener('keyup', function (){
    //console.log(keyword.value);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
           // console.log(xhr.responseText);
            container.innerHTML = xhr.responseText;
        }
    }

    xhr.open('GET','../ajax/coba.html', true);
    xhr.send();
});