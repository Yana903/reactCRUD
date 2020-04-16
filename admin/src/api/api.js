const url = "http://localhost:3001/posts";

const getPosts = (setPosts) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

const apiAddPost = (post, afterPost) => {
  fetch(url, {
    method: "POST", // или 'PUT'
    body: JSON.stringify(post), // данные могут быть 'строкой' или {объектом}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      afterPost();
      //  setUpdated(!isUpdated);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
  post.title = "";
  post.author = "";
};

const apiDeletePost = (id, afterDelete) => {
  fetch(url + "/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      afterDelete();
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

const apiUpdatePost = (id, updatePost, afterUpdate) => {
  fetch(url + "/" + id, {
    method: "PUT",
    body: JSON.stringify(updatePost),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      afterUpdate();
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

export { getPosts, apiAddPost, apiDeletePost, apiUpdatePost };
