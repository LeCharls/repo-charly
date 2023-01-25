
def solution(number):
    mult3 = []
    mult5 = []
    n3 = int((number - 1) / 3)
    n5 = int((number - 1) / 5)
    if (number > 0):
        i = 1
        while (i <= n3):
            temp = 3 * i
            mult3.append(temp)
            i += 1

        i = 1
        while (i <= n5):
            temp = 5 * i
            mult5.append(temp)
            i += 1
            
        lista = sum(set(mult3 + mult5))
        return lista
    else:
        return 0
    
print(solution(10))
    