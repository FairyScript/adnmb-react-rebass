import { proxy, ref } from "valtio";
import { forumListState } from "./forumListState";

const state = proxy({
  fState: ref(forumListState),
  testChange: ()=>{
    console.log('其他的state可以互相引用修改');
    
    state.fState.active(4)
  }
})

export {state as testState}