import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col
} from "reactstrap";

function NoticeItem(props) {
  const { notice} = props;
  const noticeSubject = notice.noticeSubject.length>15?notice.noticeSubject.slice(0,15)+'...': notice.noticeSubject;
  return (
      <Col lg="4" md="4" sm="12">
        <Card className="card-stats">
          <CardHeader>
            <CardTitle tag="h4" className="d-flex flex-row">{noticeSubject}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <p className="card-category">{notice.noticeDescription}</p>
          </CardBody>
          <CardFooter>
            <hr />
            <div className="stats">
              <i className="fas fa-sync-alt" />{notice.createdAt}
            </div>
          </CardFooter>
        </Card>
      </Col>
  )
}

export default NoticeItem