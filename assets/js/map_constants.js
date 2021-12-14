// key values for getting info out of the properties on click
let single_layer_key = 0;
let recycling_key = 0;
let waste_key = 1;

// year the user has chosen
let chosen_year = "2018-2019";


let choropleth_steps = [{
    "name": "101-170 kg",
    "color": "#edf8e9"
},
{
    "name": "171-240 kg",
    "color": "#a2d7a4"
},
{
    "name": "241-310 kg",
    "color": "#38b269"
},
{
    "name": "311-394 kg",
    "color": "#015021"
}
];

let energy_steps = [{
    "name": "0-25,000",
    "color": "#ffffd4"
},
{
    "name": "25,000-45,000",
    "color": "#fee391"
},
{
    "name": "50,000-75,000",
    "color": "#fec44f"
},
{
    "name": "75,000-100,000",
    "color": "#fe9929"
},
{
    "name": "100,000+",
    "color": "#d95f0e"
}
];

let metro_LGA_names = [{
    "name": "BANYULE",
    "color": "#6fae7e"
},
{
    "name": "HUME",
    "color": "#6fae7e"
},
{
    "name": "MORELAND",
    "color": "#6fae7e"
},
{
    "name": "BAYSIDE",
    "color": "#6fae7e"
},
{
    "name": "KINGSTON",
    "color": "#6fae7e"
}
    ,
{
    "name": "MORNINGTON PENINSULA",
    "color": "#6fae7e"
}
    ,
{
    "name": "BOROONDARA",
    "color": "#6fae7e"
}
    ,
{
    "name": "KNOX",
    "color": "#6fae7e"
}
    ,
{
    "name": "NILLUMBIK",
    "color": "#6fae7e"
}
    ,
{
    "name": "BRIMBANK",
    "color": "#6fae7e"
}
    ,
{
    "name": "MANNINGHAM",
    "color": "#6fae7e"
}
    ,
{
    "name": "PORT PHILLIP",
    "color": "#6fae7e"
}
    ,
{
    "name": "CARDINIA",
    "color": "#6fae7e"
}
    ,
{
    "name": "MARIBYRONG",
    "color": "#6fae7e"
}
    ,
{
    "name": "STONNINGTON",
    "color": "#6fae7e"
},
{
    "name": "CASEY",
    "color": "#6fae7e"
}
    ,
{
    "name": "MAROONDAH",
    "color": "#6fae7e"
}
    ,
{
    "name": "WHITEHORSE",
    "color": "#6fae7e"
}
    ,
{
    "name": "DAREBIN",
    "color": "#6fae7e"
}
    ,
{
    "name": "MELBOURNE",
    "color": "#6fae7e"
}
    ,
{
    "name": "WHITTLESEA",
    "color": "#6fae7e"
}
    ,
{
    "name": "FRANKSTON",
    "color": "#6fae7e"
}
    ,
{
    "name": "MELTON",
    "color": "#6fae7e"
}
    ,
{
    "name": "WYNDHAM",
    "color": "#6fae7e"
}
    ,
{
    "name": "GLEN EIRA",
    "color": "#6fae7e"
}
    ,
{
    "name": "MONASH",
    "color": "#6fae7e"
}
    ,
{
    "name": "YARRA",
    "color": "#6fae7e"
}
    ,
{
    "name": "GREATER DANDENONG",
    "color": "#6fae7e"
}
    ,
{
    "name": "MOONEE VALLEY",
    "color": "#6fae7e"
}
    ,
{
    "name": "YARRA RANGES",
    "color": "#6fae7e"
}
    ,
{
    "name": "HOBSONS BAY",
    "color": "#6fae7e"
}
];


