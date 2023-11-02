from collections import defaultdict, deque
# add from back and get from front
# q (FIFO)

class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = defaultdict(list)
        
        # it means that there is an edge in both direction
        for node1,node2 in edges:
            graph[node1].append(node2)
            graph[node2].append(node1)

        # creating a queue (FIFO)
        q = deque([source])
        visited = set()
        while q:
            # get from the front
            node = q.popleft()
            visited.add(node)

            if node == destination:
                return True
            
            # traversing the graph
            for neighbors in graph[node]:
                if neighbors not in visited:
                    q.append(neighbors)
        
        return False
    

# LEETCODE solution
# class Solution:
#     def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
#         # Store all edges in 'graph'.
#         graph = collections.defaultdict(list)
#         for a, b in edges:
#             graph[a].append(b)
#             graph[b].append(a)
        
#         # Store all the nodes to be visited in 'queue'.
#         seen = [False] * n
#         seen[source] = True
#         queue = collections.deque([source])
    
#         while queue:
#             curr_node = queue.popleft()
#             if curr_node == destination:
#                 return True

#             # For all the neighbors of the current node, if we haven't visit it before,
#             # add it to 'queue' and mark it as visited.
#             for next_node in graph[curr_node]:
#                 if not seen[next_node]:
#                     seen[next_node] = True
#                     queue.append(next_node)
        
#         return False

