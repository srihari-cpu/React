function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "14/10/2023";
  return (
    <div class="container">
      <div class="row sh-row">
        <div class="col-sm-5">{todoName}</div>
        <div class="col-sm-4">{todoDate}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger sh-button item-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
