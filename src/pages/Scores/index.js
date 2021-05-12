import React from "react"
import { Container } from "reactstrap"
import TheTitle from "pages/UI/TheTitle"

const Scores = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <TheTitle title="Puan hesaplama" />
        <Container fluid>

          <h3>Puan hesaplama</h3>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Scores