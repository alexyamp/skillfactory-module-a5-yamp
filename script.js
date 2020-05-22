const render = data => {
    const dataText  = `
        <div class="data-text" id="data-text">${data.text}</div>
    `
    var $dataText = $(dataText);

    $(".btn-primary").click(function() {
        $('.container').append($dataText);
        $(".btn-success").show();
    });

    $(".btn-success").click(function() {
        let var1 = document.getElementById("var1").value;
        let var2 = document.getElementById("var2").value;
        let var3 = document.getElementById("var3").value;
        let var4 = document.getElementById("var4").value;
        let var5 = document.getElementById("var5").value;
        let var6 = document.getElementById("var6").value;
        let speach = document.getElementById("speach").value;
        let currentText = document.getElementById("data-text").textContent;

        if (var1 && var2 && var3 && var4 && var5 && var6 && speach) {
            currentText = currentText.replace(/\{var1\}/gi, var1); 
            currentText = currentText.replace(/\{var2\}/gi, var2);
            currentText = currentText.replace(/\{var3\}/gi, var3);
            currentText = currentText.replace(/\{var4\}/gi, var4);
            currentText = currentText.replace(/\{var5\}/gi, var5);
            currentText = currentText.replace(/\{var6\}/gi, var6);
            currentText = currentText.replace(/\{speach\}/gi, speach);
            document.getElementById("data-text").textContent = currentText;
        } else {
            $('#myModal').modal('show');
        }
    });
}

$.getJSON( 
    "https://api.jsonbin.io/b/5e905926172eb643896166e7", 
    function(data) {
        render(data);
        console.log(data);
    }
);





