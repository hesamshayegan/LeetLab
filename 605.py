# 605. Can Place Flowers
class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """

        l = len(flowerbed)

        # if no flowers need to be planted, return True immediately
        if n == 0:
            return True

        for i, plot in enumerate(flowerbed):
            # check if the current plot is empty
            if plot == 0:
                # check neighbors, ensuring no out-of-bounds access
                left_empty = (i == 0 or flowerbed[i - 1] == 0)
                right_empty = (i == l - 1 or flowerbed[i + 1] == 0)

                if left_empty and right_empty:
                    flowerbed[i] = 1  # plant a flower
                    n -= 1

                if n == 0:  # early exit if all flowers are planted
                    return True

        return n == 0  # return True if no flowers left to plant