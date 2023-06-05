let countiresHTML = document.getElementById("countries");
let countries = [
    {
        name: "Azerbaijan",
        flag: "https://flagcdn.com/ax.svg",
        population: 15000,
        region: "Asia"
    },
    {
        name: "Georgia",
        flag: "https://flagcdn.com/ge.svg",
        population: 15000,
        region: "Europe"
    },

    {
        name: "England",
        flag: "https://flagcdn.com/al.svg",
        population: 15000,
        region: "Europe"
    },
    {
        name: "Antraktida",
        flag: "https://flagcdn.com/ax.svg",
        population: 15000,
        region: "Oceania"
    },
    {
        name: "America",
        flag: "https://flagcdn.com/ax.svg",
        population: 15000,
        region: "Americas"
    },
    {
        name: "Canada",
        flag: "https://flagcdn.com/ge.svg",
        population: 15000,
        region: "Americas"
    },

    {
        name: "Africa",
        flag: "https://flagcdn.com/al.svg",
        population: 15000,
        region: "Africa"
    },
    {
        name: "Madacascar",
        flag: "https://flagcdn.com/ax.svg",
        population: 15000,
        region: "Africa"
    },
    {
        name: "Russia",
        flag: "https://flagcdn.com/ax.svg",
        population: 15000,
        region: "Asia"
    },
    {
        name: "Turkey",
        flag: "https://flagcdn.com/ge.svg",
        population: 15000,
        region: "Asia"
    },

    {
        name: "Italy",
        flag: "https://flagcdn.com/al.svg",
        population: 15000,
        region: "Europe"
    },
    {
        name: "Germany",
        flag: "https://flagcdn.com/ax.svg",
        population: 15000,
        region: "Europe"
    },

];
let search = document.querySelector(".search");
let btn2 = document.querySelector(".btn2");
let regionSelect = document.querySelector("#regionSelect");
let n = 4





function show() {
    countries.slice(0, n).map(
        (element) =>
        (countiresHTML.innerHTML += `
                <div class="country">
                        <div class="img">
                            <img src="${element.flag}" alt="">
                            </div>
                        <h2 class="countryName">
                            <h2>${element.name}</h2>
                        <h3>Population: ${element.population}</h3>
                    </div>
                    `)
    );
}
btn2.onclick = function () {
    countiresHTML.innerHTML = ""
    n += 4;
    show()
    if (n == countries.length) {
        btn2.style.display = "none"
    }
}

function regionSelector() {
    let arr = []
    if (regionSelect.value == "all") {
        countiresHTML.innerHTML = " "
        show()
        return
    }
    else arr = countries.filter((elem) => elem.region == regionSelect.value);
    countiresHTML.innerHTML = "";
    arr.map(
        (elem) =>
        (countiresHTML.innerHTML += `
                    <div class="country">
                        <div class="img">
                            <img src="${elem.flag}" alt="">
                        </div>
                        <h2 class="countryName">
                            <h2>${elem.name}</h2>
                        <h3>Population: ${elem.population}</h3>
                    </div>
                    `)
    );
}
regionSelector()
search.oninput = function () {
    countiresHTML.innerHTML = ""
    countries.filter((element) => element.name.startsWith(search.value)).map(
        (element) =>
        (countiresHTML.innerHTML += `
        <div class="country">
                        <div class="img">
                            <img src="${element.flag}" alt="">
                        </div>
                        <h2 class="countryName">
                            <h2>${element.name}</h2>
                            <h3>Population: ${element.population}</h3>
                            </div>

                            `)
    );
}




