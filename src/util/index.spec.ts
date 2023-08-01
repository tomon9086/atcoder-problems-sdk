import { API_ORIGIN } from '@/constants'
import { EndpointName, apiUrl } from '.'

describe('apiUrl', () => {
  it('userSubmission', () => {
    expect(apiUrl(EndpointName.userSubmission, 'userName', 123456789)).toBe(
      `${API_ORIGIN}/user/submissions?user=userName&from_second=123456789`
    )
  })
})
