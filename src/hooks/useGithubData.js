import { useState, useEffect } from 'react'

const USERNAME = 'Chandrika9906'

export const useGithubData = () => {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)

      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}`),
        fetch(`https://api.github.com/users/${USERNAME}/repos?sort=stars&per_page=3`)
      ])

      const profileData = await profileRes.json()
      const reposData = await reposRes.json()

      setProfile(profileData)
      setRepos(reposData)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return { profile, repos, loading, error }
}
