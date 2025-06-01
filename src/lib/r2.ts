import {
    S3Client,
   
    GetObjectCommand,
  } from "@aws-sdk/client-s3";
import { Readable } from "stream";
const ACCOUNT_ID = process.env.ACCOUNT_ID || ""
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID || ""

  const SECRET_ACCESS_KEY = "efb063a3b09b96e60b2cf62aaff30b4467a932675b9e7cd7ecdd2874ef12d3bb"
  const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  });
  
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