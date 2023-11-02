# Implementing Queue using Stack
class MyQueue:

    def __init__(self):
        self.enqueue_stack = [];
        self.dequeue_stack = [];
                
    # enqueue
    def push(self, x: int) -> None:
        self.enqueue_stack.append(x)


    # dequeue
    def pop(self) -> int:
        # breakpoint()
     # if items from dequeue stack are over refill it from enqueue stack
        if not self.dequeue_stack:
            self.fill()
    # otherwise pop items from dequeue stack
        return self.dequeue_stack.pop()

    def peek(self) -> int:
        if not self.dequeue_stack:
            self.fill()

    # we could use dequeue_stack[-1] operation but this is not valid
    # according to the details of this problem
        temp = self.dequeue_stack.pop()
        self.dequeue_stack.append(temp)
        return temp

    # boolean empty() Returns true if the queue is empty, false otherwise.    
    # The operator not yields True if its argument is false, False otherwise.
    def empty(self) -> bool:
        return not len(self.dequeue_stack) and not len(self.enqueu_stack)


    # get items from enqueue to dequeue stack so we could pop items with 0(1) time

    def fill(self):
        # breakpoint()
        while self.enqueue_stack:
            breakpoint()
            self.dequeue_stack.append(self.enqueue_stack.pop())

