type Tuple<V> = [string, V];

class HashTable<V> {
  private storage: Array<Tuple<V>>[];
  private storageLimit: number;

  constructor(limit = 14) {
    this.storageLimit = limit;
    this.storage = [];
  }
  
  private hashKey(key: string) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.storageLimit;
  }

  set(key: string, value: V) {
    const index = this.hashKey(key);
    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  get(key: string): string | unknown {
    var index = this.hashKey(key);
    if (this.storage[index] === undefined) {
      throw new Error("UwU");
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  remove(key: string) {
    var index = this.hashKey(key);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }
}

export default HashTable;