let divmenu = document.createElement("div");
let divcont = document.createElement("div");
divmenu.classList.add("divmenu");
divcont.classList.add("divcont");
let userid;

const validateuser = async () => {
    userid = txtuserid.value;
    username.innerHTML = await getName(userid);
    container.innerHTML = "";
    let str = `
        <p onclick='showdata(1)'><i class="bi bi-bookmarks-fill"></i>Feeds [All]</p>
        <p onclick='showdata(2)'><i class="bi bi-file-earmark-post-fill"></i>My Post</p>
        <p onclick='showdata(3)'><i class="bi bi-journal-album"></i>My Albums</p>
        <p onclick='showdata(4)'><i class="bi bi-person"></i>My Profile</p>
        <p onclick='showdata(5)'><i class="bi bi-door-open"></i>LogOut</p>`;

    divmenu.innerHTML = str;
    container.append(divmenu);
    divcont.innerHTML = await getfeeds();
    container.append(divcont);
};

const getfeeds = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const json = await fetchData(url);
    let str = "<div><h2>Feeds [All Posts]</h2>";
    json.map((element) => {
        str += `<p><b>user:</b>${element.userId}</p>
        <p><b>Title:</b>${element.title}</p>
        <p><b>Body:</b>${element.body}</p>
        <p onclick="getcomments(${element.id})">View Comments</p>
        <hr>`;
    });
    str += "</div>";
    return str;
};

const getName = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userid}`;
    const json = await fetchData(url);
    return json.name;
};

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};
const showdata = async(pageId) => {
    if (pageId === 1) {
        divcont.innerHTML = await getFeeds();
    } else if (pageId === 2) {
        divcont.innerHTML = await getPosts();
    } else if (pageId === 3) {
        divcont.innerHTML = await getAlbums();
    } else if (pageId === 4) {
        divcont.innerHTML = await getProfile();
    } else if (pageId === 5) {
        location.reload();
    }
};