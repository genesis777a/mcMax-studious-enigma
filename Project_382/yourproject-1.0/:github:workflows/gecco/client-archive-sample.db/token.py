from functools import lru_cache

class MayematicaParser:
    @lru_cache(maxsize=64)
    def parse(self, text: str):
        return ast.parse(text)
