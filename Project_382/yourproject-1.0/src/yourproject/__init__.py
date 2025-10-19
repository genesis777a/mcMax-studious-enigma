"""Top-level shim package to support editable installs.

This delegates to the implementation in src/yourproject for local development.
"""
try:
    # Prefer directly importing the src package when installed in editable mode
    from src.yourproject import add  # type: ignore
    __all__ = ["add"]
except Exception:
    # Fallback simple implementation when src isn't on sys.path (e.g. during development)
    __all__ = ["add"]

    def add(a: int, b: int) -> int:
        """Return the sum of a and b."""
        return a + b
