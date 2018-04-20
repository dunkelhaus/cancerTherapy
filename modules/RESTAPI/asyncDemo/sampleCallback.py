# Sample file for a template for the DNNClassifierModel.py callback methods

import os
from types.arguments import Arguments
from types.state import State
from types.settings import Settings
from types.features import Features
from types.run import Run
from types.network import Network

class DNNClassifierModel:
	network = None

	def __init__(self):
		self.network = Network()

	def classifierModel(features, labels, mode, params):
		tf.layers.dense(..., activation = self.network.arguments.activation, ...)
		# And so on, each dynamic element's actual value, (i.e. the one to be used for computation) comes from the Network object belonging to the main model object, which the Django code
		# will create when we start the whole thing [server] up - one model obj is created, which contains the network obj that the backend
		# updates dynamically based on the latest request.
