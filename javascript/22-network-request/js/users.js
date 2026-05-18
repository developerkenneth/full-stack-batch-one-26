const grid = document.querySelector(".grid");

fetch("files/users.json").then(response => {
    return response.json();
}).then(data => {

    let content = "";
    data.users.forEach((user, index) => {
        content += `
                <div class="grid-item">
                    <div class="user-card">
                        <!-- image -->
                        <img src="https://i.pravatar.cc/150?img=${index}" alt="user image" class="user-image">
                        <p>${user.name}</p>
                        <div class="user-details">
                            <span class="role">Role: ${user.role}</span>
                            <span>Age:${user.age}</span>
                        </div>


                    </div>
                </div>
            `
    });
    grid.innerHTML = content;

}).catch(err => {
    console.error(`error: ${err}`);
}).finally(() => {
    console.log("data has been fetch successfully");
})