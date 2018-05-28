import math 

def cosine(vec1, vec2):
    '''Cosine similarity between two vectors (sequences).'''
    len1 = math.sqrt(sum([x**2 for x in vec1]))
    len2 = math.sqrt(sum([x**2 for x in vec2]))
    dot = sum([x*y for x,y in zip(vec1, vec2)])
    return dot / (len1 * len2)
