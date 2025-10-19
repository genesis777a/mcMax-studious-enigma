venv:
	python3 -m venv .venv

install-dev: venv
	. .venv/bin/activate && pip install -U pip setuptools wheel && pip install -r requirements-dev.txt

test:
	. .venv/bin/activate && PYTHONPATH=src pytest -q


CythonPARSER!
