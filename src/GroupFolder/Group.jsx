import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

function Group({ groups, posts }) {
  const { groupName } = useParams();
  const group = groups.find(g => g.name === groupName);

  // useMemo로 불필요한 재렌더링 방지
  const groupPosts = useMemo(() => {
    return posts.filter(post => post.group === groupName);
  }, [posts, groupName]);  // posts와 groupName이 변경될 때만 필터링

  return (
    <div>
      <h1>{group?.name} 그룹 페이지</h1>
      <p>{group?.description}</p>

      <h2>게시글 목록</h2>
      <ul>
        {groupPosts.length > 0 ? (
          groupPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>  {/* 게시글 제목 클릭 시 상세 페이지로 이동 */}
            </li>
          ))
        ) : (
          <p>아직 게시글이 없습니다.</p>
        )}
      </ul>

      <Link to={`/group/${groupName}/addpassword`}>
        <button>게시글 생성</button>
      </Link>

      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}

export default Group;