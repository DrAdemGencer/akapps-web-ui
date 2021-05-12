import React from "react"
import { Container } from "reactstrap"
import TheTitle from "pages/UI/TheTitle"

const Archive = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <TheTitle title="Faaliyet arşivi" />
        <Container fluid>

          <h3>Faaliyet arşivi</h3>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Archive