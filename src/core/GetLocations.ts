import testing_locations from 'assets/testing_location.json';

let testing_location_data: null | [number, number, string][] = null; 

function shuffle(list: [number, number, string][]) {
    let j, x, i;
    let res: [number, number, string][] = [...list];
    for (i = res.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = res[i];
        res[i] = res[j];
        res[j] = x;
    }
    return res;
}

function get_testing_location() {
    if (testing_location_data !== null) {
        return testing_location_data;
    }
    testing_location_data = shuffle((
        testing_locations as {'X': number, 'Y': number, 'name': string}[]
    ).map(el => {
        return [el['X'], el['Y'], el['name']];
    }));
    return testing_location_data;
}

function get_api_call(loc_name: string) {
    return [];
}

export default function(loc_name: string) {
    if (loc_name === "Testing Locations") {
        return get_testing_location();
    } else {
        return get_api_call(loc_name);
    }
}