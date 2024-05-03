def containsPattern(arr: list[int], m: int, k: int) -> bool:
    # WRITE YOUR LOGIC HERE
    dic={}
    for i in arr:
        if i in dic:
            dic[i]+=1
        else:
            dic[i]=1 
    
    print(dic)
    c1=[]
    for key,value in dic.items():
        if m in dic:
            c1+=(dic.values)
    if c1>k:
        return True
    else:
        return False
        
    # c1=0
    # for o in range (len(l)):
    #     if l[o]==m:
    #         c1+=1
    # if c1>=k:
    #     return("true")
    # else:
    #     return("false")


# DO NOT CHANGE ANYTHING BELOW THIS LINE
if __name__ == '__main__':
    arr = list(map(int, input("arr: ").split()))
    m = int(input("m: "))
    k = int(input("k: "))
    if(containsPattern(arr, m, k)):
        print("true")
    else:
        print("false")

