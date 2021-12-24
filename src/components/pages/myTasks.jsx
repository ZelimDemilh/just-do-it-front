import React, { useEffect } from "react"
import { Badge, Button, Card, Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { uploadCategories } from "../../store/categoriesSlice"
import { deleteTask, uploadTasks } from "../../store/taskSlice"

const MyTasks = () => {
  const dispatch = useDispatch()

  const userDate = useSelector((state) => state.signIn.userDate)
  const myTasks = useSelector((state) =>
    state.task.task.filter((task) => task.user === userDate._id)
  )

  useEffect(() => {
    dispatch(uploadTasks())
  }, [dispatch])
  useEffect(() => {
    dispatch(uploadCategories())
  }, [dispatch])

  const handleDeleteTask = (id) => dispatch(deleteTask(id))

  return (
    <>
      <Helmet>
        <title>Мои объявлении</title>
      </Helmet>
      <Container>
        {myTasks.length === 0 ? (
          <div className="container text-center my-5">
            <h2>У вас нет объявлений</h2>
            <Link to="/addTask" className="btn btn-danger my-2" type="button">
              Создать объявление
            </Link>
          </div>
        ) : (
          myTasks.reverse().map((task, index) => (
            <Card className="my-2 w-75 m-auto" key={task._id}>
              <Card.Header as="h6">
                {`#${index + 1} 
            ${task.header}`}
              </Card.Header>
              <Card.Body>
                <Card.Text>{task.description}</Card.Text>
                <div className="text-end">
                  <Badge pill bg="info"></Badge>
                    <NavLink
                        to={`/${task._id}/candidates`}
                        className="btn btn-success me-1 p-1"
                        size="sm"
                    >Выбрать исполнителя
                    </NavLink>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    Удалить
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </>
  )
}

export default MyTasks
