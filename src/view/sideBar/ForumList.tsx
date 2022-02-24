import { useEffect } from 'react'
import { Box, Text } from 'rebass'
import { proxy, useSnapshot } from 'valtio'
import { getForumList } from '../../lib/ad-sdk/forum'
import { ForumGroup, ForumList } from '../../lib/ad-sdk/model/forum'

const state = proxy({
  forumList: [] as ForumList,
})

function useForumList() {
  const _state = useSnapshot(state)

  useEffect(() => {
    getForumList().then((res) => {
      state.forumList = res
    })
  }, [])

  return state.forumList
}

export const ForumListView: React.FC = () => {
  const list = useForumList()
  return (
    <Box>
      {list.map((group) => {
        return <ForumGroupItem key={group.id} group={group} />
      })}
    </Box>
  )
}

interface FGProps {
  group: ForumGroup
}
const ForumGroupItem: React.FC<FGProps> = ({ group }) => {
  return (
    <Box>
      <Text as="h3">{group.name}</Text>
      <ForumNameItem group={group} />
    </Box>
  )
}

const ForumNameItem: React.FC<FGProps> = ({ group }) => {
  return (
    <Box>
      {group.forums.map((forum) => (
        <Text key={forum.id} >{forum.name}</Text>
      ))}
    </Box>
  )
}
