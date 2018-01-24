# Each flower has 3 petals 
# Petals are a pair of nucleotides (AC, AG, AT, etc)

class Nucleotide:
	def __init__(self): # Generic Constructor
		self.baseLetter = 'A' # This could be A, C, G or T
		self.base4Representation = 0 # A - 0, C - 1, G - 2, T - 3

	def __init__(self, bLetter, b4Representation): # Parameterized Constructor
		self.baseLetter = bLetter
		self.base4Representation = b4Representation

	def __init__(self, nuclet): # Sort of a copy constructors
    	self.baseLetter = nuclet.baseLetter;
    	self.base4Representation = nuclet.base4Representation;

    def get(self):
    	return self

    def set(self, singleNucleotide):
    	self.baseLetter = singleNucleotide.baseLetter
    	self.base4Representation = singleNucleotide.base4Representation
    	return

    def display(self): # Display the nucleotide
    	print("The nucleotide is: ")
    	print(self.baseLetter)

    	print("Its base4 representation is: ")
    	print(self.base4Representation)
    	return

    def compareTo(self, nuclet):
    	difference = self.base4Representation - nuclet.base4Representation
    	return difference


class BasePair:
	def __init__(self):
		self.baseX = Nucleotide()
		self.baseY = Nucleotide()
		self.mutation = False

	def __init__(self, firstNuclet, secondNuclet, hasMutation):
		self.baseX = Nucleotide(firstNuclet)
		self.baseY = Nucleotide(secondNuclet)
		self.mutation = hasMutation

	def __init__(self, sampleBasePair):
		self.baseX = Nucleotide(sampleBasePair.baseX);
		self.baseY = Nucleotide(sampleBasePair.baseY);
		self.mutation = sampleBasePair.mutation

	def get(self):
		return self

	def set(self, singleBasePair):
		self.baseX = Nucleotide(singleBasePair.baseX)
		self.baseY = Nucleotide(singleBasePair.baseY)
		self.mutation = singleBasePair.mutation
		return

	def display(self):
		print("The nucleotide pair is: ")
		pair = self.baseX.baseLetter + self.baseY.baseLetter
		print(pair)
		return

	def __eq__(self, sampleBasePair):
		iterator = 0

		if self.baseX.compareTo(sampleBasePair.baseX) == 0:
			iterator = iterator + 1

		if self.baseY.compareTo(sampleBasePair.baseY) == 0:
			iterator = iterator + 1

		if self.mutation == sampleBasePair.mutation:
			iterator = iterator + 1

		if iterator == 3:
			return True

		else:
			return False


class Flower:
	def __init__(self):
		self.petalM = BasePair()
		self.petalN = BasePair()
		self.petalP = BasePair()
		self.center = Nucleotide()

	def __init__(self, petM, petN, petP, centr):
		self.petalM = BasePair(petM.baseX, petM.baseY, petM.mutation)
		self.petalN = BasePair(petN.baseX, petN.baseY, petN.mutation)
		self.petalP = BasePair(petP.baseX, petP.baseY, petP.mutation)
		self.center = Nucleotide(centr)

	def __init__(self, sampleFlower):
		


def main():
	flowerObject = Flower() # create a flower object
	print(flowerObject.petal1)

if __name__ == "__main__":
	main()