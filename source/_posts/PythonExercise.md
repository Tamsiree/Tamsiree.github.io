---
title: PythonExercise
author: Tamsiree
description: 朋友需要帮忙解决一下`学术`问题，当然义不容辞啦 ✎～～～✐。
tags:
  - Python
categories:
  - TechnicalResearch
  - Python
date: 2019-09-25 12:38:41
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/djskaif.jpeg
---

# 前言
> 朋友需要帮忙解决一下`学术`问题，当然义不容辞啦 ✎～～～✐。

![](https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/DeskTop/v2-e0efec799d2c811a33acb98ed8115b6f_hd.jpg)

# 正文
## Exercise: Day old Bread
> A bakery sells loaves of bread for £ 3.49 each. Day old bread is discounted by 60 percent. Write a programme that begins by reading the number of loaves of day old bread being purchased from the user. Then your programme should display the regular price for the bread, the discount because it is a day old, and the total price. Each of these amounts should be displayed on its own line with an appropriate label. All of the values should be displayed using two decimal places, and the decimal points in all the numbers should be aligned when reasonable values are entered by the user.

```python

import prettytable as pt

bakery_name = "Day old Bread"
bread_price: float = 3.49
bread_discount = 60

if __name__ == "__main__":
    print('Welcome to the ' + bakery_name + ' !')
    print('A bakery sells loaves of bread for  £ %.2f each.'%bread_price)
    print('Day old bread is discounted by %.2d %% !'%bread_discount)
    print('Please enter the amount of bread you bought:')
    need_bread_number = int(input())
    discount_price = bread_price * (bread_discount / 100.0)
    original_total_price = bread_price * need_bread_number
    discount_total_price = discount_price * need_bread_number
    # print('You want to buy %d loaves of bread'%need_bread_number)
    # print('original_price: £ %.2f'%bread_price)
    # print('discount_price: £ %.2f'%discount_price)
    # print('original_total_price: £ %.2f'%original_total_price)
    # print('discount_total_price: £ %.2f'%discount_total_price)

    tb = pt.PrettyTable()
    tb.field_names = ["Type", "Price"]
    tb.add_row(["original_price", '£ %.2f'%bread_price])
    tb.add_row(["discount_price", ' £ %.2f'%discount_price])
    tb.add_row(['original_total_price', ' £ %.2f'%original_total_price])
    tb.add_row(['discount_total_price', ' £ %.2f'%discount_total_price])
    tb.align["Type"] = "l"
    tb.align["Price"] = "r"
    print(tb)
```


## Exercise: Length and Slicing (23)
> Write a programme that asks the user to type in the first line of their favourite song and display the length of that string. The programme should also ask a starting number and an ending number and then display just that section of the text.

```python
if __name__ == "__main__":
    print('Please enter the first line of your favorite song:')
    song = input()
    count = len(song)
    print('count: %d'%count)
    print('Please enter a starting number and an ending number(spit , ): ')
    node = [int(x) for x in input().strip().split(',')]
    print('starting number is %d'% (node[0]),',ending number is %d'% (node[1]))
    print(song[node[0]-1:node[1]])
```


## Exercise: Upper or Lower case name
> Write a programme that asks the user to enter their first name. If the length of the first name is under five characters, the programme should ask them to enter their surname and join them together (without a space) and display the name in upper case. If the length of their first name is five or more characters, display their first name in lower case.

```python
if __name__ == "__main__":
    print('Please enter your name:')
    name = input()
    count = len(name)
    if count<=5:
        print('Please enter your surname:')
        surname = input()
        print('your name is ' + name.upper() + surname.upper())
    else :
        print('your name is '+ name.lower())
```


## Exercise: Pig Latin
> Pig Latin takes the first consonant of a word, moves it to the end of the word and adds on an “ay”. If a word begins with a vowel you just add “way” to the end. For example, pig becomes igpay banana becomes ananabay, and aardvark becomes aarvarkway. Create a programme that will ask the user to enter a word and change it into Pig Latin. Make sure the new word is displayed in lower case.

```python
if __name__ == "__main__":
    print('Please enter a word:')
    word = input()
    char = word[:1].lower()
    if len(char) == 1 and char in 'aeiou':
            new_word = word+'way'
            print('new_word:'+new_word.lower())
    else :
        new_word = word[1:] + char +'ay'
        print('new_word: ' + new_word.lower())
```


# Decision Making Exercises

## Exercise: Umbrella or no umbrella
> Write a programme that asks the user if it is raining and convert their answer to lower case so that it doesn’t matter what case they type in. If they answer “yes”, ask if it is windy. If they answer “yes” to the second question, display the answer “It’s too windy for an umbrella”, otherwise display the message “Take an umbrella”. If they did not answer “yes” to the first question, display the answer “Enjoy your day”.

