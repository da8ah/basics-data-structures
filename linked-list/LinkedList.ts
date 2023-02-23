class Nodo<T> {
	index: number;
	data: T;
	next: Nodo<T> | null = null;

	constructor(data: T) {
		this.data = data;
	}
}

class LinkedList<T> {
	head: Nodo<T> | null = null;

	append(data: T): void {
		if (!this.head) {
			this.head = new Nodo(data);
			this.head.index = 0;
		} else {
			let current = this.head;
			let lastIndex = 0;
			while (current.next !== null) {
				lastIndex = current.index + 1;
				current = current.next;
			}
			current.next = new Nodo(data);
			current.next.index = lastIndex + 1;
		}
	}

	delete(index: number): void {
		if (!this.head) return;
		if (!this.head.next && this.head.index === index) {
			this.head = null;
			return;
		}

		if (this.head.next !== null) {
			if (index === 0) {
				const temp = this.head.next;
				this.head = null;
				this.head = temp;

				let current = this.head;
				while (current.next !== null) {
					current.index = current.index - 1;
					current = current.next;
				}
				current.index = current.index - 1;
				return;
			}

			let previous = this.head;
			let current = previous.next;
			while (previous.next !== null && current?.index !== index) {
				previous = previous.next;
				current = previous.next;
			}
			if (current?.index === index) {
				previous.next = current.next ? current.next : null;
				current = null;
				current = previous.next;
				if (!current) return;
				while (current.next !== null) {
					current.index = current.index - 1;
					current = current.next;
				}
				current.index = current.index - 1;
			}
		}
	}

	print() {
		console.log("i data");
		if (!this.head) console.log("-empty-");

		let current: Nodo<T> | null = this.head;
		while (current !== null) {
			console.log(`${current.index}: ${current.data}`);
			current = current.next;
		}
	}
}

// Tests
const linkedList: LinkedList<number> = new LinkedList();
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.append(50);
linkedList.append(100);
linkedList.print();
linkedList.delete(4);
linkedList.print();
linkedList.delete(2);
linkedList.print();
