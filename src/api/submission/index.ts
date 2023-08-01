import { EndpointName, apiUrl } from '@/util'

type UserSubmission = {
  id: number
  epoch_second: number
  problem_id: string
  contest_id: string
  user_id: string
  language: string
  point: number
  length: number
  result: 'AC' | 'WA' | 'TLE' | 'MLE' | 'RE'
  execution_time: number
}

type RetrieveUserSubmissionResponse = UserSubmission[]

export const retrieveUserSubmission = async (
  userName: string,
  fromSecond: string | number
) => {
  const res = await fetch(
    apiUrl(EndpointName.userSubmission, userName, fromSecond)
  )
  const json = (await res.json()) as RetrieveUserSubmissionResponse
  return json
}
