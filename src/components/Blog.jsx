import { CenteredTitle } from './SectionHeading.jsx'
import { POSTS } from '../data.js'

export default function Blog() {
  return (
    <div className="site-section" id="blog-section">
      <div className="container">
        <CenteredTitle>Blog Posts</CenteredTitle>
        <div className="row">
          {POSTS.map((post) => (
            <div key={post.image} className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src={post.image} alt={post.alt} className="img-fluid" loading="lazy" width="500" height="300" />
                <h2><a href="#">{post.title}</a></h2>
                <div className="meta mb-4">
                  {post.author} <span className="mx-2">&bull;</span> {post.date}<span className="mx-2">&bull;</span> <a href="#">{post.category}</a>
                </div>
                <p>{post.excerpt}</p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
