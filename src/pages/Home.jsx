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
            <div class="px-6 py-1.5 mb-4 border border-blue-600/40 bg-blue-600/10 rounded-full text-lg text-blue-600 font-semibold">
              <p>Login to read posts</p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center text-center space-y-2 my-32">
            <h1 class="md:text-4xl text-2xl font-semibold">
              Never Miss a Blog!
            </h1>
            <p class="md:text-lg text-gray-500/70 pb-8">
              Subscribe to get the latest blog, new tech, and exclusive news.
            </p>
            <form class="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
              <input
                class="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                placeholder="Enter your email id"
                required=""
                type="text"
                fdprocessedid="f5rbgp"
              />
              <button
                type="submit"
                class="md:px-12 px-8 h-full text-white bg-blue-600/80 hover:bg-blue-600 transition-all cursor-pointer rounded-md rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap gap-5">
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
