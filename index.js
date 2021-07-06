let data = []

const fetchData = () => {
    //verinin çekildiği yer
    fetch("/data.json")
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            //json'dan okunan verinin data array'ine atanması
            data = responseData;

            //veri geldikten sonra filtreleme butonu görünür olsun
            let filterButton = document.querySelector("#filterButton");
            filterButton.setAttribute("style", "");

            //verinin html içerisinde listelendiği fonksiyon
            listData(responseData);
        })


}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
            <span class='bold'>age:</span> ${element.age}
            <span class='bold'>isActive:</span> ${element.isActive}
        </li>
        `;
    })
}

//verinin filtrelenmesini sağlayan fonksiyon
//TODO

const filterData = () => {
    let filter;
    let isim = document.getElementsByClassName("filterfilterButton3");
    if (document.getElementsByClassName("filterButton2")[0].checked == true && document.getElementsByClassName("filterButton1")[0].checked == true) {
        filter = "both1";
    }else if (document.getElementsByClassName("filterButton2")[0].checked == true) {
        filter = "isActive";
    }else if (document.getElementsByClassName("filterButton1")[0].checked == true) {
        filter = "age"
    }else if (document.getElementsByClassName("filterButton2")[0].checked == true && document.getElementsByClassName("filterButton1")[0].checked == true && isim.value !="" ) {
        filter = "both2"
    }else {
        filter = "name";
    }
    console.log(filter)
    switch (filter) {
        case "age":
            filteredData1 = data.filter(element => element.age >= 18);
            listData(filteredData1);
            break;
        case "isActive":
            filteredData2 = data.filter(element => element.isActive === true);
            listData(filteredData2);
            break;
        case "name":
            filteredData3 = data.filter(element => element.name.substr(0, 1) == document.getElementsByClassName('filterButton3')[0].value);
            listData(filteredData3);
            break;
        case "both1":
            filteredData4 = data.filter(element => element.age >= 18 && element.isActive === true);
            listData(filteredData4);
            break;
        case "both2":
            filterData5 = data.filter(element => element.age >= 18 && element.isActive === true && element.name[0] === isim.value);
            listData(filteredData5);
            break;
        default:
            break;
    }
}