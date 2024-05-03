const restaurants_data_path = "/demo data/restaurants.json"


const TopResults = ({ results }) => {
    //TODO to replace results here with real data
    results = 
        {
            "restaurants": [
                {
                    "blurhash": "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Asenneburgeri",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
                    "location": [
                        24.941325187683105,
                        60.169938852212965
                    ],
                    "name": "Social Burgerjoint Citycenter",
                    "online": false,
                    "tags": [
                        "hamburger",
                        "fries"
                    ]
                },
                {
                    "blurhash": "U8INy*D+KjIW%3pZ$yx[5T0Lv|_1.3m,0z9h",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Japanilaista ramenia parhaimmillaan",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81",
                    "location": [
                        24.941786527633663,
                        60.169934599421396
                    ],
                    "name": "Momotoko Citycenter",
                    "online": false,
                    "tags": [
                        "ramen",
                        "risotto"
                    ]
                },
                {
                    "blurhash": "UXJHswsy-n%0~T%Ka%NLNFjFxvNe%MRjM|ax",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Modernia gourmet-kebabia ",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5abcf2d270aae6000deacff0/9c21840f97e01f5c293eae0993b4faa2",
                    "location": [
                        24.94184732393478,
                        60.16993168083865
                    ],
                    "name": "D\u00f6ner Harju City",
                    "online": true,
                    "tags": [
                        "kebab",
                        "d\u00f6ner"
                    ]
                },
                {
                    "blurhash": "ULL;EN%4?c-Oys?wxuTJ?ujERQMxw[M{aeR4",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Viihtyis\u00e4 kiinalainen ravintola",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5cfa497902b535ee1c620fca/2c451d88fe96dc04d228dc4cd3dd23a5",
                    "location": [
                        24.94148075580597,
                        60.16990257838493
                    ],
                    "name": "Bi\u00e1ng! Citycenter",
                    "online": true,
                    "tags": [
                        "chinese",
                        "asian"
                    ]
                },
                {
                    "blurhash": "UELWIZ-n~pxt?a9tbwIpx^o#OoRkbsD%tP^P",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Trendikk\u00e4\u00e4t havaijilaiset poket",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5b8e46f4c9d2f5000b8216fa/4c97474360f98231b7bb1f90e430855d",
                    "location": [
                        24.941325187683105,
                        60.16988548380842
                    ],
                    "name": "Hey Poke Citycenter",
                    "online": false,
                    "tags": [
                        "poke",
                        "Hawaii"
                    ]
                },
                {
                    "blurhash": "UZP$~|R*o~tRyEM{V[f7?wRjVsV@IAozfhae",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Ilmi\u00f6m\u00e4isi\u00e4 sushiburritoja",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/57d7af84b7426f114912b2a1/75742ebe3c411262325c647a3acbd5b2",
                    "location": [
                        24.9400752782822,
                        60.1701494897883
                    ],
                    "name": "Soma Food, Kaivokatu",
                    "online": true,
                    "tags": [
                        "sushi",
                        "burrito"
                    ]
                },
                {
                    "blurhash": "UdI3~;Ip0}Rk={bH9]oJW.RjnlbvNeV@xtbI",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Tuoretta ja laadukasta sushia",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5ad7050b879256000b477e16/705b6f09e5e4b33779b45afffb994cac",
                    "location": [
                        24.94049370288849,
                        60.16995648878383
                    ],
                    "name": "Luckiefun's Kaivokatu",
                    "online": false,
                    "tags": [
                        "sushi",
                        "japanese"
                    ]
                },
                {
                    "blurhash": "U8Q9.m.TDitlysx]9u%2?bVX-TIn_2gP?bxu",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Urbaani citysuunnistaja keskustassa",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5afebf92317288000b8e4c17/24797b40bc5f136cb5605f4de79c0a42",
                    "location": [
                        24.941813349723816,
                        60.16974835162762
                    ],
                    "name": "Sushibar + Wine City",
                    "online": false,
                    "tags": [
                        "sushi",
                        "japanese"
                    ]
                },
                {
                    "blurhash": "UEKTMO_N@XpINfXn%Mxu_2kV9FtSi{V@RORj",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Maukkaat ja reilut pitat, salaatit ja falafelit",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5de0e07c8995dc9c25304c9f/7680cf2cffae35b7302e3a91b65ce8f5",
                    "location": [
                        24.93900239467621,
                        60.1707249837842
                    ],
                    "name": "Fafa's Sokos",
                    "online": true,
                    "tags": [
                        "street food",
                        "pita"
                    ]
                },
                {
                    "blurhash": "UEKTMO_N@XpINfXn%Mxu^+kV9FtSi{V@RORj",
                    "city": "Helsinki",
                    "currency": "EUR",
                    "delivery_price": 390,
                    "description": "Herkulliset pitaleiv\u00e4t ja falafelit",
                    "image": "https://prod-wolt-venue-images-cdn.wolt.com/5996b207ac09660afae98373/7680cf2cffae35b7302e3a91b65ce8f5",
                    "location": [
                        24.9417033791542,
                        60.169590913672
                    ],
                    "name": "Fafa's Cityk\u00e4yt\u00e4v\u00e4",
                    "online": false,
                    "tags": [
                        "pita",
                        "falafel"
                    ]
                }
            
        ]}
    
    
    return(
        <div>
            <h1 className="top-choices-title">Top Choices</h1>
            <div id="top-choices" className="grid grid-cols-4 gap-4 top-list">
                {results.restaurants.map((restaurant, index) => (

                    <div key={restaurant.blurhash} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={restaurant.image} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{restaurant.name}</h5>
                            </a>
                        </div>
                    </div>


                ))}
                
            </div>
        </div>
    )
}



export default TopResults;