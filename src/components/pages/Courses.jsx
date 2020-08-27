import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Courses = ({ courses }) => {

  useEffect(()=>{
    store.dispatch(getAllCourses())
  },[])

  return (
    <>
      <Banner
        color="firts-color"
        image={{
          src: "https://edteam-media.s3.amazonaws.com/community/original/cc313af7-e8ae-4850-b021-3509071b304f.jpg",
          alt: "Banner Cursos"
        }}
        title="Cursos"
        subtitle="Comienza desde cero a dominar una tecnología"
      />
      {
        courses &&
        <main className="ed-grid m-grid-3">
          {
            courses.map(c => (
              <Card key={c.id} id={c.id} section="cursos" img={c.picture} name={c.name} />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
