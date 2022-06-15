function perform(){
    let showingColor = document.getElementById('clolor');
    const color =showingColor.innerText ==='red' ? 'green' : 'red';
    showingColor.innerHTML =color;
    document.getElementById('flipper').style.backgroundColor = color;
}