<template>
    <form class="form" @submit="login">
        <div class="form__item">
            <label for="username" class="form__label">Username</label>
            <input
                id="username"
                type="text"
                :class="['form__field', usernameFieldClass]"
                v-model="usernameField"
                @input.once="resetErrors"
            />
        </div>
        <div class="form__item">
            <label for="password" class="form__label">Password</label>
            <input
                id="password"
                type="password"
                :class="['form__field', passwordFieldClass]"
                v-model="passwordField"
                @input.once="resetErrors"
            />
        </div>
        <Button class="form__btn" body="Log in" />
        <div class="error" v-if="hasError">
            <span class="error__prefix">Error:</span>
            {{ errorMessage }}
        </div>
    </form>
</template>

<script>
import Button from "../components/Button.vue";
import { store } from "../store";

export default {
    name: "Login",
    emits: ['update:authenticated'],
    data() {
        return {
            isUnknownUser: false,
            isWrongPassword: false,
            password: '',
            store,
            username: '',
        };
    },
    components: { Button },
    computed: {
        errorMessage() {
            if (!this.username || !this.password) {
                return 'Both fields are required.'
            } else if (this.isUnknownUser) {
                return 'Unknown user. Please verify your username.'
            } else if (this.isWrongPassword) {
                return 'Wrong password. Try again.'
            } else {
                return ''
            }
        },
        hasError() {
            return this.isUnknownUser || this.isWrongPassword
        },
        passwordField: {
            get() {
                return this.password;
            },
            set(value) {
                this.password = value;
            }
        },
        passwordFieldClass() {
            return this.isWrongPassword ? 'form__field--error' : '';
        },
        usernameField: {
            get() {
                return this.username;
            },
            set(value) {
                this.username = value;
            }
        },
        usernameFieldClass() {
            return this.isUnknownUser ? 'form__field--error' : '';
        }
    },
    methods: {
        isValidPassword(user) {
            if (user.password === this.password) {
                return true;
            } else {
                this.isWrongPassword = true;
                return false;
            }
        },
        isValidUser() {
            const currentUser = this.store.users.find((user) => user.username === this.username);
            if (currentUser) {
                return this.isValidPassword(currentUser);
            } else {
                this.isUnknownUser = true;
                return false;
            }
        },
        login(e) {
            e.preventDefault();

            if (this.isValidUser()) {
                this.$emit('update:authenticated', true);
            }
        },
        resetErrors() {
            this.isWrongPassword = false;
            this.isUnknownUser = false;
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
}

.form__item {
    display: flex;
    flex-flow: column wrap;
    margin: auto;
}

.form__label {
    margin-bottom: 0.2rem;
    font-variant: small-caps;
    cursor: pointer;
}

.form__field {
    padding: 0.8rem 0.5rem;
    border: 1px solid #000;
}

.form__field--error {
    border-color: hsl(0, 100%, 35%);
}

.form__btn {
    margin-top: 1rem;
}

.error {
    margin: 1rem auto;
    padding: 1rem;
    border: 2px solid hsl(0, 100%, 35%);
}

.error__prefix {
    font-weight: 600;
}
</style>
