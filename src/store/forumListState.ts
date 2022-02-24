import { useEffect } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { getForumList } from '../lib/ad-sdk/forum'
import { ForumList } from '../lib/ad-sdk/model/forum'

const state = proxy({
  forumList: [] as ForumList,
  activeForumID: 0,
  get allForums() {
    return state.forumList.map((g) => g.forums).flat()
  },
  get activeForum() {
    return state.allForums.find((f) => f.id === this.activeForumID)
  },
  active: (id: number) => {
    state.activeForumID = id
  },
})

export { state as forumListState }

export function useForumListState() {
  const _state = useSnapshot(state)
  return _state
}

export function useForumList() {
  const _state = useSnapshot(state)

  useEffect(() => {
    getForumList().then((res) => {
      state.forumList = res
    })
  }, [])

  return state.forumList
}

export function useActiveForum() {
  const _state = useSnapshot(state)
  return _state.activeForum
}
