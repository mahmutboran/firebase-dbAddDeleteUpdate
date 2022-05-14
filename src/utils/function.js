
//!Database bilgi ekleme,bilgiyi silme,bilgiyi alma

import firebase from "./firebase"

import { getDatabase, ref, set, push, onValue, remove,update } from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toast";



//!data ekleme
export const AddUser = (info) => {

    //const database = getDatabase();
    const db = getDatabase();
    console.log(db)
    const userRef = ref(db, "bilgiler")
    const newUserRef = push(userRef)
   /*     set((newUserRef),{
           username:info.username,
           phoneNumber:info.phoneNumber,
           gender:info.gender
   
       }) */
    set(newUserRef, info)

}

//!data çekme

//!costum hook olduğu için isim use ile başlamak zorun da 
//!use... gibi


export const useData = () => {
    const [isLoading, setIsLoading] = useState()
    const [contactList, setContactList] = useState()
    useEffect(() => {
        setIsLoading(true)
        const db = getDatabase();
        console.log(isLoading)
        const userRef = ref(db, "bilgiler")

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();

            const bilgilerArray = [];

            for (let id in data) {
                bilgilerArray.push({ id, ...data[id] })
            }
            setContactList(bilgilerArray)
            setIsLoading(false)
        });

    }, [])

    return {isLoading,contactList}

}

//!data silme

export const userDelete = (id) =>{
    const db = getDatabase();
    //const userRef = ref(db, "bilgiler")

    remove(ref(db,"bilgiler/"+id))

    Toastify("Kullanıcı Bilgisi silindi")

}

//!data EDİT

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};
    updates["bilgiler/"+info.id]=info;
    return update(ref(db),updates)

}