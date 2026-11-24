class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next: Node | None = None


class LinkedList:
    def __init__(self) -> None:
        self._start: Node | None = None
        self._end: Node | None = None

    def is_empty(self) -> bool:
        return self._start is None

    def append(self, value) -> None:
        node = Node(value)
        if self._end is None:
            self._start = node
        else:
            self._end.next = node
        self._end = node

    def get(self, index: int):
        if index < 0:
            raise IndexError("Index must be non-negative")

        tmp = self._start
        for _ in range(index):
            if tmp is None:
                raise IndexError("Index out of range")
            tmp = tmp.next

        if tmp is None:
            raise IndexError("Index out of range")
        return tmp.value

if __name__ == '__main__':
    linked_list = LinkedList()
    linked_list.append('do')
    linked_list.append('re')
    linked_list.append('mi')
    second_note = linked_list.get(1)
    print(second_note)
