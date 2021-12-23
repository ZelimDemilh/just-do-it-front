import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {uploadCategories} from "../../../store/categoriesSlice";
import {uploadTasks} from "../../../store/taskSlice";

const OneTask = () => {
  const dispatch = useDispatch()
  const task = useSelector((state) => state.task.task);
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(uploadCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(uploadTasks());
  }, [dispatch]);

  const { id } = useParams();

  const singleTaskCategory = task.filter(item => {
    if (id === item._id) {
      return item
    }
  })

  return (
    <div className="container w-75 mb-5">
      <div className="row justify-content-between">
        <div className="col-7 border border-dark rounded-3 pt-4 pb-4">
          <div className="row justify-content-between">
            <div className="col">
              {task.map((item) => {
                if (item._id === id) {
                  return <h2>{item.header}</h2>;
                }
              })}
              {categories.map((item) => {
                if (task.category === item._id) {
                  return <p>{categories.name}</p>;
                }
              })}
            </div>
            <div className="col-2">Дата</div>
          </div>
          <hr />
          <div>
            {task.map((item) => {
              if (item._id === id) {
                return <p>{item.description}</p>;
              }
            })}
          </div>
          <div className="row mb-3 mt-5 text-center">
            <div className="col">
              <button className="btn btn-success">
                Откликнуться
              </button>
            </div>
            <div className="col">
              <button className="btn btn-danger">
                Выход
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 border border-dark rounded-3 pt-4 pb-4">
          <div className="text-center mb-4">
            <h2>Задания из той же категории</h2>
          </div>
          <hr />
          <div className="tasks">
            {task.map((taskItem, index) => {
              if (taskItem.category === singleTaskCategory[0].category && taskItem._id !== singleTaskCategory[0]._id  && index < 6) {
                return (
                    <div className="row">
                      <div className="col">
                        <div>
                          <h6>{taskItem.header}</h6>
                        </div>
                        <div>{taskItem.price}</div>
                      </div>
                      <div className="col text-end">
                        <div>
                          <button className="btn btn-success">
                            Перейти
                          </button>
                        </div>
                      </div>
                      <hr/>
                    </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTask;
