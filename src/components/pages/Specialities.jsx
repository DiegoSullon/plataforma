import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import { getAllSpecialities } from '../../redux/actionCreators';
import store from '../../redux/store'
import Card from '../Organisms/Card';

function Specialities({specialities}) {

  useEffect(()=>{
    store.dispatch(getAllSpecialities())
  },[])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://edteam-media.s3.amazonaws.com/community/original/cc313af7-e8ae-4850-b021-3509071b304f.jpg",
          alt: "Banner Especialidades"
        }}
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
      />
      {
        specialities && Array.isArray(specialities) &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => (
              <Card key={s.id} id={s.id} section="especialidades" img={s.picture} name={s.name} />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps=state=>({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps,{})(Specialities)
