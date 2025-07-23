const Form = () => {

    const handleSubmit = () => {
        event.preventDefault();
        event.target.reset();
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                ></input>
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d=""/>
                </svg>
            </button>
        </form>
    );
}

export default Form;