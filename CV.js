function myfunction(adios) {
    let x = document.getElementById(adios);
    console.log(x)
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};