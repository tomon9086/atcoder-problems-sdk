import { EndpointName, apiUrl } from '@/util'

export const retrieveUserSubmission = async (
  userName: string,
  fromSecond: string | number
) => {
  const res = await fetch(
    apiUrl(EndpointName.userSubmission, userName, fromSecond)
  )
  const json = await res.json()
  console.log(json)
}
