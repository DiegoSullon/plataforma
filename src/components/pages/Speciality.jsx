import React, { useEffect } from 'react'
import store from '../../redux/store'
import { getSpeciality } from '../../redux/actionCreators'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'

const Speciality = ({ speciality }) => {

  useEffect(() => store.dispatch(getSpeciality(1)), [])

  return (
    <>
      {
        speciality &&
        <>
          <Banner
            color="dark-color"
            title={speciality.data.name}
            subtitle={speciality.data.subtitle}
            info={speciality.data.information}
            image={{
              src: "https://edteam-media.s3.amazonaws.com/community/original/cc313af7-e8ae-4850-b021-3509071b304f.jpg",
              alt: speciality.data.name
            }}
            // poster={speciality.data.picture}
            poster="https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
            courseBanner
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                <div>
                  <h3 className="t4">¿Qué aprenderás?</h3>
                  <ul>
                    {speciality.data.abilities.map(a => (
                      <li key={a.id}>{a.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Conocimientos previos</h3>
                  <ul>
                    {speciality.data.knowledge.map(a => (
                      <li key={a.id}>{a.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <div className="course-fectures"></div>
              <h2>Temario de la especialidad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  speciality.data.courses.map(cl => (
                    <div className="course-class l-section" key={cl.id}>
                      <div className="Ed-grid m-grid-3">
                        <img src={cl.picture} alt={cl.name} />
                        <div className="m-cols-2">
                          <h3>{cl.name}</h3>
                          <p>{cl.information}</p>
                        </div>
                      </div>
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

const mapStateToProps = state => ({
  speciality: state.specialityReducer.speciality
})

export default connect(mapStateToProps, {})(Speciality)
