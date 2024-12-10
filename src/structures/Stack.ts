export interface StackNode<T> {
  value: T;
  prev: StackNode<T> | null;
}

class Stack<T> {
  length = 0;
  private current: StackNode<T> | null = null;

  push(value: T) {
    const newNode: StackNode<T> = { value, prev: this.current };
    this.current = newNode;
    this.length++;
  }

  pop(): T | unknown {
    if(this.current === null) {
      throw new Error("UwU");
    }else {
      const value = this.current.value;
      this.current = this.current.prev;
      this.length--;
      return value;
    }
  }

  peek(): T | unknown {
    if(this.current === null) {
      throw new Error("UwU");
    }else {
      return this.current.value;
    }
  }
}

export default Stack;
