import { ref } from "vue";
export const store = ref({
    user: JSON.parse(localStorage.getItem('user' || false)),
});

export function setUser(user)
{
    localStorage.setItem("user", JSON.stringify(user));
    store.value.user = user;
}