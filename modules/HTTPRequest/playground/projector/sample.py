import os
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data

LOG_DIR = 'logs'

mnist = input_data.read_data_sets('MNIST_data')
images = tf.Variable(mnist.test.images, name='images')

with tf.Session() as sess:
    saver = tf.train.Saver([images])

    sess.run(images.initializer)
    saver.save(sess, os.path.join(LOG_DIR, 'images.ckpt'))
