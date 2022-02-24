import { Box, Text } from 'rebass'
import { Forum, ForumGroup } from '../../lib/ad-sdk/model/forum'
import {
  useActiveForum,
  useForumList,
  useForumListState,
} from '../../store/forumListState'

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
      <ForumItemWarpper group={group} />
    </Box>
  )
}

const ForumItemWarpper: React.FC<FGProps> = ({ group }) => {
  return (
    <Box>
      {group.forums.map((forum) => (
        <ForumItem key={forum.id} forum={forum} />
      ))}
    </Box>
  )
}

interface FIProps {
  forum: Forum
}
const ForumItem: React.FC<FIProps> = ({ forum }) => {
  const state = useForumListState()
  return (
    <Text key={forum.id} onClick={() => state.active(forum.id)}>
      {forum.name}
    </Text>
  )
}

export const ActiveForum: React.FC = () => {
  const activeF = useActiveForum()
  return <Text>active forum is {activeF?.name}</Text>
}
