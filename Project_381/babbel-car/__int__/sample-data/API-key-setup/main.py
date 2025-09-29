from pyscript import fetch

response = await fetch(
    "https://examples.pyscriptapps.com/api-proxy-and-secrets-tutorial/api/proxies/list-secrets",
    method="GET"
).json()


print(response)