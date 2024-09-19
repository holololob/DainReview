import { create } from 'zustand'

interface UserState {
  token: string | null
  name: string
  profileUrl: string
  alarmCounts: number
  setUser: (data: {
    token: string
    name: string
    profileUrl: string
    alarmCounts: number
  }) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>(set => ({
  token: null,
  name: '',
  profileUrl: '',
  alarmCounts: 0,
  setUser: ({ token, name, profileUrl, alarmCounts }) =>
    set({ token, name, profileUrl, alarmCounts }),
  clearUser: () =>
    set({ token: null, name: '', profileUrl: '', alarmCounts: 0 })
}))
