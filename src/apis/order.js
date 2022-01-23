import api from "./api";

const getOrders = async () => {
    const datas = await api({
        method: "GET",
        url: "/api/orders",
    });

    return datas;
};

const updateItem = async (payload) => {
    const datas = await api({
        method: "PUT",
        url: "/sv_3/items/" + payload.id,
        data: payload.data,
    });

    return datas;
};

const deleteOrder = async (payload) => {
    const datas = await api({
        method: "DELETE",
        url: "/sv_4/orders/" + payload,
    });
    return datas;
};


export { getOrders, updateItem, deleteOrder };
