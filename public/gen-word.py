import json

unique = set()
with open("./words.json","r") as f:
    data = json.load(f)
    for word in data:
        unique.add(word)
    print(len(data))

print(len(unique))



with open("word2.json","w") as f:
    json.dump(list(unique),f, ensure_ascii=False)
