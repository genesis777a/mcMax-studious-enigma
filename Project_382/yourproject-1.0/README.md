# 🐍 YourProject: Language-Crypto Snake-Pipe

An integrated, modular framework combining semantic-math parsing, cryptographic keygen, and a 9-tile “snake” lab container. Designed for creative technologists, educators, and security-minded builders.

---

## 📦 Project Structure


This is a minimal scaffold added by the assistant so you can set up a Python environment, run tests, and iterate.

Quick start

```bash
python -m venv .venv
source .venv/bin/activate
pip install -U pip
# install dev dependencies (pytest, linters)
pip install -r requirements-dev.txt
# run tests using the src/ layout
PYTHONPATH=src pytest -q
```

Jupyter pipe / editable-install note
-----------------------------------

If you use a Jupyter pipe or a custom environment that needs to be accessible during packaging, set the pipe path in an environment variable before attempting an editable install. On macOS some users see editable-wheel build errors related to temporary directories and timestamping; a reliable workaround is to set a writable TMPDIR and ensure the Jupyter pipe is exported into the environment used by pip.

I included a tiny helper script `scripts/jupyter_pipe_helper.sh` that you can use to export your pipe path and set TMPDIR to a writable project-local directory before attempting an editable install. Example usage:

```bash
# make executable once
chmod +x scripts/jupyter_pipe_helper.sh
# run with your pipe path
./scripts/jupyter_pipe_helper.sh /path/to/your/jupyter_pipe
# then try editable install
pip install -e ".[test]"
```

.env example
------------

Create a `.env` file from `.env.example` to store your local settings (the helper reads `JUPYTER_PIPE`):

```bash
cp .env.example .env
# edit .env and set JUPYTER_PIPE
```

CI
--

There is a GitHub Actions workflow at `.github/workflows/ci.yml` which runs flake8, black (check), mypy, and pytest on pushes and pull requests to `main`.

If editable installs still fail locally, CI will still validate the package on Ubuntu runners and confirm the project itself builds and tests correctly there.


---

## 🚀 Quick Start

1. Create and activate a virtual environment  
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -U pip


'''
pip install -r requirements-dev.txt
pip install -e ".[test]"
'''
