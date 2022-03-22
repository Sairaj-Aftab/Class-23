class Storage {
    static has(key){
        return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }
    static get(key){
        if (this.has(key)) {
            return JSON.parse(this.has(key))
        } else {
            return `No Data`
        }
    }
    static set(key, data){
        let lo_data = []

        if(this.has(key)){
            lo_data = this.get(key)
        }

        lo_data.push(data);
        localStorage.setItem(key, JSON.stringify(lo_data))

    }
}
export default Storage;