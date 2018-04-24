from __future__ import print_function
import tensorflow as tf

filename_queue = tf.train.string_input_producer(["data.csv"])

reader = tf.TextLineReader()
key, value = reader.read(filename_queue)

record_defaults = [[1], [1], [1], [1], [1], [1], [1], [1]]
col1, col2, col3, col4, col5, col6, col7, col8 = tf.decode_csv(
    value, record_defaults=record_defaults)
features = tf.stack([col1, col2, col3, col4, col5, col6, col7, col8])

with tf.Session() as sess:
  # Start populating the filename queue.
  coord = tf.train.Coordinator()
  threads = tf.train.start_queue_runners(coord=coord)

  for i in range(9):
    # Retrieve a single instance:
    try:
        example, label = sess.run([features, col8])
        print(example)
    except tf.errors.OutOfRangeError:
        break

  coord.request_stop()
  coord.join(threads)


