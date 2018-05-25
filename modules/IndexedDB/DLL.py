#Doubly linked list
"""
    ** The Testing fold is always at the head of the list

    ** Create a node: new_node = Node(data)
    ** Retrieve data from node: new_node.get_data()
    ** Get previous node in list: previous = new_node.get_pre()
    ** Get next node in list: next = new_node.get_next()
    ** Set previous node: new_node.set_pre(prevNode)
    ** Set next node: new_node.set_next(nextNode)
"""
import sys
sys.dont_write_bytecode = True

class _Node(object):
	def __init__(self, data=None, pre_node=None, next_node=None):
		self.data = data
		self.pre_node = pre_node
		self.next_node = next_node

	def get_data(self):
		return self.data

	def get_pre(self):
		return self.pre_node

	def get_next(self):
		return self.next_node

	def set_pre(self, new_pre):
		self.pre_node = new_pre

	def set_next(self, new_next):
		self.next_node = new_next

"""
    ** Create a DLL: List = DLL()
    ** Append a new node to list: List.append(data)
    ** Update list:
        This functions will move the head (which holds the current Testing data)
        to the end of the list making a new fold of data the new Testing data
"""
class _DLL(object):
    def __init__(self, head=None, tail=None):
        self.head = head
        self.tail = tail

    def append(self, data):
        new_node = _Node(data)
        if self.head is None:
            self.head = self.tail = new_node
        else:
            new_node.set_pre(self.tail)
            new_node.set_next(None)
            self.tail.set_next(new_node)
            self.tail = new_node

    def printList(self):
        current = self.head
        while current is not None:
            print current.get_data()
            current = current.get_next()

    def updateList(self):
        current_testing = self.head
        self.head = self.head.get_next()
        self.tail.set_next(current_testing)
        self.tail = current_testing
