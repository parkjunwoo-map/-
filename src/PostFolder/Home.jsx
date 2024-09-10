import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePosts from "./UsePosts";

function Home() {
    const { posts } = usePosts();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    return (
        <div>
            <Link to={`/addpassword`}>
                <button>게시글 생성</button>
            </Link>
            {loading ? (
                <p>게시글을 불러오는 중입니다...</p>
            ) : posts.length > 0 ? (
                posts.map((post,index) => (
                    <Link
                        key={index}
                        to={`/post/${post.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <h3>{post.title}</h3>
                    </Link>
                ))
            ) : (
                <p>게시글이 없습니다.</p>
            )}
        </div>
    );
}

export default Home;