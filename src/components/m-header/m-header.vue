<template>
    <div class="m-header">
      <div class="icon"></div>
      <div class="text">Chicken Music</div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/sass/variable.scss";
  @import "../../common/sass/mixin.scss";

  .m-header{
    position: relative;
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
    .icon{
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      @include bg-image('logo');
      background-size: 30px 32px;
    }

    .text{
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
    }
  }

</style>
