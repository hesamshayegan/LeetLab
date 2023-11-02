class RecentCounter:

    def __init__(self):
        self.q = []
        
    def ping(self, t: int) -> int:
        self.q.append(t)
        while self.q[0] < t - 3000:
            self.q.pop(0)
        return len(self.q)
    

# The RecentCounter class maintains a list of timestamps of recent requests and removes the timestamps that are older than 3000 milliseconds from the beginning of the list. This can be implemented efficiently using a queue data structure.

# A queue is a data structure that follows the First In First Out (FIFO) order. This means that the first element added to the queue is the first element to be removed. When a new request comes in, we can add the timestamp to the end of the queue. When we need to remove the older timestamps, we can remove the timestamps from the beginning of the queue until we reach the first timestamp that is not older than 3000 milliseconds.

# By using a queue, we can ensure that the timestamps are always removed in the correct order. This is important because the RecentCounter class needs to be able to return the most recent requests.

# Overall, the queue data structure is an appropriate choice for implementing the RecentCounter class because it provides the necessary FIFO behavior to maintain the timestamps of recent requests.