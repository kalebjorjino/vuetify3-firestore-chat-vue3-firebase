<template>
    <v-form class="w-100" @submit.prevent="sendMessage">
        <v-text-field 
        color="success"
        label="Ingrese mensaje aqui"
        variant="outlined"
        hide-details
        append-icon="mdi-send"
        @click:append="sendMessage"
        v-model="message">
        </v-text-field>
    </v-form>
</template>

<script setup>
import { addDoc,collection } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { auth, db } from '../firebase'


const message = ref('')

   const sendMessage = async() => {
       console.log('enviando mensaje' + message.value);
  try {

    // complemento que va ir a la base de datos
      await addDoc(collection(db, 'chats'), {
        text: message.value,
        time: Date.now(),
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName

      })

    message.value = "";
  } catch (error) {

  }
       
   }
</script>
