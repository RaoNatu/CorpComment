import { useMemo } from 'react'
import { useFeedbackItemStore } from '../../stores/feedbackItemsStore'
import HashtagItem from './HashtagItem'

export default function HashtagList() {
  const feedbackItems = useFeedbackItemStore((state) => state.feedbackItems)
  
  const companyList = useMemo(() => {
    return feedbackItems
      .map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index
      })
  }, [feedbackItems])
  
  const selectCompany = useFeedbackItemStore((state) => state.selectCompany)

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  )
}
