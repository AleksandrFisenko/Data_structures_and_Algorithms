export interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
}

export interface LinkedList<T> {
  length: number;
  append(value: T): void;
  get(index: number): T | unknown;
  delete(index: number): void | unknown;
}

class SingleLinkedList<T> implements LinkedList<T> {
  private head: ListNode<T> | null = null;
  length: number = 0;

  append(value: T): void {
    const newNode: ListNode<T> = { value, next: null };
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  get(index: number): T | unknown {
    if (index < 0 || index >= this.length || this.head === null) {
      throw new Error("UwU");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current.next !== null) {
        current = current.next;
      }
    }
    return current.value;
  }

  delete(index: number): void {
    if (index < 0 || index >= this.length || this.head === null) {
      throw new Error("UwU");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (current.next !== null) {
          current = current.next;
        }
      }
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
    this.length--;
  }
}

export default SingleLinkedList;
