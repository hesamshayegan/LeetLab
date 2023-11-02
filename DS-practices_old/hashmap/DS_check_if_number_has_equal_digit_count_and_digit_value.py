class Solution:
    def digitCount(self, num: str) -> bool:
        
        hashmap = dict()
        
        for i in range(len(num)):
            hashmap[str(i)] = 0

        for x in num:
            if x not in hashmap:
                hashmap[x] = 1
            else:
                hashmap[x] += 1
        print(hashmap)

        for i in range(len(num)):
            if num[i] == str(hashmap[str(i)]):
                continue
            else:
                return False

        return True