import tensorflow as tf


filename_queue = tf.train.string_input_producer(["occurence.csv"])

reader = tf.TextLineReader(skip_header_lines = 1)
key, value = reader.read(filename_queue)

# Default values, in case of empty columns. Also specifies the type of the
# decoded result.
record_defaults = [["NULL"], [0], [0], [0], [0]]
col1, col2, col3, col4, col5 = tf.decode_csv(
    value, record_defaults=record_defaults)
x = tf.stack([col1])
tf.cast(x, tf.int32)
y = tf.stack([col2, col3, col4, col5])
tf.cast(y, tf.int32)
n_nodes_hl1 = 500
n_nodes_hl2 = 500
n_nodes_hl3 = 500
   
n_classes = 10
batch_size = 100

with tf.Session() as sess:
  # Start populating the filename queue.
  coord = tf.train.Coordinator()
  threads = tf.train.start_queue_runners(coord=coord)

  for i in range(100000):
    # Retrieve a single instance:
    example, label = sess.run([x, y])
  

  tf.cast(example, tf.int32)
  tf.cast(label, tf.int32)
    
  hidden_1_layer = {'weights' : tf.Variable(tf.random_normal([n_nodes_hl1, n_nodes_hl1])),                   
                    'biases' :tf.Variable(tf.random_normal([n_nodes_hl1]))} 
    
  hidden_2_layer = {'weights' : tf.Variable(tf.random_normal([n_nodes_hl1, n_nodes_hl2])),
                    'biases' :tf.Variable(tf.random_normal([n_nodes_hl2]))} 
    
  hidden_3_layer = {'weights' : tf.Variable(tf.random_normal([n_nodes_hl2, n_nodes_hl3])),
                    'biases' : tf.Variable(tf.random_normal([n_nodes_hl3]))}
    
  output_layer = {'weights' : tf.Variable(tf.random_normal([n_nodes_hl1, n_classes])),
                    'biases' : tf.Variable(tf.random_normal([n_classes]))}

  tf.cast(hidden_1_layer['weights'], tf.int32)
  tf.cast(hidden_1_layer['biases'], tf.int32)
  tf.cast(example, tf.int32)
  l1 = tf.add(tf.matmul(example, hidden_1_layer['weights']) + hidden_1_layer['biases'])
  l1 = tf.nn.relu(l1)
  
  tf.cast(hidden_2_layer['weights'], tf.int32)
  tf.cast(hidden_2_layer['biases'], tf.int32)
  tf.cast(example, tf.int32)
  l2 = tf.add(tf.matmul(example, hidden_2_layer['weights']) + hidden_2_layer['biases'])
  l2 = tf.nn.relu(l2)

  tf.cast(hidden_3_layer['weights'], tf.int32)
  tf.cast(hidden_3_layer['biases'], tf.int32)
  tf.cast(example, tf.int32)
  l3 = tf.add(tf.matmul(example, hidden_3_layer['weights']) + hidden_3_layer['biases'])
  l3 = tf.nn.relu(l3)

  tf.cast(output_layer['weights'], tf.int32)

  output = tf.matmul(l2, output_layer['weights']) + hidden_3_layer['biases']

  prediction = output

  cost = tf.reduce_mean( tf.nn.softmax_cross_entropy_with_logits(prediction, label) )

  optimizer = tf.train.AdamOptimizer().minimize(cost)

  hw_epochs = 10

with tf.Session() as sess2:

  sess2.run(tf.initialize_all_variables())

  for epoch in hm_epochs:
    epoch_loss = 0

    for _ in range(int(tf.size(x)/batch_size)):
      #Get next_batch here. Will need to code a function for that
      _, c = sess2.run([optimizer, cost], feed_dict = {example: example, label: label})
      epoch_loss += c

    printf('Epoch ', epoch, ' completed out of', hm_epochs, '. Loss: ', epoch_loss)

  correct = tf.equal(tf.argmax(prediction, 1), tf.argmax(label, 1))

  accuracy = tf.reduce_mean(tf.cast(correct, 'float'))

  #print accuracy

  


  coord.request_stop()
  coord.join(threads)
