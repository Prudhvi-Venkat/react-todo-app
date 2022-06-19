export function addTodo(description) {
    return {
        type: "ADD_TODO",
        payload: description
    };
}

export function editTodo(id, status, description) {
    return {
        type: "EDIT_TODO",
        payload: description, status, id
    };
}

export function toggleTodo(id, status) {
    return {
        type: "TOGGLE_TODO",
        payload: id, status
    };
}

export function deleteTodo(id) {
    return {
        type: "DELETE_TODO",
        payload: id
    };
}