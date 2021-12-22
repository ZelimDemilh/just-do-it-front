import React, { useEffect } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
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
    <Container>
      {myTasks.reverse().map((task, index) => (
        <Card className="my-2 w-75 m-auto" key={task._id}>
          <Card.Header as="h6">
            {`#${index + 1} 
            ${task.header}`}
          </Card.Header>
          <Card.Body>
            <Card.Text>{task.description}</Card.Text>
            <div className="text-end">
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
      ))}
    </Container>
  )
}

export default MyTasks
