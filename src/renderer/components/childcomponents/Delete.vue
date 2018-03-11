<template>
    <section>
        <button class="button is-primary"
            @click="isComponentModalActive = true">
            Launch modal
        </button>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form></modal-form>
        </b-modal>
    </section>
</template>

<script>
    const ModalForm = {
        template: `
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Caution</p>
                    </header>
                    <section class="modal-card-body">
                    <strong>Are you sure of delete this password? This action cannot be undone.</strong>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button is-primary" @click="$parent.close()">cancel</button>
                        <button class="button is-danger">delete</button>
                    </footer>
                </div>
        `
    }

    export default {
        components: {
            ModalForm,
        },
        data() {
            return {
                isComponentModalActive: false,
            }
        }
    }
</script>
