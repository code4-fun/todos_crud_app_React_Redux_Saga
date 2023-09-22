export const getUserPosts = async userId => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  return await res.json()
}
