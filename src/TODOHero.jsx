const TODOHero = ( { todos_completed, total_todos } ) => {
    return(
        <section>
            <div>
                <div>
                    <p>Task Done</p>
                    <p>Keep it up</p>
                </div>
                <div>
                    {todos_completed}/{total_todos}
                </div>
            </div>
        </section>
    );
}

export default TODOHero;