```python
if __name__ == "__main__":
    print('Is it raining(yes/no):')
    raining = input().lower()
    if raining == 'yes':
        print('If there is a wind(yes/no):')
        wind = input().lower()
        if wind == 'yes':
            print('It\'s too windy for an umbrella')
        else :
            print('Take an umbrella')
    else :
        print('Enjoy your day')
```


## Exercise: Your age
> Write a programme that asks the user’s age. If they are 18 or over, display the message “you can vote”. If they are 17, display the message “You can learn how to drive”. If they are 16, display the message “you can buy a lottery ticket” and if they are under 16, display the message “You can go Trick-or-Treating”.

```python
if __name__ == "__main__":
    print('How old are you?')
    print('Please enter your age:')
    age = int(input())
    if age>=18:
        print('you can vote')
    elif age == 17:
        print('You can learn how to drive')
    elif age ==16:
        print('you can buy a lottery ticket')
    elif age<16:
        print('You can go Trick-or-Treating')
```


## Exercise: Even or Odd
> Write a programme that reads an integer from the user. Then your programme should display a message indicating whether the integer is even or odd.


```python
if __name__ == "__main__":
    num = int(input('Please input an integer :'))
    if (num % 2) == 0:
        print("the integer {0} is even".format(num))
    else:
        print("the integer {0} is odd".format(num))
```


## Exercise: Vowel or Consonant
> In the exercise, you will create a programme that reads a letter of the alphabet from the user. If the user enters a, e, i, o or u then your programme should display a message indicating that the entered letter is a vowel. If a user enters y then your programme should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. Otherwise, your programme should display a message indicating that the letter is a consonant.

```python
if __name__ == "__main__":
    print('Please enter a word:')
    word = input()
    char = word[:1].lower()
    if len(char) == 1 and char in 'aeiou':
        print('the entered letter \'' + char + '\' is a vowel')
    else:
        if char == 'y':
            print('sometimes \'y\' is a vowel, and sometimes y is a consonant. ')
        else :
            print('the letter \'' + char + '\' is a consonant')
```

## Exercise: Name the shape
> Write a programme that determines the name of a shape from its number of sides. Read the number of sides from the user and then report the appropriate name as part of a meaningful message. Your programme should support shapes with anywhere from 3 to up to (and including) 10 sides. If a number of sides outside of this range is entered then your programme should display an appropriate error message.

```python
if __name__ == "__main__":
    num = int(input('Please enter the number of sides of a polygon:'))
    if num>=3 and num<=10:
        if num == 3:
            print('This is a triangle')
        elif num == 4:
            print('This is a quadrilateral')
        elif num == 5:
            print('This is a pentagon')
        elif num == 6:
            print('This is a hexagon')
        elif num == 7:
            print('This is a seven-sided shape')
        elif num == 8:
            print('This is a octagon')
        elif num == 9:
            print('This is a nine-sided shape')
        elif num == 10:
            print('This is a decagon')
    else :
        print('The number of sides entered is out of range !')
```

## Exercise: Classifying Triangles
> A triangle can be classified based on the lengths of its sides as equilateral, isosceles or scalene. All three sides of an equilateral triangle have the same length. And isosceles triangle has two sides that are all the same length and a third side that is a different length. If all of the sides have different lengths then the triangle is scalene.
Write a programme that reads the lengths of the three sides of a triangle from the user. Then display a message that states the triangle’s type.

```python
if __name__ == "__main__":
    a = int(input("The length of the side a = "))
    b = int(input("The length of the side b = "))
    c = int(input("The length of the side c = "))

    if a+b > c and c-a < b:
        if a != b and b != c and a != c:
            print("This is Scalene")
        elif a == b and b == c:
            print("This is an Equilateral")
        else:
            print("This is Isosceles")
    else :
        print('You can\'t make a triangle')
```

## Exercise: Find the area
> Write a programme that displays the following message:  
> 　　1） Square 2） Triangle  
> 
> Enter a number:  
> 　　If a user enters 1, then it should ask them for the length of one of its sides and display the area.  
> 　　If they select 2, it should ask for the base and height of the triangle and displays the area. If they type in anything else, it should give them a suitable error.  


```python
if __name__ == "__main__":
    print('1) Square   2) Triangle ')
    number = int(input('Enter a number : '))
    if number == 1:
        sides = int(input('Enter the length of one of its sides :'))
        print('The area of this quadrilateral is %.2f'%(sides*sides))
    elif number == 2:
        base = int(input(('Enter the base of the triangle :')))
        height = int(input(('Enter the height of the triangle :')))
        print('The area of this triangle is %.2f' % (base * height / 2.0))
    else :
        print('Please follow the prompts to enter the correct data !')
```



---
> to be continued...
