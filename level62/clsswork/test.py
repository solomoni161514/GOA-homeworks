def grow(arr):
    res = 1
    for i in arr:
        res *= i
    return res
print(grow([1, 2, 3, 4]))