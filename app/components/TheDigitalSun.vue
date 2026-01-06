<script setup lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

const gl = {
  alpha: true,
  shadows: true,
  outputColorSpace: SRGBColorSpace,
  // toneMapping: NoToneMapping,
}
</script>

<template>
  <div class="w-full h-full bg-transparent">
    <TresCanvas v-bind="gl" clear-color="transparent" :antialias="true" :stencil="true" :depth="true" :alpha="true" :premultipliedAlpha="true" :shadowMap="true" :shadowMapType="BasicShadowMap" :toneMapping="NoToneMapping" :toneMappingExposure="1" :physicallyCorrectLights="true" :outputEncoding="SRGBColorSpace" :outputColorSpace="SRGBColorSpace">
       <SunScene />
    </TresCanvas>
  </div>
</template>
