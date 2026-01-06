<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const meshRef = shallowRef(null as any)
const innerRef = shallowRef(null as any)
const mouse = useMousePosition()

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (meshRef.value) {
    meshRef.value.rotation.y = elapsed * 0.2 + mouse.x.value * 1
    meshRef.value.rotation.x = mouse.y.value * 0.5
  }
  if (innerRef.value) {
    innerRef.value.rotation.y = -elapsed * 0.5
    innerRef.value.scale.setScalar(1 + Math.sin(elapsed) * 0.1)
  }
})
</script>

<template>
  <TresGroup>
    <TresPerspectiveCamera :position="[0, 0, 7]" :fov="45" :look-at="[0,0,0]" />
    <!-- <TresAmbientLight :intensity="2" /> -->
    <TresDirectionalLight :position="[2, 2, 5]" :intensity="3" color="#ffffff" />
    <TresDirectionalLight :position="[-2, -2, 2]" :intensity="1" color="#0079ff" />

    <!-- Outer Glass Shell -->
    <TresMesh ref="meshRef">
      <TresIcosahedronGeometry :args="[2.5, 2]" />
      <TresMeshPhysicalMaterial 
        :color="0x0079ff"
        :roughness="0.1"
        :metalness="0.5"
        :transmission="0.6"
        :thickness="1.5"
        :clearcoat="1"
        wireframe
        transparent
        :opacity="0.8"
      />
    </TresMesh>

    <!-- Inner Core -->
    <TresMesh ref="innerRef">
      <TresIcosahedronGeometry :args="[1.2, 0]" />
      <TresMeshStandardMaterial 
        :color="0xffffff"
        :emissive="0x0079ff"
        :emissive-intensity="2"
        :roughness="0.4"
        :metalness="0.8"
      />
    </TresMesh>
  </TresGroup>
</template>
