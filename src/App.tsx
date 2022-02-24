import { Flex } from 'rebass'
import { ActiveForum, ForumListView } from './view/sideBar/ForumList'

function App() {
  return (
    <div className="App">
      <Flex>
        <ForumListView />
        <ActiveForum />
      </Flex>
    </div>
  )
}

export default App
