<template>
    <div class="image-gallery">
      <div class="row">

        <div
          v-for="(image, index) in images"
          class="col-md-4 col-sm-6 image-gallery--image"
        >
            <img class="margin-bottom"
                 @click="show(index)"
                 :src="image.src"
                 :alt="image.alt ? image.alt : 'Gallery Image'">

        </div>

      </div>

      <VueEasyLightbox
        ref="lightbox"
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="hide"
      />

    </div>
</template>

<script src="./Gallery.impl.ts" lang="ts"></script>

<style>
  .image-gallery--image {
    cursor: pointer;
  }
</style>
