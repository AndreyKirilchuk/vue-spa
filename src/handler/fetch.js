async function Response(response)
{
    if(response.status >= 200 && response.status <= 300)
    {
        return (await response.json()).data;
    }
    else if(response.status >= 400 && response.status <= 500)
    {
        const data = (await response.json()).data;
        let message = [];

        if(data.message)
        {
            message.push(data.message);
        }

        if(data.errors)
        {
            message.push(Object.values(data.errors));
        }

        const id = Math.random().toString(36);
        document.body.insertAdjacentHTML("beforeend", `<div class="notify" id="${id}">${message.join("<br />")}</div>`)

        const el = document.getElementById(id)

        setTimeout(() => {
            el.classList.add('active')
            setTimeout(() => {
                el.classList.remove('active')
                setTimeout(() => el.remove(), 1000);
            }, 3000)
        }, 100)

    }
    else{
        alert("Server error!");
    }
}

export default async function $fetch(path, method = "get", body = null)
{
    const url = new URL("http://host/api" + path);

    const headers = { "Authorization": `Bearer ${localStorage.getItem('token')}`}

    if(!body || method === "get")
    {
        url.search = new URLSearchParams(body ?? {}).toString();

        return await Response(await $fetch(url, {method, headers}));
    }

    return await Response(await $fetch(url, {method, body, headers}));
}