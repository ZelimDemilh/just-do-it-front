import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addExecutor, uploadTasks} from "../../store/taskSlice";
import {getUsers} from "../../store/usersSlice";
import {Badge, Button, Card} from "react-bootstrap";
import {uploadCategories} from "../../store/categoriesSlice";

const Candidates = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadTasks())
    }, [dispatch])
    useEffect(() => {
        dispatch(uploadCategories())
    }, [dispatch])
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const { id } = useParams();

    const task = useSelector(state => state.task.task.filter((task) => task._id === id))

    const users = useSelector(state => state.users.users.filter(user => task[0].executor === null? task[0].candidates.indexOf(user._id) !== -1 : task[0].executor === user._id))

    const executor = useSelector(state => state.users.users.filter(user => task[0].executor === user._id))

    const handleExecutor = (idUser) => {
        const formData = {
            idUser,
            id
        }
        dispatch(addExecutor(formData))
    }

    if(users.length === 0){
        return <div className="container"> <p> Пока никто не откликнулся </p></div>
    }

    return (
        <div className="container">
            {users.map((user, index) => {
                return(<Card className="my-2 w-75 m-auto" key={task._id}>
                        <Card.Header as="h6">
                            {`#${index + 1} ${user.firstName} ${user.lastName}`}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>Рейтинг: {user.rating}</Card.Text>
                            <div className="text-end">
                                <Badge pill bg="info"></Badge>
                                {task[0].executor === null?
                                <Button
                                    className="btn btn-success me-1 p-1"
                                    size="sm"
                                    onClick ={()=> handleExecutor(user._id)}
                                >Выбрать
                                </Button>:
                                <Button
                                    className="btn btn-warning me-1 p-1"
                                    size="sm"
                                >Завершить
                                </Button>}
                            </div>
                        </Card.Body>
                    </Card>
                )
                }

            )}
        </div>
    );
};

export default Candidates;