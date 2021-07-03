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
        console.log(filterButton);
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

const filterData = (filter) => {
    switch (filter) {
        case "isActive":
            let filteredData1 = data.filter(element => element.isActive === true);
            listData(filteredData1);
            break;
        case "age":
            let filteredData2 = data.filter(element => element.age >= 18);
            listData(filteredData2);
            break;
        case "name":
            let filteredData3 = data.filter(element => element.name     );
            listData(filteredData3);
            break;
        default:
            break;
    }
}