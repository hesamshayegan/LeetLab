# 0 1 2 3  4  5  6   7   8 ... (stair number)
# 0 1 1 3  5  8  13  21  34 ... (ways to reach the stair)

class Solution:
    def climbStairs(self, n: int) -> int:
        prev = 1
        prev2 = 0 #previous of previous

        for i in range(1, n+1):
            # breakpoint()
            curi = prev + prev2
            prev2 = prev
            prev = curi

        return prev
    

# The given code employs the Dynamic Programming approach because it uses the previously calculated values to calculate
# the current value. We keep track of the number of ways to reach the previous and the previous of the previous stair
# in the variables prev and prev2, respectively. By doing so, we avoid redundant calculations and improve the time 
# complexity of the algorithm.