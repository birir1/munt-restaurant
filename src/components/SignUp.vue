<template>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter Your Username" />
        <input type="text" v-model="email" placeholder="Enter Your Email" />
        <input type="password" v-model="password" placeholder="Enter Your Password" />
        <button @click="SignUp">Sign Up</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            username: '', // Field for username
            email: '',
            password: ''
        };
    },
    methods: {
        async SignUp() {
            try {
                let result = await axios.post("http://localhost:3000/user", { // POST request to /user endpoint
                    email: this.email,
                    password: this.password,
                    username: this.username // Correct field names
                });

                console.warn(result);

                if (result.status === 201) {
                    alert("Sign-Up Successful");
                    // Save user info only on successful sign-up
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    // Redirect to HomeView
                    this.$router.push({ name: 'HomeView' });
                } else {
                    alert("Sign-Up Failed: " + result.statusText);
                }
            } catch (error) {
                console.error("There was an error!", error);
                alert("Sign-Up Failed: " + error.message);
            }
        }
    }
};
</script>

<style>
.logo {
    width: 100px;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>
