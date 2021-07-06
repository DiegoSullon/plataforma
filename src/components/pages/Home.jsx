import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organisms/Publication'
function Home({ posts }) {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])
  let f = new Date("December 17, 1995 03:24:00")
  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://edteam-media.s3.amazonaws.com/community/original/cc313af7-e8ae-4850-b021-3509071b304f.jpg",
          alt: "Banner Especialidades"
        }}
        title="Bienvenido a la experiencia mas increible de la educación online"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi obcaecati adipisci repudiandae assumenda a tempora laboriosam deleniti dolor earum rerum, in culpa ut!"
        poster="https://edteam-media.s3.amazonaws.com/blogs/original/05ebfada-ca24-4d09-94e2-8a77aa63ee13.jpg"
        home
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          <div>
            <p>No hay nuevas actualizaciones {f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()}</p>
          </div>
        </div>
        <div> 
          <h3>Lista de categorias</h3>
          <ul className="feature-list">
            <li><span>React.Js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => (
  {
    posts: state.postReducer.posts
  }
)

export default connect(mapStateToProps, {})(Home)
