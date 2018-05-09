from __future__ import print_function
import tensorflow as tf
import pandas as pd
from sklearn.cross_validation import train_test_split
filename_queue = tf.train.string_input_producer(["data.csv"])
reader = tf.TextLineReader()
key, value = reader.read(filename_queue)
data = pd.read_csv("data.csv", header= None)
print(data[data.columns[0]])
#with tf.Session() as sess2:
record_defaults = [tf.as_string([1]), [1], [1], [1], [1], [1], [1], [1]]
col1, col2, col3, col4, col5, col6, col7, col8 = tf.decode_csv(
    value, record_defaults=record_defaults)
features = tf.stack([col2, col3, col4, col5, col6, col7, col8])
y, X = data[data.columns[0]], data[data.columns[1:7]]
X_train,X_test, y_train, y_test = train_test_split(X,y, test_size= 0.3,random_state=42)
with tf.Session() as sess:
  # Start populating the filename queue.
    coord = tf.train.Coordinator()
    threads = tf.train.start_queue_runners(coord=coord)

    for i in range(0,8):
    # Retrieve a single instance:
        try:
            example, label = sess.run([features, col1])
           # X_train, X_test, y_train, y_test = train_test_split(example,label, test_size= 0.3,random_state=42)
            print(X_train)
        except tf.errors.OutOfRangeError:
            break

   # for i in range(4, 8):
    #    try:
     #       example2, label2 = sess.run([features, col1])
      #      print(example2)
       #     print

    coord.request_stop()
    coord.join(threads)
X_test, y_train, y_test = train_test_split(features,col1, test_size= 0.3,random_state=42)

