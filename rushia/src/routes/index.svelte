<script>
  import Card from "../Components/Shared/card.svelte";
  import LoginForm from "../Components/loginForm.svelte";
</script>

<section class="contianer">
  <Card>
    <LoginForm />
  </Card>
</section>

<style lang="scss">
  .contianer {
    display: grid;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 43px);
  }
</style>
