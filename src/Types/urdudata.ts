interface JsonDataItem {
    spelling: string,
    origin: string,
    nountypes: string,
    noun: string,
    meaningstitles: string,
    meaningdetails: string,
    english: string,
    alternatives: string[],
    compounds: string[],
    poetry: string[],
    idioms: string[]
  }
 type JsonData = [
    id: number, // First item (e.g., 27)
    word: string, // Second item (e.g., "متن")
    id2: number, // Third item (e.g., 10002)
    description: string, // Fourth item (e.g., explanation text)
    details: JsonDataItem, // Object containing more details
]
