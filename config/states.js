const dataState = [
        {
            "name": "Badakhshan",
            "state_code": "BDS",
            "country_code": "AF"
        },
        {
            "name": "Badghis",
            "state_code": "BDG",
            "country_code": "AF"
        },
        {
            "name": "Baghlan",
            "state_code": "BGL",
            "country_code": "AF"
        },
        {
            "name": "Balkh",
            "state_code": "BAL",
            "country_code": "AF"
        },
        {
            "name": "Bamyan",
            "state_code": "BAM",
            "country_code": "AF"
        },
        {
            "name": "Daykundi",
            "state_code": "DAY",
            "country_code": "AF"
        },
        {
            "name": "Farah",
            "state_code": "FRA",
            "country_code": "AF"
        },
        {
            "name": "Faryab",
            "state_code": "FYB",
            "country_code": "AF"
        },
        {
            "name": "Ghazni",
            "state_code": "GHA",
            "country_code": "AF"
        },
        {
            "name": "Ghōr",
            "state_code": "GHO",
            "country_code": "AF"
        },
        {
            "name": "Helmand",
            "state_code": "HEL",
            "country_code": "AF"
        },
        {
            "name": "Herat",
            "state_code": "HER",
            "country_code": "AF"
        },
        {
            "name": "Jowzjan",
            "state_code": "JOW",
            "country_code": "AF"
        },
        {
            "name": "Kabul",
            "state_code": "KAB",
            "country_code": "AF"
        },
        {
            "name": "Kandahar",
            "state_code": "KAN",
            "country_code": "AF"
        },
        {
            "name": "Kapisa",
            "state_code": "KAP",
            "country_code": "AF"
        },
        {
            "name": "Khost",
            "state_code": "KHO",
            "country_code": "AF"
        },
        {
            "name": "Kunar",
            "state_code": "KNR",
            "country_code": "AF"
        },
        {
            "name": "Kunduz Province",
            "state_code": "KDZ",
            "country_code": "AF"
        },
        {
            "name": "Laghman",
            "state_code": "LAG",
            "country_code": "AF"
        },
        {
            "name": "Logar",
            "state_code": "LOG",
            "country_code": "AF"
        },
        {
            "name": "Nangarhar",
            "state_code": "NAN",
            "country_code": "AF"
        },
        {
            "name": "Nimruz",
            "state_code": "NIM",
            "country_code": "AF"
        },
        {
            "name": "Nuristan",
            "state_code": "NUR",
            "country_code": "AF"
        },
        {
            "name": "Paktia",
            "state_code": "PIA",
            "country_code": "AF"
        },
        {
            "name": "Paktika",
            "state_code": "PKA",
            "country_code": "AF"
        },
        {
            "name": "Panjshir",
            "state_code": "PAN",
            "country_code": "AF"
        },
        {
            "name": "Parwan",
            "state_code": "PAR",
            "country_code": "AF"
        },
        {
            "name": "Samangan",
            "state_code": "SAM",
            "country_code": "AF"
        },
        {
            "name": "Sar-e Pol",
            "state_code": "SAR",
            "country_code": "AF"
        },
        {
            "name": "Takhar",
            "state_code": "TAK",
            "country_code": "AF"
        },
        {
            "name": "Urozgan",
            "state_code": "URU",
            "country_code": "AF"
        },
        {
            "name": "Zabul",
            "state_code": "ZAB",
            "country_code": "AF"
        },
        {
            "name": "Berat County",
            "state_code": "01",
            "country_code": "AL"
        },
        {
            "name": "Berat District",
            "state_code": "BR",
            "country_code": "AL"
        },
        {
            "name": "Bulqizë District",
            "state_code": "BU",
            "country_code": "AL"
        },
        {
            "name": "Delvinë District",
            "state_code": "DL",
            "country_code": "AL"
        },
        {
            "name": "Devoll District",
            "state_code": "DV",
            "country_code": "AL"
        },
        {
            "name": "Dibër County",
            "state_code": "09",
            "country_code": "AL"
        },
        {
            "name": "Dibër District",
            "state_code": "DI",
            "country_code": "AL"
        },
        {
            "name": "Durrës County",
            "state_code": "02",
            "country_code": "AL"
        },
        {
            "name": "Durrës District",
            "state_code": "DR",
            "country_code": "AL"
        },
        {
            "name": "Elbasan County",
            "state_code": "03",
            "country_code": "AL"
        },
        {
            "name": "Fier County",
            "state_code": "04",
            "country_code": "AL"
        },
        {
            "name": "Fier District",
            "state_code": "FR",
            "country_code": "AL"
        },
        {
            "name": "Gjirokastër County",
            "state_code": "05",
            "country_code": "AL"
        },
        {
            "name": "Gjirokastër District",
            "state_code": "GJ",
            "country_code": "AL"
        },
        {
            "name": "Gramsh District",
            "state_code": "GR",
            "country_code": "AL"
        },
        {
            "name": "Has District",
            "state_code": "HA",
            "country_code": "AL"
        },
        {
            "name": "Kavajë District",
            "state_code": "KA",
            "country_code": "AL"
        },
        {
            "name": "Kolonjë District",
            "state_code": "ER",
            "country_code": "AL"
        },
        {
            "name": "Korçë County",
            "state_code": "06",
            "country_code": "AL"
        },
        {
            "name": "Korçë District",
            "state_code": "KO",
            "country_code": "AL"
        },
        {
            "name": "Krujë District",
            "state_code": "KR",
            "country_code": "AL"
        },
        {
            "name": "Kuçovë District",
            "state_code": "KC",
            "country_code": "AL"
        },
        {
            "name": "Kukës County",
            "state_code": "07",
            "country_code": "AL"
        },
        {
            "name": "Kukës District",
            "state_code": "KU",
            "country_code": "AL"
        },
        {
            "name": "Kurbin District",
            "state_code": "KB",
            "country_code": "AL"
        },
        {
            "name": "Lezhë County",
            "state_code": "08",
            "country_code": "AL"
        },
        {
            "name": "Lezhë District",
            "state_code": "LE",
            "country_code": "AL"
        },
        {
            "name": "Librazhd District",
            "state_code": "LB",
            "country_code": "AL"
        },
        {
            "name": "Lushnjë District",
            "state_code": "LU",
            "country_code": "AL"
        },
        {
            "name": "Malësi e Madhe District",
            "state_code": "MM",
            "country_code": "AL"
        },
        {
            "name": "Mallakastër District",
            "state_code": "MK",
            "country_code": "AL"
        },
        {
            "name": "Mat District",
            "state_code": "MT",
            "country_code": "AL"
        },
        {
            "name": "Mirditë District",
            "state_code": "MR",
            "country_code": "AL"
        },
        {
            "name": "Peqin District",
            "state_code": "PQ",
            "country_code": "AL"
        },
        {
            "name": "Përmet District",
            "state_code": "PR",
            "country_code": "AL"
        },
        {
            "name": "Pogradec District",
            "state_code": "PG",
            "country_code": "AL"
        },
        {
            "name": "Pukë District",
            "state_code": "PU",
            "country_code": "AL"
        },
        {
            "name": "Sarandë District",
            "state_code": "SR",
            "country_code": "AL"
        },
        {
            "name": "Shkodër County",
            "state_code": "10",
            "country_code": "AL"
        },
        {
            "name": "Shkodër District",
            "state_code": "SH",
            "country_code": "AL"
        },
        {
            "name": "Skrapar District",
            "state_code": "SK",
            "country_code": "AL"
        },
        {
            "name": "Tepelenë District",
            "state_code": "TE",
            "country_code": "AL"
        },
        {
            "name": "Tirana County",
            "state_code": "11",
            "country_code": "AL"
        },
        {
            "name": "Tirana District",
            "state_code": "TR",
            "country_code": "AL"
        },
        {
            "name": "Tropojë District",
            "state_code": "TP",
            "country_code": "AL"
        },
        {
            "name": "Vlorë County",
            "state_code": "12",
            "country_code": "AL"
        },
        {
            "name": "Vlorë District",
            "state_code": "VL",
            "country_code": "AL"
        },
        {
            "name": "Adrar",
            "state_code": "01",
            "country_code": "DZ"
        },
        {
            "name": "Aïn Defla",
            "state_code": "44",
            "country_code": "DZ"
        },
        {
            "name": "Aïn Témouchent",
            "state_code": "46",
            "country_code": "DZ"
        },
        {
            "name": "Algiers",
            "state_code": "16",
            "country_code": "DZ"
        },
        {
            "name": "Annaba",
            "state_code": "23",
            "country_code": "DZ"
        },
        {
            "name": "Batna",
            "state_code": "05",
            "country_code": "DZ"
        },
        {
            "name": "Béchar",
            "state_code": "08",
            "country_code": "DZ"
        },
        {
            "name": "Béjaïa",
            "state_code": "06",
            "country_code": "DZ"
        },
        {
            "name": "Béni Abbès",
            "state_code": "53",
            "country_code": "DZ"
        },
        {
            "name": "Biskra",
            "state_code": "07",
            "country_code": "DZ"
        },
        {
            "name": "Blida",
            "state_code": "09",
            "country_code": "DZ"
        },
        {
            "name": "Bordj Baji Mokhtar",
            "state_code": "52",
            "country_code": "DZ"
        },
        {
            "name": "Bordj Bou Arréridj",
            "state_code": "34",
            "country_code": "DZ"
        },
        {
            "name": "Bouïra",
            "state_code": "10",
            "country_code": "DZ"
        },
        {
            "name": "Boumerdès",
            "state_code": "35",
            "country_code": "DZ"
        },
        {
            "name": "Chlef",
            "state_code": "02",
            "country_code": "DZ"
        },
        {
            "name": "Constantine",
            "state_code": "25",
            "country_code": "DZ"
        },
        {
            "name": "Djanet",
            "state_code": "56",
            "country_code": "DZ"
        },
        {
            "name": "Djelfa",
            "state_code": "17",
            "country_code": "DZ"
        },
        {
            "name": "El Bayadh",
            "state_code": "32",
            "country_code": "DZ"
        },
        {
            "name": "El M'ghair",
            "state_code": "49",
            "country_code": "DZ"
        },
        {
            "name": "El Menia",
            "state_code": "50",
            "country_code": "DZ"
        },
        {
            "name": "El Oued",
            "state_code": "39",
            "country_code": "DZ"
        },
        {
            "name": "El Tarf",
            "state_code": "36",
            "country_code": "DZ"
        },
        {
            "name": "Ghardaïa",
            "state_code": "47",
            "country_code": "DZ"
        },
        {
            "name": "Guelma",
            "state_code": "24",
            "country_code": "DZ"
        },
        {
            "name": "Illizi",
            "state_code": "33",
            "country_code": "DZ"
        },
        {
            "name": "In Guezzam",
            "state_code": "58",
            "country_code": "DZ"
        },
        {
            "name": "In Salah",
            "state_code": "57",
            "country_code": "DZ"
        },
        {
            "name": "Jijel",
            "state_code": "18",
            "country_code": "DZ"
        },
        {
            "name": "Khenchela",
            "state_code": "40",
            "country_code": "DZ"
        },
        {
            "name": "Laghouat",
            "state_code": "03",
            "country_code": "DZ"
        },
        {
            "name": "M'Sila",
            "state_code": "28",
            "country_code": "DZ"
        },
        {
            "name": "Mascara",
            "state_code": "29",
            "country_code": "DZ"
        },
        {
            "name": "Médéa",
            "state_code": "26",
            "country_code": "DZ"
        },
        {
            "name": "Mila",
            "state_code": "43",
            "country_code": "DZ"
        },
        {
            "name": "Mostaganem",
            "state_code": "27",
            "country_code": "DZ"
        },
        {
            "name": "Naama",
            "state_code": "45",
            "country_code": "DZ"
        },
        {
            "name": "Oran",
            "state_code": "31",
            "country_code": "DZ"
        },
        {
            "name": "Ouargla",
            "state_code": "30",
            "country_code": "DZ"
        },
        {
            "name": "Ouled Djellal",
            "state_code": "51",
            "country_code": "DZ"
        },
        {
            "name": "Oum El Bouaghi",
            "state_code": "04",
            "country_code": "DZ"
        },
        {
            "name": "Relizane",
            "state_code": "48",
            "country_code": "DZ"
        },
        {
            "name": "Saïda",
            "state_code": "20",
            "country_code": "DZ"
        },
        {
            "name": "Sétif",
            "state_code": "19",
            "country_code": "DZ"
        },
        {
            "name": "Sidi Bel Abbès",
            "state_code": "22",
            "country_code": "DZ"
        },
        {
            "name": "Skikda",
            "state_code": "21",
            "country_code": "DZ"
        },
        {
            "name": "Souk Ahras",
            "state_code": "41",
            "country_code": "DZ"
        },
        {
            "name": "Tamanghasset",
            "state_code": "11",
            "country_code": "DZ"
        },
        {
            "name": "Tébessa",
            "state_code": "12",
            "country_code": "DZ"
        },
        {
            "name": "Tiaret",
            "state_code": "14",
            "country_code": "DZ"
        },
        {
            "name": "Timimoun",
            "state_code": "54",
            "country_code": "DZ"
        },
        {
            "name": "Tindouf",
            "state_code": "37",
            "country_code": "DZ"
        },
        {
            "name": "Tipasa",
            "state_code": "42",
            "country_code": "DZ"
        },
        {
            "name": "Tissemsilt",
            "state_code": "38",
            "country_code": "DZ"
        },
        {
            "name": "Tizi Ouzou",
            "state_code": "15",
            "country_code": "DZ"
        },
        {
            "name": "Tlemcen",
            "state_code": "13",
            "country_code": "DZ"
        },
        {
            "name": "Touggourt",
            "state_code": "55",
            "country_code": "DZ"
        },
        {
            "name": "Andorra la Vella",
            "state_code": "07",
            "country_code": "AD"
        },
        {
            "name": "Canillo",
            "state_code": "02",
            "country_code": "AD"
        },
        {
            "name": "Encamp",
            "state_code": "03",
            "country_code": "AD"
        },
        {
            "name": "Escaldes-Engordany",
            "state_code": "08",
            "country_code": "AD"
        },
        {
            "name": "La Massana",
            "state_code": "04",
            "country_code": "AD"
        },
        {
            "name": "Ordino",
            "state_code": "05",
            "country_code": "AD"
        },
        {
            "name": "Sant Julià de Lòria",
            "state_code": "06",
            "country_code": "AD"
        },
        {
            "name": "Bengo Province",
            "state_code": "BGO",
            "country_code": "AO"
        },
        {
            "name": "Benguela Province",
            "state_code": "BGU",
            "country_code": "AO"
        },
        {
            "name": "Bié Province",
            "state_code": "BIE",
            "country_code": "AO"
        },
        {
            "name": "Cabinda Province",
            "state_code": "CAB",
            "country_code": "AO"
        },
        {
            "name": "Cuando Cubango Province",
            "state_code": "CCU",
            "country_code": "AO"
        },
        {
            "name": "Cuanza Norte Province",
            "state_code": "CNO",
            "country_code": "AO"
        },
        {
            "name": "Cuanza Sul",
            "state_code": "CUS",
            "country_code": "AO"
        },
        {
            "name": "Cunene Province",
            "state_code": "CNN",
            "country_code": "AO"
        },
        {
            "name": "Huambo Province",
            "state_code": "HUA",
            "country_code": "AO"
        },
        {
            "name": "Huíla Province",
            "state_code": "HUI",
            "country_code": "AO"
        },
        {
            "name": "Luanda Province",
            "state_code": "LUA",
            "country_code": "AO"
        },
        {
            "name": "Lunda Norte Province",
            "state_code": "LNO",
            "country_code": "AO"
        },
        {
            "name": "Lunda Sul Province",
            "state_code": "LSU",
            "country_code": "AO"
        },
        {
            "name": "Malanje Province",
            "state_code": "MAL",
            "country_code": "AO"
        },
        {
            "name": "Moxico Province",
            "state_code": "MOX",
            "country_code": "AO"
        },
        {
            "name": "Uíge Province",
            "state_code": "UIG",
            "country_code": "AO"
        },
        {
            "name": "Zaire Province",
            "state_code": "ZAI",
            "country_code": "AO"
        },
        {
            "name": "Barbuda",
            "state_code": "10",
            "country_code": "AG"
        },
        {
            "name": "Redonda",
            "state_code": "11",
            "country_code": "AG"
        },
        {
            "name": "Saint George Parish",
            "state_code": "03",
            "country_code": "AG"
        },
        {
            "name": "Saint John Parish",
            "state_code": "04",
            "country_code": "AG"
        },
        {
            "name": "Saint Mary Parish",
            "state_code": "05",
            "country_code": "AG"
        },
        {
            "name": "Saint Paul Parish",
            "state_code": "06",
            "country_code": "AG"
        },
        {
            "name": "Saint Peter Parish",
            "state_code": "07",
            "country_code": "AG"
        },
        {
            "name": "Saint Philip Parish",
            "state_code": "08",
            "country_code": "AG"
        },
        {
            "name": "Buenos Aires",
            "state_code": "B",
            "country_code": "AR"
        },
        {
            "name": "Catamarca",
            "state_code": "K",
            "country_code": "AR"
        },
        {
            "name": "Chaco",
            "state_code": "H",
            "country_code": "AR"
        },
        {
            "name": "Chubut",
            "state_code": "U",
            "country_code": "AR"
        },
        {
            "name": "Ciudad Autónoma de Buenos Aires",
            "state_code": "C",
            "country_code": "AR"
        },
        {
            "name": "Córdoba",
            "state_code": "X",
            "country_code": "AR"
        },
        {
            "name": "Corrientes",
            "state_code": "W",
            "country_code": "AR"
        },
        {
            "name": "Entre Ríos",
            "state_code": "E",
            "country_code": "AR"
        },
        {
            "name": "Formosa",
            "state_code": "P",
            "country_code": "AR"
        },
        {
            "name": "Jujuy",
            "state_code": "Y",
            "country_code": "AR"
        },
        {
            "name": "La Pampa",
            "state_code": "L",
            "country_code": "AR"
        },
        {
            "name": "La Rioja",
            "state_code": "F",
            "country_code": "AR"
        },
        {
            "name": "Mendoza",
            "state_code": "M",
            "country_code": "AR"
        },
        {
            "name": "Misiones",
            "state_code": "N",
            "country_code": "AR"
        },
        {
            "name": "Neuquén",
            "state_code": "Q",
            "country_code": "AR"
        },
        {
            "name": "Río Negro",
            "state_code": "R",
            "country_code": "AR"
        },
        {
            "name": "Salta",
            "state_code": "A",
            "country_code": "AR"
        },
        {
            "name": "San Juan",
            "state_code": "J",
            "country_code": "AR"
        },
        {
            "name": "San Luis",
            "state_code": "D",
            "country_code": "AR"
        },
        {
            "name": "Santa Cruz",
            "state_code": "Z",
            "country_code": "AR"
        },
        {
            "name": "Santa Fe",
            "state_code": "S",
            "country_code": "AR"
        },
        {
            "name": "Santiago del Estero",
            "state_code": "G",
            "country_code": "AR"
        },
        {
            "name": "Tierra del Fuego",
            "state_code": "V",
            "country_code": "AR"
        },
        {
            "name": "Tucumán",
            "state_code": "T",
            "country_code": "AR"
        },
        {
            "name": "Aragatsotn Region",
            "state_code": "AG",
            "country_code": "AM"
        },
        {
            "name": "Ararat Province",
            "state_code": "AR",
            "country_code": "AM"
        },
        {
            "name": "Armavir Region",
            "state_code": "AV",
            "country_code": "AM"
        },
        {
            "name": "Gegharkunik Province",
            "state_code": "GR",
            "country_code": "AM"
        },
        {
            "name": "Kotayk Region",
            "state_code": "KT",
            "country_code": "AM"
        },
        {
            "name": "Lori Region",
            "state_code": "LO",
            "country_code": "AM"
        },
        {
            "name": "Shirak Region",
            "state_code": "SH",
            "country_code": "AM"
        },
        {
            "name": "Syunik Province",
            "state_code": "SU",
            "country_code": "AM"
        },
        {
            "name": "Tavush Region",
            "state_code": "TV",
            "country_code": "AM"
        },
        {
            "name": "Vayots Dzor Region",
            "state_code": "VD",
            "country_code": "AM"
        },
        {
            "name": "Yerevan",
            "state_code": "ER",
            "country_code": "AM"
        },
        {
            "name": "Australian Capital Territory",
            "state_code": "ACT",
            "country_code": "AU"
        },
        {
            "name": "New South Wales",
            "state_code": "NSW",
            "country_code": "AU"
        },
        {
            "name": "Northern Territory",
            "state_code": "NT",
            "country_code": "AU"
        },
        {
            "name": "Queensland",
            "state_code": "QLD",
            "country_code": "AU"
        },
        {
            "name": "South Australia",
            "state_code": "SA",
            "country_code": "AU"
        },
        {
            "name": "Tasmania",
            "state_code": "TAS",
            "country_code": "AU"
        },
        {
            "name": "Victoria",
            "state_code": "VIC",
            "country_code": "AU"
        },
        {
            "name": "Western Australia",
            "state_code": "WA",
            "country_code": "AU"
        },
        {
            "name": "Burgenland",
            "state_code": "1",
            "country_code": "AT"
        },
        {
            "name": "Carinthia",
            "state_code": "2",
            "country_code": "AT"
        },
        {
            "name": "Lower Austria",
            "state_code": "3",
            "country_code": "AT"
        },
        {
            "name": "Salzburg",
            "state_code": "5",
            "country_code": "AT"
        },
        {
            "name": "Styria",
            "state_code": "6",
            "country_code": "AT"
        },
        {
            "name": "Tyrol",
            "state_code": "7",
            "country_code": "AT"
        },
        {
            "name": "Upper Austria",
            "state_code": "4",
            "country_code": "AT"
        },
        {
            "name": "Vienna",
            "state_code": "9",
            "country_code": "AT"
        },
        {
            "name": "Vorarlberg",
            "state_code": "8",
            "country_code": "AT"
        },
        {
            "name": "Absheron District",
            "state_code": "ABS",
            "country_code": "AZ"
        },
        {
            "name": "Agdam District",
            "state_code": "AGM",
            "country_code": "AZ"
        },
        {
            "name": "Agdash District",
            "state_code": "AGS",
            "country_code": "AZ"
        },
        {
            "name": "Aghjabadi District",
            "state_code": "AGC",
            "country_code": "AZ"
        },
        {
            "name": "Agstafa District",
            "state_code": "AGA",
            "country_code": "AZ"
        },
        {
            "name": "Agsu District",
            "state_code": "AGU",
            "country_code": "AZ"
        },
        {
            "name": "Astara District",
            "state_code": "AST",
            "country_code": "AZ"
        },
        {
            "name": "Babek District",
            "state_code": "BAB",
            "country_code": "AZ"
        },
        {
            "name": "Baku",
            "state_code": "BA",
            "country_code": "AZ"
        },
        {
            "name": "Balakan District",
            "state_code": "BAL",
            "country_code": "AZ"
        },
        {
            "name": "Barda District",
            "state_code": "BAR",
            "country_code": "AZ"
        },
        {
            "name": "Beylagan District",
            "state_code": "BEY",
            "country_code": "AZ"
        },
        {
            "name": "Bilasuvar District",
            "state_code": "BIL",
            "country_code": "AZ"
        },
        {
            "name": "Dashkasan District",
            "state_code": "DAS",
            "country_code": "AZ"
        },
        {
            "name": "Fizuli District",
            "state_code": "FUZ",
            "country_code": "AZ"
        },
        {
            "name": "Ganja",
            "state_code": "GA",
            "country_code": "AZ"
        },
        {
            "name": "Gədəbəy",
            "state_code": "GAD",
            "country_code": "AZ"
        },
        {
            "name": "Gobustan District",
            "state_code": "QOB",
            "country_code": "AZ"
        },
        {
            "name": "Goranboy District",
            "state_code": "GOR",
            "country_code": "AZ"
        },
        {
            "name": "Goychay",
            "state_code": "GOY",
            "country_code": "AZ"
        },
        {
            "name": "Goygol District",
            "state_code": "GYG",
            "country_code": "AZ"
        },
        {
            "name": "Hajigabul District",
            "state_code": "HAC",
            "country_code": "AZ"
        },
        {
            "name": "Imishli District",
            "state_code": "IMI",
            "country_code": "AZ"
        },
        {
            "name": "Ismailli District",
            "state_code": "ISM",
            "country_code": "AZ"
        },
        {
            "name": "Jabrayil District",
            "state_code": "CAB",
            "country_code": "AZ"
        },
        {
            "name": "Jalilabad District",
            "state_code": "CAL",
            "country_code": "AZ"
        },
        {
            "name": "Julfa District",
            "state_code": "CUL",
            "country_code": "AZ"
        },
        {
            "name": "Kalbajar District",
            "state_code": "KAL",
            "country_code": "AZ"
        },
        {
            "name": "Kangarli District",
            "state_code": "KAN",
            "country_code": "AZ"
        },
        {
            "name": "Khachmaz District",
            "state_code": "XAC",
            "country_code": "AZ"
        },
        {
            "name": "Khizi District",
            "state_code": "XIZ",
            "country_code": "AZ"
        },
        {
            "name": "Khojali District",
            "state_code": "XCI",
            "country_code": "AZ"
        },
        {
            "name": "Kurdamir District",
            "state_code": "KUR",
            "country_code": "AZ"
        },
        {
            "name": "Lachin District",
            "state_code": "LAC",
            "country_code": "AZ"
        },
        {
            "name": "Lankaran",
            "state_code": "LAN",
            "country_code": "AZ"
        },
        {
            "name": "Lankaran District",
            "state_code": "LA",
            "country_code": "AZ"
        },
        {
            "name": "Lerik District",
            "state_code": "LER",
            "country_code": "AZ"
        },
        {
            "name": "Martuni",
            "state_code": "XVD",
            "country_code": "AZ"
        },
        {
            "name": "Masally District",
            "state_code": "MAS",
            "country_code": "AZ"
        },
        {
            "name": "Mingachevir",
            "state_code": "MI",
            "country_code": "AZ"
        },
        {
            "name": "Nakhchivan Autonomous Republic",
            "state_code": "NX",
            "country_code": "AZ"
        },
        {
            "name": "Neftchala District",
            "state_code": "NEF",
            "country_code": "AZ"
        },
        {
            "name": "Oghuz District",
            "state_code": "OGU",
            "country_code": "AZ"
        },
        {
            "name": "Ordubad District",
            "state_code": "ORD",
            "country_code": "AZ"
        },
        {
            "name": "Qabala District",
            "state_code": "QAB",
            "country_code": "AZ"
        },
        {
            "name": "Qakh District",
            "state_code": "QAX",
            "country_code": "AZ"
        },
        {
            "name": "Qazakh District",
            "state_code": "QAZ",
            "country_code": "AZ"
        },
        {
            "name": "Quba District",
            "state_code": "QBA",
            "country_code": "AZ"
        },
        {
            "name": "Qubadli District",
            "state_code": "QBI",
            "country_code": "AZ"
        },
        {
            "name": "Qusar District",
            "state_code": "QUS",
            "country_code": "AZ"
        },
        {
            "name": "Saatly District",
            "state_code": "SAT",
            "country_code": "AZ"
        },
        {
            "name": "Sabirabad District",
            "state_code": "SAB",
            "country_code": "AZ"
        },
        {
            "name": "Sadarak District",
            "state_code": "SAD",
            "country_code": "AZ"
        },
        {
            "name": "Salyan District",
            "state_code": "SAL",
            "country_code": "AZ"
        },
        {
            "name": "Samukh District",
            "state_code": "SMX",
            "country_code": "AZ"
        },
        {
            "name": "Shabran District",
            "state_code": "SBN",
            "country_code": "AZ"
        },
        {
            "name": "Shahbuz District",
            "state_code": "SAH",
            "country_code": "AZ"
        },
        {
            "name": "Shaki",
            "state_code": "SA",
            "country_code": "AZ"
        },
        {
            "name": "Shaki District",
            "state_code": "SAK",
            "country_code": "AZ"
        },
        {
            "name": "Shamakhi District",
            "state_code": "SMI",
            "country_code": "AZ"
        },
        {
            "name": "Shamkir District",
            "state_code": "SKR",
            "country_code": "AZ"
        },
        {
            "name": "Sharur District",
            "state_code": "SAR",
            "country_code": "AZ"
        },
        {
            "name": "Shirvan",
            "state_code": "SR",
            "country_code": "AZ"
        },
        {
            "name": "Shusha District",
            "state_code": "SUS",
            "country_code": "AZ"
        },
        {
            "name": "Siazan District",
            "state_code": "SIY",
            "country_code": "AZ"
        },
        {
            "name": "Sumqayit",
            "state_code": "SM",
            "country_code": "AZ"
        },
        {
            "name": "Tartar District",
            "state_code": "TAR",
            "country_code": "AZ"
        },
        {
            "name": "Tovuz District",
            "state_code": "TOV",
            "country_code": "AZ"
        },
        {
            "name": "Ujar District",
            "state_code": "UCA",
            "country_code": "AZ"
        },
        {
            "name": "Yardymli District",
            "state_code": "YAR",
            "country_code": "AZ"
        },
        {
            "name": "Yevlakh",
            "state_code": "YE",
            "country_code": "AZ"
        },
        {
            "name": "Yevlakh District",
            "state_code": "YEV",
            "country_code": "AZ"
        },
        {
            "name": "Zangilan District",
            "state_code": "ZAN",
            "country_code": "AZ"
        },
        {
            "name": "Zaqatala District",
            "state_code": "ZAQ",
            "country_code": "AZ"
        },
        {
            "name": "Zardab District",
            "state_code": "ZAR",
            "country_code": "AZ"
        },
        {
            "name": "Capital Governorate",
            "state_code": "13",
            "country_code": "BH"
        },
        {
            "name": "Central Governorate",
            "state_code": "16",
            "country_code": "BH"
        },
        {
            "name": "Muharraq Governorate",
            "state_code": "15",
            "country_code": "BH"
        },
        {
            "name": "Northern Governorate",
            "state_code": "17",
            "country_code": "BH"
        },
        {
            "name": "Southern Governorate",
            "state_code": "14",
            "country_code": "BH"
        },
        {
            "name": "Bagerhat District",
            "state_code": "05",
            "country_code": "BD"
        },
        {
            "name": "Bahadia",
            "state_code": "33",
            "country_code": "BD"
        },
        {
            "name": "Bandarban District",
            "state_code": "01",
            "country_code": "BD"
        },
        {
            "name": "Barguna District",
            "state_code": "02",
            "country_code": "BD"
        },
        {
            "name": "Barisal District",
            "state_code": "06",
            "country_code": "BD"
        },
        {
            "name": "Barisal Division",
            "state_code": "A",
            "country_code": "BD"
        },
        {
            "name": "Bhola District",
            "state_code": "07",
            "country_code": "BD"
        },
        {
            "name": "Bogra District",
            "state_code": "03",
            "country_code": "BD"
        },
        {
            "name": "Brahmanbaria District",
            "state_code": "04",
            "country_code": "BD"
        },
        {
            "name": "Chandpur District",
            "state_code": "09",
            "country_code": "BD"
        },
        {
            "name": "Chapai Nawabganj District",
            "state_code": "45",
            "country_code": "BD"
        },
        {
            "name": "Chittagong District",
            "state_code": "10",
            "country_code": "BD"
        },
        {
            "name": "Chittagong Division",
            "state_code": "B",
            "country_code": "BD"
        },
        {
            "name": "Chuadanga District",
            "state_code": "12",
            "country_code": "BD"
        },
        {
            "name": "Comilla District",
            "state_code": "08",
            "country_code": "BD"
        },
        {
            "name": "Cox's Bazar District",
            "state_code": "11",
            "country_code": "BD"
        },
        {
            "name": "Dhaka District",
            "state_code": "13",
            "country_code": "BD"
        },
        {
            "name": "Dhaka Division",
            "state_code": "C",
            "country_code": "BD"
        },
        {
            "name": "Dinajpur District",
            "state_code": "14",
            "country_code": "BD"
        },
        {
            "name": "Faridpur District",
            "state_code": "15",
            "country_code": "BD"
        },
        {
            "name": "Feni District",
            "state_code": "16",
            "country_code": "BD"
        },
        {
            "name": "Gaibandha District",
            "state_code": "19",
            "country_code": "BD"
        },
        {
            "name": "Gazipur District",
            "state_code": "18",
            "country_code": "BD"
        },
        {
            "name": "Gopalganj District",
            "state_code": "17",
            "country_code": "BD"
        },
        {
            "name": "Habiganj District",
            "state_code": "20",
            "country_code": "BD"
        },
        {
            "name": "Jamalpur District",
            "state_code": "21",
            "country_code": "BD"
        },
        {
            "name": "Jessore District",
            "state_code": "22",
            "country_code": "BD"
        },
        {
            "name": "Jhalokati District",
            "state_code": "25",
            "country_code": "BD"
        },
        {
            "name": "Jhenaidah District",
            "state_code": "23",
            "country_code": "BD"
        },
        {
            "name": "Joypurhat District",
            "state_code": "24",
            "country_code": "BD"
        },
        {
            "name": "Khagrachari District",
            "state_code": "29",
            "country_code": "BD"
        },
        {
            "name": "Khulna District",
            "state_code": "27",
            "country_code": "BD"
        },
        {
            "name": "Khulna Division",
            "state_code": "D",
            "country_code": "BD"
        },
        {
            "name": "Kishoreganj District",
            "state_code": "26",
            "country_code": "BD"
        },
        {
            "name": "Kurigram District",
            "state_code": "28",
            "country_code": "BD"
        },
        {
            "name": "Kushtia District",
            "state_code": "30",
            "country_code": "BD"
        },
        {
            "name": "Lakshmipur District",
            "state_code": "31",
            "country_code": "BD"
        },
        {
            "name": "Lalmonirhat District",
            "state_code": "32",
            "country_code": "BD"
        },
        {
            "name": "Madaripur District",
            "state_code": "36",
            "country_code": "BD"
        },
        {
            "name": "Meherpur District",
            "state_code": "39",
            "country_code": "BD"
        },
        {
            "name": "Moulvibazar District",
            "state_code": "38",
            "country_code": "BD"
        },
        {
            "name": "Munshiganj District",
            "state_code": "35",
            "country_code": "BD"
        },
        {
            "name": "Mymensingh District",
            "state_code": "34",
            "country_code": "BD"
        },
        {
            "name": "Mymensingh Division",
            "state_code": "H",
            "country_code": "BD"
        },
        {
            "name": "Naogaon District",
            "state_code": "48",
            "country_code": "BD"
        },
        {
            "name": "Narail District",
            "state_code": "43",
            "country_code": "BD"
        },
        {
            "name": "Narayanganj District",
            "state_code": "40",
            "country_code": "BD"
        },
        {
            "name": "Natore District",
            "state_code": "44",
            "country_code": "BD"
        },
        {
            "name": "Netrokona District",
            "state_code": "41",
            "country_code": "BD"
        },
        {
            "name": "Nilphamari District",
            "state_code": "46",
            "country_code": "BD"
        },
        {
            "name": "Noakhali District",
            "state_code": "47",
            "country_code": "BD"
        },
        {
            "name": "Pabna District",
            "state_code": "49",
            "country_code": "BD"
        },
        {
            "name": "Panchagarh District",
            "state_code": "52",
            "country_code": "BD"
        },
        {
            "name": "Patuakhali District",
            "state_code": "51",
            "country_code": "BD"
        },
        {
            "name": "Pirojpur District",
            "state_code": "50",
            "country_code": "BD"
        },
        {
            "name": "Rajbari District",
            "state_code": "53",
            "country_code": "BD"
        },
        {
            "name": "Rajshahi District",
            "state_code": "54",
            "country_code": "BD"
        },
        {
            "name": "Rajshahi Division",
            "state_code": "E",
            "country_code": "BD"
        },
        {
            "name": "Rangamati Hill District",
            "state_code": "56",
            "country_code": "BD"
        },
        {
            "name": "Rangpur District",
            "state_code": "55",
            "country_code": "BD"
        },
        {
            "name": "Rangpur Division",
            "state_code": "F",
            "country_code": "BD"
        },
        {
            "name": "Satkhira District",
            "state_code": "58",
            "country_code": "BD"
        },
        {
            "name": "Shariatpur District",
            "state_code": "62",
            "country_code": "BD"
        },
        {
            "name": "Sherpur District",
            "state_code": "57",
            "country_code": "BD"
        },
        {
            "name": "Sirajganj District",
            "state_code": "59",
            "country_code": "BD"
        },
        {
            "name": "Sunamganj District",
            "state_code": "61",
            "country_code": "BD"
        },
        {
            "name": "Sylhet District",
            "state_code": "60",
            "country_code": "BD"
        },
        {
            "name": "Sylhet Division",
            "state_code": "G",
            "country_code": "BD"
        },
        {
            "name": "Tangail District",
            "state_code": "63",
            "country_code": "BD"
        },
        {
            "name": "Thakurgaon District",
            "state_code": "64",
            "country_code": "BD"
        },
        {
            "name": "Christ Church",
            "state_code": "01",
            "country_code": "BB"
        },
        {
            "name": "Saint Andrew",
            "state_code": "02",
            "country_code": "BB"
        },
        {
            "name": "Saint George",
            "state_code": "03",
            "country_code": "BB"
        },
        {
            "name": "Saint James",
            "state_code": "04",
            "country_code": "BB"
        },
        {
            "name": "Saint John",
            "state_code": "05",
            "country_code": "BB"
        },
        {
            "name": "Saint Joseph",
            "state_code": "06",
            "country_code": "BB"
        },
        {
            "name": "Saint Lucy",
            "state_code": "07",
            "country_code": "BB"
        },
        {
            "name": "Saint Michael",
            "state_code": "08",
            "country_code": "BB"
        },
        {
            "name": "Saint Peter",
            "state_code": "09",
            "country_code": "BB"
        },
        {
            "name": "Saint Philip",
            "state_code": "10",
            "country_code": "BB"
        },
        {
            "name": "Saint Thomas",
            "state_code": "11",
            "country_code": "BB"
        },
        {
            "name": "Brest Region",
            "state_code": "BR",
            "country_code": "BY"
        },
        {
            "name": "Gomel Region",
            "state_code": "HO",
            "country_code": "BY"
        },
        {
            "name": "Grodno Region",
            "state_code": "HR",
            "country_code": "BY"
        },
        {
            "name": "Minsk",
            "state_code": "HM",
            "country_code": "BY"
        },
        {
            "name": "Minsk Region",
            "state_code": "MI",
            "country_code": "BY"
        },
        {
            "name": "Mogilev Region",
            "state_code": "MA",
            "country_code": "BY"
        },
        {
            "name": "Vitebsk Region",
            "state_code": "VI",
            "country_code": "BY"
        },
        {
            "name": "Antwerp",
            "state_code": "VAN",
            "country_code": "BE"
        },
        {
            "name": "Brussels-Capital Region",
            "state_code": "BRU",
            "country_code": "BE"
        },
        {
            "name": "East Flanders",
            "state_code": "VOV",
            "country_code": "BE"
        },
        {
            "name": "Flanders",
            "state_code": "VLG",
            "country_code": "BE"
        },
        {
            "name": "Flemish Brabant",
            "state_code": "VBR",
            "country_code": "BE"
        },
        {
            "name": "Hainaut",
            "state_code": "WHT",
            "country_code": "BE"
        },
        {
            "name": "Liège",
            "state_code": "WLG",
            "country_code": "BE"
        },
        {
            "name": "Limburg",
            "state_code": "VLI",
            "country_code": "BE"
        },
        {
            "name": "Luxembourg",
            "state_code": "WLX",
            "country_code": "BE"
        },
        {
            "name": "Namur",
            "state_code": "WNA",
            "country_code": "BE"
        },
        {
            "name": "Wallonia",
            "state_code": "WAL",
            "country_code": "BE"
        },
        {
            "name": "Walloon Brabant",
            "state_code": "WBR",
            "country_code": "BE"
        },
        {
            "name": "West Flanders",
            "state_code": "VWV",
            "country_code": "BE"
        },
        {
            "name": "Belize District",
            "state_code": "BZ",
            "country_code": "BZ"
        },
        {
            "name": "Cayo District",
            "state_code": "CY",
            "country_code": "BZ"
        },
        {
            "name": "Corozal District",
            "state_code": "CZL",
            "country_code": "BZ"
        },
        {
            "name": "Orange Walk District",
            "state_code": "OW",
            "country_code": "BZ"
        },
        {
            "name": "Stann Creek District",
            "state_code": "SC",
            "country_code": "BZ"
        },
        {
            "name": "Toledo District",
            "state_code": "TOL",
            "country_code": "BZ"
        },
        {
            "name": "Alibori Department",
            "state_code": "AL",
            "country_code": "BJ"
        },
        {
            "name": "Atakora Department",
            "state_code": "AK",
            "country_code": "BJ"
        },
        {
            "name": "Atlantique Department",
            "state_code": "AQ",
            "country_code": "BJ"
        },
        {
            "name": "Borgou Department",
            "state_code": "BO",
            "country_code": "BJ"
        },
        {
            "name": "Collines Department",
            "state_code": "CO",
            "country_code": "BJ"
        },
        {
            "name": "Donga Department",
            "state_code": "DO",
            "country_code": "BJ"
        },
        {
            "name": "Kouffo Department",
            "state_code": "KO",
            "country_code": "BJ"
        },
        {
            "name": "Littoral Department",
            "state_code": "LI",
            "country_code": "BJ"
        },
        {
            "name": "Mono Department",
            "state_code": "MO",
            "country_code": "BJ"
        },
        {
            "name": "Ouémé Department",
            "state_code": "OU",
            "country_code": "BJ"
        },
        {
            "name": "Plateau Department",
            "state_code": "PL",
            "country_code": "BJ"
        },
        {
            "name": "Zou Department",
            "state_code": "ZO",
            "country_code": "BJ"
        },
        {
            "name": "Devonshire Parish",
            "state_code": "DEV",
            "country_code": "BM"
        },
        {
            "name": "Hamilton Parish",
            "state_code": "HA",
            "country_code": "BM"
        },
        {
            "name": "Paget Parish",
            "state_code": "PAG",
            "country_code": "BM"
        },
        {
            "name": "Pembroke Parish",
            "state_code": "PEM",
            "country_code": "BM"
        },
        {
            "name": "Saint George's Parish",
            "state_code": "SGE",
            "country_code": "BM"
        },
        {
            "name": "Sandys Parish",
            "state_code": "SAN",
            "country_code": "BM"
        },
        {
            "name": "Smith's Parish,",
            "state_code": "SMI",
            "country_code": "BM"
        },
        {
            "name": "Southampton Parish",
            "state_code": "SOU",
            "country_code": "BM"
        },
        {
            "name": "Warwick Parish",
            "state_code": "WAR",
            "country_code": "BM"
        },
        {
            "name": "Bumthang District",
            "state_code": "33",
            "country_code": "BT"
        },
        {
            "name": "Chukha District",
            "state_code": "12",
            "country_code": "BT"
        },
        {
            "name": "Dagana District",
            "state_code": "22",
            "country_code": "BT"
        },
        {
            "name": "Gasa District",
            "state_code": "GA",
            "country_code": "BT"
        },
        {
            "name": "Haa District",
            "state_code": "13",
            "country_code": "BT"
        },
        {
            "name": "Lhuntse District",
            "state_code": "44",
            "country_code": "BT"
        },
        {
            "name": "Mongar District",
            "state_code": "42",
            "country_code": "BT"
        },
        {
            "name": "Paro District",
            "state_code": "11",
            "country_code": "BT"
        },
        {
            "name": "Pemagatshel District",
            "state_code": "43",
            "country_code": "BT"
        },
        {
            "name": "Punakha District",
            "state_code": "23",
            "country_code": "BT"
        },
        {
            "name": "Samdrup Jongkhar District",
            "state_code": "45",
            "country_code": "BT"
        },
        {
            "name": "Samtse District",
            "state_code": "14",
            "country_code": "BT"
        },
        {
            "name": "Sarpang District",
            "state_code": "31",
            "country_code": "BT"
        },
        {
            "name": "Thimphu District",
            "state_code": "15",
            "country_code": "BT"
        },
        {
            "name": "Trashigang District",
            "state_code": "41",
            "country_code": "BT"
        },
        {
            "name": "Trongsa District",
            "state_code": "32",
            "country_code": "BT"
        },
        {
            "name": "Tsirang District",
            "state_code": "21",
            "country_code": "BT"
        },
        {
            "name": "Wangdue Phodrang District",
            "state_code": "24",
            "country_code": "BT"
        },
        {
            "name": "Zhemgang District",
            "state_code": "34",
            "country_code": "BT"
        },
        {
            "name": "Beni Department",
            "state_code": "B",
            "country_code": "BO"
        },
        {
            "name": "Chuquisaca Department",
            "state_code": "H",
            "country_code": "BO"
        },
        {
            "name": "Cochabamba Department",
            "state_code": "C",
            "country_code": "BO"
        },
        {
            "name": "La Paz Department",
            "state_code": "L",
            "country_code": "BO"
        },
        {
            "name": "Oruro Department",
            "state_code": "O",
            "country_code": "BO"
        },
        {
            "name": "Pando Department",
            "state_code": "N",
            "country_code": "BO"
        },
        {
            "name": "Potosí Department",
            "state_code": "P",
            "country_code": "BO"
        },
        {
            "name": "Santa Cruz Department",
            "state_code": "S",
            "country_code": "BO"
        },
        {
            "name": "Tarija Department",
            "state_code": "T",
            "country_code": "BO"
        },
        {
            "name": "Bonaire",
            "state_code": "BQ1",
            "country_code": "BQ"
        },
        {
            "name": "Saba",
            "state_code": "BQ2",
            "country_code": "BQ"
        },
        {
            "name": "Sint Eustatius",
            "state_code": "BQ3",
            "country_code": "BQ"
        },
        {
            "name": "Bosnian Podrinje Canton",
            "state_code": "05",
            "country_code": "BA"
        },
        {
            "name": "Brčko District",
            "state_code": "BRC",
            "country_code": "BA"
        },
        {
            "name": "Canton 10",
            "state_code": "10",
            "country_code": "BA"
        },
        {
            "name": "Central Bosnia Canton",
            "state_code": "06",
            "country_code": "BA"
        },
        {
            "name": "Federation of Bosnia and Herzegovina",
            "state_code": "BIH",
            "country_code": "BA"
        },
        {
            "name": "Herzegovina-Neretva Canton",
            "state_code": "07",
            "country_code": "BA"
        },
        {
            "name": "Posavina Canton",
            "state_code": "02",
            "country_code": "BA"
        },
        {
            "name": "Republika Srpska",
            "state_code": "SRP",
            "country_code": "BA"
        },
        {
            "name": "Sarajevo Canton",
            "state_code": "09",
            "country_code": "BA"
        },
        {
            "name": "Tuzla Canton",
            "state_code": "03",
            "country_code": "BA"
        },
        {
            "name": "Una-Sana Canton",
            "state_code": "01",
            "country_code": "BA"
        },
        {
            "name": "West Herzegovina Canton",
            "state_code": "08",
            "country_code": "BA"
        },
        {
            "name": "Zenica-Doboj Canton",
            "state_code": "04",
            "country_code": "BA"
        },
        {
            "name": "Central District",
            "state_code": "CE",
            "country_code": "BW"
        },
        {
            "name": "Ghanzi District",
            "state_code": "GH",
            "country_code": "BW"
        },
        {
            "name": "Kgalagadi District",
            "state_code": "KG",
            "country_code": "BW"
        },
        {
            "name": "Kgatleng District",
            "state_code": "KL",
            "country_code": "BW"
        },
        {
            "name": "Kweneng District",
            "state_code": "KW",
            "country_code": "BW"
        },
        {
            "name": "Ngamiland",
            "state_code": "NG",
            "country_code": "BW"
        },
        {
            "name": "North-East District",
            "state_code": "NE",
            "country_code": "BW"
        },
        {
            "name": "North-West District",
            "state_code": "NW",
            "country_code": "BW"
        },
        {
            "name": "South-East District",
            "state_code": "SE",
            "country_code": "BW"
        },
        {
            "name": "Southern District",
            "state_code": "SO",
            "country_code": "BW"
        },
        {
            "name": "Acre",
            "state_code": "AC",
            "country_code": "BR"
        },
        {
            "name": "Alagoas",
            "state_code": "AL",
            "country_code": "BR"
        },
        {
            "name": "Amapá",
            "state_code": "AP",
            "country_code": "BR"
        },
        {
            "name": "Amazonas",
            "state_code": "AM",
            "country_code": "BR"
        },
        {
            "name": "Bahia",
            "state_code": "BA",
            "country_code": "BR"
        },
        {
            "name": "Ceará",
            "state_code": "CE",
            "country_code": "BR"
        },
        {
            "name": "Distrito Federal",
            "state_code": "DF",
            "country_code": "BR"
        },
        {
            "name": "Espírito Santo",
            "state_code": "ES",
            "country_code": "BR"
        },
        {
            "name": "Goiás",
            "state_code": "GO",
            "country_code": "BR"
        },
        {
            "name": "Maranhão",
            "state_code": "MA",
            "country_code": "BR"
        },
        {
            "name": "Mato Grosso",
            "state_code": "MT",
            "country_code": "BR"
        },
        {
            "name": "Mato Grosso do Sul",
            "state_code": "MS",
            "country_code": "BR"
        },
        {
            "name": "Minas Gerais",
            "state_code": "MG",
            "country_code": "BR"
        },
        {
            "name": "Pará",
            "state_code": "PA",
            "country_code": "BR"
        },
        {
            "name": "Paraíba",
            "state_code": "PB",
            "country_code": "BR"
        },
        {
            "name": "Paraná",
            "state_code": "PR",
            "country_code": "BR"
        },
        {
            "name": "Pernambuco",
            "state_code": "PE",
            "country_code": "BR"
        },
        {
            "name": "Piauí",
            "state_code": "PI",
            "country_code": "BR"
        },
        {
            "name": "Rio de Janeiro",
            "state_code": "RJ",
            "country_code": "BR"
        },
        {
            "name": "Rio Grande do Norte",
            "state_code": "RN",
            "country_code": "BR"
        },
        {
            "name": "Rio Grande do Sul",
            "state_code": "RS",
            "country_code": "BR"
        },
        {
            "name": "Rondônia",
            "state_code": "RO",
            "country_code": "BR"
        },
        {
            "name": "Roraima",
            "state_code": "RR",
            "country_code": "BR"
        },
        {
            "name": "Santa Catarina",
            "state_code": "SC",
            "country_code": "BR"
        },
        {
            "name": "São Paulo",
            "state_code": "SP",
            "country_code": "BR"
        },
        {
            "name": "Sergipe",
            "state_code": "SE",
            "country_code": "BR"
        },
        {
            "name": "Tocantins",
            "state_code": "TO",
            "country_code": "BR"
        },
        {
            "name": "Belait District",
            "state_code": "BE",
            "country_code": "BN"
        },
        {
            "name": "Brunei-Muara District",
            "state_code": "BM",
            "country_code": "BN"
        },
        {
            "name": "Temburong District",
            "state_code": "TE",
            "country_code": "BN"
        },
        {
            "name": "Tutong District",
            "state_code": "TU",
            "country_code": "BN"
        },
        {
            "name": "Blagoevgrad Province",
            "state_code": "01",
            "country_code": "BG"
        },
        {
            "name": "Burgas Province",
            "state_code": "02",
            "country_code": "BG"
        },
        {
            "name": "Dobrich Province",
            "state_code": "08",
            "country_code": "BG"
        },
        {
            "name": "Gabrovo Province",
            "state_code": "07",
            "country_code": "BG"
        },
        {
            "name": "Haskovo Province",
            "state_code": "26",
            "country_code": "BG"
        },
        {
            "name": "Kardzhali Province",
            "state_code": "09",
            "country_code": "BG"
        },
        {
            "name": "Kyustendil Province",
            "state_code": "10",
            "country_code": "BG"
        },
        {
            "name": "Lovech Province",
            "state_code": "11",
            "country_code": "BG"
        },
        {
            "name": "Montana Province",
            "state_code": "12",
            "country_code": "BG"
        },
        {
            "name": "Pazardzhik Province",
            "state_code": "13",
            "country_code": "BG"
        },
        {
            "name": "Pernik Province",
            "state_code": "14",
            "country_code": "BG"
        },
        {
            "name": "Pleven Province",
            "state_code": "15",
            "country_code": "BG"
        },
        {
            "name": "Plovdiv Province",
            "state_code": "16",
            "country_code": "BG"
        },
        {
            "name": "Razgrad Province",
            "state_code": "17",
            "country_code": "BG"
        },
        {
            "name": "Ruse Province",
            "state_code": "18",
            "country_code": "BG"
        },
        {
            "name": "Shumen",
            "state_code": "27",
            "country_code": "BG"
        },
        {
            "name": "Silistra Province",
            "state_code": "19",
            "country_code": "BG"
        },
        {
            "name": "Sliven Province",
            "state_code": "20",
            "country_code": "BG"
        },
        {
            "name": "Smolyan Province",
            "state_code": "21",
            "country_code": "BG"
        },
        {
            "name": "Sofia City Province",
            "state_code": "22",
            "country_code": "BG"
        },
        {
            "name": "Sofia Province",
            "state_code": "23",
            "country_code": "BG"
        },
        {
            "name": "Stara Zagora Province",
            "state_code": "24",
            "country_code": "BG"
        },
        {
            "name": "Targovishte Province",
            "state_code": "25",
            "country_code": "BG"
        },
        {
            "name": "Varna Province",
            "state_code": "03",
            "country_code": "BG"
        },
        {
            "name": "Veliko Tarnovo Province",
            "state_code": "04",
            "country_code": "BG"
        },
        {
            "name": "Vidin Province",
            "state_code": "05",
            "country_code": "BG"
        },
        {
            "name": "Vratsa Province",
            "state_code": "06",
            "country_code": "BG"
        },
        {
            "name": "Yambol Province",
            "state_code": "28",
            "country_code": "BG"
        },
        {
            "name": "Balé Province",
            "state_code": "BAL",
            "country_code": "BF"
        },
        {
            "name": "Bam Province",
            "state_code": "BAM",
            "country_code": "BF"
        },
        {
            "name": "Banwa Province",
            "state_code": "BAN",
            "country_code": "BF"
        },
        {
            "name": "Bazèga Province",
            "state_code": "BAZ",
            "country_code": "BF"
        },
        {
            "name": "Boucle du Mouhoun Region",
            "state_code": "01",
            "country_code": "BF"
        },
        {
            "name": "Bougouriba Province",
            "state_code": "BGR",
            "country_code": "BF"
        },
        {
            "name": "Boulgou",
            "state_code": "BLG",
            "country_code": "BF"
        },
        {
            "name": "Cascades Region",
            "state_code": "02",
            "country_code": "BF"
        },
        {
            "name": "Centre",
            "state_code": "03",
            "country_code": "BF"
        },
        {
            "name": "Centre-Est Region",
            "state_code": "04",
            "country_code": "BF"
        },
        {
            "name": "Centre-Nord Region",
            "state_code": "05",
            "country_code": "BF"
        },
        {
            "name": "Centre-Ouest Region",
            "state_code": "06",
            "country_code": "BF"
        },
        {
            "name": "Centre-Sud Region",
            "state_code": "07",
            "country_code": "BF"
        },
        {
            "name": "Comoé Province",
            "state_code": "COM",
            "country_code": "BF"
        },
        {
            "name": "Est Region",
            "state_code": "08",
            "country_code": "BF"
        },
        {
            "name": "Ganzourgou Province",
            "state_code": "GAN",
            "country_code": "BF"
        },
        {
            "name": "Gnagna Province",
            "state_code": "GNA",
            "country_code": "BF"
        },
        {
            "name": "Gourma Province",
            "state_code": "GOU",
            "country_code": "BF"
        },
        {
            "name": "Hauts-Bassins Region",
            "state_code": "09",
            "country_code": "BF"
        },
        {
            "name": "Houet Province",
            "state_code": "HOU",
            "country_code": "BF"
        },
        {
            "name": "Ioba Province",
            "state_code": "IOB",
            "country_code": "BF"
        },
        {
            "name": "Kadiogo Province",
            "state_code": "KAD",
            "country_code": "BF"
        },
        {
            "name": "Kénédougou Province",
            "state_code": "KEN",
            "country_code": "BF"
        },
        {
            "name": "Komondjari Province",
            "state_code": "KMD",
            "country_code": "BF"
        },
        {
            "name": "Kompienga Province",
            "state_code": "KMP",
            "country_code": "BF"
        },
        {
            "name": "Kossi Province",
            "state_code": "KOS",
            "country_code": "BF"
        },
        {
            "name": "Koulpélogo Province",
            "state_code": "KOP",
            "country_code": "BF"
        },
        {
            "name": "Kouritenga Province",
            "state_code": "KOT",
            "country_code": "BF"
        },
        {
            "name": "Kourwéogo Province",
            "state_code": "KOW",
            "country_code": "BF"
        },
        {
            "name": "Léraba Province",
            "state_code": "LER",
            "country_code": "BF"
        },
        {
            "name": "Loroum Province",
            "state_code": "LOR",
            "country_code": "BF"
        },
        {
            "name": "Mouhoun",
            "state_code": "MOU",
            "country_code": "BF"
        },
        {
            "name": "Nahouri Province",
            "state_code": "NAO",
            "country_code": "BF"
        },
        {
            "name": "Namentenga Province",
            "state_code": "NAM",
            "country_code": "BF"
        },
        {
            "name": "Nayala Province",
            "state_code": "NAY",
            "country_code": "BF"
        },
        {
            "name": "Nord Region, Burkina Faso",
            "state_code": "10",
            "country_code": "BF"
        },
        {
            "name": "Noumbiel Province",
            "state_code": "NOU",
            "country_code": "BF"
        },
        {
            "name": "Oubritenga Province",
            "state_code": "OUB",
            "country_code": "BF"
        },
        {
            "name": "Oudalan Province",
            "state_code": "OUD",
            "country_code": "BF"
        },
        {
            "name": "Passoré Province",
            "state_code": "PAS",
            "country_code": "BF"
        },
        {
            "name": "Plateau-Central Region",
            "state_code": "11",
            "country_code": "BF"
        },
        {
            "name": "Poni Province",
            "state_code": "PON",
            "country_code": "BF"
        },
        {
            "name": "Sahel Region",
            "state_code": "12",
            "country_code": "BF"
        },
        {
            "name": "Sanguié Province",
            "state_code": "SNG",
            "country_code": "BF"
        },
        {
            "name": "Sanmatenga Province",
            "state_code": "SMT",
            "country_code": "BF"
        },
        {
            "name": "Séno Province",
            "state_code": "SEN",
            "country_code": "BF"
        },
        {
            "name": "Sissili Province",
            "state_code": "SIS",
            "country_code": "BF"
        },
        {
            "name": "Soum Province",
            "state_code": "SOM",
            "country_code": "BF"
        },
        {
            "name": "Sourou Province",
            "state_code": "SOR",
            "country_code": "BF"
        },
        {
            "name": "Sud-Ouest Region",
            "state_code": "13",
            "country_code": "BF"
        },
        {
            "name": "Tapoa Province",
            "state_code": "TAP",
            "country_code": "BF"
        },
        {
            "name": "Tuy Province",
            "state_code": "TUI",
            "country_code": "BF"
        },
        {
            "name": "Yagha Province",
            "state_code": "YAG",
            "country_code": "BF"
        },
        {
            "name": "Yatenga Province",
            "state_code": "YAT",
            "country_code": "BF"
        },
        {
            "name": "Ziro Province",
            "state_code": "ZIR",
            "country_code": "BF"
        },
        {
            "name": "Zondoma Province",
            "state_code": "ZON",
            "country_code": "BF"
        },
        {
            "name": "Zoundwéogo Province",
            "state_code": "ZOU",
            "country_code": "BF"
        },
        {
            "name": "Bubanza Province",
            "state_code": "BB",
            "country_code": "BI"
        },
        {
            "name": "Bujumbura Mairie Province",
            "state_code": "BM",
            "country_code": "BI"
        },
        {
            "name": "Bujumbura Rural Province",
            "state_code": "BL",
            "country_code": "BI"
        },
        {
            "name": "Bururi Province",
            "state_code": "BR",
            "country_code": "BI"
        },
        {
            "name": "Cankuzo Province",
            "state_code": "CA",
            "country_code": "BI"
        },
        {
            "name": "Cibitoke Province",
            "state_code": "CI",
            "country_code": "BI"
        },
        {
            "name": "Gitega Province",
            "state_code": "GI",
            "country_code": "BI"
        },
        {
            "name": "Karuzi Province",
            "state_code": "KR",
            "country_code": "BI"
        },
        {
            "name": "Kayanza Province",
            "state_code": "KY",
            "country_code": "BI"
        },
        {
            "name": "Kirundo Province",
            "state_code": "KI",
            "country_code": "BI"
        },
        {
            "name": "Makamba Province",
            "state_code": "MA",
            "country_code": "BI"
        },
        {
            "name": "Muramvya Province",
            "state_code": "MU",
            "country_code": "BI"
        },
        {
            "name": "Muyinga Province",
            "state_code": "MY",
            "country_code": "BI"
        },
        {
            "name": "Mwaro Province",
            "state_code": "MW",
            "country_code": "BI"
        },
        {
            "name": "Ngozi Province",
            "state_code": "NG",
            "country_code": "BI"
        },
        {
            "name": "Rumonge Province",
            "state_code": "RM",
            "country_code": "BI"
        },
        {
            "name": "Rutana Province",
            "state_code": "RT",
            "country_code": "BI"
        },
        {
            "name": "Ruyigi Province",
            "state_code": "RY",
            "country_code": "BI"
        },
        {
            "name": "Banteay Meanchey",
            "state_code": "1",
            "country_code": "KH"
        },
        {
            "name": "Battambang",
            "state_code": "2",
            "country_code": "KH"
        },
        {
            "name": "Kampong Cham",
            "state_code": "3",
            "country_code": "KH"
        },
        {
            "name": "Kampong Chhnang",
            "state_code": "4",
            "country_code": "KH"
        },
        {
            "name": "Kampong Speu",
            "state_code": "5",
            "country_code": "KH"
        },
        {
            "name": "Kampong Thom",
            "state_code": "6",
            "country_code": "KH"
        },
        {
            "name": "Kampot",
            "state_code": "7",
            "country_code": "KH"
        },
        {
            "name": "Kandal",
            "state_code": "8",
            "country_code": "KH"
        },
        {
            "name": "Kep",
            "state_code": "23",
            "country_code": "KH"
        },
        {
            "name": "Koh Kong",
            "state_code": "9",
            "country_code": "KH"
        },
        {
            "name": "Kratie",
            "state_code": "10",
            "country_code": "KH"
        },
        {
            "name": "Mondulkiri",
            "state_code": "11",
            "country_code": "KH"
        },
        {
            "name": "Oddar Meanchey",
            "state_code": "22",
            "country_code": "KH"
        },
        {
            "name": "Pailin",
            "state_code": "24",
            "country_code": "KH"
        },
        {
            "name": "Phnom Penh",
            "state_code": "12",
            "country_code": "KH"
        },
        {
            "name": "Preah Vihear",
            "state_code": "13",
            "country_code": "KH"
        },
        {
            "name": "Prey Veng",
            "state_code": "14",
            "country_code": "KH"
        },
        {
            "name": "Pursat",
            "state_code": "15",
            "country_code": "KH"
        },
        {
            "name": "Ratanakiri",
            "state_code": "16",
            "country_code": "KH"
        },
        {
            "name": "Siem Reap",
            "state_code": "17",
            "country_code": "KH"
        },
        {
            "name": "Sihanoukville",
            "state_code": "18",
            "country_code": "KH"
        },
        {
            "name": "Stung Treng",
            "state_code": "19",
            "country_code": "KH"
        },
        {
            "name": "Svay Rieng",
            "state_code": "20",
            "country_code": "KH"
        },
        {
            "name": "Takeo",
            "state_code": "21",
            "country_code": "KH"
        },
        {
            "name": "Adamawa",
            "state_code": "AD",
            "country_code": "CM"
        },
        {
            "name": "Centre",
            "state_code": "CE",
            "country_code": "CM"
        },
        {
            "name": "East",
            "state_code": "ES",
            "country_code": "CM"
        },
        {
            "name": "Far North",
            "state_code": "EN",
            "country_code": "CM"
        },
        {
            "name": "Littoral",
            "state_code": "LT",
            "country_code": "CM"
        },
        {
            "name": "North",
            "state_code": "NO",
            "country_code": "CM"
        },
        {
            "name": "Northwest",
            "state_code": "NW",
            "country_code": "CM"
        },
        {
            "name": "South",
            "state_code": "SU",
            "country_code": "CM"
        },
        {
            "name": "Southwest",
            "state_code": "SW",
            "country_code": "CM"
        },
        {
            "name": "West",
            "state_code": "OU",
            "country_code": "CM"
        },
        {
            "name": "Alberta",
            "state_code": "AB",
            "country_code": "CA"
        },
        {
            "name": "British Columbia",
            "state_code": "BC",
            "country_code": "CA"
        },
        {
            "name": "Manitoba",
            "state_code": "MB",
            "country_code": "CA"
        },
        {
            "name": "New Brunswick",
            "state_code": "NB",
            "country_code": "CA"
        },
        {
            "name": "Newfoundland and Labrador",
            "state_code": "NL",
            "country_code": "CA"
        },
        {
            "name": "Northwest Territories",
            "state_code": "NT",
            "country_code": "CA"
        },
        {
            "name": "Nova Scotia",
            "state_code": "NS",
            "country_code": "CA"
        },
        {
            "name": "Nunavut",
            "state_code": "NU",
            "country_code": "CA"
        },
        {
            "name": "Ontario",
            "state_code": "ON",
            "country_code": "CA"
        },
        {
            "name": "Prince Edward Island",
            "state_code": "PE",
            "country_code": "CA"
        },
        {
            "name": "Quebec",
            "state_code": "QC",
            "country_code": "CA"
        },
        {
            "name": "Saskatchewan",
            "state_code": "SK",
            "country_code": "CA"
        },
        {
            "name": "Yukon",
            "state_code": "YT",
            "country_code": "CA"
        },
        {
            "name": "Barlavento Islands",
            "state_code": "B",
            "country_code": "CV"
        },
        {
            "name": "Boa Vista",
            "state_code": "BV",
            "country_code": "CV"
        },
        {
            "name": "Brava",
            "state_code": "BR",
            "country_code": "CV"
        },
        {
            "name": "Maio Municipality",
            "state_code": "MA",
            "country_code": "CV"
        },
        {
            "name": "Mosteiros",
            "state_code": "MO",
            "country_code": "CV"
        },
        {
            "name": "Paul",
            "state_code": "PA",
            "country_code": "CV"
        },
        {
            "name": "Porto Novo",
            "state_code": "PN",
            "country_code": "CV"
        },
        {
            "name": "Praia",
            "state_code": "PR",
            "country_code": "CV"
        },
        {
            "name": "Ribeira Brava Municipality",
            "state_code": "RB",
            "country_code": "CV"
        },
        {
            "name": "Ribeira Grande",
            "state_code": "RG",
            "country_code": "CV"
        },
        {
            "name": "Ribeira Grande de Santiago",
            "state_code": "RS",
            "country_code": "CV"
        },
        {
            "name": "Sal",
            "state_code": "SL",
            "country_code": "CV"
        },
        {
            "name": "Santa Catarina",
            "state_code": "CA",
            "country_code": "CV"
        },
        {
            "name": "Santa Catarina do Fogo",
            "state_code": "CF",
            "country_code": "CV"
        },
        {
            "name": "Santa Cruz",
            "state_code": "CR",
            "country_code": "CV"
        },
        {
            "name": "São Domingos",
            "state_code": "SD",
            "country_code": "CV"
        },
        {
            "name": "São Filipe",
            "state_code": "SF",
            "country_code": "CV"
        },
        {
            "name": "São Lourenço dos Órgãos",
            "state_code": "SO",
            "country_code": "CV"
        },
        {
            "name": "São Miguel",
            "state_code": "SM",
            "country_code": "CV"
        },
        {
            "name": "São Vicente",
            "state_code": "SV",
            "country_code": "CV"
        },
        {
            "name": "Sotavento Islands",
            "state_code": "S",
            "country_code": "CV"
        },
        {
            "name": "Tarrafal",
            "state_code": "TA",
            "country_code": "CV"
        },
        {
            "name": "Tarrafal de São Nicolau",
            "state_code": "TS",
            "country_code": "CV"
        },
        {
            "name": "Bamingui-Bangoran Prefecture",
            "state_code": "BB",
            "country_code": "CF"
        },
        {
            "name": "Bangui",
            "state_code": "BGF",
            "country_code": "CF"
        },
        {
            "name": "Basse-Kotto Prefecture",
            "state_code": "BK",
            "country_code": "CF"
        },
        {
            "name": "Haut-Mbomou Prefecture",
            "state_code": "HM",
            "country_code": "CF"
        },
        {
            "name": "Haute-Kotto Prefecture",
            "state_code": "HK",
            "country_code": "CF"
        },
        {
            "name": "Kémo Prefecture",
            "state_code": "KG",
            "country_code": "CF"
        },
        {
            "name": "Lobaye Prefecture",
            "state_code": "LB",
            "country_code": "CF"
        },
        {
            "name": "Mambéré-Kadéï",
            "state_code": "HS",
            "country_code": "CF"
        },
        {
            "name": "Mbomou Prefecture",
            "state_code": "MB",
            "country_code": "CF"
        },
        {
            "name": "Nana-Grébizi Economic Prefecture",
            "state_code": "KB",
            "country_code": "CF"
        },
        {
            "name": "Nana-Mambéré Prefecture",
            "state_code": "NM",
            "country_code": "CF"
        },
        {
            "name": "Ombella-M'Poko Prefecture",
            "state_code": "MP",
            "country_code": "CF"
        },
        {
            "name": "Ouaka Prefecture",
            "state_code": "UK",
            "country_code": "CF"
        },
        {
            "name": "Ouham Prefecture",
            "state_code": "AC",
            "country_code": "CF"
        },
        {
            "name": "Ouham-Pendé Prefecture",
            "state_code": "OP",
            "country_code": "CF"
        },
        {
            "name": "Sangha-Mbaéré",
            "state_code": "SE",
            "country_code": "CF"
        },
        {
            "name": "Vakaga Prefecture",
            "state_code": "VK",
            "country_code": "CF"
        },
        {
            "name": "Bahr el Gazel",
            "state_code": "BG",
            "country_code": "TD"
        },
        {
            "name": "Batha Region",
            "state_code": "BA",
            "country_code": "TD"
        },
        {
            "name": "Borkou",
            "state_code": "BO",
            "country_code": "TD"
        },
        {
            "name": "Ennedi Region",
            "state_code": "EN",
            "country_code": "TD"
        },
        {
            "name": "Ennedi-Est",
            "state_code": "EE",
            "country_code": "TD"
        },
        {
            "name": "Ennedi-Ouest",
            "state_code": "EO",
            "country_code": "TD"
        },
        {
            "name": "Guéra Region",
            "state_code": "GR",
            "country_code": "TD"
        },
        {
            "name": "Hadjer-Lamis",
            "state_code": "HL",
            "country_code": "TD"
        },
        {
            "name": "Kanem Region",
            "state_code": "KA",
            "country_code": "TD"
        },
        {
            "name": "Lac Region",
            "state_code": "LC",
            "country_code": "TD"
        },
        {
            "name": "Logone Occidental Region",
            "state_code": "LO",
            "country_code": "TD"
        },
        {
            "name": "Logone Oriental Region",
            "state_code": "LR",
            "country_code": "TD"
        },
        {
            "name": "Mandoul Region",
            "state_code": "MA",
            "country_code": "TD"
        },
        {
            "name": "Mayo-Kebbi Est Region",
            "state_code": "ME",
            "country_code": "TD"
        },
        {
            "name": "Mayo-Kebbi Ouest Region",
            "state_code": "MO",
            "country_code": "TD"
        },
        {
            "name": "Moyen-Chari Region",
            "state_code": "MC",
            "country_code": "TD"
        },
        {
            "name": "N'Djamena",
            "state_code": "ND",
            "country_code": "TD"
        },
        {
            "name": "Ouaddaï Region",
            "state_code": "OD",
            "country_code": "TD"
        },
        {
            "name": "Salamat Region",
            "state_code": "SA",
            "country_code": "TD"
        },
        {
            "name": "Sila Region",
            "state_code": "SI",
            "country_code": "TD"
        },
        {
            "name": "Tandjilé Region",
            "state_code": "TA",
            "country_code": "TD"
        },
        {
            "name": "Tibesti Region",
            "state_code": "TI",
            "country_code": "TD"
        },
        {
            "name": "Wadi Fira Region",
            "state_code": "WF",
            "country_code": "TD"
        },
        {
            "name": "Aisén del General Carlos Ibañez del Campo",
            "state_code": "AI",
            "country_code": "CL"
        },
        {
            "name": "Antofagasta",
            "state_code": "AN",
            "country_code": "CL"
        },
        {
            "name": "Arica y Parinacota",
            "state_code": "AP",
            "country_code": "CL"
        },
        {
            "name": "Atacama",
            "state_code": "AT",
            "country_code": "CL"
        },
        {
            "name": "Biobío",
            "state_code": "BI",
            "country_code": "CL"
        },
        {
            "name": "Coquimbo",
            "state_code": "CO",
            "country_code": "CL"
        },
        {
            "name": "La Araucanía",
            "state_code": "AR",
            "country_code": "CL"
        },
        {
            "name": "Libertador General Bernardo O'Higgins",
            "state_code": "LI",
            "country_code": "CL"
        },
        {
            "name": "Los Lagos",
            "state_code": "LL",
            "country_code": "CL"
        },
        {
            "name": "Los Ríos",
            "state_code": "LR",
            "country_code": "CL"
        },
        {
            "name": "Magallanes y de la Antártica Chilena",
            "state_code": "MA",
            "country_code": "CL"
        },
        {
            "name": "Maule",
            "state_code": "ML",
            "country_code": "CL"
        },
        {
            "name": "Ñuble",
            "state_code": "NB",
            "country_code": "CL"
        },
        {
            "name": "Región Metropolitana de Santiago",
            "state_code": "RM",
            "country_code": "CL"
        },
        {
            "name": "Tarapacá",
            "state_code": "TA",
            "country_code": "CL"
        },
        {
            "name": "Valparaíso",
            "state_code": "VS",
            "country_code": "CL"
        },
        {
            "name": "Anhui",
            "state_code": "AH",
            "country_code": "CN"
        },
        {
            "name": "Beijing",
            "state_code": "BJ",
            "country_code": "CN"
        },
        {
            "name": "Chongqing",
            "state_code": "CQ",
            "country_code": "CN"
        },
        {
            "name": "Fujian",
            "state_code": "FJ",
            "country_code": "CN"
        },
        {
            "name": "Gansu",
            "state_code": "GS",
            "country_code": "CN"
        },
        {
            "name": "Guangdong",
            "state_code": "GD",
            "country_code": "CN"
        },
        {
            "name": "Guangxi Zhuang",
            "state_code": "GX",
            "country_code": "CN"
        },
        {
            "name": "Guizhou",
            "state_code": "GZ",
            "country_code": "CN"
        },
        {
            "name": "Hainan",
            "state_code": "HI",
            "country_code": "CN"
        },
        {
            "name": "Hebei",
            "state_code": "HE",
            "country_code": "CN"
        },
        {
            "name": "Heilongjiang",
            "state_code": "HL",
            "country_code": "CN"
        },
        {
            "name": "Henan",
            "state_code": "HA",
            "country_code": "CN"
        },
        {
            "name": "Hong Kong SAR",
            "state_code": "HK",
            "country_code": "CN"
        },
        {
            "name": "Hubei",
            "state_code": "HB",
            "country_code": "CN"
        },
        {
            "name": "Hunan",
            "state_code": "HN",
            "country_code": "CN"
        },
        {
            "name": "Inner Mongolia",
            "state_code": "NM",
            "country_code": "CN"
        },
        {
            "name": "Jiangsu",
            "state_code": "JS",
            "country_code": "CN"
        },
        {
            "name": "Jiangxi",
            "state_code": "JX",
            "country_code": "CN"
        },
        {
            "name": "Jilin",
            "state_code": "JL",
            "country_code": "CN"
        },
        {
            "name": "Liaoning",
            "state_code": "LN",
            "country_code": "CN"
        },
        {
            "name": "Macau SAR",
            "state_code": "MO",
            "country_code": "CN"
        },
        {
            "name": "Ningxia Huizu",
            "state_code": "NX",
            "country_code": "CN"
        },
        {
            "name": "Qinghai",
            "state_code": "QH",
            "country_code": "CN"
        },
        {
            "name": "Shaanxi",
            "state_code": "SN",
            "country_code": "CN"
        },
        {
            "name": "Shandong",
            "state_code": "SD",
            "country_code": "CN"
        },
        {
            "name": "Shanghai",
            "state_code": "SH",
            "country_code": "CN"
        },
        {
            "name": "Shanxi",
            "state_code": "SX",
            "country_code": "CN"
        },
        {
            "name": "Sichuan",
            "state_code": "SC",
            "country_code": "CN"
        },
        {
            "name": "Taiwan",
            "state_code": "TW",
            "country_code": "CN"
        },
        {
            "name": "Tianjin",
            "state_code": "TJ",
            "country_code": "CN"
        },
        {
            "name": "Xinjiang",
            "state_code": "XJ",
            "country_code": "CN"
        },
        {
            "name": "Xizang",
            "state_code": "XZ",
            "country_code": "CN"
        },
        {
            "name": "Yunnan",
            "state_code": "YN",
            "country_code": "CN"
        },
        {
            "name": "Zhejiang",
            "state_code": "ZJ",
            "country_code": "CN"
        },
        {
            "name": "Amazonas",
            "state_code": "AMA",
            "country_code": "CO"
        },
        {
            "name": "Antioquia",
            "state_code": "ANT",
            "country_code": "CO"
        },
        {
            "name": "Arauca",
            "state_code": "ARA",
            "country_code": "CO"
        },
        {
            "name": "Archipiélago de San Andrés, Providencia y Santa Catalina",
            "state_code": "SAP",
            "country_code": "CO"
        },
        {
            "name": "Atlántico",
            "state_code": "ATL",
            "country_code": "CO"
        },
        {
            "name": "Bogotá D.C.",
            "state_code": "DC",
            "country_code": "CO"
        },
        {
            "name": "Bolívar",
            "state_code": "BOL",
            "country_code": "CO"
        },
        {
            "name": "Boyacá",
            "state_code": "BOY",
            "country_code": "CO"
        },
        {
            "name": "Caldas",
            "state_code": "CAL",
            "country_code": "CO"
        },
        {
            "name": "Caquetá",
            "state_code": "CAQ",
            "country_code": "CO"
        },
        {
            "name": "Casanare",
            "state_code": "CAS",
            "country_code": "CO"
        },
        {
            "name": "Cauca",
            "state_code": "CAU",
            "country_code": "CO"
        },
        {
            "name": "Cesar",
            "state_code": "CES",
            "country_code": "CO"
        },
        {
            "name": "Chocó",
            "state_code": "CHO",
            "country_code": "CO"
        },
        {
            "name": "Córdoba",
            "state_code": "COR",
            "country_code": "CO"
        },
        {
            "name": "Cundinamarca",
            "state_code": "CUN",
            "country_code": "CO"
        },
        {
            "name": "Guainía",
            "state_code": "GUA",
            "country_code": "CO"
        },
        {
            "name": "Guaviare",
            "state_code": "GUV",
            "country_code": "CO"
        },
        {
            "name": "Huila",
            "state_code": "HUI",
            "country_code": "CO"
        },
        {
            "name": "La Guajira",
            "state_code": "LAG",
            "country_code": "CO"
        },
        {
            "name": "Magdalena",
            "state_code": "MAG",
            "country_code": "CO"
        },
        {
            "name": "Meta",
            "state_code": "MET",
            "country_code": "CO"
        },
        {
            "name": "Nariño",
            "state_code": "NAR",
            "country_code": "CO"
        },
        {
            "name": "Norte de Santander",
            "state_code": "NSA",
            "country_code": "CO"
        },
        {
            "name": "Putumayo",
            "state_code": "PUT",
            "country_code": "CO"
        },
        {
            "name": "Quindío",
            "state_code": "QUI",
            "country_code": "CO"
        },
        {
            "name": "Risaralda",
            "state_code": "RIS",
            "country_code": "CO"
        },
        {
            "name": "Santander",
            "state_code": "SAN",
            "country_code": "CO"
        },
        {
            "name": "Sucre",
            "state_code": "SUC",
            "country_code": "CO"
        },
        {
            "name": "Tolima",
            "state_code": "TOL",
            "country_code": "CO"
        },
        {
            "name": "Valle del Cauca",
            "state_code": "VAC",
            "country_code": "CO"
        },
        {
            "name": "Vaupés",
            "state_code": "VAU",
            "country_code": "CO"
        },
        {
            "name": "Vichada",
            "state_code": "VID",
            "country_code": "CO"
        },
        {
            "name": "Anjouan",
            "state_code": "A",
            "country_code": "KM"
        },
        {
            "name": "Grande Comore",
            "state_code": "G",
            "country_code": "KM"
        },
        {
            "name": "Mohéli",
            "state_code": "M",
            "country_code": "KM"
        },
        {
            "name": "Bouenza Department",
            "state_code": "11",
            "country_code": "CG"
        },
        {
            "name": "Brazzaville",
            "state_code": "BZV",
            "country_code": "CG"
        },
        {
            "name": "Cuvette Department",
            "state_code": "8",
            "country_code": "CG"
        },
        {
            "name": "Cuvette-Ouest Department",
            "state_code": "15",
            "country_code": "CG"
        },
        {
            "name": "Kouilou Department",
            "state_code": "5",
            "country_code": "CG"
        },
        {
            "name": "Lékoumou Department",
            "state_code": "2",
            "country_code": "CG"
        },
        {
            "name": "Likouala Department",
            "state_code": "7",
            "country_code": "CG"
        },
        {
            "name": "Niari Department",
            "state_code": "9",
            "country_code": "CG"
        },
        {
            "name": "Plateaux Department",
            "state_code": "14",
            "country_code": "CG"
        },
        {
            "name": "Pointe-Noire",
            "state_code": "16",
            "country_code": "CG"
        },
        {
            "name": "Pool Department",
            "state_code": "12",
            "country_code": "CG"
        },
        {
            "name": "Sangha Department",
            "state_code": "13",
            "country_code": "CG"
        },
        {
            "name": "Alajuela Province",
            "state_code": "A",
            "country_code": "CR"
        },
        {
            "name": "Guanacaste Province",
            "state_code": "G",
            "country_code": "CR"
        },
        {
            "name": "Heredia Province",
            "state_code": "H",
            "country_code": "CR"
        },
        {
            "name": "Limón Province",
            "state_code": "L",
            "country_code": "CR"
        },
        {
            "name": "Provincia de Cartago",
            "state_code": "C",
            "country_code": "CR"
        },
        {
            "name": "Puntarenas Province",
            "state_code": "P",
            "country_code": "CR"
        },
        {
            "name": "San José Province",
            "state_code": "SJ",
            "country_code": "CR"
        },
        {
            "name": "Abidjan",
            "state_code": "AB",
            "country_code": "CI"
        },
        {
            "name": "Agnéby",
            "state_code": "16",
            "country_code": "CI"
        },
        {
            "name": "Bafing Region",
            "state_code": "17",
            "country_code": "CI"
        },
        {
            "name": "Bas-Sassandra District",
            "state_code": "BS",
            "country_code": "CI"
        },
        {
            "name": "Bas-Sassandra Region",
            "state_code": "09",
            "country_code": "CI"
        },
        {
            "name": "Comoé District",
            "state_code": "CM",
            "country_code": "CI"
        },
        {
            "name": "Denguélé District",
            "state_code": "DN",
            "country_code": "CI"
        },
        {
            "name": "Denguélé Region",
            "state_code": "10",
            "country_code": "CI"
        },
        {
            "name": "Dix-Huit Montagnes",
            "state_code": "06",
            "country_code": "CI"
        },
        {
            "name": "Fromager",
            "state_code": "18",
            "country_code": "CI"
        },
        {
            "name": "Gôh-Djiboua District",
            "state_code": "GD",
            "country_code": "CI"
        },
        {
            "name": "Haut-Sassandra",
            "state_code": "02",
            "country_code": "CI"
        },
        {
            "name": "Lacs District",
            "state_code": "LC",
            "country_code": "CI"
        },
        {
            "name": "Lacs Region",
            "state_code": "07",
            "country_code": "CI"
        },
        {
            "name": "Lagunes District",
            "state_code": "LG",
            "country_code": "CI"
        },
        {
            "name": "Lagunes region",
            "state_code": "01",
            "country_code": "CI"
        },
        {
            "name": "Marahoué Region",
            "state_code": "12",
            "country_code": "CI"
        },
        {
            "name": "Montagnes District",
            "state_code": "MG",
            "country_code": "CI"
        },
        {
            "name": "Moyen-Cavally",
            "state_code": "19",
            "country_code": "CI"
        },
        {
            "name": "Moyen-Comoé",
            "state_code": "05",
            "country_code": "CI"
        },
        {
            "name": "N'zi-Comoé",
            "state_code": "11",
            "country_code": "CI"
        },
        {
            "name": "Sassandra-Marahoué District",
            "state_code": "SM",
            "country_code": "CI"
        },
        {
            "name": "Savanes Region",
            "state_code": "03",
            "country_code": "CI"
        },
        {
            "name": "Sud-Bandama",
            "state_code": "15",
            "country_code": "CI"
        },
        {
            "name": "Sud-Comoé",
            "state_code": "13",
            "country_code": "CI"
        },
        {
            "name": "Vallée du Bandama District",
            "state_code": "VB",
            "country_code": "CI"
        },
        {
            "name": "Vallée du Bandama Region",
            "state_code": "04",
            "country_code": "CI"
        },
        {
            "name": "Woroba District",
            "state_code": "WR",
            "country_code": "CI"
        },
        {
            "name": "Worodougou",
            "state_code": "14",
            "country_code": "CI"
        },
        {
            "name": "Yamoussoukro",
            "state_code": "YM",
            "country_code": "CI"
        },
        {
            "name": "Zanzan Region",
            "state_code": "ZZ",
            "country_code": "CI"
        },
        {
            "name": "Bjelovar-Bilogora",
            "state_code": "07",
            "country_code": "HR"
        },
        {
            "name": "Brod-Posavina",
            "state_code": "12",
            "country_code": "HR"
        },
        {
            "name": "Dubrovnik-Neretva",
            "state_code": "19",
            "country_code": "HR"
        },
        {
            "name": "Istria",
            "state_code": "18",
            "country_code": "HR"
        },
        {
            "name": "Karlovac",
            "state_code": "04",
            "country_code": "HR"
        },
        {
            "name": "Koprivnica-Križevci",
            "state_code": "06",
            "country_code": "HR"
        },
        {
            "name": "Krapina-Zagorje",
            "state_code": "02",
            "country_code": "HR"
        },
        {
            "name": "Lika-Senj",
            "state_code": "09",
            "country_code": "HR"
        },
        {
            "name": "Međimurje",
            "state_code": "20",
            "country_code": "HR"
        },
        {
            "name": "Osijek-Baranja",
            "state_code": "14",
            "country_code": "HR"
        },
        {
            "name": "Požega-Slavonia",
            "state_code": "11",
            "country_code": "HR"
        },
        {
            "name": "Primorje-Gorski Kotar",
            "state_code": "08",
            "country_code": "HR"
        },
        {
            "name": "Šibenik-Knin",
            "state_code": "15",
            "country_code": "HR"
        },
        {
            "name": "Sisak-Moslavina",
            "state_code": "03",
            "country_code": "HR"
        },
        {
            "name": "Split-Dalmatia",
            "state_code": "17",
            "country_code": "HR"
        },
        {
            "name": "Varaždin",
            "state_code": "05",
            "country_code": "HR"
        },
        {
            "name": "Virovitica-Podravina",
            "state_code": "10",
            "country_code": "HR"
        },
        {
            "name": "Vukovar-Syrmia",
            "state_code": "16",
            "country_code": "HR"
        },
        {
            "name": "Zadar",
            "state_code": "13",
            "country_code": "HR"
        },
        {
            "name": "Zagreb",
            "state_code": "01",
            "country_code": "HR"
        },
        {
            "name": "Zagreb",
            "state_code": "21",
            "country_code": "HR"
        },
        {
            "name": "Artemisa Province",
            "state_code": "15",
            "country_code": "CU"
        },
        {
            "name": "Camagüey Province",
            "state_code": "09",
            "country_code": "CU"
        },
        {
            "name": "Ciego de Ávila Province",
            "state_code": "08",
            "country_code": "CU"
        },
        {
            "name": "Cienfuegos Province",
            "state_code": "06",
            "country_code": "CU"
        },
        {
            "name": "Granma Province",
            "state_code": "12",
            "country_code": "CU"
        },
        {
            "name": "Guantánamo Province",
            "state_code": "14",
            "country_code": "CU"
        },
        {
            "name": "Havana Province",
            "state_code": "03",
            "country_code": "CU"
        },
        {
            "name": "Holguín Province",
            "state_code": "11",
            "country_code": "CU"
        },
        {
            "name": "Isla de la Juventud",
            "state_code": "99",
            "country_code": "CU"
        },
        {
            "name": "Las Tunas Province",
            "state_code": "10",
            "country_code": "CU"
        },
        {
            "name": "Matanzas Province",
            "state_code": "04",
            "country_code": "CU"
        },
        {
            "name": "Mayabeque Province",
            "state_code": "16",
            "country_code": "CU"
        },
        {
            "name": "Pinar del Río Province",
            "state_code": "01",
            "country_code": "CU"
        },
        {
            "name": "Sancti Spíritus Province",
            "state_code": "07",
            "country_code": "CU"
        },
        {
            "name": "Santiago de Cuba Province",
            "state_code": "13",
            "country_code": "CU"
        },
        {
            "name": "Villa Clara Province",
            "state_code": "05",
            "country_code": "CU"
        },
        {
            "name": "Famagusta District (Mağusa)",
            "state_code": "04",
            "country_code": "CY"
        },
        {
            "name": "Kyrenia District (Keryneia)",
            "state_code": "06",
            "country_code": "CY"
        },
        {
            "name": "Larnaca District (Larnaka)",
            "state_code": "03",
            "country_code": "CY"
        },
        {
            "name": "Limassol District (Leymasun)",
            "state_code": "02",
            "country_code": "CY"
        },
        {
            "name": "Nicosia District (Lefkoşa)",
            "state_code": "01",
            "country_code": "CY"
        },
        {
            "name": "Paphos District (Pafos)",
            "state_code": "05",
            "country_code": "CY"
        },
        {
            "name": "Benešov",
            "state_code": "201",
            "country_code": "CZ"
        },
        {
            "name": "Beroun",
            "state_code": "202",
            "country_code": "CZ"
        },
        {
            "name": "Blansko",
            "state_code": "641",
            "country_code": "CZ"
        },
        {
            "name": "Břeclav",
            "state_code": "644",
            "country_code": "CZ"
        },
        {
            "name": "Brno-město",
            "state_code": "642",
            "country_code": "CZ"
        },
        {
            "name": "Brno-venkov",
            "state_code": "643",
            "country_code": "CZ"
        },
        {
            "name": "Bruntál",
            "state_code": "801",
            "country_code": "CZ"
        },
        {
            "name": "Česká Lípa",
            "state_code": "511",
            "country_code": "CZ"
        },
        {
            "name": "České Budějovice",
            "state_code": "311",
            "country_code": "CZ"
        },
        {
            "name": "Český Krumlov",
            "state_code": "312",
            "country_code": "CZ"
        },
        {
            "name": "Cheb",
            "state_code": "411",
            "country_code": "CZ"
        },
        {
            "name": "Chomutov",
            "state_code": "422",
            "country_code": "CZ"
        },
        {
            "name": "Chrudim",
            "state_code": "531",
            "country_code": "CZ"
        },
        {
            "name": "Děčín",
            "state_code": "421",
            "country_code": "CZ"
        },
        {
            "name": "Domažlice",
            "state_code": "321",
            "country_code": "CZ"
        },
        {
            "name": "Frýdek-Místek",
            "state_code": "802",
            "country_code": "CZ"
        },
        {
            "name": "Havlíčkův Brod",
            "state_code": "631",
            "country_code": "CZ"
        },
        {
            "name": "Hodonín",
            "state_code": "645",
            "country_code": "CZ"
        },
        {
            "name": "Hradec Králové",
            "state_code": "521",
            "country_code": "CZ"
        },
        {
            "name": "Jablonec nad Nisou",
            "state_code": "512",
            "country_code": "CZ"
        },
        {
            "name": "Jeseník",
            "state_code": "711",
            "country_code": "CZ"
        },
        {
            "name": "Jičín",
            "state_code": "522",
            "country_code": "CZ"
        },
        {
            "name": "Jihlava",
            "state_code": "632",
            "country_code": "CZ"
        },
        {
            "name": "Jihočeský kraj",
            "state_code": "31",
            "country_code": "CZ"
        },
        {
            "name": "Jihomoravský kraj",
            "state_code": "64",
            "country_code": "CZ"
        },
        {
            "name": "Jindřichův Hradec",
            "state_code": "313",
            "country_code": "CZ"
        },
        {
            "name": "Karlovarský kraj",
            "state_code": "41",
            "country_code": "CZ"
        },
        {
            "name": "Karlovy Vary",
            "state_code": "412",
            "country_code": "CZ"
        },
        {
            "name": "Karviná",
            "state_code": "803",
            "country_code": "CZ"
        },
        {
            "name": "Kladno",
            "state_code": "203",
            "country_code": "CZ"
        },
        {
            "name": "Klatovy",
            "state_code": "322",
            "country_code": "CZ"
        },
        {
            "name": "Kolín",
            "state_code": "204",
            "country_code": "CZ"
        },
        {
            "name": "Kraj Vysočina",
            "state_code": "63",
            "country_code": "CZ"
        },
        {
            "name": "Královéhradecký kraj",
            "state_code": "52",
            "country_code": "CZ"
        },
        {
            "name": "Kroměříž",
            "state_code": "721",
            "country_code": "CZ"
        },
        {
            "name": "Kutná Hora",
            "state_code": "205",
            "country_code": "CZ"
        },
        {
            "name": "Liberec",
            "state_code": "513",
            "country_code": "CZ"
        },
        {
            "name": "Liberecký kraj",
            "state_code": "51",
            "country_code": "CZ"
        },
        {
            "name": "Litoměřice",
            "state_code": "423",
            "country_code": "CZ"
        },
        {
            "name": "Louny",
            "state_code": "424",
            "country_code": "CZ"
        },
        {
            "name": "Mělník",
            "state_code": "206",
            "country_code": "CZ"
        },
        {
            "name": "Mladá Boleslav",
            "state_code": "207",
            "country_code": "CZ"
        },
        {
            "name": "Moravskoslezský kraj",
            "state_code": "80",
            "country_code": "CZ"
        },
        {
            "name": "Most",
            "state_code": "425",
            "country_code": "CZ"
        },
        {
            "name": "Náchod",
            "state_code": "523",
            "country_code": "CZ"
        },
        {
            "name": "Nový Jičín",
            "state_code": "804",
            "country_code": "CZ"
        },
        {
            "name": "Nymburk",
            "state_code": "208",
            "country_code": "CZ"
        },
        {
            "name": "Olomouc",
            "state_code": "712",
            "country_code": "CZ"
        },
        {
            "name": "Olomoucký kraj",
            "state_code": "71",
            "country_code": "CZ"
        },
        {
            "name": "Opava",
            "state_code": "805",
            "country_code": "CZ"
        },
        {
            "name": "Ostrava-město",
            "state_code": "806",
            "country_code": "CZ"
        },
        {
            "name": "Pardubice",
            "state_code": "532",
            "country_code": "CZ"
        },
        {
            "name": "Pardubický kraj",
            "state_code": "53",
            "country_code": "CZ"
        },
        {
            "name": "Pelhřimov",
            "state_code": "633",
            "country_code": "CZ"
        },
        {
            "name": "Písek",
            "state_code": "314",
            "country_code": "CZ"
        },
        {
            "name": "Plzeň-jih",
            "state_code": "324",
            "country_code": "CZ"
        },
        {
            "name": "Plzeň-město",
            "state_code": "323",
            "country_code": "CZ"
        },
        {
            "name": "Plzeň-sever",
            "state_code": "325",
            "country_code": "CZ"
        },
        {
            "name": "Plzeňský kraj",
            "state_code": "32",
            "country_code": "CZ"
        },
        {
            "name": "Prachatice",
            "state_code": "315",
            "country_code": "CZ"
        },
        {
            "name": "Praha-východ",
            "state_code": "209",
            "country_code": "CZ"
        },
        {
            "name": "Praha-západ",
            "state_code": "20A",
            "country_code": "CZ"
        },
        {
            "name": "Praha, Hlavní město",
            "state_code": "10",
            "country_code": "CZ"
        },
        {
            "name": "Přerov",
            "state_code": "714",
            "country_code": "CZ"
        },
        {
            "name": "Příbram",
            "state_code": "20B",
            "country_code": "CZ"
        },
        {
            "name": "Prostějov",
            "state_code": "713",
            "country_code": "CZ"
        },
        {
            "name": "Rakovník",
            "state_code": "20C",
            "country_code": "CZ"
        },
        {
            "name": "Rokycany",
            "state_code": "326",
            "country_code": "CZ"
        },
        {
            "name": "Rychnov nad Kněžnou",
            "state_code": "524",
            "country_code": "CZ"
        },
        {
            "name": "Semily",
            "state_code": "514",
            "country_code": "CZ"
        },
        {
            "name": "Sokolov",
            "state_code": "413",
            "country_code": "CZ"
        },
        {
            "name": "Strakonice",
            "state_code": "316",
            "country_code": "CZ"
        },
        {
            "name": "Středočeský kraj",
            "state_code": "20",
            "country_code": "CZ"
        },
        {
            "name": "Šumperk",
            "state_code": "715",
            "country_code": "CZ"
        },
        {
            "name": "Svitavy",
            "state_code": "533",
            "country_code": "CZ"
        },
        {
            "name": "Tábor",
            "state_code": "317",
            "country_code": "CZ"
        },
        {
            "name": "Tachov",
            "state_code": "327",
            "country_code": "CZ"
        },
        {
            "name": "Teplice",
            "state_code": "426",
            "country_code": "CZ"
        },
        {
            "name": "Třebíč",
            "state_code": "634",
            "country_code": "CZ"
        },
        {
            "name": "Trutnov",
            "state_code": "525",
            "country_code": "CZ"
        },
        {
            "name": "Uherské Hradiště",
            "state_code": "722",
            "country_code": "CZ"
        },
        {
            "name": "Ústecký kraj",
            "state_code": "42",
            "country_code": "CZ"
        },
        {
            "name": "Ústí nad Labem",
            "state_code": "427",
            "country_code": "CZ"
        },
        {
            "name": "Ústí nad Orlicí",
            "state_code": "534",
            "country_code": "CZ"
        },
        {
            "name": "Vsetín",
            "state_code": "723",
            "country_code": "CZ"
        },
        {
            "name": "Vyškov",
            "state_code": "646",
            "country_code": "CZ"
        },
        {
            "name": "Žďár nad Sázavou",
            "state_code": "635",
            "country_code": "CZ"
        },
        {
            "name": "Zlín",
            "state_code": "724",
            "country_code": "CZ"
        },
        {
            "name": "Zlínský kraj",
            "state_code": "72",
            "country_code": "CZ"
        },
        {
            "name": "Znojmo",
            "state_code": "647",
            "country_code": "CZ"
        },
        {
            "name": "Bas-Uélé",
            "state_code": "BU",
            "country_code": "CD"
        },
        {
            "name": "Équateur",
            "state_code": "EQ",
            "country_code": "CD"
        },
        {
            "name": "Haut-Katanga",
            "state_code": "HK",
            "country_code": "CD"
        },
        {
            "name": "Haut-Lomami",
            "state_code": "HL",
            "country_code": "CD"
        },
        {
            "name": "Haut-Uélé",
            "state_code": "HU",
            "country_code": "CD"
        },
        {
            "name": "Ituri",
            "state_code": "IT",
            "country_code": "CD"
        },
        {
            "name": "Kasaï",
            "state_code": "KS",
            "country_code": "CD"
        },
        {
            "name": "Kasaï Central",
            "state_code": "KC",
            "country_code": "CD"
        },
        {
            "name": "Kasaï Oriental",
            "state_code": "KE",
            "country_code": "CD"
        },
        {
            "name": "Kinshasa",
            "state_code": "KN",
            "country_code": "CD"
        },
        {
            "name": "Kongo Central",
            "state_code": "BC",
            "country_code": "CD"
        },
        {
            "name": "Kwango",
            "state_code": "KG",
            "country_code": "CD"
        },
        {
            "name": "Kwilu",
            "state_code": "KL",
            "country_code": "CD"
        },
        {
            "name": "Lomami",
            "state_code": "LO",
            "country_code": "CD"
        },
        {
            "name": "Lualaba",
            "state_code": "LU",
            "country_code": "CD"
        },
        {
            "name": "Mai-Ndombe",
            "state_code": "MN",
            "country_code": "CD"
        },
        {
            "name": "Maniema",
            "state_code": "MA",
            "country_code": "CD"
        },
        {
            "name": "Mongala",
            "state_code": "MO",
            "country_code": "CD"
        },
        {
            "name": "Nord-Kivu",
            "state_code": "NK",
            "country_code": "CD"
        },
        {
            "name": "Nord-Ubangi",
            "state_code": "NU",
            "country_code": "CD"
        },
        {
            "name": "Sankuru",
            "state_code": "SA",
            "country_code": "CD"
        },
        {
            "name": "Sud-Kivu",
            "state_code": "SK",
            "country_code": "CD"
        },
        {
            "name": "Sud-Ubangi",
            "state_code": "SU",
            "country_code": "CD"
        },
        {
            "name": "Tanganyika",
            "state_code": "TA",
            "country_code": "CD"
        },
        {
            "name": "Tshopo",
            "state_code": "TO",
            "country_code": "CD"
        },
        {
            "name": "Tshuapa",
            "state_code": "TU",
            "country_code": "CD"
        },
        {
            "name": "Capital Region of Denmark",
            "state_code": "84",
            "country_code": "DK"
        },
        {
            "name": "Central Denmark Region",
            "state_code": "82",
            "country_code": "DK"
        },
        {
            "name": "North Denmark Region",
            "state_code": "81",
            "country_code": "DK"
        },
        {
            "name": "Region of Southern Denmark",
            "state_code": "83",
            "country_code": "DK"
        },
        {
            "name": "Region Zealand",
            "state_code": "85",
            "country_code": "DK"
        },
        {
            "name": "Ali Sabieh Region",
            "state_code": "AS",
            "country_code": "DJ"
        },
        {
            "name": "Arta Region",
            "state_code": "AR",
            "country_code": "DJ"
        },
        {
            "name": "Dikhil Region",
            "state_code": "DI",
            "country_code": "DJ"
        },
        {
            "name": "Djibouti",
            "state_code": "DJ",
            "country_code": "DJ"
        },
        {
            "name": "Obock Region",
            "state_code": "OB",
            "country_code": "DJ"
        },
        {
            "name": "Tadjourah Region",
            "state_code": "TA",
            "country_code": "DJ"
        },
        {
            "name": "Saint Andrew Parish",
            "state_code": "02",
            "country_code": "DM"
        },
        {
            "name": "Saint David Parish",
            "state_code": "03",
            "country_code": "DM"
        },
        {
            "name": "Saint George Parish",
            "state_code": "04",
            "country_code": "DM"
        },
        {
            "name": "Saint John Parish",
            "state_code": "05",
            "country_code": "DM"
        },
        {
            "name": "Saint Joseph Parish",
            "state_code": "06",
            "country_code": "DM"
        },
        {
            "name": "Saint Luke Parish",
            "state_code": "07",
            "country_code": "DM"
        },
        {
            "name": "Saint Mark Parish",
            "state_code": "08",
            "country_code": "DM"
        },
        {
            "name": "Saint Patrick Parish",
            "state_code": "09",
            "country_code": "DM"
        },
        {
            "name": "Saint Paul Parish",
            "state_code": "10",
            "country_code": "DM"
        },
        {
            "name": "Saint Peter Parish",
            "state_code": "11",
            "country_code": "DM"
        },
        {
            "name": "Azua Province",
            "state_code": "02",
            "country_code": "DO"
        },
        {
            "name": "Baoruco Province",
            "state_code": "03",
            "country_code": "DO"
        },
        {
            "name": "Barahona Province",
            "state_code": "04",
            "country_code": "DO"
        },
        {
            "name": "Dajabón Province",
            "state_code": "05",
            "country_code": "DO"
        },
        {
            "name": "Distrito Nacional",
            "state_code": "01",
            "country_code": "DO"
        },
        {
            "name": "Duarte Province",
            "state_code": "06",
            "country_code": "DO"
        },
        {
            "name": "El Seibo Province",
            "state_code": "08",
            "country_code": "DO"
        },
        {
            "name": "Espaillat Province",
            "state_code": "09",
            "country_code": "DO"
        },
        {
            "name": "Hato Mayor Province",
            "state_code": "30",
            "country_code": "DO"
        },
        {
            "name": "Hermanas Mirabal Province",
            "state_code": "19",
            "country_code": "DO"
        },
        {
            "name": "Independencia",
            "state_code": "10",
            "country_code": "DO"
        },
        {
            "name": "La Altagracia Province",
            "state_code": "11",
            "country_code": "DO"
        },
        {
            "name": "La Romana Province",
            "state_code": "12",
            "country_code": "DO"
        },
        {
            "name": "La Vega Province",
            "state_code": "13",
            "country_code": "DO"
        },
        {
            "name": "María Trinidad Sánchez Province",
            "state_code": "14",
            "country_code": "DO"
        },
        {
            "name": "Monseñor Nouel Province",
            "state_code": "28",
            "country_code": "DO"
        },
        {
            "name": "Monte Cristi Province",
            "state_code": "15",
            "country_code": "DO"
        },
        {
            "name": "Monte Plata Province",
            "state_code": "29",
            "country_code": "DO"
        },
        {
            "name": "Pedernales Province",
            "state_code": "16",
            "country_code": "DO"
        },
        {
            "name": "Peravia Province",
            "state_code": "17",
            "country_code": "DO"
        },
        {
            "name": "Puerto Plata Province",
            "state_code": "18",
            "country_code": "DO"
        },
        {
            "name": "Samaná Province",
            "state_code": "20",
            "country_code": "DO"
        },
        {
            "name": "San Cristóbal Province",
            "state_code": "21",
            "country_code": "DO"
        },
        {
            "name": "San José de Ocoa Province",
            "state_code": "31",
            "country_code": "DO"
        },
        {
            "name": "San Juan Province",
            "state_code": "22",
            "country_code": "DO"
        },
        {
            "name": "San Pedro de Macorís",
            "state_code": "23",
            "country_code": "DO"
        },
        {
            "name": "Sánchez Ramírez Province",
            "state_code": "24",
            "country_code": "DO"
        },
        {
            "name": "Santiago Province",
            "state_code": "25",
            "country_code": "DO"
        },
        {
            "name": "Santiago Rodríguez Province",
            "state_code": "26",
            "country_code": "DO"
        },
        {
            "name": "Santo Domingo Province",
            "state_code": "32",
            "country_code": "DO"
        },
        {
            "name": "Valverde Province",
            "state_code": "27",
            "country_code": "DO"
        },
        {
            "name": "Aileu municipality",
            "state_code": "AL",
            "country_code": "TL"
        },
        {
            "name": "Ainaro Municipality",
            "state_code": "AN",
            "country_code": "TL"
        },
        {
            "name": "Baucau Municipality",
            "state_code": "BA",
            "country_code": "TL"
        },
        {
            "name": "Bobonaro Municipality",
            "state_code": "BO",
            "country_code": "TL"
        },
        {
            "name": "Cova Lima Municipality",
            "state_code": "CO",
            "country_code": "TL"
        },
        {
            "name": "Dili municipality",
            "state_code": "DI",
            "country_code": "TL"
        },
        {
            "name": "Ermera District",
            "state_code": "ER",
            "country_code": "TL"
        },
        {
            "name": "Lautém Municipality",
            "state_code": "LA",
            "country_code": "TL"
        },
        {
            "name": "Liquiçá Municipality",
            "state_code": "LI",
            "country_code": "TL"
        },
        {
            "name": "Manatuto District",
            "state_code": "MT",
            "country_code": "TL"
        },
        {
            "name": "Manufahi Municipality",
            "state_code": "MF",
            "country_code": "TL"
        },
        {
            "name": "Viqueque Municipality",
            "state_code": "VI",
            "country_code": "TL"
        },
        {
            "name": "Azuay",
            "state_code": "A",
            "country_code": "EC"
        },
        {
            "name": "Bolívar",
            "state_code": "B",
            "country_code": "EC"
        },
        {
            "name": "Cañar",
            "state_code": "F",
            "country_code": "EC"
        },
        {
            "name": "Carchi",
            "state_code": "C",
            "country_code": "EC"
        },
        {
            "name": "Chimborazo",
            "state_code": "H",
            "country_code": "EC"
        },
        {
            "name": "Cotopaxi",
            "state_code": "X",
            "country_code": "EC"
        },
        {
            "name": "El Oro",
            "state_code": "O",
            "country_code": "EC"
        },
        {
            "name": "Esmeraldas",
            "state_code": "E",
            "country_code": "EC"
        },
        {
            "name": "Galápagos",
            "state_code": "W",
            "country_code": "EC"
        },
        {
            "name": "Guayas",
            "state_code": "G",
            "country_code": "EC"
        },
        {
            "name": "Imbabura",
            "state_code": "I",
            "country_code": "EC"
        },
        {
            "name": "Loja",
            "state_code": "L",
            "country_code": "EC"
        },
        {
            "name": "Los Ríos",
            "state_code": "R",
            "country_code": "EC"
        },
        {
            "name": "Manabí",
            "state_code": "M",
            "country_code": "EC"
        },
        {
            "name": "Morona-Santiago",
            "state_code": "S",
            "country_code": "EC"
        },
        {
            "name": "Napo",
            "state_code": "N",
            "country_code": "EC"
        },
        {
            "name": "Orellana",
            "state_code": "D",
            "country_code": "EC"
        },
        {
            "name": "Pastaza",
            "state_code": "Y",
            "country_code": "EC"
        },
        {
            "name": "Pichincha",
            "state_code": "P",
            "country_code": "EC"
        },
        {
            "name": "Santa Elena",
            "state_code": "SE",
            "country_code": "EC"
        },
        {
            "name": "Santo Domingo de los Tsáchilas",
            "state_code": "SD",
            "country_code": "EC"
        },
        {
            "name": "Sucumbíos",
            "state_code": "U",
            "country_code": "EC"
        },
        {
            "name": "Tungurahua",
            "state_code": "T",
            "country_code": "EC"
        },
        {
            "name": "Zamora Chinchipe",
            "state_code": "Z",
            "country_code": "EC"
        },
        {
            "name": "Alexandria",
            "state_code": "ALX",
            "country_code": "EG"
        },
        {
            "name": "Aswan",
            "state_code": "ASN",
            "country_code": "EG"
        },
        {
            "name": "Asyut",
            "state_code": "AST",
            "country_code": "EG"
        },
        {
            "name": "Beheira",
            "state_code": "BH",
            "country_code": "EG"
        },
        {
            "name": "Beni Suef",
            "state_code": "BNS",
            "country_code": "EG"
        },
        {
            "name": "Cairo",
            "state_code": "C",
            "country_code": "EG"
        },
        {
            "name": "Dakahlia",
            "state_code": "DK",
            "country_code": "EG"
        },
        {
            "name": "Damietta",
            "state_code": "DT",
            "country_code": "EG"
        },
        {
            "name": "Faiyum",
            "state_code": "FYM",
            "country_code": "EG"
        },
        {
            "name": "Gharbia",
            "state_code": "GH",
            "country_code": "EG"
        },
        {
            "name": "Giza",
            "state_code": "GZ",
            "country_code": "EG"
        },
        {
            "name": "Ismailia",
            "state_code": "IS",
            "country_code": "EG"
        },
        {
            "name": "Kafr el-Sheikh",
            "state_code": "KFS",
            "country_code": "EG"
        },
        {
            "name": "Luxor",
            "state_code": "LX",
            "country_code": "EG"
        },
        {
            "name": "Matrouh",
            "state_code": "MT",
            "country_code": "EG"
        },
        {
            "name": "Minya",
            "state_code": "MN",
            "country_code": "EG"
        },
        {
            "name": "Monufia",
            "state_code": "MNF",
            "country_code": "EG"
        },
        {
            "name": "New Valley",
            "state_code": "WAD",
            "country_code": "EG"
        },
        {
            "name": "North Sinai",
            "state_code": "SIN",
            "country_code": "EG"
        },
        {
            "name": "Port Said",
            "state_code": "PTS",
            "country_code": "EG"
        },
        {
            "name": "Qalyubia",
            "state_code": "KB",
            "country_code": "EG"
        },
        {
            "name": "Qena",
            "state_code": "KN",
            "country_code": "EG"
        },
        {
            "name": "Red Sea",
            "state_code": "BA",
            "country_code": "EG"
        },
        {
            "name": "Sharqia",
            "state_code": "SHR",
            "country_code": "EG"
        },
        {
            "name": "Sohag",
            "state_code": "SHG",
            "country_code": "EG"
        },
        {
            "name": "South Sinai",
            "state_code": "JS",
            "country_code": "EG"
        },
        {
            "name": "Suez",
            "state_code": "SUZ",
            "country_code": "EG"
        },
        {
            "name": "Ahuachapán Department",
            "state_code": "AH",
            "country_code": "SV"
        },
        {
            "name": "Cabañas Department",
            "state_code": "CA",
            "country_code": "SV"
        },
        {
            "name": "Chalatenango Department",
            "state_code": "CH",
            "country_code": "SV"
        },
        {
            "name": "Cuscatlán Department",
            "state_code": "CU",
            "country_code": "SV"
        },
        {
            "name": "La Libertad Department",
            "state_code": "LI",
            "country_code": "SV"
        },
        {
            "name": "La Paz Department",
            "state_code": "PA",
            "country_code": "SV"
        },
        {
            "name": "La Unión Department",
            "state_code": "UN",
            "country_code": "SV"
        },
        {
            "name": "Morazán Department",
            "state_code": "MO",
            "country_code": "SV"
        },
        {
            "name": "San Miguel Department",
            "state_code": "SM",
            "country_code": "SV"
        },
        {
            "name": "San Salvador Department",
            "state_code": "SS",
            "country_code": "SV"
        },
        {
            "name": "San Vicente Department",
            "state_code": "SV",
            "country_code": "SV"
        },
        {
            "name": "Santa Ana Department",
            "state_code": "SA",
            "country_code": "SV"
        },
        {
            "name": "Sonsonate Department",
            "state_code": "SO",
            "country_code": "SV"
        },
        {
            "name": "Usulután Department",
            "state_code": "US",
            "country_code": "SV"
        },
        {
            "name": "Annobón Province",
            "state_code": "AN",
            "country_code": "GQ"
        },
        {
            "name": "Bioko Norte Province",
            "state_code": "BN",
            "country_code": "GQ"
        },
        {
            "name": "Bioko Sur Province",
            "state_code": "BS",
            "country_code": "GQ"
        },
        {
            "name": "Centro Sur Province",
            "state_code": "CS",
            "country_code": "GQ"
        },
        {
            "name": "Insular Region",
            "state_code": "I",
            "country_code": "GQ"
        },
        {
            "name": "Kié-Ntem Province",
            "state_code": "KN",
            "country_code": "GQ"
        },
        {
            "name": "Litoral Province",
            "state_code": "LI",
            "country_code": "GQ"
        },
        {
            "name": "Río Muni",
            "state_code": "C",
            "country_code": "GQ"
        },
        {
            "name": "Wele-Nzas Province",
            "state_code": "WN",
            "country_code": "GQ"
        },
        {
            "name": "Anseba Region",
            "state_code": "AN",
            "country_code": "ER"
        },
        {
            "name": "Debub Region",
            "state_code": "DU",
            "country_code": "ER"
        },
        {
            "name": "Gash-Barka Region",
            "state_code": "GB",
            "country_code": "ER"
        },
        {
            "name": "Maekel Region",
            "state_code": "MA",
            "country_code": "ER"
        },
        {
            "name": "Northern Red Sea Region",
            "state_code": "SK",
            "country_code": "ER"
        },
        {
            "name": "Southern Red Sea Region",
            "state_code": "DK",
            "country_code": "ER"
        },
        {
            "name": "Harju County",
            "state_code": "37",
            "country_code": "EE"
        },
        {
            "name": "Hiiu County",
            "state_code": "39",
            "country_code": "EE"
        },
        {
            "name": "Ida-Viru County",
            "state_code": "44",
            "country_code": "EE"
        },
        {
            "name": "Järva County",
            "state_code": "51",
            "country_code": "EE"
        },
        {
            "name": "Jõgeva County",
            "state_code": "49",
            "country_code": "EE"
        },
        {
            "name": "Lääne County",
            "state_code": "57",
            "country_code": "EE"
        },
        {
            "name": "Lääne-Viru County",
            "state_code": "59",
            "country_code": "EE"
        },
        {
            "name": "Pärnu County",
            "state_code": "67",
            "country_code": "EE"
        },
        {
            "name": "Põlva County",
            "state_code": "65",
            "country_code": "EE"
        },
        {
            "name": "Rapla County",
            "state_code": "70",
            "country_code": "EE"
        },
        {
            "name": "Saare County",
            "state_code": "74",
            "country_code": "EE"
        },
        {
            "name": "Tartu County",
            "state_code": "78",
            "country_code": "EE"
        },
        {
            "name": "Valga County",
            "state_code": "82",
            "country_code": "EE"
        },
        {
            "name": "Viljandi County",
            "state_code": "84",
            "country_code": "EE"
        },
        {
            "name": "Võru County",
            "state_code": "86",
            "country_code": "EE"
        },
        {
            "name": "Addis Ababa",
            "state_code": "AA",
            "country_code": "ET"
        },
        {
            "name": "Afar Region",
            "state_code": "AF",
            "country_code": "ET"
        },
        {
            "name": "Amhara Region",
            "state_code": "AM",
            "country_code": "ET"
        },
        {
            "name": "Benishangul-Gumuz Region",
            "state_code": "BE",
            "country_code": "ET"
        },
        {
            "name": "Dire Dawa",
            "state_code": "DD",
            "country_code": "ET"
        },
        {
            "name": "Gambela Region",
            "state_code": "GA",
            "country_code": "ET"
        },
        {
            "name": "Harari Region",
            "state_code": "HA",
            "country_code": "ET"
        },
        {
            "name": "Oromia Region",
            "state_code": "OR",
            "country_code": "ET"
        },
        {
            "name": "Somali Region",
            "state_code": "SO",
            "country_code": "ET"
        },
        {
            "name": "Southern Nations, Nationalities, and Peoples' Region",
            "state_code": "SN",
            "country_code": "ET"
        },
        {
            "name": "Tigray Region",
            "state_code": "TI",
            "country_code": "ET"
        },
        {
            "name": "Ba",
            "state_code": "01",
            "country_code": "FJ"
        },
        {
            "name": "Bua",
            "state_code": "02",
            "country_code": "FJ"
        },
        {
            "name": "Cakaudrove",
            "state_code": "03",
            "country_code": "FJ"
        },
        {
            "name": "Central Division",
            "state_code": "C",
            "country_code": "FJ"
        },
        {
            "name": "Eastern Division",
            "state_code": "E",
            "country_code": "FJ"
        },
        {
            "name": "Kadavu",
            "state_code": "04",
            "country_code": "FJ"
        },
        {
            "name": "Lau",
            "state_code": "05",
            "country_code": "FJ"
        },
        {
            "name": "Lomaiviti",
            "state_code": "06",
            "country_code": "FJ"
        },
        {
            "name": "Macuata",
            "state_code": "07",
            "country_code": "FJ"
        },
        {
            "name": "Nadroga-Navosa",
            "state_code": "08",
            "country_code": "FJ"
        },
        {
            "name": "Naitasiri",
            "state_code": "09",
            "country_code": "FJ"
        },
        {
            "name": "Namosi",
            "state_code": "10",
            "country_code": "FJ"
        },
        {
            "name": "Northern Division",
            "state_code": "N",
            "country_code": "FJ"
        },
        {
            "name": "Ra",
            "state_code": "11",
            "country_code": "FJ"
        },
        {
            "name": "Rewa",
            "state_code": "12",
            "country_code": "FJ"
        },
        {
            "name": "Rotuma",
            "state_code": "R",
            "country_code": "FJ"
        },
        {
            "name": "Serua",
            "state_code": "13",
            "country_code": "FJ"
        },
        {
            "name": "Tailevu",
            "state_code": "14",
            "country_code": "FJ"
        },
        {
            "name": "Western Division",
            "state_code": "W",
            "country_code": "FJ"
        },
        {
            "name": "Åland Islands",
            "state_code": "01",
            "country_code": "FI"
        },
        {
            "name": "Central Finland",
            "state_code": "08",
            "country_code": "FI"
        },
        {
            "name": "Central Ostrobothnia",
            "state_code": "07",
            "country_code": "FI"
        },
        {
            "name": "Eastern Finland Province",
            "state_code": "IS",
            "country_code": "FI"
        },
        {
            "name": "Finland Proper",
            "state_code": "19",
            "country_code": "FI"
        },
        {
            "name": "Kainuu",
            "state_code": "05",
            "country_code": "FI"
        },
        {
            "name": "Kymenlaakso",
            "state_code": "09",
            "country_code": "FI"
        },
        {
            "name": "Lapland",
            "state_code": "LL",
            "country_code": "FI"
        },
        {
            "name": "North Karelia",
            "state_code": "13",
            "country_code": "FI"
        },
        {
            "name": "Northern Ostrobothnia",
            "state_code": "14",
            "country_code": "FI"
        },
        {
            "name": "Northern Savonia",
            "state_code": "15",
            "country_code": "FI"
        },
        {
            "name": "Ostrobothnia",
            "state_code": "12",
            "country_code": "FI"
        },
        {
            "name": "Oulu Province",
            "state_code": "OL",
            "country_code": "FI"
        },
        {
            "name": "Päijänne Tavastia",
            "state_code": "16",
            "country_code": "FI"
        },
        {
            "name": "Pirkanmaa",
            "state_code": "11",
            "country_code": "FI"
        },
        {
            "name": "Satakunta",
            "state_code": "17",
            "country_code": "FI"
        },
        {
            "name": "South Karelia",
            "state_code": "02",
            "country_code": "FI"
        },
        {
            "name": "Southern Ostrobothnia",
            "state_code": "03",
            "country_code": "FI"
        },
        {
            "name": "Southern Savonia",
            "state_code": "04",
            "country_code": "FI"
        },
        {
            "name": "Tavastia Proper",
            "state_code": "06",
            "country_code": "FI"
        },
        {
            "name": "Uusimaa",
            "state_code": "18",
            "country_code": "FI"
        },
        {
            "name": "Ain",
            "state_code": "01",
            "country_code": "FR"
        },
        {
            "name": "Aisne",
            "state_code": "02",
            "country_code": "FR"
        },
        {
            "name": "Allier",
            "state_code": "03",
            "country_code": "FR"
        },
        {
            "name": "Alpes-de-Haute-Provence",
            "state_code": "04",
            "country_code": "FR"
        },
        {
            "name": "Alpes-Maritimes",
            "state_code": "06",
            "country_code": "FR"
        },
        {
            "name": "Alsace",
            "state_code": "6AE",
            "country_code": "FR"
        },
        {
            "name": "Ardèche",
            "state_code": "07",
            "country_code": "FR"
        },
        {
            "name": "Ardennes",
            "state_code": "08",
            "country_code": "FR"
        },
        {
            "name": "Ariège",
            "state_code": "09",
            "country_code": "FR"
        },
        {
            "name": "Aube",
            "state_code": "10",
            "country_code": "FR"
        },
        {
            "name": "Aude",
            "state_code": "11",
            "country_code": "FR"
        },
        {
            "name": "Auvergne-Rhône-Alpes",
            "state_code": "ARA",
            "country_code": "FR"
        },
        {
            "name": "Aveyron",
            "state_code": "12",
            "country_code": "FR"
        },
        {
            "name": "Bas-Rhin",
            "state_code": "67",
            "country_code": "FR"
        },
        {
            "name": "Bouches-du-Rhône",
            "state_code": "13",
            "country_code": "FR"
        },
        {
            "name": "Bourgogne-Franche-Comté",
            "state_code": "BFC",
            "country_code": "FR"
        },
        {
            "name": "Bretagne",
            "state_code": "BRE",
            "country_code": "FR"
        },
        {
            "name": "Calvados",
            "state_code": "14",
            "country_code": "FR"
        },
        {
            "name": "Cantal",
            "state_code": "15",
            "country_code": "FR"
        },
        {
            "name": "Centre-Val de Loire",
            "state_code": "CVL",
            "country_code": "FR"
        },
        {
            "name": "Charente",
            "state_code": "16",
            "country_code": "FR"
        },
        {
            "name": "Charente-Maritime",
            "state_code": "17",
            "country_code": "FR"
        },
        {
            "name": "Cher",
            "state_code": "18",
            "country_code": "FR"
        },
        {
            "name": "Clipperton",
            "state_code": "CP",
            "country_code": "FR"
        },
        {
            "name": "Corrèze",
            "state_code": "19",
            "country_code": "FR"
        },
        {
            "name": "Corse",
            "state_code": "20R",
            "country_code": "FR"
        },
        {
            "name": "Corse-du-Sud",
            "state_code": "2A",
            "country_code": "FR"
        },
        {
            "name": "Côte-d'Or",
            "state_code": "21",
            "country_code": "FR"
        },
        {
            "name": "Côtes-d'Armor",
            "state_code": "22",
            "country_code": "FR"
        },
        {
            "name": "Creuse",
            "state_code": "23",
            "country_code": "FR"
        },
        {
            "name": "Deux-Sèvres",
            "state_code": "79",
            "country_code": "FR"
        },
        {
            "name": "Dordogne",
            "state_code": "24",
            "country_code": "FR"
        },
        {
            "name": "Doubs",
            "state_code": "25",
            "country_code": "FR"
        },
        {
            "name": "Drôme",
            "state_code": "26",
            "country_code": "FR"
        },
        {
            "name": "Essonne",
            "state_code": "91",
            "country_code": "FR"
        },
        {
            "name": "Eure",
            "state_code": "27",
            "country_code": "FR"
        },
        {
            "name": "Eure-et-Loir",
            "state_code": "28",
            "country_code": "FR"
        },
        {
            "name": "Finistère",
            "state_code": "29",
            "country_code": "FR"
        },
        {
            "name": "French Guiana",
            "state_code": "973",
            "country_code": "FR"
        },
        {
            "name": "French Polynesia",
            "state_code": "PF",
            "country_code": "FR"
        },
        {
            "name": "French Southern and Antarctic Lands",
            "state_code": "TF",
            "country_code": "FR"
        },
        {
            "name": "Gard",
            "state_code": "30",
            "country_code": "FR"
        },
        {
            "name": "Gers",
            "state_code": "32",
            "country_code": "FR"
        },
        {
            "name": "Gironde",
            "state_code": "33",
            "country_code": "FR"
        },
        {
            "name": "Grand-Est",
            "state_code": "GES",
            "country_code": "FR"
        },
        {
            "name": "Guadeloupe",
            "state_code": "971",
            "country_code": "FR"
        },
        {
            "name": "Haut-Rhin",
            "state_code": "68",
            "country_code": "FR"
        },
        {
            "name": "Haute-Corse",
            "state_code": "2B",
            "country_code": "FR"
        },
        {
            "name": "Haute-Garonne",
            "state_code": "31",
            "country_code": "FR"
        },
        {
            "name": "Haute-Loire",
            "state_code": "43",
            "country_code": "FR"
        },
        {
            "name": "Haute-Marne",
            "state_code": "52",
            "country_code": "FR"
        },
        {
            "name": "Haute-Saône",
            "state_code": "70",
            "country_code": "FR"
        },
        {
            "name": "Haute-Savoie",
            "state_code": "74",
            "country_code": "FR"
        },
        {
            "name": "Haute-Vienne",
            "state_code": "87",
            "country_code": "FR"
        },
        {
            "name": "Hautes-Alpes",
            "state_code": "05",
            "country_code": "FR"
        },
        {
            "name": "Hautes-Pyrénées",
            "state_code": "65",
            "country_code": "FR"
        },
        {
            "name": "Hauts-de-France",
            "state_code": "HDF",
            "country_code": "FR"
        },
        {
            "name": "Hauts-de-Seine",
            "state_code": "92",
            "country_code": "FR"
        },
        {
            "name": "Hérault",
            "state_code": "34",
            "country_code": "FR"
        },
        {
            "name": "Île-de-France",
            "state_code": "IDF",
            "country_code": "FR"
        },
        {
            "name": "Ille-et-Vilaine",
            "state_code": "35",
            "country_code": "FR"
        },
        {
            "name": "Indre",
            "state_code": "36",
            "country_code": "FR"
        },
        {
            "name": "Indre-et-Loire",
            "state_code": "37",
            "country_code": "FR"
        },
        {
            "name": "Isère",
            "state_code": "38",
            "country_code": "FR"
        },
        {
            "name": "Jura",
            "state_code": "39",
            "country_code": "FR"
        },
        {
            "name": "La Réunion",
            "state_code": "974",
            "country_code": "FR"
        },
        {
            "name": "Landes",
            "state_code": "40",
            "country_code": "FR"
        },
        {
            "name": "Loir-et-Cher",
            "state_code": "41",
            "country_code": "FR"
        },
        {
            "name": "Loire",
            "state_code": "42",
            "country_code": "FR"
        },
        {
            "name": "Loire-Atlantique",
            "state_code": "44",
            "country_code": "FR"
        },
        {
            "name": "Loiret",
            "state_code": "45",
            "country_code": "FR"
        },
        {
            "name": "Lot",
            "state_code": "46",
            "country_code": "FR"
        },
        {
            "name": "Lot-et-Garonne",
            "state_code": "47",
            "country_code": "FR"
        },
        {
            "name": "Lozère",
            "state_code": "48",
            "country_code": "FR"
        },
        {
            "name": "Maine-et-Loire",
            "state_code": "49",
            "country_code": "FR"
        },
        {
            "name": "Manche",
            "state_code": "50",
            "country_code": "FR"
        },
        {
            "name": "Marne",
            "state_code": "51",
            "country_code": "FR"
        },
        {
            "name": "Martinique",
            "state_code": "972",
            "country_code": "FR"
        },
        {
            "name": "Mayenne",
            "state_code": "53",
            "country_code": "FR"
        },
        {
            "name": "Mayotte",
            "state_code": "976",
            "country_code": "FR"
        },
        {
            "name": "Métropole de Lyon",
            "state_code": "69M",
            "country_code": "FR"
        },
        {
            "name": "Meurthe-et-Moselle",
            "state_code": "54",
            "country_code": "FR"
        },
        {
            "name": "Meuse",
            "state_code": "55",
            "country_code": "FR"
        },
        {
            "name": "Morbihan",
            "state_code": "56",
            "country_code": "FR"
        },
        {
            "name": "Moselle",
            "state_code": "57",
            "country_code": "FR"
        },
        {
            "name": "Nièvre",
            "state_code": "58",
            "country_code": "FR"
        },
        {
            "name": "Nord",
            "state_code": "59",
            "country_code": "FR"
        },
        {
            "name": "Normandie",
            "state_code": "NOR",
            "country_code": "FR"
        },
        {
            "name": "Nouvelle-Aquitaine",
            "state_code": "NAQ",
            "country_code": "FR"
        },
        {
            "name": "Occitanie",
            "state_code": "OCC",
            "country_code": "FR"
        },
        {
            "name": "Oise",
            "state_code": "60",
            "country_code": "FR"
        },
        {
            "name": "Orne",
            "state_code": "61",
            "country_code": "FR"
        },
        {
            "name": "Paris",
            "state_code": "75C",
            "country_code": "FR"
        },
        {
            "name": "Pas-de-Calais",
            "state_code": "62",
            "country_code": "FR"
        },
        {
            "name": "Pays-de-la-Loire",
            "state_code": "PDL",
            "country_code": "FR"
        },
        {
            "name": "Provence-Alpes-Côte-d’Azur",
            "state_code": "PAC",
            "country_code": "FR"
        },
        {
            "name": "Puy-de-Dôme",
            "state_code": "63",
            "country_code": "FR"
        },
        {
            "name": "Pyrénées-Atlantiques",
            "state_code": "64",
            "country_code": "FR"
        },
        {
            "name": "Pyrénées-Orientales",
            "state_code": "66",
            "country_code": "FR"
        },
        {
            "name": "Rhône",
            "state_code": "69",
            "country_code": "FR"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "state_code": "PM",
            "country_code": "FR"
        },
        {
            "name": "Saint-Barthélemy",
            "state_code": "BL",
            "country_code": "FR"
        },
        {
            "name": "Saint-Martin",
            "state_code": "MF",
            "country_code": "FR"
        },
        {
            "name": "Saône-et-Loire",
            "state_code": "71",
            "country_code": "FR"
        },
        {
            "name": "Sarthe",
            "state_code": "72",
            "country_code": "FR"
        },
        {
            "name": "Savoie",
            "state_code": "73",
            "country_code": "FR"
        },
        {
            "name": "Seine-et-Marne",
            "state_code": "77",
            "country_code": "FR"
        },
        {
            "name": "Seine-Maritime",
            "state_code": "76",
            "country_code": "FR"
        },
        {
            "name": "Seine-Saint-Denis",
            "state_code": "93",
            "country_code": "FR"
        },
        {
            "name": "Somme",
            "state_code": "80",
            "country_code": "FR"
        },
        {
            "name": "Tarn",
            "state_code": "81",
            "country_code": "FR"
        },
        {
            "name": "Tarn-et-Garonne",
            "state_code": "82",
            "country_code": "FR"
        },
        {
            "name": "Territoire de Belfort",
            "state_code": "90",
            "country_code": "FR"
        },
        {
            "name": "Val-d'Oise",
            "state_code": "95",
            "country_code": "FR"
        },
        {
            "name": "Val-de-Marne",
            "state_code": "94",
            "country_code": "FR"
        },
        {
            "name": "Var",
            "state_code": "83",
            "country_code": "FR"
        },
        {
            "name": "Vaucluse",
            "state_code": "84",
            "country_code": "FR"
        },
        {
            "name": "Vendée",
            "state_code": "85",
            "country_code": "FR"
        },
        {
            "name": "Vienne",
            "state_code": "86",
            "country_code": "FR"
        },
        {
            "name": "Vosges",
            "state_code": "88",
            "country_code": "FR"
        },
        {
            "name": "Wallis and Futuna",
            "state_code": "WF",
            "country_code": "FR"
        },
        {
            "name": "Yonne",
            "state_code": "89",
            "country_code": "FR"
        },
        {
            "name": "Yvelines",
            "state_code": "78",
            "country_code": "FR"
        },
        {
            "name": "Estuaire Province",
            "state_code": "1",
            "country_code": "GA"
        },
        {
            "name": "Haut-Ogooué Province",
            "state_code": "2",
            "country_code": "GA"
        },
        {
            "name": "Moyen-Ogooué Province",
            "state_code": "3",
            "country_code": "GA"
        },
        {
            "name": "Ngounié Province",
            "state_code": "4",
            "country_code": "GA"
        },
        {
            "name": "Nyanga Province",
            "state_code": "5",
            "country_code": "GA"
        },
        {
            "name": "Ogooué-Ivindo Province",
            "state_code": "6",
            "country_code": "GA"
        },
        {
            "name": "Ogooué-Lolo Province",
            "state_code": "7",
            "country_code": "GA"
        },
        {
            "name": "Ogooué-Maritime Province",
            "state_code": "8",
            "country_code": "GA"
        },
        {
            "name": "Woleu-Ntem Province",
            "state_code": "9",
            "country_code": "GA"
        },
        {
            "name": "Banjul",
            "state_code": "B",
            "country_code": "GM"
        },
        {
            "name": "Central River Division",
            "state_code": "M",
            "country_code": "GM"
        },
        {
            "name": "Lower River Division",
            "state_code": "L",
            "country_code": "GM"
        },
        {
            "name": "North Bank Division",
            "state_code": "N",
            "country_code": "GM"
        },
        {
            "name": "Upper River Division",
            "state_code": "U",
            "country_code": "GM"
        },
        {
            "name": "West Coast Division",
            "state_code": "W",
            "country_code": "GM"
        },
        {
            "name": "Adjara",
            "state_code": "AJ",
            "country_code": "GE"
        },
        {
            "name": "Autonomous Republic of Abkhazia",
            "state_code": "AB",
            "country_code": "GE"
        },
        {
            "name": "Guria",
            "state_code": "GU",
            "country_code": "GE"
        },
        {
            "name": "Imereti",
            "state_code": "IM",
            "country_code": "GE"
        },
        {
            "name": "Kakheti",
            "state_code": "KA",
            "country_code": "GE"
        },
        {
            "name": "Khelvachauri Municipality",
            "state_code": "29",
            "country_code": "GE"
        },
        {
            "name": "Kvemo Kartli",
            "state_code": "KK",
            "country_code": "GE"
        },
        {
            "name": "Mtskheta-Mtianeti",
            "state_code": "MM",
            "country_code": "GE"
        },
        {
            "name": "Racha-Lechkhumi and Kvemo Svaneti",
            "state_code": "RL",
            "country_code": "GE"
        },
        {
            "name": "Samegrelo-Zemo Svaneti",
            "state_code": "SZ",
            "country_code": "GE"
        },
        {
            "name": "Samtskhe-Javakheti",
            "state_code": "SJ",
            "country_code": "GE"
        },
        {
            "name": "Senaki Municipality",
            "state_code": "50",
            "country_code": "GE"
        },
        {
            "name": "Shida Kartli",
            "state_code": "SK",
            "country_code": "GE"
        },
        {
            "name": "Tbilisi",
            "state_code": "TB",
            "country_code": "GE"
        },
        {
            "name": "Baden-Württemberg",
            "state_code": "BW",
            "country_code": "DE"
        },
        {
            "name": "Bavaria",
            "state_code": "BY",
            "country_code": "DE"
        },
        {
            "name": "Berlin",
            "state_code": "BE",
            "country_code": "DE"
        },
        {
            "name": "Brandenburg",
            "state_code": "BB",
            "country_code": "DE"
        },
        {
            "name": "Bremen",
            "state_code": "HB",
            "country_code": "DE"
        },
        {
            "name": "Hamburg",
            "state_code": "HH",
            "country_code": "DE"
        },
        {
            "name": "Hesse",
            "state_code": "HE",
            "country_code": "DE"
        },
        {
            "name": "Lower Saxony",
            "state_code": "NI",
            "country_code": "DE"
        },
        {
            "name": "Mecklenburg-Vorpommern",
            "state_code": "MV",
            "country_code": "DE"
        },
        {
            "name": "North Rhine-Westphalia",
            "state_code": "NW",
            "country_code": "DE"
        },
        {
            "name": "Rhineland-Palatinate",
            "state_code": "RP",
            "country_code": "DE"
        },
        {
            "name": "Saarland",
            "state_code": "SL",
            "country_code": "DE"
        },
        {
            "name": "Saxony",
            "state_code": "SN",
            "country_code": "DE"
        },
        {
            "name": "Saxony-Anhalt",
            "state_code": "ST",
            "country_code": "DE"
        },
        {
            "name": "Schleswig-Holstein",
            "state_code": "SH",
            "country_code": "DE"
        },
        {
            "name": "Thuringia",
            "state_code": "TH",
            "country_code": "DE"
        },
        {
            "name": "Ahafo",
            "state_code": "AF",
            "country_code": "GH"
        },
        {
            "name": "Ashanti",
            "state_code": "AH",
            "country_code": "GH"
        },
        {
            "name": "Bono",
            "state_code": "BO",
            "country_code": "GH"
        },
        {
            "name": "Bono East",
            "state_code": "BE",
            "country_code": "GH"
        },
        {
            "name": "Central",
            "state_code": "CP",
            "country_code": "GH"
        },
        {
            "name": "Eastern",
            "state_code": "EP",
            "country_code": "GH"
        },
        {
            "name": "Greater Accra",
            "state_code": "AA",
            "country_code": "GH"
        },
        {
            "name": "North East",
            "state_code": "NE",
            "country_code": "GH"
        },
        {
            "name": "Northern",
            "state_code": "NP",
            "country_code": "GH"
        },
        {
            "name": "Oti",
            "state_code": "OT",
            "country_code": "GH"
        },
        {
            "name": "Savannah",
            "state_code": "SV",
            "country_code": "GH"
        },
        {
            "name": "Upper East",
            "state_code": "UE",
            "country_code": "GH"
        },
        {
            "name": "Upper West",
            "state_code": "UW",
            "country_code": "GH"
        },
        {
            "name": "Volta",
            "state_code": "TV",
            "country_code": "GH"
        },
        {
            "name": "Western",
            "state_code": "WP",
            "country_code": "GH"
        },
        {
            "name": "Western North",
            "state_code": "WN",
            "country_code": "GH"
        },
        {
            "name": "Achaea Regional Unit",
            "state_code": "13",
            "country_code": "GR"
        },
        {
            "name": "Aetolia-Acarnania Regional Unit",
            "state_code": "01",
            "country_code": "GR"
        },
        {
            "name": "Arcadia Prefecture",
            "state_code": "12",
            "country_code": "GR"
        },
        {
            "name": "Argolis Regional Unit",
            "state_code": "11",
            "country_code": "GR"
        },
        {
            "name": "Attica Region",
            "state_code": "I",
            "country_code": "GR"
        },
        {
            "name": "Boeotia Regional Unit",
            "state_code": "03",
            "country_code": "GR"
        },
        {
            "name": "Central Greece Region",
            "state_code": "H",
            "country_code": "GR"
        },
        {
            "name": "Central Macedonia",
            "state_code": "B",
            "country_code": "GR"
        },
        {
            "name": "Chania Regional Unit",
            "state_code": "94",
            "country_code": "GR"
        },
        {
            "name": "Corfu Prefecture",
            "state_code": "22",
            "country_code": "GR"
        },
        {
            "name": "Corinthia Regional Unit",
            "state_code": "15",
            "country_code": "GR"
        },
        {
            "name": "Crete Region",
            "state_code": "M",
            "country_code": "GR"
        },
        {
            "name": "Drama Regional Unit",
            "state_code": "52",
            "country_code": "GR"
        },
        {
            "name": "East Attica Regional Unit",
            "state_code": "A2",
            "country_code": "GR"
        },
        {
            "name": "East Macedonia and Thrace",
            "state_code": "A",
            "country_code": "GR"
        },
        {
            "name": "Epirus Region",
            "state_code": "D",
            "country_code": "GR"
        },
        {
            "name": "Euboea",
            "state_code": "04",
            "country_code": "GR"
        },
        {
            "name": "Grevena Prefecture",
            "state_code": "51",
            "country_code": "GR"
        },
        {
            "name": "Imathia Regional Unit",
            "state_code": "53",
            "country_code": "GR"
        },
        {
            "name": "Ioannina Regional Unit",
            "state_code": "33",
            "country_code": "GR"
        },
        {
            "name": "Ionian Islands Region",
            "state_code": "F",
            "country_code": "GR"
        },
        {
            "name": "Karditsa Regional Unit",
            "state_code": "41",
            "country_code": "GR"
        },
        {
            "name": "Kastoria Regional Unit",
            "state_code": "56",
            "country_code": "GR"
        },
        {
            "name": "Kefalonia Prefecture",
            "state_code": "23",
            "country_code": "GR"
        },
        {
            "name": "Kilkis Regional Unit",
            "state_code": "57",
            "country_code": "GR"
        },
        {
            "name": "Kozani Prefecture",
            "state_code": "58",
            "country_code": "GR"
        },
        {
            "name": "Laconia",
            "state_code": "16",
            "country_code": "GR"
        },
        {
            "name": "Larissa Prefecture",
            "state_code": "42",
            "country_code": "GR"
        },
        {
            "name": "Lefkada Regional Unit",
            "state_code": "24",
            "country_code": "GR"
        },
        {
            "name": "Pella Regional Unit",
            "state_code": "59",
            "country_code": "GR"
        },
        {
            "name": "Peloponnese Region",
            "state_code": "J",
            "country_code": "GR"
        },
        {
            "name": "Phthiotis Prefecture",
            "state_code": "06",
            "country_code": "GR"
        },
        {
            "name": "Preveza Prefecture",
            "state_code": "34",
            "country_code": "GR"
        },
        {
            "name": "Serres Prefecture",
            "state_code": "62",
            "country_code": "GR"
        },
        {
            "name": "South Aegean",
            "state_code": "L",
            "country_code": "GR"
        },
        {
            "name": "Thessaloniki Regional Unit",
            "state_code": "54",
            "country_code": "GR"
        },
        {
            "name": "West Greece Region",
            "state_code": "G",
            "country_code": "GR"
        },
        {
            "name": "West Macedonia Region",
            "state_code": "C",
            "country_code": "GR"
        },
        {
            "name": "Carriacou and Petite Martinique",
            "state_code": "10",
            "country_code": "GD"
        },
        {
            "name": "Saint Andrew Parish",
            "state_code": "01",
            "country_code": "GD"
        },
        {
            "name": "Saint David Parish",
            "state_code": "02",
            "country_code": "GD"
        },
        {
            "name": "Saint George Parish",
            "state_code": "03",
            "country_code": "GD"
        },
        {
            "name": "Saint John Parish",
            "state_code": "04",
            "country_code": "GD"
        },
        {
            "name": "Saint Mark Parish",
            "state_code": "05",
            "country_code": "GD"
        },
        {
            "name": "Saint Patrick Parish",
            "state_code": "06",
            "country_code": "GD"
        },
        {
            "name": "Alta Verapaz Department",
            "state_code": "AV",
            "country_code": "GT"
        },
        {
            "name": "Baja Verapaz Department",
            "state_code": "BV",
            "country_code": "GT"
        },
        {
            "name": "Chimaltenango Department",
            "state_code": "CM",
            "country_code": "GT"
        },
        {
            "name": "Chiquimula Department",
            "state_code": "CQ",
            "country_code": "GT"
        },
        {
            "name": "El Progreso Department",
            "state_code": "PR",
            "country_code": "GT"
        },
        {
            "name": "Escuintla Department",
            "state_code": "ES",
            "country_code": "GT"
        },
        {
            "name": "Guatemala Department",
            "state_code": "GU",
            "country_code": "GT"
        },
        {
            "name": "Huehuetenango Department",
            "state_code": "HU",
            "country_code": "GT"
        },
        {
            "name": "Izabal Department",
            "state_code": "IZ",
            "country_code": "GT"
        },
        {
            "name": "Jalapa Department",
            "state_code": "JA",
            "country_code": "GT"
        },
        {
            "name": "Jutiapa Department",
            "state_code": "JU",
            "country_code": "GT"
        },
        {
            "name": "Petén Department",
            "state_code": "PE",
            "country_code": "GT"
        },
        {
            "name": "Quetzaltenango Department",
            "state_code": "QZ",
            "country_code": "GT"
        },
        {
            "name": "Quiché Department",
            "state_code": "QC",
            "country_code": "GT"
        },
        {
            "name": "Retalhuleu Department",
            "state_code": "RE",
            "country_code": "GT"
        },
        {
            "name": "Sacatepéquez Department",
            "state_code": "SA",
            "country_code": "GT"
        },
        {
            "name": "San Marcos Department",
            "state_code": "SM",
            "country_code": "GT"
        },
        {
            "name": "Santa Rosa Department",
            "state_code": "SR",
            "country_code": "GT"
        },
        {
            "name": "Sololá Department",
            "state_code": "SO",
            "country_code": "GT"
        },
        {
            "name": "Suchitepéquez Department",
            "state_code": "SU",
            "country_code": "GT"
        },
        {
            "name": "Totonicapán Department",
            "state_code": "TO",
            "country_code": "GT"
        },
        {
            "name": "Beyla Prefecture",
            "state_code": "BE",
            "country_code": "GN"
        },
        {
            "name": "Boffa Prefecture",
            "state_code": "BF",
            "country_code": "GN"
        },
        {
            "name": "Boké Prefecture",
            "state_code": "BK",
            "country_code": "GN"
        },
        {
            "name": "Boké Region",
            "state_code": "B",
            "country_code": "GN"
        },
        {
            "name": "Conakry",
            "state_code": "C",
            "country_code": "GN"
        },
        {
            "name": "Coyah Prefecture",
            "state_code": "CO",
            "country_code": "GN"
        },
        {
            "name": "Dabola Prefecture",
            "state_code": "DB",
            "country_code": "GN"
        },
        {
            "name": "Dalaba Prefecture",
            "state_code": "DL",
            "country_code": "GN"
        },
        {
            "name": "Dinguiraye Prefecture",
            "state_code": "DI",
            "country_code": "GN"
        },
        {
            "name": "Dubréka Prefecture",
            "state_code": "DU",
            "country_code": "GN"
        },
        {
            "name": "Faranah Prefecture",
            "state_code": "FA",
            "country_code": "GN"
        },
        {
            "name": "Forécariah Prefecture",
            "state_code": "FO",
            "country_code": "GN"
        },
        {
            "name": "Fria Prefecture",
            "state_code": "FR",
            "country_code": "GN"
        },
        {
            "name": "Gaoual Prefecture",
            "state_code": "GA",
            "country_code": "GN"
        },
        {
            "name": "Guéckédou Prefecture",
            "state_code": "GU",
            "country_code": "GN"
        },
        {
            "name": "Kankan Prefecture",
            "state_code": "KA",
            "country_code": "GN"
        },
        {
            "name": "Kankan Region",
            "state_code": "K",
            "country_code": "GN"
        },
        {
            "name": "Kérouané Prefecture",
            "state_code": "KE",
            "country_code": "GN"
        },
        {
            "name": "Kindia Prefecture",
            "state_code": "KD",
            "country_code": "GN"
        },
        {
            "name": "Kindia Region",
            "state_code": "D",
            "country_code": "GN"
        },
        {
            "name": "Kissidougou Prefecture",
            "state_code": "KS",
            "country_code": "GN"
        },
        {
            "name": "Koubia Prefecture",
            "state_code": "KB",
            "country_code": "GN"
        },
        {
            "name": "Koundara Prefecture",
            "state_code": "KN",
            "country_code": "GN"
        },
        {
            "name": "Kouroussa Prefecture",
            "state_code": "KO",
            "country_code": "GN"
        },
        {
            "name": "Labé Prefecture",
            "state_code": "LA",
            "country_code": "GN"
        },
        {
            "name": "Labé Region",
            "state_code": "L",
            "country_code": "GN"
        },
        {
            "name": "Lélouma Prefecture",
            "state_code": "LE",
            "country_code": "GN"
        },
        {
            "name": "Lola Prefecture",
            "state_code": "LO",
            "country_code": "GN"
        },
        {
            "name": "Macenta Prefecture",
            "state_code": "MC",
            "country_code": "GN"
        },
        {
            "name": "Mali Prefecture",
            "state_code": "ML",
            "country_code": "GN"
        },
        {
            "name": "Mamou Prefecture",
            "state_code": "MM",
            "country_code": "GN"
        },
        {
            "name": "Mamou Region",
            "state_code": "M",
            "country_code": "GN"
        },
        {
            "name": "Mandiana Prefecture",
            "state_code": "MD",
            "country_code": "GN"
        },
        {
            "name": "Nzérékoré Prefecture",
            "state_code": "NZ",
            "country_code": "GN"
        },
        {
            "name": "Nzérékoré Region",
            "state_code": "N",
            "country_code": "GN"
        },
        {
            "name": "Pita Prefecture",
            "state_code": "PI",
            "country_code": "GN"
        },
        {
            "name": "Siguiri Prefecture",
            "state_code": "SI",
            "country_code": "GN"
        },
        {
            "name": "Télimélé Prefecture",
            "state_code": "TE",
            "country_code": "GN"
        },
        {
            "name": "Tougué Prefecture",
            "state_code": "TO",
            "country_code": "GN"
        },
        {
            "name": "Yomou Prefecture",
            "state_code": "YO",
            "country_code": "GN"
        },
        {
            "name": "Bafatá",
            "state_code": "BA",
            "country_code": "GW"
        },
        {
            "name": "Biombo Region",
            "state_code": "BM",
            "country_code": "GW"
        },
        {
            "name": "Bolama Region",
            "state_code": "BL",
            "country_code": "GW"
        },
        {
            "name": "Cacheu Region",
            "state_code": "CA",
            "country_code": "GW"
        },
        {
            "name": "Gabú Region",
            "state_code": "GA",
            "country_code": "GW"
        },
        {
            "name": "Leste Province",
            "state_code": "L",
            "country_code": "GW"
        },
        {
            "name": "Norte Province",
            "state_code": "N",
            "country_code": "GW"
        },
        {
            "name": "Oio Region",
            "state_code": "OI",
            "country_code": "GW"
        },
        {
            "name": "Quinara Region",
            "state_code": "QU",
            "country_code": "GW"
        },
        {
            "name": "Sul Province",
            "state_code": "S",
            "country_code": "GW"
        },
        {
            "name": "Tombali Region",
            "state_code": "TO",
            "country_code": "GW"
        },
        {
            "name": "Barima-Waini",
            "state_code": "BA",
            "country_code": "GY"
        },
        {
            "name": "Cuyuni-Mazaruni",
            "state_code": "CU",
            "country_code": "GY"
        },
        {
            "name": "Demerara-Mahaica",
            "state_code": "DE",
            "country_code": "GY"
        },
        {
            "name": "East Berbice-Corentyne",
            "state_code": "EB",
            "country_code": "GY"
        },
        {
            "name": "Essequibo Islands-West Demerara",
            "state_code": "ES",
            "country_code": "GY"
        },
        {
            "name": "Mahaica-Berbice",
            "state_code": "MA",
            "country_code": "GY"
        },
        {
            "name": "Pomeroon-Supenaam",
            "state_code": "PM",
            "country_code": "GY"
        },
        {
            "name": "Potaro-Siparuni",
            "state_code": "PT",
            "country_code": "GY"
        },
        {
            "name": "Upper Demerara-Berbice",
            "state_code": "UD",
            "country_code": "GY"
        },
        {
            "name": "Upper Takutu-Upper Essequibo",
            "state_code": "UT",
            "country_code": "GY"
        },
        {
            "name": "Artibonite",
            "state_code": "AR",
            "country_code": "HT"
        },
        {
            "name": "Centre",
            "state_code": "CE",
            "country_code": "HT"
        },
        {
            "name": "Grand'Anse",
            "state_code": "GA",
            "country_code": "HT"
        },
        {
            "name": "Nippes",
            "state_code": "NI",
            "country_code": "HT"
        },
        {
            "name": "Nord",
            "state_code": "ND",
            "country_code": "HT"
        },
        {
            "name": "Nord-Est",
            "state_code": "NE",
            "country_code": "HT"
        },
        {
            "name": "Nord-Ouest",
            "state_code": "NO",
            "country_code": "HT"
        },
        {
            "name": "Ouest",
            "state_code": "OU",
            "country_code": "HT"
        },
        {
            "name": "Sud",
            "state_code": "SD",
            "country_code": "HT"
        },
        {
            "name": "Sud-Est",
            "state_code": "SE",
            "country_code": "HT"
        },
        {
            "name": "Atlántida Department",
            "state_code": "AT",
            "country_code": "HN"
        },
        {
            "name": "Bay Islands Department",
            "state_code": "IB",
            "country_code": "HN"
        },
        {
            "name": "Choluteca Department",
            "state_code": "CH",
            "country_code": "HN"
        },
        {
            "name": "Colón Department",
            "state_code": "CL",
            "country_code": "HN"
        },
        {
            "name": "Comayagua Department",
            "state_code": "CM",
            "country_code": "HN"
        },
        {
            "name": "Copán Department",
            "state_code": "CP",
            "country_code": "HN"
        },
        {
            "name": "Cortés Department",
            "state_code": "CR",
            "country_code": "HN"
        },
        {
            "name": "El Paraíso Department",
            "state_code": "EP",
            "country_code": "HN"
        },
        {
            "name": "Francisco Morazán Department",
            "state_code": "FM",
            "country_code": "HN"
        },
        {
            "name": "Gracias a Dios Department",
            "state_code": "GD",
            "country_code": "HN"
        },
        {
            "name": "Intibucá Department",
            "state_code": "IN",
            "country_code": "HN"
        },
        {
            "name": "La Paz Department",
            "state_code": "LP",
            "country_code": "HN"
        },
        {
            "name": "Lempira Department",
            "state_code": "LE",
            "country_code": "HN"
        },
        {
            "name": "Ocotepeque Department",
            "state_code": "OC",
            "country_code": "HN"
        },
        {
            "name": "Olancho Department",
            "state_code": "OL",
            "country_code": "HN"
        },
        {
            "name": "Santa Bárbara Department",
            "state_code": "SB",
            "country_code": "HN"
        },
        {
            "name": "Valle Department",
            "state_code": "VA",
            "country_code": "HN"
        },
        {
            "name": "Yoro Department",
            "state_code": "YO",
            "country_code": "HN"
        },
        {
            "name": "Central and Western District",
            "state_code": "HCW",
            "country_code": "HK"
        },
        {
            "name": "Eastern",
            "state_code": "HEA",
            "country_code": "HK"
        },
        {
            "name": "Islands District",
            "state_code": "NIS",
            "country_code": "HK"
        },
        {
            "name": "Kowloon City",
            "state_code": "KKC",
            "country_code": "HK"
        },
        {
            "name": "Kwai Tsing",
            "state_code": "NKT",
            "country_code": "HK"
        },
        {
            "name": "Kwun Tong",
            "state_code": "KKT",
            "country_code": "HK"
        },
        {
            "name": "North",
            "state_code": "NNO",
            "country_code": "HK"
        },
        {
            "name": "Sai Kung District",
            "state_code": "NSK",
            "country_code": "HK"
        },
        {
            "name": "Sha Tin",
            "state_code": "NST",
            "country_code": "HK"
        },
        {
            "name": "Sham Shui Po",
            "state_code": "KSS",
            "country_code": "HK"
        },
        {
            "name": "Southern",
            "state_code": "HSO",
            "country_code": "HK"
        },
        {
            "name": "Tai Po District",
            "state_code": "NTP",
            "country_code": "KH"
        },
        {
            "name": "Tsuen Wan District",
            "state_code": "NTW",
            "country_code": "HK"
        },
        {
            "name": "Tuen Mun",
            "state_code": "NTM",
            "country_code": "HK"
        },
        {
            "name": "Wan Chai",
            "state_code": "HWC",
            "country_code": "HK"
        },
        {
            "name": "Wong Tai Sin",
            "state_code": "KWT",
            "country_code": "HK"
        },
        {
            "name": "Yau Tsim Mong",
            "state_code": "KYT",
            "country_code": "HK"
        },
        {
            "name": "Yuen Long District",
            "state_code": "NYL",
            "country_code": "HK"
        },
        {
            "name": "Bács-Kiskun",
            "state_code": "BK",
            "country_code": "HU"
        },
        {
            "name": "Baranya",
            "state_code": "BA",
            "country_code": "HU"
        },
        {
            "name": "Békés",
            "state_code": "BE",
            "country_code": "HU"
        },
        {
            "name": "Békéscsaba",
            "state_code": "BC",
            "country_code": "HU"
        },
        {
            "name": "Borsod-Abaúj-Zemplén",
            "state_code": "BZ",
            "country_code": "HU"
        },
        {
            "name": "Budapest",
            "state_code": "BU",
            "country_code": "HU"
        },
        {
            "name": "Csongrád County",
            "state_code": "CS",
            "country_code": "HU"
        },
        {
            "name": "Debrecen",
            "state_code": "DE",
            "country_code": "HU"
        },
        {
            "name": "Dunaújváros",
            "state_code": "DU",
            "country_code": "HU"
        },
        {
            "name": "Eger",
            "state_code": "EG",
            "country_code": "HU"
        },
        {
            "name": "Érd",
            "state_code": "ER",
            "country_code": "HU"
        },
        {
            "name": "Fejér County",
            "state_code": "FE",
            "country_code": "HU"
        },
        {
            "name": "Győr",
            "state_code": "GY",
            "country_code": "HU"
        },
        {
            "name": "Győr-Moson-Sopron County",
            "state_code": "GS",
            "country_code": "HU"
        },
        {
            "name": "Hajdú-Bihar County",
            "state_code": "HB",
            "country_code": "HU"
        },
        {
            "name": "Heves County",
            "state_code": "HE",
            "country_code": "HU"
        },
        {
            "name": "Hódmezővásárhely",
            "state_code": "HV",
            "country_code": "HU"
        },
        {
            "name": "Jász-Nagykun-Szolnok County",
            "state_code": "JN",
            "country_code": "HU"
        },
        {
            "name": "Kaposvár",
            "state_code": "KV",
            "country_code": "HU"
        },
        {
            "name": "Kecskemét",
            "state_code": "KM",
            "country_code": "HU"
        },
        {
            "name": "Komárom-Esztergom",
            "state_code": "KE",
            "country_code": "HU"
        },
        {
            "name": "Miskolc",
            "state_code": "MI",
            "country_code": "HU"
        },
        {
            "name": "Nagykanizsa",
            "state_code": "NK",
            "country_code": "HU"
        },
        {
            "name": "Nógrád County",
            "state_code": "NO",
            "country_code": "HU"
        },
        {
            "name": "Nyíregyháza",
            "state_code": "NY",
            "country_code": "HU"
        },
        {
            "name": "Pécs",
            "state_code": "PS",
            "country_code": "HU"
        },
        {
            "name": "Pest County",
            "state_code": "PE",
            "country_code": "HU"
        },
        {
            "name": "Salgótarján",
            "state_code": "ST",
            "country_code": "HU"
        },
        {
            "name": "Somogy County",
            "state_code": "SO",
            "country_code": "HU"
        },
        {
            "name": "Sopron",
            "state_code": "SN",
            "country_code": "HU"
        },
        {
            "name": "Szabolcs-Szatmár-Bereg County",
            "state_code": "SZ",
            "country_code": "HU"
        },
        {
            "name": "Szeged",
            "state_code": "SD",
            "country_code": "HU"
        },
        {
            "name": "Székesfehérvár",
            "state_code": "SF",
            "country_code": "HU"
        },
        {
            "name": "Szekszárd",
            "state_code": "SS",
            "country_code": "HU"
        },
        {
            "name": "Szolnok",
            "state_code": "SK",
            "country_code": "HU"
        },
        {
            "name": "Szombathely",
            "state_code": "SH",
            "country_code": "HU"
        },
        {
            "name": "Tatabánya",
            "state_code": "TB",
            "country_code": "HU"
        },
        {
            "name": "Tolna County",
            "state_code": "TO",
            "country_code": "HU"
        },
        {
            "name": "Vas County",
            "state_code": "VA",
            "country_code": "HU"
        },
        {
            "name": "Veszprém",
            "state_code": "VM",
            "country_code": "HU"
        },
        {
            "name": "Veszprém County",
            "state_code": "VE",
            "country_code": "HU"
        },
        {
            "name": "Zala County",
            "state_code": "ZA",
            "country_code": "HU"
        },
        {
            "name": "Zalaegerszeg",
            "state_code": "ZE",
            "country_code": "HU"
        },
        {
            "name": "Capital Region",
            "state_code": "1",
            "country_code": "IS"
        },
        {
            "name": "Eastern Region",
            "state_code": "7",
            "country_code": "IS"
        },
        {
            "name": "Northeastern Region",
            "state_code": "6",
            "country_code": "IS"
        },
        {
            "name": "Northwestern Region",
            "state_code": "5",
            "country_code": "IS"
        },
        {
            "name": "Southern Peninsula Region",
            "state_code": "2",
            "country_code": "IS"
        },
        {
            "name": "Southern Region",
            "state_code": "8",
            "country_code": "IS"
        },
        {
            "name": "Western Region",
            "state_code": "3",
            "country_code": "IS"
        },
        {
            "name": "Westfjords",
            "state_code": "4",
            "country_code": "IS"
        },
        {
            "name": "Andaman and Nicobar Islands",
            "state_code": "AN",
            "country_code": "IN"
        },
        {
            "name": "Andhra Pradesh",
            "state_code": "AP",
            "country_code": "IN"
        },
        {
            "name": "Arunachal Pradesh",
            "state_code": "AR",
            "country_code": "IN"
        },
        {
            "name": "Assam",
            "state_code": "AS",
            "country_code": "IN"
        },
        {
            "name": "Bihar",
            "state_code": "BR",
            "country_code": "IN"
        },
        {
            "name": "Chandigarh",
            "state_code": "CH",
            "country_code": "IN"
        },
        {
            "name": "Chhattisgarh",
            "state_code": "CT",
            "country_code": "IN"
        },
        {
            "name": "Dadra and Nagar Haveli and Daman and Diu",
            "state_code": "DH",
            "country_code": "IN"
        },
        {
            "name": "Delhi",
            "state_code": "DL",
            "country_code": "IN"
        },
        {
            "name": "Goa",
            "state_code": "GA",
            "country_code": "IN"
        },
        {
            "name": "Gujarat",
            "state_code": "GJ",
            "country_code": "IN"
        },
        {
            "name": "Haryana",
            "state_code": "HR",
            "country_code": "IN"
        },
        {
            "name": "Himachal Pradesh",
            "state_code": "HP",
            "country_code": "IN"
        },
        {
            "name": "Jammu and Kashmir",
            "state_code": "JK",
            "country_code": "IN"
        },
        {
            "name": "Jharkhand",
            "state_code": "JH",
            "country_code": "IN"
        },
        {
            "name": "Karnataka",
            "state_code": "KA",
            "country_code": "IN"
        },
        {
            "name": "Kerala",
            "state_code": "KL",
            "country_code": "IN"
        },
        {
            "name": "Ladakh",
            "state_code": "LA",
            "country_code": "IN"
        },
        {
            "name": "Lakshadweep",
            "state_code": "LD",
            "country_code": "IN"
        },
        {
            "name": "Madhya Pradesh",
            "state_code": "MP",
            "country_code": "IN"
        },
        {
            "name": "Maharashtra",
            "state_code": "MH",
            "country_code": "IN"
        },
        {
            "name": "Manipur",
            "state_code": "MN",
            "country_code": "IN"
        },
        {
            "name": "Meghalaya",
            "state_code": "ML",
            "country_code": "IN"
        },
        {
            "name": "Mizoram",
            "state_code": "MZ",
            "country_code": "IN"
        },
        {
            "name": "Nagaland",
            "state_code": "NL",
            "country_code": "IN"
        },
        {
            "name": "Odisha",
            "state_code": "OR",
            "country_code": "IN"
        },
        {
            "name": "Puducherry",
            "state_code": "PY",
            "country_code": "IN"
        },
        {
            "name": "Punjab",
            "state_code": "PB",
            "country_code": "IN"
        },
        {
            "name": "Rajasthan",
            "state_code": "RJ",
            "country_code": "IN"
        },
        {
            "name": "Sikkim",
            "state_code": "SK",
            "country_code": "IN"
        },
        {
            "name": "Tamil Nadu",
            "state_code": "TN",
            "country_code": "IN"
        },
        {
            "name": "Telangana",
            "state_code": "TG",
            "country_code": "IN"
        },
        {
            "name": "Tripura",
            "state_code": "TR",
            "country_code": "IN"
        },
        {
            "name": "Uttar Pradesh",
            "state_code": "UP",
            "country_code": "IN"
        },
        {
            "name": "Uttarakhand",
            "state_code": "UT",
            "country_code": "IN"
        },
        {
            "name": "West Bengal",
            "state_code": "WB",
            "country_code": "IN"
        },
        {
            "name": "Aceh",
            "state_code": "AC",
            "country_code": "ID"
        },
        {
            "name": "Bali",
            "state_code": "BA",
            "country_code": "ID"
        },
        {
            "name": "Banten",
            "state_code": "BT",
            "country_code": "ID"
        },
        {
            "name": "Bengkulu",
            "state_code": "BE",
            "country_code": "ID"
        },
        {
            "name": "DI Yogyakarta",
            "state_code": "YO",
            "country_code": "ID"
        },
        {
            "name": "DKI Jakarta",
            "state_code": "JK",
            "country_code": "ID"
        },
        {
            "name": "Gorontalo",
            "state_code": "GO",
            "country_code": "ID"
        },
        {
            "name": "Jambi",
            "state_code": "JA",
            "country_code": "ID"
        },
        {
            "name": "Jawa Barat",
            "state_code": "JB",
            "country_code": "ID"
        },
        {
            "name": "Jawa Tengah",
            "state_code": "JT",
            "country_code": "ID"
        },
        {
            "name": "Jawa Timur",
            "state_code": "JI",
            "country_code": "ID"
        },
        {
            "name": "Kalimantan Barat",
            "state_code": "KB",
            "country_code": "ID"
        },
        {
            "name": "Kalimantan Selatan",
            "state_code": "KS",
            "country_code": "ID"
        },
        {
            "name": "Kalimantan Tengah",
            "state_code": "KT",
            "country_code": "ID"
        },
        {
            "name": "Kalimantan Timur",
            "state_code": "KI",
            "country_code": "ID"
        },
        {
            "name": "Kalimantan Utara",
            "state_code": "KU",
            "country_code": "ID"
        },
        {
            "name": "Kepulauan Bangka Belitung",
            "state_code": "BB",
            "country_code": "ID"
        },
        {
            "name": "Kepulauan Riau",
            "state_code": "KR",
            "country_code": "ID"
        },
        {
            "name": "Lampung",
            "state_code": "LA",
            "country_code": "ID"
        },
        {
            "name": "Maluku",
            "state_code": "MA",
            "country_code": "ID"
        },
        {
            "name": "Maluku Utara",
            "state_code": "MU",
            "country_code": "ID"
        },
        {
            "name": "Nusa Tenggara Barat",
            "state_code": "NB",
            "country_code": "ID"
        },
        {
            "name": "Nusa Tenggara Timur",
            "state_code": "NT",
            "country_code": "ID"
        },
        {
            "name": "Papua",
            "state_code": "PA",
            "country_code": "ID"
        },
        {
            "name": "Papua Barat",
            "state_code": "PB",
            "country_code": "ID"
        },
        {
            "name": "Riau",
            "state_code": "RI",
            "country_code": "ID"
        },
        {
            "name": "Sulawesi Barat",
            "state_code": "SR",
            "country_code": "ID"
        },
        {
            "name": "Sulawesi Selatan",
            "state_code": "SN",
            "country_code": "ID"
        },
        {
            "name": "Sulawesi Tengah",
            "state_code": "ST",
            "country_code": "ID"
        },
        {
            "name": "Sulawesi Tenggara",
            "state_code": "SG",
            "country_code": "ID"
        },
        {
            "name": "Sulawesi Utara",
            "state_code": "SA",
            "country_code": "ID"
        },
        {
            "name": "Sumatera Barat",
            "state_code": "SB",
            "country_code": "ID"
        },
        {
            "name": "Sumatera Selatan",
            "state_code": "SS",
            "country_code": "ID"
        },
        {
            "name": "Sumatera Utara",
            "state_code": "SU",
            "country_code": "ID"
        },
        {
            "name": "Alborz",
            "state_code": "30",
            "country_code": "IR"
        },
        {
            "name": "Ardabil",
            "state_code": "24",
            "country_code": "IR"
        },
        {
            "name": "Bushehr",
            "state_code": "18",
            "country_code": "IR"
        },
        {
            "name": "Chaharmahal and Bakhtiari",
            "state_code": "14",
            "country_code": "IR"
        },
        {
            "name": "East Azerbaijan",
            "state_code": "03",
            "country_code": "IR"
        },
        {
            "name": "Fars",
            "state_code": "07",
            "country_code": "IR"
        },
        {
            "name": "Gilan",
            "state_code": "01",
            "country_code": "IR"
        },
        {
            "name": "Golestan",
            "state_code": "27",
            "country_code": "IR"
        },
        {
            "name": "Hamadan",
            "state_code": "13",
            "country_code": "IR"
        },
        {
            "name": "Hormozgan",
            "state_code": "22",
            "country_code": "IR"
        },
        {
            "name": "Ilam",
            "state_code": "16",
            "country_code": "IR"
        },
        {
            "name": "Isfahan",
            "state_code": "10",
            "country_code": "IR"
        },
        {
            "name": "Kerman",
            "state_code": "08",
            "country_code": "IR"
        },
        {
            "name": "Kermanshah",
            "state_code": "05",
            "country_code": "IR"
        },
        {
            "name": "Khuzestan",
            "state_code": "06",
            "country_code": "IR"
        },
        {
            "name": "Kohgiluyeh and Boyer-Ahmad",
            "state_code": "17",
            "country_code": "IR"
        },
        {
            "name": "Kurdistan",
            "state_code": "12",
            "country_code": "IR"
        },
        {
            "name": "Lorestan",
            "state_code": "15",
            "country_code": "IR"
        },
        {
            "name": "Markazi",
            "state_code": "00",
            "country_code": "IR"
        },
        {
            "name": "Mazandaran",
            "state_code": "02",
            "country_code": "IR"
        },
        {
            "name": "North Khorasan",
            "state_code": "28",
            "country_code": "IR"
        },
        {
            "name": "Qazvin",
            "state_code": "26",
            "country_code": "IR"
        },
        {
            "name": "Qom",
            "state_code": "25",
            "country_code": "IR"
        },
        {
            "name": "Razavi Khorasan",
            "state_code": "09",
            "country_code": "IR"
        },
        {
            "name": "Semnan",
            "state_code": "20",
            "country_code": "IR"
        },
        {
            "name": "Sistan and Baluchestan",
            "state_code": "11",
            "country_code": "IR"
        },
        {
            "name": "South Khorasan",
            "state_code": "29",
            "country_code": "IR"
        },
        {
            "name": "Tehran",
            "state_code": "23",
            "country_code": "IR"
        },
        {
            "name": "West Azarbaijan",
            "state_code": "04",
            "country_code": "IR"
        },
        {
            "name": "Yazd",
            "state_code": "21",
            "country_code": "IR"
        },
        {
            "name": "Zanjan",
            "state_code": "19",
            "country_code": "IR"
        },
        {
            "name": "Al Anbar Governorate",
            "state_code": "AN",
            "country_code": "IQ"
        },
        {
            "name": "Al Muthanna Governorate",
            "state_code": "MU",
            "country_code": "IQ"
        },
        {
            "name": "Al-Qādisiyyah Governorate",
            "state_code": "QA",
            "country_code": "IQ"
        },
        {
            "name": "Babylon Governorate",
            "state_code": "BB",
            "country_code": "IQ"
        },
        {
            "name": "Baghdad Governorate",
            "state_code": "BG",
            "country_code": "IQ"
        },
        {
            "name": "Basra Governorate",
            "state_code": "BA",
            "country_code": "IQ"
        },
        {
            "name": "Dhi Qar Governorate",
            "state_code": "DQ",
            "country_code": "IQ"
        },
        {
            "name": "Diyala Governorate",
            "state_code": "DI",
            "country_code": "IQ"
        },
        {
            "name": "Dohuk Governorate",
            "state_code": "DA",
            "country_code": "IQ"
        },
        {
            "name": "Erbil Governorate",
            "state_code": "AR",
            "country_code": "IQ"
        },
        {
            "name": "Karbala Governorate",
            "state_code": "KA",
            "country_code": "IQ"
        },
        {
            "name": "Kirkuk Governorate",
            "state_code": "KI",
            "country_code": "IQ"
        },
        {
            "name": "Maysan Governorate",
            "state_code": "MA",
            "country_code": "IQ"
        },
        {
            "name": "Najaf Governorate",
            "state_code": "NA",
            "country_code": "IQ"
        },
        {
            "name": "Nineveh Governorate",
            "state_code": "NI",
            "country_code": "IQ"
        },
        {
            "name": "Saladin Governorate",
            "state_code": "SD",
            "country_code": "IQ"
        },
        {
            "name": "Sulaymaniyah Governorate",
            "state_code": "SU",
            "country_code": "IQ"
        },
        {
            "name": "Wasit Governorate",
            "state_code": "WA",
            "country_code": "IQ"
        },
        {
            "name": "Carlow",
            "state_code": "CW",
            "country_code": "IE"
        },
        {
            "name": "Cavan",
            "state_code": "CN",
            "country_code": "IE"
        },
        {
            "name": "Clare",
            "state_code": "CE",
            "country_code": "IE"
        },
        {
            "name": "Connacht",
            "state_code": "C",
            "country_code": "IE"
        },
        {
            "name": "Cork",
            "state_code": "CO",
            "country_code": "IE"
        },
        {
            "name": "Donegal",
            "state_code": "DL",
            "country_code": "IE"
        },
        {
            "name": "Dublin",
            "state_code": "D",
            "country_code": "IE"
        },
        {
            "name": "Galway",
            "state_code": "G",
            "country_code": "IE"
        },
        {
            "name": "Kerry",
            "state_code": "KY",
            "country_code": "IE"
        },
        {
            "name": "Kildare",
            "state_code": "KE",
            "country_code": "IE"
        },
        {
            "name": "Kilkenny",
            "state_code": "KK",
            "country_code": "IE"
        },
        {
            "name": "Laois",
            "state_code": "LS",
            "country_code": "IE"
        },
        {
            "name": "Leinster",
            "state_code": "L",
            "country_code": "IE"
        },
        {
            "name": "Limerick",
            "state_code": "LK",
            "country_code": "IE"
        },
        {
            "name": "Longford",
            "state_code": "LD",
            "country_code": "IE"
        },
        {
            "name": "Louth",
            "state_code": "LH",
            "country_code": "IE"
        },
        {
            "name": "Mayo",
            "state_code": "MO",
            "country_code": "IE"
        },
        {
            "name": "Meath",
            "state_code": "MH",
            "country_code": "IE"
        },
        {
            "name": "Monaghan",
            "state_code": "MN",
            "country_code": "IE"
        },
        {
            "name": "Munster",
            "state_code": "M",
            "country_code": "IE"
        },
        {
            "name": "Offaly",
            "state_code": "OY",
            "country_code": "IE"
        },
        {
            "name": "Roscommon",
            "state_code": "RN",
            "country_code": "IE"
        },
        {
            "name": "Sligo",
            "state_code": "SO",
            "country_code": "IE"
        },
        {
            "name": "Tipperary",
            "state_code": "TA",
            "country_code": "IE"
        },
        {
            "name": "Ulster",
            "state_code": "U",
            "country_code": "IE"
        },
        {
            "name": "Waterford",
            "state_code": "WD",
            "country_code": "IE"
        },
        {
            "name": "Westmeath",
            "state_code": "WH",
            "country_code": "IE"
        },
        {
            "name": "Wexford",
            "state_code": "WX",
            "country_code": "IE"
        },
        {
            "name": "Wicklow",
            "state_code": "WW",
            "country_code": "IE"
        },
        {
            "name": "Central District",
            "state_code": "M",
            "country_code": "IL"
        },
        {
            "name": "Haifa District",
            "state_code": "HA",
            "country_code": "IL"
        },
        {
            "name": "Jerusalem District",
            "state_code": "JM",
            "country_code": "IL"
        },
        {
            "name": "Northern District",
            "state_code": "Z",
            "country_code": "IL"
        },
        {
            "name": "Southern District",
            "state_code": "D",
            "country_code": "IL"
        },
        {
            "name": "Tel Aviv District",
            "state_code": "TA",
            "country_code": "IL"
        },
        {
            "name": "Abruzzo",
            "state_code": "65",
            "country_code": "IT"
        },
        {
            "name": "Agrigento",
            "state_code": "AG",
            "country_code": "IT"
        },
        {
            "name": "Alessandria",
            "state_code": "AL",
            "country_code": "IT"
        },
        {
            "name": "Ancona",
            "state_code": "AN",
            "country_code": "IT"
        },
        {
            "name": "Aosta Valley",
            "state_code": "23",
            "country_code": "IT"
        },
        {
            "name": "Apulia",
            "state_code": "75",
            "country_code": "IT"
        },
        {
            "name": "Ascoli Piceno",
            "state_code": "AP",
            "country_code": "IT"
        },
        {
            "name": "Asti",
            "state_code": "AT",
            "country_code": "IT"
        },
        {
            "name": "Avellino",
            "state_code": "AV",
            "country_code": "IT"
        },
        {
            "name": "Bari",
            "state_code": "BA",
            "country_code": "IT"
        },
        {
            "name": "Barletta-Andria-Trani",
            "state_code": "BT",
            "country_code": "IT"
        },
        {
            "name": "Basilicata",
            "state_code": "77",
            "country_code": "IT"
        },
        {
            "name": "Belluno",
            "state_code": "BL",
            "country_code": "IT"
        },
        {
            "name": "Benevento",
            "state_code": "BN",
            "country_code": "IT"
        },
        {
            "name": "Bergamo",
            "state_code": "BG",
            "country_code": "IT"
        },
        {
            "name": "Biella",
            "state_code": "BI",
            "country_code": "IT"
        },
        {
            "name": "Bologna",
            "state_code": "BO",
            "country_code": "IT"
        },
        {
            "name": "Brescia",
            "state_code": "BS",
            "country_code": "IT"
        },
        {
            "name": "Brindisi",
            "state_code": "BR",
            "country_code": "IT"
        },
        {
            "name": "Cagliari",
            "state_code": "CA",
            "country_code": "IT"
        },
        {
            "name": "Calabria",
            "state_code": "78",
            "country_code": "IT"
        },
        {
            "name": "Caltanissetta",
            "state_code": "CL",
            "country_code": "IT"
        },
        {
            "name": "Campania",
            "state_code": "72",
            "country_code": "IT"
        },
        {
            "name": "Campobasso",
            "state_code": "CB",
            "country_code": "IT"
        },
        {
            "name": "Caserta",
            "state_code": "CE",
            "country_code": "IT"
        },
        {
            "name": "Catania",
            "state_code": "CT",
            "country_code": "IT"
        },
        {
            "name": "Catanzaro",
            "state_code": "CZ",
            "country_code": "IT"
        },
        {
            "name": "Chieti",
            "state_code": "CH",
            "country_code": "IT"
        },
        {
            "name": "Como",
            "state_code": "CO",
            "country_code": "IT"
        },
        {
            "name": "Cosenza",
            "state_code": "CS",
            "country_code": "IT"
        },
        {
            "name": "Cremona",
            "state_code": "CR",
            "country_code": "IT"
        },
        {
            "name": "Crotone",
            "state_code": "KR",
            "country_code": "IT"
        },
        {
            "name": "Cuneo",
            "state_code": "CN",
            "country_code": "IT"
        },
        {
            "name": "Emilia-Romagna",
            "state_code": "45",
            "country_code": "IT"
        },
        {
            "name": "Enna",
            "state_code": "EN",
            "country_code": "IT"
        },
        {
            "name": "Fermo",
            "state_code": "FM",
            "country_code": "IT"
        },
        {
            "name": "Ferrara",
            "state_code": "FE",
            "country_code": "IT"
        },
        {
            "name": "Florence",
            "state_code": "FI",
            "country_code": "IT"
        },
        {
            "name": "Foggia",
            "state_code": "FG",
            "country_code": "IT"
        },
        {
            "name": "Forlì-Cesena",
            "state_code": "FC",
            "country_code": "IT"
        },
        {
            "name": "Friuli–Venezia Giulia",
            "state_code": "36",
            "country_code": "IT"
        },
        {
            "name": "Frosinone",
            "state_code": "FR",
            "country_code": "IT"
        },
        {
            "name": "Genoa",
            "state_code": "GE",
            "country_code": "IT"
        },
        {
            "name": "Gorizia",
            "state_code": "GO",
            "country_code": "IT"
        },
        {
            "name": "Grosseto",
            "state_code": "GR",
            "country_code": "IT"
        },
        {
            "name": "Imperia",
            "state_code": "IM",
            "country_code": "IT"
        },
        {
            "name": "Isernia",
            "state_code": "IS",
            "country_code": "IT"
        },
        {
            "name": "L'Aquila",
            "state_code": "AQ",
            "country_code": "IT"
        },
        {
            "name": "La Spezia",
            "state_code": "SP",
            "country_code": "IT"
        },
        {
            "name": "Latina",
            "state_code": "LT",
            "country_code": "IT"
        },
        {
            "name": "Lazio",
            "state_code": "62",
            "country_code": "IT"
        },
        {
            "name": "Lecce",
            "state_code": "LE",
            "country_code": "IT"
        },
        {
            "name": "Lecco",
            "state_code": "LC",
            "country_code": "IT"
        },
        {
            "name": "Liguria",
            "state_code": "42",
            "country_code": "IT"
        },
        {
            "name": "Livorno",
            "state_code": "LI",
            "country_code": "IT"
        },
        {
            "name": "Lodi",
            "state_code": "LO",
            "country_code": "IT"
        },
        {
            "name": "Lombardy",
            "state_code": "25",
            "country_code": "IT"
        },
        {
            "name": "Lucca",
            "state_code": "LU",
            "country_code": "IT"
        },
        {
            "name": "Macerata",
            "state_code": "MC",
            "country_code": "IT"
        },
        {
            "name": "Mantua",
            "state_code": "MN",
            "country_code": "IT"
        },
        {
            "name": "Marche",
            "state_code": "57",
            "country_code": "IT"
        },
        {
            "name": "Massa and Carrara",
            "state_code": "MS",
            "country_code": "IT"
        },
        {
            "name": "Matera",
            "state_code": "MT",
            "country_code": "IT"
        },
        {
            "name": "Medio Campidano",
            "state_code": "VS",
            "country_code": "IT"
        },
        {
            "name": "Messina",
            "state_code": "ME",
            "country_code": "IT"
        },
        {
            "name": "Milan",
            "state_code": "MI",
            "country_code": "IT"
        },
        {
            "name": "Modena",
            "state_code": "MO",
            "country_code": "IT"
        },
        {
            "name": "Molise",
            "state_code": "67",
            "country_code": "IT"
        },
        {
            "name": "Monza and Brianza",
            "state_code": "MB",
            "country_code": "IT"
        },
        {
            "name": "Naples",
            "state_code": "NA",
            "country_code": "IT"
        },
        {
            "name": "Novara",
            "state_code": "NO",
            "country_code": "IT"
        },
        {
            "name": "Nuoro",
            "state_code": "NU",
            "country_code": "IT"
        },
        {
            "name": "Oristano",
            "state_code": "OR",
            "country_code": "IT"
        },
        {
            "name": "Padua",
            "state_code": "PD",
            "country_code": "IT"
        },
        {
            "name": "Palermo",
            "state_code": "PA",
            "country_code": "IT"
        },
        {
            "name": "Parma",
            "state_code": "PR",
            "country_code": "IT"
        },
        {
            "name": "Pavia",
            "state_code": "PV",
            "country_code": "IT"
        },
        {
            "name": "Perugia",
            "state_code": "PG",
            "country_code": "IT"
        },
        {
            "name": "Pesaro and Urbino",
            "state_code": "PU",
            "country_code": "IT"
        },
        {
            "name": "Pescara",
            "state_code": "PE",
            "country_code": "IT"
        },
        {
            "name": "Piacenza",
            "state_code": "PC",
            "country_code": "IT"
        },
        {
            "name": "Piedmont",
            "state_code": "21",
            "country_code": "IT"
        },
        {
            "name": "Pisa",
            "state_code": "PI",
            "country_code": "IT"
        },
        {
            "name": "Pistoia",
            "state_code": "PT",
            "country_code": "IT"
        },
        {
            "name": "Pordenone",
            "state_code": "PN",
            "country_code": "IT"
        },
        {
            "name": "Potenza",
            "state_code": "PZ",
            "country_code": "IT"
        },
        {
            "name": "Prato",
            "state_code": "PO",
            "country_code": "IT"
        },
        {
            "name": "Ragusa",
            "state_code": "RG",
            "country_code": "IT"
        },
        {
            "name": "Ravenna",
            "state_code": "RA",
            "country_code": "IT"
        },
        {
            "name": "Reggio Calabria",
            "state_code": "RC",
            "country_code": "IT"
        },
        {
            "name": "Reggio Emilia",
            "state_code": "RE",
            "country_code": "IT"
        },
        {
            "name": "Rieti",
            "state_code": "RI",
            "country_code": "IT"
        },
        {
            "name": "Rimini",
            "state_code": "RN",
            "country_code": "IT"
        },
        {
            "name": "Rome",
            "state_code": "RM",
            "country_code": "IT"
        },
        {
            "name": "Rovigo",
            "state_code": "RO",
            "country_code": "IT"
        },
        {
            "name": "Salerno",
            "state_code": "SA",
            "country_code": "IT"
        },
        {
            "name": "Sardinia",
            "state_code": "88",
            "country_code": "IT"
        },
        {
            "name": "Sassari",
            "state_code": "SS",
            "country_code": "IT"
        },
        {
            "name": "Savona",
            "state_code": "SV",
            "country_code": "IT"
        },
        {
            "name": "Sicily",
            "state_code": "82",
            "country_code": "IT"
        },
        {
            "name": "Siena",
            "state_code": "SI",
            "country_code": "IT"
        },
        {
            "name": "Siracusa",
            "state_code": "SR",
            "country_code": "IT"
        },
        {
            "name": "Sondrio",
            "state_code": "SO",
            "country_code": "IT"
        },
        {
            "name": "South Sardinia",
            "state_code": "SU",
            "country_code": "IT"
        },
        {
            "name": "South Tyrol",
            "state_code": "BZ",
            "country_code": "IT"
        },
        {
            "name": "Taranto",
            "state_code": "TA",
            "country_code": "IT"
        },
        {
            "name": "Teramo",
            "state_code": "TE",
            "country_code": "IT"
        },
        {
            "name": "Terni",
            "state_code": "TR",
            "country_code": "IT"
        },
        {
            "name": "Trapani",
            "state_code": "TP",
            "country_code": "IT"
        },
        {
            "name": "Trentino",
            "state_code": "TN",
            "country_code": "IT"
        },
        {
            "name": "Trentino-South Tyrol",
            "state_code": "32",
            "country_code": "IT"
        },
        {
            "name": "Treviso",
            "state_code": "TV",
            "country_code": "IT"
        },
        {
            "name": "Trieste",
            "state_code": "TS",
            "country_code": "IT"
        },
        {
            "name": "Turin",
            "state_code": "TO",
            "country_code": "IT"
        },
        {
            "name": "Tuscany",
            "state_code": "52",
            "country_code": "IT"
        },
        {
            "name": "Udine",
            "state_code": "UD",
            "country_code": "IT"
        },
        {
            "name": "Umbria",
            "state_code": "55",
            "country_code": "IT"
        },
        {
            "name": "Varese",
            "state_code": "VA",
            "country_code": "IT"
        },
        {
            "name": "Veneto",
            "state_code": "34",
            "country_code": "IT"
        },
        {
            "name": "Venice",
            "state_code": "VE",
            "country_code": "IT"
        },
        {
            "name": "Verbano-Cusio-Ossola",
            "state_code": "VB",
            "country_code": "IT"
        },
        {
            "name": "Vercelli",
            "state_code": "VC",
            "country_code": "IT"
        },
        {
            "name": "Verona",
            "state_code": "VR",
            "country_code": "IT"
        },
        {
            "name": "Vibo Valentia",
            "state_code": "VV",
            "country_code": "IT"
        },
        {
            "name": "Vicenza",
            "state_code": "VI",
            "country_code": "IT"
        },
        {
            "name": "Viterbo",
            "state_code": "VT",
            "country_code": "IT"
        },
        {
            "name": "Clarendon Parish",
            "state_code": "13",
            "country_code": "JM"
        },
        {
            "name": "Hanover Parish",
            "state_code": "09",
            "country_code": "JM"
        },
        {
            "name": "Kingston Parish",
            "state_code": "01",
            "country_code": "JM"
        },
        {
            "name": "Manchester Parish",
            "state_code": "12",
            "country_code": "JM"
        },
        {
            "name": "Portland Parish",
            "state_code": "04",
            "country_code": "JM"
        },
        {
            "name": "Saint Andrew",
            "state_code": "02",
            "country_code": "JM"
        },
        {
            "name": "Saint Ann Parish",
            "state_code": "06",
            "country_code": "JM"
        },
        {
            "name": "Saint Catherine Parish",
            "state_code": "14",
            "country_code": "JM"
        },
        {
            "name": "Saint Elizabeth Parish",
            "state_code": "11",
            "country_code": "JM"
        },
        {
            "name": "Saint James Parish",
            "state_code": "08",
            "country_code": "JM"
        },
        {
            "name": "Saint Mary Parish",
            "state_code": "05",
            "country_code": "JM"
        },
        {
            "name": "Saint Thomas Parish",
            "state_code": "03",
            "country_code": "JM"
        },
        {
            "name": "Trelawny Parish",
            "state_code": "07",
            "country_code": "JM"
        },
        {
            "name": "Westmoreland Parish",
            "state_code": "10",
            "country_code": "JM"
        },
        {
            "name": "Aichi Prefecture",
            "state_code": "23",
            "country_code": "JP"
        },
        {
            "name": "Akita Prefecture",
            "state_code": "05",
            "country_code": "JP"
        },
        {
            "name": "Aomori Prefecture",
            "state_code": "02",
            "country_code": "JP"
        },
        {
            "name": "Chiba Prefecture",
            "state_code": "12",
            "country_code": "JP"
        },
        {
            "name": "Ehime Prefecture",
            "state_code": "38",
            "country_code": "JP"
        },
        {
            "name": "Fukui Prefecture",
            "state_code": "18",
            "country_code": "JP"
        },
        {
            "name": "Fukuoka Prefecture",
            "state_code": "40",
            "country_code": "JP"
        },
        {
            "name": "Fukushima Prefecture",
            "state_code": "07",
            "country_code": "JP"
        },
        {
            "name": "Gifu Prefecture",
            "state_code": "21",
            "country_code": "JP"
        },
        {
            "name": "Gunma Prefecture",
            "state_code": "10",
            "country_code": "JP"
        },
        {
            "name": "Hiroshima Prefecture",
            "state_code": "34",
            "country_code": "JP"
        },
        {
            "name": "Hokkaidō Prefecture",
            "state_code": "01",
            "country_code": "JP"
        },
        {
            "name": "Hyōgo Prefecture",
            "state_code": "28",
            "country_code": "JP"
        },
        {
            "name": "Ibaraki Prefecture",
            "state_code": "08",
            "country_code": "JP"
        },
        {
            "name": "Ishikawa Prefecture",
            "state_code": "17",
            "country_code": "JP"
        },
        {
            "name": "Iwate Prefecture",
            "state_code": "03",
            "country_code": "JP"
        },
        {
            "name": "Kagawa Prefecture",
            "state_code": "37",
            "country_code": "JP"
        },
        {
            "name": "Kagoshima Prefecture",
            "state_code": "46",
            "country_code": "JP"
        },
        {
            "name": "Kanagawa Prefecture",
            "state_code": "14",
            "country_code": "JP"
        },
        {
            "name": "Kōchi Prefecture",
            "state_code": "39",
            "country_code": "JP"
        },
        {
            "name": "Kumamoto Prefecture",
            "state_code": "43",
            "country_code": "JP"
        },
        {
            "name": "Kyōto Prefecture",
            "state_code": "26",
            "country_code": "JP"
        },
        {
            "name": "Mie Prefecture",
            "state_code": "24",
            "country_code": "JP"
        },
        {
            "name": "Miyagi Prefecture",
            "state_code": "04",
            "country_code": "JP"
        },
        {
            "name": "Miyazaki Prefecture",
            "state_code": "45",
            "country_code": "JP"
        },
        {
            "name": "Nagano Prefecture",
            "state_code": "20",
            "country_code": "JP"
        },
        {
            "name": "Nagasaki Prefecture",
            "state_code": "42",
            "country_code": "JP"
        },
        {
            "name": "Nara Prefecture",
            "state_code": "29",
            "country_code": "JP"
        },
        {
            "name": "Niigata Prefecture",
            "state_code": "15",
            "country_code": "JP"
        },
        {
            "name": "Ōita Prefecture",
            "state_code": "44",
            "country_code": "JP"
        },
        {
            "name": "Okayama Prefecture",
            "state_code": "33",
            "country_code": "JP"
        },
        {
            "name": "Okinawa Prefecture",
            "state_code": "47",
            "country_code": "JP"
        },
        {
            "name": "Ōsaka Prefecture",
            "state_code": "27",
            "country_code": "JP"
        },
        {
            "name": "Saga Prefecture",
            "state_code": "41",
            "country_code": "JP"
        },
        {
            "name": "Saitama Prefecture",
            "state_code": "11",
            "country_code": "JP"
        },
        {
            "name": "Shiga Prefecture",
            "state_code": "25",
            "country_code": "JP"
        },
        {
            "name": "Shimane Prefecture",
            "state_code": "32",
            "country_code": "JP"
        },
        {
            "name": "Shizuoka Prefecture",
            "state_code": "22",
            "country_code": "JP"
        },
        {
            "name": "Tochigi Prefecture",
            "state_code": "09",
            "country_code": "JP"
        },
        {
            "name": "Tokushima Prefecture",
            "state_code": "36",
            "country_code": "JP"
        },
        {
            "name": "Tokyo",
            "state_code": "13",
            "country_code": "JP"
        },
        {
            "name": "Tottori Prefecture",
            "state_code": "31",
            "country_code": "JP"
        },
        {
            "name": "Toyama Prefecture",
            "state_code": "16",
            "country_code": "JP"
        },
        {
            "name": "Wakayama Prefecture",
            "state_code": "30",
            "country_code": "JP"
        },
        {
            "name": "Yamagata Prefecture",
            "state_code": "06",
            "country_code": "JP"
        },
        {
            "name": "Yamaguchi Prefecture",
            "state_code": "35",
            "country_code": "JP"
        },
        {
            "name": "Yamanashi Prefecture",
            "state_code": "19",
            "country_code": "JP"
        },
        {
            "name": "Ajloun Governorate",
            "state_code": "AJ",
            "country_code": "JO"
        },
        {
            "name": "Amman Governorate",
            "state_code": "AM",
            "country_code": "JO"
        },
        {
            "name": "Aqaba Governorate",
            "state_code": "AQ",
            "country_code": "JO"
        },
        {
            "name": "Balqa Governorate",
            "state_code": "BA",
            "country_code": "JO"
        },
        {
            "name": "Irbid Governorate",
            "state_code": "IR",
            "country_code": "JO"
        },
        {
            "name": "Jerash Governorate",
            "state_code": "JA",
            "country_code": "JO"
        },
        {
            "name": "Karak Governorate",
            "state_code": "KA",
            "country_code": "JO"
        },
        {
            "name": "Ma'an Governorate",
            "state_code": "MN",
            "country_code": "JO"
        },
        {
            "name": "Madaba Governorate",
            "state_code": "MD",
            "country_code": "JO"
        },
        {
            "name": "Mafraq Governorate",
            "state_code": "MA",
            "country_code": "JO"
        },
        {
            "name": "Tafilah Governorate",
            "state_code": "AT",
            "country_code": "JO"
        },
        {
            "name": "Zarqa Governorate",
            "state_code": "AZ",
            "country_code": "JO"
        },
        {
            "name": "Akmola Region",
            "state_code": "AKM",
            "country_code": "KZ"
        },
        {
            "name": "Aktobe Region",
            "state_code": "AKT",
            "country_code": "KZ"
        },
        {
            "name": "Almaty",
            "state_code": "ALA",
            "country_code": "KZ"
        },
        {
            "name": "Almaty Region",
            "state_code": "ALM",
            "country_code": "KZ"
        },
        {
            "name": "Atyrau Region",
            "state_code": "ATY",
            "country_code": "KZ"
        },
        {
            "name": "Baikonur",
            "state_code": "BAY",
            "country_code": "KZ"
        },
        {
            "name": "East Kazakhstan Region",
            "state_code": "VOS",
            "country_code": "KZ"
        },
        {
            "name": "Jambyl Region",
            "state_code": "ZHA",
            "country_code": "KZ"
        },
        {
            "name": "Karaganda Region",
            "state_code": "KAR",
            "country_code": "KZ"
        },
        {
            "name": "Kostanay Region",
            "state_code": "KUS",
            "country_code": "KZ"
        },
        {
            "name": "Kyzylorda Region",
            "state_code": "KZY",
            "country_code": "KZ"
        },
        {
            "name": "Mangystau Region",
            "state_code": "MAN",
            "country_code": "KZ"
        },
        {
            "name": "North Kazakhstan Region",
            "state_code": "SEV",
            "country_code": "KZ"
        },
        {
            "name": "Nur-Sultan",
            "state_code": "AST",
            "country_code": "KZ"
        },
        {
            "name": "Pavlodar Region",
            "state_code": "PAV",
            "country_code": "KZ"
        },
        {
            "name": "Turkestan Region",
            "state_code": "YUZ",
            "country_code": "KZ"
        },
        {
            "name": "West Kazakhstan Province",
            "state_code": "ZAP",
            "country_code": "KZ"
        },
        {
            "name": "Baringo",
            "state_code": "01",
            "country_code": "KE"
        },
        {
            "name": "Bomet",
            "state_code": "02",
            "country_code": "KE"
        },
        {
            "name": "Bungoma",
            "state_code": "03",
            "country_code": "KE"
        },
        {
            "name": "Busia",
            "state_code": "04",
            "country_code": "KE"
        },
        {
            "name": "Elgeyo-Marakwet",
            "state_code": "05",
            "country_code": "KE"
        },
        {
            "name": "Embu",
            "state_code": "06",
            "country_code": "KE"
        },
        {
            "name": "Garissa",
            "state_code": "07",
            "country_code": "KE"
        },
        {
            "name": "Homa Bay",
            "state_code": "08",
            "country_code": "KE"
        },
        {
            "name": "Isiolo",
            "state_code": "09",
            "country_code": "KE"
        },
        {
            "name": "Kajiado",
            "state_code": "10",
            "country_code": "KE"
        },
        {
            "name": "Kakamega",
            "state_code": "11",
            "country_code": "KE"
        },
        {
            "name": "Kericho",
            "state_code": "12",
            "country_code": "KE"
        },
        {
            "name": "Kiambu",
            "state_code": "13",
            "country_code": "KE"
        },
        {
            "name": "Kilifi",
            "state_code": "14",
            "country_code": "KE"
        },
        {
            "name": "Kirinyaga",
            "state_code": "15",
            "country_code": "KE"
        },
        {
            "name": "Kisii",
            "state_code": "16",
            "country_code": "KE"
        },
        {
            "name": "Kisumu",
            "state_code": "17",
            "country_code": "KE"
        },
        {
            "name": "Kitui",
            "state_code": "18",
            "country_code": "KE"
        },
        {
            "name": "Kwale",
            "state_code": "19",
            "country_code": "KE"
        },
        {
            "name": "Laikipia",
            "state_code": "20",
            "country_code": "KE"
        },
        {
            "name": "Lamu",
            "state_code": "21",
            "country_code": "KE"
        },
        {
            "name": "Machakos",
            "state_code": "22",
            "country_code": "KE"
        },
        {
            "name": "Makueni",
            "state_code": "23",
            "country_code": "KE"
        },
        {
            "name": "Mandera",
            "state_code": "24",
            "country_code": "KE"
        },
        {
            "name": "Marsabit",
            "state_code": "25",
            "country_code": "KE"
        },
        {
            "name": "Meru",
            "state_code": "26",
            "country_code": "KE"
        },
        {
            "name": "Migori",
            "state_code": "27",
            "country_code": "KE"
        },
        {
            "name": "Mombasa",
            "state_code": "28",
            "country_code": "KE"
        },
        {
            "name": "Murang'a",
            "state_code": "29",
            "country_code": "KE"
        },
        {
            "name": "Nairobi City",
            "state_code": "30",
            "country_code": "KE"
        },
        {
            "name": "Nakuru",
            "state_code": "31",
            "country_code": "KE"
        },
        {
            "name": "Nandi",
            "state_code": "32",
            "country_code": "KE"
        },
        {
            "name": "Narok",
            "state_code": "33",
            "country_code": "KE"
        },
        {
            "name": "Nyamira",
            "state_code": "34",
            "country_code": "KE"
        },
        {
            "name": "Nyandarua",
            "state_code": "35",
            "country_code": "KE"
        },
        {
            "name": "Nyeri",
            "state_code": "36",
            "country_code": "KE"
        },
        {
            "name": "Samburu",
            "state_code": "37",
            "country_code": "KE"
        },
        {
            "name": "Siaya",
            "state_code": "38",
            "country_code": "KE"
        },
        {
            "name": "Taita–Taveta",
            "state_code": "39",
            "country_code": "KE"
        },
        {
            "name": "Tana River",
            "state_code": "40",
            "country_code": "KE"
        },
        {
            "name": "Tharaka-Nithi",
            "state_code": "41",
            "country_code": "KE"
        },
        {
            "name": "Trans Nzoia",
            "state_code": "42",
            "country_code": "KE"
        },
        {
            "name": "Turkana",
            "state_code": "43",
            "country_code": "KE"
        },
        {
            "name": "Uasin Gishu",
            "state_code": "44",
            "country_code": "KE"
        },
        {
            "name": "Vihiga",
            "state_code": "45",
            "country_code": "KE"
        },
        {
            "name": "Wajir",
            "state_code": "46",
            "country_code": "KE"
        },
        {
            "name": "West Pokot",
            "state_code": "47",
            "country_code": "KE"
        },
        {
            "name": "Gilbert Islands",
            "state_code": "G",
            "country_code": "KI"
        },
        {
            "name": "Line Islands",
            "state_code": "L",
            "country_code": "KI"
        },
        {
            "name": "Phoenix Islands",
            "state_code": "P",
            "country_code": "KI"
        },
        {
            "name": "Đakovica District (Gjakove)",
            "state_code": "XDG",
            "country_code": "XK"
        },
        {
            "name": "Gjilan District",
            "state_code": "XGJ",
            "country_code": "XK"
        },
        {
            "name": "Kosovska Mitrovica District",
            "state_code": "XKM",
            "country_code": "XK"
        },
        {
            "name": "Peć District",
            "state_code": "XPE",
            "country_code": "XK"
        },
        {
            "name": "Pristina (Priştine)",
            "state_code": "XPI",
            "country_code": "XK"
        },
        {
            "name": "Prizren District",
            "state_code": "XPR",
            "country_code": "XK"
        },
        {
            "name": "Uroševac District (Ferizaj)",
            "state_code": "XUF",
            "country_code": "XK"
        },
        {
            "name": "Al Ahmadi Governorate",
            "state_code": "AH",
            "country_code": "KW"
        },
        {
            "name": "Al Farwaniyah Governorate",
            "state_code": "FA",
            "country_code": "KW"
        },
        {
            "name": "Al Jahra Governorate",
            "state_code": "JA",
            "country_code": "KW"
        },
        {
            "name": "Capital Governorate",
            "state_code": "KU",
            "country_code": "KW"
        },
        {
            "name": "Hawalli Governorate",
            "state_code": "HA",
            "country_code": "KW"
        },
        {
            "name": "Mubarak Al-Kabeer Governorate",
            "state_code": "MU",
            "country_code": "KW"
        },
        {
            "name": "Batken Region",
            "state_code": "B",
            "country_code": "KG"
        },
        {
            "name": "Bishkek",
            "state_code": "GB",
            "country_code": "KG"
        },
        {
            "name": "Chuy Region",
            "state_code": "C",
            "country_code": "KG"
        },
        {
            "name": "Issyk-Kul Region",
            "state_code": "Y",
            "country_code": "KG"
        },
        {
            "name": "Jalal-Abad Region",
            "state_code": "J",
            "country_code": "KG"
        },
        {
            "name": "Naryn Region",
            "state_code": "N",
            "country_code": "KG"
        },
        {
            "name": "Osh",
            "state_code": "GO",
            "country_code": "KG"
        },
        {
            "name": "Osh Region",
            "state_code": "O",
            "country_code": "KG"
        },
        {
            "name": "Talas Region",
            "state_code": "T",
            "country_code": "KG"
        },
        {
            "name": "Attapeu Province",
            "state_code": "AT",
            "country_code": "LA"
        },
        {
            "name": "Bokeo Province",
            "state_code": "BK",
            "country_code": "LA"
        },
        {
            "name": "Bolikhamsai Province",
            "state_code": "BL",
            "country_code": "LA"
        },
        {
            "name": "Champasak Province",
            "state_code": "CH",
            "country_code": "LA"
        },
        {
            "name": "Houaphanh Province",
            "state_code": "HO",
            "country_code": "LA"
        },
        {
            "name": "Khammouane Province",
            "state_code": "KH",
            "country_code": "LA"
        },
        {
            "name": "Luang Namtha Province",
            "state_code": "LM",
            "country_code": "LA"
        },
        {
            "name": "Luang Prabang Province",
            "state_code": "LP",
            "country_code": "LA"
        },
        {
            "name": "Oudomxay Province",
            "state_code": "OU",
            "country_code": "LA"
        },
        {
            "name": "Phongsaly Province",
            "state_code": "PH",
            "country_code": "LA"
        },
        {
            "name": "Sainyabuli Province",
            "state_code": "XA",
            "country_code": "LA"
        },
        {
            "name": "Salavan Province",
            "state_code": "SL",
            "country_code": "LA"
        },
        {
            "name": "Savannakhet Province",
            "state_code": "SV",
            "country_code": "LA"
        },
        {
            "name": "Sekong Province",
            "state_code": "XE",
            "country_code": "LA"
        },
        {
            "name": "Vientiane Prefecture",
            "state_code": "VT",
            "country_code": "LA"
        },
        {
            "name": "Vientiane Province",
            "state_code": "VI",
            "country_code": "LA"
        },
        {
            "name": "Xaisomboun",
            "state_code": "XN",
            "country_code": "LA"
        },
        {
            "name": "Xaisomboun Province",
            "state_code": "XS",
            "country_code": "LA"
        },
        {
            "name": "Xiangkhouang Province",
            "state_code": "XI",
            "country_code": "LA"
        },
        {
            "name": "Aglona Municipality",
            "state_code": "001",
            "country_code": "LV"
        },
        {
            "name": "Aizkraukle Municipality",
            "state_code": "002",
            "country_code": "LV"
        },
        {
            "name": "Aizpute Municipality",
            "state_code": "003",
            "country_code": "LV"
        },
        {
            "name": "Aknīste Municipality",
            "state_code": "004",
            "country_code": "LV"
        },
        {
            "name": "Aloja Municipality",
            "state_code": "005",
            "country_code": "LV"
        },
        {
            "name": "Alsunga Municipality",
            "state_code": "006",
            "country_code": "LV"
        },
        {
            "name": "Alūksne Municipality",
            "state_code": "007",
            "country_code": "LV"
        },
        {
            "name": "Amata Municipality",
            "state_code": "008",
            "country_code": "LV"
        },
        {
            "name": "Ape Municipality",
            "state_code": "009",
            "country_code": "LV"
        },
        {
            "name": "Auce Municipality",
            "state_code": "010",
            "country_code": "LV"
        },
        {
            "name": "Babīte Municipality",
            "state_code": "012",
            "country_code": "LV"
        },
        {
            "name": "Baldone Municipality",
            "state_code": "013",
            "country_code": "LV"
        },
        {
            "name": "Baltinava Municipality",
            "state_code": "014",
            "country_code": "LV"
        },
        {
            "name": "Balvi Municipality",
            "state_code": "015",
            "country_code": "LV"
        },
        {
            "name": "Bauska Municipality",
            "state_code": "016",
            "country_code": "LV"
        },
        {
            "name": "Beverīna Municipality",
            "state_code": "017",
            "country_code": "LV"
        },
        {
            "name": "Brocēni Municipality",
            "state_code": "018",
            "country_code": "LV"
        },
        {
            "name": "Burtnieki Municipality",
            "state_code": "019",
            "country_code": "LV"
        },
        {
            "name": "Carnikava Municipality",
            "state_code": "020",
            "country_code": "LV"
        },
        {
            "name": "Cēsis Municipality",
            "state_code": "022",
            "country_code": "LV"
        },
        {
            "name": "Cesvaine Municipality",
            "state_code": "021",
            "country_code": "LV"
        },
        {
            "name": "Cibla Municipality",
            "state_code": "023",
            "country_code": "LV"
        },
        {
            "name": "Dagda Municipality",
            "state_code": "024",
            "country_code": "LV"
        },
        {
            "name": "Daugavpils",
            "state_code": "DGV",
            "country_code": "LV"
        },
        {
            "name": "Daugavpils Municipality",
            "state_code": "025",
            "country_code": "LV"
        },
        {
            "name": "Dobele Municipality",
            "state_code": "026",
            "country_code": "LV"
        },
        {
            "name": "Dundaga Municipality",
            "state_code": "027",
            "country_code": "LV"
        },
        {
            "name": "Durbe Municipality",
            "state_code": "028",
            "country_code": "LV"
        },
        {
            "name": "Engure Municipality",
            "state_code": "029",
            "country_code": "LV"
        },
        {
            "name": "Ērgļi Municipality",
            "state_code": "030",
            "country_code": "LV"
        },
        {
            "name": "Garkalne Municipality",
            "state_code": "031",
            "country_code": "LV"
        },
        {
            "name": "Grobiņa Municipality",
            "state_code": "032",
            "country_code": "LV"
        },
        {
            "name": "Gulbene Municipality",
            "state_code": "033",
            "country_code": "LV"
        },
        {
            "name": "Iecava Municipality",
            "state_code": "034",
            "country_code": "LV"
        },
        {
            "name": "Ikšķile Municipality",
            "state_code": "035",
            "country_code": "LV"
        },
        {
            "name": "Ilūkste Municipality",
            "state_code": "036",
            "country_code": "LV"
        },
        {
            "name": "Inčukalns Municipality",
            "state_code": "037",
            "country_code": "LV"
        },
        {
            "name": "Jaunjelgava Municipality",
            "state_code": "038",
            "country_code": "LV"
        },
        {
            "name": "Jaunpiebalga Municipality",
            "state_code": "039",
            "country_code": "LV"
        },
        {
            "name": "Jaunpils Municipality",
            "state_code": "040",
            "country_code": "LV"
        },
        {
            "name": "Jēkabpils",
            "state_code": "JKB",
            "country_code": "LV"
        },
        {
            "name": "Jēkabpils Municipality",
            "state_code": "042",
            "country_code": "LV"
        },
        {
            "name": "Jelgava",
            "state_code": "JEL",
            "country_code": "LV"
        },
        {
            "name": "Jelgava Municipality",
            "state_code": "041",
            "country_code": "LV"
        },
        {
            "name": "Jūrmala",
            "state_code": "JUR",
            "country_code": "LV"
        },
        {
            "name": "Kandava Municipality",
            "state_code": "043",
            "country_code": "LV"
        },
        {
            "name": "Kārsava Municipality",
            "state_code": "044",
            "country_code": "LV"
        },
        {
            "name": "Ķegums Municipality",
            "state_code": "051",
            "country_code": "LV"
        },
        {
            "name": "Ķekava Municipality",
            "state_code": "052",
            "country_code": "LV"
        },
        {
            "name": "Kocēni Municipality",
            "state_code": "045",
            "country_code": "LV"
        },
        {
            "name": "Koknese Municipality",
            "state_code": "046",
            "country_code": "LV"
        },
        {
            "name": "Krāslava Municipality",
            "state_code": "047",
            "country_code": "LV"
        },
        {
            "name": "Krimulda Municipality",
            "state_code": "048",
            "country_code": "LV"
        },
        {
            "name": "Krustpils Municipality",
            "state_code": "049",
            "country_code": "LV"
        },
        {
            "name": "Kuldīga Municipality",
            "state_code": "050",
            "country_code": "LV"
        },
        {
            "name": "Lielvārde Municipality",
            "state_code": "053",
            "country_code": "LV"
        },
        {
            "name": "Liepāja",
            "state_code": "LPX",
            "country_code": "LV"
        },
        {
            "name": "Līgatne Municipality",
            "state_code": "055",
            "country_code": "LV"
        },
        {
            "name": "Limbaži Municipality",
            "state_code": "054",
            "country_code": "LV"
        },
        {
            "name": "Līvāni Municipality",
            "state_code": "056",
            "country_code": "LV"
        },
        {
            "name": "Lubāna Municipality",
            "state_code": "057",
            "country_code": "LV"
        },
        {
            "name": "Ludza Municipality",
            "state_code": "058",
            "country_code": "LV"
        },
        {
            "name": "Madona Municipality",
            "state_code": "059",
            "country_code": "LV"
        },
        {
            "name": "Mālpils Municipality",
            "state_code": "061",
            "country_code": "LV"
        },
        {
            "name": "Mārupe Municipality",
            "state_code": "062",
            "country_code": "LV"
        },
        {
            "name": "Mazsalaca Municipality",
            "state_code": "060",
            "country_code": "LV"
        },
        {
            "name": "Mērsrags Municipality",
            "state_code": "063",
            "country_code": "LV"
        },
        {
            "name": "Naukšēni Municipality",
            "state_code": "064",
            "country_code": "LV"
        },
        {
            "name": "Nereta Municipality",
            "state_code": "065",
            "country_code": "LV"
        },
        {
            "name": "Nīca Municipality",
            "state_code": "066",
            "country_code": "LV"
        },
        {
            "name": "Ogre Municipality",
            "state_code": "067",
            "country_code": "LV"
        },
        {
            "name": "Olaine Municipality",
            "state_code": "068",
            "country_code": "LV"
        },
        {
            "name": "Ozolnieki Municipality",
            "state_code": "069",
            "country_code": "LV"
        },
        {
            "name": "Pārgauja Municipality",
            "state_code": "070",
            "country_code": "LV"
        },
        {
            "name": "Pāvilosta Municipality",
            "state_code": "071",
            "country_code": "LV"
        },
        {
            "name": "Pļaviņas Municipality",
            "state_code": "072",
            "country_code": "LV"
        },
        {
            "name": "Preiļi Municipality",
            "state_code": "073",
            "country_code": "LV"
        },
        {
            "name": "Priekule Municipality",
            "state_code": "074",
            "country_code": "LV"
        },
        {
            "name": "Priekuļi Municipality",
            "state_code": "075",
            "country_code": "LV"
        },
        {
            "name": "Rauna Municipality",
            "state_code": "076",
            "country_code": "LV"
        },
        {
            "name": "Rēzekne",
            "state_code": "REZ",
            "country_code": "LV"
        },
        {
            "name": "Rēzekne Municipality",
            "state_code": "077",
            "country_code": "LV"
        },
        {
            "name": "Riebiņi Municipality",
            "state_code": "078",
            "country_code": "LV"
        },
        {
            "name": "Riga",
            "state_code": "RIX",
            "country_code": "LV"
        },
        {
            "name": "Roja Municipality",
            "state_code": "079",
            "country_code": "LV"
        },
        {
            "name": "Ropaži Municipality",
            "state_code": "080",
            "country_code": "LV"
        },
        {
            "name": "Rucava Municipality",
            "state_code": "081",
            "country_code": "LV"
        },
        {
            "name": "Rugāji Municipality",
            "state_code": "082",
            "country_code": "LV"
        },
        {
            "name": "Rūjiena Municipality",
            "state_code": "084",
            "country_code": "LV"
        },
        {
            "name": "Rundāle Municipality",
            "state_code": "083",
            "country_code": "LV"
        },
        {
            "name": "Sala Municipality",
            "state_code": "085",
            "country_code": "LV"
        },
        {
            "name": "Salacgrīva Municipality",
            "state_code": "086",
            "country_code": "LV"
        },
        {
            "name": "Salaspils Municipality",
            "state_code": "087",
            "country_code": "LV"
        },
        {
            "name": "Saldus Municipality",
            "state_code": "088",
            "country_code": "LV"
        },
        {
            "name": "Saulkrasti Municipality",
            "state_code": "089",
            "country_code": "LV"
        },
        {
            "name": "Sēja Municipality",
            "state_code": "090",
            "country_code": "LV"
        },
        {
            "name": "Sigulda Municipality",
            "state_code": "091",
            "country_code": "LV"
        },
        {
            "name": "Skrīveri Municipality",
            "state_code": "092",
            "country_code": "LV"
        },
        {
            "name": "Skrunda Municipality",
            "state_code": "093",
            "country_code": "LV"
        },
        {
            "name": "Smiltene Municipality",
            "state_code": "094",
            "country_code": "LV"
        },
        {
            "name": "Stopiņi Municipality",
            "state_code": "095",
            "country_code": "LV"
        },
        {
            "name": "Strenči Municipality",
            "state_code": "096",
            "country_code": "LV"
        },
        {
            "name": "Talsi Municipality",
            "state_code": "097",
            "country_code": "LV"
        },
        {
            "name": "Tērvete Municipality",
            "state_code": "098",
            "country_code": "LV"
        },
        {
            "name": "Tukums Municipality",
            "state_code": "099",
            "country_code": "LV"
        },
        {
            "name": "Vaiņode Municipality",
            "state_code": "100",
            "country_code": "LV"
        },
        {
            "name": "Valka Municipality",
            "state_code": "101",
            "country_code": "LV"
        },
        {
            "name": "Valmiera",
            "state_code": "VMR",
            "country_code": "LV"
        },
        {
            "name": "Varakļāni Municipality",
            "state_code": "102",
            "country_code": "LV"
        },
        {
            "name": "Vārkava Municipality",
            "state_code": "103",
            "country_code": "LV"
        },
        {
            "name": "Vecpiebalga Municipality",
            "state_code": "104",
            "country_code": "LV"
        },
        {
            "name": "Vecumnieki Municipality",
            "state_code": "105",
            "country_code": "LV"
        },
        {
            "name": "Ventspils",
            "state_code": "VEN",
            "country_code": "LV"
        },
        {
            "name": "Ventspils Municipality",
            "state_code": "106",
            "country_code": "LV"
        },
        {
            "name": "Viesīte Municipality",
            "state_code": "107",
            "country_code": "LV"
        },
        {
            "name": "Viļaka Municipality",
            "state_code": "108",
            "country_code": "LV"
        },
        {
            "name": "Viļāni Municipality",
            "state_code": "109",
            "country_code": "LV"
        },
        {
            "name": "Zilupe Municipality",
            "state_code": "110",
            "country_code": "LV"
        },
        {
            "name": "Akkar Governorate",
            "state_code": "AK",
            "country_code": "LB"
        },
        {
            "name": "Baalbek-Hermel Governorate",
            "state_code": "BH",
            "country_code": "LB"
        },
        {
            "name": "Beirut Governorate",
            "state_code": "BA",
            "country_code": "LB"
        },
        {
            "name": "Beqaa Governorate",
            "state_code": "BI",
            "country_code": "LB"
        },
        {
            "name": "Mount Lebanon Governorate",
            "state_code": "JL",
            "country_code": "LB"
        },
        {
            "name": "Nabatieh Governorate",
            "state_code": "NA",
            "country_code": "LB"
        },
        {
            "name": "North Governorate",
            "state_code": "AS",
            "country_code": "LB"
        },
        {
            "name": "South Governorate",
            "state_code": "JA",
            "country_code": "LB"
        },
        {
            "name": "Berea District",
            "state_code": "D",
            "country_code": "LS"
        },
        {
            "name": "Butha-Buthe District",
            "state_code": "B",
            "country_code": "LS"
        },
        {
            "name": "Leribe District",
            "state_code": "C",
            "country_code": "LS"
        },
        {
            "name": "Mafeteng District",
            "state_code": "E",
            "country_code": "LS"
        },
        {
            "name": "Maseru District",
            "state_code": "A",
            "country_code": "LS"
        },
        {
            "name": "Mohale's Hoek District",
            "state_code": "F",
            "country_code": "LS"
        },
        {
            "name": "Mokhotlong District",
            "state_code": "J",
            "country_code": "LS"
        },
        {
            "name": "Qacha's Nek District",
            "state_code": "H",
            "country_code": "LS"
        },
        {
            "name": "Quthing District",
            "state_code": "G",
            "country_code": "LS"
        },
        {
            "name": "Thaba-Tseka District",
            "state_code": "K",
            "country_code": "LS"
        },
        {
            "name": "Bomi County",
            "state_code": "BM",
            "country_code": "LR"
        },
        {
            "name": "Bong County",
            "state_code": "BG",
            "country_code": "LR"
        },
        {
            "name": "Gbarpolu County",
            "state_code": "GP",
            "country_code": "LR"
        },
        {
            "name": "Grand Bassa County",
            "state_code": "GB",
            "country_code": "LR"
        },
        {
            "name": "Grand Cape Mount County",
            "state_code": "CM",
            "country_code": "LR"
        },
        {
            "name": "Grand Gedeh County",
            "state_code": "GG",
            "country_code": "LR"
        },
        {
            "name": "Grand Kru County",
            "state_code": "GK",
            "country_code": "LR"
        },
        {
            "name": "Lofa County",
            "state_code": "LO",
            "country_code": "LR"
        },
        {
            "name": "Margibi County",
            "state_code": "MG",
            "country_code": "LR"
        },
        {
            "name": "Maryland County",
            "state_code": "MY",
            "country_code": "LR"
        },
        {
            "name": "Montserrado County",
            "state_code": "MO",
            "country_code": "LR"
        },
        {
            "name": "Nimba",
            "state_code": "NI",
            "country_code": "LR"
        },
        {
            "name": "River Cess County",
            "state_code": "RI",
            "country_code": "LR"
        },
        {
            "name": "River Gee County",
            "state_code": "RG",
            "country_code": "LR"
        },
        {
            "name": "Sinoe County",
            "state_code": "SI",
            "country_code": "LR"
        },
        {
            "name": "Al Wahat District",
            "state_code": "WA",
            "country_code": "LY"
        },
        {
            "name": "Benghazi",
            "state_code": "BA",
            "country_code": "LY"
        },
        {
            "name": "Derna District",
            "state_code": "DR",
            "country_code": "LY"
        },
        {
            "name": "Ghat District",
            "state_code": "GT",
            "country_code": "LY"
        },
        {
            "name": "Jabal al Akhdar",
            "state_code": "JA",
            "country_code": "LY"
        },
        {
            "name": "Jabal al Gharbi District",
            "state_code": "JG",
            "country_code": "LY"
        },
        {
            "name": "Jafara",
            "state_code": "JI",
            "country_code": "LY"
        },
        {
            "name": "Jufra",
            "state_code": "JU",
            "country_code": "LY"
        },
        {
            "name": "Kufra District",
            "state_code": "KF",
            "country_code": "LY"
        },
        {
            "name": "Marj District",
            "state_code": "MJ",
            "country_code": "LY"
        },
        {
            "name": "Misrata District",
            "state_code": "MI",
            "country_code": "LY"
        },
        {
            "name": "Murqub",
            "state_code": "MB",
            "country_code": "LY"
        },
        {
            "name": "Murzuq District",
            "state_code": "MQ",
            "country_code": "LY"
        },
        {
            "name": "Nalut District",
            "state_code": "NL",
            "country_code": "LY"
        },
        {
            "name": "Nuqat al Khams",
            "state_code": "NQ",
            "country_code": "LY"
        },
        {
            "name": "Sabha District",
            "state_code": "SB",
            "country_code": "LY"
        },
        {
            "name": "Sirte District",
            "state_code": "SR",
            "country_code": "LY"
        },
        {
            "name": "Tripoli District",
            "state_code": "TB",
            "country_code": "LY"
        },
        {
            "name": "Wadi al Hayaa District",
            "state_code": "WD",
            "country_code": "LY"
        },
        {
            "name": "Wadi al Shatii District",
            "state_code": "WS",
            "country_code": "LY"
        },
        {
            "name": "Zawiya District",
            "state_code": "ZA",
            "country_code": "LY"
        },
        {
            "name": "Balzers",
            "state_code": "01",
            "country_code": "LI"
        },
        {
            "name": "Eschen",
            "state_code": "02",
            "country_code": "LI"
        },
        {
            "name": "Gamprin",
            "state_code": "03",
            "country_code": "LI"
        },
        {
            "name": "Mauren",
            "state_code": "04",
            "country_code": "LI"
        },
        {
            "name": "Planken",
            "state_code": "05",
            "country_code": "LI"
        },
        {
            "name": "Ruggell",
            "state_code": "06",
            "country_code": "LI"
        },
        {
            "name": "Schaan",
            "state_code": "07",
            "country_code": "LI"
        },
        {
            "name": "Schellenberg",
            "state_code": "08",
            "country_code": "LI"
        },
        {
            "name": "Triesen",
            "state_code": "09",
            "country_code": "LI"
        },
        {
            "name": "Triesenberg",
            "state_code": "10",
            "country_code": "LI"
        },
        {
            "name": "Vaduz",
            "state_code": "11",
            "country_code": "LI"
        },
        {
            "name": "Akmenė District Municipality",
            "state_code": "01",
            "country_code": "LT"
        },
        {
            "name": "Alytus City Municipality",
            "state_code": "02",
            "country_code": "LT"
        },
        {
            "name": "Alytus County",
            "state_code": "AL",
            "country_code": "LT"
        },
        {
            "name": "Alytus District Municipality",
            "state_code": "03",
            "country_code": "LT"
        },
        {
            "name": "Birštonas Municipality",
            "state_code": "05",
            "country_code": "LT"
        },
        {
            "name": "Biržai District Municipality",
            "state_code": "06",
            "country_code": "LT"
        },
        {
            "name": "Druskininkai municipality",
            "state_code": "07",
            "country_code": "LT"
        },
        {
            "name": "Elektrėnai municipality",
            "state_code": "08",
            "country_code": "LT"
        },
        {
            "name": "Ignalina District Municipality",
            "state_code": "09",
            "country_code": "LT"
        },
        {
            "name": "Jonava District Municipality",
            "state_code": "10",
            "country_code": "LT"
        },
        {
            "name": "Joniškis District Municipality",
            "state_code": "11",
            "country_code": "LT"
        },
        {
            "name": "Jurbarkas District Municipality",
            "state_code": "12",
            "country_code": "LT"
        },
        {
            "name": "Kaišiadorys District Municipality",
            "state_code": "13",
            "country_code": "LT"
        },
        {
            "name": "Kalvarija municipality",
            "state_code": "14",
            "country_code": "LT"
        },
        {
            "name": "Kaunas City Municipality",
            "state_code": "15",
            "country_code": "LT"
        },
        {
            "name": "Kaunas County",
            "state_code": "KU",
            "country_code": "LT"
        },
        {
            "name": "Kaunas District Municipality",
            "state_code": "16",
            "country_code": "LT"
        },
        {
            "name": "Kazlų Rūda municipality",
            "state_code": "17",
            "country_code": "LT"
        },
        {
            "name": "Kėdainiai District Municipality",
            "state_code": "18",
            "country_code": "LT"
        },
        {
            "name": "Kelmė District Municipality",
            "state_code": "19",
            "country_code": "LT"
        },
        {
            "name": "Klaipeda City Municipality",
            "state_code": "20",
            "country_code": "LT"
        },
        {
            "name": "Klaipėda County",
            "state_code": "KL",
            "country_code": "LT"
        },
        {
            "name": "Klaipėda District Municipality",
            "state_code": "21",
            "country_code": "LT"
        },
        {
            "name": "Kretinga District Municipality",
            "state_code": "22",
            "country_code": "LT"
        },
        {
            "name": "Kupiškis District Municipality",
            "state_code": "23",
            "country_code": "LT"
        },
        {
            "name": "Lazdijai District Municipality",
            "state_code": "24",
            "country_code": "LT"
        },
        {
            "name": "Marijampolė County",
            "state_code": "MR",
            "country_code": "LT"
        },
        {
            "name": "Marijampolė Municipality",
            "state_code": "25",
            "country_code": "LT"
        },
        {
            "name": "Mažeikiai District Municipality",
            "state_code": "26",
            "country_code": "LT"
        },
        {
            "name": "Molėtai District Municipality",
            "state_code": "27",
            "country_code": "LT"
        },
        {
            "name": "Neringa Municipality",
            "state_code": "28",
            "country_code": "LT"
        },
        {
            "name": "Pagėgiai municipality",
            "state_code": "29",
            "country_code": "LT"
        },
        {
            "name": "Pakruojis District Municipality",
            "state_code": "30",
            "country_code": "LT"
        },
        {
            "name": "Palanga City Municipality",
            "state_code": "31",
            "country_code": "LT"
        },
        {
            "name": "Panevėžys City Municipality",
            "state_code": "32",
            "country_code": "LT"
        },
        {
            "name": "Panevėžys County",
            "state_code": "PN",
            "country_code": "LT"
        },
        {
            "name": "Panevėžys District Municipality",
            "state_code": "33",
            "country_code": "LT"
        },
        {
            "name": "Pasvalys District Municipality",
            "state_code": "34",
            "country_code": "LT"
        },
        {
            "name": "Plungė District Municipality",
            "state_code": "35",
            "country_code": "LT"
        },
        {
            "name": "Prienai District Municipality",
            "state_code": "36",
            "country_code": "LT"
        },
        {
            "name": "Radviliškis District Municipality",
            "state_code": "37",
            "country_code": "LT"
        },
        {
            "name": "Raseiniai District Municipality",
            "state_code": "38",
            "country_code": "LT"
        },
        {
            "name": "Rietavas municipality",
            "state_code": "39",
            "country_code": "LT"
        },
        {
            "name": "Rokiškis District Municipality",
            "state_code": "40",
            "country_code": "LT"
        },
        {
            "name": "Šakiai District Municipality",
            "state_code": "41",
            "country_code": "LT"
        },
        {
            "name": "Šalčininkai District Municipality",
            "state_code": "42",
            "country_code": "LT"
        },
        {
            "name": "Šiauliai City Municipality",
            "state_code": "43",
            "country_code": "LT"
        },
        {
            "name": "Šiauliai County",
            "state_code": "SA",
            "country_code": "LT"
        },
        {
            "name": "Šiauliai District Municipality",
            "state_code": "44",
            "country_code": "LT"
        },
        {
            "name": "Šilalė District Municipality",
            "state_code": "45",
            "country_code": "LT"
        },
        {
            "name": "Šilutė District Municipality",
            "state_code": "46",
            "country_code": "LT"
        },
        {
            "name": "Širvintos District Municipality",
            "state_code": "47",
            "country_code": "LT"
        },
        {
            "name": "Skuodas District Municipality",
            "state_code": "48",
            "country_code": "LT"
        },
        {
            "name": "Švenčionys District Municipality",
            "state_code": "49",
            "country_code": "LT"
        },
        {
            "name": "Tauragė County",
            "state_code": "TA",
            "country_code": "LT"
        },
        {
            "name": "Tauragė District Municipality",
            "state_code": "50",
            "country_code": "LT"
        },
        {
            "name": "Telšiai County",
            "state_code": "TE",
            "country_code": "LT"
        },
        {
            "name": "Telšiai District Municipality",
            "state_code": "51",
            "country_code": "LT"
        },
        {
            "name": "Trakai District Municipality",
            "state_code": "52",
            "country_code": "LT"
        },
        {
            "name": "Ukmergė District Municipality",
            "state_code": "53",
            "country_code": "LT"
        },
        {
            "name": "Utena County",
            "state_code": "UT",
            "country_code": "LT"
        },
        {
            "name": "Utena District Municipality",
            "state_code": "54",
            "country_code": "LT"
        },
        {
            "name": "Varėna District Municipality",
            "state_code": "55",
            "country_code": "LT"
        },
        {
            "name": "Vilkaviškis District Municipality",
            "state_code": "56",
            "country_code": "LT"
        },
        {
            "name": "Vilnius City Municipality",
            "state_code": "57",
            "country_code": "LT"
        },
        {
            "name": "Vilnius County",
            "state_code": "VL",
            "country_code": "LT"
        },
        {
            "name": "Vilnius District Municipality",
            "state_code": "58",
            "country_code": "LT"
        },
        {
            "name": "Visaginas Municipality",
            "state_code": "59",
            "country_code": "LT"
        },
        {
            "name": "Zarasai District Municipality",
            "state_code": "60",
            "country_code": "LT"
        },
        {
            "name": "Canton of Capellen",
            "state_code": "CA",
            "country_code": "LU"
        },
        {
            "name": "Canton of Clervaux",
            "state_code": "CL",
            "country_code": "LU"
        },
        {
            "name": "Canton of Diekirch",
            "state_code": "DI",
            "country_code": "LU"
        },
        {
            "name": "Canton of Echternach",
            "state_code": "EC",
            "country_code": "LU"
        },
        {
            "name": "Canton of Esch-sur-Alzette",
            "state_code": "ES",
            "country_code": "LU"
        },
        {
            "name": "Canton of Grevenmacher",
            "state_code": "GR",
            "country_code": "LU"
        },
        {
            "name": "Canton of Luxembourg",
            "state_code": "LU",
            "country_code": "LU"
        },
        {
            "name": "Canton of Mersch",
            "state_code": "ME",
            "country_code": "LU"
        },
        {
            "name": "Canton of Redange",
            "state_code": "RD",
            "country_code": "LU"
        },
        {
            "name": "Canton of Remich",
            "state_code": "RM",
            "country_code": "LU"
        },
        {
            "name": "Canton of Vianden",
            "state_code": "VD",
            "country_code": "LU"
        },
        {
            "name": "Canton of Wiltz",
            "state_code": "WI",
            "country_code": "LU"
        },
        {
            "name": "Diekirch District",
            "state_code": "D",
            "country_code": "LU"
        },
        {
            "name": "Grevenmacher District",
            "state_code": "G",
            "country_code": "LU"
        },
        {
            "name": "Luxembourg District",
            "state_code": "L",
            "country_code": "LU"
        },
        {
            "name": "Aerodrom Municipality",
            "state_code": "01",
            "country_code": "MK"
        },
        {
            "name": "Aračinovo Municipality",
            "state_code": "02",
            "country_code": "MK"
        },
        {
            "name": "Berovo Municipality",
            "state_code": "03",
            "country_code": "MK"
        },
        {
            "name": "Bitola Municipality",
            "state_code": "04",
            "country_code": "MK"
        },
        {
            "name": "Bogdanci Municipality",
            "state_code": "05",
            "country_code": "MK"
        },
        {
            "name": "Bogovinje Municipality",
            "state_code": "06",
            "country_code": "MK"
        },
        {
            "name": "Bosilovo Municipality",
            "state_code": "07",
            "country_code": "MK"
        },
        {
            "name": "Brvenica Municipality",
            "state_code": "08",
            "country_code": "MK"
        },
        {
            "name": "Butel Municipality",
            "state_code": "09",
            "country_code": "MK"
        },
        {
            "name": "Čair Municipality",
            "state_code": "79",
            "country_code": "MK"
        },
        {
            "name": "Čaška Municipality",
            "state_code": "80",
            "country_code": "MK"
        },
        {
            "name": "Centar Municipality",
            "state_code": "77",
            "country_code": "MK"
        },
        {
            "name": "Centar Župa Municipality",
            "state_code": "78",
            "country_code": "MK"
        },
        {
            "name": "Češinovo-Obleševo Municipality",
            "state_code": "81",
            "country_code": "MK"
        },
        {
            "name": "Čučer-Sandevo Municipality",
            "state_code": "82",
            "country_code": "MK"
        },
        {
            "name": "Debarca Municipality",
            "state_code": "22",
            "country_code": "MK"
        },
        {
            "name": "Delčevo Municipality",
            "state_code": "23",
            "country_code": "MK"
        },
        {
            "name": "Demir Hisar Municipality",
            "state_code": "25",
            "country_code": "MK"
        },
        {
            "name": "Demir Kapija Municipality",
            "state_code": "24",
            "country_code": "MK"
        },
        {
            "name": "Dojran Municipality",
            "state_code": "26",
            "country_code": "MK"
        },
        {
            "name": "Dolneni Municipality",
            "state_code": "27",
            "country_code": "MK"
        },
        {
            "name": "Drugovo Municipality",
            "state_code": "28",
            "country_code": "MK"
        },
        {
            "name": "Gazi Baba Municipality",
            "state_code": "17",
            "country_code": "MK"
        },
        {
            "name": "Gevgelija Municipality",
            "state_code": "18",
            "country_code": "MK"
        },
        {
            "name": "Gjorče Petrov Municipality",
            "state_code": "29",
            "country_code": "MK"
        },
        {
            "name": "Gostivar Municipality",
            "state_code": "19",
            "country_code": "MK"
        },
        {
            "name": "Gradsko Municipality",
            "state_code": "20",
            "country_code": "MK"
        },
        {
            "name": "Greater Skopje",
            "state_code": "85",
            "country_code": "MK"
        },
        {
            "name": "Ilinden Municipality",
            "state_code": "34",
            "country_code": "MK"
        },
        {
            "name": "Jegunovce Municipality",
            "state_code": "35",
            "country_code": "MK"
        },
        {
            "name": "Karbinci",
            "state_code": "37",
            "country_code": "MK"
        },
        {
            "name": "Karpoš Municipality",
            "state_code": "38",
            "country_code": "MK"
        },
        {
            "name": "Kavadarci Municipality",
            "state_code": "36",
            "country_code": "MK"
        },
        {
            "name": "Kičevo Municipality",
            "state_code": "40",
            "country_code": "MK"
        },
        {
            "name": "Kisela Voda Municipality",
            "state_code": "39",
            "country_code": "MK"
        },
        {
            "name": "Kočani Municipality",
            "state_code": "42",
            "country_code": "MK"
        },
        {
            "name": "Konče Municipality",
            "state_code": "41",
            "country_code": "MK"
        },
        {
            "name": "Kratovo Municipality",
            "state_code": "43",
            "country_code": "MK"
        },
        {
            "name": "Kriva Palanka Municipality",
            "state_code": "44",
            "country_code": "MK"
        },
        {
            "name": "Krivogaštani Municipality",
            "state_code": "45",
            "country_code": "MK"
        },
        {
            "name": "Kruševo Municipality",
            "state_code": "46",
            "country_code": "MK"
        },
        {
            "name": "Kumanovo Municipality",
            "state_code": "47",
            "country_code": "MK"
        },
        {
            "name": "Lipkovo Municipality",
            "state_code": "48",
            "country_code": "MK"
        },
        {
            "name": "Lozovo Municipality",
            "state_code": "49",
            "country_code": "MK"
        },
        {
            "name": "Makedonska Kamenica Municipality",
            "state_code": "51",
            "country_code": "MK"
        },
        {
            "name": "Makedonski Brod Municipality",
            "state_code": "52",
            "country_code": "MK"
        },
        {
            "name": "Mavrovo and Rostuša Municipality",
            "state_code": "50",
            "country_code": "MK"
        },
        {
            "name": "Mogila Municipality",
            "state_code": "53",
            "country_code": "MK"
        },
        {
            "name": "Negotino Municipality",
            "state_code": "54",
            "country_code": "MK"
        },
        {
            "name": "Novaci Municipality",
            "state_code": "55",
            "country_code": "MK"
        },
        {
            "name": "Novo Selo Municipality",
            "state_code": "56",
            "country_code": "MK"
        },
        {
            "name": "Ohrid Municipality",
            "state_code": "58",
            "country_code": "MK"
        },
        {
            "name": "Oslomej Municipality",
            "state_code": "57",
            "country_code": "MK"
        },
        {
            "name": "Pehčevo Municipality",
            "state_code": "60",
            "country_code": "MK"
        },
        {
            "name": "Petrovec Municipality",
            "state_code": "59",
            "country_code": "MK"
        },
        {
            "name": "Plasnica Municipality",
            "state_code": "61",
            "country_code": "MK"
        },
        {
            "name": "Prilep Municipality",
            "state_code": "62",
            "country_code": "MK"
        },
        {
            "name": "Probištip Municipality",
            "state_code": "63",
            "country_code": "MK"
        },
        {
            "name": "Radoviš Municipality",
            "state_code": "64",
            "country_code": "MK"
        },
        {
            "name": "Rankovce Municipality",
            "state_code": "65",
            "country_code": "MK"
        },
        {
            "name": "Resen Municipality",
            "state_code": "66",
            "country_code": "MK"
        },
        {
            "name": "Rosoman Municipality",
            "state_code": "67",
            "country_code": "MK"
        },
        {
            "name": "Saraj Municipality",
            "state_code": "68",
            "country_code": "MK"
        },
        {
            "name": "Sopište Municipality",
            "state_code": "70",
            "country_code": "MK"
        },
        {
            "name": "Staro Nagoričane Municipality",
            "state_code": "71",
            "country_code": "MK"
        },
        {
            "name": "Štip Municipality",
            "state_code": "83",
            "country_code": "MK"
        },
        {
            "name": "Struga Municipality",
            "state_code": "72",
            "country_code": "MK"
        },
        {
            "name": "Strumica Municipality",
            "state_code": "73",
            "country_code": "MK"
        },
        {
            "name": "Studeničani Municipality",
            "state_code": "74",
            "country_code": "MK"
        },
        {
            "name": "Šuto Orizari Municipality",
            "state_code": "84",
            "country_code": "MK"
        },
        {
            "name": "Sveti Nikole Municipality",
            "state_code": "69",
            "country_code": "MK"
        },
        {
            "name": "Tearce Municipality",
            "state_code": "75",
            "country_code": "MK"
        },
        {
            "name": "Tetovo Municipality",
            "state_code": "76",
            "country_code": "MK"
        },
        {
            "name": "Valandovo Municipality",
            "state_code": "10",
            "country_code": "MK"
        },
        {
            "name": "Vasilevo Municipality",
            "state_code": "11",
            "country_code": "MK"
        },
        {
            "name": "Veles Municipality",
            "state_code": "13",
            "country_code": "MK"
        },
        {
            "name": "Vevčani Municipality",
            "state_code": "12",
            "country_code": "MK"
        },
        {
            "name": "Vinica Municipality",
            "state_code": "14",
            "country_code": "MK"
        },
        {
            "name": "Vraneštica Municipality",
            "state_code": "15",
            "country_code": "MK"
        },
        {
            "name": "Vrapčište Municipality",
            "state_code": "16",
            "country_code": "MK"
        },
        {
            "name": "Zajas Municipality",
            "state_code": "31",
            "country_code": "MK"
        },
        {
            "name": "Zelenikovo Municipality",
            "state_code": "32",
            "country_code": "MK"
        },
        {
            "name": "Želino Municipality",
            "state_code": "30",
            "country_code": "MK"
        },
        {
            "name": "Zrnovci Municipality",
            "state_code": "33",
            "country_code": "MK"
        },
        {
            "name": "Antananarivo Province",
            "state_code": "T",
            "country_code": "MG"
        },
        {
            "name": "Antsiranana Province",
            "state_code": "D",
            "country_code": "MG"
        },
        {
            "name": "Fianarantsoa Province",
            "state_code": "F",
            "country_code": "MG"
        },
        {
            "name": "Mahajanga Province",
            "state_code": "M",
            "country_code": "MG"
        },
        {
            "name": "Toamasina Province",
            "state_code": "A",
            "country_code": "MG"
        },
        {
            "name": "Toliara Province",
            "state_code": "U",
            "country_code": "MG"
        },
        {
            "name": "Balaka District",
            "state_code": "BA",
            "country_code": "MW"
        },
        {
            "name": "Blantyre District",
            "state_code": "BL",
            "country_code": "MW"
        },
        {
            "name": "Central Region",
            "state_code": "C",
            "country_code": "MW"
        },
        {
            "name": "Chikwawa District",
            "state_code": "CK",
            "country_code": "MW"
        },
        {
            "name": "Chiradzulu District",
            "state_code": "CR",
            "country_code": "MW"
        },
        {
            "name": "Chitipa district",
            "state_code": "CT",
            "country_code": "MW"
        },
        {
            "name": "Dedza District",
            "state_code": "DE",
            "country_code": "MW"
        },
        {
            "name": "Dowa District",
            "state_code": "DO",
            "country_code": "MW"
        },
        {
            "name": "Karonga District",
            "state_code": "KR",
            "country_code": "MW"
        },
        {
            "name": "Kasungu District",
            "state_code": "KS",
            "country_code": "MW"
        },
        {
            "name": "Likoma District",
            "state_code": "LK",
            "country_code": "MW"
        },
        {
            "name": "Lilongwe District",
            "state_code": "LI",
            "country_code": "MW"
        },
        {
            "name": "Machinga District",
            "state_code": "MH",
            "country_code": "MW"
        },
        {
            "name": "Mangochi District",
            "state_code": "MG",
            "country_code": "MW"
        },
        {
            "name": "Mchinji District",
            "state_code": "MC",
            "country_code": "MW"
        },
        {
            "name": "Mulanje District",
            "state_code": "MU",
            "country_code": "MW"
        },
        {
            "name": "Mwanza District",
            "state_code": "MW",
            "country_code": "MW"
        },
        {
            "name": "Mzimba District",
            "state_code": "MZ",
            "country_code": "MW"
        },
        {
            "name": "Nkhata Bay District",
            "state_code": "NB",
            "country_code": "MW"
        },
        {
            "name": "Nkhotakota District",
            "state_code": "NK",
            "country_code": "MW"
        },
        {
            "name": "Northern Region",
            "state_code": "N",
            "country_code": "MW"
        },
        {
            "name": "Nsanje District",
            "state_code": "NS",
            "country_code": "MW"
        },
        {
            "name": "Ntcheu District",
            "state_code": "NU",
            "country_code": "MW"
        },
        {
            "name": "Ntchisi District",
            "state_code": "NI",
            "country_code": "MW"
        },
        {
            "name": "Phalombe District",
            "state_code": "PH",
            "country_code": "MW"
        },
        {
            "name": "Rumphi District",
            "state_code": "RU",
            "country_code": "MW"
        },
        {
            "name": "Salima District",
            "state_code": "SA",
            "country_code": "MW"
        },
        {
            "name": "Southern Region",
            "state_code": "S",
            "country_code": "MW"
        },
        {
            "name": "Thyolo District",
            "state_code": "TH",
            "country_code": "MW"
        },
        {
            "name": "Zomba District",
            "state_code": "ZO",
            "country_code": "MW"
        },
        {
            "name": "Johor",
            "state_code": "01",
            "country_code": "MY"
        },
        {
            "name": "Kedah",
            "state_code": "02",
            "country_code": "MY"
        },
        {
            "name": "Kelantan",
            "state_code": "03",
            "country_code": "MY"
        },
        {
            "name": "Kuala Lumpur",
            "state_code": "14",
            "country_code": "MY"
        },
        {
            "name": "Labuan",
            "state_code": "15",
            "country_code": "MY"
        },
        {
            "name": "Malacca",
            "state_code": "04",
            "country_code": "MY"
        },
        {
            "name": "Negeri Sembilan",
            "state_code": "05",
            "country_code": "MY"
        },
        {
            "name": "Pahang",
            "state_code": "06",
            "country_code": "MY"
        },
        {
            "name": "Penang",
            "state_code": "07",
            "country_code": "MY"
        },
        {
            "name": "Perak",
            "state_code": "08",
            "country_code": "MY"
        },
        {
            "name": "Perlis",
            "state_code": "09",
            "country_code": "MY"
        },
        {
            "name": "Putrajaya",
            "state_code": "16",
            "country_code": "MY"
        },
        {
            "name": "Sabah",
            "state_code": "12",
            "country_code": "MY"
        },
        {
            "name": "Sarawak",
            "state_code": "13",
            "country_code": "MY"
        },
        {
            "name": "Selangor",
            "state_code": "10",
            "country_code": "MY"
        },
        {
            "name": "Terengganu",
            "state_code": "11",
            "country_code": "MY"
        },
        {
            "name": "Addu Atoll",
            "state_code": "01",
            "country_code": "MV"
        },
        {
            "name": "Alif Alif Atoll",
            "state_code": "02",
            "country_code": "MV"
        },
        {
            "name": "Alif Dhaal Atoll",
            "state_code": "00",
            "country_code": "MV"
        },
        {
            "name": "Central Province",
            "state_code": "CE",
            "country_code": "MV"
        },
        {
            "name": "Dhaalu Atoll",
            "state_code": "17",
            "country_code": "MV"
        },
        {
            "name": "Faafu Atoll",
            "state_code": "14",
            "country_code": "MV"
        },
        {
            "name": "Gaafu Alif Atoll",
            "state_code": "27",
            "country_code": "MV"
        },
        {
            "name": "Gaafu Dhaalu Atoll",
            "state_code": "28",
            "country_code": "MV"
        },
        {
            "name": "Gnaviyani Atoll",
            "state_code": "29",
            "country_code": "MV"
        },
        {
            "name": "Haa Alif Atoll",
            "state_code": "07",
            "country_code": "MV"
        },
        {
            "name": "Haa Dhaalu Atoll",
            "state_code": "23",
            "country_code": "MV"
        },
        {
            "name": "Kaafu Atoll",
            "state_code": "26",
            "country_code": "MV"
        },
        {
            "name": "Laamu Atoll",
            "state_code": "05",
            "country_code": "MV"
        },
        {
            "name": "Lhaviyani Atoll",
            "state_code": "03",
            "country_code": "MV"
        },
        {
            "name": "Malé",
            "state_code": "MLE",
            "country_code": "MV"
        },
        {
            "name": "Meemu Atoll",
            "state_code": "12",
            "country_code": "MV"
        },
        {
            "name": "Noonu Atoll",
            "state_code": "25",
            "country_code": "MV"
        },
        {
            "name": "North Central Province",
            "state_code": "NC",
            "country_code": "MV"
        },
        {
            "name": "North Province",
            "state_code": "NO",
            "country_code": "MV"
        },
        {
            "name": "Raa Atoll",
            "state_code": "13",
            "country_code": "MV"
        },
        {
            "name": "Shaviyani Atoll",
            "state_code": "24",
            "country_code": "MV"
        },
        {
            "name": "South Central Province",
            "state_code": "SC",
            "country_code": "MV"
        },
        {
            "name": "South Province",
            "state_code": "SU",
            "country_code": "MV"
        },
        {
            "name": "Thaa Atoll",
            "state_code": "08",
            "country_code": "MV"
        },
        {
            "name": "Upper South Province",
            "state_code": "US",
            "country_code": "MV"
        },
        {
            "name": "Vaavu Atoll",
            "state_code": "04",
            "country_code": "MV"
        },
        {
            "name": "Bamako",
            "state_code": "BKO",
            "country_code": "ML"
        },
        {
            "name": "Gao Region",
            "state_code": "7",
            "country_code": "ML"
        },
        {
            "name": "Kayes Region",
            "state_code": "1",
            "country_code": "ML"
        },
        {
            "name": "Kidal Region",
            "state_code": "8",
            "country_code": "ML"
        },
        {
            "name": "Koulikoro Region",
            "state_code": "2",
            "country_code": "ML"
        },
        {
            "name": "Ménaka Region",
            "state_code": "9",
            "country_code": "ML"
        },
        {
            "name": "Mopti Region",
            "state_code": "5",
            "country_code": "ML"
        },
        {
            "name": "Ségou Region",
            "state_code": "4",
            "country_code": "ML"
        },
        {
            "name": "Sikasso Region",
            "state_code": "3",
            "country_code": "ML"
        },
        {
            "name": "Taoudénit Region",
            "state_code": "10",
            "country_code": "ML"
        },
        {
            "name": "Tombouctou Region",
            "state_code": "6",
            "country_code": "ML"
        },
        {
            "name": "Attard",
            "state_code": "01",
            "country_code": "MT"
        },
        {
            "name": "Balzan",
            "state_code": "02",
            "country_code": "MT"
        },
        {
            "name": "Birgu",
            "state_code": "03",
            "country_code": "MT"
        },
        {
            "name": "Birkirkara",
            "state_code": "04",
            "country_code": "MT"
        },
        {
            "name": "Birżebbuġa",
            "state_code": "05",
            "country_code": "MT"
        },
        {
            "name": "Cospicua",
            "state_code": "06",
            "country_code": "MT"
        },
        {
            "name": "Dingli",
            "state_code": "07",
            "country_code": "MT"
        },
        {
            "name": "Fgura",
            "state_code": "08",
            "country_code": "MT"
        },
        {
            "name": "Floriana",
            "state_code": "09",
            "country_code": "MT"
        },
        {
            "name": "Fontana",
            "state_code": "10",
            "country_code": "MT"
        },
        {
            "name": "Għajnsielem",
            "state_code": "13",
            "country_code": "MT"
        },
        {
            "name": "Għarb",
            "state_code": "14",
            "country_code": "MT"
        },
        {
            "name": "Għargħur",
            "state_code": "15",
            "country_code": "MT"
        },
        {
            "name": "Għasri",
            "state_code": "16",
            "country_code": "MT"
        },
        {
            "name": "Għaxaq",
            "state_code": "17",
            "country_code": "MT"
        },
        {
            "name": "Gudja",
            "state_code": "11",
            "country_code": "MT"
        },
        {
            "name": "Gżira",
            "state_code": "12",
            "country_code": "MT"
        },
        {
            "name": "Ħamrun",
            "state_code": "18",
            "country_code": "MT"
        },
        {
            "name": "Iklin",
            "state_code": "19",
            "country_code": "MT"
        },
        {
            "name": "Kalkara",
            "state_code": "21",
            "country_code": "MT"
        },
        {
            "name": "Kerċem",
            "state_code": "22",
            "country_code": "MT"
        },
        {
            "name": "Kirkop",
            "state_code": "23",
            "country_code": "MT"
        },
        {
            "name": "Lija",
            "state_code": "24",
            "country_code": "MT"
        },
        {
            "name": "Luqa",
            "state_code": "25",
            "country_code": "MT"
        },
        {
            "name": "Marsa",
            "state_code": "26",
            "country_code": "MT"
        },
        {
            "name": "Marsaskala",
            "state_code": "27",
            "country_code": "MT"
        },
        {
            "name": "Marsaxlokk",
            "state_code": "28",
            "country_code": "MT"
        },
        {
            "name": "Mdina",
            "state_code": "29",
            "country_code": "MT"
        },
        {
            "name": "Mellieħa",
            "state_code": "30",
            "country_code": "MT"
        },
        {
            "name": "Mġarr",
            "state_code": "31",
            "country_code": "MT"
        },
        {
            "name": "Mosta",
            "state_code": "32",
            "country_code": "MT"
        },
        {
            "name": "Mqabba",
            "state_code": "33",
            "country_code": "MT"
        },
        {
            "name": "Msida",
            "state_code": "34",
            "country_code": "MT"
        },
        {
            "name": "Mtarfa",
            "state_code": "35",
            "country_code": "MT"
        },
        {
            "name": "Munxar",
            "state_code": "36",
            "country_code": "MT"
        },
        {
            "name": "Nadur",
            "state_code": "37",
            "country_code": "MT"
        },
        {
            "name": "Naxxar",
            "state_code": "38",
            "country_code": "MT"
        },
        {
            "name": "Paola",
            "state_code": "39",
            "country_code": "MT"
        },
        {
            "name": "Pembroke",
            "state_code": "40",
            "country_code": "MT"
        },
        {
            "name": "Pietà",
            "state_code": "41",
            "country_code": "MT"
        },
        {
            "name": "Qala",
            "state_code": "42",
            "country_code": "MT"
        },
        {
            "name": "Qormi",
            "state_code": "43",
            "country_code": "MT"
        },
        {
            "name": "Qrendi",
            "state_code": "44",
            "country_code": "MT"
        },
        {
            "name": "Rabat",
            "state_code": "46",
            "country_code": "MT"
        },
        {
            "name": "Saint Lawrence",
            "state_code": "50",
            "country_code": "MT"
        },
        {
            "name": "San Ġwann",
            "state_code": "49",
            "country_code": "MT"
        },
        {
            "name": "Sannat",
            "state_code": "52",
            "country_code": "MT"
        },
        {
            "name": "Santa Luċija",
            "state_code": "53",
            "country_code": "MT"
        },
        {
            "name": "Santa Venera",
            "state_code": "54",
            "country_code": "MT"
        },
        {
            "name": "Senglea",
            "state_code": "20",
            "country_code": "MT"
        },
        {
            "name": "Siġġiewi",
            "state_code": "55",
            "country_code": "MT"
        },
        {
            "name": "Sliema",
            "state_code": "56",
            "country_code": "MT"
        },
        {
            "name": "St. Julian's",
            "state_code": "48",
            "country_code": "MT"
        },
        {
            "name": "St. Paul's Bay",
            "state_code": "51",
            "country_code": "MT"
        },
        {
            "name": "Swieqi",
            "state_code": "57",
            "country_code": "MT"
        },
        {
            "name": "Ta' Xbiex",
            "state_code": "58",
            "country_code": "MT"
        },
        {
            "name": "Tarxien",
            "state_code": "59",
            "country_code": "MT"
        },
        {
            "name": "Valletta",
            "state_code": "60",
            "country_code": "MT"
        },
        {
            "name": "Victoria",
            "state_code": "45",
            "country_code": "MT"
        },
        {
            "name": "Xagħra",
            "state_code": "61",
            "country_code": "MT"
        },
        {
            "name": "Xewkija",
            "state_code": "62",
            "country_code": "MT"
        },
        {
            "name": "Xgħajra",
            "state_code": "63",
            "country_code": "MT"
        },
        {
            "name": "Żabbar",
            "state_code": "64",
            "country_code": "MT"
        },
        {
            "name": "Żebbuġ Gozo",
            "state_code": "65",
            "country_code": "MT"
        },
        {
            "name": "Żebbuġ Malta",
            "state_code": "66",
            "country_code": "MT"
        },
        {
            "name": "Żejtun",
            "state_code": "67",
            "country_code": "MT"
        },
        {
            "name": "Żurrieq",
            "state_code": "68",
            "country_code": "MT"
        },
        {
            "name": "Ralik Chain",
            "state_code": "L",
            "country_code": "MH"
        },
        {
            "name": "Ratak Chain",
            "state_code": "T",
            "country_code": "MH"
        },
        {
            "name": "Adrar",
            "state_code": "07",
            "country_code": "MR"
        },
        {
            "name": "Assaba",
            "state_code": "03",
            "country_code": "MR"
        },
        {
            "name": "Brakna",
            "state_code": "05",
            "country_code": "MR"
        },
        {
            "name": "Dakhlet Nouadhibou",
            "state_code": "08",
            "country_code": "MR"
        },
        {
            "name": "Gorgol",
            "state_code": "04",
            "country_code": "MR"
        },
        {
            "name": "Guidimaka",
            "state_code": "10",
            "country_code": "MR"
        },
        {
            "name": "Hodh Ech Chargui",
            "state_code": "01",
            "country_code": "MR"
        },
        {
            "name": "Hodh El Gharbi",
            "state_code": "02",
            "country_code": "MR"
        },
        {
            "name": "Inchiri",
            "state_code": "12",
            "country_code": "MR"
        },
        {
            "name": "Nouakchott-Nord",
            "state_code": "14",
            "country_code": "MR"
        },
        {
            "name": "Nouakchott-Ouest",
            "state_code": "13",
            "country_code": "MR"
        },
        {
            "name": "Nouakchott-Sud",
            "state_code": "15",
            "country_code": "MR"
        },
        {
            "name": "Tagant",
            "state_code": "09",
            "country_code": "MR"
        },
        {
            "name": "Tiris Zemmour",
            "state_code": "11",
            "country_code": "MR"
        },
        {
            "name": "Trarza",
            "state_code": "06",
            "country_code": "MR"
        },
        {
            "name": "Agaléga",
            "state_code": "AG",
            "country_code": "MU"
        },
        {
            "name": "Beau Bassin-Rose Hill",
            "state_code": "BR",
            "country_code": "MU"
        },
        {
            "name": "Cargados Carajos",
            "state_code": "CC",
            "country_code": "MU"
        },
        {
            "name": "Curepipe",
            "state_code": "CU",
            "country_code": "MU"
        },
        {
            "name": "Flacq District",
            "state_code": "FL",
            "country_code": "MU"
        },
        {
            "name": "Grand Port District",
            "state_code": "GP",
            "country_code": "MU"
        },
        {
            "name": "Moka District",
            "state_code": "MO",
            "country_code": "MU"
        },
        {
            "name": "Pamplemousses District",
            "state_code": "PA",
            "country_code": "MU"
        },
        {
            "name": "Plaines Wilhems District",
            "state_code": "PW",
            "country_code": "MU"
        },
        {
            "name": "Port Louis",
            "state_code": "PU",
            "country_code": "MU"
        },
        {
            "name": "Port Louis District",
            "state_code": "PL",
            "country_code": "MU"
        },
        {
            "name": "Quatre Bornes",
            "state_code": "QB",
            "country_code": "MU"
        },
        {
            "name": "Rivière du Rempart District",
            "state_code": "RR",
            "country_code": "MU"
        },
        {
            "name": "Rivière Noire District",
            "state_code": "BL",
            "country_code": "MU"
        },
        {
            "name": "Rodrigues",
            "state_code": "RO",
            "country_code": "MU"
        },
        {
            "name": "Savanne District",
            "state_code": "SA",
            "country_code": "MU"
        },
        {
            "name": "Vacoas-Phoenix",
            "state_code": "VP",
            "country_code": "MU"
        },
        {
            "name": "Aguascalientes",
            "state_code": "AGU",
            "country_code": "MX"
        },
        {
            "name": "Baja California",
            "state_code": "BCN",
            "country_code": "MX"
        },
        {
            "name": "Baja California Sur",
            "state_code": "BCS",
            "country_code": "MX"
        },
        {
            "name": "Campeche",
            "state_code": "CAM",
            "country_code": "MX"
        },
        {
            "name": "Chiapas",
            "state_code": "CHP",
            "country_code": "MX"
        },
        {
            "name": "Chihuahua",
            "state_code": "CHH",
            "country_code": "MX"
        },
        {
            "name": "Ciudad de México",
            "state_code": "CDMX",
            "country_code": "MX"
        },
        {
            "name": "Coahuila de Zaragoza",
            "state_code": "COA",
            "country_code": "MX"
        },
        {
            "name": "Colima",
            "state_code": "COL",
            "country_code": "MX"
        },
        {
            "name": "Durango",
            "state_code": "DUR",
            "country_code": "MX"
        },
        {
            "name": "Estado de México",
            "state_code": "MEX",
            "country_code": "MX"
        },
        {
            "name": "Guanajuato",
            "state_code": "GUA",
            "country_code": "MX"
        },
        {
            "name": "Guerrero",
            "state_code": "GRO",
            "country_code": "MX"
        },
        {
            "name": "Hidalgo",
            "state_code": "HID",
            "country_code": "MX"
        },
        {
            "name": "Jalisco",
            "state_code": "JAL",
            "country_code": "MX"
        },
        {
            "name": "Michoacán de Ocampo",
            "state_code": "MIC",
            "country_code": "MX"
        },
        {
            "name": "Morelos",
            "state_code": "MOR",
            "country_code": "MX"
        },
        {
            "name": "Nayarit",
            "state_code": "NAY",
            "country_code": "MX"
        },
        {
            "name": "Nuevo León",
            "state_code": "NLE",
            "country_code": "MX"
        },
        {
            "name": "Oaxaca",
            "state_code": "OAX",
            "country_code": "MX"
        },
        {
            "name": "Puebla",
            "state_code": "PUE",
            "country_code": "MX"
        },
        {
            "name": "Querétaro",
            "state_code": "QUE",
            "country_code": "MX"
        },
        {
            "name": "Quintana Roo",
            "state_code": "ROO",
            "country_code": "MX"
        },
        {
            "name": "San Luis Potosí",
            "state_code": "SLP",
            "country_code": "MX"
        },
        {
            "name": "Sinaloa",
            "state_code": "SIN",
            "country_code": "MX"
        },
        {
            "name": "Sonora",
            "state_code": "SON",
            "country_code": "MX"
        },
        {
            "name": "Tabasco",
            "state_code": "TAB",
            "country_code": "MX"
        },
        {
            "name": "Tamaulipas",
            "state_code": "TAM",
            "country_code": "MX"
        },
        {
            "name": "Tlaxcala",
            "state_code": "TLA",
            "country_code": "MX"
        },
        {
            "name": "Veracruz de Ignacio de la Llave",
            "state_code": "VER",
            "country_code": "MX"
        },
        {
            "name": "Yucatán",
            "state_code": "YUC",
            "country_code": "MX"
        },
        {
            "name": "Zacatecas",
            "state_code": "ZAC",
            "country_code": "MX"
        },
        {
            "name": "Chuuk State",
            "state_code": "TRK",
            "country_code": "FM"
        },
        {
            "name": "Kosrae State",
            "state_code": "KSA",
            "country_code": "FM"
        },
        {
            "name": "Pohnpei State",
            "state_code": "PNI",
            "country_code": "FM"
        },
        {
            "name": "Yap State",
            "state_code": "YAP",
            "country_code": "FM"
        },
        {
            "name": "Anenii Noi District",
            "state_code": "AN",
            "country_code": "MD"
        },
        {
            "name": "Bălți Municipality",
            "state_code": "BA",
            "country_code": "MD"
        },
        {
            "name": "Basarabeasca District",
            "state_code": "BS",
            "country_code": "MD"
        },
        {
            "name": "Bender Municipality",
            "state_code": "BD",
            "country_code": "MD"
        },
        {
            "name": "Briceni District",
            "state_code": "BR",
            "country_code": "MD"
        },
        {
            "name": "Cahul District",
            "state_code": "CA",
            "country_code": "MD"
        },
        {
            "name": "Călărași District",
            "state_code": "CL",
            "country_code": "MD"
        },
        {
            "name": "Cantemir District",
            "state_code": "CT",
            "country_code": "MD"
        },
        {
            "name": "Căușeni District",
            "state_code": "CS",
            "country_code": "MD"
        },
        {
            "name": "Chișinău Municipality",
            "state_code": "CU",
            "country_code": "MD"
        },
        {
            "name": "Cimișlia District",
            "state_code": "CM",
            "country_code": "MD"
        },
        {
            "name": "Criuleni District",
            "state_code": "CR",
            "country_code": "MD"
        },
        {
            "name": "Dondușeni District",
            "state_code": "DO",
            "country_code": "MD"
        },
        {
            "name": "Drochia District",
            "state_code": "DR",
            "country_code": "MD"
        },
        {
            "name": "Dubăsari District",
            "state_code": "DU",
            "country_code": "MD"
        },
        {
            "name": "Edineț District",
            "state_code": "ED",
            "country_code": "MD"
        },
        {
            "name": "Fălești District",
            "state_code": "FA",
            "country_code": "MD"
        },
        {
            "name": "Florești District",
            "state_code": "FL",
            "country_code": "MD"
        },
        {
            "name": "Gagauzia",
            "state_code": "GA",
            "country_code": "MD"
        },
        {
            "name": "Glodeni District",
            "state_code": "GL",
            "country_code": "MD"
        },
        {
            "name": "Hîncești District",
            "state_code": "HI",
            "country_code": "MD"
        },
        {
            "name": "Ialoveni District",
            "state_code": "IA",
            "country_code": "MD"
        },
        {
            "name": "Nisporeni District",
            "state_code": "NI",
            "country_code": "MD"
        },
        {
            "name": "Ocnița District",
            "state_code": "OC",
            "country_code": "MD"
        },
        {
            "name": "Orhei District",
            "state_code": "OR",
            "country_code": "MD"
        },
        {
            "name": "Rezina District",
            "state_code": "RE",
            "country_code": "MD"
        },
        {
            "name": "Rîșcani District",
            "state_code": "RI",
            "country_code": "MD"
        },
        {
            "name": "Sîngerei District",
            "state_code": "SI",
            "country_code": "MD"
        },
        {
            "name": "Șoldănești District",
            "state_code": "SD",
            "country_code": "MD"
        },
        {
            "name": "Soroca District",
            "state_code": "SO",
            "country_code": "MD"
        },
        {
            "name": "Ștefan Vodă District",
            "state_code": "SV",
            "country_code": "MD"
        },
        {
            "name": "Strășeni District",
            "state_code": "ST",
            "country_code": "MD"
        },
        {
            "name": "Taraclia District",
            "state_code": "TA",
            "country_code": "MD"
        },
        {
            "name": "Telenești District",
            "state_code": "TE",
            "country_code": "MD"
        },
        {
            "name": "Transnistria autonomous territorial unit",
            "state_code": "SN",
            "country_code": "MD"
        },
        {
            "name": "Ungheni District",
            "state_code": "UN",
            "country_code": "MD"
        },
        {
            "name": "La Colle",
            "state_code": "CL",
            "country_code": "MC"
        },
        {
            "name": "La Condamine",
            "state_code": "CO",
            "country_code": "MC"
        },
        {
            "name": "Moneghetti",
            "state_code": "MG",
            "country_code": "MC"
        },
        {
            "name": "Arkhangai Province",
            "state_code": "073",
            "country_code": "MN"
        },
        {
            "name": "Bayan-Ölgii Province",
            "state_code": "071",
            "country_code": "MN"
        },
        {
            "name": "Bayankhongor Province",
            "state_code": "069",
            "country_code": "MN"
        },
        {
            "name": "Bulgan Province",
            "state_code": "067",
            "country_code": "MN"
        },
        {
            "name": "Darkhan-Uul Province",
            "state_code": "037",
            "country_code": "MN"
        },
        {
            "name": "Dornod Province",
            "state_code": "061",
            "country_code": "MN"
        },
        {
            "name": "Dornogovi Province",
            "state_code": "063",
            "country_code": "MN"
        },
        {
            "name": "Dundgovi Province",
            "state_code": "059",
            "country_code": "MN"
        },
        {
            "name": "Govi-Altai Province",
            "state_code": "065",
            "country_code": "MN"
        },
        {
            "name": "Govisümber Province",
            "state_code": "064",
            "country_code": "MN"
        },
        {
            "name": "Khentii Province",
            "state_code": "039",
            "country_code": "MN"
        },
        {
            "name": "Khovd Province",
            "state_code": "043",
            "country_code": "MN"
        },
        {
            "name": "Khövsgöl Province",
            "state_code": "041",
            "country_code": "MN"
        },
        {
            "name": "Ömnögovi Province",
            "state_code": "053",
            "country_code": "MN"
        },
        {
            "name": "Orkhon Province",
            "state_code": "035",
            "country_code": "MN"
        },
        {
            "name": "Övörkhangai Province",
            "state_code": "055",
            "country_code": "MN"
        },
        {
            "name": "Selenge Province",
            "state_code": "049",
            "country_code": "MN"
        },
        {
            "name": "Sükhbaatar Province",
            "state_code": "051",
            "country_code": "MN"
        },
        {
            "name": "Töv Province",
            "state_code": "047",
            "country_code": "MN"
        },
        {
            "name": "Uvs Province",
            "state_code": "046",
            "country_code": "MN"
        },
        {
            "name": "Zavkhan Province",
            "state_code": "057",
            "country_code": "MN"
        },
        {
            "name": "Andrijevica Municipality",
            "state_code": "01",
            "country_code": "ME"
        },
        {
            "name": "Bar Municipality",
            "state_code": "02",
            "country_code": "ME"
        },
        {
            "name": "Berane Municipality",
            "state_code": "03",
            "country_code": "ME"
        },
        {
            "name": "Bijelo Polje Municipality",
            "state_code": "04",
            "country_code": "ME"
        },
        {
            "name": "Budva Municipality",
            "state_code": "05",
            "country_code": "ME"
        },
        {
            "name": "Danilovgrad Municipality",
            "state_code": "07",
            "country_code": "ME"
        },
        {
            "name": "Gusinje Municipality",
            "state_code": "22",
            "country_code": "ME"
        },
        {
            "name": "Kolašin Municipality",
            "state_code": "09",
            "country_code": "ME"
        },
        {
            "name": "Kotor Municipality",
            "state_code": "10",
            "country_code": "ME"
        },
        {
            "name": "Mojkovac Municipality",
            "state_code": "11",
            "country_code": "ME"
        },
        {
            "name": "Nikšić Municipality",
            "state_code": "12",
            "country_code": "ME"
        },
        {
            "name": "Old Royal Capital Cetinje",
            "state_code": "06",
            "country_code": "ME"
        },
        {
            "name": "Petnjica Municipality",
            "state_code": "23",
            "country_code": "ME"
        },
        {
            "name": "Plav Municipality",
            "state_code": "13",
            "country_code": "ME"
        },
        {
            "name": "Pljevlja Municipality",
            "state_code": "14",
            "country_code": "ME"
        },
        {
            "name": "Plužine Municipality",
            "state_code": "15",
            "country_code": "ME"
        },
        {
            "name": "Podgorica Municipality",
            "state_code": "16",
            "country_code": "ME"
        },
        {
            "name": "Rožaje Municipality",
            "state_code": "17",
            "country_code": "ME"
        },
        {
            "name": "Šavnik Municipality",
            "state_code": "18",
            "country_code": "ME"
        },
        {
            "name": "Tivat Municipality",
            "state_code": "19",
            "country_code": "ME"
        },
        {
            "name": "Ulcinj Municipality",
            "state_code": "20",
            "country_code": "ME"
        },
        {
            "name": "Žabljak Municipality",
            "state_code": "21",
            "country_code": "ME"
        },
        {
            "name": "Agadir-Ida-Ou-Tanane",
            "state_code": "AGD",
            "country_code": "MA"
        },
        {
            "name": "Al Haouz",
            "state_code": "HAO",
            "country_code": "MA"
        },
        {
            "name": "Al Hoceïma",
            "state_code": "HOC",
            "country_code": "MA"
        },
        {
            "name": "Aousserd (EH)",
            "state_code": "AOU",
            "country_code": "MA"
        },
        {
            "name": "Assa-Zag (EH-partial)",
            "state_code": "ASZ",
            "country_code": "MA"
        },
        {
            "name": "Azilal",
            "state_code": "AZI",
            "country_code": "MA"
        },
        {
            "name": "Béni Mellal",
            "state_code": "BEM",
            "country_code": "MA"
        },
        {
            "name": "Béni Mellal-Khénifra",
            "state_code": "05",
            "country_code": "MA"
        },
        {
            "name": "Benslimane",
            "state_code": "BES",
            "country_code": "MA"
        },
        {
            "name": "Berkane",
            "state_code": "BER",
            "country_code": "MA"
        },
        {
            "name": "Berrechid",
            "state_code": "BRR",
            "country_code": "MA"
        },
        {
            "name": "Boujdour (EH)",
            "state_code": "BOD",
            "country_code": "MA"
        },
        {
            "name": "Boulemane",
            "state_code": "BOM",
            "country_code": "MA"
        },
        {
            "name": "Casablanca",
            "state_code": "CAS",
            "country_code": "MA"
        },
        {
            "name": "Casablanca-Settat",
            "state_code": "06",
            "country_code": "MA"
        },
        {
            "name": "Chefchaouen",
            "state_code": "CHE",
            "country_code": "MA"
        },
        {
            "name": "Chichaoua",
            "state_code": "CHI",
            "country_code": "MA"
        },
        {
            "name": "Chtouka-Ait Baha",
            "state_code": "CHT",
            "country_code": "MA"
        },
        {
            "name": "Dakhla-Oued Ed-Dahab (EH)",
            "state_code": "12",
            "country_code": "MA"
        },
        {
            "name": "Drâa-Tafilalet",
            "state_code": "08",
            "country_code": "MA"
        },
        {
            "name": "Driouch",
            "state_code": "DRI",
            "country_code": "MA"
        },
        {
            "name": "El Hajeb",
            "state_code": "HAJ",
            "country_code": "MA"
        },
        {
            "name": "El Jadida",
            "state_code": "JDI",
            "country_code": "MA"
        },
        {
            "name": "El Kelâa des Sraghna",
            "state_code": "KES",
            "country_code": "MA"
        },
        {
            "name": "Errachidia",
            "state_code": "ERR",
            "country_code": "MA"
        },
        {
            "name": "Es-Semara (EH-partial)",
            "state_code": "ESM",
            "country_code": "MA"
        },
        {
            "name": "Essaouira",
            "state_code": "ESI",
            "country_code": "MA"
        },
        {
            "name": "Fahs-Anjra",
            "state_code": "FAH",
            "country_code": "MA"
        },
        {
            "name": "Fès",
            "state_code": "FES",
            "country_code": "MA"
        },
        {
            "name": "Fès-Meknès",
            "state_code": "03",
            "country_code": "MA"
        },
        {
            "name": "Figuig",
            "state_code": "FIG",
            "country_code": "MA"
        },
        {
            "name": "Fquih Ben Salah",
            "state_code": "FQH",
            "country_code": "MA"
        },
        {
            "name": "Guelmim",
            "state_code": "GUE",
            "country_code": "MA"
        },
        {
            "name": "Guelmim-Oued Noun (EH-partial)",
            "state_code": "10",
            "country_code": "MA"
        },
        {
            "name": "Guercif",
            "state_code": "GUF",
            "country_code": "MA"
        },
        {
            "name": "Ifrane",
            "state_code": "IFR",
            "country_code": "MA"
        },
        {
            "name": "Inezgane-Ait Melloul",
            "state_code": "INE",
            "country_code": "MA"
        },
        {
            "name": "Jerada",
            "state_code": "JRA",
            "country_code": "MA"
        },
        {
            "name": "Kénitra",
            "state_code": "KEN",
            "country_code": "MA"
        },
        {
            "name": "Khémisset",
            "state_code": "KHE",
            "country_code": "MA"
        },
        {
            "name": "Khénifra",
            "state_code": "KHN",
            "country_code": "MA"
        },
        {
            "name": "Khouribga",
            "state_code": "KHO",
            "country_code": "MA"
        },
        {
            "name": "L'Oriental",
            "state_code": "02",
            "country_code": "MA"
        },
        {
            "name": "Laâyoune (EH)",
            "state_code": "LAA",
            "country_code": "MA"
        },
        {
            "name": "Laâyoune-Sakia El Hamra (EH-partial)",
            "state_code": "11",
            "country_code": "MA"
        },
        {
            "name": "Larache",
            "state_code": "LAR",
            "country_code": "MA"
        },
        {
            "name": "M’diq-Fnideq",
            "state_code": "MDF",
            "country_code": "MA"
        },
        {
            "name": "Marrakech",
            "state_code": "MAR",
            "country_code": "MA"
        },
        {
            "name": "Marrakesh-Safi",
            "state_code": "07",
            "country_code": "MA"
        },
        {
            "name": "Médiouna",
            "state_code": "MED",
            "country_code": "MA"
        },
        {
            "name": "Meknès",
            "state_code": "MEK",
            "country_code": "MA"
        },
        {
            "name": "Midelt",
            "state_code": "MID",
            "country_code": "MA"
        },
        {
            "name": "Mohammadia",
            "state_code": "MOH",
            "country_code": "MA"
        },
        {
            "name": "Moulay Yacoub",
            "state_code": "MOU",
            "country_code": "MA"
        },
        {
            "name": "Nador",
            "state_code": "NAD",
            "country_code": "MA"
        },
        {
            "name": "Nouaceur",
            "state_code": "NOU",
            "country_code": "MA"
        },
        {
            "name": "Ouarzazate",
            "state_code": "OUA",
            "country_code": "MA"
        },
        {
            "name": "Oued Ed-Dahab (EH)",
            "state_code": "OUD",
            "country_code": "MA"
        },
        {
            "name": "Ouezzane",
            "state_code": "OUZ",
            "country_code": "MA"
        },
        {
            "name": "Oujda-Angad",
            "state_code": "OUJ",
            "country_code": "MA"
        },
        {
            "name": "Rabat",
            "state_code": "RAB",
            "country_code": "MA"
        },
        {
            "name": "Rabat-Salé-Kénitra",
            "state_code": "04",
            "country_code": "MA"
        },
        {
            "name": "Rehamna",
            "state_code": "REH",
            "country_code": "MA"
        },
        {
            "name": "Safi",
            "state_code": "SAF",
            "country_code": "MA"
        },
        {
            "name": "Salé",
            "state_code": "SAL",
            "country_code": "MA"
        },
        {
            "name": "Sefrou",
            "state_code": "SEF",
            "country_code": "MA"
        },
        {
            "name": "Settat",
            "state_code": "SET",
            "country_code": "MA"
        },
        {
            "name": "Sidi Bennour",
            "state_code": "SIB",
            "country_code": "MA"
        },
        {
            "name": "Sidi Ifni",
            "state_code": "SIF",
            "country_code": "MA"
        },
        {
            "name": "Sidi Kacem",
            "state_code": "SIK",
            "country_code": "MA"
        },
        {
            "name": "Sidi Slimane",
            "state_code": "SIL",
            "country_code": "MA"
        },
        {
            "name": "Skhirate-Témara",
            "state_code": "SKH",
            "country_code": "MA"
        },
        {
            "name": "Souss-Massa",
            "state_code": "09",
            "country_code": "MA"
        },
        {
            "name": "Tan-Tan (EH-partial)",
            "state_code": "TNT",
            "country_code": "MA"
        },
        {
            "name": "Tanger-Assilah",
            "state_code": "TNG",
            "country_code": "MA"
        },
        {
            "name": "Tanger-Tétouan-Al Hoceïma",
            "state_code": "01",
            "country_code": "MA"
        },
        {
            "name": "Taounate",
            "state_code": "TAO",
            "country_code": "MA"
        },
        {
            "name": "Taourirt",
            "state_code": "TAI",
            "country_code": "MA"
        },
        {
            "name": "Tarfaya (EH-partial)",
            "state_code": "TAF",
            "country_code": "MA"
        },
        {
            "name": "Taroudannt",
            "state_code": "TAR",
            "country_code": "MA"
        },
        {
            "name": "Tata",
            "state_code": "TAT",
            "country_code": "MA"
        },
        {
            "name": "Taza",
            "state_code": "TAZ",
            "country_code": "MA"
        },
        {
            "name": "Tétouan",
            "state_code": "TET",
            "country_code": "MA"
        },
        {
            "name": "Tinghir",
            "state_code": "TIN",
            "country_code": "MA"
        },
        {
            "name": "Tiznit",
            "state_code": "TIZ",
            "country_code": "MA"
        },
        {
            "name": "Youssoufia",
            "state_code": "YUS",
            "country_code": "MA"
        },
        {
            "name": "Zagora",
            "state_code": "ZAG",
            "country_code": "MA"
        },
        {
            "name": "Cabo Delgado Province",
            "state_code": "P",
            "country_code": "MZ"
        },
        {
            "name": "Gaza Province",
            "state_code": "G",
            "country_code": "MZ"
        },
        {
            "name": "Inhambane Province",
            "state_code": "I",
            "country_code": "MZ"
        },
        {
            "name": "Manica Province",
            "state_code": "B",
            "country_code": "MZ"
        },
        {
            "name": "Maputo",
            "state_code": "MPM",
            "country_code": "MZ"
        },
        {
            "name": "Maputo Province",
            "state_code": "L",
            "country_code": "MZ"
        },
        {
            "name": "Nampula Province",
            "state_code": "N",
            "country_code": "MZ"
        },
        {
            "name": "Niassa Province",
            "state_code": "A",
            "country_code": "MZ"
        },
        {
            "name": "Sofala Province",
            "state_code": "S",
            "country_code": "MZ"
        },
        {
            "name": "Tete Province",
            "state_code": "T",
            "country_code": "MZ"
        },
        {
            "name": "Zambezia Province",
            "state_code": "Q",
            "country_code": "MZ"
        },
        {
            "name": "Ayeyarwady Region",
            "state_code": "07",
            "country_code": "MM"
        },
        {
            "name": "Bago",
            "state_code": "02",
            "country_code": "MM"
        },
        {
            "name": "Chin State",
            "state_code": "14",
            "country_code": "MM"
        },
        {
            "name": "Kachin State",
            "state_code": "11",
            "country_code": "MM"
        },
        {
            "name": "Kayah State",
            "state_code": "12",
            "country_code": "MM"
        },
        {
            "name": "Kayin State",
            "state_code": "13",
            "country_code": "MM"
        },
        {
            "name": "Magway Region",
            "state_code": "03",
            "country_code": "MM"
        },
        {
            "name": "Mandalay Region",
            "state_code": "04",
            "country_code": "MM"
        },
        {
            "name": "Mon State",
            "state_code": "15",
            "country_code": "MM"
        },
        {
            "name": "Naypyidaw Union Territory",
            "state_code": "18",
            "country_code": "MM"
        },
        {
            "name": "Rakhine State",
            "state_code": "16",
            "country_code": "MM"
        },
        {
            "name": "Sagaing Region",
            "state_code": "01",
            "country_code": "MM"
        },
        {
            "name": "Shan State",
            "state_code": "17",
            "country_code": "MM"
        },
        {
            "name": "Tanintharyi Region",
            "state_code": "05",
            "country_code": "MM"
        },
        {
            "name": "Yangon Region",
            "state_code": "06",
            "country_code": "MM"
        },
        {
            "name": "Erongo Region",
            "state_code": "ER",
            "country_code": "NA"
        },
        {
            "name": "Hardap Region",
            "state_code": "HA",
            "country_code": "NA"
        },
        {
            "name": "Karas Region",
            "state_code": "KA",
            "country_code": "NA"
        },
        {
            "name": "Kavango East Region",
            "state_code": "KE",
            "country_code": "NA"
        },
        {
            "name": "Kavango West Region",
            "state_code": "KW",
            "country_code": "NA"
        },
        {
            "name": "Khomas Region",
            "state_code": "KH",
            "country_code": "NA"
        },
        {
            "name": "Kunene Region",
            "state_code": "KU",
            "country_code": "NA"
        },
        {
            "name": "Ohangwena Region",
            "state_code": "OW",
            "country_code": "NA"
        },
        {
            "name": "Omaheke Region",
            "state_code": "OH",
            "country_code": "NA"
        },
        {
            "name": "Omusati Region",
            "state_code": "OS",
            "country_code": "NA"
        },
        {
            "name": "Oshana Region",
            "state_code": "ON",
            "country_code": "NA"
        },
        {
            "name": "Oshikoto Region",
            "state_code": "OT",
            "country_code": "NA"
        },
        {
            "name": "Otjozondjupa Region",
            "state_code": "OD",
            "country_code": "NA"
        },
        {
            "name": "Zambezi Region",
            "state_code": "CA",
            "country_code": "NA"
        },
        {
            "name": "Aiwo District",
            "state_code": "01",
            "country_code": "NR"
        },
        {
            "name": "Anabar District",
            "state_code": "02",
            "country_code": "NR"
        },
        {
            "name": "Anetan District",
            "state_code": "03",
            "country_code": "NR"
        },
        {
            "name": "Anibare District",
            "state_code": "04",
            "country_code": "NR"
        },
        {
            "name": "Baiti District",
            "state_code": "05",
            "country_code": "NR"
        },
        {
            "name": "Boe District",
            "state_code": "06",
            "country_code": "NR"
        },
        {
            "name": "Buada District",
            "state_code": "07",
            "country_code": "NR"
        },
        {
            "name": "Denigomodu District",
            "state_code": "08",
            "country_code": "NR"
        },
        {
            "name": "Ewa District",
            "state_code": "09",
            "country_code": "NR"
        },
        {
            "name": "Ijuw District",
            "state_code": "10",
            "country_code": "NR"
        },
        {
            "name": "Meneng District",
            "state_code": "11",
            "country_code": "NR"
        },
        {
            "name": "Nibok District",
            "state_code": "12",
            "country_code": "NR"
        },
        {
            "name": "Uaboe District",
            "state_code": "13",
            "country_code": "NR"
        },
        {
            "name": "Yaren District",
            "state_code": "14",
            "country_code": "NR"
        },
        {
            "name": "Bagmati Zone",
            "state_code": "BA",
            "country_code": "NP"
        },
        {
            "name": "Bheri Zone",
            "state_code": "BH",
            "country_code": "NP"
        },
        {
            "name": "Central Region",
            "state_code": "1",
            "country_code": "NP"
        },
        {
            "name": "Dhaulagiri Zone",
            "state_code": "DH",
            "country_code": "NP"
        },
        {
            "name": "Eastern Development Region",
            "state_code": "4",
            "country_code": "NP"
        },
        {
            "name": "Far-Western Development Region",
            "state_code": "5",
            "country_code": "NP"
        },
        {
            "name": "Gandaki Zone",
            "state_code": "GA",
            "country_code": "NP"
        },
        {
            "name": "Janakpur Zone",
            "state_code": "JA",
            "country_code": "NP"
        },
        {
            "name": "Karnali Zone",
            "state_code": "KA",
            "country_code": "NP"
        },
        {
            "name": "Kosi Zone",
            "state_code": "KO",
            "country_code": "NP"
        },
        {
            "name": "Lumbini Zone",
            "state_code": "LU",
            "country_code": "NP"
        },
        {
            "name": "Mahakali Zone",
            "state_code": "MA",
            "country_code": "NP"
        },
        {
            "name": "Mechi Zone",
            "state_code": "ME",
            "country_code": "NP"
        },
        {
            "name": "Mid-Western Region",
            "state_code": "2",
            "country_code": "NP"
        },
        {
            "name": "Narayani Zone",
            "state_code": "NA",
            "country_code": "NP"
        },
        {
            "name": "Rapti Zone",
            "state_code": "RA",
            "country_code": "NP"
        },
        {
            "name": "Sagarmatha Zone",
            "state_code": "SA",
            "country_code": "NP"
        },
        {
            "name": "Seti Zone",
            "state_code": "SE",
            "country_code": "NP"
        },
        {
            "name": "Western Region",
            "state_code": "3",
            "country_code": "NP"
        },
        {
            "name": "Bonaire",
            "state_code": "BQ1",
            "country_code": "NL"
        },
        {
            "name": "Drenthe",
            "state_code": "DR",
            "country_code": "NL"
        },
        {
            "name": "Flevoland",
            "state_code": "FL",
            "country_code": "NL"
        },
        {
            "name": "Friesland",
            "state_code": "FR",
            "country_code": "NL"
        },
        {
            "name": "Gelderland",
            "state_code": "GE",
            "country_code": "NL"
        },
        {
            "name": "Groningen",
            "state_code": "GR",
            "country_code": "NL"
        },
        {
            "name": "Limburg",
            "state_code": "LI",
            "country_code": "NL"
        },
        {
            "name": "North Brabant",
            "state_code": "NB",
            "country_code": "NL"
        },
        {
            "name": "North Holland",
            "state_code": "NH",
            "country_code": "NL"
        },
        {
            "name": "Overijssel",
            "state_code": "OV",
            "country_code": "NL"
        },
        {
            "name": "Saba",
            "state_code": "BQ2",
            "country_code": "NL"
        },
        {
            "name": "Sint Eustatius",
            "state_code": "BQ3",
            "country_code": "NL"
        },
        {
            "name": "South Holland",
            "state_code": "ZH",
            "country_code": "NL"
        },
        {
            "name": "Utrecht",
            "state_code": "UT",
            "country_code": "NL"
        },
        {
            "name": "Zeeland",
            "state_code": "ZE",
            "country_code": "NL"
        },
        {
            "name": "Auckland Region",
            "state_code": "AUK",
            "country_code": "NZ"
        },
        {
            "name": "Bay of Plenty Region",
            "state_code": "BOP",
            "country_code": "NZ"
        },
        {
            "name": "Canterbury Region",
            "state_code": "CAN",
            "country_code": "NZ"
        },
        {
            "name": "Chatham Islands",
            "state_code": "CIT",
            "country_code": "NZ"
        },
        {
            "name": "Gisborne District",
            "state_code": "GIS",
            "country_code": "NZ"
        },
        {
            "name": "Hawke's Bay Region",
            "state_code": "HKB",
            "country_code": "NZ"
        },
        {
            "name": "Manawatu-Wanganui Region",
            "state_code": "MWT",
            "country_code": "NZ"
        },
        {
            "name": "Marlborough Region",
            "state_code": "MBH",
            "country_code": "NZ"
        },
        {
            "name": "Nelson Region",
            "state_code": "NSN",
            "country_code": "NZ"
        },
        {
            "name": "Northland Region",
            "state_code": "NTL",
            "country_code": "NZ"
        },
        {
            "name": "Otago Region",
            "state_code": "OTA",
            "country_code": "NZ"
        },
        {
            "name": "Southland Region",
            "state_code": "STL",
            "country_code": "NZ"
        },
        {
            "name": "Taranaki Region",
            "state_code": "TKI",
            "country_code": "NZ"
        },
        {
            "name": "Tasman District",
            "state_code": "TAS",
            "country_code": "NZ"
        },
        {
            "name": "Waikato Region",
            "state_code": "WKO",
            "country_code": "NZ"
        },
        {
            "name": "Wellington Region",
            "state_code": "WGN",
            "country_code": "NZ"
        },
        {
            "name": "West Coast Region",
            "state_code": "WTC",
            "country_code": "NZ"
        },
        {
            "name": "Boaco",
            "state_code": "BO",
            "country_code": "NI"
        },
        {
            "name": "Carazo",
            "state_code": "CA",
            "country_code": "NI"
        },
        {
            "name": "Chinandega",
            "state_code": "CI",
            "country_code": "NI"
        },
        {
            "name": "Chontales",
            "state_code": "CO",
            "country_code": "NI"
        },
        {
            "name": "Estelí",
            "state_code": "ES",
            "country_code": "NI"
        },
        {
            "name": "Granada",
            "state_code": "GR",
            "country_code": "NI"
        },
        {
            "name": "Jinotega",
            "state_code": "JI",
            "country_code": "NI"
        },
        {
            "name": "León",
            "state_code": "LE",
            "country_code": "NI"
        },
        {
            "name": "Madriz",
            "state_code": "MD",
            "country_code": "NI"
        },
        {
            "name": "Managua",
            "state_code": "MN",
            "country_code": "NI"
        },
        {
            "name": "Masaya",
            "state_code": "MS",
            "country_code": "NI"
        },
        {
            "name": "Matagalpa",
            "state_code": "MT",
            "country_code": "NI"
        },
        {
            "name": "North Caribbean Coast",
            "state_code": "AN",
            "country_code": "NI"
        },
        {
            "name": "Nueva Segovia",
            "state_code": "NS",
            "country_code": "NI"
        },
        {
            "name": "Río San Juan",
            "state_code": "SJ",
            "country_code": "NI"
        },
        {
            "name": "Rivas",
            "state_code": "RI",
            "country_code": "NI"
        },
        {
            "name": "South Caribbean Coast",
            "state_code": "AS",
            "country_code": "NI"
        },
        {
            "name": "Agadez Region",
            "state_code": "1",
            "country_code": "NE"
        },
        {
            "name": "Diffa Region",
            "state_code": "2",
            "country_code": "NE"
        },
        {
            "name": "Dosso Region",
            "state_code": "3",
            "country_code": "NE"
        },
        {
            "name": "Maradi Region",
            "state_code": "4",
            "country_code": "NE"
        },
        {
            "name": "Tahoua Region",
            "state_code": "5",
            "country_code": "NE"
        },
        {
            "name": "Tillabéri Region",
            "state_code": "6",
            "country_code": "NE"
        },
        {
            "name": "Zinder Region",
            "state_code": "7",
            "country_code": "NE"
        },
        {
            "name": "Abia",
            "state_code": "AB",
            "country_code": "NG"
        },
        {
            "name": "Abuja Federal Capital Territory",
            "state_code": "FC",
            "country_code": "NG"
        },
        {
            "name": "Adamawa",
            "state_code": "AD",
            "country_code": "NG"
        },
        {
            "name": "Akwa Ibom",
            "state_code": "AK",
            "country_code": "NG"
        },
        {
            "name": "Anambra",
            "state_code": "AN",
            "country_code": "NG"
        },
        {
            "name": "Bauchi",
            "state_code": "BA",
            "country_code": "NG"
        },
        {
            "name": "Bayelsa",
            "state_code": "BY",
            "country_code": "NG"
        },
        {
            "name": "Benue",
            "state_code": "BE",
            "country_code": "NG"
        },
        {
            "name": "Borno",
            "state_code": "BO",
            "country_code": "NG"
        },
        {
            "name": "Cross River",
            "state_code": "CR",
            "country_code": "NG"
        },
        {
            "name": "Delta",
            "state_code": "DE",
            "country_code": "NG"
        },
        {
            "name": "Ebonyi",
            "state_code": "EB",
            "country_code": "NG"
        },
        {
            "name": "Edo",
            "state_code": "ED",
            "country_code": "NG"
        },
        {
            "name": "Ekiti",
            "state_code": "EK",
            "country_code": "NG"
        },
        {
            "name": "Enugu",
            "state_code": "EN",
            "country_code": "NG"
        },
        {
            "name": "Gombe",
            "state_code": "GO",
            "country_code": "NG"
        },
        {
            "name": "Imo",
            "state_code": "IM",
            "country_code": "NG"
        },
        {
            "name": "Jigawa",
            "state_code": "JI",
            "country_code": "NG"
        },
        {
            "name": "Kaduna",
            "state_code": "KD",
            "country_code": "NG"
        },
        {
            "name": "Kano",
            "state_code": "KN",
            "country_code": "NG"
        },
        {
            "name": "Katsina",
            "state_code": "KT",
            "country_code": "NG"
        },
        {
            "name": "Kebbi",
            "state_code": "KE",
            "country_code": "NG"
        },
        {
            "name": "Kogi",
            "state_code": "KO",
            "country_code": "NG"
        },
        {
            "name": "Kwara",
            "state_code": "KW",
            "country_code": "NG"
        },
        {
            "name": "Lagos",
            "state_code": "LA",
            "country_code": "NG"
        },
        {
            "name": "Nasarawa",
            "state_code": "NA",
            "country_code": "NG"
        },
        {
            "name": "Niger",
            "state_code": "NI",
            "country_code": "NG"
        },
        {
            "name": "Ogun",
            "state_code": "OG",
            "country_code": "NG"
        },
        {
            "name": "Ondo",
            "state_code": "ON",
            "country_code": "NG"
        },
        {
            "name": "Osun",
            "state_code": "OS",
            "country_code": "NG"
        },
        {
            "name": "Oyo",
            "state_code": "OY",
            "country_code": "NG"
        },
        {
            "name": "Plateau",
            "state_code": "PL",
            "country_code": "NG"
        },
        {
            "name": "Rivers",
            "state_code": "RI",
            "country_code": "NG"
        },
        {
            "name": "Sokoto",
            "state_code": "SO",
            "country_code": "NG"
        },
        {
            "name": "Taraba",
            "state_code": "TA",
            "country_code": "NG"
        },
        {
            "name": "Yobe",
            "state_code": "YO",
            "country_code": "NG"
        },
        {
            "name": "Zamfara",
            "state_code": "ZA",
            "country_code": "NG"
        },
        {
            "name": "Chagang Province",
            "state_code": "04",
            "country_code": "KP"
        },
        {
            "name": "Kangwon Province",
            "state_code": "07",
            "country_code": "KP"
        },
        {
            "name": "North Hamgyong Province",
            "state_code": "09",
            "country_code": "KP"
        },
        {
            "name": "North Hwanghae Province",
            "state_code": "06",
            "country_code": "KP"
        },
        {
            "name": "North Pyongan Province",
            "state_code": "03",
            "country_code": "KP"
        },
        {
            "name": "Pyongyang",
            "state_code": "01",
            "country_code": "KP"
        },
        {
            "name": "Rason",
            "state_code": "13",
            "country_code": "KP"
        },
        {
            "name": "Ryanggang Province",
            "state_code": "10",
            "country_code": "KP"
        },
        {
            "name": "South Hamgyong Province",
            "state_code": "08",
            "country_code": "KP"
        },
        {
            "name": "South Hwanghae Province",
            "state_code": "05",
            "country_code": "KP"
        },
        {
            "name": "South Pyongan Province",
            "state_code": "02",
            "country_code": "KP"
        },
        {
            "name": "Akershus",
            "state_code": "02",
            "country_code": "NO"
        },
        {
            "name": "Buskerud",
            "state_code": "06",
            "country_code": "NO"
        },
        {
            "name": "Finnmark",
            "state_code": "20",
            "country_code": "NO"
        },
        {
            "name": "Hedmark",
            "state_code": "04",
            "country_code": "NO"
        },
        {
            "name": "Hordaland",
            "state_code": "12",
            "country_code": "NO"
        },
        {
            "name": "Jan Mayen",
            "state_code": "22",
            "country_code": "NO"
        },
        {
            "name": "Møre og Romsdal",
            "state_code": "15",
            "country_code": "NO"
        },
        {
            "name": "Nord-Trøndelag",
            "state_code": "17",
            "country_code": "NO"
        },
        {
            "name": "Nordland",
            "state_code": "18",
            "country_code": "NO"
        },
        {
            "name": "Oppland",
            "state_code": "05",
            "country_code": "NO"
        },
        {
            "name": "Oslo",
            "state_code": "03",
            "country_code": "NO"
        },
        {
            "name": "Østfold",
            "state_code": "01",
            "country_code": "NO"
        },
        {
            "name": "Rogaland",
            "state_code": "11",
            "country_code": "NO"
        },
        {
            "name": "Sogn og Fjordane",
            "state_code": "14",
            "country_code": "NO"
        },
        {
            "name": "Sør-Trøndelag",
            "state_code": "16",
            "country_code": "NO"
        },
        {
            "name": "Svalbard",
            "state_code": "21",
            "country_code": "NO"
        },
        {
            "name": "Telemark",
            "state_code": "08",
            "country_code": "NO"
        },
        {
            "name": "Troms",
            "state_code": "19",
            "country_code": "NO"
        },
        {
            "name": "Trøndelag",
            "state_code": "50",
            "country_code": "NO"
        },
        {
            "name": "Vest-Agder",
            "state_code": "10",
            "country_code": "NO"
        },
        {
            "name": "Vestfold",
            "state_code": "07",
            "country_code": "NO"
        },
        {
            "name": "Ad Dakhiliyah Governorate",
            "state_code": "DA",
            "country_code": "OM"
        },
        {
            "name": "Ad Dhahirah Governorate",
            "state_code": "ZA",
            "country_code": "OM"
        },
        {
            "name": "Al Batinah North Governorate",
            "state_code": "BS",
            "country_code": "OM"
        },
        {
            "name": "Al Batinah Region",
            "state_code": "BA",
            "country_code": "OM"
        },
        {
            "name": "Al Batinah South Governorate",
            "state_code": "BJ",
            "country_code": "OM"
        },
        {
            "name": "Al Buraimi Governorate",
            "state_code": "BU",
            "country_code": "OM"
        },
        {
            "name": "Al Wusta Governorate",
            "state_code": "WU",
            "country_code": "OM"
        },
        {
            "name": "Ash Sharqiyah North Governorate",
            "state_code": "SS",
            "country_code": "OM"
        },
        {
            "name": "Ash Sharqiyah Region",
            "state_code": "SH",
            "country_code": "OM"
        },
        {
            "name": "Ash Sharqiyah South Governorate",
            "state_code": "SJ",
            "country_code": "OM"
        },
        {
            "name": "Dhofar Governorate",
            "state_code": "ZU",
            "country_code": "OM"
        },
        {
            "name": "Musandam Governorate",
            "state_code": "MU",
            "country_code": "OM"
        },
        {
            "name": "Muscat Governorate",
            "state_code": "MA",
            "country_code": "OM"
        },
        {
            "name": "Azad Kashmir",
            "state_code": "JK",
            "country_code": "PK"
        },
        {
            "name": "Balochistan",
            "state_code": "BA",
            "country_code": "PK"
        },
        {
            "name": "Federally Administered Tribal Areas",
            "state_code": "TA",
            "country_code": "PK"
        },
        {
            "name": "Gilgit-Baltistan",
            "state_code": "GB",
            "country_code": "PK"
        },
        {
            "name": "Islamabad Capital Territory",
            "state_code": "IS",
            "country_code": "PK"
        },
        {
            "name": "Khyber Pakhtunkhwa",
            "state_code": "KP",
            "country_code": "PK"
        },
        {
            "name": "Punjab",
            "state_code": "PB",
            "country_code": "PK"
        },
        {
            "name": "Sindh",
            "state_code": "SD",
            "country_code": "PK"
        },
        {
            "name": "Aimeliik",
            "state_code": "002",
            "country_code": "PW"
        },
        {
            "name": "Airai",
            "state_code": "004",
            "country_code": "PW"
        },
        {
            "name": "Angaur",
            "state_code": "010",
            "country_code": "PW"
        },
        {
            "name": "Hatohobei",
            "state_code": "050",
            "country_code": "PW"
        },
        {
            "name": "Kayangel",
            "state_code": "100",
            "country_code": "PW"
        },
        {
            "name": "Koror",
            "state_code": "150",
            "country_code": "PW"
        },
        {
            "name": "Melekeok",
            "state_code": "212",
            "country_code": "PW"
        },
        {
            "name": "Ngaraard",
            "state_code": "214",
            "country_code": "PW"
        },
        {
            "name": "Ngarchelong",
            "state_code": "218",
            "country_code": "PW"
        },
        {
            "name": "Ngardmau",
            "state_code": "222",
            "country_code": "PW"
        },
        {
            "name": "Ngatpang",
            "state_code": "224",
            "country_code": "PW"
        },
        {
            "name": "Ngchesar",
            "state_code": "226",
            "country_code": "PW"
        },
        {
            "name": "Ngeremlengui",
            "state_code": "227",
            "country_code": "PW"
        },
        {
            "name": "Ngiwal",
            "state_code": "228",
            "country_code": "PW"
        },
        {
            "name": "Peleliu",
            "state_code": "350",
            "country_code": "PW"
        },
        {
            "name": "Sonsorol",
            "state_code": "370",
            "country_code": "PW"
        },
        {
            "name": "Bocas del Toro Province",
            "state_code": "1",
            "country_code": "PA"
        },
        {
            "name": "Chiriquí Province",
            "state_code": "4",
            "country_code": "PA"
        },
        {
            "name": "Coclé Province",
            "state_code": "2",
            "country_code": "PA"
        },
        {
            "name": "Colón Province",
            "state_code": "3",
            "country_code": "PA"
        },
        {
            "name": "Darién Province",
            "state_code": "5",
            "country_code": "PA"
        },
        {
            "name": "Emberá-Wounaan Comarca",
            "state_code": "EM",
            "country_code": "PA"
        },
        {
            "name": "Guna Yala",
            "state_code": "KY",
            "country_code": "PA"
        },
        {
            "name": "Herrera Province",
            "state_code": "6",
            "country_code": "PA"
        },
        {
            "name": "Los Santos Province",
            "state_code": "7",
            "country_code": "PA"
        },
        {
            "name": "Ngöbe-Buglé Comarca",
            "state_code": "NB",
            "country_code": "PA"
        },
        {
            "name": "Panamá Oeste Province",
            "state_code": "10",
            "country_code": "PA"
        },
        {
            "name": "Panamá Province",
            "state_code": "8",
            "country_code": "PA"
        },
        {
            "name": "Veraguas Province",
            "state_code": "9",
            "country_code": "PA"
        },
        {
            "name": "Bougainville",
            "state_code": "NSB",
            "country_code": "PG"
        },
        {
            "name": "Central Province",
            "state_code": "CPM",
            "country_code": "PG"
        },
        {
            "name": "Chimbu Province",
            "state_code": "CPK",
            "country_code": "PG"
        },
        {
            "name": "East New Britain",
            "state_code": "EBR",
            "country_code": "PG"
        },
        {
            "name": "Eastern Highlands Province",
            "state_code": "EHG",
            "country_code": "PG"
        },
        {
            "name": "Enga Province",
            "state_code": "EPW",
            "country_code": "PG"
        },
        {
            "name": "Gulf",
            "state_code": "GPK",
            "country_code": "PG"
        },
        {
            "name": "Hela",
            "state_code": "HLA",
            "country_code": "PG"
        },
        {
            "name": "Jiwaka Province",
            "state_code": "JWK",
            "country_code": "PG"
        },
        {
            "name": "Madang Province",
            "state_code": "MPM",
            "country_code": "PG"
        },
        {
            "name": "Manus Province",
            "state_code": "MRL",
            "country_code": "PG"
        },
        {
            "name": "Milne Bay Province",
            "state_code": "MBA",
            "country_code": "PG"
        },
        {
            "name": "Morobe Province",
            "state_code": "MPL",
            "country_code": "PG"
        },
        {
            "name": "New Ireland Province",
            "state_code": "NIK",
            "country_code": "PG"
        },
        {
            "name": "Oro Province",
            "state_code": "NPP",
            "country_code": "PG"
        },
        {
            "name": "Port Moresby",
            "state_code": "NCD",
            "country_code": "PG"
        },
        {
            "name": "Sandaun Province",
            "state_code": "SAN",
            "country_code": "PG"
        },
        {
            "name": "Southern Highlands Province",
            "state_code": "SHM",
            "country_code": "PG"
        },
        {
            "name": "West New Britain Province",
            "state_code": "WBK",
            "country_code": "PG"
        },
        {
            "name": "Western Highlands Province",
            "state_code": "WHM",
            "country_code": "PG"
        },
        {
            "name": "Western Province",
            "state_code": "WPD",
            "country_code": "PG"
        },
        {
            "name": "Alto Paraguay Department",
            "state_code": "16",
            "country_code": "PY"
        },
        {
            "name": "Alto Paraná Department",
            "state_code": "10",
            "country_code": "PY"
        },
        {
            "name": "Amambay Department",
            "state_code": "13",
            "country_code": "PY"
        },
        {
            "name": "Boquerón Department",
            "state_code": "19",
            "country_code": "PY"
        },
        {
            "name": "Caaguazú",
            "state_code": "5",
            "country_code": "PY"
        },
        {
            "name": "Caazapá",
            "state_code": "6",
            "country_code": "PY"
        },
        {
            "name": "Canindeyú",
            "state_code": "14",
            "country_code": "PY"
        },
        {
            "name": "Central Department",
            "state_code": "11",
            "country_code": "PY"
        },
        {
            "name": "Concepción Department",
            "state_code": "1",
            "country_code": "PY"
        },
        {
            "name": "Cordillera Department",
            "state_code": "3",
            "country_code": "PY"
        },
        {
            "name": "Guairá Department",
            "state_code": "4",
            "country_code": "PY"
        },
        {
            "name": "Itapúa",
            "state_code": "7",
            "country_code": "PY"
        },
        {
            "name": "Misiones Department",
            "state_code": "8",
            "country_code": "PY"
        },
        {
            "name": "Ñeembucú Department",
            "state_code": "12",
            "country_code": "PY"
        },
        {
            "name": "Paraguarí Department",
            "state_code": "9",
            "country_code": "PY"
        },
        {
            "name": "Presidente Hayes Department",
            "state_code": "15",
            "country_code": "PY"
        },
        {
            "name": "San Pedro Department",
            "state_code": "2",
            "country_code": "PY"
        },
        {
            "name": "Amazonas",
            "state_code": "AMA",
            "country_code": "PE"
        },
        {
            "name": "Áncash",
            "state_code": "ANC",
            "country_code": "PE"
        },
        {
            "name": "Apurímac",
            "state_code": "APU",
            "country_code": "PE"
        },
        {
            "name": "Arequipa",
            "state_code": "ARE",
            "country_code": "PE"
        },
        {
            "name": "Ayacucho",
            "state_code": "AYA",
            "country_code": "PE"
        },
        {
            "name": "Cajamarca",
            "state_code": "CAJ",
            "country_code": "PE"
        },
        {
            "name": "Callao",
            "state_code": "CAL",
            "country_code": "PE"
        },
        {
            "name": "Cusco",
            "state_code": "CUS",
            "country_code": "PE"
        },
        {
            "name": "Huancavelica",
            "state_code": "HUV",
            "country_code": "PE"
        },
        {
            "name": "Huanuco",
            "state_code": "HUC",
            "country_code": "PE"
        },
        {
            "name": "Ica",
            "state_code": "ICA",
            "country_code": "PE"
        },
        {
            "name": "Junín",
            "state_code": "JUN",
            "country_code": "PE"
        },
        {
            "name": "La Libertad",
            "state_code": "LAL",
            "country_code": "PE"
        },
        {
            "name": "Lambayeque",
            "state_code": "LAM",
            "country_code": "PE"
        },
        {
            "name": "Lima",
            "state_code": "LIM",
            "country_code": "PE"
        },
        {
            "name": "Loreto",
            "state_code": "LOR",
            "country_code": "PE"
        },
        {
            "name": "Madre de Dios",
            "state_code": "MDD",
            "country_code": "PE"
        },
        {
            "name": "Moquegua",
            "state_code": "MOQ",
            "country_code": "PE"
        },
        {
            "name": "Pasco",
            "state_code": "PAS",
            "country_code": "PE"
        },
        {
            "name": "Piura",
            "state_code": "PIU",
            "country_code": "PE"
        },
        {
            "name": "Puno",
            "state_code": "PUN",
            "country_code": "PE"
        },
        {
            "name": "San Martín",
            "state_code": "SAM",
            "country_code": "PE"
        },
        {
            "name": "Tacna",
            "state_code": "TAC",
            "country_code": "PE"
        },
        {
            "name": "Tumbes",
            "state_code": "TUM",
            "country_code": "PE"
        },
        {
            "name": "Ucayali",
            "state_code": "UCA",
            "country_code": "PE"
        },
        {
            "name": "Abra",
            "state_code": "ABR",
            "country_code": "PH"
        },
        {
            "name": "Agusan del Norte",
            "state_code": "AGN",
            "country_code": "PH"
        },
        {
            "name": "Agusan del Sur",
            "state_code": "AGS",
            "country_code": "PH"
        },
        {
            "name": "Aklan",
            "state_code": "AKL",
            "country_code": "PH"
        },
        {
            "name": "Albay",
            "state_code": "ALB",
            "country_code": "PH"
        },
        {
            "name": "Antique",
            "state_code": "ANT",
            "country_code": "PH"
        },
        {
            "name": "Apayao",
            "state_code": "APA",
            "country_code": "PH"
        },
        {
            "name": "Aurora",
            "state_code": "AUR",
            "country_code": "PH"
        },
        {
            "name": "Autonomous Region in Muslim Mindanao",
            "state_code": "14",
            "country_code": "PH"
        },
        {
            "name": "Basilan",
            "state_code": "BAS",
            "country_code": "PH"
        },
        {
            "name": "Bataan",
            "state_code": "BAN",
            "country_code": "PH"
        },
        {
            "name": "Batanes",
            "state_code": "BTN",
            "country_code": "PH"
        },
        {
            "name": "Batangas",
            "state_code": "BTG",
            "country_code": "PH"
        },
        {
            "name": "Benguet",
            "state_code": "BEN",
            "country_code": "PH"
        },
        {
            "name": "Bicol Region",
            "state_code": "05",
            "country_code": "PH"
        },
        {
            "name": "Biliran",
            "state_code": "BIL",
            "country_code": "PH"
        },
        {
            "name": "Bohol",
            "state_code": "BOH",
            "country_code": "PH"
        },
        {
            "name": "Bukidnon",
            "state_code": "BUK",
            "country_code": "PH"
        },
        {
            "name": "Bulacan",
            "state_code": "BUL",
            "country_code": "PH"
        },
        {
            "name": "Cagayan",
            "state_code": "CAG",
            "country_code": "PH"
        },
        {
            "name": "Cagayan Valley",
            "state_code": "02",
            "country_code": "PH"
        },
        {
            "name": "Calabarzon",
            "state_code": "40",
            "country_code": "PH"
        },
        {
            "name": "Camarines Norte",
            "state_code": "CAN",
            "country_code": "PH"
        },
        {
            "name": "Camarines Sur",
            "state_code": "CAS",
            "country_code": "PH"
        },
        {
            "name": "Camiguin",
            "state_code": "CAM",
            "country_code": "PH"
        },
        {
            "name": "Capiz",
            "state_code": "CAP",
            "country_code": "PH"
        },
        {
            "name": "Caraga",
            "state_code": "13",
            "country_code": "PH"
        },
        {
            "name": "Catanduanes",
            "state_code": "CAT",
            "country_code": "PH"
        },
        {
            "name": "Cavite",
            "state_code": "CAV",
            "country_code": "PH"
        },
        {
            "name": "Cebu",
            "state_code": "CEB",
            "country_code": "PH"
        },
        {
            "name": "Central Luzon",
            "state_code": "03",
            "country_code": "PH"
        },
        {
            "name": "Central Visayas",
            "state_code": "07",
            "country_code": "PH"
        },
        {
            "name": "Compostela Valley",
            "state_code": "COM",
            "country_code": "PH"
        },
        {
            "name": "Cordillera Administrative Region",
            "state_code": "15",
            "country_code": "PH"
        },
        {
            "name": "Cotabato",
            "state_code": "NCO",
            "country_code": "PH"
        },
        {
            "name": "Davao del Norte",
            "state_code": "DAV",
            "country_code": "PH"
        },
        {
            "name": "Davao del Sur",
            "state_code": "DAS",
            "country_code": "PH"
        },
        {
            "name": "Davao Occidental",
            "state_code": "DVO",
            "country_code": "PH"
        },
        {
            "name": "Davao Oriental",
            "state_code": "DAO",
            "country_code": "PH"
        },
        {
            "name": "Davao Region",
            "state_code": "11",
            "country_code": "PH"
        },
        {
            "name": "Dinagat Islands",
            "state_code": "DIN",
            "country_code": "PH"
        },
        {
            "name": "Eastern Samar",
            "state_code": "EAS",
            "country_code": "PH"
        },
        {
            "name": "Eastern Visayas",
            "state_code": "08",
            "country_code": "PH"
        },
        {
            "name": "Guimaras",
            "state_code": "GUI",
            "country_code": "PH"
        },
        {
            "name": "Ifugao",
            "state_code": "IFU",
            "country_code": "PH"
        },
        {
            "name": "Ilocos Norte",
            "state_code": "ILN",
            "country_code": "PH"
        },
        {
            "name": "Ilocos Region",
            "state_code": "01",
            "country_code": "PH"
        },
        {
            "name": "Ilocos Sur",
            "state_code": "ILS",
            "country_code": "PH"
        },
        {
            "name": "Iloilo",
            "state_code": "ILI",
            "country_code": "PH"
        },
        {
            "name": "Isabela",
            "state_code": "ISA",
            "country_code": "PH"
        },
        {
            "name": "Kalinga",
            "state_code": "KAL",
            "country_code": "PH"
        },
        {
            "name": "La Union",
            "state_code": "LUN",
            "country_code": "PH"
        },
        {
            "name": "Laguna",
            "state_code": "LAG",
            "country_code": "PH"
        },
        {
            "name": "Lanao del Norte",
            "state_code": "LAN",
            "country_code": "PH"
        },
        {
            "name": "Lanao del Sur",
            "state_code": "LAS",
            "country_code": "PH"
        },
        {
            "name": "Leyte",
            "state_code": "LEY",
            "country_code": "PH"
        },
        {
            "name": "Maguindanao",
            "state_code": "MAG",
            "country_code": "PH"
        },
        {
            "name": "Marinduque",
            "state_code": "MAD",
            "country_code": "PH"
        },
        {
            "name": "Masbate",
            "state_code": "MAS",
            "country_code": "PH"
        },
        {
            "name": "Metro Manila",
            "state_code": "NCR",
            "country_code": "PH"
        },
        {
            "name": "Mimaropa",
            "state_code": "41",
            "country_code": "PH"
        },
        {
            "name": "Misamis Occidental",
            "state_code": "MSC",
            "country_code": "PH"
        },
        {
            "name": "Misamis Oriental",
            "state_code": "MSR",
            "country_code": "PH"
        },
        {
            "name": "Mountain Province",
            "state_code": "MOU",
            "country_code": "PH"
        },
        {
            "name": "Negros Occidental",
            "state_code": "NEC",
            "country_code": "PH"
        },
        {
            "name": "Negros Oriental",
            "state_code": "NER",
            "country_code": "PH"
        },
        {
            "name": "Northern Mindanao",
            "state_code": "10",
            "country_code": "PH"
        },
        {
            "name": "Northern Samar",
            "state_code": "NSA",
            "country_code": "PH"
        },
        {
            "name": "Nueva Ecija",
            "state_code": "NUE",
            "country_code": "PH"
        },
        {
            "name": "Nueva Vizcaya",
            "state_code": "NUV",
            "country_code": "PH"
        },
        {
            "name": "Occidental Mindoro",
            "state_code": "MDC",
            "country_code": "PH"
        },
        {
            "name": "Oriental Mindoro",
            "state_code": "MDR",
            "country_code": "PH"
        },
        {
            "name": "Palawan",
            "state_code": "PLW",
            "country_code": "PH"
        },
        {
            "name": "Pampanga",
            "state_code": "PAM",
            "country_code": "PH"
        },
        {
            "name": "Pangasinan",
            "state_code": "PAN",
            "country_code": "PH"
        },
        {
            "name": "Quezon",
            "state_code": "QUE",
            "country_code": "PH"
        },
        {
            "name": "Quirino",
            "state_code": "QUI",
            "country_code": "PH"
        },
        {
            "name": "Rizal",
            "state_code": "RIZ",
            "country_code": "PH"
        },
        {
            "name": "Romblon",
            "state_code": "ROM",
            "country_code": "PH"
        },
        {
            "name": "Sarangani",
            "state_code": "SAR",
            "country_code": "PH"
        },
        {
            "name": "Siquijor",
            "state_code": "SIG",
            "country_code": "PH"
        },
        {
            "name": "Soccsksargen",
            "state_code": "12",
            "country_code": "PH"
        },
        {
            "name": "Sorsogon",
            "state_code": "SOR",
            "country_code": "PH"
        },
        {
            "name": "South Cotabato",
            "state_code": "SCO",
            "country_code": "PH"
        },
        {
            "name": "Southern Leyte",
            "state_code": "SLE",
            "country_code": "PH"
        },
        {
            "name": "Sultan Kudarat",
            "state_code": "SUK",
            "country_code": "PH"
        },
        {
            "name": "Sulu",
            "state_code": "SLU",
            "country_code": "PH"
        },
        {
            "name": "Surigao del Norte",
            "state_code": "SUN",
            "country_code": "PH"
        },
        {
            "name": "Surigao del Sur",
            "state_code": "SUR",
            "country_code": "PH"
        },
        {
            "name": "Tarlac",
            "state_code": "TAR",
            "country_code": "PH"
        },
        {
            "name": "Tawi-Tawi",
            "state_code": "TAW",
            "country_code": "PH"
        },
        {
            "name": "Western Visayas",
            "state_code": "06",
            "country_code": "PH"
        },
        {
            "name": "Zambales",
            "state_code": "ZMB",
            "country_code": "PH"
        },
        {
            "name": "Zamboanga del Norte",
            "state_code": "ZAN",
            "country_code": "PH"
        },
        {
            "name": "Zamboanga del Sur",
            "state_code": "ZAS",
            "country_code": "PH"
        },
        {
            "name": "Zamboanga Peninsula",
            "state_code": "09",
            "country_code": "PH"
        },
        {
            "name": "Zamboanga Sibugay",
            "state_code": "ZSI",
            "country_code": "PH"
        },
        {
            "name": "Greater Poland Voivodeship",
            "state_code": "WP",
            "country_code": "PL"
        },
        {
            "name": "Kuyavian-Pomeranian Voivodeship",
            "state_code": "KP",
            "country_code": "PL"
        },
        {
            "name": "Lesser Poland Voivodeship",
            "state_code": "MA",
            "country_code": "PL"
        },
        {
            "name": "Lower Silesian Voivodeship",
            "state_code": "DS",
            "country_code": "PL"
        },
        {
            "name": "Lublin Voivodeship",
            "state_code": "LU",
            "country_code": "PL"
        },
        {
            "name": "Lubusz Voivodeship",
            "state_code": "LB",
            "country_code": "PL"
        },
        {
            "name": "Łódź Voivodeship",
            "state_code": "LD",
            "country_code": "PL"
        },
        {
            "name": "Masovian Voivodeship",
            "state_code": "MZ",
            "country_code": "PL"
        },
        {
            "name": "Opole Voivodeship",
            "state_code": "OP",
            "country_code": "PL"
        },
        {
            "name": "Podkarpackie Voivodeship",
            "state_code": "PK",
            "country_code": "PL"
        },
        {
            "name": "Podlaskie Voivodeship",
            "state_code": "PD",
            "country_code": "PL"
        },
        {
            "name": "Pomeranian Voivodeship",
            "state_code": "PM",
            "country_code": "PL"
        },
        {
            "name": "Silesian Voivodeship",
            "state_code": "SL",
            "country_code": "PL"
        },
        {
            "name": "Świętokrzyskie Voivodeship",
            "state_code": "SK",
            "country_code": "PL"
        },
        {
            "name": "Warmian-Masurian Voivodeship",
            "state_code": "WN",
            "country_code": "PL"
        },
        {
            "name": "West Pomeranian Voivodeship",
            "state_code": "ZP",
            "country_code": "PL"
        },
        {
            "name": "Açores",
            "state_code": "20",
            "country_code": "PT"
        },
        {
            "name": "Aveiro",
            "state_code": "01",
            "country_code": "PT"
        },
        {
            "name": "Beja",
            "state_code": "02",
            "country_code": "PT"
        },
        {
            "name": "Braga",
            "state_code": "03",
            "country_code": "PT"
        },
        {
            "name": "Bragança",
            "state_code": "04",
            "country_code": "PT"
        },
        {
            "name": "Castelo Branco",
            "state_code": "05",
            "country_code": "PT"
        },
        {
            "name": "Coimbra",
            "state_code": "06",
            "country_code": "PT"
        },
        {
            "name": "Évora",
            "state_code": "07",
            "country_code": "PT"
        },
        {
            "name": "Faro",
            "state_code": "08",
            "country_code": "PT"
        },
        {
            "name": "Guarda",
            "state_code": "09",
            "country_code": "PT"
        },
        {
            "name": "Leiria",
            "state_code": "10",
            "country_code": "PT"
        },
        {
            "name": "Lisbon",
            "state_code": "11",
            "country_code": "PT"
        },
        {
            "name": "Madeira",
            "state_code": "30",
            "country_code": "PT"
        },
        {
            "name": "Portalegre",
            "state_code": "12",
            "country_code": "PT"
        },
        {
            "name": "Porto",
            "state_code": "13",
            "country_code": "PT"
        },
        {
            "name": "Santarém",
            "state_code": "14",
            "country_code": "PT"
        },
        {
            "name": "Setúbal",
            "state_code": "15",
            "country_code": "PT"
        },
        {
            "name": "Viana do Castelo",
            "state_code": "16",
            "country_code": "PT"
        },
        {
            "name": "Vila Real",
            "state_code": "17",
            "country_code": "PT"
        },
        {
            "name": "Viseu",
            "state_code": "18",
            "country_code": "PT"
        },
        {
            "name": "Arecibo",
            "state_code": "AR",
            "country_code": "PR"
        },
        {
            "name": "Bayamon",
            "state_code": "BY",
            "country_code": "PR"
        },
        {
            "name": "Caguas",
            "state_code": "CG",
            "country_code": "PR"
        },
        {
            "name": "Carolina",
            "state_code": "CL",
            "country_code": "PR"
        },
        {
            "name": "Guaynabo",
            "state_code": "GN",
            "country_code": "PR"
        },
        {
            "name": "Mayagüez",
            "state_code": "MG",
            "country_code": "PR"
        },
        {
            "name": "Ponce",
            "state_code": "PO",
            "country_code": "PR"
        },
        {
            "name": "San Juan",
            "state_code": "SJ",
            "country_code": "PR"
        },
        {
            "name": "Toa Baja",
            "state_code": "TB",
            "country_code": "PR"
        },
        {
            "name": "Trujillo Alto",
            "state_code": "TA",
            "country_code": "PR"
        },
        {
            "name": "Al Daayen",
            "state_code": "ZA",
            "country_code": "QA"
        },
        {
            "name": "Al Khor",
            "state_code": "KH",
            "country_code": "QA"
        },
        {
            "name": "Al Rayyan Municipality",
            "state_code": "RA",
            "country_code": "QA"
        },
        {
            "name": "Al Wakrah",
            "state_code": "WA",
            "country_code": "QA"
        },
        {
            "name": "Al-Shahaniya",
            "state_code": "SH",
            "country_code": "QA"
        },
        {
            "name": "Doha",
            "state_code": "DA",
            "country_code": "QA"
        },
        {
            "name": "Madinat ash Shamal",
            "state_code": "MS",
            "country_code": "QA"
        },
        {
            "name": "Umm Salal Municipality",
            "state_code": "US",
            "country_code": "QA"
        },
        {
            "name": "Alba",
            "state_code": "AB",
            "country_code": "RO"
        },
        {
            "name": "Arad County",
            "state_code": "AR",
            "country_code": "RO"
        },
        {
            "name": "Arges",
            "state_code": "AG",
            "country_code": "RO"
        },
        {
            "name": "Bacău County",
            "state_code": "BC",
            "country_code": "RO"
        },
        {
            "name": "Bihor County",
            "state_code": "BH",
            "country_code": "RO"
        },
        {
            "name": "Bistrița-Năsăud County",
            "state_code": "BN",
            "country_code": "RO"
        },
        {
            "name": "Botoșani County",
            "state_code": "BT",
            "country_code": "RO"
        },
        {
            "name": "Braila",
            "state_code": "BR",
            "country_code": "RO"
        },
        {
            "name": "Brașov County",
            "state_code": "BV",
            "country_code": "RO"
        },
        {
            "name": "Bucharest",
            "state_code": "B",
            "country_code": "RO"
        },
        {
            "name": "Buzău County",
            "state_code": "BZ",
            "country_code": "RO"
        },
        {
            "name": "Călărași County",
            "state_code": "CL",
            "country_code": "RO"
        },
        {
            "name": "Caraș-Severin County",
            "state_code": "CS",
            "country_code": "RO"
        },
        {
            "name": "Cluj County",
            "state_code": "CJ",
            "country_code": "RO"
        },
        {
            "name": "Constanța County",
            "state_code": "CT",
            "country_code": "RO"
        },
        {
            "name": "Covasna County",
            "state_code": "CV",
            "country_code": "RO"
        },
        {
            "name": "Dâmbovița County",
            "state_code": "DB",
            "country_code": "RO"
        },
        {
            "name": "Dolj County",
            "state_code": "DJ",
            "country_code": "RO"
        },
        {
            "name": "Galați County",
            "state_code": "GL",
            "country_code": "RO"
        },
        {
            "name": "Giurgiu County",
            "state_code": "GR",
            "country_code": "RO"
        },
        {
            "name": "Gorj County",
            "state_code": "GJ",
            "country_code": "RO"
        },
        {
            "name": "Harghita County",
            "state_code": "HR",
            "country_code": "RO"
        },
        {
            "name": "Hunedoara County",
            "state_code": "HD",
            "country_code": "RO"
        },
        {
            "name": "Ialomița County",
            "state_code": "IL",
            "country_code": "RO"
        },
        {
            "name": "Iași County",
            "state_code": "IS",
            "country_code": "RO"
        },
        {
            "name": "Ilfov County",
            "state_code": "IF",
            "country_code": "RO"
        },
        {
            "name": "Maramureș County",
            "state_code": "MM",
            "country_code": "RO"
        },
        {
            "name": "Mehedinți County",
            "state_code": "MH",
            "country_code": "RO"
        },
        {
            "name": "Mureș County",
            "state_code": "MS",
            "country_code": "RO"
        },
        {
            "name": "Neamț County",
            "state_code": "NT",
            "country_code": "RO"
        },
        {
            "name": "Olt County",
            "state_code": "OT",
            "country_code": "RO"
        },
        {
            "name": "Prahova County",
            "state_code": "PH",
            "country_code": "RO"
        },
        {
            "name": "Sălaj County",
            "state_code": "SJ",
            "country_code": "RO"
        },
        {
            "name": "Satu Mare County",
            "state_code": "SM",
            "country_code": "RO"
        },
        {
            "name": "Sibiu County",
            "state_code": "SB",
            "country_code": "RO"
        },
        {
            "name": "Suceava County",
            "state_code": "SV",
            "country_code": "RO"
        },
        {
            "name": "Teleorman County",
            "state_code": "TR",
            "country_code": "RO"
        },
        {
            "name": "Timiș County",
            "state_code": "TM",
            "country_code": "RO"
        },
        {
            "name": "Tulcea County",
            "state_code": "TL",
            "country_code": "RO"
        },
        {
            "name": "Vâlcea County",
            "state_code": "VL",
            "country_code": "RO"
        },
        {
            "name": "Vaslui County",
            "state_code": "VS",
            "country_code": "RO"
        },
        {
            "name": "Vrancea County",
            "state_code": "VN",
            "country_code": "RO"
        },
        {
            "name": "Altai Krai",
            "state_code": "ALT",
            "country_code": "RU"
        },
        {
            "name": "Altai Republic",
            "state_code": "AL",
            "country_code": "RU"
        },
        {
            "name": "Amur Oblast",
            "state_code": "AMU",
            "country_code": "RU"
        },
        {
            "name": "Arkhangelsk",
            "state_code": "ARK",
            "country_code": "RU"
        },
        {
            "name": "Astrakhan Oblast",
            "state_code": "AST",
            "country_code": "RU"
        },
        {
            "name": "Belgorod Oblast",
            "state_code": "BEL",
            "country_code": "RU"
        },
        {
            "name": "Bryansk Oblast",
            "state_code": "BRY",
            "country_code": "RU"
        },
        {
            "name": "Chechen Republic",
            "state_code": "CE",
            "country_code": "RU"
        },
        {
            "name": "Chelyabinsk Oblast",
            "state_code": "CHE",
            "country_code": "RU"
        },
        {
            "name": "Chukotka Autonomous Okrug",
            "state_code": "CHU",
            "country_code": "RU"
        },
        {
            "name": "Chuvash Republic",
            "state_code": "CU",
            "country_code": "RU"
        },
        {
            "name": "Irkutsk",
            "state_code": "IRK",
            "country_code": "RU"
        },
        {
            "name": "Ivanovo Oblast",
            "state_code": "IVA",
            "country_code": "RU"
        },
        {
            "name": "Jewish Autonomous Oblast",
            "state_code": "YEV",
            "country_code": "RU"
        },
        {
            "name": "Kabardino-Balkar Republic",
            "state_code": "KB",
            "country_code": "RU"
        },
        {
            "name": "Kaliningrad",
            "state_code": "KGD",
            "country_code": "RU"
        },
        {
            "name": "Kaluga Oblast",
            "state_code": "KLU",
            "country_code": "RU"
        },
        {
            "name": "Kamchatka Krai",
            "state_code": "KAM",
            "country_code": "RU"
        },
        {
            "name": "Karachay-Cherkess Republic",
            "state_code": "KC",
            "country_code": "RU"
        },
        {
            "name": "Kemerovo Oblast",
            "state_code": "KEM",
            "country_code": "RU"
        },
        {
            "name": "Khabarovsk Krai",
            "state_code": "KHA",
            "country_code": "RU"
        },
        {
            "name": "Khanty-Mansi Autonomous Okrug",
            "state_code": "KHM",
            "country_code": "RU"
        },
        {
            "name": "Kirov Oblast",
            "state_code": "KIR",
            "country_code": "RU"
        },
        {
            "name": "Komi Republic",
            "state_code": "KO",
            "country_code": "RU"
        },
        {
            "name": "Kostroma Oblast",
            "state_code": "KOS",
            "country_code": "RU"
        },
        {
            "name": "Krasnodar Krai",
            "state_code": "KDA",
            "country_code": "RU"
        },
        {
            "name": "Krasnoyarsk Krai",
            "state_code": "KYA",
            "country_code": "RU"
        },
        {
            "name": "Kurgan Oblast",
            "state_code": "KGN",
            "country_code": "RU"
        },
        {
            "name": "Kursk Oblast",
            "state_code": "KRS",
            "country_code": "RU"
        },
        {
            "name": "Leningrad Oblast",
            "state_code": "LEN",
            "country_code": "RU"
        },
        {
            "name": "Lipetsk Oblast",
            "state_code": "LIP",
            "country_code": "RU"
        },
        {
            "name": "Magadan Oblast",
            "state_code": "MAG",
            "country_code": "RU"
        },
        {
            "name": "Mari El Republic",
            "state_code": "ME",
            "country_code": "RU"
        },
        {
            "name": "Moscow",
            "state_code": "MOW",
            "country_code": "RU"
        },
        {
            "name": "Moscow Oblast",
            "state_code": "MOS",
            "country_code": "RU"
        },
        {
            "name": "Murmansk Oblast",
            "state_code": "MUR",
            "country_code": "RU"
        },
        {
            "name": "Nenets Autonomous Okrug",
            "state_code": "NEN",
            "country_code": "RU"
        },
        {
            "name": "Nizhny Novgorod Oblast",
            "state_code": "NIZ",
            "country_code": "RU"
        },
        {
            "name": "Novgorod Oblast",
            "state_code": "NGR",
            "country_code": "RU"
        },
        {
            "name": "Novosibirsk",
            "state_code": "NVS",
            "country_code": "RU"
        },
        {
            "name": "Omsk Oblast",
            "state_code": "OMS",
            "country_code": "RU"
        },
        {
            "name": "Orenburg Oblast",
            "state_code": "ORE",
            "country_code": "RU"
        },
        {
            "name": "Oryol Oblast",
            "state_code": "ORL",
            "country_code": "RU"
        },
        {
            "name": "Penza Oblast",
            "state_code": "PNZ",
            "country_code": "RU"
        },
        {
            "name": "Perm Krai",
            "state_code": "PER",
            "country_code": "RU"
        },
        {
            "name": "Primorsky Krai",
            "state_code": "PRI",
            "country_code": "RU"
        },
        {
            "name": "Pskov Oblast",
            "state_code": "PSK",
            "country_code": "RU"
        },
        {
            "name": "Republic of Adygea",
            "state_code": "AD",
            "country_code": "RU"
        },
        {
            "name": "Republic of Bashkortostan",
            "state_code": "BA",
            "country_code": "RU"
        },
        {
            "name": "Republic of Buryatia",
            "state_code": "BU",
            "country_code": "RU"
        },
        {
            "name": "Republic of Dagestan",
            "state_code": "DA",
            "country_code": "RU"
        },
        {
            "name": "Republic of Ingushetia",
            "state_code": "IN",
            "country_code": "RU"
        },
        {
            "name": "Republic of Kalmykia",
            "state_code": "KL",
            "country_code": "RU"
        },
        {
            "name": "Republic of Karelia",
            "state_code": "KR",
            "country_code": "RU"
        },
        {
            "name": "Republic of Khakassia",
            "state_code": "KK",
            "country_code": "RU"
        },
        {
            "name": "Republic of Mordovia",
            "state_code": "MO",
            "country_code": "RU"
        },
        {
            "name": "Republic of North Ossetia-Alania",
            "state_code": "SE",
            "country_code": "RU"
        },
        {
            "name": "Republic of Tatarstan",
            "state_code": "TA",
            "country_code": "RU"
        },
        {
            "name": "Rostov Oblast",
            "state_code": "ROS",
            "country_code": "RU"
        },
        {
            "name": "Ryazan Oblast",
            "state_code": "RYA",
            "country_code": "RU"
        },
        {
            "name": "Saint Petersburg",
            "state_code": "SPE",
            "country_code": "RU"
        },
        {
            "name": "Sakha Republic",
            "state_code": "SA",
            "country_code": "RU"
        },
        {
            "name": "Sakhalin",
            "state_code": "SAK",
            "country_code": "RU"
        },
        {
            "name": "Samara Oblast",
            "state_code": "SAM",
            "country_code": "RU"
        },
        {
            "name": "Saratov Oblast",
            "state_code": "SAR",
            "country_code": "RU"
        },
        {
            "name": "Sevastopol",
            "state_code": "UA-40",
            "country_code": "RU"
        },
        {
            "name": "Smolensk Oblast",
            "state_code": "SMO",
            "country_code": "RU"
        },
        {
            "name": "Stavropol Krai",
            "state_code": "STA",
            "country_code": "RU"
        },
        {
            "name": "Sverdlovsk",
            "state_code": "SVE",
            "country_code": "RU"
        },
        {
            "name": "Tambov Oblast",
            "state_code": "TAM",
            "country_code": "RU"
        },
        {
            "name": "Tomsk Oblast",
            "state_code": "TOM",
            "country_code": "RU"
        },
        {
            "name": "Tula Oblast",
            "state_code": "TUL",
            "country_code": "RU"
        },
        {
            "name": "Tuva Republic",
            "state_code": "TY",
            "country_code": "RU"
        },
        {
            "name": "Tver Oblast",
            "state_code": "TVE",
            "country_code": "RU"
        },
        {
            "name": "Tyumen Oblast",
            "state_code": "TYU",
            "country_code": "RU"
        },
        {
            "name": "Udmurt Republic",
            "state_code": "UD",
            "country_code": "RU"
        },
        {
            "name": "Ulyanovsk Oblast",
            "state_code": "ULY",
            "country_code": "RU"
        },
        {
            "name": "Vladimir Oblast",
            "state_code": "VLA",
            "country_code": "RU"
        },
        {
            "name": "Volgograd Oblast",
            "state_code": "VGG",
            "country_code": "RU"
        },
        {
            "name": "Vologda Oblast",
            "state_code": "VLG",
            "country_code": "RU"
        },
        {
            "name": "Voronezh Oblast",
            "state_code": "VOR",
            "country_code": "RU"
        },
        {
            "name": "Yamalo-Nenets Autonomous Okrug",
            "state_code": "YAN",
            "country_code": "RU"
        },
        {
            "name": "Yaroslavl Oblast",
            "state_code": "YAR",
            "country_code": "RU"
        },
        {
            "name": "Zabaykalsky Krai",
            "state_code": "ZAB",
            "country_code": "RU"
        },
        {
            "name": "Eastern Province",
            "state_code": "02",
            "country_code": "RW"
        },
        {
            "name": "Kigali district",
            "state_code": "01",
            "country_code": "RW"
        },
        {
            "name": "Northern Province",
            "state_code": "03",
            "country_code": "RW"
        },
        {
            "name": "Southern Province",
            "state_code": "05",
            "country_code": "RW"
        },
        {
            "name": "Western Province",
            "state_code": "04",
            "country_code": "RW"
        },
        {
            "name": "Christ Church Nichola Town Parish",
            "state_code": "01",
            "country_code": "KN"
        },
        {
            "name": "Nevis",
            "state_code": "N",
            "country_code": "KN"
        },
        {
            "name": "Saint Anne Sandy Point Parish",
            "state_code": "02",
            "country_code": "KN"
        },
        {
            "name": "Saint George Gingerland Parish",
            "state_code": "04",
            "country_code": "KN"
        },
        {
            "name": "Saint James Windward Parish",
            "state_code": "05",
            "country_code": "KN"
        },
        {
            "name": "Saint John Capisterre Parish",
            "state_code": "06",
            "country_code": "KN"
        },
        {
            "name": "Saint John Figtree Parish",
            "state_code": "07",
            "country_code": "KN"
        },
        {
            "name": "Saint Kitts",
            "state_code": "K",
            "country_code": "KN"
        },
        {
            "name": "Saint Mary Cayon Parish",
            "state_code": "08",
            "country_code": "KN"
        },
        {
            "name": "Saint Paul Capisterre Parish",
            "state_code": "09",
            "country_code": "KN"
        },
        {
            "name": "Saint Paul Charlestown Parish",
            "state_code": "10",
            "country_code": "KN"
        },
        {
            "name": "Saint Peter Basseterre Parish",
            "state_code": "11",
            "country_code": "KN"
        },
        {
            "name": "Saint Thomas Lowland Parish",
            "state_code": "12",
            "country_code": "KN"
        },
        {
            "name": "Saint Thomas Middle Island Parish",
            "state_code": "13",
            "country_code": "KN"
        },
        {
            "name": "Trinity Palmetto Point Parish",
            "state_code": "15",
            "country_code": "KN"
        },
        {
            "name": "Anse la Raye Quarter",
            "state_code": "01",
            "country_code": "LC"
        },
        {
            "name": "Canaries",
            "state_code": "12",
            "country_code": "LC"
        },
        {
            "name": "Castries Quarter",
            "state_code": "02",
            "country_code": "LC"
        },
        {
            "name": "Choiseul Quarter",
            "state_code": "03",
            "country_code": "LC"
        },
        {
            "name": "Dauphin Quarter",
            "state_code": "04",
            "country_code": "LC"
        },
        {
            "name": "Dennery Quarter",
            "state_code": "05",
            "country_code": "LC"
        },
        {
            "name": "Gros Islet Quarter",
            "state_code": "06",
            "country_code": "LC"
        },
        {
            "name": "Laborie Quarter",
            "state_code": "07",
            "country_code": "LC"
        },
        {
            "name": "Micoud Quarter",
            "state_code": "08",
            "country_code": "LC"
        },
        {
            "name": "Praslin Quarter",
            "state_code": "09",
            "country_code": "LC"
        },
        {
            "name": "Soufrière Quarter",
            "state_code": "10",
            "country_code": "LC"
        },
        {
            "name": "Vieux Fort Quarter",
            "state_code": "11",
            "country_code": "LC"
        },
        {
            "name": "Charlotte Parish",
            "state_code": "01",
            "country_code": "VC"
        },
        {
            "name": "Grenadines Parish",
            "state_code": "06",
            "country_code": "VC"
        },
        {
            "name": "Saint Andrew Parish",
            "state_code": "02",
            "country_code": "VC"
        },
        {
            "name": "Saint David Parish",
            "state_code": "03",
            "country_code": "VC"
        },
        {
            "name": "Saint George Parish",
            "state_code": "04",
            "country_code": "VC"
        },
        {
            "name": "Saint Patrick Parish",
            "state_code": "05",
            "country_code": "VC"
        },
        {
            "name": "A'ana",
            "state_code": "AA",
            "country_code": "WS"
        },
        {
            "name": "Aiga-i-le-Tai",
            "state_code": "AL",
            "country_code": "WS"
        },
        {
            "name": "Atua",
            "state_code": "AT",
            "country_code": "WS"
        },
        {
            "name": "Fa'asaleleaga",
            "state_code": "FA",
            "country_code": "WS"
        },
        {
            "name": "Gaga'emauga",
            "state_code": "GE",
            "country_code": "WS"
        },
        {
            "name": "Gaga'ifomauga",
            "state_code": "GI",
            "country_code": "WS"
        },
        {
            "name": "Palauli",
            "state_code": "PA",
            "country_code": "WS"
        },
        {
            "name": "Satupa'itea",
            "state_code": "SA",
            "country_code": "WS"
        },
        {
            "name": "Tuamasaga",
            "state_code": "TU",
            "country_code": "WS"
        },
        {
            "name": "Va'a-o-Fonoti",
            "state_code": "VF",
            "country_code": "WS"
        },
        {
            "name": "Vaisigano",
            "state_code": "VS",
            "country_code": "WS"
        },
        {
            "name": "Acquaviva",
            "state_code": "01",
            "country_code": "SM"
        },
        {
            "name": "Borgo Maggiore",
            "state_code": "06",
            "country_code": "SM"
        },
        {
            "name": "Chiesanuova",
            "state_code": "02",
            "country_code": "SM"
        },
        {
            "name": "Domagnano",
            "state_code": "03",
            "country_code": "SM"
        },
        {
            "name": "Faetano",
            "state_code": "04",
            "country_code": "SM"
        },
        {
            "name": "Fiorentino",
            "state_code": "05",
            "country_code": "SM"
        },
        {
            "name": "Montegiardino",
            "state_code": "08",
            "country_code": "SM"
        },
        {
            "name": "San Marino",
            "state_code": "07",
            "country_code": "SM"
        },
        {
            "name": "Serravalle",
            "state_code": "09",
            "country_code": "SM"
        },
        {
            "name": "Príncipe Province",
            "state_code": "P",
            "country_code": "ST"
        },
        {
            "name": "São Tomé Province",
            "state_code": "S",
            "country_code": "ST"
        },
        {
            "name": "'Asir",
            "state_code": "14",
            "country_code": "SA"
        },
        {
            "name": "Al Bahah",
            "state_code": "11",
            "country_code": "SA"
        },
        {
            "name": "Al Jawf",
            "state_code": "12",
            "country_code": "SA"
        },
        {
            "name": "Al Madinah",
            "state_code": "03",
            "country_code": "SA"
        },
        {
            "name": "Al-Qassim",
            "state_code": "05",
            "country_code": "SA"
        },
        {
            "name": "Eastern Province",
            "state_code": "04",
            "country_code": "SA"
        },
        {
            "name": "Ha'il",
            "state_code": "06",
            "country_code": "SA"
        },
        {
            "name": "Jizan",
            "state_code": "09",
            "country_code": "SA"
        },
        {
            "name": "Makkah",
            "state_code": "02",
            "country_code": "SA"
        },
        {
            "name": "Najran",
            "state_code": "10",
            "country_code": "SA"
        },
        {
            "name": "Northern Borders",
            "state_code": "08",
            "country_code": "SA"
        },
        {
            "name": "Riyadh",
            "state_code": "01",
            "country_code": "SA"
        },
        {
            "name": "Tabuk",
            "state_code": "07",
            "country_code": "SA"
        },
        {
            "name": "Dakar",
            "state_code": "DK",
            "country_code": "SN"
        },
        {
            "name": "Diourbel Region",
            "state_code": "DB",
            "country_code": "SN"
        },
        {
            "name": "Fatick",
            "state_code": "FK",
            "country_code": "SN"
        },
        {
            "name": "Kaffrine",
            "state_code": "KA",
            "country_code": "SN"
        },
        {
            "name": "Kaolack",
            "state_code": "KL",
            "country_code": "SN"
        },
        {
            "name": "Kédougou",
            "state_code": "KE",
            "country_code": "SN"
        },
        {
            "name": "Kolda",
            "state_code": "KD",
            "country_code": "SN"
        },
        {
            "name": "Louga",
            "state_code": "LG",
            "country_code": "SN"
        },
        {
            "name": "Matam",
            "state_code": "MT",
            "country_code": "SN"
        },
        {
            "name": "Saint-Louis",
            "state_code": "SL",
            "country_code": "SN"
        },
        {
            "name": "Sédhiou",
            "state_code": "SE",
            "country_code": "SN"
        },
        {
            "name": "Tambacounda Region",
            "state_code": "TC",
            "country_code": "SN"
        },
        {
            "name": "Thiès Region",
            "state_code": "TH",
            "country_code": "SN"
        },
        {
            "name": "Ziguinchor",
            "state_code": "ZG",
            "country_code": "SN"
        },
        {
            "name": "Belgrade",
            "state_code": "00",
            "country_code": "RS"
        },
        {
            "name": "Bor District",
            "state_code": "14",
            "country_code": "RS"
        },
        {
            "name": "Braničevo District",
            "state_code": "11",
            "country_code": "RS"
        },
        {
            "name": "Central Banat District",
            "state_code": "02",
            "country_code": "RS"
        },
        {
            "name": "Jablanica District",
            "state_code": "23",
            "country_code": "RS"
        },
        {
            "name": "Kolubara District",
            "state_code": "09",
            "country_code": "RS"
        },
        {
            "name": "Mačva District",
            "state_code": "08",
            "country_code": "RS"
        },
        {
            "name": "Moravica District",
            "state_code": "17",
            "country_code": "RS"
        },
        {
            "name": "Nišava District",
            "state_code": "20",
            "country_code": "RS"
        },
        {
            "name": "North Bačka District",
            "state_code": "01",
            "country_code": "RS"
        },
        {
            "name": "North Banat District",
            "state_code": "03",
            "country_code": "RS"
        },
        {
            "name": "Pčinja District",
            "state_code": "24",
            "country_code": "RS"
        },
        {
            "name": "Pirot District",
            "state_code": "22",
            "country_code": "RS"
        },
        {
            "name": "Podunavlje District",
            "state_code": "10",
            "country_code": "RS"
        },
        {
            "name": "Pomoravlje District",
            "state_code": "13",
            "country_code": "RS"
        },
        {
            "name": "Rasina District",
            "state_code": "19",
            "country_code": "RS"
        },
        {
            "name": "Raška District",
            "state_code": "18",
            "country_code": "RS"
        },
        {
            "name": "South Bačka District",
            "state_code": "06",
            "country_code": "RS"
        },
        {
            "name": "South Banat District",
            "state_code": "04",
            "country_code": "RS"
        },
        {
            "name": "Srem District",
            "state_code": "07",
            "country_code": "RS"
        },
        {
            "name": "Šumadija District",
            "state_code": "12",
            "country_code": "RS"
        },
        {
            "name": "Toplica District",
            "state_code": "21",
            "country_code": "RS"
        },
        {
            "name": "Vojvodina",
            "state_code": "VO",
            "country_code": "RS"
        },
        {
            "name": "West Bačka District",
            "state_code": "05",
            "country_code": "RS"
        },
        {
            "name": "Zaječar District",
            "state_code": "15",
            "country_code": "RS"
        },
        {
            "name": "Zlatibor District",
            "state_code": "16",
            "country_code": "RS"
        },
        {
            "name": "Anse Boileau",
            "state_code": "02",
            "country_code": "SC"
        },
        {
            "name": "Anse Royale",
            "state_code": "05",
            "country_code": "SC"
        },
        {
            "name": "Anse-aux-Pins",
            "state_code": "01",
            "country_code": "SC"
        },
        {
            "name": "Au Cap",
            "state_code": "04",
            "country_code": "SC"
        },
        {
            "name": "Baie Lazare",
            "state_code": "06",
            "country_code": "SC"
        },
        {
            "name": "Baie Sainte Anne",
            "state_code": "07",
            "country_code": "SC"
        },
        {
            "name": "Beau Vallon",
            "state_code": "08",
            "country_code": "SC"
        },
        {
            "name": "Bel Air",
            "state_code": "09",
            "country_code": "SC"
        },
        {
            "name": "Bel Ombre",
            "state_code": "10",
            "country_code": "SC"
        },
        {
            "name": "Cascade",
            "state_code": "11",
            "country_code": "SC"
        },
        {
            "name": "Glacis",
            "state_code": "12",
            "country_code": "SC"
        },
        {
            "name": "Grand'Anse Mahé",
            "state_code": "13",
            "country_code": "SC"
        },
        {
            "name": "Grand'Anse Praslin",
            "state_code": "14",
            "country_code": "SC"
        },
        {
            "name": "La Digue",
            "state_code": "15",
            "country_code": "SC"
        },
        {
            "name": "La Rivière Anglaise",
            "state_code": "16",
            "country_code": "SC"
        },
        {
            "name": "Les Mamelles",
            "state_code": "24",
            "country_code": "SC"
        },
        {
            "name": "Mont Buxton",
            "state_code": "17",
            "country_code": "SC"
        },
        {
            "name": "Mont Fleuri",
            "state_code": "18",
            "country_code": "SC"
        },
        {
            "name": "Plaisance",
            "state_code": "19",
            "country_code": "SC"
        },
        {
            "name": "Pointe La Rue",
            "state_code": "20",
            "country_code": "SC"
        },
        {
            "name": "Port Glaud",
            "state_code": "21",
            "country_code": "SC"
        },
        {
            "name": "Roche Caiman",
            "state_code": "25",
            "country_code": "SC"
        },
        {
            "name": "Saint Louis",
            "state_code": "22",
            "country_code": "SC"
        },
        {
            "name": "Takamaka",
            "state_code": "23",
            "country_code": "SC"
        },
        {
            "name": "Eastern Province",
            "state_code": "E",
            "country_code": "SL"
        },
        {
            "name": "Northern Province",
            "state_code": "N",
            "country_code": "SL"
        },
        {
            "name": "Southern Province",
            "state_code": "S",
            "country_code": "SL"
        },
        {
            "name": "Western Area",
            "state_code": "W",
            "country_code": "SL"
        },
        {
            "name": "Central Singapore Community Development Council",
            "state_code": "01",
            "country_code": "SG"
        },
        {
            "name": "North East Community Development Council",
            "state_code": "02",
            "country_code": "SG"
        },
        {
            "name": "North West Community Development Council",
            "state_code": "03",
            "country_code": "SG"
        },
        {
            "name": "South East Community Development Council",
            "state_code": "04",
            "country_code": "SG"
        },
        {
            "name": "South West Community Development Council",
            "state_code": "05",
            "country_code": "SG"
        },
        {
            "name": "Banská Bystrica Region",
            "state_code": "BC",
            "country_code": "SK"
        },
        {
            "name": "Bratislava Region",
            "state_code": "BL",
            "country_code": "SK"
        },
        {
            "name": "Košice Region",
            "state_code": "KI",
            "country_code": "SK"
        },
        {
            "name": "Nitra Region",
            "state_code": "NI",
            "country_code": "SK"
        },
        {
            "name": "Prešov Region",
            "state_code": "PV",
            "country_code": "SK"
        },
        {
            "name": "Trenčín Region",
            "state_code": "TC",
            "country_code": "SK"
        },
        {
            "name": "Trnava Region",
            "state_code": "TA",
            "country_code": "SK"
        },
        {
            "name": "Žilina Region",
            "state_code": "ZI",
            "country_code": "SK"
        },
        {
            "name": "Ajdovščina Municipality",
            "state_code": "001",
            "country_code": "SI"
        },
        {
            "name": "Ankaran Municipality",
            "state_code": "213",
            "country_code": "SI"
        },
        {
            "name": "Beltinci Municipality",
            "state_code": "002",
            "country_code": "SI"
        },
        {
            "name": "Benedikt Municipality",
            "state_code": "148",
            "country_code": "SI"
        },
        {
            "name": "Bistrica ob Sotli Municipality",
            "state_code": "149",
            "country_code": "SI"
        },
        {
            "name": "Bled Municipality",
            "state_code": "003",
            "country_code": "SI"
        },
        {
            "name": "Bloke Municipality",
            "state_code": "150",
            "country_code": "SI"
        },
        {
            "name": "Bohinj Municipality",
            "state_code": "004",
            "country_code": "SI"
        },
        {
            "name": "Borovnica Municipality",
            "state_code": "005",
            "country_code": "SI"
        },
        {
            "name": "Bovec Municipality",
            "state_code": "006",
            "country_code": "SI"
        },
        {
            "name": "Braslovče Municipality",
            "state_code": "151",
            "country_code": "SI"
        },
        {
            "name": "Brda Municipality",
            "state_code": "007",
            "country_code": "SI"
        },
        {
            "name": "Brežice Municipality",
            "state_code": "009",
            "country_code": "SI"
        },
        {
            "name": "Brezovica Municipality",
            "state_code": "008",
            "country_code": "SI"
        },
        {
            "name": "Cankova Municipality",
            "state_code": "152",
            "country_code": "SI"
        },
        {
            "name": "Cerklje na Gorenjskem Municipality",
            "state_code": "012",
            "country_code": "SI"
        },
        {
            "name": "Cerknica Municipality",
            "state_code": "013",
            "country_code": "SI"
        },
        {
            "name": "Cerkno Municipality",
            "state_code": "014",
            "country_code": "SI"
        },
        {
            "name": "Cerkvenjak Municipality",
            "state_code": "153",
            "country_code": "SI"
        },
        {
            "name": "City Municipality of Celje",
            "state_code": "011",
            "country_code": "SI"
        },
        {
            "name": "City Municipality of Novo Mesto",
            "state_code": "085",
            "country_code": "SI"
        },
        {
            "name": "Črenšovci Municipality",
            "state_code": "015",
            "country_code": "SI"
        },
        {
            "name": "Črna na Koroškem Municipality",
            "state_code": "016",
            "country_code": "SI"
        },
        {
            "name": "Črnomelj Municipality",
            "state_code": "017",
            "country_code": "SI"
        },
        {
            "name": "Destrnik Municipality",
            "state_code": "018",
            "country_code": "SI"
        },
        {
            "name": "Divača Municipality",
            "state_code": "019",
            "country_code": "SI"
        },
        {
            "name": "Dobje Municipality",
            "state_code": "154",
            "country_code": "SI"
        },
        {
            "name": "Dobrepolje Municipality",
            "state_code": "020",
            "country_code": "SI"
        },
        {
            "name": "Dobrna Municipality",
            "state_code": "155",
            "country_code": "SI"
        },
        {
            "name": "Dobrova–Polhov Gradec Municipality",
            "state_code": "021",
            "country_code": "SI"
        },
        {
            "name": "Dobrovnik Municipality",
            "state_code": "156",
            "country_code": "SI"
        },
        {
            "name": "Dol pri Ljubljani Municipality",
            "state_code": "022",
            "country_code": "SI"
        },
        {
            "name": "Dolenjske Toplice Municipality",
            "state_code": "157",
            "country_code": "SI"
        },
        {
            "name": "Domžale Municipality",
            "state_code": "023",
            "country_code": "SI"
        },
        {
            "name": "Dornava Municipality",
            "state_code": "024",
            "country_code": "SI"
        },
        {
            "name": "Dravograd Municipality",
            "state_code": "025",
            "country_code": "SI"
        },
        {
            "name": "Duplek Municipality",
            "state_code": "026",
            "country_code": "SI"
        },
        {
            "name": "Gorenja Vas–Poljane Municipality",
            "state_code": "027",
            "country_code": "SI"
        },
        {
            "name": "Gorišnica Municipality",
            "state_code": "028",
            "country_code": "SI"
        },
        {
            "name": "Gorje Municipality",
            "state_code": "207",
            "country_code": "SI"
        },
        {
            "name": "Gornja Radgona Municipality",
            "state_code": "029",
            "country_code": "SI"
        },
        {
            "name": "Gornji Grad Municipality",
            "state_code": "030",
            "country_code": "SI"
        },
        {
            "name": "Gornji Petrovci Municipality",
            "state_code": "031",
            "country_code": "SI"
        },
        {
            "name": "Grad Municipality",
            "state_code": "158",
            "country_code": "SI"
        },
        {
            "name": "Grosuplje Municipality",
            "state_code": "032",
            "country_code": "SI"
        },
        {
            "name": "Hajdina Municipality",
            "state_code": "159",
            "country_code": "SI"
        },
        {
            "name": "Hoče–Slivnica Municipality",
            "state_code": "160",
            "country_code": "SI"
        },
        {
            "name": "Hodoš Municipality",
            "state_code": "161",
            "country_code": "SI"
        },
        {
            "name": "Horjul Municipality",
            "state_code": "162",
            "country_code": "SI"
        },
        {
            "name": "Hrastnik Municipality",
            "state_code": "034",
            "country_code": "SI"
        },
        {
            "name": "Hrpelje–Kozina Municipality",
            "state_code": "035",
            "country_code": "SI"
        },
        {
            "name": "Idrija Municipality",
            "state_code": "036",
            "country_code": "SI"
        },
        {
            "name": "Ig Municipality",
            "state_code": "037",
            "country_code": "SI"
        },
        {
            "name": "Ivančna Gorica Municipality",
            "state_code": "039",
            "country_code": "SI"
        },
        {
            "name": "Izola Municipality",
            "state_code": "040",
            "country_code": "SI"
        },
        {
            "name": "Jesenice Municipality",
            "state_code": "041",
            "country_code": "SI"
        },
        {
            "name": "Jezersko Municipality",
            "state_code": "163",
            "country_code": "SI"
        },
        {
            "name": "Juršinci Municipality",
            "state_code": "042",
            "country_code": "SI"
        },
        {
            "name": "Kamnik Municipality",
            "state_code": "043",
            "country_code": "SI"
        },
        {
            "name": "Kanal ob Soči Municipality",
            "state_code": "044",
            "country_code": "SI"
        },
        {
            "name": "Kidričevo Municipality",
            "state_code": "045",
            "country_code": "SI"
        },
        {
            "name": "Kobarid Municipality",
            "state_code": "046",
            "country_code": "SI"
        },
        {
            "name": "Kobilje Municipality",
            "state_code": "047",
            "country_code": "SI"
        },
        {
            "name": "Kočevje Municipality",
            "state_code": "048",
            "country_code": "SI"
        },
        {
            "name": "Komen Municipality",
            "state_code": "049",
            "country_code": "SI"
        },
        {
            "name": "Komenda Municipality",
            "state_code": "164",
            "country_code": "SI"
        },
        {
            "name": "Koper City Municipality",
            "state_code": "050",
            "country_code": "SI"
        },
        {
            "name": "Kostanjevica na Krki Municipality",
            "state_code": "197",
            "country_code": "SI"
        },
        {
            "name": "Kostel Municipality",
            "state_code": "165",
            "country_code": "SI"
        },
        {
            "name": "Kozje Municipality",
            "state_code": "051",
            "country_code": "SI"
        },
        {
            "name": "Kranj City Municipality",
            "state_code": "052",
            "country_code": "SI"
        },
        {
            "name": "Kranjska Gora Municipality",
            "state_code": "053",
            "country_code": "SI"
        },
        {
            "name": "Križevci Municipality",
            "state_code": "166",
            "country_code": "SI"
        },
        {
            "name": "Kungota",
            "state_code": "055",
            "country_code": "SI"
        },
        {
            "name": "Kuzma Municipality",
            "state_code": "056",
            "country_code": "SI"
        },
        {
            "name": "Laško Municipality",
            "state_code": "057",
            "country_code": "SI"
        },
        {
            "name": "Lenart Municipality",
            "state_code": "058",
            "country_code": "SI"
        },
        {
            "name": "Lendava Municipality",
            "state_code": "059",
            "country_code": "SI"
        },
        {
            "name": "Litija Municipality",
            "state_code": "060",
            "country_code": "SI"
        },
        {
            "name": "Ljubljana City Municipality",
            "state_code": "061",
            "country_code": "SI"
        },
        {
            "name": "Ljubno Municipality",
            "state_code": "062",
            "country_code": "SI"
        },
        {
            "name": "Ljutomer Municipality",
            "state_code": "063",
            "country_code": "SI"
        },
        {
            "name": "Log–Dragomer Municipality",
            "state_code": "208",
            "country_code": "SI"
        },
        {
            "name": "Logatec Municipality",
            "state_code": "064",
            "country_code": "SI"
        },
        {
            "name": "Loška Dolina Municipality",
            "state_code": "065",
            "country_code": "SI"
        },
        {
            "name": "Loški Potok Municipality",
            "state_code": "066",
            "country_code": "SI"
        },
        {
            "name": "Lovrenc na Pohorju Municipality",
            "state_code": "167",
            "country_code": "SI"
        },
        {
            "name": "Luče Municipality",
            "state_code": "067",
            "country_code": "SI"
        },
        {
            "name": "Lukovica Municipality",
            "state_code": "068",
            "country_code": "SI"
        },
        {
            "name": "Majšperk Municipality",
            "state_code": "069",
            "country_code": "SI"
        },
        {
            "name": "Makole Municipality",
            "state_code": "198",
            "country_code": "SI"
        },
        {
            "name": "Maribor City Municipality",
            "state_code": "070",
            "country_code": "SI"
        },
        {
            "name": "Markovci Municipality",
            "state_code": "168",
            "country_code": "SI"
        },
        {
            "name": "Medvode Municipality",
            "state_code": "071",
            "country_code": "SI"
        },
        {
            "name": "Mengeš Municipality",
            "state_code": "072",
            "country_code": "SI"
        },
        {
            "name": "Metlika Municipality",
            "state_code": "073",
            "country_code": "SI"
        },
        {
            "name": "Mežica Municipality",
            "state_code": "074",
            "country_code": "SI"
        },
        {
            "name": "Miklavž na Dravskem Polju Municipality",
            "state_code": "169",
            "country_code": "SI"
        },
        {
            "name": "Miren–Kostanjevica Municipality",
            "state_code": "075",
            "country_code": "SI"
        },
        {
            "name": "Mirna Municipality",
            "state_code": "212",
            "country_code": "SI"
        },
        {
            "name": "Mirna Peč Municipality",
            "state_code": "170",
            "country_code": "SI"
        },
        {
            "name": "Mislinja Municipality",
            "state_code": "076",
            "country_code": "SI"
        },
        {
            "name": "Mokronog–Trebelno Municipality",
            "state_code": "199",
            "country_code": "SI"
        },
        {
            "name": "Moravče Municipality",
            "state_code": "077",
            "country_code": "SI"
        },
        {
            "name": "Moravske Toplice Municipality",
            "state_code": "078",
            "country_code": "SI"
        },
        {
            "name": "Mozirje Municipality",
            "state_code": "079",
            "country_code": "SI"
        },
        {
            "name": "Municipality of Apače",
            "state_code": "195",
            "country_code": "SI"
        },
        {
            "name": "Municipality of Cirkulane",
            "state_code": "196",
            "country_code": "SI"
        },
        {
            "name": "Municipality of Ilirska Bistrica",
            "state_code": "038",
            "country_code": "SI"
        },
        {
            "name": "Municipality of Krško",
            "state_code": "054",
            "country_code": "SI"
        },
        {
            "name": "Municipality of Škofljica",
            "state_code": "123",
            "country_code": "SI"
        },
        {
            "name": "Murska Sobota City Municipality",
            "state_code": "080",
            "country_code": "SI"
        },
        {
            "name": "Muta Municipality",
            "state_code": "081",
            "country_code": "SI"
        },
        {
            "name": "Naklo Municipality",
            "state_code": "082",
            "country_code": "SI"
        },
        {
            "name": "Nazarje Municipality",
            "state_code": "083",
            "country_code": "SI"
        },
        {
            "name": "Nova Gorica City Municipality",
            "state_code": "084",
            "country_code": "SI"
        },
        {
            "name": "Odranci Municipality",
            "state_code": "086",
            "country_code": "SI"
        },
        {
            "name": "Oplotnica",
            "state_code": "171",
            "country_code": "SI"
        },
        {
            "name": "Ormož Municipality",
            "state_code": "087",
            "country_code": "SI"
        },
        {
            "name": "Osilnica Municipality",
            "state_code": "088",
            "country_code": "SI"
        },
        {
            "name": "Pesnica Municipality",
            "state_code": "089",
            "country_code": "SI"
        },
        {
            "name": "Piran Municipality",
            "state_code": "090",
            "country_code": "SI"
        },
        {
            "name": "Pivka Municipality",
            "state_code": "091",
            "country_code": "SI"
        },
        {
            "name": "Podčetrtek Municipality",
            "state_code": "092",
            "country_code": "SI"
        },
        {
            "name": "Podlehnik Municipality",
            "state_code": "172",
            "country_code": "SI"
        },
        {
            "name": "Podvelka Municipality",
            "state_code": "093",
            "country_code": "SI"
        },
        {
            "name": "Poljčane Municipality",
            "state_code": "200",
            "country_code": "SI"
        },
        {
            "name": "Polzela Municipality",
            "state_code": "173",
            "country_code": "SI"
        },
        {
            "name": "Postojna Municipality",
            "state_code": "094",
            "country_code": "SI"
        },
        {
            "name": "Prebold Municipality",
            "state_code": "174",
            "country_code": "SI"
        },
        {
            "name": "Preddvor Municipality",
            "state_code": "095",
            "country_code": "SI"
        },
        {
            "name": "Prevalje Municipality",
            "state_code": "175",
            "country_code": "SI"
        },
        {
            "name": "Ptuj City Municipality",
            "state_code": "096",
            "country_code": "SI"
        },
        {
            "name": "Puconci Municipality",
            "state_code": "097",
            "country_code": "SI"
        },
        {
            "name": "Rače–Fram Municipality",
            "state_code": "098",
            "country_code": "SI"
        },
        {
            "name": "Radeče Municipality",
            "state_code": "099",
            "country_code": "SI"
        },
        {
            "name": "Radenci Municipality",
            "state_code": "100",
            "country_code": "SI"
        },
        {
            "name": "Radlje ob Dravi Municipality",
            "state_code": "101",
            "country_code": "SI"
        },
        {
            "name": "Radovljica Municipality",
            "state_code": "102",
            "country_code": "SI"
        },
        {
            "name": "Ravne na Koroškem Municipality",
            "state_code": "103",
            "country_code": "SI"
        },
        {
            "name": "Razkrižje Municipality",
            "state_code": "176",
            "country_code": "SI"
        },
        {
            "name": "Rečica ob Savinji Municipality",
            "state_code": "209",
            "country_code": "SI"
        },
        {
            "name": "Renče–Vogrsko Municipality",
            "state_code": "201",
            "country_code": "SI"
        },
        {
            "name": "Ribnica Municipality",
            "state_code": "104",
            "country_code": "SI"
        },
        {
            "name": "Ribnica na Pohorju Municipality",
            "state_code": "177",
            "country_code": "SI"
        },
        {
            "name": "Rogaška Slatina Municipality",
            "state_code": "106",
            "country_code": "SI"
        },
        {
            "name": "Rogašovci Municipality",
            "state_code": "105",
            "country_code": "SI"
        },
        {
            "name": "Rogatec Municipality",
            "state_code": "107",
            "country_code": "SI"
        },
        {
            "name": "Ruše Municipality",
            "state_code": "108",
            "country_code": "SI"
        },
        {
            "name": "Šalovci Municipality",
            "state_code": "033",
            "country_code": "SI"
        },
        {
            "name": "Selnica ob Dravi Municipality",
            "state_code": "178",
            "country_code": "SI"
        },
        {
            "name": "Semič Municipality",
            "state_code": "109",
            "country_code": "SI"
        },
        {
            "name": "Šempeter–Vrtojba Municipality",
            "state_code": "183",
            "country_code": "SI"
        },
        {
            "name": "Šenčur Municipality",
            "state_code": "117",
            "country_code": "SI"
        },
        {
            "name": "Šentilj Municipality",
            "state_code": "118",
            "country_code": "SI"
        },
        {
            "name": "Šentjernej Municipality",
            "state_code": "119",
            "country_code": "SI"
        },
        {
            "name": "Šentjur Municipality",
            "state_code": "120",
            "country_code": "SI"
        },
        {
            "name": "Šentrupert Municipality",
            "state_code": "211",
            "country_code": "SI"
        },
        {
            "name": "Sevnica Municipality",
            "state_code": "110",
            "country_code": "SI"
        },
        {
            "name": "Sežana Municipality",
            "state_code": "111",
            "country_code": "SI"
        },
        {
            "name": "Škocjan Municipality",
            "state_code": "121",
            "country_code": "SI"
        },
        {
            "name": "Škofja Loka Municipality",
            "state_code": "122",
            "country_code": "SI"
        },
        {
            "name": "Slovenj Gradec City Municipality",
            "state_code": "112",
            "country_code": "SI"
        },
        {
            "name": "Slovenska Bistrica Municipality",
            "state_code": "113",
            "country_code": "SI"
        },
        {
            "name": "Slovenske Konjice Municipality",
            "state_code": "114",
            "country_code": "SI"
        },
        {
            "name": "Šmarje pri Jelšah Municipality",
            "state_code": "124",
            "country_code": "SI"
        },
        {
            "name": "Šmarješke Toplice Municipality",
            "state_code": "206",
            "country_code": "SI"
        },
        {
            "name": "Šmartno ob Paki Municipality",
            "state_code": "125",
            "country_code": "SI"
        },
        {
            "name": "Šmartno pri Litiji Municipality",
            "state_code": "194",
            "country_code": "SI"
        },
        {
            "name": "Sodražica Municipality",
            "state_code": "179",
            "country_code": "SI"
        },
        {
            "name": "Solčava Municipality",
            "state_code": "180",
            "country_code": "SI"
        },
        {
            "name": "Šoštanj Municipality",
            "state_code": "126",
            "country_code": "SI"
        },
        {
            "name": "Središče ob Dravi",
            "state_code": "202",
            "country_code": "SI"
        },
        {
            "name": "Starše Municipality",
            "state_code": "115",
            "country_code": "SI"
        },
        {
            "name": "Štore Municipality",
            "state_code": "127",
            "country_code": "SI"
        },
        {
            "name": "Straža Municipality",
            "state_code": "203",
            "country_code": "SI"
        },
        {
            "name": "Sveta Ana Municipality",
            "state_code": "181",
            "country_code": "SI"
        },
        {
            "name": "Sveta Trojica v Slovenskih Goricah Municipality",
            "state_code": "204",
            "country_code": "SI"
        },
        {
            "name": "Sveti Andraž v Slovenskih Goricah Municipality",
            "state_code": "182",
            "country_code": "SI"
        },
        {
            "name": "Sveti Jurij ob Ščavnici Municipality",
            "state_code": "116",
            "country_code": "SI"
        },
        {
            "name": "Sveti Jurij v Slovenskih Goricah Municipality",
            "state_code": "210",
            "country_code": "SI"
        },
        {
            "name": "Sveti Tomaž Municipality",
            "state_code": "205",
            "country_code": "SI"
        },
        {
            "name": "Tabor Municipality",
            "state_code": "184",
            "country_code": "SI"
        },
        {
            "name": "Tišina Municipality",
            "state_code": "010",
            "country_code": "SI"
        },
        {
            "name": "Tolmin Municipality",
            "state_code": "128",
            "country_code": "SI"
        },
        {
            "name": "Trbovlje Municipality",
            "state_code": "129",
            "country_code": "SI"
        },
        {
            "name": "Trebnje Municipality",
            "state_code": "130",
            "country_code": "SI"
        },
        {
            "name": "Trnovska Vas Municipality",
            "state_code": "185",
            "country_code": "SI"
        },
        {
            "name": "Tržič Municipality",
            "state_code": "131",
            "country_code": "SI"
        },
        {
            "name": "Trzin Municipality",
            "state_code": "186",
            "country_code": "SI"
        },
        {
            "name": "Turnišče Municipality",
            "state_code": "132",
            "country_code": "SI"
        },
        {
            "name": "Velika Polana Municipality",
            "state_code": "187",
            "country_code": "SI"
        },
        {
            "name": "Velike Lašče Municipality",
            "state_code": "134",
            "country_code": "SI"
        },
        {
            "name": "Veržej Municipality",
            "state_code": "188",
            "country_code": "SI"
        },
        {
            "name": "Videm Municipality",
            "state_code": "135",
            "country_code": "SI"
        },
        {
            "name": "Vipava Municipality",
            "state_code": "136",
            "country_code": "SI"
        },
        {
            "name": "Vitanje Municipality",
            "state_code": "137",
            "country_code": "SI"
        },
        {
            "name": "Vodice Municipality",
            "state_code": "138",
            "country_code": "SI"
        },
        {
            "name": "Vojnik Municipality",
            "state_code": "139",
            "country_code": "SI"
        },
        {
            "name": "Vransko Municipality",
            "state_code": "189",
            "country_code": "SI"
        },
        {
            "name": "Vrhnika Municipality",
            "state_code": "140",
            "country_code": "SI"
        },
        {
            "name": "Vuzenica Municipality",
            "state_code": "141",
            "country_code": "SI"
        },
        {
            "name": "Zagorje ob Savi Municipality",
            "state_code": "142",
            "country_code": "SI"
        },
        {
            "name": "Žalec Municipality",
            "state_code": "190",
            "country_code": "SI"
        },
        {
            "name": "Zavrč Municipality",
            "state_code": "143",
            "country_code": "SI"
        },
        {
            "name": "Železniki Municipality",
            "state_code": "146",
            "country_code": "SI"
        },
        {
            "name": "Žetale Municipality",
            "state_code": "191",
            "country_code": "SI"
        },
        {
            "name": "Žiri Municipality",
            "state_code": "147",
            "country_code": "SI"
        },
        {
            "name": "Žirovnica Municipality",
            "state_code": "192",
            "country_code": "SI"
        },
        {
            "name": "Zreče Municipality",
            "state_code": "144",
            "country_code": "SI"
        },
        {
            "name": "Žužemberk Municipality",
            "state_code": "193",
            "country_code": "SI"
        },
        {
            "name": "Central Province",
            "state_code": "CE",
            "country_code": "SB"
        },
        {
            "name": "Choiseul Province",
            "state_code": "CH",
            "country_code": "SB"
        },
        {
            "name": "Guadalcanal Province",
            "state_code": "GU",
            "country_code": "SB"
        },
        {
            "name": "Honiara",
            "state_code": "CT",
            "country_code": "SB"
        },
        {
            "name": "Isabel Province",
            "state_code": "IS",
            "country_code": "SB"
        },
        {
            "name": "Makira-Ulawa Province",
            "state_code": "MK",
            "country_code": "SB"
        },
        {
            "name": "Malaita Province",
            "state_code": "ML",
            "country_code": "SB"
        },
        {
            "name": "Rennell and Bellona Province",
            "state_code": "RB",
            "country_code": "SB"
        },
        {
            "name": "Temotu Province",
            "state_code": "TE",
            "country_code": "SB"
        },
        {
            "name": "Western Province",
            "state_code": "WE",
            "country_code": "SB"
        },
        {
            "name": "Awdal Region",
            "state_code": "AW",
            "country_code": "SO"
        },
        {
            "name": "Bakool",
            "state_code": "BK",
            "country_code": "SO"
        },
        {
            "name": "Banaadir",
            "state_code": "BN",
            "country_code": "SO"
        },
        {
            "name": "Bari",
            "state_code": "BR",
            "country_code": "SO"
        },
        {
            "name": "Bay",
            "state_code": "BY",
            "country_code": "SO"
        },
        {
            "name": "Galguduud",
            "state_code": "GA",
            "country_code": "SO"
        },
        {
            "name": "Gedo",
            "state_code": "GE",
            "country_code": "SO"
        },
        {
            "name": "Hiran",
            "state_code": "HI",
            "country_code": "SO"
        },
        {
            "name": "Lower Juba",
            "state_code": "JH",
            "country_code": "SO"
        },
        {
            "name": "Lower Shebelle",
            "state_code": "SH",
            "country_code": "SO"
        },
        {
            "name": "Middle Juba",
            "state_code": "JD",
            "country_code": "SO"
        },
        {
            "name": "Middle Shebelle",
            "state_code": "SD",
            "country_code": "SO"
        },
        {
            "name": "Mudug",
            "state_code": "MU",
            "country_code": "SO"
        },
        {
            "name": "Nugal",
            "state_code": "NU",
            "country_code": "SO"
        },
        {
            "name": "Sanaag Region",
            "state_code": "SA",
            "country_code": "SO"
        },
        {
            "name": "Togdheer Region",
            "state_code": "TO",
            "country_code": "SO"
        },
        {
            "name": "Eastern Cape",
            "state_code": "EC",
            "country_code": "ZA"
        },
        {
            "name": "Free State",
            "state_code": "FS",
            "country_code": "ZA"
        },
        {
            "name": "Gauteng",
            "state_code": "GP",
            "country_code": "ZA"
        },
        {
            "name": "KwaZulu-Natal",
            "state_code": "KZN",
            "country_code": "ZA"
        },
        {
            "name": "Limpopo",
            "state_code": "LP",
            "country_code": "ZA"
        },
        {
            "name": "Mpumalanga",
            "state_code": "MP",
            "country_code": "ZA"
        },
        {
            "name": "North West",
            "state_code": "NW",
            "country_code": "ZA"
        },
        {
            "name": "Northern Cape",
            "state_code": "NC",
            "country_code": "ZA"
        },
        {
            "name": "Western Cape",
            "state_code": "WC",
            "country_code": "ZA"
        },
        {
            "name": "Busan",
            "state_code": "26",
            "country_code": "KR"
        },
        {
            "name": "Daegu",
            "state_code": "27",
            "country_code": "KR"
        },
        {
            "name": "Daejeon",
            "state_code": "30",
            "country_code": "KR"
        },
        {
            "name": "Gangwon Province",
            "state_code": "42",
            "country_code": "KR"
        },
        {
            "name": "Gwangju",
            "state_code": "29",
            "country_code": "KR"
        },
        {
            "name": "Gyeonggi Province",
            "state_code": "41",
            "country_code": "KR"
        },
        {
            "name": "Incheon",
            "state_code": "28",
            "country_code": "KR"
        },
        {
            "name": "Jeju",
            "state_code": "49",
            "country_code": "KR"
        },
        {
            "name": "North Chungcheong Province",
            "state_code": "43",
            "country_code": "KR"
        },
        {
            "name": "North Gyeongsang Province",
            "state_code": "47",
            "country_code": "KR"
        },
        {
            "name": "North Jeolla Province",
            "state_code": "45",
            "country_code": "KR"
        },
        {
            "name": "Sejong City",
            "state_code": "50",
            "country_code": "KR"
        },
        {
            "name": "Seoul",
            "state_code": "11",
            "country_code": "KR"
        },
        {
            "name": "South Chungcheong Province",
            "state_code": "44",
            "country_code": "KR"
        },
        {
            "name": "South Gyeongsang Province",
            "state_code": "48",
            "country_code": "KR"
        },
        {
            "name": "South Jeolla Province",
            "state_code": "46",
            "country_code": "KR"
        },
        {
            "name": "Ulsan",
            "state_code": "31",
            "country_code": "KR"
        },
        {
            "name": "Central Equatoria",
            "state_code": "EC",
            "country_code": "SS"
        },
        {
            "name": "Eastern Equatoria",
            "state_code": "EE",
            "country_code": "SS"
        },
        {
            "name": "Jonglei State",
            "state_code": "JG",
            "country_code": "SS"
        },
        {
            "name": "Lakes",
            "state_code": "LK",
            "country_code": "SS"
        },
        {
            "name": "Northern Bahr el Ghazal",
            "state_code": "BN",
            "country_code": "SS"
        },
        {
            "name": "Unity",
            "state_code": "UY",
            "country_code": "SS"
        },
        {
            "name": "Upper Nile",
            "state_code": "NU",
            "country_code": "SS"
        },
        {
            "name": "Warrap",
            "state_code": "WR",
            "country_code": "SS"
        },
        {
            "name": "Western Bahr el Ghazal",
            "state_code": "BW",
            "country_code": "SS"
        },
        {
            "name": "Western Equatoria",
            "state_code": "EW",
            "country_code": "SS"
        },
        {
            "name": "Andalusia",
            "state_code": "AN",
            "country_code": "ES"
        },
        {
            "name": "Aragon",
            "state_code": "AR",
            "country_code": "ES"
        },
        {
            "name": "Asturias",
            "state_code": "AS",
            "country_code": "ES"
        },
        {
            "name": "Ávila",
            "state_code": "AV",
            "country_code": "ES"
        },
        {
            "name": "Balearic Islands",
            "state_code": "PM",
            "country_code": "ES"
        },
        {
            "name": "Basque Country",
            "state_code": "PV",
            "country_code": "ES"
        },
        {
            "name": "Burgos Province",
            "state_code": "BU",
            "country_code": "ES"
        },
        {
            "name": "Canary Islands",
            "state_code": "CN",
            "country_code": "ES"
        },
        {
            "name": "Cantabria",
            "state_code": "CB",
            "country_code": "ES"
        },
        {
            "name": "Castile and León",
            "state_code": "CL",
            "country_code": "ES"
        },
        {
            "name": "Castilla La Mancha",
            "state_code": "CM",
            "country_code": "ES"
        },
        {
            "name": "Catalonia",
            "state_code": "CT",
            "country_code": "ES"
        },
        {
            "name": "Ceuta",
            "state_code": "CE",
            "country_code": "ES"
        },
        {
            "name": "Extremadura",
            "state_code": "EX",
            "country_code": "ES"
        },
        {
            "name": "Galicia",
            "state_code": "GA",
            "country_code": "ES"
        },
        {
            "name": "La Rioja",
            "state_code": "RI",
            "country_code": "ES"
        },
        {
            "name": "Léon",
            "state_code": "LE",
            "country_code": "ES"
        },
        {
            "name": "Madrid",
            "state_code": "MD",
            "country_code": "ES"
        },
        {
            "name": "Melilla",
            "state_code": "ML",
            "country_code": "ES"
        },
        {
            "name": "Murcia",
            "state_code": "MC",
            "country_code": "ES"
        },
        {
            "name": "Navarra",
            "state_code": "NC",
            "country_code": "ES"
        },
        {
            "name": "Palencia Province",
            "state_code": "P",
            "country_code": "ES"
        },
        {
            "name": "Salamanca Province",
            "state_code": "SA",
            "country_code": "ES"
        },
        {
            "name": "Segovia Province",
            "state_code": "SG",
            "country_code": "ES"
        },
        {
            "name": "Soria Province",
            "state_code": "SO",
            "country_code": "ES"
        },
        {
            "name": "Valencia",
            "state_code": "VC",
            "country_code": "ES"
        },
        {
            "name": "Valladolid Province",
            "state_code": "VA",
            "country_code": "ES"
        },
        {
            "name": "Zamora Province",
            "state_code": "ZA",
            "country_code": "ES"
        },
        {
            "name": "Ampara District",
            "state_code": "52",
            "country_code": "LK"
        },
        {
            "name": "Anuradhapura District",
            "state_code": "71",
            "country_code": "LK"
        },
        {
            "name": "Badulla District",
            "state_code": "81",
            "country_code": "LK"
        },
        {
            "name": "Batticaloa District",
            "state_code": "51",
            "country_code": "LK"
        },
        {
            "name": "Central Province",
            "state_code": "2",
            "country_code": "LK"
        },
        {
            "name": "Colombo District",
            "state_code": "11",
            "country_code": "LK"
        },
        {
            "name": "Eastern Province",
            "state_code": "5",
            "country_code": "LK"
        },
        {
            "name": "Galle District",
            "state_code": "31",
            "country_code": "LK"
        },
        {
            "name": "Gampaha District",
            "state_code": "12",
            "country_code": "LK"
        },
        {
            "name": "Hambantota District",
            "state_code": "33",
            "country_code": "LK"
        },
        {
            "name": "Jaffna District",
            "state_code": "41",
            "country_code": "LK"
        },
        {
            "name": "Kalutara District",
            "state_code": "13",
            "country_code": "LK"
        },
        {
            "name": "Kandy District",
            "state_code": "21",
            "country_code": "LK"
        },
        {
            "name": "Kegalle District",
            "state_code": "92",
            "country_code": "LK"
        },
        {
            "name": "Kilinochchi District",
            "state_code": "42",
            "country_code": "LK"
        },
        {
            "name": "Mannar District",
            "state_code": "43",
            "country_code": "LK"
        },
        {
            "name": "Matale District",
            "state_code": "22",
            "country_code": "LK"
        },
        {
            "name": "Matara District",
            "state_code": "32",
            "country_code": "LK"
        },
        {
            "name": "Monaragala District",
            "state_code": "82",
            "country_code": "LK"
        },
        {
            "name": "Mullaitivu District",
            "state_code": "45",
            "country_code": "LK"
        },
        {
            "name": "North Central Province",
            "state_code": "7",
            "country_code": "LK"
        },
        {
            "name": "North Western Province",
            "state_code": "6",
            "country_code": "LK"
        },
        {
            "name": "Northern Province",
            "state_code": "4",
            "country_code": "LK"
        },
        {
            "name": "Nuwara Eliya District",
            "state_code": "23",
            "country_code": "LK"
        },
        {
            "name": "Polonnaruwa District",
            "state_code": "72",
            "country_code": "LK"
        },
        {
            "name": "Puttalam District",
            "state_code": "62",
            "country_code": "LK"
        },
        {
            "name": "Ratnapura district",
            "state_code": "91",
            "country_code": "LK"
        },
        {
            "name": "Sabaragamuwa Province",
            "state_code": "9",
            "country_code": "LK"
        },
        {
            "name": "Southern Province",
            "state_code": "3",
            "country_code": "LK"
        },
        {
            "name": "Trincomalee District",
            "state_code": "53",
            "country_code": "LK"
        },
        {
            "name": "Uva Province",
            "state_code": "8",
            "country_code": "LK"
        },
        {
            "name": "Vavuniya District",
            "state_code": "44",
            "country_code": "LK"
        },
        {
            "name": "Western Province",
            "state_code": "1",
            "country_code": "LK"
        },
        {
            "name": "Al Jazirah",
            "state_code": "GZ",
            "country_code": "SD"
        },
        {
            "name": "Al Qadarif",
            "state_code": "GD",
            "country_code": "SD"
        },
        {
            "name": "Blue Nile",
            "state_code": "NB",
            "country_code": "SD"
        },
        {
            "name": "Central Darfur",
            "state_code": "DC",
            "country_code": "SD"
        },
        {
            "name": "East Darfur",
            "state_code": "DE",
            "country_code": "SD"
        },
        {
            "name": "Kassala",
            "state_code": "KA",
            "country_code": "SD"
        },
        {
            "name": "Khartoum",
            "state_code": "KH",
            "country_code": "SD"
        },
        {
            "name": "North Darfur",
            "state_code": "DN",
            "country_code": "SD"
        },
        {
            "name": "North Kordofan",
            "state_code": "KN",
            "country_code": "SD"
        },
        {
            "name": "Northern",
            "state_code": "NO",
            "country_code": "SD"
        },
        {
            "name": "Red Sea",
            "state_code": "RS",
            "country_code": "SD"
        },
        {
            "name": "River Nile",
            "state_code": "NR",
            "country_code": "SD"
        },
        {
            "name": "Sennar",
            "state_code": "SI",
            "country_code": "SD"
        },
        {
            "name": "South Darfur",
            "state_code": "DS",
            "country_code": "SD"
        },
        {
            "name": "South Kordofan",
            "state_code": "KS",
            "country_code": "SD"
        },
        {
            "name": "West Darfur",
            "state_code": "DW",
            "country_code": "SD"
        },
        {
            "name": "West Kordofan",
            "state_code": "GK",
            "country_code": "SD"
        },
        {
            "name": "White Nile",
            "state_code": "NW",
            "country_code": "SD"
        },
        {
            "name": "Brokopondo District",
            "state_code": "BR",
            "country_code": "SR"
        },
        {
            "name": "Commewijne District",
            "state_code": "CM",
            "country_code": "SR"
        },
        {
            "name": "Coronie District",
            "state_code": "CR",
            "country_code": "SR"
        },
        {
            "name": "Marowijne District",
            "state_code": "MA",
            "country_code": "SR"
        },
        {
            "name": "Nickerie District",
            "state_code": "NI",
            "country_code": "SR"
        },
        {
            "name": "Para District",
            "state_code": "PR",
            "country_code": "SR"
        },
        {
            "name": "Paramaribo District",
            "state_code": "PM",
            "country_code": "SR"
        },
        {
            "name": "Saramacca District",
            "state_code": "SA",
            "country_code": "SR"
        },
        {
            "name": "Sipaliwini District",
            "state_code": "SI",
            "country_code": "SR"
        },
        {
            "name": "Wanica District",
            "state_code": "WA",
            "country_code": "SR"
        },
        {
            "name": "Hhohho District",
            "state_code": "HH",
            "country_code": "SZ"
        },
        {
            "name": "Lubombo District",
            "state_code": "LU",
            "country_code": "SZ"
        },
        {
            "name": "Manzini District",
            "state_code": "MA",
            "country_code": "SZ"
        },
        {
            "name": "Shiselweni District",
            "state_code": "SH",
            "country_code": "SZ"
        },
        {
            "name": "Blekinge",
            "state_code": "K",
            "country_code": "SE"
        },
        {
            "name": "Dalarna County",
            "state_code": "W",
            "country_code": "SE"
        },
        {
            "name": "Gävleborg County",
            "state_code": "X",
            "country_code": "SE"
        },
        {
            "name": "Gotland County",
            "state_code": "I",
            "country_code": "SE"
        },
        {
            "name": "Halland County",
            "state_code": "N",
            "country_code": "SE"
        },
        {
            "name": "Jönköping County",
            "state_code": "F",
            "country_code": "SE"
        },
        {
            "name": "Kalmar County",
            "state_code": "H",
            "country_code": "SE"
        },
        {
            "name": "Kronoberg County",
            "state_code": "G",
            "country_code": "SE"
        },
        {
            "name": "Norrbotten County",
            "state_code": "BD",
            "country_code": "SE"
        },
        {
            "name": "Örebro County",
            "state_code": "T",
            "country_code": "SE"
        },
        {
            "name": "Östergötland County",
            "state_code": "E",
            "country_code": "SE"
        },
        {
            "name": "Skåne County",
            "state_code": "M",
            "country_code": "SE"
        },
        {
            "name": "Södermanland County",
            "state_code": "D",
            "country_code": "SE"
        },
        {
            "name": "Stockholm County",
            "state_code": "AB",
            "country_code": "SE"
        },
        {
            "name": "Uppsala County",
            "state_code": "C",
            "country_code": "SE"
        },
        {
            "name": "Värmland County",
            "state_code": "S",
            "country_code": "SE"
        },
        {
            "name": "Västerbotten County",
            "state_code": "AC",
            "country_code": "SE"
        },
        {
            "name": "Västernorrland County",
            "state_code": "Y",
            "country_code": "SE"
        },
        {
            "name": "Västmanland County",
            "state_code": "U",
            "country_code": "SE"
        },
        {
            "name": "Västra Götaland County",
            "state_code": "O",
            "country_code": "SE"
        },
        {
            "name": "Aargau",
            "state_code": "AG",
            "country_code": "CH"
        },
        {
            "name": "Appenzell Ausserrhoden",
            "state_code": "AR",
            "country_code": "CH"
        },
        {
            "name": "Appenzell Innerrhoden",
            "state_code": "AI",
            "country_code": "CH"
        },
        {
            "name": "Basel-Land",
            "state_code": "BL",
            "country_code": "CH"
        },
        {
            "name": "Basel-Stadt",
            "state_code": "BS",
            "country_code": "CH"
        },
        {
            "name": "Bern",
            "state_code": "BE",
            "country_code": "CH"
        },
        {
            "name": "Fribourg",
            "state_code": "FR",
            "country_code": "CH"
        },
        {
            "name": "Geneva",
            "state_code": "GE",
            "country_code": "CH"
        },
        {
            "name": "Glarus",
            "state_code": "GL",
            "country_code": "CH"
        },
        {
            "name": "Graubünden",
            "state_code": "GR",
            "country_code": "CH"
        },
        {
            "name": "Jura",
            "state_code": "JU",
            "country_code": "CH"
        },
        {
            "name": "Lucerne",
            "state_code": "LU",
            "country_code": "CH"
        },
        {
            "name": "Neuchâtel",
            "state_code": "NE",
            "country_code": "CH"
        },
        {
            "name": "Nidwalden",
            "state_code": "NW",
            "country_code": "CH"
        },
        {
            "name": "Obwalden",
            "state_code": "OW",
            "country_code": "CH"
        },
        {
            "name": "Schaffhausen",
            "state_code": "SH",
            "country_code": "CH"
        },
        {
            "name": "Schwyz",
            "state_code": "SZ",
            "country_code": "CH"
        },
        {
            "name": "Solothurn",
            "state_code": "SO",
            "country_code": "CH"
        },
        {
            "name": "St. Gallen",
            "state_code": "SG",
            "country_code": "CH"
        },
        {
            "name": "Thurgau",
            "state_code": "TG",
            "country_code": "CH"
        },
        {
            "name": "Ticino",
            "state_code": "TI",
            "country_code": "CH"
        },
        {
            "name": "Uri",
            "state_code": "UR",
            "country_code": "CH"
        },
        {
            "name": "Valais",
            "state_code": "VS",
            "country_code": "CH"
        },
        {
            "name": "Vaud",
            "state_code": "VD",
            "country_code": "CH"
        },
        {
            "name": "Zug",
            "state_code": "ZG",
            "country_code": "CH"
        },
        {
            "name": "Zürich",
            "state_code": "ZH",
            "country_code": "CH"
        },
        {
            "name": "Al-Hasakah Governorate",
            "state_code": "HA",
            "country_code": "SY"
        },
        {
            "name": "Al-Raqqah Governorate",
            "state_code": "RA",
            "country_code": "SY"
        },
        {
            "name": "Aleppo Governorate",
            "state_code": "HL",
            "country_code": "SY"
        },
        {
            "name": "As-Suwayda Governorate",
            "state_code": "SU",
            "country_code": "SY"
        },
        {
            "name": "Damascus Governorate",
            "state_code": "DI",
            "country_code": "SY"
        },
        {
            "name": "Daraa Governorate",
            "state_code": "DR",
            "country_code": "SY"
        },
        {
            "name": "Deir ez-Zor Governorate",
            "state_code": "DY",
            "country_code": "SY"
        },
        {
            "name": "Hama Governorate",
            "state_code": "HM",
            "country_code": "SY"
        },
        {
            "name": "Homs Governorate",
            "state_code": "HI",
            "country_code": "SY"
        },
        {
            "name": "Idlib Governorate",
            "state_code": "ID",
            "country_code": "SY"
        },
        {
            "name": "Latakia Governorate",
            "state_code": "LA",
            "country_code": "SY"
        },
        {
            "name": "Quneitra Governorate",
            "state_code": "QU",
            "country_code": "SY"
        },
        {
            "name": "Rif Dimashq Governorate",
            "state_code": "RD",
            "country_code": "SY"
        },
        {
            "name": "Tartus Governorate",
            "state_code": "TA",
            "country_code": "SY"
        },
        {
            "name": "Changhua",
            "state_code": "CHA",
            "country_code": "TW"
        },
        {
            "name": "Chiayi",
            "state_code": "CYI",
            "country_code": "TW"
        },
        {
            "name": "Chiayi",
            "state_code": "CYQ",
            "country_code": "TW"
        },
        {
            "name": "Hsinchu",
            "state_code": "HSQ",
            "country_code": "TW"
        },
        {
            "name": "Hsinchu",
            "state_code": "HSZ",
            "country_code": "TW"
        },
        {
            "name": "Hualien",
            "state_code": "HUA",
            "country_code": "TW"
        },
        {
            "name": "Kaohsiung",
            "state_code": "KHH",
            "country_code": "TW"
        },
        {
            "name": "Keelung",
            "state_code": "KEE",
            "country_code": "TW"
        },
        {
            "name": "Kinmen",
            "state_code": "KIN",
            "country_code": "TW"
        },
        {
            "name": "Lienchiang",
            "state_code": "LIE",
            "country_code": "TW"
        },
        {
            "name": "Miaoli",
            "state_code": "MIA",
            "country_code": "TW"
        },
        {
            "name": "Nantou",
            "state_code": "NAN",
            "country_code": "TW"
        },
        {
            "name": "New Taipei",
            "state_code": "NWT",
            "country_code": "TW"
        },
        {
            "name": "Penghu",
            "state_code": "PEN",
            "country_code": "TW"
        },
        {
            "name": "Pingtung",
            "state_code": "PIF",
            "country_code": "TW"
        },
        {
            "name": "Taichung",
            "state_code": "TXG",
            "country_code": "TW"
        },
        {
            "name": "Tainan",
            "state_code": "TNN",
            "country_code": "TW"
        },
        {
            "name": "Taipei",
            "state_code": "TPE",
            "country_code": "TW"
        },
        {
            "name": "Taitung",
            "state_code": "TTT",
            "country_code": "TW"
        },
        {
            "name": "Taoyuan",
            "state_code": "TAO",
            "country_code": "TW"
        },
        {
            "name": "Yilan",
            "state_code": "ILA",
            "country_code": "TW"
        },
        {
            "name": "Yunlin",
            "state_code": "YUN",
            "country_code": "TW"
        },
        {
            "name": "districts of Republican Subordination",
            "state_code": "RA",
            "country_code": "TJ"
        },
        {
            "name": "Gorno-Badakhshan Autonomous Province",
            "state_code": "GB",
            "country_code": "TJ"
        },
        {
            "name": "Khatlon Province",
            "state_code": "KT",
            "country_code": "TJ"
        },
        {
            "name": "Sughd Province",
            "state_code": "SU",
            "country_code": "TJ"
        },
        {
            "name": "Arusha",
            "state_code": "01",
            "country_code": "TZ"
        },
        {
            "name": "Dar es Salaam",
            "state_code": "02",
            "country_code": "TZ"
        },
        {
            "name": "Dodoma",
            "state_code": "03",
            "country_code": "TZ"
        },
        {
            "name": "Geita",
            "state_code": "27",
            "country_code": "TZ"
        },
        {
            "name": "Iringa",
            "state_code": "04",
            "country_code": "TZ"
        },
        {
            "name": "Kagera",
            "state_code": "05",
            "country_code": "TZ"
        },
        {
            "name": "Katavi",
            "state_code": "28",
            "country_code": "TZ"
        },
        {
            "name": "Kigoma",
            "state_code": "08",
            "country_code": "TZ"
        },
        {
            "name": "Kilimanjaro",
            "state_code": "09",
            "country_code": "TZ"
        },
        {
            "name": "Lindi",
            "state_code": "12",
            "country_code": "TZ"
        },
        {
            "name": "Manyara",
            "state_code": "26",
            "country_code": "TZ"
        },
        {
            "name": "Mara",
            "state_code": "13",
            "country_code": "TZ"
        },
        {
            "name": "Mbeya",
            "state_code": "14",
            "country_code": "TZ"
        },
        {
            "name": "Morogoro",
            "state_code": "16",
            "country_code": "TZ"
        },
        {
            "name": "Mtwara",
            "state_code": "17",
            "country_code": "TZ"
        },
        {
            "name": "Mwanza",
            "state_code": "18",
            "country_code": "TZ"
        },
        {
            "name": "Njombe",
            "state_code": "29",
            "country_code": "TZ"
        },
        {
            "name": "Pemba North",
            "state_code": "06",
            "country_code": "TZ"
        },
        {
            "name": "Pemba South",
            "state_code": "10",
            "country_code": "TZ"
        },
        {
            "name": "Pwani",
            "state_code": "19",
            "country_code": "TZ"
        },
        {
            "name": "Rukwa",
            "state_code": "20",
            "country_code": "TZ"
        },
        {
            "name": "Ruvuma",
            "state_code": "21",
            "country_code": "TZ"
        },
        {
            "name": "Shinyanga",
            "state_code": "22",
            "country_code": "TZ"
        },
        {
            "name": "Simiyu",
            "state_code": "30",
            "country_code": "TZ"
        },
        {
            "name": "Singida",
            "state_code": "23",
            "country_code": "TZ"
        },
        {
            "name": "Songwe",
            "state_code": "31",
            "country_code": "TZ"
        },
        {
            "name": "Tabora",
            "state_code": "24",
            "country_code": "TZ"
        },
        {
            "name": "Tanga",
            "state_code": "25",
            "country_code": "TZ"
        },
        {
            "name": "Zanzibar North",
            "state_code": "07",
            "country_code": "TZ"
        },
        {
            "name": "Zanzibar South",
            "state_code": "11",
            "country_code": "TZ"
        },
        {
            "name": "Zanzibar West",
            "state_code": "15",
            "country_code": "TZ"
        },
        {
            "name": "Amnat Charoen",
            "state_code": "37",
            "country_code": "TH"
        },
        {
            "name": "Ang Thong",
            "state_code": "15",
            "country_code": "TH"
        },
        {
            "name": "Bangkok",
            "state_code": "10",
            "country_code": "TH"
        },
        {
            "name": "Bueng Kan",
            "state_code": "38",
            "country_code": "TH"
        },
        {
            "name": "Buri Ram",
            "state_code": "31",
            "country_code": "TH"
        },
        {
            "name": "Chachoengsao",
            "state_code": "24",
            "country_code": "TH"
        },
        {
            "name": "Chai Nat",
            "state_code": "18",
            "country_code": "TH"
        },
        {
            "name": "Chaiyaphum",
            "state_code": "36",
            "country_code": "TH"
        },
        {
            "name": "Chanthaburi",
            "state_code": "22",
            "country_code": "TH"
        },
        {
            "name": "Chiang Mai",
            "state_code": "50",
            "country_code": "TH"
        },
        {
            "name": "Chiang Rai",
            "state_code": "57",
            "country_code": "TH"
        },
        {
            "name": "Chon Buri",
            "state_code": "20",
            "country_code": "TH"
        },
        {
            "name": "Chumphon",
            "state_code": "86",
            "country_code": "TH"
        },
        {
            "name": "Kalasin",
            "state_code": "46",
            "country_code": "TH"
        },
        {
            "name": "Kamphaeng Phet",
            "state_code": "62",
            "country_code": "TH"
        },
        {
            "name": "Kanchanaburi",
            "state_code": "71",
            "country_code": "TH"
        },
        {
            "name": "Khon Kaen",
            "state_code": "40",
            "country_code": "TH"
        },
        {
            "name": "Krabi",
            "state_code": "81",
            "country_code": "TH"
        },
        {
            "name": "Lampang",
            "state_code": "52",
            "country_code": "TH"
        },
        {
            "name": "Lamphun",
            "state_code": "51",
            "country_code": "TH"
        },
        {
            "name": "Loei",
            "state_code": "42",
            "country_code": "TH"
        },
        {
            "name": "Lop Buri",
            "state_code": "16",
            "country_code": "TH"
        },
        {
            "name": "Mae Hong Son",
            "state_code": "58",
            "country_code": "TH"
        },
        {
            "name": "Maha Sarakham",
            "state_code": "44",
            "country_code": "TH"
        },
        {
            "name": "Mukdahan",
            "state_code": "49",
            "country_code": "TH"
        },
        {
            "name": "Nakhon Nayok",
            "state_code": "26",
            "country_code": "TH"
        },
        {
            "name": "Nakhon Pathom",
            "state_code": "73",
            "country_code": "TH"
        },
        {
            "name": "Nakhon Phanom",
            "state_code": "48",
            "country_code": "TH"
        },
        {
            "name": "Nakhon Ratchasima",
            "state_code": "30",
            "country_code": "TH"
        },
        {
            "name": "Nakhon Sawan",
            "state_code": "60",
            "country_code": "TH"
        },
        {
            "name": "Nakhon Si Thammarat",
            "state_code": "80",
            "country_code": "TH"
        },
        {
            "name": "Nan",
            "state_code": "55",
            "country_code": "TH"
        },
        {
            "name": "Narathiwat",
            "state_code": "96",
            "country_code": "TH"
        },
        {
            "name": "Nong Bua Lam Phu",
            "state_code": "39",
            "country_code": "TH"
        },
        {
            "name": "Nong Khai",
            "state_code": "43",
            "country_code": "TH"
        },
        {
            "name": "Nonthaburi",
            "state_code": "12",
            "country_code": "TH"
        },
        {
            "name": "Pathum Thani",
            "state_code": "13",
            "country_code": "TH"
        },
        {
            "name": "Pattani",
            "state_code": "94",
            "country_code": "TH"
        },
        {
            "name": "Pattaya",
            "state_code": "S",
            "country_code": "TH"
        },
        {
            "name": "Phangnga",
            "state_code": "82",
            "country_code": "TH"
        },
        {
            "name": "Phatthalung",
            "state_code": "93",
            "country_code": "TH"
        },
        {
            "name": "Phayao",
            "state_code": "56",
            "country_code": "TH"
        },
        {
            "name": "Phetchabun",
            "state_code": "67",
            "country_code": "TH"
        },
        {
            "name": "Phetchaburi",
            "state_code": "76",
            "country_code": "TH"
        },
        {
            "name": "Phichit",
            "state_code": "66",
            "country_code": "TH"
        },
        {
            "name": "Phitsanulok",
            "state_code": "65",
            "country_code": "TH"
        },
        {
            "name": "Phra Nakhon Si Ayutthaya",
            "state_code": "14",
            "country_code": "TH"
        },
        {
            "name": "Phrae",
            "state_code": "54",
            "country_code": "TH"
        },
        {
            "name": "Phuket",
            "state_code": "83",
            "country_code": "TH"
        },
        {
            "name": "Prachin Buri",
            "state_code": "25",
            "country_code": "TH"
        },
        {
            "name": "Prachuap Khiri Khan",
            "state_code": "77",
            "country_code": "TH"
        },
        {
            "name": "Ranong",
            "state_code": "85",
            "country_code": "TH"
        },
        {
            "name": "Ratchaburi",
            "state_code": "70",
            "country_code": "TH"
        },
        {
            "name": "Rayong",
            "state_code": "21",
            "country_code": "TH"
        },
        {
            "name": "Roi Et",
            "state_code": "45",
            "country_code": "TH"
        },
        {
            "name": "Sa Kaeo",
            "state_code": "27",
            "country_code": "TH"
        },
        {
            "name": "Sakon Nakhon",
            "state_code": "47",
            "country_code": "TH"
        },
        {
            "name": "Samut Prakan",
            "state_code": "11",
            "country_code": "TH"
        },
        {
            "name": "Samut Sakhon",
            "state_code": "74",
            "country_code": "TH"
        },
        {
            "name": "Samut Songkhram",
            "state_code": "75",
            "country_code": "TH"
        },
        {
            "name": "Saraburi",
            "state_code": "19",
            "country_code": "TH"
        },
        {
            "name": "Satun",
            "state_code": "91",
            "country_code": "TH"
        },
        {
            "name": "Si Sa Ket",
            "state_code": "33",
            "country_code": "TH"
        },
        {
            "name": "Sing Buri",
            "state_code": "17",
            "country_code": "TH"
        },
        {
            "name": "Songkhla",
            "state_code": "90",
            "country_code": "TH"
        },
        {
            "name": "Sukhothai",
            "state_code": "64",
            "country_code": "TH"
        },
        {
            "name": "Suphan Buri",
            "state_code": "72",
            "country_code": "TH"
        },
        {
            "name": "Surat Thani",
            "state_code": "84",
            "country_code": "TH"
        },
        {
            "name": "Surin",
            "state_code": "32",
            "country_code": "TH"
        },
        {
            "name": "Tak",
            "state_code": "63",
            "country_code": "TH"
        },
        {
            "name": "Trang",
            "state_code": "92",
            "country_code": "TH"
        },
        {
            "name": "Trat",
            "state_code": "23",
            "country_code": "TH"
        },
        {
            "name": "Ubon Ratchathani",
            "state_code": "34",
            "country_code": "TH"
        },
        {
            "name": "Udon Thani",
            "state_code": "41",
            "country_code": "TH"
        },
        {
            "name": "Uthai Thani",
            "state_code": "61",
            "country_code": "TH"
        },
        {
            "name": "Uttaradit",
            "state_code": "53",
            "country_code": "TH"
        },
        {
            "name": "Yala",
            "state_code": "95",
            "country_code": "TH"
        },
        {
            "name": "Yasothon",
            "state_code": "35",
            "country_code": "TH"
        },
        {
            "name": "Acklins",
            "state_code": "AK",
            "country_code": "BS"
        },
        {
            "name": "Acklins and Crooked Islands",
            "state_code": "AC",
            "country_code": "BS"
        },
        {
            "name": "Berry Islands",
            "state_code": "BY",
            "country_code": "BS"
        },
        {
            "name": "Bimini",
            "state_code": "BI",
            "country_code": "BS"
        },
        {
            "name": "Black Point",
            "state_code": "BP",
            "country_code": "BS"
        },
        {
            "name": "Cat Island",
            "state_code": "CI",
            "country_code": "BS"
        },
        {
            "name": "Central Abaco",
            "state_code": "CO",
            "country_code": "BS"
        },
        {
            "name": "Central Andros",
            "state_code": "CS",
            "country_code": "BS"
        },
        {
            "name": "Central Eleuthera",
            "state_code": "CE",
            "country_code": "BS"
        },
        {
            "name": "Crooked Island",
            "state_code": "CK",
            "country_code": "BS"
        },
        {
            "name": "East Grand Bahama",
            "state_code": "EG",
            "country_code": "BS"
        },
        {
            "name": "Exuma",
            "state_code": "EX",
            "country_code": "BS"
        },
        {
            "name": "Freeport",
            "state_code": "FP",
            "country_code": "BS"
        },
        {
            "name": "Fresh Creek",
            "state_code": "FC",
            "country_code": "BS"
        },
        {
            "name": "Governor's Harbour",
            "state_code": "GH",
            "country_code": "BS"
        },
        {
            "name": "Grand Cay",
            "state_code": "GC",
            "country_code": "BS"
        },
        {
            "name": "Green Turtle Cay",
            "state_code": "GT",
            "country_code": "BS"
        },
        {
            "name": "Harbour Island",
            "state_code": "HI",
            "country_code": "BS"
        },
        {
            "name": "High Rock",
            "state_code": "HR",
            "country_code": "BS"
        },
        {
            "name": "Hope Town",
            "state_code": "HT",
            "country_code": "BS"
        },
        {
            "name": "Inagua",
            "state_code": "IN",
            "country_code": "BS"
        },
        {
            "name": "Kemps Bay",
            "state_code": "KB",
            "country_code": "BS"
        },
        {
            "name": "Long Island",
            "state_code": "LI",
            "country_code": "BS"
        },
        {
            "name": "Mangrove Cay",
            "state_code": "MC",
            "country_code": "BS"
        },
        {
            "name": "Marsh Harbour",
            "state_code": "MH",
            "country_code": "BS"
        },
        {
            "name": "Mayaguana District",
            "state_code": "MG",
            "country_code": "BS"
        },
        {
            "name": "New Providence",
            "state_code": "NP",
            "country_code": "BS"
        },
        {
            "name": "Nichollstown and Berry Islands",
            "state_code": "NB",
            "country_code": "BS"
        },
        {
            "name": "North Abaco",
            "state_code": "NO",
            "country_code": "BS"
        },
        {
            "name": "North Andros",
            "state_code": "NS",
            "country_code": "BS"
        },
        {
            "name": "North Eleuthera",
            "state_code": "NE",
            "country_code": "BS"
        },
        {
            "name": "Ragged Island",
            "state_code": "RI",
            "country_code": "BS"
        },
        {
            "name": "Rock Sound",
            "state_code": "RS",
            "country_code": "BS"
        },
        {
            "name": "Rum Cay District",
            "state_code": "RC",
            "country_code": "BS"
        },
        {
            "name": "San Salvador and Rum Cay",
            "state_code": "SR",
            "country_code": "BS"
        },
        {
            "name": "San Salvador Island",
            "state_code": "SS",
            "country_code": "BS"
        },
        {
            "name": "Sandy Point",
            "state_code": "SP",
            "country_code": "BS"
        },
        {
            "name": "South Abaco",
            "state_code": "SO",
            "country_code": "BS"
        },
        {
            "name": "South Andros",
            "state_code": "SA",
            "country_code": "BS"
        },
        {
            "name": "South Eleuthera",
            "state_code": "SE",
            "country_code": "BS"
        },
        {
            "name": "Spanish Wells",
            "state_code": "SW",
            "country_code": "BS"
        },
        {
            "name": "West Grand Bahama",
            "state_code": "WG",
            "country_code": "BS"
        },
        {
            "name": "Centrale Region",
            "state_code": "C",
            "country_code": "TG"
        },
        {
            "name": "Kara Region",
            "state_code": "K",
            "country_code": "TG"
        },
        {
            "name": "Maritime",
            "state_code": "M",
            "country_code": "TG"
        },
        {
            "name": "Plateaux Region",
            "state_code": "P",
            "country_code": "TG"
        },
        {
            "name": "Savanes Region",
            "state_code": "S",
            "country_code": "TG"
        },
        {
            "name": "Haʻapai",
            "state_code": "02",
            "country_code": "TO"
        },
        {
            "name": "ʻEua",
            "state_code": "01",
            "country_code": "TO"
        },
        {
            "name": "Niuas",
            "state_code": "03",
            "country_code": "TO"
        },
        {
            "name": "Tongatapu",
            "state_code": "04",
            "country_code": "TO"
        },
        {
            "name": "Vavaʻu",
            "state_code": "05",
            "country_code": "TO"
        },
        {
            "name": "Arima",
            "state_code": "ARI",
            "country_code": "TT"
        },
        {
            "name": "Chaguanas",
            "state_code": "CHA",
            "country_code": "TT"
        },
        {
            "name": "Couva-Tabaquite-Talparo Regional Corporation",
            "state_code": "CTT",
            "country_code": "TT"
        },
        {
            "name": "Diego Martin Regional Corporation",
            "state_code": "DMN",
            "country_code": "TT"
        },
        {
            "name": "Eastern Tobago",
            "state_code": "ETO",
            "country_code": "TT"
        },
        {
            "name": "Penal-Debe Regional Corporation",
            "state_code": "PED",
            "country_code": "TT"
        },
        {
            "name": "Point Fortin",
            "state_code": "PTF",
            "country_code": "TT"
        },
        {
            "name": "Port of Spain",
            "state_code": "POS",
            "country_code": "TT"
        },
        {
            "name": "Princes Town Regional Corporation",
            "state_code": "PRT",
            "country_code": "TT"
        },
        {
            "name": "Rio Claro-Mayaro Regional Corporation",
            "state_code": "MRC",
            "country_code": "TT"
        },
        {
            "name": "San Fernando",
            "state_code": "SFO",
            "country_code": "TT"
        },
        {
            "name": "San Juan-Laventille Regional Corporation",
            "state_code": "SJL",
            "country_code": "TT"
        },
        {
            "name": "Sangre Grande Regional Corporation",
            "state_code": "SGE",
            "country_code": "TT"
        },
        {
            "name": "Siparia Regional Corporation",
            "state_code": "SIP",
            "country_code": "TT"
        },
        {
            "name": "Tunapuna-Piarco Regional Corporation",
            "state_code": "TUP",
            "country_code": "TT"
        },
        {
            "name": "Western Tobago",
            "state_code": "WTO",
            "country_code": "TT"
        },
        {
            "name": "Ariana Governorate",
            "state_code": "12",
            "country_code": "TN"
        },
        {
            "name": "Ben Arous Governorate",
            "state_code": "13",
            "country_code": "TN"
        },
        {
            "name": "Bizerte Governorate",
            "state_code": "23",
            "country_code": "TN"
        },
        {
            "name": "Gabès Governorate",
            "state_code": "81",
            "country_code": "TN"
        },
        {
            "name": "Gafsa Governorate",
            "state_code": "71",
            "country_code": "TN"
        },
        {
            "name": "Jendouba Governorate",
            "state_code": "32",
            "country_code": "TN"
        },
        {
            "name": "Kairouan Governorate",
            "state_code": "41",
            "country_code": "TN"
        },
        {
            "name": "Kasserine Governorate",
            "state_code": "42",
            "country_code": "TN"
        },
        {
            "name": "Kassrine",
            "state_code": "31",
            "country_code": "TN"
        },
        {
            "name": "Kebili Governorate",
            "state_code": "73",
            "country_code": "TN"
        },
        {
            "name": "Kef Governorate",
            "state_code": "33",
            "country_code": "TN"
        },
        {
            "name": "Mahdia Governorate",
            "state_code": "53",
            "country_code": "TN"
        },
        {
            "name": "Manouba Governorate",
            "state_code": "14",
            "country_code": "TN"
        },
        {
            "name": "Medenine Governorate",
            "state_code": "82",
            "country_code": "TN"
        },
        {
            "name": "Monastir Governorate",
            "state_code": "52",
            "country_code": "TN"
        },
        {
            "name": "Sfax Governorate",
            "state_code": "61",
            "country_code": "TN"
        },
        {
            "name": "Sidi Bouzid Governorate",
            "state_code": "43",
            "country_code": "TN"
        },
        {
            "name": "Siliana Governorate",
            "state_code": "34",
            "country_code": "TN"
        },
        {
            "name": "Sousse Governorate",
            "state_code": "51",
            "country_code": "TN"
        },
        {
            "name": "Tataouine Governorate",
            "state_code": "83",
            "country_code": "TN"
        },
        {
            "name": "Tozeur Governorate",
            "state_code": "72",
            "country_code": "TN"
        },
        {
            "name": "Tunis Governorate",
            "state_code": "11",
            "country_code": "TN"
        },
        {
            "name": "Zaghouan Governorate",
            "state_code": "22",
            "country_code": "TN"
        },
        {
            "name": "Adana",
            "state_code": "01",
            "country_code": "TR"
        },
        {
            "name": "Adıyaman",
            "state_code": "02",
            "country_code": "TR"
        },
        {
            "name": "Afyonkarahisar",
            "state_code": "03",
            "country_code": "TR"
        },
        {
            "name": "Ağrı",
            "state_code": "04",
            "country_code": "TR"
        },
        {
            "name": "Aksaray",
            "state_code": "68",
            "country_code": "TR"
        },
        {
            "name": "Amasya",
            "state_code": "05",
            "country_code": "TR"
        },
        {
            "name": "Ankara",
            "state_code": "06",
            "country_code": "TR"
        },
        {
            "name": "Antalya",
            "state_code": "07",
            "country_code": "TR"
        },
        {
            "name": "Ardahan",
            "state_code": "75",
            "country_code": "TR"
        },
        {
            "name": "Artvin",
            "state_code": "08",
            "country_code": "TR"
        },
        {
            "name": "Aydın",
            "state_code": "09",
            "country_code": "TR"
        },
        {
            "name": "Balıkesir",
            "state_code": "10",
            "country_code": "TR"
        },
        {
            "name": "Bartın",
            "state_code": "74",
            "country_code": "TR"
        },
        {
            "name": "Batman",
            "state_code": "72",
            "country_code": "TR"
        },
        {
            "name": "Bayburt",
            "state_code": "69",
            "country_code": "TR"
        },
        {
            "name": "Bilecik",
            "state_code": "11",
            "country_code": "TR"
        },
        {
            "name": "Bingöl",
            "state_code": "12",
            "country_code": "TR"
        },
        {
            "name": "Bitlis",
            "state_code": "13",
            "country_code": "TR"
        },
        {
            "name": "Bolu",
            "state_code": "14",
            "country_code": "TR"
        },
        {
            "name": "Burdur",
            "state_code": "15",
            "country_code": "TR"
        },
        {
            "name": "Bursa",
            "state_code": "16",
            "country_code": "TR"
        },
        {
            "name": "Çanakkale",
            "state_code": "17",
            "country_code": "TR"
        },
        {
            "name": "Çankırı",
            "state_code": "18",
            "country_code": "TR"
        },
        {
            "name": "Çorum",
            "state_code": "19",
            "country_code": "TR"
        },
        {
            "name": "Denizli",
            "state_code": "20",
            "country_code": "TR"
        },
        {
            "name": "Diyarbakır",
            "state_code": "21",
            "country_code": "TR"
        },
        {
            "name": "Düzce",
            "state_code": "81",
            "country_code": "TR"
        },
        {
            "name": "Edirne",
            "state_code": "22",
            "country_code": "TR"
        },
        {
            "name": "Elazığ",
            "state_code": "23",
            "country_code": "TR"
        },
        {
            "name": "Erzincan",
            "state_code": "24",
            "country_code": "TR"
        },
        {
            "name": "Erzurum",
            "state_code": "25",
            "country_code": "TR"
        },
        {
            "name": "Eskişehir",
            "state_code": "26",
            "country_code": "TR"
        },
        {
            "name": "Gaziantep",
            "state_code": "27",
            "country_code": "TR"
        },
        {
            "name": "Giresun",
            "state_code": "28",
            "country_code": "TR"
        },
        {
            "name": "Gümüşhane",
            "state_code": "29",
            "country_code": "TR"
        },
        {
            "name": "Hakkâri",
            "state_code": "30",
            "country_code": "TR"
        },
        {
            "name": "Hatay",
            "state_code": "31",
            "country_code": "TR"
        },
        {
            "name": "Iğdır",
            "state_code": "76",
            "country_code": "TR"
        },
        {
            "name": "Isparta",
            "state_code": "32",
            "country_code": "TR"
        },
        {
            "name": "Istanbul",
            "state_code": "34",
            "country_code": "TR"
        },
        {
            "name": "İzmir",
            "state_code": "35",
            "country_code": "TR"
        },
        {
            "name": "Kahramanmaraş",
            "state_code": "46",
            "country_code": "TR"
        },
        {
            "name": "Karabük",
            "state_code": "78",
            "country_code": "TR"
        },
        {
            "name": "Karaman",
            "state_code": "70",
            "country_code": "TR"
        },
        {
            "name": "Kars",
            "state_code": "36",
            "country_code": "TR"
        },
        {
            "name": "Kastamonu",
            "state_code": "37",
            "country_code": "TR"
        },
        {
            "name": "Kayseri",
            "state_code": "38",
            "country_code": "TR"
        },
        {
            "name": "Kilis",
            "state_code": "79",
            "country_code": "TR"
        },
        {
            "name": "Kırıkkale",
            "state_code": "71",
            "country_code": "TR"
        },
        {
            "name": "Kırklareli",
            "state_code": "39",
            "country_code": "TR"
        },
        {
            "name": "Kırşehir",
            "state_code": "40",
            "country_code": "TR"
        },
        {
            "name": "Kocaeli",
            "state_code": "41",
            "country_code": "TR"
        },
        {
            "name": "Konya",
            "state_code": "42",
            "country_code": "TR"
        },
        {
            "name": "Kütahya",
            "state_code": "43",
            "country_code": "TR"
        },
        {
            "name": "Malatya",
            "state_code": "44",
            "country_code": "TR"
        },
        {
            "name": "Manisa",
            "state_code": "45",
            "country_code": "TR"
        },
        {
            "name": "Mardin",
            "state_code": "47",
            "country_code": "TR"
        },
        {
            "name": "Mersin",
            "state_code": "33",
            "country_code": "TR"
        },
        {
            "name": "Muğla",
            "state_code": "48",
            "country_code": "TR"
        },
        {
            "name": "Muş",
            "state_code": "49",
            "country_code": "TR"
        },
        {
            "name": "Nevşehir",
            "state_code": "50",
            "country_code": "TR"
        },
        {
            "name": "Niğde",
            "state_code": "51",
            "country_code": "TR"
        },
        {
            "name": "Ordu",
            "state_code": "52",
            "country_code": "TR"
        },
        {
            "name": "Osmaniye",
            "state_code": "80",
            "country_code": "TR"
        },
        {
            "name": "Rize",
            "state_code": "53",
            "country_code": "TR"
        },
        {
            "name": "Sakarya",
            "state_code": "54",
            "country_code": "TR"
        },
        {
            "name": "Samsun",
            "state_code": "55",
            "country_code": "TR"
        },
        {
            "name": "Şanlıurfa",
            "state_code": "63",
            "country_code": "TR"
        },
        {
            "name": "Siirt",
            "state_code": "56",
            "country_code": "TR"
        },
        {
            "name": "Sinop",
            "state_code": "57",
            "country_code": "TR"
        },
        {
            "name": "Sivas",
            "state_code": "58",
            "country_code": "TR"
        },
        {
            "name": "Şırnak",
            "state_code": "73",
            "country_code": "TR"
        },
        {
            "name": "Tekirdağ",
            "state_code": "59",
            "country_code": "TR"
        },
        {
            "name": "Tokat",
            "state_code": "60",
            "country_code": "TR"
        },
        {
            "name": "Trabzon",
            "state_code": "61",
            "country_code": "TR"
        },
        {
            "name": "Tunceli",
            "state_code": "62",
            "country_code": "TR"
        },
        {
            "name": "Uşak",
            "state_code": "64",
            "country_code": "TR"
        },
        {
            "name": "Van",
            "state_code": "65",
            "country_code": "TR"
        },
        {
            "name": "Yalova",
            "state_code": "77",
            "country_code": "TR"
        },
        {
            "name": "Yozgat",
            "state_code": "66",
            "country_code": "TR"
        },
        {
            "name": "Zonguldak",
            "state_code": "67",
            "country_code": "TR"
        },
        {
            "name": "Ahal Region",
            "state_code": "A",
            "country_code": "TM"
        },
        {
            "name": "Ashgabat",
            "state_code": "S",
            "country_code": "TM"
        },
        {
            "name": "Balkan Region",
            "state_code": "B",
            "country_code": "TM"
        },
        {
            "name": "Daşoguz Region",
            "state_code": "D",
            "country_code": "TM"
        },
        {
            "name": "Lebap Region",
            "state_code": "L",
            "country_code": "TM"
        },
        {
            "name": "Mary Region",
            "state_code": "M",
            "country_code": "TM"
        },
        {
            "name": "Funafuti",
            "state_code": "FUN",
            "country_code": "TV"
        },
        {
            "name": "Nanumanga",
            "state_code": "NMG",
            "country_code": "TV"
        },
        {
            "name": "Nanumea",
            "state_code": "NMA",
            "country_code": "TV"
        },
        {
            "name": "Niutao Island Council",
            "state_code": "NIT",
            "country_code": "TV"
        },
        {
            "name": "Nui",
            "state_code": "NUI",
            "country_code": "TV"
        },
        {
            "name": "Nukufetau",
            "state_code": "NKF",
            "country_code": "TV"
        },
        {
            "name": "Nukulaelae",
            "state_code": "NKL",
            "country_code": "TV"
        },
        {
            "name": "Vaitupu",
            "state_code": "VAI",
            "country_code": "TV"
        },
        {
            "name": "Abim District",
            "state_code": "314",
            "country_code": "UG"
        },
        {
            "name": "Adjumani District",
            "state_code": "301",
            "country_code": "UG"
        },
        {
            "name": "Agago District",
            "state_code": "322",
            "country_code": "UG"
        },
        {
            "name": "Alebtong District",
            "state_code": "323",
            "country_code": "UG"
        },
        {
            "name": "Amolatar District",
            "state_code": "315",
            "country_code": "UG"
        },
        {
            "name": "Amudat District",
            "state_code": "324",
            "country_code": "UG"
        },
        {
            "name": "Amuria District",
            "state_code": "216",
            "country_code": "UG"
        },
        {
            "name": "Amuru District",
            "state_code": "316",
            "country_code": "UG"
        },
        {
            "name": "Apac District",
            "state_code": "302",
            "country_code": "UG"
        },
        {
            "name": "Arua District",
            "state_code": "303",
            "country_code": "UG"
        },
        {
            "name": "Budaka District",
            "state_code": "217",
            "country_code": "UG"
        },
        {
            "name": "Bududa District",
            "state_code": "218",
            "country_code": "UG"
        },
        {
            "name": "Bugiri District",
            "state_code": "201",
            "country_code": "UG"
        },
        {
            "name": "Buhweju District",
            "state_code": "420",
            "country_code": "UG"
        },
        {
            "name": "Buikwe District",
            "state_code": "117",
            "country_code": "UG"
        },
        {
            "name": "Bukedea District",
            "state_code": "219",
            "country_code": "UG"
        },
        {
            "name": "Bukomansimbi District",
            "state_code": "118",
            "country_code": "UG"
        },
        {
            "name": "Bukwo District",
            "state_code": "220",
            "country_code": "UG"
        },
        {
            "name": "Bulambuli District",
            "state_code": "225",
            "country_code": "UG"
        },
        {
            "name": "Buliisa District",
            "state_code": "416",
            "country_code": "UG"
        },
        {
            "name": "Bundibugyo District",
            "state_code": "401",
            "country_code": "UG"
        },
        {
            "name": "Bunyangabu District",
            "state_code": "430",
            "country_code": "UG"
        },
        {
            "name": "Bushenyi District",
            "state_code": "402",
            "country_code": "UG"
        },
        {
            "name": "Busia District",
            "state_code": "202",
            "country_code": "UG"
        },
        {
            "name": "Butaleja District",
            "state_code": "221",
            "country_code": "UG"
        },
        {
            "name": "Butambala District",
            "state_code": "119",
            "country_code": "UG"
        },
        {
            "name": "Butebo District",
            "state_code": "233",
            "country_code": "UG"
        },
        {
            "name": "Buvuma District",
            "state_code": "120",
            "country_code": "UG"
        },
        {
            "name": "Buyende District",
            "state_code": "226",
            "country_code": "UG"
        },
        {
            "name": "Central Region",
            "state_code": "C",
            "country_code": "UG"
        },
        {
            "name": "Dokolo District",
            "state_code": "317",
            "country_code": "UG"
        },
        {
            "name": "Eastern Region",
            "state_code": "E",
            "country_code": "UG"
        },
        {
            "name": "Gomba District",
            "state_code": "121",
            "country_code": "UG"
        },
        {
            "name": "Gulu District",
            "state_code": "304",
            "country_code": "UG"
        },
        {
            "name": "Ibanda District",
            "state_code": "417",
            "country_code": "UG"
        },
        {
            "name": "Iganga District",
            "state_code": "203",
            "country_code": "UG"
        },
        {
            "name": "Isingiro District",
            "state_code": "418",
            "country_code": "UG"
        },
        {
            "name": "Jinja District",
            "state_code": "204",
            "country_code": "UG"
        },
        {
            "name": "Kaabong District",
            "state_code": "318",
            "country_code": "UG"
        },
        {
            "name": "Kabale District",
            "state_code": "404",
            "country_code": "UG"
        },
        {
            "name": "Kabarole District",
            "state_code": "405",
            "country_code": "UG"
        },
        {
            "name": "Kaberamaido District",
            "state_code": "213",
            "country_code": "UG"
        },
        {
            "name": "Kagadi District",
            "state_code": "427",
            "country_code": "UG"
        },
        {
            "name": "Kakumiro District",
            "state_code": "428",
            "country_code": "UG"
        },
        {
            "name": "Kalangala District",
            "state_code": "101",
            "country_code": "UG"
        },
        {
            "name": "Kaliro District",
            "state_code": "222",
            "country_code": "UG"
        },
        {
            "name": "Kalungu District",
            "state_code": "122",
            "country_code": "UG"
        },
        {
            "name": "Kampala District",
            "state_code": "102",
            "country_code": "UG"
        },
        {
            "name": "Kamuli District",
            "state_code": "205",
            "country_code": "UG"
        },
        {
            "name": "Kamwenge District",
            "state_code": "413",
            "country_code": "UG"
        },
        {
            "name": "Kanungu District",
            "state_code": "414",
            "country_code": "UG"
        },
        {
            "name": "Kapchorwa District",
            "state_code": "206",
            "country_code": "UG"
        },
        {
            "name": "Kasese District",
            "state_code": "406",
            "country_code": "UG"
        },
        {
            "name": "Katakwi District",
            "state_code": "207",
            "country_code": "UG"
        },
        {
            "name": "Kayunga District",
            "state_code": "112",
            "country_code": "UG"
        },
        {
            "name": "Kibaale District",
            "state_code": "407",
            "country_code": "UG"
        },
        {
            "name": "Kiboga District",
            "state_code": "103",
            "country_code": "UG"
        },
        {
            "name": "Kibuku District",
            "state_code": "227",
            "country_code": "UG"
        },
        {
            "name": "Kiruhura District",
            "state_code": "419",
            "country_code": "UG"
        },
        {
            "name": "Kiryandongo District",
            "state_code": "421",
            "country_code": "UG"
        },
        {
            "name": "Kisoro District",
            "state_code": "408",
            "country_code": "UG"
        },
        {
            "name": "Kitgum District",
            "state_code": "305",
            "country_code": "UG"
        },
        {
            "name": "Koboko District",
            "state_code": "319",
            "country_code": "UG"
        },
        {
            "name": "Kole District",
            "state_code": "325",
            "country_code": "UG"
        },
        {
            "name": "Kotido District",
            "state_code": "306",
            "country_code": "UG"
        },
        {
            "name": "Kumi District",
            "state_code": "208",
            "country_code": "UG"
        },
        {
            "name": "Kween District",
            "state_code": "228",
            "country_code": "UG"
        },
        {
            "name": "Kyankwanzi District",
            "state_code": "123",
            "country_code": "UG"
        },
        {
            "name": "Kyegegwa District",
            "state_code": "422",
            "country_code": "UG"
        },
        {
            "name": "Kyenjojo District",
            "state_code": "415",
            "country_code": "UG"
        },
        {
            "name": "Kyotera District",
            "state_code": "125",
            "country_code": "UG"
        },
        {
            "name": "Lamwo District",
            "state_code": "326",
            "country_code": "UG"
        },
        {
            "name": "Lira District",
            "state_code": "307",
            "country_code": "UG"
        },
        {
            "name": "Luuka District",
            "state_code": "229",
            "country_code": "UG"
        },
        {
            "name": "Luwero District",
            "state_code": "104",
            "country_code": "UG"
        },
        {
            "name": "Lwengo District",
            "state_code": "124",
            "country_code": "UG"
        },
        {
            "name": "Lyantonde District",
            "state_code": "114",
            "country_code": "UG"
        },
        {
            "name": "Manafwa District",
            "state_code": "223",
            "country_code": "UG"
        },
        {
            "name": "Maracha District",
            "state_code": "320",
            "country_code": "UG"
        },
        {
            "name": "Masaka District",
            "state_code": "105",
            "country_code": "UG"
        },
        {
            "name": "Masindi District",
            "state_code": "409",
            "country_code": "UG"
        },
        {
            "name": "Mayuge District",
            "state_code": "214",
            "country_code": "UG"
        },
        {
            "name": "Mbale District",
            "state_code": "209",
            "country_code": "UG"
        },
        {
            "name": "Mbarara District",
            "state_code": "410",
            "country_code": "UG"
        },
        {
            "name": "Mitooma District",
            "state_code": "423",
            "country_code": "UG"
        },
        {
            "name": "Mityana District",
            "state_code": "115",
            "country_code": "UG"
        },
        {
            "name": "Moroto District",
            "state_code": "308",
            "country_code": "UG"
        },
        {
            "name": "Moyo District",
            "state_code": "309",
            "country_code": "UG"
        },
        {
            "name": "Mpigi District",
            "state_code": "106",
            "country_code": "UG"
        },
        {
            "name": "Mubende District",
            "state_code": "107",
            "country_code": "UG"
        },
        {
            "name": "Mukono District",
            "state_code": "108",
            "country_code": "UG"
        },
        {
            "name": "Nakapiripirit District",
            "state_code": "311",
            "country_code": "UG"
        },
        {
            "name": "Nakaseke District",
            "state_code": "116",
            "country_code": "UG"
        },
        {
            "name": "Nakasongola District",
            "state_code": "109",
            "country_code": "UG"
        },
        {
            "name": "Namayingo District",
            "state_code": "230",
            "country_code": "UG"
        },
        {
            "name": "Namisindwa District",
            "state_code": "234",
            "country_code": "UG"
        },
        {
            "name": "Namutumba District",
            "state_code": "224",
            "country_code": "UG"
        },
        {
            "name": "Napak District",
            "state_code": "327",
            "country_code": "UG"
        },
        {
            "name": "Nebbi District",
            "state_code": "310",
            "country_code": "UG"
        },
        {
            "name": "Ngora District",
            "state_code": "231",
            "country_code": "UG"
        },
        {
            "name": "Northern Region",
            "state_code": "N",
            "country_code": "UG"
        },
        {
            "name": "Ntoroko District",
            "state_code": "424",
            "country_code": "UG"
        },
        {
            "name": "Ntungamo District",
            "state_code": "411",
            "country_code": "UG"
        },
        {
            "name": "Nwoya District",
            "state_code": "328",
            "country_code": "UG"
        },
        {
            "name": "Omoro District",
            "state_code": "331",
            "country_code": "UG"
        },
        {
            "name": "Otuke District",
            "state_code": "329",
            "country_code": "UG"
        },
        {
            "name": "Oyam District",
            "state_code": "321",
            "country_code": "UG"
        },
        {
            "name": "Pader District",
            "state_code": "312",
            "country_code": "UG"
        },
        {
            "name": "Pakwach District",
            "state_code": "332",
            "country_code": "UG"
        },
        {
            "name": "Pallisa District",
            "state_code": "210",
            "country_code": "UG"
        },
        {
            "name": "Rakai District",
            "state_code": "110",
            "country_code": "UG"
        },
        {
            "name": "Rubanda District",
            "state_code": "429",
            "country_code": "UG"
        },
        {
            "name": "Rubirizi District",
            "state_code": "425",
            "country_code": "UG"
        },
        {
            "name": "Rukiga District",
            "state_code": "431",
            "country_code": "UG"
        },
        {
            "name": "Rukungiri District",
            "state_code": "412",
            "country_code": "UG"
        },
        {
            "name": "Sembabule District",
            "state_code": "111",
            "country_code": "UG"
        },
        {
            "name": "Serere District",
            "state_code": "232",
            "country_code": "UG"
        },
        {
            "name": "Sheema District",
            "state_code": "426",
            "country_code": "UG"
        },
        {
            "name": "Sironko District",
            "state_code": "215",
            "country_code": "UG"
        },
        {
            "name": "Soroti District",
            "state_code": "211",
            "country_code": "UG"
        },
        {
            "name": "Tororo District",
            "state_code": "212",
            "country_code": "UG"
        },
        {
            "name": "Wakiso District",
            "state_code": "113",
            "country_code": "UG"
        },
        {
            "name": "Western Region",
            "state_code": "W",
            "country_code": "UG"
        },
        {
            "name": "Yumbe District",
            "state_code": "313",
            "country_code": "UG"
        },
        {
            "name": "Zombo District",
            "state_code": "330",
            "country_code": "UG"
        },
        {
            "name": "Autonomous Republic of Crimea",
            "state_code": "43",
            "country_code": "UA"
        },
        {
            "name": "Cherkaska oblast",
            "state_code": "71",
            "country_code": "UA"
        },
        {
            "name": "Chernihivska oblast",
            "state_code": "74",
            "country_code": "UA"
        },
        {
            "name": "Chernivetska oblast",
            "state_code": "77",
            "country_code": "UA"
        },
        {
            "name": "Dnipropetrovska oblast",
            "state_code": "12",
            "country_code": "UA"
        },
        {
            "name": "Donetska oblast",
            "state_code": "14",
            "country_code": "UA"
        },
        {
            "name": "Ivano-Frankivska oblast",
            "state_code": "26",
            "country_code": "UA"
        },
        {
            "name": "Kharkivska oblast",
            "state_code": "63",
            "country_code": "UA"
        },
        {
            "name": "Khersonska oblast",
            "state_code": "65",
            "country_code": "UA"
        },
        {
            "name": "Khmelnytska oblast",
            "state_code": "68",
            "country_code": "UA"
        },
        {
            "name": "Kirovohradska oblast",
            "state_code": "35",
            "country_code": "UA"
        },
        {
            "name": "Kyiv",
            "state_code": "30",
            "country_code": "UA"
        },
        {
            "name": "Kyivska oblast",
            "state_code": "32",
            "country_code": "UA"
        },
        {
            "name": "Luhanska oblast",
            "state_code": "09",
            "country_code": "UA"
        },
        {
            "name": "Lvivska oblast",
            "state_code": "46",
            "country_code": "UA"
        },
        {
            "name": "Mykolaivska oblast",
            "state_code": "48",
            "country_code": "UA"
        },
        {
            "name": "Odeska oblast",
            "state_code": "51",
            "country_code": "UA"
        },
        {
            "name": "Poltavska oblast",
            "state_code": "53",
            "country_code": "UA"
        },
        {
            "name": "Rivnenska oblast",
            "state_code": "56",
            "country_code": "UA"
        },
        {
            "name": "Sumska oblast",
            "state_code": "59",
            "country_code": "UA"
        },
        {
            "name": "Ternopilska oblast",
            "state_code": "61",
            "country_code": "UA"
        },
        {
            "name": "Vinnytska oblast",
            "state_code": "05",
            "country_code": "UA"
        },
        {
            "name": "Volynska oblast",
            "state_code": "07",
            "country_code": "UA"
        },
        {
            "name": "Zakarpatska Oblast",
            "state_code": "21",
            "country_code": "UA"
        },
        {
            "name": "Zaporizka oblast",
            "state_code": "23",
            "country_code": "UA"
        },
        {
            "name": "Zhytomyrska oblast",
            "state_code": "18",
            "country_code": "UA"
        },
        {
            "name": "Abu Dhabi Emirate",
            "state_code": "AZ",
            "country_code": "AE"
        },
        {
            "name": "Ajman Emirate",
            "state_code": "AJ",
            "country_code": "AE"
        },
        {
            "name": "Dubai",
            "state_code": "DU",
            "country_code": "AE"
        },
        {
            "name": "Fujairah",
            "state_code": "FU",
            "country_code": "AE"
        },
        {
            "name": "Ras al-Khaimah",
            "state_code": "RK",
            "country_code": "AE"
        },
        {
            "name": "Sharjah Emirate",
            "state_code": "SH",
            "country_code": "AE"
        },
        {
            "name": "Umm al-Quwain",
            "state_code": "UQ",
            "country_code": "AE"
        },
        {
            "name": "Aberdeen",
            "state_code": "ABE",
            "country_code": "GB"
        },
        {
            "name": "Aberdeenshire",
            "state_code": "ABD",
            "country_code": "GB"
        },
        {
            "name": "Angus",
            "state_code": "ANS",
            "country_code": "GB"
        },
        {
            "name": "Antrim",
            "state_code": "ANT",
            "country_code": "GB"
        },
        {
            "name": "Antrim and Newtownabbey",
            "state_code": "ANN",
            "country_code": "GB"
        },
        {
            "name": "Ards",
            "state_code": "ARD",
            "country_code": "GB"
        },
        {
            "name": "Ards and North Down",
            "state_code": "AND",
            "country_code": "GB"
        },
        {
            "name": "Argyll and Bute",
            "state_code": "AGB",
            "country_code": "GB"
        },
        {
            "name": "Armagh City and District Council",
            "state_code": "ARM",
            "country_code": "GB"
        },
        {
            "name": "Armagh, Banbridge and Craigavon",
            "state_code": "ABC",
            "country_code": "GB"
        },
        {
            "name": "Ascension Island",
            "state_code": "SH-AC",
            "country_code": "GB"
        },
        {
            "name": "Ballymena Borough",
            "state_code": "BLA",
            "country_code": "GB"
        },
        {
            "name": "Ballymoney",
            "state_code": "BLY",
            "country_code": "GB"
        },
        {
            "name": "Banbridge",
            "state_code": "BNB",
            "country_code": "GB"
        },
        {
            "name": "Barnsley",
            "state_code": "BNS",
            "country_code": "GB"
        },
        {
            "name": "Bath and North East Somerset",
            "state_code": "BAS",
            "country_code": "GB"
        },
        {
            "name": "Bedford",
            "state_code": "BDF",
            "country_code": "GB"
        },
        {
            "name": "Belfast district",
            "state_code": "BFS",
            "country_code": "GB"
        },
        {
            "name": "Birmingham",
            "state_code": "BIR",
            "country_code": "GB"
        },
        {
            "name": "Blackburn with Darwen",
            "state_code": "BBD",
            "country_code": "GB"
        },
        {
            "name": "Blackpool",
            "state_code": "BPL",
            "country_code": "GB"
        },
        {
            "name": "Blaenau Gwent County Borough",
            "state_code": "BGW",
            "country_code": "GB"
        },
        {
            "name": "Bolton",
            "state_code": "BOL",
            "country_code": "GB"
        },
        {
            "name": "Bournemouth",
            "state_code": "BMH",
            "country_code": "GB"
        },
        {
            "name": "Bracknell Forest",
            "state_code": "BRC",
            "country_code": "GB"
        },
        {
            "name": "Bradford",
            "state_code": "BRD",
            "country_code": "GB"
        },
        {
            "name": "Bridgend County Borough",
            "state_code": "BGE",
            "country_code": "GB"
        },
        {
            "name": "Brighton and Hove",
            "state_code": "BNH",
            "country_code": "GB"
        },
        {
            "name": "Buckinghamshire",
            "state_code": "BKM",
            "country_code": "GB"
        },
        {
            "name": "Bury",
            "state_code": "BUR",
            "country_code": "GB"
        },
        {
            "name": "Caerphilly County Borough",
            "state_code": "CAY",
            "country_code": "GB"
        },
        {
            "name": "Calderdale",
            "state_code": "CLD",
            "country_code": "GB"
        },
        {
            "name": "Cambridgeshire",
            "state_code": "CAM",
            "country_code": "GB"
        },
        {
            "name": "Carmarthenshire",
            "state_code": "CMN",
            "country_code": "GB"
        },
        {
            "name": "Carrickfergus Borough Council",
            "state_code": "CKF",
            "country_code": "GB"
        },
        {
            "name": "Castlereagh",
            "state_code": "CSR",
            "country_code": "GB"
        },
        {
            "name": "Causeway Coast and Glens",
            "state_code": "CCG",
            "country_code": "GB"
        },
        {
            "name": "Central Bedfordshire",
            "state_code": "CBF",
            "country_code": "GB"
        },
        {
            "name": "Ceredigion",
            "state_code": "CGN",
            "country_code": "GB"
        },
        {
            "name": "Cheshire East",
            "state_code": "CHE",
            "country_code": "GB"
        },
        {
            "name": "Cheshire West and Chester",
            "state_code": "CHW",
            "country_code": "GB"
        },
        {
            "name": "City and County of Cardiff",
            "state_code": "CRF",
            "country_code": "GB"
        },
        {
            "name": "City and County of Swansea",
            "state_code": "SWA",
            "country_code": "GB"
        },
        {
            "name": "City of Bristol",
            "state_code": "BST",
            "country_code": "GB"
        },
        {
            "name": "City of Derby",
            "state_code": "DER",
            "country_code": "GB"
        },
        {
            "name": "City of Kingston upon Hull",
            "state_code": "KHL",
            "country_code": "GB"
        },
        {
            "name": "City of Leicester",
            "state_code": "LCE",
            "country_code": "GB"
        },
        {
            "name": "City of London",
            "state_code": "LND",
            "country_code": "GB"
        },
        {
            "name": "City of Nottingham",
            "state_code": "NGM",
            "country_code": "GB"
        },
        {
            "name": "City of Peterborough",
            "state_code": "PTE",
            "country_code": "GB"
        },
        {
            "name": "City of Plymouth",
            "state_code": "PLY",
            "country_code": "GB"
        },
        {
            "name": "City of Portsmouth",
            "state_code": "POR",
            "country_code": "GB"
        },
        {
            "name": "City of Southampton",
            "state_code": "STH",
            "country_code": "GB"
        },
        {
            "name": "City of Stoke-on-Trent",
            "state_code": "STE",
            "country_code": "GB"
        },
        {
            "name": "City of Sunderland",
            "state_code": "SND",
            "country_code": "GB"
        },
        {
            "name": "City of Westminster",
            "state_code": "WSM",
            "country_code": "GB"
        },
        {
            "name": "City of Wolverhampton",
            "state_code": "WLV",
            "country_code": "GB"
        },
        {
            "name": "City of York",
            "state_code": "YOR",
            "country_code": "GB"
        },
        {
            "name": "Clackmannanshire",
            "state_code": "CLK",
            "country_code": "GB"
        },
        {
            "name": "Coleraine Borough Council",
            "state_code": "CLR",
            "country_code": "GB"
        },
        {
            "name": "Conwy County Borough",
            "state_code": "CWY",
            "country_code": "GB"
        },
        {
            "name": "Cookstown District Council",
            "state_code": "CKT",
            "country_code": "GB"
        },
        {
            "name": "Cornwall",
            "state_code": "CON",
            "country_code": "GB"
        },
        {
            "name": "County Durham",
            "state_code": "DUR",
            "country_code": "GB"
        },
        {
            "name": "Coventry",
            "state_code": "COV",
            "country_code": "GB"
        },
        {
            "name": "Craigavon Borough Council",
            "state_code": "CGV",
            "country_code": "GB"
        },
        {
            "name": "Cumbria",
            "state_code": "CMA",
            "country_code": "GB"
        },
        {
            "name": "Darlington",
            "state_code": "DAL",
            "country_code": "GB"
        },
        {
            "name": "Denbighshire",
            "state_code": "DEN",
            "country_code": "GB"
        },
        {
            "name": "Derbyshire",
            "state_code": "DBY",
            "country_code": "GB"
        },
        {
            "name": "Derry City and Strabane",
            "state_code": "DRS",
            "country_code": "GB"
        },
        {
            "name": "Derry City Council",
            "state_code": "DRY",
            "country_code": "GB"
        },
        {
            "name": "Devon",
            "state_code": "DEV",
            "country_code": "GB"
        },
        {
            "name": "Doncaster",
            "state_code": "DNC",
            "country_code": "GB"
        },
        {
            "name": "Dorset",
            "state_code": "DOR",
            "country_code": "GB"
        },
        {
            "name": "Down District Council",
            "state_code": "DOW",
            "country_code": "GB"
        },
        {
            "name": "Dudley",
            "state_code": "DUD",
            "country_code": "GB"
        },
        {
            "name": "Dumfries and Galloway",
            "state_code": "DGY",
            "country_code": "GB"
        },
        {
            "name": "Dundee",
            "state_code": "DND",
            "country_code": "GB"
        },
        {
            "name": "Dungannon and South Tyrone Borough Council",
            "state_code": "DGN",
            "country_code": "GB"
        },
        {
            "name": "East Ayrshire",
            "state_code": "EAY",
            "country_code": "GB"
        },
        {
            "name": "East Dunbartonshire",
            "state_code": "EDU",
            "country_code": "GB"
        },
        {
            "name": "East Lothian",
            "state_code": "ELN",
            "country_code": "GB"
        },
        {
            "name": "East Renfrewshire",
            "state_code": "ERW",
            "country_code": "GB"
        },
        {
            "name": "East Riding of Yorkshire",
            "state_code": "ERY",
            "country_code": "GB"
        },
        {
            "name": "East Sussex",
            "state_code": "ESX",
            "country_code": "GB"
        },
        {
            "name": "Edinburgh",
            "state_code": "EDH",
            "country_code": "GB"
        },
        {
            "name": "England",
            "state_code": "ENG",
            "country_code": "GB"
        },
        {
            "name": "Essex",
            "state_code": "ESS",
            "country_code": "GB"
        },
        {
            "name": "Falkirk",
            "state_code": "FAL",
            "country_code": "GB"
        },
        {
            "name": "Fermanagh and Omagh",
            "state_code": "FMO",
            "country_code": "GB"
        },
        {
            "name": "Fermanagh District Council",
            "state_code": "FER",
            "country_code": "GB"
        },
        {
            "name": "Fife",
            "state_code": "FIF",
            "country_code": "GB"
        },
        {
            "name": "Flintshire",
            "state_code": "FLN",
            "country_code": "GB"
        },
        {
            "name": "Gateshead",
            "state_code": "GAT",
            "country_code": "GB"
        },
        {
            "name": "Glasgow",
            "state_code": "GLG",
            "country_code": "GB"
        },
        {
            "name": "Gloucestershire",
            "state_code": "GLS",
            "country_code": "GB"
        },
        {
            "name": "Gwynedd",
            "state_code": "GWN",
            "country_code": "GB"
        },
        {
            "name": "Halton",
            "state_code": "HAL",
            "country_code": "GB"
        },
        {
            "name": "Hampshire",
            "state_code": "HAM",
            "country_code": "GB"
        },
        {
            "name": "Hartlepool",
            "state_code": "HPL",
            "country_code": "GB"
        },
        {
            "name": "Herefordshire",
            "state_code": "HEF",
            "country_code": "GB"
        },
        {
            "name": "Hertfordshire",
            "state_code": "HRT",
            "country_code": "GB"
        },
        {
            "name": "Highland",
            "state_code": "HLD",
            "country_code": "GB"
        },
        {
            "name": "Inverclyde",
            "state_code": "IVC",
            "country_code": "GB"
        },
        {
            "name": "Isle of Wight",
            "state_code": "IOW",
            "country_code": "GB"
        },
        {
            "name": "Isles of Scilly",
            "state_code": "IOS",
            "country_code": "GB"
        },
        {
            "name": "Kent",
            "state_code": "KEN",
            "country_code": "GB"
        },
        {
            "name": "Kirklees",
            "state_code": "KIR",
            "country_code": "GB"
        },
        {
            "name": "Knowsley",
            "state_code": "KWL",
            "country_code": "GB"
        },
        {
            "name": "Lancashire",
            "state_code": "LAN",
            "country_code": "GB"
        },
        {
            "name": "Larne Borough Council",
            "state_code": "LRN",
            "country_code": "GB"
        },
        {
            "name": "Leeds",
            "state_code": "LDS",
            "country_code": "GB"
        },
        {
            "name": "Leicestershire",
            "state_code": "LEC",
            "country_code": "GB"
        },
        {
            "name": "Limavady Borough Council",
            "state_code": "LMV",
            "country_code": "GB"
        },
        {
            "name": "Lincolnshire",
            "state_code": "LIN",
            "country_code": "GB"
        },
        {
            "name": "Lisburn and Castlereagh",
            "state_code": "LBC",
            "country_code": "GB"
        },
        {
            "name": "Lisburn City Council",
            "state_code": "LSB",
            "country_code": "GB"
        },
        {
            "name": "Liverpool",
            "state_code": "LIV",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Barking and Dagenham",
            "state_code": "BDG",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Barnet",
            "state_code": "BNE",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Bexley",
            "state_code": "BEX",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Brent",
            "state_code": "BEN",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Bromley",
            "state_code": "BRY",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Camden",
            "state_code": "CMD",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Croydon",
            "state_code": "CRY",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Ealing",
            "state_code": "EAL",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Enfield",
            "state_code": "ENF",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Hackney",
            "state_code": "HCK",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Hammersmith and Fulham",
            "state_code": "HMF",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Haringey",
            "state_code": "HRY",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Harrow",
            "state_code": "HRW",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Havering",
            "state_code": "HAV",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Hillingdon",
            "state_code": "HIL",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Hounslow",
            "state_code": "HNS",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Islington",
            "state_code": "ISL",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Lambeth",
            "state_code": "LBH",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Lewisham",
            "state_code": "LEW",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Merton",
            "state_code": "MRT",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Newham",
            "state_code": "NWM",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Redbridge",
            "state_code": "RDB",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Richmond upon Thames",
            "state_code": "RIC",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Southwark",
            "state_code": "SWK",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Sutton",
            "state_code": "STN",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Tower Hamlets",
            "state_code": "TWH",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Waltham Forest",
            "state_code": "WFT",
            "country_code": "GB"
        },
        {
            "name": "London Borough of Wandsworth",
            "state_code": "WND",
            "country_code": "GB"
        },
        {
            "name": "Magherafelt District Council",
            "state_code": "MFT",
            "country_code": "GB"
        },
        {
            "name": "Manchester",
            "state_code": "MAN",
            "country_code": "GB"
        },
        {
            "name": "Medway",
            "state_code": "MDW",
            "country_code": "GB"
        },
        {
            "name": "Merthyr Tydfil County Borough",
            "state_code": "MTY",
            "country_code": "GB"
        },
        {
            "name": "Metropolitan Borough of Wigan",
            "state_code": "WGN",
            "country_code": "GB"
        },
        {
            "name": "Mid and East Antrim",
            "state_code": "MEA",
            "country_code": "GB"
        },
        {
            "name": "Mid Ulster",
            "state_code": "MUL",
            "country_code": "GB"
        },
        {
            "name": "Middlesbrough",
            "state_code": "MDB",
            "country_code": "GB"
        },
        {
            "name": "Midlothian",
            "state_code": "MLN",
            "country_code": "GB"
        },
        {
            "name": "Milton Keynes",
            "state_code": "MIK",
            "country_code": "GB"
        },
        {
            "name": "Monmouthshire",
            "state_code": "MON",
            "country_code": "GB"
        },
        {
            "name": "Moray",
            "state_code": "MRY",
            "country_code": "GB"
        },
        {
            "name": "Moyle District Council",
            "state_code": "MYL",
            "country_code": "GB"
        },
        {
            "name": "Neath Port Talbot County Borough",
            "state_code": "NTL",
            "country_code": "GB"
        },
        {
            "name": "Newcastle upon Tyne",
            "state_code": "NET",
            "country_code": "GB"
        },
        {
            "name": "Newport",
            "state_code": "NWP",
            "country_code": "GB"
        },
        {
            "name": "Newry and Mourne District Council",
            "state_code": "NYM",
            "country_code": "GB"
        },
        {
            "name": "Newry, Mourne and Down",
            "state_code": "NMD",
            "country_code": "GB"
        },
        {
            "name": "Newtownabbey Borough Council",
            "state_code": "NTA",
            "country_code": "GB"
        },
        {
            "name": "Norfolk",
            "state_code": "NFK",
            "country_code": "GB"
        },
        {
            "name": "North Ayrshire",
            "state_code": "NAY",
            "country_code": "GB"
        },
        {
            "name": "North Down Borough Council",
            "state_code": "NDN",
            "country_code": "GB"
        },
        {
            "name": "North East Lincolnshire",
            "state_code": "NEL",
            "country_code": "GB"
        },
        {
            "name": "North Lanarkshire",
            "state_code": "NLK",
            "country_code": "GB"
        },
        {
            "name": "North Lincolnshire",
            "state_code": "NLN",
            "country_code": "GB"
        },
        {
            "name": "North Somerset",
            "state_code": "NSM",
            "country_code": "GB"
        },
        {
            "name": "North Tyneside",
            "state_code": "NTY",
            "country_code": "GB"
        },
        {
            "name": "North Yorkshire",
            "state_code": "NYK",
            "country_code": "GB"
        },
        {
            "name": "Northamptonshire",
            "state_code": "NTH",
            "country_code": "GB"
        },
        {
            "name": "Northern Ireland",
            "state_code": "NIR",
            "country_code": "GB"
        },
        {
            "name": "Northumberland",
            "state_code": "NBL",
            "country_code": "GB"
        },
        {
            "name": "Nottinghamshire",
            "state_code": "NTT",
            "country_code": "GB"
        },
        {
            "name": "Oldham",
            "state_code": "OLD",
            "country_code": "GB"
        },
        {
            "name": "Omagh District Council",
            "state_code": "OMH",
            "country_code": "GB"
        },
        {
            "name": "Orkney Islands",
            "state_code": "ORK",
            "country_code": "GB"
        },
        {
            "name": "Outer Hebrides",
            "state_code": "ELS",
            "country_code": "GB"
        },
        {
            "name": "Oxfordshire",
            "state_code": "OXF",
            "country_code": "GB"
        },
        {
            "name": "Pembrokeshire",
            "state_code": "PEM",
            "country_code": "GB"
        },
        {
            "name": "Perth and Kinross",
            "state_code": "PKN",
            "country_code": "GB"
        },
        {
            "name": "Poole",
            "state_code": "POL",
            "country_code": "GB"
        },
        {
            "name": "Powys",
            "state_code": "POW",
            "country_code": "GB"
        },
        {
            "name": "Reading",
            "state_code": "RDG",
            "country_code": "GB"
        },
        {
            "name": "Redcar and Cleveland",
            "state_code": "RCC",
            "country_code": "GB"
        },
        {
            "name": "Renfrewshire",
            "state_code": "RFW",
            "country_code": "GB"
        },
        {
            "name": "Rhondda Cynon Taf",
            "state_code": "RCT",
            "country_code": "GB"
        },
        {
            "name": "Rochdale",
            "state_code": "RCH",
            "country_code": "GB"
        },
        {
            "name": "Rotherham",
            "state_code": "ROT",
            "country_code": "GB"
        },
        {
            "name": "Royal Borough of Greenwich",
            "state_code": "GRE",
            "country_code": "GB"
        },
        {
            "name": "Royal Borough of Kensington and Chelsea",
            "state_code": "KEC",
            "country_code": "GB"
        },
        {
            "name": "Royal Borough of Kingston upon Thames",
            "state_code": "KTT",
            "country_code": "GB"
        },
        {
            "name": "Rutland",
            "state_code": "RUT",
            "country_code": "GB"
        },
        {
            "name": "Saint Helena",
            "state_code": "SH-HL",
            "country_code": "GB"
        },
        {
            "name": "Salford",
            "state_code": "SLF",
            "country_code": "GB"
        },
        {
            "name": "Sandwell",
            "state_code": "SAW",
            "country_code": "GB"
        },
        {
            "name": "Scotland",
            "state_code": "SCT",
            "country_code": "GB"
        },
        {
            "name": "Scottish Borders",
            "state_code": "SCB",
            "country_code": "GB"
        },
        {
            "name": "Sefton",
            "state_code": "SFT",
            "country_code": "GB"
        },
        {
            "name": "Sheffield",
            "state_code": "SHF",
            "country_code": "GB"
        },
        {
            "name": "Shetland Islands",
            "state_code": "ZET",
            "country_code": "GB"
        },
        {
            "name": "Shropshire",
            "state_code": "SHR",
            "country_code": "GB"
        },
        {
            "name": "Slough",
            "state_code": "SLG",
            "country_code": "GB"
        },
        {
            "name": "Solihull",
            "state_code": "SOL",
            "country_code": "GB"
        },
        {
            "name": "Somerset",
            "state_code": "SOM",
            "country_code": "GB"
        },
        {
            "name": "South Ayrshire",
            "state_code": "SAY",
            "country_code": "GB"
        },
        {
            "name": "South Gloucestershire",
            "state_code": "SGC",
            "country_code": "GB"
        },
        {
            "name": "South Lanarkshire",
            "state_code": "SLK",
            "country_code": "GB"
        },
        {
            "name": "South Tyneside",
            "state_code": "STY",
            "country_code": "GB"
        },
        {
            "name": "Southend-on-Sea",
            "state_code": "SOS",
            "country_code": "GB"
        },
        {
            "name": "St Helens",
            "state_code": "SHN",
            "country_code": "GB"
        },
        {
            "name": "Staffordshire",
            "state_code": "STS",
            "country_code": "GB"
        },
        {
            "name": "Stirling",
            "state_code": "STG",
            "country_code": "GB"
        },
        {
            "name": "Stockport",
            "state_code": "SKP",
            "country_code": "GB"
        },
        {
            "name": "Stockton-on-Tees",
            "state_code": "STT",
            "country_code": "GB"
        },
        {
            "name": "Strabane District Council",
            "state_code": "STB",
            "country_code": "GB"
        },
        {
            "name": "Suffolk",
            "state_code": "SFK",
            "country_code": "GB"
        },
        {
            "name": "Surrey",
            "state_code": "SRY",
            "country_code": "GB"
        },
        {
            "name": "Swindon",
            "state_code": "SWD",
            "country_code": "GB"
        },
        {
            "name": "Tameside",
            "state_code": "TAM",
            "country_code": "GB"
        },
        {
            "name": "Telford and Wrekin",
            "state_code": "TFW",
            "country_code": "GB"
        },
        {
            "name": "Thurrock",
            "state_code": "THR",
            "country_code": "GB"
        },
        {
            "name": "Torbay",
            "state_code": "TOB",
            "country_code": "GB"
        },
        {
            "name": "Torfaen",
            "state_code": "TOF",
            "country_code": "GB"
        },
        {
            "name": "Trafford",
            "state_code": "TRF",
            "country_code": "GB"
        },
        {
            "name": "United Kingdom",
            "state_code": "UKM",
            "country_code": "GB"
        },
        {
            "name": "Vale of Glamorgan",
            "state_code": "VGL",
            "country_code": "GB"
        },
        {
            "name": "Wakefield",
            "state_code": "WKF",
            "country_code": "GB"
        },
        {
            "name": "Wales",
            "state_code": "WLS",
            "country_code": "GB"
        },
        {
            "name": "Walsall",
            "state_code": "WLL",
            "country_code": "GB"
        },
        {
            "name": "Warrington",
            "state_code": "WRT",
            "country_code": "GB"
        },
        {
            "name": "Warwickshire",
            "state_code": "WAR",
            "country_code": "GB"
        },
        {
            "name": "West Berkshire",
            "state_code": "WBK",
            "country_code": "GB"
        },
        {
            "name": "West Dunbartonshire",
            "state_code": "WDU",
            "country_code": "GB"
        },
        {
            "name": "West Lothian",
            "state_code": "WLN",
            "country_code": "GB"
        },
        {
            "name": "West Sussex",
            "state_code": "WSX",
            "country_code": "GB"
        },
        {
            "name": "Wiltshire",
            "state_code": "WIL",
            "country_code": "GB"
        },
        {
            "name": "Windsor and Maidenhead",
            "state_code": "WNM",
            "country_code": "GB"
        },
        {
            "name": "Wirral",
            "state_code": "WRL",
            "country_code": "GB"
        },
        {
            "name": "Wokingham",
            "state_code": "WOK",
            "country_code": "GB"
        },
        {
            "name": "Worcestershire",
            "state_code": "WOR",
            "country_code": "GB"
        },
        {
            "name": "Wrexham County Borough",
            "state_code": "WRX",
            "country_code": "GB"
        },
        {
            "name": "Alabama",
            "state_code": "AL",
            "country_code": "US"
        },
        {
            "name": "Alaska",
            "state_code": "AK",
            "country_code": "US"
        },
        {
            "name": "American Samoa",
            "state_code": "AS",
            "country_code": "US"
        },
        {
            "name": "Arizona",
            "state_code": "AZ",
            "country_code": "US"
        },
        {
            "name": "Arkansas",
            "state_code": "AR",
            "country_code": "US"
        },
        {
            "name": "Baker Island",
            "state_code": "UM-81",
            "country_code": "US"
        },
        {
            "name": "California",
            "state_code": "CA",
            "country_code": "US"
        },
        {
            "name": "Colorado",
            "state_code": "CO",
            "country_code": "US"
        },
        {
            "name": "Connecticut",
            "state_code": "CT",
            "country_code": "US"
        },
        {
            "name": "Delaware",
            "state_code": "DE",
            "country_code": "US"
        },
        {
            "name": "District of Columbia",
            "state_code": "DC",
            "country_code": "US"
        },
        {
            "name": "Florida",
            "state_code": "FL",
            "country_code": "US"
        },
        {
            "name": "Georgia",
            "state_code": "GA",
            "country_code": "US"
        },
        {
            "name": "Guam",
            "state_code": "GU",
            "country_code": "US"
        },
        {
            "name": "Hawaii",
            "state_code": "HI",
            "country_code": "US"
        },
        {
            "name": "Howland Island",
            "state_code": "UM-84",
            "country_code": "US"
        },
        {
            "name": "Idaho",
            "state_code": "ID",
            "country_code": "US"
        },
        {
            "name": "Illinois",
            "state_code": "IL",
            "country_code": "US"
        },
        {
            "name": "Indiana",
            "state_code": "IN",
            "country_code": "US"
        },
        {
            "name": "Iowa",
            "state_code": "IA",
            "country_code": "US"
        },
        {
            "name": "Jarvis Island",
            "state_code": "UM-86",
            "country_code": "US"
        },
        {
            "name": "Johnston Atoll",
            "state_code": "UM-67",
            "country_code": "US"
        },
        {
            "name": "Kansas",
            "state_code": "KS",
            "country_code": "US"
        },
        {
            "name": "Kentucky",
            "state_code": "KY",
            "country_code": "US"
        },
        {
            "name": "Kingman Reef",
            "state_code": "UM-89",
            "country_code": "US"
        },
        {
            "name": "Louisiana",
            "state_code": "LA",
            "country_code": "US"
        },
        {
            "name": "Maine",
            "state_code": "ME",
            "country_code": "US"
        },
        {
            "name": "Maryland",
            "state_code": "MD",
            "country_code": "US"
        },
        {
            "name": "Massachusetts",
            "state_code": "MA",
            "country_code": "US"
        },
        {
            "name": "Michigan",
            "state_code": "MI",
            "country_code": "US"
        },
        {
            "name": "Midway Atoll",
            "state_code": "UM-71",
            "country_code": "US"
        },
        {
            "name": "Minnesota",
            "state_code": "MN",
            "country_code": "US"
        },
        {
            "name": "Mississippi",
            "state_code": "MS",
            "country_code": "US"
        },
        {
            "name": "Missouri",
            "state_code": "MO",
            "country_code": "US"
        },
        {
            "name": "Montana",
            "state_code": "MT",
            "country_code": "US"
        },
        {
            "name": "Navassa Island",
            "state_code": "UM-76",
            "country_code": "US"
        },
        {
            "name": "Nebraska",
            "state_code": "NE",
            "country_code": "US"
        },
        {
            "name": "Nevada",
            "state_code": "NV",
            "country_code": "US"
        },
        {
            "name": "New Hampshire",
            "state_code": "NH",
            "country_code": "US"
        },
        {
            "name": "New Jersey",
            "state_code": "NJ",
            "country_code": "US"
        },
        {
            "name": "New Mexico",
            "state_code": "NM",
            "country_code": "US"
        },
        {
            "name": "New York",
            "state_code": "NY",
            "country_code": "US"
        },
        {
            "name": "North Carolina",
            "state_code": "NC",
            "country_code": "US"
        },
        {
            "name": "North Dakota",
            "state_code": "ND",
            "country_code": "US"
        },
        {
            "name": "Northern Mariana Islands",
            "state_code": "MP",
            "country_code": "US"
        },
        {
            "name": "Ohio",
            "state_code": "OH",
            "country_code": "US"
        },
        {
            "name": "Oklahoma",
            "state_code": "OK",
            "country_code": "US"
        },
        {
            "name": "Oregon",
            "state_code": "OR",
            "country_code": "US"
        },
        {
            "name": "Palmyra Atoll",
            "state_code": "UM-95",
            "country_code": "US"
        },
        {
            "name": "Pennsylvania",
            "state_code": "PA",
            "country_code": "US"
        },
        {
            "name": "Puerto Rico",
            "state_code": "PR",
            "country_code": "US"
        },
        {
            "name": "Rhode Island",
            "state_code": "RI",
            "country_code": "US"
        },
        {
            "name": "South Carolina",
            "state_code": "SC",
            "country_code": "US"
        },
        {
            "name": "South Dakota",
            "state_code": "SD",
            "country_code": "US"
        },
        {
            "name": "Tennessee",
            "state_code": "TN",
            "country_code": "US"
        },
        {
            "name": "Texas",
            "state_code": "TX",
            "country_code": "US"
        },
        {
            "name": "United States Minor Outlying Islands",
            "state_code": "UM",
            "country_code": "US"
        },
        {
            "name": "United States Virgin Islands",
            "state_code": "VI",
            "country_code": "US"
        },
        {
            "name": "Utah",
            "state_code": "UT",
            "country_code": "US"
        },
        {
            "name": "Vermont",
            "state_code": "VT",
            "country_code": "US"
        },
        {
            "name": "Virginia",
            "state_code": "VA",
            "country_code": "US"
        },
        {
            "name": "Wake Island",
            "state_code": "UM-79",
            "country_code": "US"
        },
        {
            "name": "Washington",
            "state_code": "WA",
            "country_code": "US"
        },
        {
            "name": "West Virginia",
            "state_code": "WV",
            "country_code": "US"
        },
        {
            "name": "Wisconsin",
            "state_code": "WI",
            "country_code": "US"
        },
        {
            "name": "Wyoming",
            "state_code": "WY",
            "country_code": "US"
        },
        {
            "name": "Artigas Department",
            "state_code": "AR",
            "country_code": "UY"
        },
        {
            "name": "Canelones Department",
            "state_code": "CA",
            "country_code": "UY"
        },
        {
            "name": "Cerro Largo Department",
            "state_code": "CL",
            "country_code": "UY"
        },
        {
            "name": "Colonia Department",
            "state_code": "CO",
            "country_code": "UY"
        },
        {
            "name": "Durazno Department",
            "state_code": "DU",
            "country_code": "UY"
        },
        {
            "name": "Flores Department",
            "state_code": "FS",
            "country_code": "UY"
        },
        {
            "name": "Florida Department",
            "state_code": "FD",
            "country_code": "UY"
        },
        {
            "name": "Lavalleja Department",
            "state_code": "LA",
            "country_code": "UY"
        },
        {
            "name": "Maldonado Department",
            "state_code": "MA",
            "country_code": "UY"
        },
        {
            "name": "Montevideo Department",
            "state_code": "MO",
            "country_code": "UY"
        },
        {
            "name": "Paysandú Department",
            "state_code": "PA",
            "country_code": "UY"
        },
        {
            "name": "Río Negro Department",
            "state_code": "RN",
            "country_code": "UY"
        },
        {
            "name": "Rivera Department",
            "state_code": "RV",
            "country_code": "UY"
        },
        {
            "name": "Rocha Department",
            "state_code": "RO",
            "country_code": "UY"
        },
        {
            "name": "Salto Department",
            "state_code": "SA",
            "country_code": "UY"
        },
        {
            "name": "San José Department",
            "state_code": "SJ",
            "country_code": "UY"
        },
        {
            "name": "Soriano Department",
            "state_code": "SO",
            "country_code": "UY"
        },
        {
            "name": "Tacuarembó Department",
            "state_code": "TA",
            "country_code": "UY"
        },
        {
            "name": "Treinta y Tres Department",
            "state_code": "TT",
            "country_code": "UY"
        },
        {
            "name": "Andijan Region",
            "state_code": "AN",
            "country_code": "UZ"
        },
        {
            "name": "Bukhara Region",
            "state_code": "BU",
            "country_code": "UZ"
        },
        {
            "name": "Fergana Region",
            "state_code": "FA",
            "country_code": "UZ"
        },
        {
            "name": "Jizzakh Region",
            "state_code": "JI",
            "country_code": "UZ"
        },
        {
            "name": "Karakalpakstan",
            "state_code": "QR",
            "country_code": "UZ"
        },
        {
            "name": "Namangan Region",
            "state_code": "NG",
            "country_code": "UZ"
        },
        {
            "name": "Navoiy Region",
            "state_code": "NW",
            "country_code": "UZ"
        },
        {
            "name": "Qashqadaryo Region",
            "state_code": "QA",
            "country_code": "UZ"
        },
        {
            "name": "Samarqand Region",
            "state_code": "SA",
            "country_code": "UZ"
        },
        {
            "name": "Sirdaryo Region",
            "state_code": "SI",
            "country_code": "UZ"
        },
        {
            "name": "Surxondaryo Region",
            "state_code": "SU",
            "country_code": "UZ"
        },
        {
            "name": "Tashkent",
            "state_code": "TK",
            "country_code": "UZ"
        },
        {
            "name": "Tashkent Region",
            "state_code": "TO",
            "country_code": "UZ"
        },
        {
            "name": "Xorazm Region",
            "state_code": "XO",
            "country_code": "UZ"
        },
        {
            "name": "Malampa",
            "state_code": "MAP",
            "country_code": "VU"
        },
        {
            "name": "Penama",
            "state_code": "PAM",
            "country_code": "VU"
        },
        {
            "name": "Sanma",
            "state_code": "SAM",
            "country_code": "VU"
        },
        {
            "name": "Shefa",
            "state_code": "SEE",
            "country_code": "VU"
        },
        {
            "name": "Tafea",
            "state_code": "TAE",
            "country_code": "VU"
        },
        {
            "name": "Torba",
            "state_code": "TOB",
            "country_code": "VU"
        },
        {
            "name": "Amazonas",
            "state_code": "Z",
            "country_code": "VE"
        },
        {
            "name": "Anzoátegui",
            "state_code": "B",
            "country_code": "VE"
        },
        {
            "name": "Apure",
            "state_code": "C",
            "country_code": "VE"
        },
        {
            "name": "Aragua",
            "state_code": "D",
            "country_code": "VE"
        },
        {
            "name": "Barinas",
            "state_code": "E",
            "country_code": "VE"
        },
        {
            "name": "Bolívar",
            "state_code": "F",
            "country_code": "VE"
        },
        {
            "name": "Carabobo",
            "state_code": "G",
            "country_code": "VE"
        },
        {
            "name": "Cojedes",
            "state_code": "H",
            "country_code": "VE"
        },
        {
            "name": "Delta Amacuro",
            "state_code": "Y",
            "country_code": "VE"
        },
        {
            "name": "Distrito Capital",
            "state_code": "A",
            "country_code": "VE"
        },
        {
            "name": "Falcón",
            "state_code": "I",
            "country_code": "VE"
        },
        {
            "name": "Federal Dependencies of Venezuela",
            "state_code": "W",
            "country_code": "VE"
        },
        {
            "name": "Guárico",
            "state_code": "J",
            "country_code": "VE"
        },
        {
            "name": "La Guaira",
            "state_code": "X",
            "country_code": "VE"
        },
        {
            "name": "Lara",
            "state_code": "K",
            "country_code": "VE"
        },
        {
            "name": "Mérida",
            "state_code": "L",
            "country_code": "VE"
        },
        {
            "name": "Miranda",
            "state_code": "M",
            "country_code": "VE"
        },
        {
            "name": "Monagas",
            "state_code": "N",
            "country_code": "VE"
        },
        {
            "name": "Nueva Esparta",
            "state_code": "O",
            "country_code": "VE"
        },
        {
            "name": "Portuguesa",
            "state_code": "P",
            "country_code": "VE"
        },
        {
            "name": "Sucre",
            "state_code": "R",
            "country_code": "VE"
        },
        {
            "name": "Táchira",
            "state_code": "S",
            "country_code": "VE"
        },
        {
            "name": "Trujillo",
            "state_code": "T",
            "country_code": "VE"
        },
        {
            "name": "Yaracuy",
            "state_code": "U",
            "country_code": "VE"
        },
        {
            "name": "Zulia",
            "state_code": "V",
            "country_code": "VE"
        },
        {
            "name": "An Giang",
            "state_code": "44",
            "country_code": "VN"
        },
        {
            "name": "Bà Rịa-Vũng Tàu",
            "state_code": "43",
            "country_code": "VN"
        },
        {
            "name": "Bắc Giang",
            "state_code": "54",
            "country_code": "VN"
        },
        {
            "name": "Bắc Kạn",
            "state_code": "53",
            "country_code": "VN"
        },
        {
            "name": "Bạc Liêu",
            "state_code": "55",
            "country_code": "VN"
        },
        {
            "name": "Bắc Ninh",
            "state_code": "56",
            "country_code": "VN"
        },
        {
            "name": "Bến Tre",
            "state_code": "50",
            "country_code": "VN"
        },
        {
            "name": "Bình Dương",
            "state_code": "57",
            "country_code": "VN"
        },
        {
            "name": "Bình Định",
            "state_code": "31",
            "country_code": "VN"
        },
        {
            "name": "Bình Phước",
            "state_code": "58",
            "country_code": "VN"
        },
        {
            "name": "Bình Thuận",
            "state_code": "40",
            "country_code": "VN"
        },
        {
            "name": "Cà Mau",
            "state_code": "59",
            "country_code": "VN"
        },
        {
            "name": "Cần Thơ",
            "state_code": "CT",
            "country_code": "VN"
        },
        {
            "name": "Cao Bằng",
            "state_code": "04",
            "country_code": "VN"
        },
        {
            "name": "Đà Nẵng",
            "state_code": "DN",
            "country_code": "VN"
        },
        {
            "name": "Đắk Lắk",
            "state_code": "33",
            "country_code": "VN"
        },
        {
            "name": "Đắk Nông",
            "state_code": "72",
            "country_code": "VN"
        },
        {
            "name": "Điện Biên",
            "state_code": "71",
            "country_code": "VN"
        },
        {
            "name": "Đồng Nai",
            "state_code": "39",
            "country_code": "VN"
        },
        {
            "name": "Đồng Tháp",
            "state_code": "45",
            "country_code": "VN"
        },
        {
            "name": "Gia Lai",
            "state_code": "30",
            "country_code": "VN"
        },
        {
            "name": "Hà Giang",
            "state_code": "03",
            "country_code": "VN"
        },
        {
            "name": "Hà Nam",
            "state_code": "63",
            "country_code": "VN"
        },
        {
            "name": "Hà Nội",
            "state_code": "HN",
            "country_code": "VN"
        },
        {
            "name": "Hà Tĩnh",
            "state_code": "23",
            "country_code": "VN"
        },
        {
            "name": "Hải Dương",
            "state_code": "61",
            "country_code": "VN"
        },
        {
            "name": "Hải Phòng",
            "state_code": "HP",
            "country_code": "VN"
        },
        {
            "name": "Hậu Giang",
            "state_code": "73",
            "country_code": "VN"
        },
        {
            "name": "Hồ Chí Minh",
            "state_code": "SG",
            "country_code": "VN"
        },
        {
            "name": "Hòa Bình",
            "state_code": "14",
            "country_code": "VN"
        },
        {
            "name": "Hưng Yên",
            "state_code": "66",
            "country_code": "VN"
        },
        {
            "name": "Khánh Hòa",
            "state_code": "34",
            "country_code": "VN"
        },
        {
            "name": "Kiên Giang",
            "state_code": "47",
            "country_code": "VN"
        },
        {
            "name": "Kon Tum",
            "state_code": "28",
            "country_code": "VN"
        },
        {
            "name": "Lai Châu",
            "state_code": "01",
            "country_code": "VN"
        },
        {
            "name": "Lâm Đồng",
            "state_code": "35",
            "country_code": "VN"
        },
        {
            "name": "Lạng Sơn",
            "state_code": "09",
            "country_code": "VN"
        },
        {
            "name": "Lào Cai",
            "state_code": "02",
            "country_code": "VN"
        },
        {
            "name": "Long An",
            "state_code": "41",
            "country_code": "VN"
        },
        {
            "name": "Nam Định",
            "state_code": "67",
            "country_code": "VN"
        },
        {
            "name": "Nghệ An",
            "state_code": "22",
            "country_code": "VN"
        },
        {
            "name": "Ninh Bình",
            "state_code": "18",
            "country_code": "VN"
        },
        {
            "name": "Ninh Thuận",
            "state_code": "36",
            "country_code": "VN"
        },
        {
            "name": "Phú Thọ",
            "state_code": "68",
            "country_code": "VN"
        },
        {
            "name": "Phú Yên",
            "state_code": "32",
            "country_code": "VN"
        },
        {
            "name": "Quảng Bình",
            "state_code": "24",
            "country_code": "VN"
        },
        {
            "name": "Quảng Nam",
            "state_code": "27",
            "country_code": "VN"
        },
        {
            "name": "Quảng Ngãi",
            "state_code": "29",
            "country_code": "VN"
        },
        {
            "name": "Quảng Ninh",
            "state_code": "13",
            "country_code": "VN"
        },
        {
            "name": "Quảng Trị",
            "state_code": "25",
            "country_code": "VN"
        },
        {
            "name": "Sóc Trăng",
            "state_code": "52",
            "country_code": "VN"
        },
        {
            "name": "Sơn La",
            "state_code": "05",
            "country_code": "VN"
        },
        {
            "name": "Tây Ninh",
            "state_code": "37",
            "country_code": "VN"
        },
        {
            "name": "Thái Bình",
            "state_code": "20",
            "country_code": "VN"
        },
        {
            "name": "Thái Nguyên",
            "state_code": "69",
            "country_code": "VN"
        },
        {
            "name": "Thanh Hóa",
            "state_code": "21",
            "country_code": "VN"
        },
        {
            "name": "Thừa Thiên-Huế",
            "state_code": "26",
            "country_code": "VN"
        },
        {
            "name": "Tiền Giang",
            "state_code": "46",
            "country_code": "VN"
        },
        {
            "name": "Trà Vinh",
            "state_code": "51",
            "country_code": "VN"
        },
        {
            "name": "Tuyên Quang",
            "state_code": "07",
            "country_code": "VN"
        },
        {
            "name": "Vĩnh Long",
            "state_code": "49",
            "country_code": "VN"
        },
        {
            "name": "Vĩnh Phúc",
            "state_code": "70",
            "country_code": "VN"
        },
        {
            "name": "Yên Bái",
            "state_code": "06",
            "country_code": "VN"
        },
        {
            "name": "Saint Croix",
            "state_code": "SC",
            "country_code": "VI"
        },
        {
            "name": "Saint John",
            "state_code": "SJ",
            "country_code": "VI"
        },
        {
            "name": "Saint Thomas",
            "state_code": "ST",
            "country_code": "VI"
        },
        {
            "name": "'Adan Governorate",
            "state_code": "AD",
            "country_code": "YE"
        },
        {
            "name": "'Amran Governorate",
            "state_code": "AM",
            "country_code": "YE"
        },
        {
            "name": "Abyan Governorate",
            "state_code": "AB",
            "country_code": "YE"
        },
        {
            "name": "Al Bayda' Governorate",
            "state_code": "BA",
            "country_code": "YE"
        },
        {
            "name": "Al Hudaydah Governorate",
            "state_code": "HU",
            "country_code": "YE"
        },
        {
            "name": "Al Jawf Governorate",
            "state_code": "JA",
            "country_code": "YE"
        },
        {
            "name": "Al Mahrah Governorate",
            "state_code": "MR",
            "country_code": "YE"
        },
        {
            "name": "Al Mahwit Governorate",
            "state_code": "MW",
            "country_code": "YE"
        },
        {
            "name": "Dhamar Governorate",
            "state_code": "DH",
            "country_code": "YE"
        },
        {
            "name": "Hadhramaut Governorate",
            "state_code": "HD",
            "country_code": "YE"
        },
        {
            "name": "Hajjah Governorate",
            "state_code": "HJ",
            "country_code": "YE"
        },
        {
            "name": "Ibb Governorate",
            "state_code": "IB",
            "country_code": "YE"
        },
        {
            "name": "Lahij Governorate",
            "state_code": "LA",
            "country_code": "YE"
        },
        {
            "name": "Ma'rib Governorate",
            "state_code": "MA",
            "country_code": "YE"
        },
        {
            "name": "Raymah Governorate",
            "state_code": "RA",
            "country_code": "YE"
        },
        {
            "name": "Saada Governorate",
            "state_code": "SD",
            "country_code": "YE"
        },
        {
            "name": "Sana'a",
            "state_code": "SA",
            "country_code": "YE"
        },
        {
            "name": "Sana'a Governorate",
            "state_code": "SN",
            "country_code": "YE"
        },
        {
            "name": "Shabwah Governorate",
            "state_code": "SH",
            "country_code": "YE"
        },
        {
            "name": "Socotra Governorate",
            "state_code": "SU",
            "country_code": "YE"
        },
        {
            "name": "Ta'izz Governorate",
            "state_code": "TA",
            "country_code": "YE"
        },
        {
            "name": "Central Province",
            "state_code": "02",
            "country_code": "ZM"
        },
        {
            "name": "Copperbelt Province",
            "state_code": "08",
            "country_code": "ZM"
        },
        {
            "name": "Eastern Province",
            "state_code": "03",
            "country_code": "ZM"
        },
        {
            "name": "Luapula Province",
            "state_code": "04",
            "country_code": "ZM"
        },
        {
            "name": "Lusaka Province",
            "state_code": "09",
            "country_code": "ZM"
        },
        {
            "name": "Muchinga Province",
            "state_code": "10",
            "country_code": "ZM"
        },
        {
            "name": "Northern Province",
            "state_code": "05",
            "country_code": "ZM"
        },
        {
            "name": "Northwestern Province",
            "state_code": "06",
            "country_code": "ZM"
        },
        {
            "name": "Southern Province",
            "state_code": "07",
            "country_code": "ZM"
        },
        {
            "name": "Western Province",
            "state_code": "01",
            "country_code": "ZM"
        },
        {
            "name": "Bulawayo Province",
            "state_code": "BU",
            "country_code": "ZW"
        },
        {
            "name": "Harare Province",
            "state_code": "HA",
            "country_code": "ZW"
        },
        {
            "name": "Manicaland",
            "state_code": "MA",
            "country_code": "ZW"
        },
        {
            "name": "Mashonaland Central Province",
            "state_code": "MC",
            "country_code": "ZW"
        },
        {
            "name": "Mashonaland East Province",
            "state_code": "ME",
            "country_code": "ZW"
        },
        {
            "name": "Mashonaland West Province",
            "state_code": "MW",
            "country_code": "ZW"
        },
        {
            "name": "Masvingo Province",
            "state_code": "MV",
            "country_code": "ZW"
        },
        {
            "name": "Matabeleland North Province",
            "state_code": "MN",
            "country_code": "ZW"
        },
        {
            "name": "Matabeleland South Province",
            "state_code": "MS",
            "country_code": "ZW"
        },
        {
            "name": "Midlands Province",
            "state_code": "MI",
            "country_code": "ZW"
        }
    ]

export {
    dataState,
}