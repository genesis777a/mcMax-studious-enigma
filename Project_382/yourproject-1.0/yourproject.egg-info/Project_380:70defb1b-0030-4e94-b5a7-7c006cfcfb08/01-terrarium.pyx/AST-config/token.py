from functools import lru_cache

class LucyParser:
    @lru_cache(maxsize=128)
    def parse(self, text: str):
        return ast.parse(text)

class MayParser:
    @lru_cache(maxsize=32)
    def parse(self, text: str):
        return ast.parse(text)
