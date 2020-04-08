<template>
    <div :class="$style.wrapper">
        should be bordered in red
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" module> /* Works fine with [ lang="css" ] but not [ lang="scss" ] */
.wrapper {
    border: 1px solid red;
}
</style>
