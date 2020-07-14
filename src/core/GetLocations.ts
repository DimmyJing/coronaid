import testing_locations from 'assets/testing_location.json';

let cached_data: {[key: string]: undefined | [number, number, string, string][]} = {};

function shuffle(list: [number, number, string, string][]) {
    let j, x, i;
    let res: [number, number, string, string][] = [...list];
    for (i = res.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = res[i];
        res[i] = res[j];
        res[j] = x;
    }
    return res;
}

function get_testing_location() {
    return shuffle((
        testing_locations as {[key: string]: any}[]
    ).map(el => {
        let desc: string[] = [];
        desc.push("Address: " + el['fulladdr']);
        desc.push("Phone Number: " + el['phone']);
        desc.push("" + el['comments']);
        desc = desc.filter(el => !el.endsWith('null'));
        return [el['X'], el['Y'], el['name'], desc.join("<br>")];
    }));
}

function get_api_call(loc_name: string, longitude: number, latitude: number) {
    return [[-96.79480599999999, 33.065467, "LifeCare Hospital of Plano", ""],
            [-96.8228893, 33.083381, "Community Hospital Corporation", ""],
            [-96.7708937, 33.1142743, "Baylor Scott & White Medical Center - Centennial", ""],
            [-96.8379875, 33.1046353, "Baylor Scott & White Medical Center - Frisco", ""],
            [-96.8006283, 33.0787498, "Children's Medical Center Plano", ""],
            [-96.8359763, 33.0440114, "Texas Health Presbyterian Hospital Plano", ""],
            [-96.7698309, 33.1136626, "Baylor Hospital", ""]] as [number, number, string, string][]
}

export default function(loc_name: string, longitude: number, latitude: number) {
    if (cached_data[loc_name] !== undefined) {
        return cached_data[loc_name] as [number, number, string, string][];
    }
    if (loc_name === "Testing Locations") {
        cached_data[loc_name] = get_testing_location();
    } else {
        cached_data[loc_name] = get_api_call(loc_name, longitude, latitude);
    }
    return cached_data[loc_name] as [number, number, string, string][];
}