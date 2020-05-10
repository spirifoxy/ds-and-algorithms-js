class HashTable {
    /**
     * 
     * @param {int} size 
     */
    constructor(size){
      this.data = new Array(size);
    }
  
    /**
     * 
     * @param {string} key 
     */
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * (i + 1)) % this.data.length;
      }
      return hash;
    }

    /**
     * @param {string} key 
     * @param {int} value 
     */
    set(key, value) {
        const hash = this._hash(key);
        if (this.data[hash] === undefined) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);
    }

    /**
     * 
     * @param {string} key
     * @returns {(int|undefined)}
     */
    get(key) {
        const hash = this._hash(key);
        const bucket = this.data[hash];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return undefined;
    }

    /**
     * @returns {Array}
     */
    keys() {
        const keysArray = [];
        this.data.forEach(arr => {
            arr.forEach(keyValue => {
                keysArray.push(keyValue[0]);
            });
        });
        return keysArray;
    }
}
  
  const hashtable = new HashTable(50);
  hashtable.set('HP', 400);
  hashtable.get('HP');
  hashtable.set('MP', 700);
  hashtable.get('MP');
  hashtable.set('Hands', 3);
  hashtable.keys();