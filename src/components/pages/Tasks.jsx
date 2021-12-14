import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CardTask from "../cardTask";
import Form from 'react-bootstrap/Form'
import {uploadCategories} from "../../store/categoriesSlice";

const Tasks = () => {
    const tasks = useSelector(state => state.task.task)

    const [search, setSearch] = useState({})

    const handleSearch = {
        setHeader: (text) => {
            setSearch({...search, header: text})
            console.log(search)
        }
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(uploadCategories())
    }, [dispatch])

    return (
        <div className="container p-2">
            <div className="w-50 m-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control placeholder="Введите название" onChange={(e) => handleSearch.setHeader(e.target.value)}/>
                </Form.Group>
            </div>
            <div className="w-75">
                {tasks.map((task) => {
                    return <CardTask task={task}/>
                })}
            </div>
        </div>
    );
};

export default Tasks;