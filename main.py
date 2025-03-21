full_name = "Taiwo Tejuosho"
age = 40
gpa = 4.25
isCool = True

# print(f"Hello {full_name}")
# print(f"You are {age} years old")
# print(f"Your GPA is {gpa}")
# print(f"Are you cool: {isCool}")

# if isCool:
#     print("You are cool")
# else:
#     print("Not cool bro")

# Arithmetic
dayCount  = 10

dayCount *= 2

dayCount //= 3



def greet(name):
    print("Welcome " + name)

def getSum(a,b):
    return a + b

def fizzBuzz():
    for i in range(1, 21):
        if i%3 == 0 and i%5 == 0:
            print("Fizz Buzz")
        elif i%5 == 0:
            print("Buzz")
        elif i%3 == 0:
            print("Fizz")
        else:
            print(i)

def reverseString(stringInput):
    outputString = ""
    char_list = reversed(list(stringInput))
    for i in char_list:
        outputString += i

    print("".join(reversed(stringInput)))

reverseString("OWIAT")

