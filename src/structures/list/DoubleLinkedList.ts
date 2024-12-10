import { LinkedList, ListNode } from "./SingleLinkedList";

export interface DoubleListNode<T> extends ListNode<T> {
  prev: DoubleListNode<T> | null;
  next: DoubleListNode<T> | null;
}

export interface DoubleLinkedListInterface<T> extends LinkedList<T> {
  prepend(value: T): void;
}

class DoubleLinkedList<T> implements DoubleLinkedListInterface<T> {
  private head: DoubleListNode<T> | null = null;
  private tail: DoubleListNode<T> | null = null;
  length: number = 0;

  append(value: T): void {
    const newNode: DoubleListNode<T> = { value, next: null, prev: null };
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this.length++;
  }

  prepend(value: T): void {
    const newNode: DoubleListNode<T> = { value, next: this.head, prev: null };
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  get(index: number): T | unknown {
    if (index < 0 || index >= this.length) {
      throw new Error("UwU");
    }
    let current: DoubleListNode<T> | null;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        if (current) {
          current = current.next;
        }
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        if (current) {
          current = current.prev;
        }
      }
    }
    return current ? current.value : null;
  }

  delete(index: number): void {
    if (index < 0 || index >= this.length || !this.head) {
      throw new Error("UwU");
    }

    let current: DoubleListNode<T> | null = this.head;
    for (let i = 0; i < index; i++) {
      if (current) {
        current = current.next;
      }
    }
    if (current && current.prev && current.next) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
  }
}

export default DoubleLinkedList;
