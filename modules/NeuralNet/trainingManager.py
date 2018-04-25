
def train (trainPath):
    print("Reached the train function in trainingManager")

#Split data into training and testing
def loadData(trainPath):
    print("Here in LoadData")
    data = pd.read_csv(trainPath, header= None)
    y, X = data[data.columns[0]], data[data.columns[1:7]]
    X_train,X_test, y_train, y_test = train_test_split(X,y, test_size= 0.3,random_state=42)
    print(X_train)
    return (train_x, train_y), (test_x, test_y)
