function showContent(event, contentID) {
  const content = document.getElementById(contentID);

  content.classList.toggle('active');
  event.target.classList.toggle('active');
}
