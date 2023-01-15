const url = "https:/www.reddit.com/r/aww/.json";
const searchForm = document.querySelector(".search");

fetch(url)
  .then((res) => res.json())
  .then(createPosts);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const subreddit = document.querySelector("input").value;
  const url = `https://www.reddit.com/r/${subreddit}/.json`;

  fetch(url).then(createPosts);
});

function createPosts(data) {
  document.body.removeChild(document.querySelector(".posts"));

  const posts = data.data.children;
  const postsContainer = document.createElement("div");
  postsContainer.classList.add("posts");

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const img = document.createElement("img");
    const title = document.createElement("p");
    const link = document.createElement("a");

    // Image
    img.setAttribute("src", post.data.thumbnail);
    img.classList.add("thumbnail");

    // Title
    title.innerText = post.data.title;
    title.classList.add("title");

    // Link
    link.setAttribute("href", `https://www.reddit.com${post.data.permalink}`);
    link.setAttribute("target", "_blank");
    link.innerText = "View post";
    link.classList.add("link");

    postDiv.appendChild(img);
    postDiv.appendChild(title);
    postDiv.appendChild(link);

    postsContainer.appendChild(postDiv);
  });

  document.body.appendChild(postsContainer);
  console.log(posts);
}
