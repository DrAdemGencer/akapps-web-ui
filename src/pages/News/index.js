import React from "react"
import { Container } from "reactstrap"
import TheTitle from "pages/UI/TheTitle"

const News = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <TheTitle title="Akademik ilanlar" />
        <Container fluid>

          <h3>Akademik ilanlar</h3>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default News