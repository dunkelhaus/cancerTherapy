# Each flower has 3 petals 
# A - 0, C - 1, T - 2, G - 3
# => 01 means AC, 02 means AT, etc

class Flower:
	petal1 = '01'
	petal2 = '02'
	petal3 = '03'

def main():
	print("Hello")
	flowerObject = Flower()
	flowerObject.petal1 = '03'
	print(flowerObject.petal1)

if __name__ == "__main__":
	main()