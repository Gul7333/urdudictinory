import {
    S3Client,
    ListBucketsCommand,
    ListObjectsV2Command,
    GetObjectCommand,
    PutObjectCommand,
  } from "@aws-sdk/client-s3";
import { Readable } from "stream";
const ACCOUNT_ID = process.env.ACCOUNT_ID || ""
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID || ""
console.log(ACCESS_KEY_ID)
  const SECRET_ACCESS_KEY = "efb063a3b09b96e60b2cf62aaff30b4467a932675b9e7cd7ecdd2874ef12d3bb"
  const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  });
  
  // console.log(await S3.send(new ListBucketsCommand({})));
  // // {
  // //     '$metadata': {
  // //     httpStatusCode: 200,
  // //         requestId: undefined,
  // //         extendedRequestId: undefined,
  // //         cfId: undefined,
  // //         attempts: 1,
  // //         totalRetryDelay: 0
  // // },
  // //     Buckets: [
  // //     { Name: 'user-uploads', CreationDate: 2022-04-13T21:23:47.102Z },
  // //     { Name: 'my-bucket-name', CreationDate: 2022-05-07T02:46:49.218Z }
  // //     ],
  // //     Owner: {
  // //         DisplayName: '...',
  // //         ID: '...'
  // //     }
  // // }
  
  // console.log(
  //   await S3.send(new ListObjectsV2Command({ Bucket: "my-bucket-name" })),
  // );
  // // {
  // //     '$metadata': {
  // //       httpStatusCode: 200,
  // //       requestId: undefined,
  // //       extendedRequestId: undefined,
  // //       cfId: undefined,
  // //       attempts: 1,
  // //       totalRetryDelay: 0
  // //     },
  // //     CommonPrefixes: undefined,
  // //     Contents: [
  // //       {
  // //         Key: 'cat.png',
  // //         LastModified: 2022-05-07T02:50:45.616Z,
  // //         ETag: '"c4da329b38467509049e615c11b0c48a"',
  // //         ChecksumAlgorithm: undefined,
  // //         Size: 751832,
  // //         StorageClass: 'STANDARD',
  // //         Owner: undefined
  // //       },
  // //       {
  // //         Key: 'todos.txt',
  // //         LastModified: 2022-05-07T21:37:17.150Z,
  // //         ETag: '"29d911f495d1ba7cb3a4d7d15e63236a"',
  // //         ChecksumAlgorithm: undefined,
  // //         Size: 279,
  // //         StorageClass: 'STANDARD',
  // //         Owner: undefined
  // //       }
  // //     ],
  // //     ContinuationToken: undefined,
  // //     Delimiter: undefined,
  // //     EncodingType: undefined,
  // //     IsTruncated: false,
  // //     KeyCount: 8,
  // //     MaxKeys: 1000,
  // //     Name: 'my-bucket-name',
  // //     NextContinuationToken: undefined,
  // //     Prefix: undefined,
  // //     StartAfter: undefined
  // //   }




  // Converts Readable stream to string
const streamToString = (stream: Readable): Promise<string> =>
    new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on("error", reject);
      stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    });
  
  export async function fetchJsonFromR2(): Promise<JsonData[] | null> {
    try {
      const command = new GetObjectCommand({
        Bucket: "urdudictionary",
        Key: "onlytest.json",
      });
  
      const response = await S3.send(command);
  
      if (!response.Body || !(response.Body instanceof Readable)) {
        throw new Error("Invalid response body");
      }
  
      const rawData = await streamToString(response.Body);
      const json: JsonData[] = JSON.parse(rawData);
      return json;
    } catch (error) {
      console.error("❌ Error fetching JSON from R2:", error);
      return null;
      // return { error: "Failed to fetch JSON from R2" };
    }
  }