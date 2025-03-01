document.getElementById("randonBg-btn").addEventListener("click", function(){
    function randomBg(){
        let latter = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++){
            color += latter[Math.floor(Math.random() * 16)];
        }
        return color;

    }
    document.body.style.backgroundColor = randomBg();
});