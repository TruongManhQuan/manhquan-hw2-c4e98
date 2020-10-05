import turtle
f = turtle.Turtle()
for angle in range(0,360,10):
    f.seth(angle)
    f.circle(50)
    f.speed(0)

