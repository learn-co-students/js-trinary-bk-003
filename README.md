

#Trinary Numbers
We're pretty sure Flatiron has hit the jackpot with ternary based computing.  What's better than two than three? Four? Don't be silly it's three.  So say goodbye to binary and hello to trinary (that's three whole naries).  In case you're a little confused, a binary number system only has two numbers, 1 and 0.  Trinary ones up lame old binary with three numbers, 0, 1, and 2.  Here's a chart to help you out.

| binary | trinary | decimal |
|:------:|:-------:|:-------:|
|   0    |    0    |    0    |
|  101   |   12    |    5    |
|  1010  |   101   |   10    |

The one problem is that we need a handy dandy JS converter to help people understand how awesome our trinary system is.  The hope is to create a JS class that will accept a number when its created.  That instance will have a method `toDecimal` that will convert the number it was instantiated with to a regular boring decimal number.

Here's another chart to help.
```bash
# "102012"
    1       0       2       0       1       2    # the number
1*3^5 + 0*3^4 + 2*3^3 + 0*3^2 + 1*3^1 + 2*3^0    # the value
  243 +     0 +    54 +     0 +     3 +     2 =  302
```

