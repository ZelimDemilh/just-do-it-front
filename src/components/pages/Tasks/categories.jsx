import React, { useEffect, useState } from 'react';
// import img from './assets/arrow.png'
import cl from './tasks.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { uploadTasks } from '../../../store/taskSlice';
import { uploadCategories } from '../../../store/categoriesSlice';
import { useParams } from 'react-router-dom';

const TasksCategories = () => {

    const tasks = useSelector(state => state.task.task)
    const categories = useSelector(state => state.categories.categories)
    const preloader = useSelector(state => state.task.pending)

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {dispatch(uploadTasks())}, [dispatch])
    useEffect(() => {dispatch(uploadCategories())}, [dispatch])

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const filteredTasks = tasks.filter((task) => {
        return task.header.toLowerCase().includes(text.toLowerCase())
    })

    const { id } = useParams()

    if (preloader) {
        return (    <div>
                <header id="top">
                </header>
                <div className="">

                </div>
                <div className="row">
                    <div className="map col-3">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d0b3f0796e7a4765c711545cdc89dbc593eaccf0b4c516af67bb4f6b3bc726d&amp;source=constructor"
                            width="245" height="245" frameBorder="0" className="
            border border-dark rounded mx-1 mb-1
            shadow
            "/>
                        <div className="border border-dark rounded mx-1 col-8">
                            <nav className="nav flex-column text-center">
                                <b className="mt-2">Категории</b>
                                <hr/>
                                {categories.map((item) => {
                                    return(<>
                                            <a className="text-dark my-2" href={`/tasks/${item._id}`}>{item.name}</a>
                                            <hr/>
                                        </>
                                    )
                                })}
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mb-5" >
                            <input type="text" className="form-control" placeholder="Напишите с чем вам нужна помощь"
                                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-danger" type="button">Найти</button>
                            </div>
                        </div>
                        <div className={cl.loader}></div>
                    </div>
                    <div className="col-1">
                        <div className="arrow-block">
                            {/*<a href="#"><img src={img} alt="" width="80" className="arrow"/></a>*/}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div>
            <header id="top">
            </header>
            <div className="">

            </div>
            <div className="row">
                <div className="map col-3">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d0b3f0796e7a4765c711545cdc89dbc593eaccf0b4c516af67bb4f6b3bc726d&amp;source=constructor"
                        width="245" height="245" frameBorder="0" className="
            border border-dark rounded mx-1 mb-1
            shadow
            "/>
                    <div className="border border-dark rounded mx-1 col-8 text-center">
                        <b className="mt-2">Категории</b>
                        <hr/>
                        <a href="/tasks" className="text-decoration-none text-black">Все категории</a>
                        <hr/>
                        {categories.map((item) => {
                            return(<>
                                    <a className="text-dark my-2 text-decoration-none" href={`/tasks/${item._id}`}>{item.name}</a>
                                    <hr/>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group mb-3" >
                        <input type="text" className="form-control"
                               value={text} onChange={(e) => handleChange(e)}
                               placeholder="Напишите с чем вам нужна помощь"
                               aria-label="Напишите с чем вам нужна помощь" aria-describedby="basic-addon2"/>

                    </div>
                    {filteredTasks.map((item) => {
                        if (id === item.category){
                            return(
                                <div className='shadow border border-dark rounded-2 p-4 mt-3' id="task">
                                    <div className="row">
                                        <div className="img col-2">
                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149452.png" alt="" width="50" height="50"/>
                                        </div>
                                        <h3 className="col mt-1">{item.header}</h3>
                                        <div className="col-2">
                                            <h3 className="mb-2">{item.price}₽</h3>
                                            <h6>Имя автора</h6>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        {categories.map((category) => {
                                            if (category._id === item.category){
                                                return (
                                                    <div className="bg-danger text-white text-center rounded-pill col-3 mx-1 pb-1">
                                                        <small className="mx-2">{category.name}</small>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            )}
                    })}
                </div>
                <div className="col-1">
                    <div className="arrow-block">
                        {/*<a href="#"><img src={img} alt="" width="80" className={cl.arrow}/></a>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TasksCategories;