import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from appwriteService on component mount
    appwriteService.getPosts([]).then((response) => {
      if (response && response.documents) {
        setPosts(response.documents);
      }
    });
  }, []);

  return (
    <div className="py-8 bg-gray-100">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
