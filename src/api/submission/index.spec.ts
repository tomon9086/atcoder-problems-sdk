import { axiosInstance } from '@/request'
import { EndpointName, apiUrl } from '@/util'
import { RetrieveUserSubmissionResponse, retrieveUserSubmission } from '.'

describe('retrieveUserSubmission', () => {
  it('to have been called', async () => {
    const mockApiResponse: RetrieveUserSubmissionResponse = [
      {
        id: 1,
        epoch_second: 1,
        problem_id: 'problem_a',
        contest_id: 'contest1',
        user_id: 'userid',
        language: 'C++14 (GCC 5.4.1)',
        point: 100.0,
        length: 123,
        result: 'AC',
        execution_time: 12
      }
    ]
    const mockApi = jest
      .spyOn(axiosInstance, 'get')
      .mockResolvedValue({ data: mockApiResponse })

    const userName = 'userid'
    const fromSecond = 123456789
    const userSubmissions = await retrieveUserSubmission(userName, fromSecond)

    expect(mockApi).toHaveBeenCalledTimes(1)
    expect(mockApi).toHaveBeenCalledWith(
      apiUrl(EndpointName.userSubmission, userName, fromSecond)
    )
    expect(userSubmissions).toEqual(mockApiResponse)
  })
})
