'use client'

import { useUserStore } from '@/store'
import { useEffect } from 'react'

const useUserInfo = () => {
  const setUser = useUserStore(state => state.setUser)

  useEffect(() => {
    const token = localStorage.getItem('token')

    const fetchUserInfo = async () => {
      try {
        const res = await fetch(
          `http://ec2-54-206-111-187.ap-southeast-2.compute.amazonaws.com:8080/user/get-info`,
          {
            method: 'GET',
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'application/json'
            }
          }
        )

        if (!res.ok) {
          const errorMessage = await res.text()
          throw new Error(`Failed to fetch: ${res.status} - ${errorMessage}`)
        }

        const data = await res.json()

        setUser({
          token: token || '',
          name: data.data.name,
          profileUrl: data.data.profileUrl,
          alarmCounts: data.data.alarmCounts
        })
      } catch (error) {
        console.error('Error fetching user info:', error)
      }
    }

    if (token) {
      fetchUserInfo() // 토큰이 있을 때만 API 호출
    }
  }, [setUser])
}

export default useUserInfo
