import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionCreators'
import Banner from '../Organisms/Banner'

const Course = ({ course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
    console.log("Asdasdasd");
  }, [])

  return (
    <>
      {course &&
        <>
          <Banner
            color="dark-color"
            title={course.name}
            subtitle={course.subtitle}
            info={course.information}
            image={{
              src: "https://edteam-media.s3.amazonaws.com/community/original/cc313af7-e8ae-4850-b021-3509071b304f.jpg",
              alt: course.name
            }}
            // poster={course.picture}
            poster="https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
            courseBanner
            speciality={course.data.specialities[0].name}

          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                <div>
                  <h3 className="t4">¿Qué aprenderás?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>
                <div>
                  <h3 className="t4">Conocimientos previos</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.requirements }} />
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <div className="course-fectures"></div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl => (
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul className="feature-list">
                        {
                          cl.subjects.map(s => (
                            <li>{s.subject.title}</li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3">
              <h2 className="t3">Profesor</h2>
              <p>Beto Quiroga</p>
            </div>
          </main>

        </>
      }
    </>
  )
}

const mapStateToprops = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToprops, {})(Course)