let LGA_waste_data = [
    {
        "service_provision_category": "Small provincial",
        "rank": 70,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 39,
        "lga_code": 20110,
        "ogc_fid": 1,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 304,
        "lga": "Alpine Shire",
        "diversion_rate_2": 29,
        "diversion_rate_1": 29
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 62,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 56,
        "lga_code": 20260,
        "ogc_fid": 2,
        "classification": "Non-metro",
        "waste_management_group": "Grampians RWMG",
        "household_yield_kg": 278,
        "lga": "Ararat Rural City",
        "diversion_rate_2": 30,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Major provincial",
        "rank": 49,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 35,
        "lga_code": 20570,
        "ogc_fid": 3,
        "classification": "Non-metro",
        "waste_management_group": "Highlands RWMG",
        "household_yield_kg": 293,
        "lga": "Ballarat City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 35
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 9,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 55,
        "lga_code": 20660,
        "ogc_fid": 4,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 333,
        "lga": "Banyule City",
        "diversion_rate_2": 39,
        "diversion_rate_1": 55
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 61,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 52,
        "lga_code": 20740,
        "ogc_fid": 5,
        "classification": "Non-metro",
        "waste_management_group": "Gippsland RWMG",
        "household_yield_kg": 206,
        "lga": "Bass Coast Shire",
        "diversion_rate_2": 30,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 10,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 60,
        "lga_code": 20830,
        "ogc_fid": 6,
        "classification": "Non-metro",
        "waste_management_group": "Gippsland RWMG",
        "household_yield_kg": 251,
        "lga": "Baw Baw Shire",
        "diversion_rate_2": 35,
        "diversion_rate_1": 55
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 8,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 55,
        "lga_code": 20910,
        "ogc_fid": 7,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 346,
        "lga": "Bayside City",
        "diversion_rate_2": 42,
        "diversion_rate_1": 55
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 60,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 51,
        "lga_code": 21010,
        "ogc_fid": 8,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 271,
        "lga": "Benalla Rural City",
        "diversion_rate_2": 31,
        "diversion_rate_1": 31
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 14,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 55,
        "lga_code": 21110,
        "ogc_fid": 9,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 354,
        "lga": "Boroondara City",
        "diversion_rate_2": 39,
        "diversion_rate_1": 53
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 36,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 39,
        "lga_code": 21180,
        "ogc_fid": 10,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 279,
        "lga": "Brimbank City",
        "diversion_rate_2": 26,
        "diversion_rate_1": 39
    },
    {
        "service_provision_category": "Rural township",
        "rank": 65,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 25,
        "lga_code": 21270,
        "ogc_fid": 11,
        "classification": "Non-metro",
        "waste_management_group": "Central Murray RWMG",
        "household_yield_kg": 239,
        "lga": "Buloke Shire",
        "diversion_rate_2": 30,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 52,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 36,
        "lga_code": 21370,
        "ogc_fid": 12,
        "classification": "Non-metro",
        "waste_management_group": "Goulburn Valley RWMG",
        "household_yield_kg": 259,
        "lga": "Campaspe Shire",
        "diversion_rate_2": 29,
        "diversion_rate_1": 35
    },
    {
        "service_provision_category": "Melbourne fringe",
        "rank": 35,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 40,
        "lga_code": 21450,
        "ogc_fid": 13,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 287,
        "lga": "Cardinia Shire",
        "diversion_rate_2": 29,
        "diversion_rate_1": 40
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 13,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 58,
        "lga_code": 21610,
        "ogc_fid": 14,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 271,
        "lga": "Casey City",
        "diversion_rate_2": 32,
        "diversion_rate_1": 54
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 40,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 52,
        "lga_code": 21670,
        "ogc_fid": 15,
        "classification": "Non-metro",
        "waste_management_group": "Highlands RWMG",
        "household_yield_kg": 242,
        "lga": "Central Goldfields Shire",
        "diversion_rate_2": 36,
        "diversion_rate_1": 39
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 23,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 48,
        "lga_code": 21750,
        "ogc_fid": 16,
        "classification": "Non-metro",
        "waste_management_group": "Barwon RWMG",
        "household_yield_kg": 199,
        "lga": "Colac Otway Shire",
        "diversion_rate_2": 29,
        "diversion_rate_1": 46
    },
    {
        "service_provision_category": "Rural township",
        "rank": 11,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 60,
        "lga_code": 21830,
        "ogc_fid": 17,
        "classification": "Non-metro",
        "waste_management_group": "South Western RWMG",
        "household_yield_kg": 252,
        "lga": "Corangamite Shire",
        "diversion_rate_2": 31,
        "diversion_rate_1": 54
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 25,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 47,
        "lga_code": 21890,
        "ogc_fid": 18,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 281,
        "lga": "Darebin City",
        "diversion_rate_2": 31,
        "diversion_rate_1": 46
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 12,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 62,
        "lga_code": 22110,
        "ogc_fid": 19,
        "classification": "Non-metro",
        "waste_management_group": "Gippsland RWMG",
        "household_yield_kg": 290,
        "lga": "East Gippsland Shire",
        "diversion_rate_2": 37,
        "diversion_rate_1": 54
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 17,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 50,
        "lga_code": 22170,
        "ogc_fid": 20,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 313,
        "lga": "Frankston City",
        "diversion_rate_2": 34,
        "diversion_rate_1": 50
    },
    {
        "service_provision_category": "Rural township",
        "rank": 39,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 51,
        "lga_code": 22250,
        "ogc_fid": 21,
        "classification": "Non-metro",
        "waste_management_group": "Central Murray RWMG",
        "household_yield_kg": 294,
        "lga": "Gannawarra Shire",
        "diversion_rate_2": 39,
        "diversion_rate_1": 39
    },
    {
        "service_provision_category": "Rural township",
        "rank": 71,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 28,
        "lga_code": 22490,
        "ogc_fid": 24,
        "classification": "Non-metro",
        "waste_management_group": "Highlands RWMG",
        "household_yield_kg": 280,
        "lga": "Golden Plains Shire",
        "diversion_rate_2": 28,
        "diversion_rate_1": 28
    },
    {
        "service_provision_category": "Major provincial",
        "rank": 73,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 35,
        "lga_code": 22620,
        "ogc_fid": 25,
        "classification": "Non-metro",
        "waste_management_group": "Calder RWMG",
        "household_yield_kg": 257,
        "lga": "Greater Bendigo City",
        "diversion_rate_2": 26,
        "diversion_rate_1": 26
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 18,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 48,
        "lga_code": 22670,
        "ogc_fid": 26,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 257,
        "lga": "Greater Dandenong City",
        "diversion_rate_2": 29,
        "diversion_rate_1": 48
    },
    {
        "service_provision_category": "Major provincial",
        "rank": 3,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 58,
        "lga_code": 22750,
        "ogc_fid": 27,
        "classification": "Non-metro",
        "waste_management_group": "Barwon RWMG",
        "household_yield_kg": 298,
        "lga": "Greater Geelong City",
        "diversion_rate_2": 38,
        "diversion_rate_1": 57
    },
    {
        "service_provision_category": "Major provincial",
        "rank": 16,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 55,
        "lga_code": 22830,
        "ogc_fid": 28,
        "classification": "Non-metro",
        "waste_management_group": "Goulburn Valley RWMG",
        "household_yield_kg": 315,
        "lga": "Greater Shepparton City",
        "diversion_rate_2": 38,
        "diversion_rate_1": 52
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 42,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 56,
        "lga_code": 22910,
        "ogc_fid": 29,
        "classification": "Non-metro",
        "waste_management_group": "Highlands RWMG",
        "household_yield_kg": 267,
        "lga": "Hepburn Shire",
        "diversion_rate_2": 38,
        "diversion_rate_1": 38
    },
    {
        "service_provision_category": "Rural township",
        "rank": 57,
        "predominant_recycling_bin_system": "240 L fortnightly (containers) & tied  bundle (paper) monthly",
        "diversion_rate_3": 53,
        "lga_code": 22980,
        "ogc_fid": 30,
        "classification": "Non-metro",
        "waste_management_group": "Desert Fringe RWMG",
        "household_yield_kg": 260,
        "lga": "Hindmarsh Shire",
        "diversion_rate_2": 32,
        "diversion_rate_1": 32
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 26,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 44,
        "lga_code": 23110,
        "ogc_fid": 31,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 257,
        "lga": "Hobsons Bay City",
        "diversion_rate_2": 31,
        "diversion_rate_1": 44
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 79,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 23,
        "lga_code": 23190,
        "ogc_fid": 32,
        "classification": "Non-metro",
        "waste_management_group": "Grampians RWMG",
        "household_yield_kg": 228,
        "lga": "Horsham Rural City",
        "diversion_rate_2": 21,
        "diversion_rate_1": 21
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 53,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 41,
        "lga_code": 23270,
        "ogc_fid": 33,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 281,
        "lga": "Hume City",
        "diversion_rate_2": 27,
        "diversion_rate_1": 34
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 41,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 44,
        "lga_code": 23350,
        "ogc_fid": 34,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 227,
        "lga": "Indigo Shire",
        "diversion_rate_2": 33,
        "diversion_rate_1": 39
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 24,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 46,
        "lga_code": 23430,
        "ogc_fid": 35,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 290,
        "lga": "Kingston City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 46
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 29,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 43,
        "lga_code": 22310,
        "ogc_fid": 22,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 290,
        "lga": "Glen Eira City",
        "diversion_rate_2": 33,
        "diversion_rate_1": 43
    },
    {
        "service_provision_category": "Rural township",
        "rank": 74,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 46,
        "lga_code": 22410,
        "ogc_fid": 23,
        "classification": "Non-metro",
        "waste_management_group": "South Western RWMG",
        "household_yield_kg": 250,
        "lga": "Glenelg Shire",
        "diversion_rate_2": 26,
        "diversion_rate_1": 26
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 5,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 56,
        "lga_code": 23670,
        "ogc_fid": 36,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 290,
        "lga": "Knox City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 56
    },
    {
        "service_provision_category": "Major provincial",
        "rank": 15,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 58,
        "lga_code": 23810,
        "ogc_fid": 37,
        "classification": "Non-metro",
        "waste_management_group": "Gippsland RWMG",
        "household_yield_kg": 246,
        "lga": "Latrobe City",
        "diversion_rate_2": 29,
        "diversion_rate_1": 53
    },
    {
        "service_provision_category": "Rural township",
        "rank": 19,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 57,
        "lga_code": 23940,
        "ogc_fid": 38,
        "classification": "Non-metro",
        "waste_management_group": "Central Murray RWMG",
        "household_yield_kg": 184,
        "lga": "Loddon Shire",
        "diversion_rate_2": 48,
        "diversion_rate_1": 48
    },
    {
        "service_provision_category": "Melbourne fringe",
        "rank": 38,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 58,
        "lga_code": 24130,
        "ogc_fid": 39,
        "classification": "Non-metro",
        "waste_management_group": "Calder RWMG",
        "household_yield_kg": 257,
        "lga": "Macedon Ranges Shire",
        "diversion_rate_2": 39,
        "diversion_rate_1": 39
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 2,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 60,
        "lga_code": 24210,
        "ogc_fid": 40,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 316,
        "lga": "Manningham City",
        "diversion_rate_2": 38,
        "diversion_rate_1": 58
    },
    {
        "service_provision_category": "Rural township",
        "rank": 63,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 30,
        "lga_code": 24250,
        "ogc_fid": 41,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 169,
        "lga": "Mansfield Shire",
        "diversion_rate_2": 30,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 72,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 28,
        "lga_code": 24330,
        "ogc_fid": 42,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 315,
        "lga": "Maribyrnong City",
        "diversion_rate_2": 24,
        "diversion_rate_1": 28
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 7,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 56,
        "lga_code": 24410,
        "ogc_fid": 43,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 292,
        "lga": "Maroondah City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 56
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 76,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 24,
        "lga_code": 24600,
        "ogc_fid": 44,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 101,
        "lga": "Melbourne City",
        "diversion_rate_2": 23,
        "diversion_rate_1": 23
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 27,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 51,
        "lga_code": 24650,
        "ogc_fid": 45,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 285,
        "lga": "Melton City",
        "diversion_rate_2": 34,
        "diversion_rate_1": 44
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 78,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 45,
        "lga_code": 24780,
        "ogc_fid": 46,
        "classification": "Non-metro",
        "waste_management_group": "Mildura RWMG",
        "household_yield_kg": 182,
        "lga": "Mildura Rural City",
        "diversion_rate_2": 22,
        "diversion_rate_1": 22
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 37,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 57,
        "lga_code": 24850,
        "ogc_fid": 47,
        "classification": "Non-metro",
        "waste_management_group": "Goulburn Valley RWMG",
        "household_yield_kg": 303,
        "lga": "Mitchell Shire",
        "diversion_rate_2": 39,
        "diversion_rate_1": 39
    },
    {
        "service_provision_category": "Rural township",
        "rank": 33,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 51,
        "lga_code": 24900,
        "ogc_fid": 48,
        "classification": "Non-metro",
        "waste_management_group": "Goulburn Valley RWMG",
        "household_yield_kg": 286,
        "lga": "Moira Shire",
        "diversion_rate_2": 41,
        "diversion_rate_1": 41
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 4,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 60,
        "lga_code": 24970,
        "ogc_fid": 49,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 281,
        "lga": "Monash City",
        "diversion_rate_2": 38,
        "diversion_rate_1": 57
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 20,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 52,
        "lga_code": 25060,
        "ogc_fid": 50,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 310,
        "lga": "Moonee Valley City",
        "diversion_rate_2": 34,
        "diversion_rate_1": 47
    },
    {
        "service_provision_category": "Melbourne fringe",
        "rank": 48,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 41,
        "lga_code": 25150,
        "ogc_fid": 51,
        "classification": "Non-metro",
        "waste_management_group": "Highlands RWMG",
        "household_yield_kg": 283,
        "lga": "Moorabool Shire",
        "diversion_rate_2": 37,
        "diversion_rate_1": 37
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 21,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 46,
        "lga_code": 25250,
        "ogc_fid": 52,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 247,
        "lga": "Moreland City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 46
    },
    {
        "service_provision_category": "Melbourne fringe",
        "rank": 28,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 62,
        "lga_code": 25340,
        "ogc_fid": 53,
        "classification": "Non-metro",
        "waste_management_group": "Mornington Peninsula RWMG",
        "household_yield_kg": 292,
        "lga": "Mornington Peninsula Shire",
        "diversion_rate_2": 42,
        "diversion_rate_1": 44
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 58,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 68,
        "lga_code": 25430,
        "ogc_fid": 54,
        "classification": "Non-metro",
        "waste_management_group": "Calder RWMG",
        "household_yield_kg": 236,
        "lga": "Mount Alexander Shire",
        "diversion_rate_2": 32,
        "diversion_rate_1": 32
    },
    {
        "service_provision_category": "Rural township",
        "rank": 1,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 72,
        "lga_code": 25490,
        "ogc_fid": 55,
        "classification": "Non-metro",
        "waste_management_group": "South Western RWMG",
        "household_yield_kg": 246,
        "lga": "Moyne Shire",
        "diversion_rate_2": 39,
        "diversion_rate_1": 62
    },
    {
        "service_provision_category": "Rural township",
        "rank": 43,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 43,
        "lga_code": 25620,
        "ogc_fid": 56,
        "classification": "Non-metro",
        "waste_management_group": "Goulburn Valley RWMG",
        "household_yield_kg": 231,
        "lga": "Murrindindi Shire",
        "diversion_rate_2": 38,
        "diversion_rate_1": 38
    },
    {
        "service_provision_category": "Melbourne fringe",
        "rank": 64,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 35,
        "lga_code": 25710,
        "ogc_fid": 57,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 371,
        "lga": "Nillumbik Shire",
        "diversion_rate_2": 47,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 77,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 38,
        "lga_code": 25810,
        "ogc_fid": 58,
        "classification": "Non-metro",
        "waste_management_group": "Grampians RWMG",
        "household_yield_kg": 224,
        "lga": "Northern Grampians Shire",
        "diversion_rate_2": 23,
        "diversion_rate_1": 23
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 56,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 35,
        "lga_code": 25900,
        "ogc_fid": 59,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 394,
        "lga": "Port Phillip City",
        "diversion_rate_2": 32,
        "diversion_rate_1": 32
    },
    {
        "service_provision_category": "Rural township",
        "rank": 54,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 34,
        "lga_code": 25990,
        "ogc_fid": 60,
        "classification": "Non-metro",
        "waste_management_group": "Highlands RWMG",
        "household_yield_kg": 220,
        "lga": "Pyrenees Shire",
        "diversion_rate_2": 30,
        "diversion_rate_1": 34
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 44,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 37,
        "lga_code": 26080,
        "ogc_fid": 61,
        "classification": "Non-metro",
        "waste_management_group": "Barwon RWMG",
        "household_yield_kg": 205,
        "lga": "Queenscliffe Borough",
        "diversion_rate_2": 32,
        "diversion_rate_1": 37
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 66,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 63,
        "lga_code": 26170,
        "ogc_fid": 62,
        "classification": "Non-metro",
        "waste_management_group": "Gippsland RWMG",
        "household_yield_kg": 218,
        "lga": "South Gippsland Shire",
        "diversion_rate_2": 30,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 51,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 47,
        "lga_code": 26260,
        "ogc_fid": 63,
        "classification": "Non-metro",
        "waste_management_group": "South Western RWMG",
        "household_yield_kg": 283,
        "lga": "Southern Grampians Shire",
        "diversion_rate_2": 35,
        "diversion_rate_1": 35
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 30,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 44,
        "lga_code": 26350,
        "ogc_fid": 64,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 248,
        "lga": "Stonnington City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 43
    },
    {
        "service_provision_category": "Rural township",
        "rank": 55,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 50,
        "lga_code": 26430,
        "ogc_fid": 65,
        "classification": "Non-metro",
        "waste_management_group": "Goulburn Valley RWMG",
        "household_yield_kg": 262,
        "lga": "Strathbogie Shire",
        "diversion_rate_2": 33,
        "diversion_rate_1": 33
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 6,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 61,
        "lga_code": 26490,
        "ogc_fid": 66,
        "classification": "Non-metro",
        "waste_management_group": "Barwon RWMG",
        "household_yield_kg": 257,
        "lga": "Surf Coast Shire",
        "diversion_rate_2": 42,
        "diversion_rate_1": 56
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 67,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 40,
        "lga_code": 26610,
        "ogc_fid": 67,
        "classification": "Non-metro",
        "waste_management_group": "Central Murray RWMG",
        "household_yield_kg": 227,
        "lga": "Swan Hill Rural City",
        "diversion_rate_2": 30,
        "diversion_rate_1": 30
    },
    {
        "service_provision_category": "Rural township",
        "rank": 68,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 40,
        "lga_code": 26670,
        "ogc_fid": 68,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 244,
        "lga": "Towong Shire",
        "diversion_rate_2": 29,
        "diversion_rate_1": 29
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 69,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 40,
        "lga_code": 26700,
        "ogc_fid": 69,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 283,
        "lga": "Wangaratta Rural City",
        "diversion_rate_2": 29,
        "diversion_rate_1": 29
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 50,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 35,
        "lga_code": 26730,
        "ogc_fid": 70,
        "classification": "Non-metro",
        "waste_management_group": "South Western RWMG",
        "household_yield_kg": 301,
        "lga": "Warrnambool City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 35
    },
    {
        "service_provision_category": "Small provincial",
        "rank": 47,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 50,
        "lga_code": 26810,
        "ogc_fid": 71,
        "classification": "Non-metro",
        "waste_management_group": "Gippsland RWMG",
        "household_yield_kg": 256,
        "lga": "Wellington Shire",
        "diversion_rate_2": 37,
        "diversion_rate_1": 37
    },
    {
        "service_provision_category": "Rural township",
        "rank": 59,
        "predominant_recycling_bin_system": "Crate (containers) weekly & tied bundle (paper) fortnightly",
        "diversion_rate_3": 31,
        "lga_code": 26890,
        "ogc_fid": 72,
        "classification": "Non-metro",
        "waste_management_group": "Desert Fringe RWMG",
        "household_yield_kg": 292,
        "lga": "West Wimmera Shire",
        "diversion_rate_2": 31,
        "diversion_rate_1": 31
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 22,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 57,
        "lga_code": 26980,
        "ogc_fid": 73,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 299,
        "lga": "Whitehorse City",
        "diversion_rate_2": 35,
        "diversion_rate_1": 46
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 32,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 46,
        "lga_code": 27070,
        "ogc_fid": 74,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 297,
        "lga": "Whittlesea City",
        "diversion_rate_2": 28,
        "diversion_rate_1": 41
    },
    {
        "service_provision_category": "Major provincial",
        "rank": 46,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 56,
        "lga_code": 27170,
        "ogc_fid": 75,
        "classification": "Non-metro",
        "waste_management_group": "North Eastern RWMG",
        "household_yield_kg": 252,
        "lga": "Wodonga Rural City",
        "diversion_rate_2": 26,
        "diversion_rate_1": 37
    },
    {
        "service_provision_category": "Outer metropolitan",
        "rank": 45,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 46,
        "lga_code": 27260,
        "ogc_fid": 76,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 280,
        "lga": "Wyndham City",
        "diversion_rate_2": 30,
        "diversion_rate_1": 37
    },
    {
        "service_provision_category": "Inner metropolitan",
        "rank": 34,
        "predominant_recycling_bin_system": "120 L commingled weekly",
        "diversion_rate_3": 40,
        "lga_code": 27350,
        "ogc_fid": 77,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 268,
        "lga": "Yarra City",
        "diversion_rate_2": 39,
        "diversion_rate_1": 40
    },
    {
        "service_provision_category": "Melbourne fringe",
        "rank": 31,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 50,
        "lga_code": 27450,
        "ogc_fid": 78,
        "classification": "Metro",
        "waste_management_group": "Metropolitan WMG",
        "household_yield_kg": 311,
        "lga": "Yarra Ranges Shire",
        "diversion_rate_2": 34,
        "diversion_rate_1": 42
    },
    {
        "service_provision_category": "Rural township",
        "rank": 75,
        "predominant_recycling_bin_system": "240 L commingled fortnightly",
        "diversion_rate_3": 47,
        "lga_code": 27630,
        "ogc_fid": 79,
        "classification": "Non-metro",
        "waste_management_group": "Grampians RWMG",
        "household_yield_kg": 220,
        "lga": "Yarriambiack Shire",
        "diversion_rate_2": 26,
        "diversion_rate_1": 26
    }
];