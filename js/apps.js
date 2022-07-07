$(document).ready(()=>{
    $("#btn-search").on("click", () =>{
        var kata = $("#input_kata").val();
            halaman = document.getElementById("search")
            // console.log(halaman) 
            $.getJSON("https://kbbi-api-amm.herokuapp.com/search?q="+kata, (json) => {
                // console.log(json)
                var judul = json["data"]["resultLists"][0]["kata"];
                    arti  = json["data"]["resultLists"][0]["arti"];
                     i = 0
                    while (i < arti.length) {
                        halaman.innerHTML += ('<div class="card p-1 shadow mt-2 mb-3"><div class="card-body"><b class="text-danger">'+judul+'</b><p>'+arti[i]+'</p></div></div>')
                        i++
                    }
            })
    })

    $("#hapus").on("click", () =>{
        $(".card").remove()
    })


})
    