# cython: boundscheck=False, wraparound=False, cdivision=True
from concurrent.futures cimport ThreadPoolExecutor

def run(self):
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(tube.process) for row in self.tiles for tube in row if tube]
        for f in futures: f.result()

#/noCoverage
#//practice
#///1/3w🪧
