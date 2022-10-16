<template>
  <v-app>
    <h1 class="text-center">Chats</h1>
    <v-card
    v-for="item of messages"
    :key="item.id"
      width="300"
      class="mb-3"
      theme="dark"
      :subtitle="item.displayName"
      :text="item.text"
      :class="item.uid === userChat.uid && 'ml-auto'"
      :color="item.uid === userChat.uid ? 'success' : '#555'"
      
    >
    </v-card>
   
  </v-app>
</template>

<script setup>
import { ref } from "@vue/reactivity";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase";

const userChat = ref(auth.currentUser)

const messages = ref([]);

const q = query(collection(db, "chats"),orderBy("time"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      //console.log("Message", change.doc.id , change.doc.data());
       messages.value.push({
        id: change.doc.id,
        ...change.doc.data()
       })
    }
  });
});

</script>