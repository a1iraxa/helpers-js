export default class Logging {
    static simple ($data) {
        console.log($data);
    }

    static table ($data) {
        console.table($data);
    }

    static debug ($data) {
        console.debug($data);
    }
}
