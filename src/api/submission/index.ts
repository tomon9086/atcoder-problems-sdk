import { axiosInstance } from '@/request'
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

export type RetrieveUserSubmissionResponse = UserSubmission[]

export const retrieveUserSubmission = async (
  userName: string,
  fromSecond: string | number
) => {
  const res = await axiosInstance.get<RetrieveUserSubmissionResponse>(
    apiUrl(EndpointName.userSubmission, userName, fromSecond)
  )

  return res.data
}
