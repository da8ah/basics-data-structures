var Nodo = /** @class */ (function () {
    function Nodo(data) {
        this.next = null;
        this.data = data;
    }
    return Nodo;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new Nodo(data);
            this.head.index = 0;
        }
        else {
            var current = this.head;
            var lastIndex = 0;
            while (current.next !== null) {
                lastIndex = current.index + 1;
                current = current.next;
            }
            current.next = new Nodo(data);
            current.next.index = lastIndex + 1;
        }
    };
    LinkedList.prototype["delete"] = function (index) {
        if (!this.head)
            return;
        if (!this.head.next && this.head.index === index) {
            this.head = null;
            return;
        }
        if (this.head.next !== null) {
            if (index === 0) {
                var temp = this.head.next;
                this.head = null;
                this.head = temp;
                var current_1 = this.head;
                while (current_1.next !== null) {
                    current_1.index = current_1.index - 1;
                    current_1 = current_1.next;
                }
                current_1.index = current_1.index - 1;
                return;
            }
            var previous = this.head;
            var current = previous.next;
            while (previous.next !== null && (current === null || current === void 0 ? void 0 : current.index) !== index) {
                previous = previous.next;
                current = previous.next;
            }
            if ((current === null || current === void 0 ? void 0 : current.index) === index) {
                previous.next = current.next ? current.next : null;
                current = null;
                current = previous.next;
                if (!current)
                    return;
                while (current.next !== null) {
                    current.index = current.index - 1;
                    current = current.next;
                }
                current.index = current.index - 1;
            }
        }
    };
    LinkedList.prototype.print = function () {
        console.log("i data");
        if (!this.head)
            console.log("-empty-");
        var current = this.head;
        while (current !== null) {
            console.log(current.index + ": " + current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
// Tests
var linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.append(50);
linkedList.append(100);
linkedList.print();
linkedList["delete"](4);
linkedList.print();
linkedList["delete"](2);
linkedList.print();
