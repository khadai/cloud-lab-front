function get_all_data() {
    $.get("https://virtual-rarity-259009.appspot.com/api/vendings/", render_page);
}

function render_page(result) {
    console.log(result);
    for (var i in result) {
        
        vending_name = result[i]['vending_name'];
        lat =  result[i]['lat'];
        lng =  result[i]['lng'];
        trademarks =  result[i]['trademarks'];
        address =  result[i]['address'];
        image_url =  result[i]['image_url'];
        available_goods = result[i]["available_goods"];
        sold_goods =  result[i]["sold_goods"];

        htmlToInput = insertValues(image_url, vending_name, address,lat,lng,trademarks, available_goods, sold_goods);

        var p = document.getElementById("in-table");
        var newElement = document.createElement('div');
        newElement.innerHTML = htmlToInput;
        p.appendChild(newElement);
        var div = document.getElementById("in-table");
        div.insertBefore(newElement, div.lastChild.nextSibling);
    }
}


function addData() {
    var d = JSON.stringify({
        vending_name: document.getElementById("vending_name").value,
        lat: document.getElementById("lat").value,
        lng: document.getElementById("lng").value,
        address: document.getElementById("address").value,
        // image_url: document.getElementById("image_url").value,
        available_goods: document.getElementById("available_goods").value,
        sold_goods: document.getElementById("sold_goods").value,
        trademarks: document.getElementById("trademarks").value
    });
    // $.post("http://virtual-rarity-259009.appspot.com/api/vendings/",
    //    d,
    //    function(response){
    //        console.log(response);
    //    }
    //     );

        $.ajax({url: 'http://virtual-rarity-259009.appspot.com/api/vendings/',
        type: 'POST',
        data: {d},
        // dataType: 'json',
        success: function(data){
        alert("success");
        console.log(data);
        },error: function (xhr, ajaxOptions, thrownError) {alert("ERROR:" + xhr.responseText+" - "+thrownError);}
        });

    // $.ajax({
    //     async: false,
    //     method: 'POST',
    //     dataType:'json',
    //     data: d,
    //     url: "http://virtual-rarity-259009.appspot.com/api/vendings",
    // });

    console.log(d);
    // document.getElementById("vending_name").value = "";
    // document.getElementById("filling").value = "";
    // document.getElementById("export").value = "";
}

function insertValues(image_url, vending_name, address,lat,lng,trademarks, available_goods, sold_goods){
    html = `<div>
<div style="width: 200px; float: left; height: 215px;" >
    <img src="`+image_url+`" alt="vending" width="200px" height="215px">
</div>
<div>
    <h1>`+vending_name+`</h1>
    <h3><i class="fas fa-map-marked-alt"></i> `+address+`</h3>
    <h3><i class="fas fa-map-marker-alt"></i> `+lat+', '+lng+`</h3>
    <h3><i class="far fa-copyright"></i> `+trademarks+`</h3>
    <h3><i class="fas fa-stream"></i> `+available_goods+` pcs. left</h3>
    <h3><i class="fas fa-check-circle"></i> `+sold_goods+` pcs. sold</h3>
</div>
<br>
</div> `;
    return html;
}
