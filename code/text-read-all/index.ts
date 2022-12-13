import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

const s3Client = new S3Client({})
export const handler = async (event: any) => {
  const command = new ListObjectsV2Command({
    Bucket: process.env.BUCKET_NAME
  })

  try {
    const { Contents } = await s3Client.send(command)

    return { statusCode: 200, body: JSON.stringify(Contents) }
  } catch (err) {
    return { statusCode: 500, body: 'Oops' }
  }
}
