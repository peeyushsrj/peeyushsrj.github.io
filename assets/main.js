document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.category-btn');
  const postsContainer = document.getElementById('posts-container');

  function setActive(btn) {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function renderPosts(posts) {
    if (!posts.length) {
      postsContainer.innerHTML = '<p>No posts found in this category.</p>';
      return;
    }
    postsContainer.innerHTML = '<ul class="more-space">' +
      posts.map(post => `
        <li>
          <b>${post.date}</b> - 
          <a class="post-link" href="${post.url}">${post.title}</a>
        </li>
      `).join('') + '</ul>';
  }

  function loadCategory(category) {
    postsContainer.innerHTML = '<p>Loading...</p>';
    fetch(`/assets/${category}.json`)
      .then(res => res.json())
      .then(renderPosts)
      .catch(() => {
        postsContainer.innerHTML = '<p>Failed to load posts.</p>';
      });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      setActive(btn);
      loadCategory(btn.getAttribute('data-category'));
    });
  });

  // Automatically click the 'Softwares' tab on page load
  const defaultBtn = Array.from(buttons).find(btn => btn.getAttribute('data-category') === 'Solutions');
  if (defaultBtn) {
    defaultBtn.click();
  }
}); 