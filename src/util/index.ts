import { API_ORIGIN } from '@/constants'

export const enum EndpointName {
  userSubmission = 'userSubmission'
}

type ApiParam = string | number

/**
 * Generate URL of specified endpoint
 * @param name EndpointName
 * @param args Params of Endpoint
 * @returns URL string
 */
export const apiUrl = (name: EndpointName, ...args: ApiParam[]) => {
  switch (name) {
    case EndpointName.userSubmission: {
      const [userName, fromSecond] = args
      return `${API_ORIGIN}/user/submissions?user=${userName}&from_second=${fromSecond}`
    }

    default:
      throw new Error('invalid endpoint name')
  }
}
