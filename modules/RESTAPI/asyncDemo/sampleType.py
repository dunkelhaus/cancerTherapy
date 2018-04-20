# This is a sample template Type, one of the many to be fined under /types

import os
from types.arguments import Arguments
from types.state import State
# And so on for the rest of the subtype imports

class Network:

	def __init__(self):
		self.arguments = Arguments()
		self.state = State()
		self.features = Features()
		self.settings = Settings()
		self.run = Run()

	# Define additional type related functions [getArguments, getState, ... as per your own discretion/need]
	# An example one is below:

	def getArguments(self):
		return self.arguments
