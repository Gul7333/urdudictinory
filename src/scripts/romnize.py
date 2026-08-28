import json

ONLY_FILE = "../../../urdudbtoweb/unique-urdu.json"
ROMAN_FILE = "../../../../Downloads/words_roman .json"
OUTPUT_FILE = "unique_urdu_with_roman.json"


# Load onlytest.json
with open(ONLY_FILE, "r", encoding="utf-8") as f:
    data = json.load(f)


# Load words_romanize.json
with open(ROMAN_FILE, "r", encoding="utf-8") as f:
    roman_words = json.load(f)


# Create lookup using the Urdu WORD, not the index
roman_map = {
    item["urdu"]: item["roman"]
    for item in roman_words
}


matched = 0
not_found = 0


# Match using Urdu word
for item in data:

    urdu_word = item[1]

    roman = roman_map.get(urdu_word)

    if roman is not None:
        item[4]["roman"] = roman
        matched += 1
    else:
        not_found += 1


# Save new JSON
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(
        data,
        f,
        ensure_ascii=False,
        indent=2
    )


print("Done!")
print(f"Total words     : {len(data)}")
print(f"Matched         : {matched}")
print(f"Not found       : {not_found}")
print(f"Output          : {OUTPUT_FILE}")