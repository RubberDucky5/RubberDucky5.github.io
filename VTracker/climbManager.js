class ClimbData {
    constructor (type = "Boulder", grade = "V0", gs = "VScale", name = "", date = Date.now()) {
        this.type = type;
        this.gradeSystem = this.gradeSystem;
        this.grade = grade;
        this.name = name;
        this.date = date;

        this.uuid = this.genid();
    }

    genid() {
        let out = 0;

        for(let i = 0; i < 32; i++) {
            if(Math.random() > 0.5) {
                out |= 1 << i;
            }
        }

    }
}

class StorageInterface {
    static LOCAL_KEY = "climbstorage";

    static addClimb(climb) {
        let state = this.getClimbs();

        state.climbs.push(climb);

        window.localStorage.setItem(this.LOCAL_KEY, JSON.stringify(state));
    }
    
    static getClimbs () {
        if (window.localStorage.getItem(this.LOCAL_KEY) == null) {
            window.localStorage.setItem(this.LOCAL_KEY, JSON.stringify({climbs:[]}));
        }

        return JSON.parse(window.localStorage.getItem(this.LOCAL_KEY));
    }
    static printData () {
        alert(this.getClimbs());
    }
    static clearData () {
        window.localStorage.setItem(this.LOCAL_KEY, JSON.stringify({climbs:[]}));
    }
}

const Types = [
    "Boulder",
    "Top Rope",
    "Lead",
    "Auto Belay",
    "Trad",
];

const Grades = {
    French: [
        "1",
        "2",
        "4",
        "4+",
        "5a",
        "5b",
        "6a",
        "6a+",
        "6b",
        "6b+",
        "6c",
        "6c+",
        "7a",
        "7a+",
        "7b",
        "7b+",
        "7c",
        "7c+",
        "8a",
        "8a+",
        "8b",
        "8b+",
        "8c",
        "8c+",
        "9a",
    ],
    V_Scale: [
        "VB",
        "V0",
        "V1",
        "V2",
        "V3",
        "V4",
        "V5",
        "V6",
        "V7",
        "V8",
        "V9",
        "V10",
        "V11",
        "V12",
        "V13",
        "V14",
        "V15",
        "V16",
        "V17",
    ],
    YDS: [
        "5.1",
        "5.2",
        "5.3",
        "5.4",
        "5.6",
        "5.7",
        "5.8",
        "5.9",
        "5.10a",
        "5.10b",
        "5.10c",
        "5.10d",
        "5.11a",
        "5.11b",
        "5.11c",
        "5.11d",
        "5.12a",
        "5.12b",
        "5.12c",
        "5.12d",
        "5.13a",
        "5.13b",
        "5.13c",
        "5.13d",
        "5.14a",
        "5.14b",
        "5.14c",
        "5.14d",
        "5.15",
    ],
    Modified_YDS: [
        "5.1",
        "5.2",
        "5.3",
        "5.4",
        "5.5",
        "5.6",
        "5.7",
        "5.8",
        "5.9-",
        "5.9",
        "5.9+",
        "5.10-",
        "5.10",
        "5.10+",
        "5.11-",
        "5.11",
        "5.11+",
        "5.12-",
        "5.12",
        "5.12+",
        "5.13-",
        "5.13",
        "5.13+",
        "5.14-",
        "5.14",
        "5.14+",
        "5.15-",
        "5.15",
        "5.15+",
    ],
}



export {ClimbData, Grades, Types, StorageInterface};