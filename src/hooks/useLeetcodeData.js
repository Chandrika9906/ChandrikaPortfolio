import { useState, useEffect } from 'react'

const USERNAME = 'Chandrika9906'

export const useLeetcodeData = () => {
  const [data, setData] = useState({
    solved: 240,
    easy: 109,
    medium: 123,
    hard: 8,
    recent: [
      { date: 'June 06', status: 'AC', language: 'Java', problem: 'Jewels and Stones' },
      { date: 'June 06', status: 'AC', language: 'Java', problem: 'Find the Difference' },
      { date: 'June 06', status: 'AC', language: 'Java', problem: 'Check Equal Occurrences' },
      { date: 'June 06', status: 'AC', language: 'Java', problem: 'Add Strings' },
      { date: 'June 06', status: 'AC', language: 'Java', problem: 'Robot Return to Origin' }
    ],
    loading: true,
    error: null
  })

  const fetchData = async () => {
    try {
      const [solvedRes, recentRes] = await Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`),
        fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/submission?limit=5`)
      ])

      const solvedData = await solvedRes.json()
      const recentData = await recentRes.json()

      if (solvedData && recentData) {
        setData(prev => ({
          ...prev,
          solved: solvedData.solvedProblem || prev.solved,
          easy: solvedData.easySolved || prev.easy,
          medium: solvedData.mediumSolved || prev.medium,
          hard: solvedData.hardSolved || prev.hard,
          recent: recentData.submission?.map(sub => ({
            date: new Date(sub.timestamp * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            status: 'AC', // API usually returns AC submissions in this endpoint
            language: sub.lang,
            problem: sub.title
          })) || prev.recent,
          loading: false
        }))
      }
    } catch (err) {
      console.error('LeetCode API Error:', err)
      setData(prev => ({ ...prev, loading: false, error: err.message }))
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data
}
