import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/storage";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((res) => {
        const docs = res?.documents || [];
        setPosts(docs);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div >
            <h1 className="text-3xl sm:text-6xl capitalize font-semibold py-2.5 mt-10">
              Your own <span className="font-bold text-blue-500">blogging</span>{" "}
              <br /> platform.
            </h1>
            <p className="text-gray-500 text-sm sm:text-lg font-medium py-3">
              This is your space to think out loud, to share what matters, and
              to write without filters. <br /> Whether it's one word or a
              thousand, your story starts right here.
            </p>
          </div>
          <div className="flex flex-wrap w-full justify-center">
            <div className="px-6 py-1.5 mb-4 border border-blue-600/40 bg-blue-600/10 rounded-full text-lg text-blue-600 font-semibold">
              <p>Login to read posts</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap gap-5 justify-center">
          {posts.map((post) => (
            <div className="p-2 w-[350px]" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
