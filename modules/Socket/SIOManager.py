#
import socket

class Socket:
    def __init__(self):
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket.connect(('35.184.171.249',5010))
        print "Successfully connected to through port 5010!"
    def socket_send(self,data):
        success = self.socket.send(data)
        if success == -1:
            #error occured while sending data
            print "An error occured while sending data"
        if success == 0:
            #no data was sent/connection could be broken
            print "No data was sent through socket."

socket = Socket()
#socket.socket_send("Hello World!")
