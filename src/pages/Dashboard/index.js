import React from "react"
import { Container } from "reactstrap"
import TheTitle from "pages/UI/TheTitle"

const Dashboard = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <TheTitle title="Giriş" />
        <Container fluid>

        <h3>Giriş</h3>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
