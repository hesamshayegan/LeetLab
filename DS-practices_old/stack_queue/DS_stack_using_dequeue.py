# Implementing Stack using deque
from collections import deque
# import pdb

class MyStack:

    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)
        # breakpoint()
        # pdb.set_trace()
        # Move the newly added element to the front
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
        
        # pdb.set_trace()

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0
    
    def size(self) -> int:
        return len(self.q)
    

