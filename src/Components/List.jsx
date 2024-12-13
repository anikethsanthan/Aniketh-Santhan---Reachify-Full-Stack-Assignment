import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Base_Url } from "../utils/utils";
import { setTasks, addTask, removeTask } from "../utils/listSlice";

const List = () => {
  const [addedTask, setAddedTask] = useState("");
  const tasks = useSelector((state) => state.list); // Access tasks from Redux store
  const dispatch = useDispatch();

  // Fetch tasks from the backend on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(Base_Url + "/task", { withCredentials: true });
        dispatch(setTasks(data.tasks)); // Assuming `data.tasks` contains the task list
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };
    fetchTasks();
  }, [dispatch]);

  // Handle adding a task
  const handleClick = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.patch(
        Base_Url + "/task/add",
        { task: addedTask },
        { withCredentials: true }
      );
      dispatch(addTask(addedTask)); // Update Redux store
      setAddedTask(""); // Clear input field
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  // Handle deleting a task
  const handleDelete = async (indexToDelete) => {
    const taskToDelete = tasks[indexToDelete]; // Get the task to delete

    try {
      await axios.delete(Base_Url + "/task/del", {
        data: { task: taskToDelete },
        withCredentials: true,
      });
      dispatch(removeTask(indexToDelete)); // Update Redux store
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <div>
      {/* Input */}
      <div className="flex justify-center">
        <input
          value={addedTask}
          onChange={(e) => setAddedTask(e.target.value)}
          type="text"
          placeholder="Enter a task you want to add"
          className="input input-bordered input-info w-1/2 m-4"
        />
        <button onClick={handleClick} className="btn btn-outline m-4">
          Add +
        </button>
      </div>

      {/* Tasks */}
      <div>
        <div className="chat chat-start ml-[300px]">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-bubble w-auto">
            {tasks.length > 0 && (
              <ul className="mb-2">
                {tasks.map((task, index) => (
                  <li key={index}>
                    {task}
                    <button
                      onClick={() => handleDelete(index)}
                      className="m-2 bg-black text-white p-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
