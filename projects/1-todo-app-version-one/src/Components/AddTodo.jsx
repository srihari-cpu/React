function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row sh-row">
        <div class="col-sm-5">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-sm-4">
          <input type="date" />
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success  sh-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
