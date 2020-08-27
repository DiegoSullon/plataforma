import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import Teacher from '../Organisms/Teacher';

const Teachers = ({ match, teachers }) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])
  // match: como valor que no cambiará
  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://edteam-media.s3.amazonaws.com/community/original/cc313af7-e8ae-4850-b021-3509071b304f.jpg",
          alt: "Banner profesores"
        }}
        title="Nuestros Profesores"
        subtitle="Este plantel de docentes está altamente calificado para guiarte en tu aprendizaje"
      />

      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(t => (
              <Teacher key={t.id} img={t.picture} name={t.name} country={t.country}/>
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => (
  {
    teachers: state.teacherReducer.teachers
  }
)

export default connect(mapStateToProps, {})(Teachers)
