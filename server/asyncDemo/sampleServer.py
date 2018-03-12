# this is the server

# views.py

model = getDNNClassifierModel() # Gets the DNNClassifierModel from wherever it is first created; from the origin of control flow
# And stores it as a global variable for future access to the same model object

class V1Arguments:
	def argumentDecoder(args):
		#Split args into:
		#		- activation
		#		- learningRate
		#		- regularzation
		#		- regRate
		#		- problemType

		# Then update the values in the global DNNClassifierModel object
		model.activationCallback(activation)
		model.learningRateCallback(learningRate)
		model.regularizationCallback(regularization)
		model.regRateCallback(regRate)
		model.problemTypeCallback(problemType)

		return

	def post():
		args = None # collect args value here
		argumentDecoder(args)

		return

	def get():
		# send material from the arguments attribute, from the Network object within the global model object
		model.network.getArguments() # a sample possible method in the Network class

	return
