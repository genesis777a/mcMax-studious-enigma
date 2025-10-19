import configparser

def load_keymap(path):
    cfg = configparser.ConfigParser()
    cfg.read(path)
    return dict(cfg.items('syntax_tokens'))
