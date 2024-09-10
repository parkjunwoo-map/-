import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Groups from "./Groups";  // 그룹 목록
import Group from "./Group";  // 그룹 페이지
import CreateGroup from "./CreateGroup";  // 그룹 생성
import AddPW from "../PostFolder/AddPW";  // 비밀번호 확인
import InputPost from "../PostFolder/InputPost";  // 게시글 입력
import PostDetail from "../PostFolder/PostDetail";  // 게시글 상세
import UsePosts from "../PostFolder/UsePosts";  // 게시글 관리 훅

function App() {
  const getInitialGroups = () => {
    const storedGroups = localStorage.getItem("groups");
    return storedGroups ? JSON.parse(localStorage.getItem("groups")) : [];
  };

  const [groups, setGroups] = React.useState(getInitialGroups);
  const { posts, addPost, deletePost } = UsePosts();  // 게시글 관리 훅

  React.useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const deleteGroup = (groupName) => {
    const updatedGroups = groups.filter(group => group.name !== groupName);
    setGroups(updatedGroups);
  };

  return (
    <Router>
      <Switch>
        {/* 그룹 관리 라우트 */}
        <Route exact path="/" component={() => <Groups groups={groups} onDelete={deleteGroup} />} />
        <Route exact path="/create" component={() => <CreateGroup onCreate={addGroup} />} />
        <Route exact path="/group/:groupName" component={() => <Group groups={groups} posts={posts} />} />

        {/* 게시글 관리 라우트 */}
        <Route exact path="/group/:groupName/addpassword" component={AddPW} />
        <Route exact path="/group/:groupName/createpost/:id" component={() => <InputPost addPost={addPost} />} />
        <Route exact path="/post/:id" component={() => <PostDetail posts={posts} />} />
      </Switch>
    </Router>
  );
}

export default App;